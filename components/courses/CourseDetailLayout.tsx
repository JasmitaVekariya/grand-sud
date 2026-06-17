"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SidebarItem {
  id: string;
  label: string;
}

interface CourseDetailLayoutProps {
  sections: SidebarItem[];
  children: React.ReactNode;
  applyButton?: {
    label: string;
    href: string;
  };
}

export default function CourseDetailLayout({ sections, children, applyButton }: CourseDetailLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Sidebar (25%) */}
        <aside className="lg:col-span-3 lg:sticky lg:top-32 self-start space-y-12 bg-white">
          <div className="space-y-3 lg:pt-8">
            {sections.map((section) => (
              <button 
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center gap-3 group w-full text-left transition-all duration-300"
              >
                <div className="w-3.5 h-3.5 flex-shrink-0 bg-primary-red transition-colors duration-300" />
                <span className={`text-[13px] font-bold uppercase tracking-widest leading-tight transition-colors duration-300 ${activeSection === section.id ? "text-primary-red" : "text-[#444444] group-hover:text-primary-red/70"}`}>
                  {section.label}
                </span>
              </button>
            ))}
          </div>

          {applyButton && (
            <motion.a
              href={applyButton.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-red text-white font-bold px-6 py-3 rounded-full text-[12px] uppercase tracking-widest transition-shadow shadow-lg hover:shadow-red-900/20"
            >
              {applyButton.label}
            </motion.a>
          )}
        </aside>

        {/* Content (75%) */}
        <div className="lg:col-span-9 flex flex-col gap-24">
          {children}
        </div>

      </div>
    </div>
  );
}
