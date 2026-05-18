"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
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

export default function CalendarSection() {
  const { lang } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1)); // May 2026
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2026);

  const t = {
    en: {
      subtitle: "OPEN DAYS, IMMERSION DAYS, WEBINARS...",
      title: "NEXT EVENTS",
      thisMonth: "This month",
      meetUs: "MEET US"
    },
    fr: {
      subtitle: "JOURNÉES PORTES OUVERTES, JOURNÉES D'IMMERSION, WEBINAIRES...",
      title: "ÉVÉNEMENTS À VENIR",
      thisMonth: "Ce mois-ci",
      meetUs: "RECONTRER NOUS"
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
    <section className="bg-[#F5F5F5] py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px]">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#2B2B2B]/60 text-[12px] md:text-[14px] font-[600] tracking-[0.2em] uppercase block mb-3">
            {t.subtitle}
          </span>
          <h2 className="text-[#F23A2E] text-[40px] md:text-[64px] font-bold tracking-tight uppercase leading-none">
            {t.title}
          </h2>
        </div>

        {/* Sticky Controls Wrapper */}
        <div className="relative">
          {/* Controls Bar - Sticky within section */}
          <div className="sticky top-4 z-30 flex items-center justify-start gap-4 mb-8 bg-[#F5F5F5]/80 backdrop-blur-sm py-2 px-4 rounded-xl">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => changeMonth(-1)}
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <ChevronLeft size={20} className="text-[#2B2B2B]/40" />
              </button>
              <button 
                onClick={() => changeMonth(1)}
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <ChevronRight size={20} className="text-[#2B2B2B]/40" />
              </button>
            </div>

            <button 
              onClick={goToThisMonth}
              className="px-4 py-2 border border-[#E5E5E5] bg-white rounded-[8px] text-[13px] font-[600] text-[#2B2B2B] hover:border-[#F23A2E] transition-colors"
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
                  <div key={day} className="py-4 px-6 text-[11px] font-[700] text-[#2B2B2B]/40 uppercase tracking-widest">
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

        {/* Footer Button */}
        <div className="mt-12 flex justify-center">
          <Link href={lang === 'en' ? "/en/school/meetus" : "/fr/lecole/rencontrer"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F23A2E] text-white px-10 py-4 rounded-full font-bold text-[15px] uppercase tracking-widest hover:bg-[#666666] transition-all duration-300 shadow-lg"
            >
              {t.meetUs}
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}
