// Curated database of major BJJ gyms

export const knownGyms = [
  { id: 'gb-west-la', name: 'Gracie Barra West LA', address: '10550 Santa Monica Blvd', city: 'Los Angeles', state: 'CA', zip: '90025', lat: 34.0565, lng: -118.4275, website: 'https://www.graciebarra.com/locations/west-los-angeles/', brand: 'Gracie Barra' },
  { id: 'gb-burbank', name: 'Gracie Barra Burbank', address: '3000 W Olive Ave', city: 'Burbank', state: 'CA', zip: '91505', lat: 34.1526, lng: -118.3255, website: 'https://www.graciebarra.com/locations/burbank/', brand: 'Gracie Barra' },
  { id: 'gb-orange-county', name: 'Gracie Barra Orange County', address: '15707 Rockfield Blvd', city: 'Irvine', state: 'CA', zip: '92618', lat: 33.7077, lng: -117.7541, website: 'https://www.graciebarra.com/locations/orange-county/', brand: 'Gracie Barra' },
  { id: 'renzo-la', name: 'Renzo Gracie Academy LA', address: '5500 Sylmar Ave', city: 'Sherman Oaks', state: 'CA', zip: '91401', lat: 34.1562, lng: -118.3879, website: 'https://renzogracie.com/locations/los-angeles/', brand: 'Renzo Gracie' },
  { id: 'gb-new-york', name: 'Gracie Barra New York', address: '551 Avenue of the Americas', city: 'New York', state: 'NY', zip: '10011', lat: 40.7390, lng: -74.0012, website: 'https://www.graciebarra.com/locations/new-york/', brand: 'Gracie Barra' },
  { id: 'renzo-nyc', name: 'Renzo Gracie Academy NYC', address: '207 W 25th St', city: 'New York', state: 'NY', zip: '10001', lat: 40.7450, lng: -73.9943, website: 'https://renzogracie.com/locations/new-york/', brand: 'Renzo Gracie' },
  { id: 'gb-houston', name: 'Gracie Barra Houston', address: '2301 S Voss Rd', city: 'Houston', state: 'TX', zip: '77057', lat: 29.7355, lng: -95.4891, website: 'https://www.graciebarra.com/locations/houston/', brand: 'Gracie Barra' },
  { id: 'gb-dallas', name: 'Gracie Barra Dallas', address: '4251 Belt Line Rd', city: 'Addison', state: 'TX', zip: '75001', lat: 32.9555, lng: -96.8531, website: 'https://www.graciebarra.com/locations/dallas/', brand: 'Gracie Barra' },
  { id: 'gb-austin', name: 'Gracie Barra Austin', address: '3600 N Capital of Texas Hwy', city: 'Austin', state: 'TX', zip: '78746', lat: 30.3567, lng: -97.8016, website: 'https://www.graciebarra.com/locations/austin/', brand: 'Gracie Barra' },
  { id: 'gb-miami', name: 'Gracie Barra Miami', address: '246 SW 6th St', city: 'Miami', state: 'FL', zip: '33130', lat: 25.7627, lng: -80.1953, website: 'https://www.graciebarra.com/locations/miami/', brand: 'Gracie Barra' },
  { id: 'gb-orlando', name: 'Gracie Barra Orlando', address: '7058 Narcoossee Rd', city: 'Orlando', state: 'FL', zip: '32822', lat: 28.5411, lng: -81.3085, website: 'https://www.graciebarra.com/locations/orlando/', brand: 'Gracie Barra' },
  { id: 'gb-tampa', name: 'Gracie Barra Tampa', address: '3407 W Kennedy Blvd', city: 'Tampa', state: 'FL', zip: '33609', lat: 27.9433, lng: -82.4920, website: 'https://www.graciebarra.com/locations/tampa/', brand: 'Gracie Barra' },
  { id: 'gb-denver', name: 'Gracie Barra Denver', address: '225 Union Blvd', city: 'Lakewood', state: 'CO', zip: '80228', lat: 39.7148, lng: -105.1330, website: 'https://www.graciebarra.com/locations/denver/', brand: 'Gracie Barra' },
  { id: 'gb-seattle', name: 'Gracie Barra Seattle', address: '1215 4th Ave', city: 'Seattle', state: 'WA', zip: '98161', lat: 47.6097, lng: -122.3331, website: 'https://www.graciebarra.com/locations/seattle/', brand: 'Gracie Barra' },
  { id: 'gb-atlanta', name: 'Gracie Barra Atlanta', address: '3535 Peachtree Rd NE', city: 'Atlanta', state: 'GA', zip: '30326', lat: 33.8489, lng: -84.3630, website: 'https://www.graciebarra.com/locations/atlanta/', brand: 'Gracie Barra' },
  { id: 'gb-las-vegas', name: 'Gracie Barra Las Vegas', address: '8525 S Eastern Ave', city: 'Las Vegas', state: 'NV', zip: '89123', lat: 36.0247, lng: -115.1170, website: 'https://www.graciebarra.com/locations/las-vegas/', brand: 'Gracie Barra' },
  { id: 'gb-chicago', name: 'Gracie Barra Chicago', address: '811 W Eastman St', city: 'Chicago', state: 'IL', zip: '60642', lat: 41.9087, lng: -87.6555, website: 'https://www.graciebarra.com/locations/chicago/', brand: 'Gracie Barra' },
  { id: 'gb-boston', name: 'Gracie Barra Boston', address: '129 Brighton Ave', city: 'Allston', state: 'MA', zip: '02134', lat: 42.3528, lng: -71.1317, website: 'https://www.graciebarra.com/locations/boston/', brand: 'Gracie Barra' },
  { id: 'gb-portland', name: 'Gracie Barra Portland', address: '11010 NE Halsey St', city: 'Portland', state: 'OR', zip: '97220', lat: 45.5366, lng: -122.5406, website: 'https://www.graciebarra.com/locations/portland/', brand: 'Gracie Barra' }
];

export function getGymsByState(state) {
  return knownGyms.filter(gym => gym.state.toLowerCase() === state.toLowerCase());
}

export function getAllStates() {
  const states = new Set(knownGyms.map(gym => gym.state));
  return Array.from(states).sort();
}
