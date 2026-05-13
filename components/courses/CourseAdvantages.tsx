"use client";

import { GraduationCap, CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay } from "lucide-react";

interface Advantage {
  icon: any;
  text: string;
  isDarkRed?: boolean;
}

interface CourseAdvantagesProps {
  title: string;
  subtitle: string;
  topHighlight: string;
  advantages: Advantage[];
}

export default function CourseAdvantages({ title, subtitle, topHighlight, advantages }: CourseAdvantagesProps) {
  return (
    <div className="space-y-12">
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-[32px] md:text-[42px] font-bold text-gray-900 leading-tight">
          {title}
        </h2>
        <p className="text-[16px] text-gray-700 leading-relaxed font-medium">
          {subtitle}
        </p>
      </div>

      <div className="w-full max-w-[835px]">
        {/* Top Highlight Box */}
        <div className="bg-primary-red text-white p-8 flex items-center gap-8 h-[100px]">
          <div className="flex-shrink-0">
            <GraduationCap size={56} className="text-white/40" strokeWidth={1.5} />
          </div>
          <p className="text-[18px] md:text-[20px] font-bold uppercase tracking-wide leading-tight">
            {topHighlight}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {advantages.map((adv, index) => (
            <div 
              key={index}
              className={`h-[140px] p-6 flex flex-col items-center justify-center text-center gap-4 transition-transform duration-300 hover:scale-[1.02] ${
                adv.isDarkRed ? "bg-[#4D1B19]" : "bg-[#3F3F3F]"
              }`}
            >
              <div className="text-white/60">
                <adv.icon size={32} strokeWidth={1.5} />
              </div>
              <p className="text-white text-[13px] font-bold uppercase tracking-wider leading-snug max-w-[200px]">
                {adv.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
