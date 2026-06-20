"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NewsPageCalendar from "@/components/events/NewsPageCalendar";

export default function NewsPage() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();

  // Scroll zoom animation
  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 1000], [1, 1.3]);

  // Sync language with URL path
  useEffect(() => {
    if (pathname.startsWith("/fr")) {
      setLang("fr");
    } else if (pathname.startsWith("/en")) {
      setLang("en");
    }
  }, [pathname, setLang]);

  const eventLang = lang === "fr" ? "fr" : "en";

  const t = {
    en: {
      heading: "NEWS & EVENTS",
      topText: [
        "Stay up to date with the latest news from Grand Sud Formation!",
        "Campus updates, innovations in our training programs, apprenticeship news, and student life events all offer a glimpse into the dynamic life of Grand Sud.",
      ],
      cardDate: "9 July 2025",
      cardTitle: ["Apprenticeship reform from 1 July 2025"],
      calendarSubtitle: "OPEN DAYS, IMMERSION DAYS, WEBINARS...",
      calendarTitle: "NEXT EVENTS",
      thisMonth: "This month",
      meetUs: "MEET US",
      meetUsHref: "/en/school/meetus",
      cardHref: "/en/explore/news/apprenticeship-reform"
    },
    fr: {
      heading: "ACTUALITÉS",
      topText: [
        "Retrouvez les dernières informations de la vie de Grand Sud Formation !",
        "Nouveautés des campus, innovations dans nos programmes de formation, nouvelles de l'apprentissage, ou encore événements de la vie étudiante sont autant d'aperçu sur la dynamique de l'école Grand Sud",
      ],
      cardDate: "9 juillet 2025",
      cardTitle: ["Réforme de l'apprentissage du 1er Juillet 2025"],
      calendarSubtitle: "JOURNÉES PORTES OUVERTES, JOURNÉES D'IMMERSION, WEBINAIRES...",
      calendarTitle: "PROCHAINES ÉVÈNEMENTS",
      thisMonth: "Ce mois-ci",
      meetUs: "NOUS RENCONTRER",
      meetUsHref: "/fr/lecole/rencontrer",
      cardHref: "/fr/explore/news/apprenticeship-reform"
    }
  }[lang];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full relative bg-white">
      {/* Left Section - Image (Fixed width 565px) */}
      <div className="relative w-full lg:w-[565px] lg:min-w-[565px] h-[300px] lg:h-auto overflow-hidden pt-[40px]">
        <div className="relative h-full w-full overflow-hidden">
          <motion.div 
            style={{ scale: imageScale }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/assets/pexels-ivan-samkov-4240492-scaled.jpg"
              alt="News Background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 565px"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-[#dc4b3b]/60 pointer-events-none" />
          <div className="absolute left-6 md:left-10 lg:left-12 top-[80px] md:top-[120px] py-12 pl-6 pr-4 pointer-events-none max-w-[85%]">
            {/* White border bracket */}
            <div className="absolute inset-0 border-l-[4px] border-t-[4px] border-b-[4px] border-white w-[100px]" />
            <h1 className="text-white text-[28px] md:text-[44px] lg:text-[52px] font-bold uppercase leading-[1.1] text-left tracking-tight relative z-10 whitespace-pre-line">
              {t.heading}
            </h1>
          </div>
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 px-6 pb-12 md:px-12 lg:pl-[35px] pt-[90px] flex flex-col items-start bg-white">
        <div className="max-w-[800px] w-full">
          {/* 1. Text */}
          <div className="mb-10 space-y-4">
            {t.topText.map((paragraph, idx) => (
              <p key={idx} className="text-black text-[14px] md:text-[15px] font-medium leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* 2. Clickable Card (Apprenticeship Reform) */}
          <div className="mb-14 w-full">
            <Link href={t.cardHref} className="block group">
              <div className="w-full md:max-w-md bg-white border border-gray-200 rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-5 md:p-6 flex flex-col justify-between relative">
                {/* Red Overlay on Hover */}
                <div className="absolute inset-0 bg-[#A52A25] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-10 rounded-[20px]" />
                
                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-4">
                  <Image 
                    src="/assets/events_planer.png"
                    alt="Events Planner"
                    fill
                sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-[600] text-[#2B2B2B]/60 uppercase tracking-widest">
                    {t.cardDate}
                  </span>
                  <h3 className="text-[18px] md:text-[22px] font-bold text-[#7A1F1B] leading-[1.1] uppercase group-hover:text-primary-red transition-colors">
                    {t.cardTitle.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <NewsPageCalendar
            lang={eventLang}
            subtitle={t.calendarSubtitle}
            title={t.calendarTitle}
          />

          {/* 4. Meet Us Button */}
          <div className="pt-4">
            <Link href={t.meetUsHref}>
              <button
                className="bg-[#F23A2E] text-white px-10 py-4 font-bold text-[15px] uppercase tracking-widest hover:bg-[#3d1311] transition-all duration-300 shadow-md active:scale-95 rounded-full"
              >
                {t.meetUs}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
