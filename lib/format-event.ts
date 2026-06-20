import type { EventLang } from './event-types';

const MONTHS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const MONTHS_FR = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

function pad2(n: number) {
  return String(n).padStart(2, '0');
}

export function formatDate(isoDate: string, lang: EventLang): string {
  const d = new Date(`${isoDate}T12:00:00`);
  if (lang === 'fr') {
    return `${d.getDate()} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;
  }
  return `${MONTHS_EN[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export function formatTimeRangeEn(start: string, end: string): string {
  const to12 = (t: string) => {
    const [h, m] = t.split(':').map(Number);
    const ampm = h >= 12 ? 'p.m.' : 'a.m.';
    const h12 = h % 12 || 12;
    return m ? `${h12}:${pad2(m)} ${ampm}` : `${h12} ${ampm}`;
  };
  return `${to12(start)} to ${to12(end)}`;
}

export function formatTimeRangeFr(start: string, end: string): string {
  return `${start.replace(':', 'h')}-${end.replace(':', 'h')}`;
}

export function formatListLabel(
  isoDate: string,
  lang: EventLang,
  time?: string | null,
  override?: string | null
): string {
  if (override) return override;
  const datePart = formatDate(isoDate, lang);
  return time ? `${datePart} – ${time}` : datePart;
}
