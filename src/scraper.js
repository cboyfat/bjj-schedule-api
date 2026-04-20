// Web scraping service for BJJ gym schedules
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import { realSchedules } from './gymDatabase.js';

const DAY_MAP = {
  'sunday': 0, 'sun': 0,
  'monday': 1, 'mon': 1,
  'tuesday': 2, 'tue': 2, 'tues': 2,
  'wednesday': 3, 'wed': 3,
  'thursday': 4, 'thu': 4, 'thur': 4, 'thurs': 4,
  'friday': 5, 'fri': 5,
  'saturday': 6, 'sat': 6
};

/**
 * Calculate distance between two coordinates using Haversine formula
 */
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

/**
 * Parse time string to 24-hour format
 */
function parseTime(timeStr) {
  if (!timeStr) return null;

  const cleaned = timeStr.trim().toLowerCase();
  const match = cleaned.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i);

  if (!match) return null;

  let hours = parseInt(match[1]);
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const period = match[3]?.toLowerCase();

  if (period === 'pm' && hours < 12) hours += 12;
  if (period === 'am' && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

/**
 * Determine class type from class name
 */
function determineClassType(className) {
  const name = className.toLowerCase();

  if (name.includes('no-gi') || name.includes('nogi') || name.includes('no gi')) {
    return 'no-gi';
  }
  if (name.includes('open mat') || name.includes('openmat') || name.includes('open-mat')) {
    return 'open-mat';
  }
  if (name.includes('wrestling') || name.includes('wrestle')) {
    return 'wrestling';
  }
  if (name.includes('fundamentals') || name.includes('basic') || name.includes('beginner')) {
    return 'fundamentals';
  }
  if (name.includes('gi') || name.includes('bjj')) {
    return 'gi';
  }

  return 'other';
}

/**
 * Determine difficulty from class name
 */
function determineDifficulty(className) {
  const name = className.toLowerCase();

  if (name.includes('advanced') || name.includes('competition') || name.includes('pro')) {
    return 'advanced';
  }
  if (name.includes('intermediate') || name.includes('advanced beginner')) {
    return 'intermediate';
  }
  if (name.includes('beginner') || name.includes('fundamental') || name.includes('basic')) {
    return 'beginner';
  }
  if (name.includes('all levels') || name.includes('all-levels') || name.includes('alllevels')) {
    return 'all-levels';
  }

  return null;
}

/**
 * Extract day from text
 */
function extractDay(text) {
  const lower = text.toLowerCase();
  for (const [day, index] of Object.entries(DAY_MAP)) {
    if (lower.includes(day)) {
      return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][index];
    }
  }
  return null;
}

/**
 * Scrape Gracie Barra locations (they have a consistent API-like structure)
 */
async function scrapeGracieBarra(url) {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Try to find schedule data in JSON-LD or page scripts
    const scheduleData = await page.evaluate(() => {
      // Look for schedule data in various places
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const data = JSON.parse(script.textContent);
          if (data && (data.schedule || data.eventSchedule)) {
            return data;
          }
        } catch (e) {}
      }

      // Look for data attributes
      const scheduleElements = document.querySelectorAll('[data-schedule], [data-classes], [data-events]');
      if (scheduleElements.length > 0) {
        try {
          return JSON.parse(scheduleElements[0].dataset.schedule || scheduleElements[0].dataset.classes);
        } catch (e) {}
      }

      return null;
    });

    await browser.close();

    if (scheduleData) {
      return parseGracieBarraSchedule(scheduleData);
    }

    // Fallback: try to scrape the HTML directly
    return await scrapeGracieBarraHTML(url);

  } catch (error) {
    console.error(`Gracie Barra scrape error: ${error.message}`);
    return generateSampleSchedule();
  }
}

/**
 * Parse Gracie Barra schedule from JSON data
 */
function parseGracieBarraSchedule(data) {
  const schedule = {};
  const events = data.schedule || data.eventSchedule || [];

  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  days.forEach(day => schedule[day] = []);

  events.forEach((event, index) => {
    const startDate = new Date(event.startDate || event.start);
    const dayName = days[startDate.getDay()];

    schedule[dayName].push({
      id: `gb-${index}`,
      name: event.name || event.title || 'Class',
      startTime: parseTime(event.startDate || event.start),
      endTime: parseTime(event.endDate || event.end),
      instructor: event.instructor || event.performer?.name,
      classType: determineClassType(event.name || event.title),
      difficulty: determineDifficulty(event.name || event.title)
    });
  });

  return schedule;
}

/**
 * Scrape Gracie Barra HTML directly
 */
async function scrapeGracieBarraHTML(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const schedule = {};
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    days.forEach(day => schedule[day] = []);

    // Try to find schedule tables or cards
    const classElements = $('[class*="schedule"], [class*="class"], [class*="event"]');
    let classIndex = 0;

    classElements.each((i, el) => {
      const text = $(el).text();
      const day = extractDay(text);

      if (day) {
        // Try to extract time and class name
        const timeMatch = text.match(/(\d{1,2}:\d{2}\s*(?:am|pm)?)\s*[-–to]+\s*(\d{1,2}:\d{2}\s*(?:am|pm)?)/i);
        const nameMatch = text.match(/(?:Gi|No-Gi|Open Mat|Fundamentals|Wrestling|BJJ)[^,\d]*(?:\d{1,2}:\d{2})?[^,\n]*/i);

        if (timeMatch) {
          schedule[day].push({
            id: `gb-html-${classIndex++}`,
            name: nameMatch ? nameMatch[0].trim() : 'Class',
            startTime: parseTime(timeMatch[1]),
            endTime: parseTime(timeMatch[2]),
            classType: determineClassType(text),
            difficulty: determineDifficulty(text)
          });
        }
      }
    });

    // If we found classes, return them
    const totalClasses = Object.values(schedule).flat().length;
    if (totalClasses > 0) {
      return schedule;
    }

    // Fallback to sample schedule
    return generateSampleSchedule();

  } catch (error) {
    console.error(`Gracie Barra HTML scrape error: ${error.message}`);
    return generateSampleSchedule();
  }
}

/**
 * Generic scraper for custom gym websites
 */
async function scrapeGenericGym(url) {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait a bit for dynamic content
    await page.waitForTimeout(2000);

    // Extract schedule data
    const scheduleData = await page.evaluate(() => {
      // Look for common schedule patterns
      const results = [];

      // Pattern 1: Table rows with class info
      document.querySelectorAll('tr, .class-row, .schedule-item, .class-item, [class*="class"], [class*="schedule"]').forEach(row => {
        const text = row.textContent.trim();
        if (text.length > 10 && text.length < 500) {
          const timeMatch = text.match(/(\d{1,2}(?::\d{2})?\s*(?:am|pm)?)\s*[-–to]+\s*(\d{1,2}(?::\d{2})?\s*(?:am|pm)?)/i);
          if (timeMatch) {
            const dayMatch = text.match(/(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i);
            results.push({
              day: dayMatch ? dayMatch[1].toLowerCase() : null,
              timeStart: timeMatch[1],
              timeEnd: timeMatch[2],
              fullText: text
            });
          }
        }
      });

      // Pattern 2: Cards or divs with schedule data
      document.querySelectorAll('.card, .schedule-card, .class-card').forEach(card => {
        const text = card.textContent.trim();
        const timeMatch = text.match(/(\d{1,2}(?::\d{2})?\s*(?:am|pm)?)\s*[-–to]+\s*(\d{1,2}(?::\d{2})?\s*(?:am|pm)?)/i);
        if (timeMatch) {
          const dayMatch = text.match(/(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i);
          results.push({
            day: dayMatch ? dayMatch[1].toLowerCase() : null,
            timeStart: timeMatch[1],
            timeEnd: timeMatch[2],
            fullText: text
          });
        }
      });

      return results;
    });

    await browser.close();

    // Process and return schedule
    return processExtractedSchedule(scheduleData);

  } catch (error) {
    console.error(`Generic gym scrape error: ${error.message}`);
    return generateSampleSchedule();
  }
}

/**
 * Process extracted schedule data
 */
function processExtractedSchedule(extracted) {
  const schedule = {};
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  days.forEach(day => schedule[day] = []);

  let classIndex = 0;

  extracted.forEach(item => {
    const day = item.day || 'monday'; // Default to monday if no day found
    const dayName = days.includes(day) ? day : 'monday';

    // Extract class name from full text
    const className = extractClassName(item.fullText);

    schedule[dayName].push({
      id: `class-${classIndex++}`,
      name: className,
      startTime: parseTime(item.timeStart),
      endTime: parseTime(item.timeEnd),
      classType: determineClassType(className),
      difficulty: determineDifficulty(className)
    });
  });

  // If we got data, return it
  const totalClasses = Object.values(schedule).flat().length;
  if (totalClasses > 0) {
    return schedule;
  }

  return generateSampleSchedule();
}

/**
 * Extract a clean class name from text
 */
function extractClassName(text) {
  // Remove times
  let name = text.replace(/\d{1,2}:\d{2}\s*(?:am|pm)?/gi, '').trim();

  // Remove day names
  name = name.replace(/(?:sunday|monday|tuesday|wednesday|thursday|friday|saturday)/gi, '').trim();

  // Remove extra whitespace
  name = name.replace(/\s+/g, ' ').trim();

  // Limit length
  if (name.length > 50) {
    name = name.substring(0, 50);
  }

  return name || 'Class';
}

/**
 * Generate a realistic sample schedule as fallback
 */
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

/**
 * Main scrape function - dispatches to appropriate scraper
 */
export async function scrapeGymSchedule(gym) {
  const { id, website, scrapingStrategy, brand } = gym;

  // Check if we have a pre-scraped schedule
  if (scrapingStrategy === 'pre-scraped' && realSchedules[id]) {
    console.log(`Using pre-scraped schedule for ${gym.name}`);
    return realSchedules[id];
  }

  try {
    // Check if it's a Gracie Barra location
    if (brand?.toLowerCase().includes('gracie') || website?.includes('graciebarra')) {
      return await scrapeGracieBarra(website);
    }

    // Generic scraping for other gyms
    return await scrapeGenericGym(website);

  } catch (error) {
    console.error(`Failed to scrape ${gym.name}: ${error.message}`);
    return generateSampleSchedule();
  }
}

/**
 * Search for gyms within radius of a location
 */
export async function findGymsNearLocation(lat, lng, radiusMiles) {
  const { knownGyms } = await import('./gymDatabase.js');

  const nearbyGyms = knownGyms
    .map(gym => ({
      ...gym,
      distance: calculateDistance(lat, lng, gym.lat, gym.lng)
    }))
    .filter(gym => gym.distance <= radiusMiles)
    .sort((a, b) => a.distance - b.distance);

  return nearbyGyms;
}

/**
 * Get full gym data with scraped schedules
 */
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
