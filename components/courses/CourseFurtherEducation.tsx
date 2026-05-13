"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface EducationLink {
  label: string;
  href: string;
  flag?: "FR" | "UK";
  isHighlighted?: boolean;
}

interface JobTile {
  label: string;
  isDarkRed: boolean;
}

interface CourseFurtherEducationProps {
  title: string;
  links: EducationLink[];
  jobs: JobTile[];
}

export default function CourseFurtherEducation({ title, links, jobs }: CourseFurtherEducationProps) {
  return (
    <div className="space-y-12">
      <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight">
        {title}
      </h2>

      <div className="space-y-4">
        {links.map((link, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
            <ArrowRight 
              size={24} 
              className={link.isHighlighted ? "text-primary-red" : "text-[#4D1B19]"} 
            />
            
            <div className="flex items-center gap-3">
              {link.flag && (
                <div className="relative w-6 h-4 overflow-hidden rounded-[2px] shadow-sm border border-gray-100">
                  <Image
                    src={link.flag === "FR" ? "/assets/1f1eb-1f1f7.svg" : "/assets/1f1ec-1f1e7.svg"}
                    alt={link.flag}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <Link 
                href={link.href}
                className={`text-[18px] font-bold transition-all duration-300 hover:translate-x-1
                  ${link.isHighlighted ? "text-primary-red hover:text-primary-red/80" : "text-black hover:text-primary-red"}
                `}
              >
                {link.label}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full items-stretch">
        {jobs.map((job, i) => (
          <div 
            key={i}
            className={`flex items-center justify-center px-4 py-8 text-center text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider leading-tight min-h-[100px] h-full
              ${job.isDarkRed ? "bg-[#4D1B19]" : "bg-[#3F3F3F]"}
            `}
          >
            {job.label}
          </div>
        ))}
      </div>
    </div>
  );
}
