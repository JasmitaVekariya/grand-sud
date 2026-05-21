"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const DAYS_EN = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const DAYS_FR = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];

const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MONTHS_FR = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre"
];

const MOCK_EVENTS = [
  { date: "2026-05-20", time: "17h00 - 20h30", titleEn: "Information Evening", titleFr: "Soirée d'informations" }
];

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

  // Calendar State
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1)); // May 2026
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2026);

  const t = {
    en: {
      heading: "NEWS & EVENTS",
      topText: "Stay up to date with the latest news, announcements, academic reforms, and upcoming events at Grand Sud. Explore our articles, schedule admission meetings, and participate in our upcoming orientation days.",
      cardDate: "4 OCTOBER 2025",
      cardTitle: ["REFORM OF", "APPRENTICESHIP", "S FROM JULY 1,", "2025"],
      calendarSubtitle: "OPEN DAYS, IMMERSION DAYS, WEBINARS...",
      calendarTitle: "NEXT EVENTS",
      thisMonth: "This month",
      meetUs: "MEET US",
      meetUsHref: "/en/school/meetus",
      cardHref: "/en/explore/news/apprenticeship-reform"
    },
    fr: {
      heading: "ACTUALITÉS",
      topText: "Restez informé des dernières actualités, annonces, réformes académiques et événements à venir chez Grand Sud. Découvrez nos articles, planifiez vos entretiens d'admission et participez à nos prochaines journées d'orientation.",
      cardDate: "4 OCTOBRE 2025",
      cardTitle: ["REFORME DE", "L'APPRENTISSAGE", "DÈS LE 1 JUILLET,", "2025"],
      calendarSubtitle: "JOURNÉES PORTES OUVERTES, JOURNÉES D'IMMERSION, WEBINAIRES...",
      calendarTitle: "ÉVÉNEMENTS À VENIR",
      thisMonth: "Ce mois-ci",
      meetUs: "NOUS RENCONTRER",
      meetUsHref: "/fr/lecole/rencontrer",
      cardHref: "/fr/explore/news/apprenticeship-reform"
    }
  }[lang];

  const daysLabels = lang === 'fr' ? DAYS_FR : DAYS_EN;
  const monthLabels = lang === 'fr' ? MONTHS_FR : MONTHS_EN;

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1).getDay();
    // Adjust to Monday start (0=Mon, 6=Sun)
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    
    const days = [];
    
    // Previous month days
    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = startOffset - 1; i >= 0; i--) {
      days.push({ day: prevMonthDays - i, currentMonth: false, dateStr: "" });
    }
    
    // Current month days
    const totalDays = getDaysInMonth(year, month);
    for (let i = 1; i <= totalDays; i++) {
      const d = new Date(year, month, i);
      const dateStr = d.toISOString().split('T')[0];
      days.push({ day: i, currentMonth: true, dateStr });
    }
    
    // Next month days to fill grid (6 rows of 7 = 42 cells)
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ day: i, currentMonth: false, dateStr: "" });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  const changeMonth = (offset: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
    setSelectedYear(newDate.getFullYear());
  };

  const goToThisMonth = () => {
    const now = new Date();
    setCurrentDate(new Date(now.getFullYear(), now.getMonth(), 1));
    setSelectedYear(now.getFullYear());
  };

  const selectMonth = (monthIndex: number) => {
    setCurrentDate(new Date(selectedYear, monthIndex, 1));
    setIsSelectorOpen(false);
  };

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
          <div className="mb-10">
            <p className="text-black text-[14px] md:text-[15px] font-medium leading-relaxed">
              {t.topText}
            </p>
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

          {/* 3. Calendar Section (Exact Same Calendar) */}
          <div className="mb-14 w-full">
            {/* Header */}
            <div className="mb-8">
              <span className="text-[#2B2B2B]/60 text-[12px] md:text-[14px] font-[600] tracking-[0.2em] uppercase block mb-3">
                {t.calendarSubtitle}
              </span>
              <h2 className="text-[#F23A2E] text-[36px] md:text-[54px] font-bold tracking-tight uppercase leading-none">
                {t.calendarTitle}
              </h2>
            </div>

            {/* Sticky Controls Wrapper */}
            <div className="relative">
              {/* Controls Bar */}
              <div className="flex flex-wrap items-center justify-start gap-4 mb-8 bg-[#F5F5F5]/80 backdrop-blur-sm py-2 px-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => changeMonth(-1)}
                    className="p-2 hover:bg-white rounded-full transition-colors border border-[#E5E5E5] bg-white shadow-sm"
                  >
                    <ChevronLeft size={20} className="text-[#2B2B2B]/40" />
                  </button>
                  <button 
                    onClick={() => changeMonth(1)}
                    className="p-2 hover:bg-white rounded-full transition-colors border border-[#E5E5E5] bg-white shadow-sm"
                  >
                    <ChevronRight size={20} className="text-[#2B2B2B]/40" />
                  </button>
                </div>

                <button 
                  onClick={goToThisMonth}
                  className="px-4 py-2 border border-[#E5E5E5] bg-white rounded-[8px] text-[13px] font-[600] text-[#2B2B2B] hover:border-[#F23A2E] transition-colors shadow-sm"
                >
                  {t.thisMonth}
                </button>

                <div className="relative">
                  <button 
                    onClick={() => setIsSelectorOpen(!isSelectorOpen)}
                    className="flex items-center gap-2 px-4 py-2 text-[20px] md:text-[24px] font-[700] text-[#2B2B2B] hover:text-[#F23A2E] transition-colors"
                  >
                    {monthLabels[currentDate.getMonth()]} {currentDate.getFullYear()}
                    <ChevronDown size={20} className={`transform transition-transform ${isSelectorOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Month Selector Dropdown */}
                  <AnimatePresence>
                    {isSelectorOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 top-full mt-2 bg-white shadow-2xl rounded-2xl p-6 z-50 w-[300px] border border-[#E5E5E5]"
                      >
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#E5E5E5]">
                          <button onClick={() => setSelectedYear(selectedYear - 1)} className="p-1 hover:bg-gray-100 rounded-lg">
                            <ChevronLeft size={18} />
                          </button>
                          <span className="font-bold text-[18px]">{selectedYear}</span>
                          <button onClick={() => setSelectedYear(selectedYear + 1)} className="p-1 hover:bg-gray-100 rounded-lg">
                            <ChevronRight size={18} />
                          </button>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {monthLabels.map((m, idx) => (
                            <button
                              key={m}
                              onClick={() => selectMonth(idx)}
                              className={`py-2 px-1 text-[13px] font-[500] rounded-lg transition-colors
                                ${idx === currentDate.getMonth() && selectedYear === currentDate.getFullYear()
                                  ? 'bg-blue-600 text-white' 
                                  : 'hover:bg-gray-100 text-[#2B2B2B]'
                                }`}
                            >
                              {m.substring(0, 3)}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Calendar Table Container */}
              <div className="bg-white border border-[#E5E5E5] rounded-[2px] overflow-x-auto shadow-sm">
                <div className="min-w-[800px]">
                  {/* Day Labels */}
                  <div className="grid grid-cols-7 border-b border-[#E5E5E5]">
                    {daysLabels.map(day => (
                      <div key={day} className="py-4 px-6 text-[11px] font-[700] text-[#2B2B2B]/40 uppercase tracking-widest text-center">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 grid-rows-6 h-[700px]">
                    {calendarDays.map((dayObj, idx) => {
                      const event = MOCK_EVENTS.find(e => e.date === dayObj.dateStr);
                      
                      return (
                        <div 
                          key={idx}
                          className={`relative border-r border-b border-[#E5E5E5] p-5 group transition-colors hover:bg-[#F9F9F9]
                            ${!dayObj.currentMonth ? 'bg-[#FAFAFA]' : ''}
                            ${idx % 7 === 6 ? 'border-r-0' : ''}
                          `}
                        >
                          <span className={`text-[24px] font-bold 
                            ${dayObj.currentMonth ? 'text-[#2B2B2B]' : 'text-[#2B2B2B]/20'}
                          `}>
                            {dayObj.day}
                          </span>

                          {event && dayObj.currentMonth && (
                            <div className="mt-4 flex flex-col gap-1">
                              <span className="text-[10px] font-[600] text-[#2B2B2B]/40">
                                {event.time}
                              </span>
                              <span className="text-[13px] font-bold text-[#2B2B2B] leading-tight">
                                {lang === 'fr' ? event.titleFr : event.titleEn}
                              </span>
                            </div>
                          )}

                          {/* Hover Underline Effect */}
                          <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#2B2B2B] transition-all duration-300 group-hover:w-full" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

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
