"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PrerequisiteProps {
  title: string;
  items: string[];
}

interface IntakeProps {
  periodTitle: string;
  periodText: string;
  intakesTitle: string;
  nextYearLabel: string;
  nextYearValue: string;
  deferredLabel: string;
  deferredValue: string;
}

interface ProcessStep {
  title: string;
  items: {
    text: string;
    isLink?: boolean;
    linkText?: string;
  }[];
}

interface PricesProps {
  title: string;
  initialLabel: string;
  initialYear1: string;
  initialYear2: string;
  visaNote?: string;
  visaYear1?: string;
  visaYear2?: string;
  workStudyLabel: string;
  workStudyYear1: string;
  workStudyYear2: string;
  workStudyNote: string;
}

interface CourseAdmissionsProps {
  title: string;
  prerequisite: PrerequisiteProps;
  intakes: IntakeProps;
  processTitle: string;
  processSteps: ProcessStep[];
  prices: PricesProps;
}

export default function CourseAdmissions({ 
  title, 
  prerequisite, 
  intakes, 
  processTitle, 
  processSteps, 
  prices 
}: CourseAdmissionsProps) {
  const commonGap = "gap-4"; // Small space between parts

  return (
    <div className="space-y-8">
      <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight">
        {title}
      </h2>

      {/* Top Part: Prerequisite & Intakes */}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${commonGap}`}>
        {/* Prerequisite Box */}
        <div className="bg-[#4D1B19] p-8 md:p-10 text-white space-y-6 min-h-full">
          <h3 className="text-[24px] font-bold">{prerequisite.title}</h3>
          <div className="space-y-4 text-[13px] leading-relaxed text-white/90">
            {prerequisite.items.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>

        {/* Admission Period Box */}
        <div className="bg-[#3F3F3F] p-8 md:p-10 text-white space-y-10 min-h-full">
          <div className="space-y-4">
            <h3 className="text-[24px] font-bold">{intakes.periodTitle}</h3>
            <p className="text-[13px] text-white/90">{intakes.periodText}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-[28px] font-bold">{intakes.intakesTitle}</h3>
            <div className="space-y-2 text-[13px]">
              <p><span className="font-bold">{intakes.nextYearLabel}:</span> {intakes.nextYearValue}</p>
              <p><span className="font-bold">{intakes.deferredLabel}:</span> {intakes.deferredValue}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Part: Image & Process */}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${commonGap} items-stretch`}>
        {/* Left Side: Image with Scroll Zoom */}
        <div className="relative min-h-[400px] md:min-h-full w-full overflow-hidden rounded-sm group">
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/assets/apply-course-card.jpg"
              alt="Admission Process"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side: Admission Process */}
        <div className="space-y-8">
          <h3 className="text-[32px] md:text-[36px] font-bold text-gray-900 leading-tight">
            {processTitle}
          </h3>
          <div className="space-y-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-[14px] font-bold text-black uppercase tracking-wider">
                  {step.title}
                </h4>
                <div className="space-y-4 text-[13px] leading-relaxed text-gray-700">
                  {step.items.map((item, i) => (
                    <p key={i}>
                      {item.isLink ? (
                        <>
                          {item.text.split(item.linkText || "")[0]}
                          <a href="#" className="underline font-bold text-black hover:text-primary-red transition-colors">
                            {item.linkText}
                          </a>
                          {item.text.split(item.linkText || "")[1]}
                        </>
                      ) : (
                        item.text
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Part: Prices */}
      <div className="bg-[#4D1B19] p-10 md:p-12 text-white space-y-12 w-full">
        <h3 className="text-[32px] font-bold">{prices.title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Initial Fee column */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h4 className="text-[14px] font-bold uppercase tracking-widest">{prices.initialLabel}</h4>
              <div className="text-[13px] text-white/90 space-y-2">
                <p>Year 1: {prices.initialYear1}</p>
                <p>Year 2: {prices.initialYear2}</p>
              </div>
            </div>

            {prices.visaNote && (
              <div className="space-y-3">
                <p className="text-[12px] italic text-white/80 max-w-[300px]">{prices.visaNote}</p>
                <div className="text-[13px] text-white/90 space-y-2">
                  <p>Year 1: {prices.visaYear1}</p>
                  <p>Year 2: {prices.visaYear2}</p>
                </div>
              </div>
            )}
          </div>

          {/* Work-study column */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h4 className="text-[14px] font-bold uppercase tracking-widest">{prices.workStudyLabel}</h4>
              <div className="text-[13px] text-white/90 space-y-2">
                <p>Year 1: {prices.workStudyYear1}</p>
                <p>Year 2: {prices.workStudyYear2}</p>
              </div>
            </div>
            <p className="text-[12px] italic text-white/80 leading-relaxed">
              {prices.workStudyNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
