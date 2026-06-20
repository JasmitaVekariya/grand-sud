export type EventCategory = 'open_doors' | 'information_evening' | 'fair' | 'other';

export type WebsiteEvent = {
  id: number;
  category: EventCategory;
  date: string;
  time: string;
  title: string;
  listLabel: string;
  campus?: string | null;
};

export type EventLang = 'en' | 'fr';
