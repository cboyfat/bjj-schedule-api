// Express API server for BJJ Gym Schedule Finder
// MINIMAL VERSION - No scraping dependencies
import express from 'express';
import cors from 'cors';
import { knownGyms, realSchedules, getAllStates } from './gymDatabase.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Haversine formula for distance calculation
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 3959;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Default sample schedule for gyms without real data
function getSampleSchedule() {
  return {
    monday: [
      { id: 'mon-1', name: 'Morning Fundamentals', startTime: '06:00', endTime: '07:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'mon-2', name: 'Gi Training', startTime: '09:00', endTime: '10:30', classType: 'gi', difficulty: 'all-levels' },
      { id: 'mon-3', name: 'No-Gi Grappling', startTime: '12:00', endTime: '13:00', classType: 'no-gi', difficulty: 'intermediate' },
      { id: 'mon-4', name: 'Evening Fundamentals', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'mon-5', name: 'Advanced No-Gi', startTime: '19:15', endTime: '20:45', classType: 'no-gi', difficulty: 'advanced' }
    ],
    tuesday: [
      { id: 'tue-1', name: 'Morning No-Gi', startTime: '06:00', endTime: '07:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'tue-2', name: 'Gi Fundamentals', startTime: '09:00', endTime: '10:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'tue-3', name: 'Open Mat', startTime: '12:00', endTime: '14:00', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'tue-4', name: 'Gi Training', startTime: '18:00', endTime: '19:30', classType: 'gi', difficulty: 'intermediate' },
      { id: 'tue-5', name: 'Wrestling', startTime: '19:45', endTime: '20:45', classType: 'wrestling', difficulty: 'intermediate' }
    ],
    wednesday: [
      { id: 'wed-1', name: 'Morning Fundamentals', startTime: '06:00', endTime: '07:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'wed-2', name: 'Advanced Gi', startTime: '09:00', endTime: '10:30', classType: 'gi', difficulty: 'advanced' },
      { id: 'wed-3', name: 'No-Gi Sparring', startTime: '12:00', endTime: '13:00', classType: 'no-gi', difficulty: 'advanced' },
      { id: 'wed-4', name: 'All Levels Gi', startTime: '18:00', endTime: '19:30', classType: 'gi', difficulty: 'all-levels' },
      { id: 'wed-5', name: 'Competition Training', startTime: '19:45', endTime: '21:00', classType: 'gi', difficulty: 'advanced' }
    ],
    thursday: [
      { id: 'thu-1', name: 'Morning No-Gi', startTime: '06:00', endTime: '07:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'thu-2', name: 'Gi Fundamentals', startTime: '09:00', endTime: '10:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'thu-3', name: 'Open Mat', startTime: '12:00', endTime: '14:00', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'thu-4', name: 'No-Gi Training', startTime: '18:00', endTime: '19:30', classType: 'no-gi', difficulty: 'intermediate' },
      { id: 'thu-5', name: 'Leg Locks', startTime: '19:45', endTime: '20:45', classType: 'no-gi', difficulty: 'intermediate' }
    ],
    friday: [
      { id: 'fri-1', name: 'Morning Fundamentals', startTime: '06:00', endTime: '07:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'fri-2', name: 'Gi Sparring', startTime: '09:00', endTime: '10:30', classType: 'gi', difficulty: 'intermediate' },
      { id: 'fri-3', name: 'No-Gi Fundamentals', startTime: '12:00', endTime: '13:00', classType: 'no-gi', difficulty: 'beginner' },
      { id: 'fri-4', name: 'Friday Night Open Mat', startTime: '19:00', endTime: '21:00', classType: 'open-mat', difficulty: 'all-levels' }
    ],
    saturday: [
      { id: 'sat-1', name: 'Morning Open Mat', startTime: '09:00', endTime: '12:00', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'sat-2', name: 'Competition Class', startTime: '12:30', endTime: '14:00', classType: 'gi', difficulty: 'advanced' },
      { id: 'sat-3', name: 'No-Gi Special', startTime: '16:00', endTime: '17:30', classType: 'no-gi', difficulty: 'intermediate' }
    ],
    sunday: [
      { id: 'sun-1', name: 'Sunday Morning Open Mat', startTime: '10:00', endTime: '13:00', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'sun-2', name: 'Advanced Gi', startTime: '14:00', endTime: '15:30', classType: 'gi', difficulty: 'advanced' }
    ]
  };
}

// Get schedule for a gym
function getScheduleForGym(gym) {
  if (gym.scrapingStrategy === 'pre-scraped' && realSchedules[gym.id]) {
    return realSchedules[gym.id];
  }
  return getSampleSchedule();
}

// City/Zip to coordinates mapping
const locationMap = {
  'los angeles': { lat: 34.0522, lng: -118.2437 },
  'la': { lat: 34.0522, lng: -118.2437 },
  'san francisco': { lat: 37.7749, lng: -122.4194 },
  'sf': { lat: 37.7749, lng: -122.4194 },
  'new york': { lat: 40.7128, lng: -74.0060 },
  'nyc': { lat: 40.7128, lng: -74.0060 },
  'houston': { lat: 29.7604, lng: -95.3698 },
  'dallas': { lat: 32.7767, lng: -96.7970 },
  'austin': { lat: 30.2672, lng: -97.7431 },
  'miami': { lat: 25.7617, lng: -80.1918 },
  'orlando': { lat: 28.5383, lng: -81.3792 },
  'tampa': { lat: 27.9506, lng: -82.4572 },
  'chicago': { lat: 41.8781, lng: -87.6298 },
  'denver': { lat: 39.7392, lng: -104.9903 },
  'seattle': { lat: 47.6062, lng: -122.3321 },
  'atlanta': { lat: 33.7490, lng: -84.3880 },
  'las vegas': { lat: 36.1699, lng: -115.1398 },
  'boston': { lat: 42.3601, lng: -71.0589 }
};

const zipPrefixMap = {
  '90': 'CA', '91': 'CA', '92': 'CA', '93': 'CA', '94': 'CA', '95': 'CA', '96': 'CA', '97': 'CA',
  '10': 'NY', '11': 'NY',
  '75': 'TX', '76': 'TX', '77': 'TX', '78': 'TX', '79': 'TX',
  '33': 'FL', '34': 'FL',
  '60': 'IL', '61': 'IL',
  '80': 'CO', '81': 'CO',
  '98': 'WA', '99': 'WA',
  '30': 'GA', '31': 'GA',
  '89': 'NV',
  '01': 'MA', '02': 'MA'
};

function parseLocation(query) {
  const q = query.toLowerCase().trim();

  // Check zip code
  const zipMatch = q.match(/^(\d{3,5})/);
  if (zipMatch) {
    const prefix = zipMatch[1].substring(0, 2);
    const state = zipPrefixMap[prefix];
    if (state) {
      const cityData = Object.entries(locationMap).find(([name, data]) => {
        const stateToCity = { CA: ['los angeles', 'san francisco'], NY: ['new york'], TX: ['houston', 'dallas', 'austin'], FL: ['miami', 'orlando', 'tampa'], IL: ['chicago'], CO: ['denver'], WA: ['seattle'], GA: ['atlanta'], NV: ['las vegas'], MA: ['boston'] };
        return stateToCity[state]?.includes(name);
      });
      return {
        lat: cityData?.[1]?.lat || 34.0522,
        lng: cityData?.[1]?.lng || -118.2437,
        city: q,
        state: state
      };
    }
  }

  // Check city name
  for (const [cityName, data] of Object.entries(locationMap)) {
    if (q.includes(cityName) || cityName.includes(q)) {
      return { ...data, city: cityName };
    }
  }

  // Default
  return { lat: 34.0522, lng: -118.2437, city: 'Los Angeles' };
}

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/states', (req, res) => {
  res.json({ states: getAllStates() });
});

app.get('/api/search', (req, res) => {
  try {
    const { location, radius = 25 } = req.query;

    if (!location) {
      return res.status(400).json({ error: 'Location is required' });
    }

    const locationData = parseLocation(location);
    const radiusMiles = Math.min(Math.max(parseInt(radius), 5), 100);

    const nearbyGyms = knownGyms
      .map(gym => ({
        ...gym,
        distance: calculateDistance(locationData.lat, locationData.lng, gym.lat, gym.lng)
      }))
      .filter(gym => gym.distance <= radiusMiles)
      .sort((a, b) => a.distance - b.distance);

    res.json({
      location: locationData,
      radius: radiusMiles,
      count: nearbyGyms.length,
      gyms: nearbyGyms
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

app.post('/api/gyms/schedules', (req, res) => {
  try {
    const { gymIds } = req.body;

    if (!gymIds || !Array.isArray(gymIds)) {
      return res.status(400).json({ error: 'gymIds array is required' });
    }

    const results = gymIds
      .map(id => knownGyms.find(g => g.id === id))
      .filter(Boolean)
      .map(gym => ({
        ...gym,
        schedule: getScheduleForGym(gym),
        lastScraped: new Date().toISOString()
      }));

    res.json({ gyms: results });
  } catch (error) {
    console.error('Schedules error:', error);
    res.status(500).json({ error: 'Failed to fetch schedules' });
  }
});

app.get('/api/gym/:id', (req, res) => {
  try {
    const gym = knownGyms.find(g => g.id === req.params.id);

    if (!gym) {
      return res.status(404).json({ error: 'Gym not found' });
    }

    res.json({
      ...gym,
      schedule: getScheduleForGym(gym),
      lastScraped: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch gym' });
  }
});

app.get('/api/gyms', (req, res) => {
  res.json({ count: knownGyms.length, gyms: knownGyms });
});

app.listen(PORT, () => {
  console.log(`BJJ Schedule API running on port ${PORT}`);
});
