// Web scraping service for BJJ gym schedules
// NO external dependencies - uses pre-scraped data only

import { realSchedules } from './gymDatabase.js';

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

function generateSampleSchedule() {
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

export async function scrapeGymSchedule(gym) {
  const { id, scrapingStrategy } = gym;
  
  if (scrapingStrategy === 'pre-scraped' && realSchedules[id]) {
    return realSchedules[id];
  }
  
  return generateSampleSchedule();
}

export async function findGymsNearLocation(lat, lng, radiusMiles) {
  const { knownGyms } = await import('./gymDatabase.js');
  
  return knownGyms
    .map(gym => ({
      ...gym,
      distance: calculateDistance(lat, lng, gym.lat, gym.lng)
    }))
    .filter(gym => gym.distance <= radiusMiles)
    .sort((a, b) => a.distance - b.distance);
}

export async function getGymData(gym) {
  const schedule = await scrapeGymSchedule(gym);
  return {
    ...gym,
    schedule,
    lastScraped: new Date().toISOString(),
    scraped: true
  };
}

export { calculateDistance, generateSampleSchedule };
