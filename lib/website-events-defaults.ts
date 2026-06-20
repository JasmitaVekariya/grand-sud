import type { EventCategory, EventLang, WebsiteEvent } from './event-types';

type SeedRow = {
  category: EventCategory;
  date: string;
  timeEn: string;
  timeFr: string;
  titleEn: string;
  titleFr: string;
  listEn: string;
  listFr: string;
};

const ROWS: SeedRow[] = [
  { category: 'open_doors', date: '2025-10-11', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'October 11, 2025 – 10 a.m. to 1 p.m.', listFr: '11 octobre 2025 – 10h-13h' },
  { category: 'open_doors', date: '2025-11-15', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'November 15, 2025 – 10 a.m. to 1 p.m.', listFr: '15 novembre 2025 – 10h-13h' },
  { category: 'open_doors', date: '2025-12-13', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'December 13, 2025 – 10 a.m. to 1 p.m.', listFr: '13 décembre 2025 – 10h-13h' },
  { category: 'open_doors', date: '2026-01-17', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'January 17, 2026 – 10 a.m. to 1 p.m.', listFr: '17 janvier 2026 – 10h-13h' },
  { category: 'open_doors', date: '2026-02-14', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'February 14, 2026 – 10 a.m. to 1 p.m.', listFr: '14 février 2026 – 10h-13h' },
  { category: 'open_doors', date: '2026-03-14', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'March 14, 2026 – 10 a.m. to 1 p.m.', listFr: '14 mars 2026 – 10h-13h' },
  { category: 'open_doors', date: '2026-04-11', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'April 11, 2026 – 10 a.m. to 1 p.m.', listFr: '11 avril 2026 – 10h-13h' },
  { category: 'open_doors', date: '2026-05-30', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'May 30, 2026 – 10 a.m. to 1 p.m.', listFr: '30 mai 2026 – 10h-13h' },
  { category: 'open_doors', date: '2026-06-13', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'June 13, 2026 – 10 a.m. to 1 p.m.', listFr: '13 juin 2026 – 10h-13h' },
  { category: 'open_doors', date: '2026-07-11', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'July 11, 2026 – 10 a.m. to 1 p.m.', listFr: '11 juillet 2026 – 10h-13h' },
  { category: 'open_doors', date: '2026-08-22', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'August 22, 2026 – 10 a.m. to 1 p.m.', listFr: '22 août 2026 – 10h-13h' },
  { category: 'open_doors', date: '2026-09-12', timeEn: '10 a.m. to 1 p.m.', timeFr: '10h-13h', titleEn: 'Open Days', titleFr: 'Portes ouvertes', listEn: 'September 12, 2026 – 10 a.m. to 1 p.m.', listFr: '12 septembre 2026 – 10h-13h' },
  { category: 'information_evening', date: '2025-10-15', timeEn: '5:00 p.m. to 8:30 p.m.', timeFr: '17h-20h30', titleEn: 'Information Evening', titleFr: "Soirée d'information", listEn: 'October 15, 2025 – 5:00 p.m. to 8:30 p.m.', listFr: "15 octobre 2025 – 17h-20h30" },
  { category: 'information_evening', date: '2025-11-19', timeEn: '5:00 p.m. to 8:30 p.m.', timeFr: '17h-20h30', titleEn: 'Information Evening', titleFr: "Soirée d'information", listEn: 'November 19, 2025 – 5:00 p.m. to 8:30 p.m.', listFr: '19 novembre 2025 – 17h-20h30' },
  { category: 'information_evening', date: '2025-12-17', timeEn: '5:00 p.m. to 8:30 p.m.', timeFr: '17h-20h30', titleEn: 'Information Evening', titleFr: "Soirée d'information", listEn: 'December 17, 2025 – 5:00 p.m. to 8:30 p.m.', listFr: '17 décembre 2025 – 17h-20h30' },
  { category: 'information_evening', date: '2026-01-21', timeEn: '5:00 p.m. to 8:30 p.m.', timeFr: '17h-20h30', titleEn: 'Information Evening', titleFr: "Soirée d'information", listEn: 'January 21, 2026 – 5:00 p.m. to 8:30 p.m.', listFr: '21 janvier 2026 – 17h-20h30' },
  { category: 'information_evening', date: '2026-02-18', timeEn: '5:00 p.m. to 8:30 p.m.', timeFr: '17h-20h30', titleEn: 'Information Evening', titleFr: "Soirée d'information", listEn: 'February 18, 2026 – 5:00 p.m. to 8:30 p.m.', listFr: '18 février 2026 – 17h-20h30' },
  { category: 'information_evening', date: '2026-03-18', timeEn: '5:00 p.m. to 8:30 p.m.', timeFr: '17h-20h30', titleEn: 'Information Evening', titleFr: "Soirée d'information", listEn: 'March 18, 2026 – 5:00 p.m. to 8:30 p.m.', listFr: '18 mars 2026 – 17h-20h30' },
  { category: 'information_evening', date: '2026-04-15', timeEn: '5:00 p.m. to 8:30 p.m.', timeFr: '17h-20h30', titleEn: 'Information Evening', titleFr: "Soirée d'information", listEn: 'April 15, 2026 – 5:00 p.m. to 8:30 p.m.', listFr: '15 avril 2026 – 17h-20h30' },
  { category: 'information_evening', date: '2026-05-20', timeEn: '5:00 p.m. to 8:30 p.m.', timeFr: '17h-20h30', titleEn: 'Information Evening', titleFr: "Soirée d'information", listEn: 'May 20, 2026 – 5:00 p.m. to 8:30 p.m.', listFr: '20 mai 2026 – 17h-20h30' },
  { category: 'information_evening', date: '2026-06-17', timeEn: '5:00 p.m. to 8:30 p.m.', timeFr: '17h-20h30', titleEn: 'Information Evening', titleFr: "Soirée d'information", listEn: 'June 17, 2026 – 5:00 p.m. to 8:30 p.m.', listFr: '17 juin 2026 – 17h-20h30' },
  { category: 'information_evening', date: '2026-07-15', timeEn: '5:00 p.m. to 8:30 p.m.', timeFr: '17h-20h30', titleEn: 'Information Evening', titleFr: "Soirée d'information", listEn: 'July 15, 2026 – 5:00 p.m. to 8:30 p.m.', listFr: '15 juillet 2026 – 17h-20h30' },
  { category: 'information_evening', date: '2026-08-26', timeEn: '5:00 p.m. to 8:30 p.m.', timeFr: '17h-20h30', titleEn: 'Information Evening', titleFr: "Soirée d'information", listEn: 'August 26, 2026 – 5:00 p.m. to 8:30 p.m.', listFr: '26 août 2026 – 17h-20h30' },
  { category: 'fair', date: '2025-10-04', timeEn: '', timeFr: '', titleEn: 'Higher Education Fair – Toulouse', titleFr: "Salon de l'enseignement supérieur – Toulouse", listEn: 'October 4, 2025 – Higher Education Fair – Toulouse', listFr: "4 octobre 2025 – Salon de l'enseignement supérieur – Toulouse" },
  { category: 'fair', date: '2025-11-08', timeEn: '', timeFr: '', titleEn: 'Higher Education Fair – Toulouse', titleFr: "Salon de l'enseignement supérieur – Toulouse", listEn: 'November 8, 2025 – Higher Education Fair – Toulouse', listFr: '8 novembre 2025 – Salon de l\'enseignement supérieur – Toulouse' },
  { category: 'fair', date: '2025-11-29', timeEn: '', timeFr: '', titleEn: 'Student and Work-Study Fair – Pau', titleFr: 'Salon étudiant et alternance – Pau', listEn: 'November 29, 2025 – Student and Work-Study Fair – Pau', listFr: '29 novembre 2025 – Salon étudiant et alternance – Pau' },
  { category: 'fair', date: '2026-02-07', timeEn: '', timeFr: '', titleEn: 'Higher Education and Work-Study Fair – Toulouse', titleFr: 'Salon enseignement supérieur et alternance – Toulouse', listEn: 'February 7, 2026 – Higher Education and Work-Study Fair – Toulouse', listFr: '7 février 2026 – Salon enseignement supérieur et alternance – Toulouse' },
];

function mapRow(row: SeedRow, lang: EventLang, id: number): WebsiteEvent {
  const fr = lang === 'fr';
  return {
    id,
    category: row.category,
    date: row.date,
    time: fr ? row.timeFr : row.timeEn,
    title: fr ? row.titleFr : row.titleEn,
    listLabel: fr ? row.listFr : row.listEn,
  };
}

export function getDefaultWebsiteEvents(lang: EventLang, category?: EventCategory): WebsiteEvent[] {
  let rows = ROWS;
  if (category) rows = rows.filter((r) => r.category === category);
  return rows.map((row, idx) => mapRow(row, lang, idx + 1));
}

export function eventsByCategory(events: WebsiteEvent[], category: EventCategory): WebsiteEvent[] {
  return events.filter((e) => e.category === category).sort((a, b) => a.date.localeCompare(b.date));
}

export function eventsForDate(events: WebsiteEvent[], dateStr: string): WebsiteEvent[] {
  return events.filter((e) => e.date === dateStr);
}

export function upcomingEvents(events: WebsiteEvent[], limit = 8): WebsiteEvent[] {
  const today = new Date().toISOString().split('T')[0];
  return [...events]
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, limit);
}
