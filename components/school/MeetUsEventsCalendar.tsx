"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarX2, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const DAYS_FR = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];
const DAYS_EN = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const MONTHS_FR = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre"
];

const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

interface MeetUsEventsCalendarProps {
  lang?: "fr" | "en";
}

export default function MeetUsEventsCalendar({ lang = "fr" }: MeetUsEventsCalendarProps) {
  const daysLabels = lang === "fr" ? DAYS_FR : DAYS_EN;
  const monthLabels = lang === "fr" ? MONTHS_FR : MONTHS_EN;
  const t = {
    fr: {
      thisMonth: "Ce mois-ci",
      noEvents: "Il n'y a pas d'évènements à venir.",
      prevMonth: "Mois précédent",
      nextMonth: "Mois suivant",
    },
    en: {
      thisMonth: "This month",
      noEvents: "There are no upcoming events.",
      prevMonth: "Previous month",
      nextMonth: "Next month",
    },
  }[lang];
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(() => today.getFullYear());

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    const days: { day: number; currentMonth: boolean; dateStr: string }[] = [];

    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = startOffset - 1; i >= 0; i--) {
      days.push({ day: prevMonthDays - i, currentMonth: false, dateStr: "" });
    }

    const totalDays = getDaysInMonth(year, month);
    for (let i = 1; i <= totalDays; i++) {
      const d = new Date(year, month, i);
      days.push({
        day: i,
        currentMonth: true,
        dateStr: d.toISOString().split("T")[0],
      });
    }

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

  const isToday = (day: number, currentMonth: boolean) => {
    if (!currentMonth) return false;
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const headerDate =
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear()
      ? today
      : new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

  const formattedHeaderDate = `${String(headerDate.getDate()).padStart(2, "0")}/${String(headerDate.getMonth() + 1).padStart(2, "0")}/${headerDate.getFullYear()}`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors border border-[#E5E5E5] bg-white"
            aria-label={t.prevMonth}
          >
            <ChevronLeft size={18} className="text-[#2B2B2B]/50" />
          </button>
          <button
            type="button"
            onClick={() => changeMonth(1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors border border-[#E5E5E5] bg-white"
            aria-label={t.nextMonth}
          >
            <ChevronRight size={18} className="text-[#2B2B2B]/50" />
          </button>
        </div>

        <button
          type="button"
          onClick={goToThisMonth}
          className="px-4 py-2 border border-[#E5E5E5] bg-white rounded-[8px] text-[13px] font-semibold text-[#2B2B2B] hover:border-[#F23A2E] transition-colors"
        >
          {t.thisMonth}
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setSelectedYear(currentDate.getFullYear());
              setIsSelectorOpen(!isSelectorOpen);
            }}
            className="flex items-center gap-2 px-2 py-2 text-[18px] md:text-[22px] font-bold text-[#2B2B2B]"
          >
            {formattedHeaderDate}
            <ChevronDown
              size={18}
              className={`transition-transform ${isSelectorOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {isSelectorOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-0 top-full mt-2 z-50 w-[280px] rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-2xl isolate"
              >
                <div className="mb-4 flex items-center justify-between border-b border-[#E5E5E5] pb-4">
                  <button
                    type="button"
                    onClick={() => setSelectedYear(selectedYear - 1)}
                    className="rounded-lg p-1 hover:bg-gray-100"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="text-[18px] font-bold">{selectedYear}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedYear(selectedYear + 1)}
                    className="rounded-lg p-1 hover:bg-gray-100"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {monthLabels.map((m, idx) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => selectMonth(idx)}
                      className={`rounded-lg px-1 py-2 text-[13px] font-medium transition-colors ${
                        idx === currentDate.getMonth() &&
                        selectedYear === currentDate.getFullYear()
                          ? "bg-blue-600 text-white"
                          : "text-[#2B2B2B] hover:bg-gray-100"
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

      <div className="flex items-center gap-3 border border-[#E5E5E5] bg-[#F5F5F5] px-4 py-3 text-[14px] text-[#2B2B2B]/70">
        <CalendarX2 size={18} className="shrink-0 text-[#2B2B2B]/40" />
        <span>{t.noEvents}</span>
      </div>

      <div className="overflow-x-auto border border-[#E5E5E5] bg-white">
        <div className="min-w-[640px]">
          <div className="grid grid-cols-7 border-b border-[#E5E5E5]">
            {daysLabels.map((day) => (
              <div
                key={day}
                className="py-3 text-center text-[11px] font-bold uppercase tracking-widest text-[#2B2B2B]/40"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 grid-rows-6">
            {calendarDays.map((dayObj, idx) => (
              <div
                key={idx}
                className={`min-h-[72px] border-b border-r border-[#E5E5E5] p-3 ${
                  !dayObj.currentMonth ? "bg-[#FAFAFA]" : ""
                } ${idx % 7 === 6 ? "border-r-0" : ""}`}
              >
                <span
                  className={`text-[18px] font-bold ${
                    isToday(dayObj.day, dayObj.currentMonth)
                      ? "text-[#2B2B2B]"
                      : dayObj.currentMonth
                        ? "text-[#2B2B2B]/50"
                        : "text-[#2B2B2B]/20"
                  }`}
                >
                  {dayObj.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
