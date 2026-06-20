"use client";

import type { EventLang } from "@/lib/event-types";
import { useSharedWebsiteEvents } from "@/lib/website-events-context";
import EventsCalendar from "@/components/events/EventsCalendar";

interface MeetUsEventsCalendarProps {
  lang?: EventLang;
}

export default function MeetUsEventsCalendar({ lang = "fr" }: MeetUsEventsCalendarProps) {
  const { events } = useSharedWebsiteEvents({ lang, from: "2025-01-01" });
  return <EventsCalendar lang={lang} events={events} compact />;
}
