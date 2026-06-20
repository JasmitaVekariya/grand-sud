"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/common/PageBanner";
import { motion } from "framer-motion";
import MeetUsEventDates from "@/components/events/MeetUsEventDates";
import MeetUsEventsCalendar from "@/components/school/MeetUsEventsCalendar";
import { WebsiteEventsProvider } from "@/lib/website-events-context";

const sections = [
  { id: "open-doors", label: "OPEN DOORS" },
  { id: "evenings", label: "INFORMATION EVENINGS" },
  { id: "fairs", label: "FAIRS AND OTHER EVENTS" },
  { id: "all-events", label: "ALL UPCOMING EVENTS" },
];

export default function MeetUsPage() {
  const [activeSection, setActiveSection] = useState("open-doors");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white">
      <PageBanner 
        title={<>Meet <br /> us</>} 
        image="/assets/469121896_18471494152022529_2545897615371808642_n.jpg" 
        height="h-[450px]" 
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar - Navigation Section (25%) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 self-start space-y-8">
            <div className="space-y-6">
              {sections.map((section) => (
                <button 
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-start gap-4 group w-full text-left transition-all duration-300"
                >
                  <div className={`w-4 h-4 mt-1 flex-shrink-0 transition-colors duration-300 ${activeSection === section.id ? "bg-primary-red" : "bg-gray-300 group-hover:bg-red-200"}`} />
                  <span className={`text-[12px] font-bold uppercase tracking-wider leading-relaxed transition-colors duration-300 ${activeSection === section.id ? "text-primary-red" : "text-gray-400 group-hover:text-red-300"}`}>
                    {section.label}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content Area (75%) */}
          <div className="lg:col-span-9">
            
            {/* Intro Text */}
            <div className="space-y-6 mb-16 text-[14px] text-black leading-relaxed font-medium">
              <p>To choose the right program, it is important to validate your plans and your desire to specialize in tourism.</p>
              <p className="font-bold text-[16px]">We invite you to attend our events throughout the year!</p>
              <p>Come and meet:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>our students</li>
                <li>the teaching staff</li>
                <li>the management and team at Grand Sud</li>
              </ul>
              <p>and discuss the programs, life at the school, our partners, internships, careers, job opportunities, and more.</p>
            </div>

            <WebsiteEventsProvider lang="en" from="2025-01-01">
            <div className="flex flex-col space-y-0">
              
              {/* 1st Card: OPEN DOORS */}
              <section id="open-doors" className="scroll-mt-32">
                <div className="flex flex-col md:flex-row bg-[#333] min-h-[565px] overflow-hidden group">
                  <div className="w-full md:w-1/2 overflow-hidden">
                    <img 
                      src="/assets/campus-toulouse.jpg" 
                      alt="Open Doors" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-white">
                    <h2 className="text-[32px] md:text-[42px] font-bold uppercase tracking-tight leading-tight mb-8">
                      OPEN DOORS
                    </h2>
                    <div className="space-y-6 text-[14px] leading-relaxed font-medium text-white/90">
                      <p>Come and discover the school, its degree programs from high school diploma to master's degree, and its professional specializations on campus.</p>
                      <p className="font-bold text-white uppercase tracking-wider">Upcoming dates (Toulouse-Labège campus):</p>
                      <MeetUsEventDates lang="en" category="open_doors" />
                      <p className="italic text-[13px] pt-4">Note: these events are taking place onsite only</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2nd Card: INFORMATION EVENINGS */}
              <section id="evenings" className="scroll-mt-32">
                <div className="flex flex-col md:flex-row-reverse bg-[#7D1F1F] min-h-[565px] overflow-hidden group">
                  <div className="w-full md:w-1/2 overflow-hidden">
                    <img 
                      src="/assets/pexels-nafis-naim-11679666-6194135-min-1024x683.jpg" 
                      alt="Information Evenings" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-white">
                    <h2 className="text-[32px] md:text-[42px] font-bold uppercase tracking-tight leading-tight mb-8">
                      INFORMATION EVENINGS
                    </h2>
                    <div className="space-y-6 text-[14px] leading-relaxed font-medium text-white/90">
                      <p>Only available in the evenings? We welcome you once a month!</p>
                      <p className="font-bold text-white uppercase tracking-wider">Upcoming dates (Toulouse-Labège campus):</p>
                      <MeetUsEventDates lang="en" category="information_evening" />
                      <p className="italic text-[13px] pt-4">Note: these events are taking place onsite only</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3rd Card: FAIRS AND OTHER EVENTS */}
              <section id="fairs" className="scroll-mt-32">
                <div className="flex flex-col md:flex-row bg-[#333] min-h-[565px] overflow-hidden group">
                  <div className="w-full md:w-1/2 overflow-hidden">
                    <img 
                      src="/assets/469121856_18471685570022529_3223111676717879210_n.jpg" 
                      alt="Fairs and Other Events" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-white">
                    <h2 className="text-[32px] md:text-[42px] font-bold uppercase tracking-tight leading-tight mb-8">
                      FAIRS AND OTHER EVENTS
                    </h2>
                    <div className="space-y-6 text-[14px] leading-relaxed font-medium text-white/90">
                      <p>Every year, we participate in numerous trade shows and events aimed at young people looking for training opportunities. It's a chance to meet us and talk to our teams in a dynamic setting!</p>
                      <p className="font-bold text-white uppercase tracking-wider">Upcoming dates:</p>
                      <MeetUsEventDates lang="en" category="fair" className="gap-3" />
                      <p className="italic text-[13px] pt-4 leading-relaxed">Note: these events are organized by other organizations, they are usually in French and onsite unless otherwise stated</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="all-events" className="scroll-mt-32 pt-16">
                <h2 className="text-[28px] md:text-[36px] font-bold uppercase tracking-tight mb-8 text-[#2B2B2B]">
                  ALL UPCOMING EVENTS
                </h2>
                <MeetUsEventsCalendar lang="en" />
              </section>

            </div>
            </WebsiteEventsProvider>

          </div>

        </div>
      </div>
    </main>
  );
}
