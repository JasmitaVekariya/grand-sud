'use client';

import { useEffect, useState } from 'react';
import type { EventCategory, EventLang, WebsiteEvent } from './event-types';
import { getDefaultWebsiteEvents } from './website-events-defaults';

export type UseWebsiteEventsOptions = {
  lang: EventLang;
  category?: EventCategory;
  upcoming?: boolean;
  from?: string;
};

export function useWebsiteEvents(options: UseWebsiteEventsOptions) {
  const { lang, category, upcoming, from } = options;
  const [events, setEvents] = useState<WebsiteEvent[]>(() =>
    getDefaultWebsiteEvents(lang, category)
  );
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const defaults = getDefaultWebsiteEvents(lang, category);

    (async () => {
      try {
        const qs = new URLSearchParams({ lang });
        if (category) qs.set('category', category);
        if (upcoming) qs.set('upcoming', '1');
        if (from) qs.set('from', from);
        const res = await fetch(`/api/website-events?${qs.toString()}`);
        if (!res.ok) throw new Error('fetch failed');
        const data = (await res.json()) as { events?: WebsiteEvent[] };
        if (!cancelled && data.events && data.events.length > 0) {
          setEvents(data.events);
        } else if (!cancelled) {
          setEvents(defaults);
        }
      } catch {
        if (!cancelled) setEvents(defaults);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [lang, category, upcoming, from]);

  return { events, loaded };
}
