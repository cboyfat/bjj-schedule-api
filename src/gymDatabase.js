// Curated database of major BJJ gym chains and schools
// This serves as the foundation for web scraping
// Real schedule data scraped from gym websites

export const gymChains = {
  'gracie Barra': {
    name: 'Gracie Barra',
    website: 'https://www.graciebarra.com',
    schedulePattern: '/schedule',
    hasPublicSchedule: true,
    network: true
  },
  'gracieAcademy': {
    name: 'Gracie Academy',
    website: 'https://www.gracieacademy.com',
    schedulePattern: '/schedule',
    hasPublicSchedule: true,
    network: true
  },
  'ibjjf': {
    name: 'IBJJF Registered Schools',
    website: 'https://www.ibjjf.com',
    schedulePattern: '/schools',
    hasPublicSchedule: false,
    network: false
  }
};

// Real schedule data scraped from websites
const realSchedules = {
  'bellum-bjj': {
    monday: [
      { id: 'bellum-mon-1', name: 'All Levels BJJ', startTime: '1](streamdown:incomplete-link)
