"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProgramYear {
  id: string;
  title: string;
  hours: string;
  content: {
    unit: string;
    items: {
      label: string;
      description: string;
    }[];
  }[];
}

interface CourseProgramProps {
  title: string;
  years: ProgramYear[];
  downloadButton?: {
    label: string;
    href: string;
  };
}

export default function CourseProgram({ title, years, downloadButton }: CourseProgramProps) {
  const [openYear, setOpenYear] = useState<string | null>(years[0]?.id || null);

  const toggleYear = (id: string) => {
    setOpenYear(prev => prev === id ? null : id);
  };

  return (
    <div className="space-y-12">
      <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
        {title}
      </h2>

      <div className="space-y-1">
        {years.map((year) => (
          <div key={year.id} className="border-b border-white/10">
            <button
              onClick={() => toggleYear(year.id)}
              className="w-full bg-primary-red text-white px-6 h-[47px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
            >
              <div className="flex items-center gap-3">
                {openYear === year.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                <span className="text-[16px] font-bold tracking-wide">
                  {year.title} - {year.hours}
                </span>
              </div>
            </button>

            <AnimatePresence>
              {openYear === year.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-white"
                >
                  <div className="p-6 md:p-8 space-y-8">
                    {year.content.map((unit, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="text-[14px] font-bold text-black border-b border-gray-100 pb-1 uppercase tracking-wide">
                          {unit.unit}
                        </h3>
                        <ul className="space-y-2 list-disc list-outside pl-5">
                          {unit.items.map((item, i) => (
                            <li key={i} className="text-[12px] md:text-[14px] leading-relaxed text-gray-800">
                              <span className="font-normal text-black">{item.label}</span>
                              <span className="text-gray-700"> – {item.description}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {downloadButton && (
        <div className="flex justify-end">
          <motion.a
            href={downloadButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-red text-white px-8 py-4 rounded-full text-[14px] font-medium tracking-wide transition-colors duration-300 hover:bg-gray-600"
          >
            {downloadButton.label}
          </motion.a>
        </div>
      )}
    </div>
  );
}
