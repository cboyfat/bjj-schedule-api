// Curated database of BJJ gyms with real scraped schedules
// NO external scraping - all data is pre-scraped

export const realSchedules = {
  'bellum-bjj': {
    monday: [
      { id: 'bellum-mon-1', name: 'All Levels BJJ', startTime: '11:00', endTime: '12:30', classType: 'gi', difficulty: 'all-levels' },
      { id: 'bellum-mon-2', name: 'Kids BJJ', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'bellum-mon-3', name: 'Advanced BJJ', startTime: '19:15', endTime: '20:45', classType: 'gi', difficulty: 'advanced' }
    ],
    tuesday: [
      { id: 'bellum-tue-1', name: 'No-Gi Grappling', startTime: '06:00', endTime: '07:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'bellum-tue-2', name: 'Fundamentals', startTime: '09:00', endTime: '10:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'bellum-tue-3', name: 'No-Gi Fundamentals', startTime: '18:00', endTime: '19:00', classType: 'no-gi', difficulty: 'beginner' },
      { id: 'bellum-tue-4', name: 'Competition Training', startTime: '19:15', endTime: '20:45', classType: 'gi', difficulty: 'advanced' }
    ],
    wednesday: [
      { id: 'bellum-wed-1', name: 'All Levels BJJ', startTime: '11:00', endTime: '12:30', classType: 'gi', difficulty: 'all-levels' },
      { id: 'bellum-wed-2', name: 'Kids BJJ', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'bellum-wed-3', name: 'Advanced BJJ', startTime: '19:15', endTime: '20:45', classType: 'gi', difficulty: 'advanced' }
    ],
    thursday: [
      { id: 'bellum-thu-1', name: 'No-Gi Grappling', startTime: '06:00', endTime: '07:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'bellum-thu-2', name: 'Fundamentals', startTime: '09:00', endTime: '10:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'bellum-thu-3', name: 'No-Gi Sparring', startTime: '18:00', endTime: '19:00', classType: 'no-gi', difficulty: 'intermediate' },
      { id: 'bellum-thu-4', name: 'Wrestling', startTime: '19:15', endTime: '20:45', classType: 'no-gi', difficulty: 'intermediate' }
    ],
    friday: [
      { id: 'bellum-fri-1', name: 'All Levels BJJ', startTime: '11:00', endTime: '12:30', classType: 'gi', difficulty: 'all-levels' },
      { id: 'bellum-fri-2', name: 'Kids BJJ', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'bellum-fri-3', name: 'Friday Night Open Mat', startTime: '19:00', endTime: '21:00', classType: 'open-mat', difficulty: 'all-levels' }
    ],
    saturday: [
      { id: 'bellum-sat-1', name: 'Morning Open Mat', startTime: '09:00', endTime: '12:00', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'bellum-sat-2', name: 'Competition Class', startTime: '12:30', endTime: '14:00', classType: 'gi', difficulty: 'advanced' }
    ],
    sunday: [
      { id: 'bellum-sun-1', name: 'Sunday Open Mat', startTime: '10:00', endTime: '13:00', classType: 'open-mat', difficulty: 'all-levels' }
    ]
  },
  'vow-bjj': {
    monday: [
      { id: 'vow-mon-1', name: 'No-Gi', startTime: '12:00', endTime: '13:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'vow-mon-2', name: 'Kids Gi', startTime: '17:00', endTime: '18:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'vow-mon-3', name: 'Intro to Jiu-Jitsu', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'vow-mon-4', name: 'Gi Fundamentals', startTime: '19:00', endTime: '20:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'vow-mon-5', name: 'Gi Sparring', startTime: '20:00', endTime: '21:00', classType: 'gi', difficulty: 'intermediate' }
    ],
    tuesday: [
      { id: 'vow-tue-1', name: 'Morning No-Gi', startTime: '06:00', endTime: '07:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'vow-tue-2', name: 'No-Gi Fundamentals', startTime: '12:00', endTime: '13:00', classType: 'no-gi', difficulty: 'beginner' },
      { id: 'vow-tue-3', name: 'Kids Gi', startTime: '17:00', endTime: '18:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'vow-tue-4', name: 'Women Only Gi', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'vow-tue-5', name: 'No-Gi Sparring', startTime: '19:00', endTime: '20:00', classType: 'no-gi', difficulty: 'intermediate' },
      { id: 'vow-tue-6', name: 'Advanced No-Gi', startTime: '20:00', endTime: '21:30', classType: 'no-gi', difficulty: 'advanced' }
    ],
    wednesday: [
      { id: 'vow-wed-1', name: 'No-Gi', startTime: '12:00', endTime: '13:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'vow-wed-2', name: 'Kids Gi', startTime: '17:00', endTime: '18:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'vow-wed-3', name: 'Intro to Jiu-Jitsu', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'vow-wed-4', name: 'Gi Fundamentals', startTime: '19:00', endTime: '20:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'vow-wed-5', name: 'Gi Sparring', startTime: '20:00', endTime: '21:00', classType: 'gi', difficulty: 'intermediate' }
    ],
    thursday: [
      { id: 'vow-thu-1', name: 'Morning No-Gi', startTime: '06:00', endTime: '07:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'vow-thu-2', name: 'No-Gi Fundamentals', startTime: '12:00', endTime: '13:00', classType: 'no-gi', difficulty: 'beginner' },
      { id: 'vow-thu-3', name: 'Kids Gi', startTime: '17:00', endTime: '18:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'vow-thu-4', name: 'Women Only Gi', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'vow-thu-5', name: 'No-Gi Sparring', startTime: '19:00', endTime: '20:00', classType: 'no-gi', difficulty: 'intermediate' },
      { id: 'vow-thu-6', name: 'Advanced No-Gi', startTime: '20:00', endTime: '21:30', classType: 'no-gi', difficulty: 'advanced' }
    ],
    friday: [
      { id: 'vow-fri-1', name: 'No-Gi', startTime: '12:00', endTime: '13:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'vow-fri-2', name: 'Kids Gi', startTime: '17:00', endTime: '18:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'vow-fri-3', name: 'Gi Fundamentals', startTime: '19:00', endTime: '20:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'vow-fri-4', name: 'Gi Sparring', startTime: '20:00', endTime: '21:00', classType: 'gi', difficulty: 'intermediate' }
    ],
    saturday: [
      { id: 'vow-sat-1', name: 'Open Mat', startTime: '09:00', endTime: '12:00', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'vow-sat-2', name: 'Competition Training', startTime: '13:00', endTime: '15:00', classType: 'gi', difficulty: 'advanced' }
    ],
    sunday: [
      { id: 'vow-sun-1', name: 'Closed', startTime: '00:00', endTime: '00:00', classType: 'other', difficulty: null }
    ]
  }
};

export const knownGyms = [
  {
    id: 'bellum-bjj',
    name: 'Bellum Brazilian Jiu-Jitsu',
    address: '520 Hammock Forge Pkwy #102',
    city: 'Austin',
    state: 'TX',
    zip: '78748',
    lat: 30.1862,
    lng: -97.7889,
    website: 'https://bellumbrazilianjiujitsu.com',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'vow-bjj',
    name: 'VOW BJJ',
    address: '3005 S Lamar Blvd',
    city: 'Austin',
    state: 'TX',
    zip: '78704',
    lat: 30.2314,
    lng: -97.7736,
    website: 'https://vowbjj.com',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-austin',
    name: 'Gracie Barra Austin',
    address: '3600 N Capital of Texas Hwy',
    city: 'Austin',
    state: 'TX',
    zip: '78746',
    lat: 30.3567,
    lng: -97.8016,
    website: 'https://www.graciebarra.com/locations/austin/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-houston',
    name: 'Gracie Barra Houston',
    address: '2301 S Voss Rd',
    city: 'Houston',
    state: 'TX',
    zip: '77057',
    lat: 29.7355,
    lng: -95.4891,
    website: 'https://www.graciebarra.com/locations/houston/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-dallas',
    name: 'Gracie Barra Dallas',
    address: '4251 Belt Line Rd',
    city: 'Addison',
    state: 'TX',
    zip: '75001',
    lat: 32.9555,
    lng: -96.8531,
    website: 'https://www.graciebarra.com/locations/dallas/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-miami',
    name: 'Gracie Barra Miami',
    address: '246 SW 6th St',
    city: 'Miami',
    state: 'FL',
    zip: '33130',
    lat: 25.7627,
    lng: -80.1953,
    website: 'https://www.graciebarra.com/locations/miami/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-orlando',
    name: 'Gracie Barra Orlando',
    address: '7058 Narcoossee Rd',
    city: 'Orlando',
    state: 'FL',
    zip: '32822',
    lat: 28.5411,
    lng: -81.3085,
    website: 'https://www.graciebarra.com/locations/orlando/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-tampa',
    name: 'Gracie Barra Tampa',
    address: '3407 W Kennedy Blvd',
    city: 'Tampa',
    state: 'FL',
    zip: '33609',
    lat: 27.9433,
    lng: -82.4920,
    website: 'https://www.graciebarra.com/locations/tampa/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-new-york',
    name: 'Gracie Barra New York',
    address: '551 Avenue of the Americas',
    city: 'New York',
    state: 'NY',
    zip: '10011',
    lat: 40.7390,
    lng: -74.0012,
    website: 'https://www.graciebarra.com/locations/new-york/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-los-angeles',
    name: 'Gracie Barra West Los Angeles',
    address: '10550 Santa Monica Blvd',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90025',
    lat: 34.0565,
    lng: -118.4275,
    website: 'https://www.graciebarra.com/locations/west-los-angeles/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-chicago',
    name: 'Gracie Barra Chicago',
    address: '811 W Eastman St',
    city: 'Chicago',
    state: 'IL',
    zip: '60642',
    lat: 41.9087,
    lng: -87.6555,
    website: 'https://www.graciebarra.com/locations/chicago/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-denver',
    name: 'Gracie Barra Denver',
    address: '225 Union Blvd',
    city: 'Lakewood',
    state: 'CO',
    zip: '80228',
    lat: 39.7148,
    lng: -105.1330,
    website: 'https://www.graciebarra.com/locations/denver/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-seattle',
    name: 'Gracie Barra Seattle',
    address: '1215 4th Ave',
    city: 'Seattle',
    state: 'WA',
    zip: '98161',
    lat: 47.6097,
    lng: -122.3331,
    website: 'https://www.graciebarra.com/locations/seattle/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-atlanta',
    name: 'Gracie Barra Atlanta',
    address: '3535 Peachtree Rd NE',
    city: 'Atlanta',
    state: 'GA',
    zip: '30326',
    lat: 33.8489,
    lng: -84.3630,
    website: 'https://www.graciebarra.com/locations/atlanta/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-las-vegas',
    name: 'Gracie Barra Las Vegas',
    address: '8525 S Eastern Ave',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89123',
    lat: 36.0247,
    lng: -115.1170,
    website: 'https://www.graciebarra.com/locations/las-vegas/',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'gb-boston',
    name: 'Gracie Barra Boston',
    address: '129 Brighton Ave',
    city: 'Allston',
    state: 'MA',
    zip: '02134',
    lat: 42.3528,
    lng: -71.1317,
    website: 'https://www.graciebarra.com/locations/boston/',
    scrapingStrategy: 'pre-scraped'
  }
];

export function getAllStates() {
  return [...new Set(knownGyms.map(gym => gym.state))].sort();
}
