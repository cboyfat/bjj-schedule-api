// Curated database of major BJJ gym chains and schools
// This serves as the foundation for web scraping
// Real schedule data scraped from gym websites

export const gymChains = {
  gracie Barra: {
    name: 'Gracie Barra',
    website: 'https://www.graciebarra.com',
    schedulePattern: '/schedule',
    hasPublicSchedule: true,
    network: true
  },
  gracieAcademy: {
    name: 'Gracie Academy',
    website: 'https://www.gracieacademy.com',
    schedulePattern: '/schedule',
    hasPublicSchedule: true,
    network: true
  },
  ibjjf: {
    name: 'IBJJF Registered Schools',
    website: 'https://www.ibjjf.com',
    schedulePattern: '/schools',
    hasPublicSchedule: false,
    network: false
  }
};

// Real schedule data scraped from websites
// These schedules are verified and updated regularly
const realSchedules = {
  // Bellum Brazilian Jiu-Jitsu - scraped from bellumbrazilianjiujitsu.com
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

  // VOW BJJ - scraped from vowbjj.com
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

// Major BJJ academies with known schedule pages
export const knownGyms = [
  // California
  // Bellum BJJ - Real scraped schedule
  {
    id: 'bellum-bjj',
    name: 'Bellum Brazilian Jiu-Jitsu',
    address: '520 Ham forge Pkwy #102',
    city: 'Austin',
    state: 'TX',
    zip: '78748',
    lat: 30.1862,
    lng: -97.7889,
    website: 'https://bellumbrazilianjiujitsu.com',
    websiteBase: 'bellumbrazilianjiujitsu.com',
    scrapingStrategy: 'pre-scraped',
    hasSchedule: true,
    brand: null
  },
  // VOW BJJ - Real scraped schedule
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
    websiteBase: 'vowbjj.com',
    scrapingStrategy: 'pre-scraped',
    hasSchedule: true,
    brand: null
  },
  {
    id: 'gb-west-la',
    name: 'Gracie Barra West Los Angeles',
    address: '10550 Santa Monica Blvd',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90025',
    lat: 34.0565,
    lng: -118.4275,
    website: 'https://www.graciebarra.com/locations/west-los-angeles/',
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    apiEndpoint: '/api/schedule',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'gb-burbank',
    name: 'Gracie Barra Burbank',
    address: '3000 W Olive Ave',
    city: 'Burbank',
    state: 'CA',
    zip: '91505',
    lat: 34.1526,
    lng: -118.3255,
    website: 'https://www.graciebarra.com/locations/burbank/',
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'gb-orange-county',
    name: 'Gracie Barra Orange County',
    address: '15707 Rockfield Blvd',
    city: 'Irvine',
    state: 'CA',
    zip: '92618',
    lat: 33.7077,
    lng: -117.7541,
    website: 'https://www.graciebarra.com/locations/orange-county/',
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'atlas-bjj-la',
    name: 'Atlas BJJ Los Angeles',
    address: '11926 Santa Monica Blvd',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90025',
    lat: 34.0414,
    lng: -118.4619,
    website: 'https://atlasbjj.com',
    websiteBase: 'atlasbjj.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  },
  {
    id: 'renzo-gracie-la',
    name: 'Renzo Gracie Academy LA',
    address: '5500 Sylmar Ave',
    city: 'Sherman Oaks',
    state: 'CA',
    zip: '91401',
    lat: 34.1562,
    lng: -118.3879,
    website: 'https://renzograciela.com',
    websiteBase: 'renzograciela.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: 'Renzo Gracie'
  },
  {
    id: 'cobrinha-la',
    name: 'Cobrinha Brazilian Jiu-Jitsu',
    address: '11020 Ventura Blvd',
    city: 'Studio City',
    state: 'CA',
    zip: '91604',
    lat: 34.1415,
    lng: -118.3687,
    website: 'https://cobrinha.com',
    websiteBase: 'cobrinha.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  },
  {
    id: '10th-planet-la',
    name: '10th Planet Jiu Jitsu Los Angeles',
    address: '5757 Wilshire Blvd',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90036',
    lat: 34.0621,
    lng: -118.3564,
    website: 'https://10thplanetla.com',
    websiteBase: '10thplanetla.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: '10th Planet'
  },
  // New York
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'renzo-gracie-nyc',
    name: 'Renzo Gracie Academy NYC',
    address: '207 W 25th St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    lat: 40.7450,
    lng: -73.9943,
    website: 'https://renzogracie.com',
    websiteBase: 'renzogracie.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: 'Renzo Gracie'
  },
  {
    id: 'unity-bjj',
    name: 'Unity Jiu-Jitsu',
    address: '249 5th Ave',
    city: 'New York',
    state: 'NY',
    zip: '10016',
    lat: 40.7459,
    lng: -73.9863,
    website: 'https://unitybjj.com',
    websiteBase: 'unitybjj.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  },
  {
    id: 'brooklyn-bjj',
    name: 'Brooklyn Brazilian Jiu-Jitsu',
    address: '195 7th Ave',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11215',
    lat: 40.6699,
    lng: -73.9813,
    website: 'https://brooklynbjj.com',
    websiteBase: 'brooklynbjj.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  },
  // Texas
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  // Florida
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'gracie-tampa',
    name: 'Gracie Tampa',
    address: '4547 Henderson Blvd',
    city: 'Tampa',
    state: 'FL',
    zip: '33629',
    lat: 27.9012,
    lng: -82.5097,
    website: 'https://gracietampa.com',
    websiteBase: 'gracietampa.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: 'Gracie'
  },
  // Colorado
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'elevation-bjj',
    name: 'Elevation Brazilian Jiu-Jitsu',
    address: '1780 S Havana St',
    city: 'Aurora',
    state: 'CO',
    zip: '80012',
    lat: 39.6834,
    lng: -104.8777,
    website: 'https://elevationbjj.com',
    websiteBase: 'elevationbjj.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  },
  // Washington
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'soto-grip',
    name: 'Soto Grip Jiu-Jitsu',
    address: '2511 SW Andover St',
    city: 'Seattle',
    state: 'WA',
    zip: '98106',
    lat: 47.5559,
    lng: -122.3745,
    website: 'https://sotogrip.com',
    websiteBase: 'sotogrip.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  },
  // Georgia
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'odell-bjj',
    name: "Odell's BJJ Academy",
    address: '3098 Briarcliff Rd NE',
    city: 'Atlanta',
    state: 'GA',
    zip: '30329',
    lat: 33.8122,
    lng: -84.3355,
    website: 'https://odellbjj.com',
    websiteBase: 'odellbjj.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  },
  // Nevada
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'xbjj',
    name: 'XBJJ Academy',
    address: '6825 Edmund Ave',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89108',
    lat: 36.1740,
    lng: -115.2233,
    website: 'https://xbjj.com',
    websiteBase: 'xbjj.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  },
  // Illinois
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'chicago-bjj',
    name: 'Chicago Brazilian Jiu-Jitsu',
    address: '3704 N Halsted St',
    city: 'Chicago',
    state: 'IL',
    zip: '60613',
    lat: 41.9494,
    lng: -87.6497,
    website: 'https://chicagobrazilianjiujitsu.com',
    websiteBase: 'chicagobrazilianjiujitsu.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  },
  // Oregon
  {
    id: 'gb-portland',
    name: 'Gracie Barra Portland',
    address: '11010 NE Halsey St',
    city: 'Portland',
    state: 'OR',
    zip: '97220',
    lat: 45.5366,
    lng: -122.5406,
    website: 'https://www.graciebarra.com/locations/portland/',
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'pd strength',
    name: 'PD Strength & Performance',
    address: '2828 NE Alberta St',
    city: 'Portland',
    state: 'OR',
    zip: '97211',
    lat: 45.5590,
    lng: -122.6359,
    website: 'https://pdstrength.com',
    websiteBase: 'pdstrength.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  },
  // Arizona
  {
    id: 'gb-phoenix',
    name: 'Gracie Barra Phoenix',
    address: '1616 E Camelback Rd',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85014',
    lat: 33.5092,
    lng: -112.0269,
    website: 'https://www.graciebarra.com/locations/phoenix/',
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'az-bjj',
    name: 'Arizona Brazilian Jiu-Jitsu',
    address: '15030 N Hayden Rd',
    city: 'Scottsdale',
    state: 'AZ',
    zip: '85260',
    lat: 33.6185,
    lng: -111.9093,
    website: 'https://azbjj.com',
    websiteBase: 'azbjj.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  },
  // Massachusetts
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
    websiteBase: 'graciebarra.com',
    scrapingStrategy: 'api',
    hasSchedule: true,
    brand: 'gracie Barra'
  },
  {
    id: 'boston-bjj',
    name: 'Boston Brazilian Jiu-Jitsu',
    address: '841 Worcester St',
    city: 'Wellesley',
    state: 'MA',
    zip: '02482',
    lat: 42.2963,
    lng: -71.2904,
    website: 'https://bostonbjj.com',
    websiteBase: 'bostonbjj.com',
    scrapingStrategy: 'scrapable',
    hasSchedule: true,
    brand: null
  }
];

// Helper function to get gyms by state
export function getGymsByState(state) {
  return knownGyms.filter(gym => gym.state.toLowerCase() === state.toLowerCase());
}

// Helper function to get gyms by city
export function getGymsByCity(city) {
  return knownGyms.filter(gym =>
    gym.city.toLowerCase().includes(city.toLowerCase())
  );
}

// Get all unique states
export function getAllStates() {
  const states = new Set(knownGyms.map(gym => gym.state));
  return Array.from(states).sort();
}

// Export real schedules for use in scraper
export { realSchedules };
