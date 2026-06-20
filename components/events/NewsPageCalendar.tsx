"use client";

import type { EventLang } from "@/lib/event-types";
import { useWebsiteEvents } from "@/lib/use-website-events";
import EventsCalendar from "./EventsCalendar";

type NewsPageCalendarProps = {
  lang: EventLang;
  subtitle: string;
  title: string;
};

export default function NewsPageCalendar({ lang, subtitle, title }: NewsPageCalendarProps) {
  const { events } = useWebsiteEvents({ lang, from: "2025-01-01" });

  return (
    <div className="mb-14 w-full">
      <div className="mb-8">
        <span className="text-[#2B2B2B]/60 text-[12px] md:text-[14px] font-[600] tracking-[0.2em] uppercase block mb-3">
          {subtitle}
        </span>
        <h2 className="text-[#F23A2E] text-[36px] md:text-[54px] font-bold tracking-tight uppercase leading-none">
          {title}
        </h2>
      </div>
      <EventsCalendar lang={lang} events={events} showNoEventsBanner={false} />
    </div>
  );
}
