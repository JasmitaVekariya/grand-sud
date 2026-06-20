"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useWebsiteEvents } from "@/lib/use-website-events";
import { upcomingEvents } from "@/lib/website-events-defaults";
import EventsCalendar from "@/components/events/EventsCalendar";

const MONTHS_EN_UPPER = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
];

const MONTHS_FR_UPPER = [
  "JANVIER", "FÉVRIER", "MARS", "AVRIL", "MAI", "JUIN",
  "JUILLET", "AOÛT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE",
];

export default function CalendarSection() {
  const { lang } = useLanguage();
  const eventLang = lang === "fr" ? "fr" : "en";
  const { events } = useWebsiteEvents({ lang: eventLang, from: "2025-01-01" });

  const t = {
    en: {
      subtitle: "OPEN DAYS, IMMERSION DAYS, WEBINARS...",
      title: "NEXT EVENTS",
      meetUs: "MEET US",
      meetUsHref: "/en/school/meetus",
    },
    fr: {
      subtitle: "JOURNÉES PORTES OUVERTES, JOURNÉES D'IMMERSION, WEBINAIRES...",
      title: "PROCHAINES ÉVÈNEMENTS",
      meetUs: "NOUS RENCONTRER",
      meetUsHref: "/fr/lecole/rencontrer",
    },
  }[lang];

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px]">
        <div className="text-center mb-12">
          <span className="text-[#2B2B2B]/60 text-[12px] md:text-[14px] font-[600] tracking-[0.2em] uppercase block mb-3">
            {t.subtitle}
          </span>
          <h2
            className={`text-[#F23A2E] text-[40px] md:text-[64px] font-bold tracking-tight leading-none ${lang === "en" ? "uppercase" : "normal-case"}`}
          >
            {t.title}
          </h2>

          {lang === "fr" && (
            <div className="mt-8 flex justify-center">
              <Link href={t.meetUsHref}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F23A2E] text-white px-10 py-4 rounded-full font-bold text-[15px] uppercase tracking-widest hover:bg-[#666666] transition-all duration-300 shadow-lg"
                >
                  {t.meetUs}
                </motion.button>
              </Link>
            </div>
          )}
        </div>

        <EventsCalendar lang={eventLang} events={events} showNoEventsBanner={false} />

        {lang === "en" && (
          <div className="mt-12 flex justify-center">
            <Link href={t.meetUsHref}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F23A2E] text-white px-10 py-4 rounded-full font-bold text-[15px] uppercase tracking-widest hover:bg-[#666666] transition-all duration-300 shadow-lg"
              >
                {t.meetUs}
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function useTickerEvents(lang: "en" | "fr") {
  const { events } = useWebsiteEvents({ lang, upcoming: true });
  const months = lang === "fr" ? MONTHS_FR_UPPER : MONTHS_EN_UPPER;
  return upcomingEvents(events, 12).map((evt) => {
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
}
