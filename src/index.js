// Express API server for BJJ Gym Schedule Finder
import express from 'express';
import cors from 'cors';
import { knownGyms, getAllStates } from './gymDatabase.js';
import { findGymsNearLocation, getGymData, generateSampleSchedule } from './scraper.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const scheduleCache = new Map();
const CACHE_TTL = 30 * 60 * 1000;

const locationMap = {
  'los angeles': { lat: 34.0522, lng: -118.2437, state: 'CA' },
  'la': { lat: 34.0522, lng: -118.2437, state: 'CA' },
  'san francisco': { lat: 37.7749, lng: -122.4194, state: 'CA' },
  'new york': { lat: 40.7128, lng: -74.0060, state: 'NY' },
  'nyc': { lat: 40.7128, lng: -74.0060, state: 'NY' },
  'brooklyn': { lat: 40.6782, lng: -73.9442, state: 'NY' },
  'houston': { lat: 29.7604, lng: -95.3698, state: 'TX' },
  'dallas': { lat: 32.7767, lng: -96.7970, state: 'TX' },
  'austin': { lat: 30.2672, lng: -97.7431, state: 'TX' },
  'miami': { lat: 25.7617, lng: -80.1918, state: 'FL' },
  'orlando': { lat: 28.5383, lng: -81.3792, state: 'FL' },
  'tampa': { lat: 27.9506, lng: -82.4572, state: 'FL' },
  'chicago': { lat: 41.8781, lng: -87.6298, state: 'IL' },
  'seattle': { lat: 47.6062, lng: -122.3321, state: 'WA' },
  'denver': { lat: 39.7392, lng: -104.9903, state: 'CO' },
  'phoenix': { lat: 33.4484, lng: -112.0740, state: 'AZ' },
  'atlanta': { lat: 33.7490, lng: -84.3880, state: 'GA' },
  'las vegas': { lat: 36.1699, lng: -115.1398, state: 'NV' },
  'boston': { lat: 42.3601, lng: -71.0589, state: 'MA' },
  'portland': { lat: 45.5152, lng: -122.6784, state: 'OR' },
  'philadelphia': { lat: 39.9526, lng: -75.1652, state: 'PA' },
};

const zipPrefixMap = {
  '90': 'CA', '91': 'CA', '92': 'CA', '93': 'CA', '94': 'CA', '95': 'CA',
  '10': 'NY', '11': 'NY', '12': 'NY', '13': 'NY', '14': 'NY',
  '75': 'TX', '76': 'TX', '77': 'TX', '78': 'TX', '79': 'TX',
  '33': 'FL', '34': 'FL',
  '60': 'IL', '61': 'IL',
  '98': 'WA', '99': 'WA',
  '80': 'CO', '81': 'CO',
  '85': 'AZ', '86': 'AZ',
  '30': 'GA', '31': 'GA',
  '89': 'NV',
  '01': 'MA', '02': 'MA',
  '97': 'OR',
  '19': 'PA',
};

function parseLocation(query) {
  const q = query.toLowerCase().trim();
  const zipMatch = q.match(/^(\d{3,5})/);
  if (zipMatch) {
    const prefix = zipMatch[1].substring(0, 2);
    const state = zipPrefixMap[prefix];
    const cityData = Object.values(locationMap).find(loc => loc.state === state);
    if (state) {
      return {
        lat: cityData?.lat || 39.8283,
        lng: cityData?.lng || -98.5795,
        city: q,
        state: state,
        type: 'zip'
      };
    }
  }
  for (const [cityName, data] of Object.entries(locationMap)) {
    if (q.includes(cityName) || cityName.includes(q)) {
      return { ...data, city: cityName, type: 'city' };
    }
  }
  return { lat: 39.8283, lng: -98.5795, city: 'United States', type: 'unknown' };
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/states', (req, res) => {
  res.json({ states: getAllStates() });
});

app.get('/api/search', async (req, res) => {
  try {
    const { location, radius = 25 } = req.query;
    if (!location) {
      return res.status(400).json({ error: 'Location is required' });
    }
    const locationData = parseLocation(location);
    const radiusMiles = Math.min(Math.max(parseInt(radius), 5), 100);
    const nearbyGyms = await findGymsNearLocation(locationData.lat, locationData.lng, radiusMiles);
    res.json({ location: locationData, radius: radiusMiles, count: nearbyGyms.length, gyms: nearbyGyms });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Failed to search gyms' });
  }
});

app.post('/api/gyms/schedules', async (req, res) => {
  try {
    const { gymIds } = req.body;
    if (!gymIds || !Array.isArray(gymIds)) {
      return res.status(400).json({ error: 'gymIds array is required' });
    }
    const results = [];
    for (const gymId of gymIds) {
      const gym = knownGyms.find(g => g.id === gymId);
      if (!gym) continue;
      const cached = scheduleCache.get(gymId);
      const isCacheValid = cached && (Date.now() - cached.timestamp) < CACHE_TTL;
      if (isCacheValid) {
        results.push(cached.data);
      } else {
        const gymData = await getGymData(gym);
        scheduleCache.set(gymId, { data: gymData, timestamp: Date.now() });
        results.push(gymData);
      }
    }
    res.json({ gyms: results });
  } catch (error) {
    console.error('Schedules error:', error);
    res.status(500).json({ error: 'Failed to fetch schedules' });
  }
});

app.get('/api/gym/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const gym = knownGyms.find(g => g.id === id);
    if (!gym) {
      return res.status(404).json({ error: 'Gym not found' });
    }
    const cached = scheduleCache.get(id);
    const isCacheValid = cached && (Date.now() - cached.timestamp) < CACHE_TTL;
    if (isCacheValid) {
      return res.json(cached.data);
    }
    const gymData = await getGymData(gym);
    scheduleCache.set(id, { data: gymData, timestamp: Date.now() });
    res.json(gymData);
  } catch (error) {
    console.error('Gym error:', error);
    res.status(500).json({ error: 'Failed to fetch gym data' });
  }
});

app.get('/api/gyms', async (req, res) => {
  try {
    const gymsWithDistance = knownGyms.map(gym => ({ ...gym, website: undefined }));
    res.json({ count: gymsWithDistance.length, gyms: gymsWithDistance });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch gyms' });
  }
});

app.post('/api/admin/clear-cache', (req, res) => {
  scheduleCache.clear();
  res.json({ message: 'Cache cleared' });
});

app.listen(PORT, () => {
  console.log(`BJJ Schedule API running on port ${PORT}`);
});
