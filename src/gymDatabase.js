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
  },
  'gracie-tulsa': {
    monday: [
      { id: 'gracie-tulsa-mon-1', name: 'Jr Grapplers', startTime: '17:15', endTime: '18:15', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-mon-2', name: 'Gracie Combatives', startTime: '18:30', endTime: '19:30', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-mon-3', name: 'Master Cycle', startTime: '19:45', endTime: '21:00', classType: 'gi', difficulty: 'advanced' }
    ],
    tuesday: [
      { id: 'gracie-tulsa-tue-1', name: 'Little Champs', startTime: '16:30', endTime: '17:15', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-tue-2', name: 'Black Belt Club', startTime: '17:30', endTime: '18:30', classType: 'gi', difficulty: 'advanced' },
      { id: 'gracie-tulsa-tue-3', name: 'Gracie Combatives', startTime: '20:00', endTime: '21:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-tue-4', name: 'Master Cycle', startTime: '18:30', endTime: '19:45', classType: 'gi', difficulty: 'advanced' }
    ],
    wednesday: [
      { id: 'gracie-tulsa-wed-1', name: 'Little Champs', startTime: '16:15', endTime: '17:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-wed-2', name: 'Jr Grapplers', startTime: '17:15', endTime: '18:15', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-wed-3', name: 'Gracie Combatives', startTime: '11:00', endTime: '12:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-wed-4', name: 'Gracie Combatives', startTime: '18:30', endTime: '19:30', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-wed-5', name: 'Women Empowered', startTime: '19:45', endTime: '20:45', classType: 'gi', difficulty: 'all-levels' },
      { id: 'gracie-tulsa-wed-6', name: 'Master Cycle', startTime: '12:00', endTime: '13:00', classType: 'gi', difficulty: 'advanced' }
    ],
    thursday: [
      { id: 'gracie-tulsa-thu-1', name: 'Little Champs', startTime: '16:30', endTime: '17:15', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-thu-2', name: 'Jr Grapplers', startTime: '16:30', endTime: '17:30', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-thu-3', name: 'Black Belt Club', startTime: '17:30', endTime: '18:30', classType: 'gi', difficulty: 'advanced' },
      { id: 'gracie-tulsa-thu-4', name: 'Gracie Combatives', startTime: '20:00', endTime: '21:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-thu-5', name: 'Master Cycle', startTime: '18:30', endTime: '19:45', classType: 'gi', difficulty: 'advanced' }
    ],
    friday: [
      { id: 'gracie-tulsa-fri-1', name: 'Mat Munchkins', startTime: '16:45', endTime: '17:15', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-fri-2', name: 'Little Champs', startTime: '17:30', endTime: '18:15', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-fri-3', name: 'Master Cycle', startTime: '12:00', endTime: '13:00', classType: 'gi', difficulty: 'advanced' }
    ],
    saturday: [
      { id: 'gracie-tulsa-sat-1', name: 'Master Cycle', startTime: '08:30', endTime: '09:45', classType: 'gi', difficulty: 'advanced' },
      { id: 'gracie-tulsa-sat-2', name: 'Gracie Combatives', startTime: '10:00', endTime: '11:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'gracie-tulsa-sat-3', name: 'Women Empowered', startTime: '11:15', endTime: '12:15', classType: 'gi', difficulty: 'all-levels' }
    ],
    sunday: [
      { id: 'gracie-tulsa-sun-1', name: 'Closed', startTime: '00:00', endTime: '00:00', classType: 'other', difficulty: null }
    ]
  },
  'mgd-dallas': {
    monday: [
      { id: 'mgd-mon-1', name: 'Morning Gi', startTime: '06:00', endTime: '07:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'mgd-mon-2', name: 'Open Mat', startTime: '11:30', endTime: '12:30', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'mgd-mon-3', name: 'Gi', startTime: '12:00', endTime: '13:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'mgd-mon-4', name: 'Youth Gi', startTime: '17:00', endTime: '18:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'mgd-mon-5', name: 'Gi', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'mgd-mon-6', name: 'No-Gi Comp Class', startTime: '19:00', endTime: '20:00', classType: 'no-gi', difficulty: 'advanced' }
    ],
    tuesday: [
      { id: 'mgd-tue-1', name: 'Morning NoGi', startTime: '06:00', endTime: '07:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'mgd-tue-2', name: 'Open Mat', startTime: '11:30', endTime: '12:30', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'mgd-tue-3', name: 'NoGi', startTime: '12:00', endTime: '13:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'mgd-tue-4', name: 'Youth NoGi', startTime: '17:00', endTime: '18:00', classType: 'no-gi', difficulty: 'beginner' },
      { id: 'mgd-tue-5', name: 'NoGi Intermediate', startTime: '18:00', endTime: '19:00', classType: 'no-gi', difficulty: 'intermediate' },
      { id: 'mgd-tue-6', name: 'NoGi Basic', startTime: '18:00', endTime: '19:00', classType: 'no-gi', difficulty: 'beginner' },
      { id: 'mgd-tue-7', name: 'Leg Attacks', startTime: '19:00', endTime: '20:00', classType: 'no-gi', difficulty: 'intermediate' }
    ],
    wednesday: [
      { id: 'mgd-wed-1', name: 'Morning Gi', startTime: '06:00', endTime: '07:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'mgd-wed-2', name: 'Open Mat', startTime: '11:30', endTime: '12:30', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'mgd-wed-3', name: 'Gi', startTime: '12:00', endTime: '13:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'mgd-wed-4', name: 'Youth Gi', startTime: '17:00', endTime: '18:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'mgd-wed-5', name: 'Gi', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'mgd-wed-6', name: 'NoGi', startTime: '19:00', endTime: '20:00', classType: 'no-gi', difficulty: 'all-levels' }
    ],
    thursday: [
      { id: 'mgd-thu-1', name: 'Morning NoGi', startTime: '06:00', endTime: '07:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'mgd-thu-2', name: 'Open Mat', startTime: '11:30', endTime: '12:30', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'mgd-thu-3', name: 'NoGi', startTime: '12:00', endTime: '13:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'mgd-thu-4', name: 'Youth NoGi', startTime: '17:00', endTime: '18:00', classType: 'no-gi', difficulty: 'beginner' },
      { id: 'mgd-thu-5', name: 'NoGi Intermediate', startTime: '18:00', endTime: '19:00', classType: 'no-gi', difficulty: 'intermediate' },
      { id: 'mgd-thu-6', name: 'Takedowns', startTime: '19:00', endTime: '20:00', classType: 'no-gi', difficulty: 'intermediate' }
    ],
    friday: [
      { id: 'mgd-fri-1', name: 'Open Mat', startTime: '06:00', endTime: '07:00', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'mgd-fri-2', name: 'Open Mat', startTime: '11:30', endTime: '12:30', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'mgd-fri-3', name: 'Gi', startTime: '12:00', endTime: '13:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'mgd-fri-4', name: 'Gi Basic', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'beginner' }
    ],
    saturday: [
      { id: 'mgd-sat-1', name: 'Youth Comp Class', startTime: '10:00', endTime: '11:00', classType: 'gi', difficulty: 'advanced' },
      { id: 'mgd-sat-2', name: 'NoGi Basic', startTime: '11:00', endTime: '12:00', classType: 'no-gi', difficulty: 'beginner' },
      { id: 'mgd-sat-3', name: 'Ladies Only', startTime: '11:00', endTime: '12:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'mgd-sat-4', name: 'NoGi', startTime: '12:00', endTime: '13:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'mgd-sat-5', name: 'Open Mat', startTime: '13:00', endTime: '14:00', classType: 'open-mat', difficulty: 'all-levels' }
    ],
    sunday: [
      { id: 'mgd-sun-1', name: 'Open Mat', startTime: '06:00', endTime: '07:00', classType: 'open-mat', difficulty: 'all-levels' },
      { id: 'mgd-sun-2', name: 'Open Mat', startTime: '12:00', endTime: '13:00', classType: 'open-mat', difficulty: 'all-levels' }
    ]
  },
  'renzo-dfw': {
    monday: [
      { id: 'renzo-mon-1', name: 'BJJ Gi All Levels', startTime: '06:00', endTime: '07:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'renzo-mon-2', name: 'BJJ Gi All Levels', startTime: '11:00', endTime: '12:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'renzo-mon-3', name: 'BJJ Gi Intermediate', startTime: '12:00', endTime: '13:00', classType: 'gi', difficulty: 'intermediate' },
      { id: 'renzo-mon-4', name: 'Kids Gi BJJ (3-8)', startTime: '16:00', endTime: '17:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-mon-5', name: 'Kids Gi BJJ (6-12)', startTime: '17:00', endTime: '18:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-mon-6', name: 'BJJ Gi Fundamentals', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-mon-7', name: 'BJJ Gi Intermediate', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'intermediate' },
      { id: 'renzo-mon-8', name: 'Muay Thai', startTime: '18:00', endTime: '19:00', classType: 'other', difficulty: 'all-levels' }
    ],
    tuesday: [
      { id: 'renzo-tue-1', name: 'BJJ Gi All Levels', startTime: '06:00', endTime: '07:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'renzo-tue-2', name: 'BJJ Gi Comp Training', startTime: '11:00', endTime: '12:00', classType: 'gi', difficulty: 'advanced' },
      { id: 'renzo-tue-3', name: 'BJJ Gi Intermediate', startTime: '12:00', endTime: '13:00', classType: 'gi', difficulty: 'intermediate' },
      { id: 'renzo-tue-4', name: 'Kids Gi BJJ (3-8)', startTime: '16:00', endTime: '17:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-tue-5', name: 'Kids Gi BJJ (6-12)', startTime: '17:00', endTime: '18:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-tue-6', name: 'BJJ Gi Fundamentals', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-tue-7', name: 'BJJ Gi Intermediate', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'intermediate' }
    ],
    wednesday: [
      { id: 'renzo-wed-1', name: 'BJJ NoGi All Levels', startTime: '06:00', endTime: '07:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'renzo-wed-2', name: 'BJJ Gi Comp Training', startTime: '11:00', endTime: '12:00', classType: 'gi', difficulty: 'advanced' },
      { id: 'renzo-wed-3', name: 'BJJ Gi Intermediate', startTime: '12:00', endTime: '13:00', classType: 'gi', difficulty: 'intermediate' },
      { id: 'renzo-wed-4', name: 'Kids NoGi BJJ (3-8)', startTime: '16:00', endTime: '17:00', classType: 'no-gi', difficulty: 'beginner' },
      { id: 'renzo-wed-5', name: 'Kids NoGi BJJ (6-12)', startTime: '17:00', endTime: '18:00', classType: 'no-gi', difficulty: 'beginner' },
      { id: 'renzo-wed-6', name: 'BJJ Gi Fundamentals', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-wed-7', name: 'BJJ Gi Intermediate', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'intermediate' }
    ],
    thursday: [
      { id: 'renzo-thu-1', name: 'BJJ Gi All Levels', startTime: '06:00', endTime: '07:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'renzo-thu-2', name: 'BJJ Gi Comp Training', startTime: '11:00', endTime: '12:00', classType: 'gi', difficulty: 'advanced' },
      { id: 'renzo-thu-3', name: 'BJJ Gi Intermediate', startTime: '12:00', endTime: '13:00', classType: 'gi', difficulty: 'intermediate' },
      { id: 'renzo-thu-4', name: 'Kids Gi BJJ (3-8)', startTime: '16:00', endTime: '17:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-thu-5', name: 'Kids Gi BJJ (6-12)', startTime: '17:00', endTime: '18:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-thu-6', name: 'BJJ Gi Fundamentals', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-thu-7', name: 'BJJ Gi Intermediate', startTime: '18:00', endTime: '19:00', classType: 'gi', difficulty: 'intermediate' }
    ],
    friday: [
      { id: 'renzo-fri-1', name: 'Free Roll Friday', startTime: '06:00', endTime: '07:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'renzo-fri-2', name: 'Free Roll Friday', startTime: '12:00', endTime: '14:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'renzo-fri-3', name: 'Kids BJJ Game Day (3-8)', startTime: '16:00', endTime: '17:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-fri-4', name: 'Kids BJJ Game Day (8+)', startTime: '17:00', endTime: '18:00', classType: 'gi', difficulty: 'beginner' },
      { id: 'renzo-fri-5', name: 'BJJ NoGi All Levels', startTime: '18:00', endTime: '19:30', classType: 'no-gi', difficulty: 'all-levels' }
    ],
    saturday: [
      { id: 'renzo-sat-1', name: 'Kids BJJ Comp Training', startTime: '09:00', endTime: '10:00', classType: 'gi', difficulty: 'advanced' },
      { id: 'renzo-sat-2', name: 'Muay Thai', startTime: '09:00', endTime: '10:00', classType: 'other', difficulty: 'all-levels' },
      { id: 'renzo-sat-3', name: 'Kids BJJ All Levels', startTime: '10:00', endTime: '11:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'renzo-sat-4', name: 'BJJ Gi All Levels', startTime: '11:00', endTime: '12:00', classType: 'gi', difficulty: 'all-levels' },
      { id: 'renzo-sat-5', name: 'BJJ Gi All Levels', startTime: '12:00', endTime: '13:30', classType: 'gi', difficulty: 'all-levels' }
    ],
    sunday: [
      { id: 'renzo-sun-1', name: 'NoGi All Levels', startTime: '11:00', endTime: '12:00', classType: 'no-gi', difficulty: 'all-levels' },
      { id: 'renzo-sun-2', name: 'Open Mat', startTime: '12:00', endTime: '14:00', classType: 'open-mat', difficulty: 'all-levels' }
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
    id: 'gracie-tulsa',
    name: 'Gracie Jiu-Jitsu Tulsa',
    address: '2911 E 91st St',
    city: 'Tulsa',
    state: 'OK',
    zip: '74137',
    lat: 36.1472,
    lng: -95.9403,
    website: 'https://www.gracietulsa.com/schedule',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'mgd-dallas',
    name: 'Marcelo Garcia Jiu-Jitsu Dallas',
    address: '5706 E Mockingbird Ln Suite 230',
    city: 'Dallas',
    state: 'TX',
    zip: '75206',
    lat: 32.8389,
    lng: -96.7738,
    website: 'https://www.marcelogarciadallas.com/schedule',
    scrapingStrategy: 'pre-scraped'
  },
  {
    id: 'renzo-dfw',
    name: 'Renzo Gracie Jiu Jitsu DFW',
    address: '420 Grapevine Hwy Suite 118',
    city: 'Hurst',
    state: 'TX',
    zip: '76054',
    lat: 32.8331,
    lng: -97.1758,
    website: 'https://renzograciejiujitsudfw.com/schedule/',
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
    id: 'gb-west-la',
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

export function getGymsByState(state) {
  return knownGyms.filter(gym => gym.state.toLowerCase() === state.toLowerCase());
}

export function getGymsByCity(city) {
  return knownGyms.filter(gym => gym.city.toLowerCase().includes(city.toLowerCase()));
}

export function getAllStates() {
  const states = new Set(knownGyms.map(gym => gym.state));
  return Array.from(states).sort();
}

export { realSchedules };
