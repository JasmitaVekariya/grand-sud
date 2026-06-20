"use client";

import { useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useWebsiteEvents } from "@/lib/use-website-events";
import { upcomingEvents } from "@/lib/website-events-defaults";

const MONTHS_EN_UPPER = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
];

const MONTHS_FR_UPPER = [
  "JANVIER", "FÉVRIER", "MARS", "AVRIL", "MAI", "JUIN",
  "JUILLET", "AOÛT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE",
];

const FALLBACK_TICKER = [
  { day: "11", month: "JULY", time: "10:00 AM - 1:00 PM", title: "Open Days", monthFr: "JUILLET", titleFr: "Journées Portes Ouvertes" },
];

export function useEventsTicker() {
  const { lang } = useLanguage();
  const eventLang = lang === "fr" ? "fr" : "en";
  const { events, loaded } = useWebsiteEvents({ lang: eventLang, upcoming: true });

  return useMemo(() => {
    const months = eventLang === "fr" ? MONTHS_FR_UPPER : MONTHS_EN_UPPER;
    const list = upcomingEvents(events, 12);
    if (!list.length && !loaded) return FALLBACK_TICKER;
    if (!list.length) return FALLBACK_TICKER;
    return list.map((evt) => {
      const d = new Date(`${evt.date}T12:00:00`);
      return {
        day: String(d.getDate()).padStart(2, "0"),
        month: months[d.getMonth()],
        time: evt.time,
        title: evt.title,
        monthFr: MONTHS_FR_UPPER[d.getMonth()],
        titleFr: evt.title,
      };
    });
  }, [events, eventLang, loaded]);
}
