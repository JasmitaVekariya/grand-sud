"use client";

import type { EventCategory, EventLang } from "@/lib/event-types";
import { eventsByCategory } from "@/lib/website-events-defaults";
import { useSharedWebsiteEvents } from "@/lib/website-events-context";
import { formatListLabel } from "@/lib/format-event";

type MeetUsEventDatesProps = {
  lang: EventLang;
  category: EventCategory;
  className?: string;
};

export default function MeetUsEventDates({ lang, category, className = "" }: MeetUsEventDatesProps) {
  const { events, loaded } = useSharedWebsiteEvents({ lang, from: "2025-01-01" });
  const items = eventsByCategory(events, category);

  if (!items.length && loaded) {
    return (
      <p className={`text-[13px] italic ${className}`}>
        {lang === "fr" ? "Aucune date programmée pour le moment." : "No dates scheduled at the moment."}
      </p>
    );
  }

  return (
    <ul className={`grid grid-cols-1 gap-1 text-[13px] ${className}`}>
      {items.map((evt) => (
        <li key={evt.id}>• {formatListLabel(evt.date, lang, evt.time, evt.listLabel)}</li>
      ))}
    </ul>
  );
}
