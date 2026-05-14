"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/common/PageBanner";
import { motion } from "framer-motion";

const sections = [
  { id: "absence", label: "Note on the absence of figures before 2026" },
  { id: "satisfaction", label: "Satisfaction rate" },
  { id: "success", label: "Success rate" },
  { id: "continuation", label: "Continuation rate after 6 months" },
  { id: "dropout", label: "Dropout rate" },
  { id: "breakup", label: "Work-study contract breakup rate" },
  { id: "employment", label: "Employment placement rate" },
];

export default function KeyFiguresPage() {
  const [activeSection, setActiveSection] = useState("absence");

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
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const RateGrid = ({ 
    title, 
    items, 
    height = "140px", 
    isDropout = false 
  }: { 
    title?: string, 
    items: { label: string, value: string, color: string }[], 
    height?: string,
    isDropout?: boolean
  }) => (
    <div className="mb-12">
      {title && <h3 className="text-[28px] font-bold text-black/80 mb-6">{title}</h3>}
      <div 
        className={`grid w-full overflow-hidden`}
        style={{ 
          gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` 
        }}
      >
        {items.map((item, i) => (
          <div 
            key={i} 
            className={`p-6 flex flex-col items-center text-center space-y-3 justify-center transition-transform hover:scale-[1.02] duration-300`}
            style={{ 
              backgroundColor: item.color,
              minHeight: isDropout ? "250px" : height
            }}
          >
            <span className="text-[52px] font-bold text-white leading-none mb-1">{item.value}</span>
            <span className="text-[14px] font-bold text-white uppercase tracking-wider mb-2">{item.label}</span>
            
            {isDropout && (
              <div className="w-full text-left space-y-2 pt-2 border-t border-white/10">
                <div className="flex flex-col">
                  <p className="text-[11px] text-white/70 uppercase tracking-wider font-bold">Number of learners:</p>
                  <p className="text-[13px] text-white font-medium">—</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[11px] text-white/70 uppercase tracking-wider font-bold">Reasons for dropping out:</p>
                  <p className="text-[13px] text-white font-medium">—</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="bg-white">
      <div className="w-full">
        <PageBanner 
          title={<>Key figures</>} 
          image="/assets/Gemini_Generated_Image_moyjrqmoyjrqmoyj-scaled-e1756663814308.png" 
          height="h-[450px]" 
        />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px] lg:px-[200px] py-16 md:py-20">
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
            
            {/* Intro Header */}
            <div className="space-y-6 mb-16">
              <p className="text-[14px] text-black leading-relaxed font-medium">
                To ensure the quality of its training programs and the satisfaction of companies and learners, the school uses performance indicators that enable it to evaluate its actions.
              </p>
              <p className="text-[14px] text-black leading-relaxed font-medium">
                These indicators are presented to you in a transparent manner because they are also a guarantee of quality for you!
              </p>
              <p className="text-[14px] text-gray-400 italic text-right">
                Last updated on May 1, 2025
              </p>
            </div>

            <div className="flex flex-col space-y-24">
              
              {/* Note Section */}
              <section id="absence" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-8">
                  Note on the absence of figures before 2026
                </h2>
                <div className="space-y-6 text-[14px] text-black leading-relaxed font-medium">
                  <p>Founded in 1991, the school has had a rich history full of successes but also ups and downs...</p>
                  <p>
                    Unfortunately, before SUPDEFORM took over as head of the school in May 2025, the figures presented were outdated, with the last quality survey dating back to 2023; and it is not easy to provide a clear and honest overview of the school's figures when you only arrive at the end of the school year....
                  </p>
                  <p>
                    We could have chosen to give approximate figures, but they would have been distorted. As our policy is to be transparent, the decision was therefore taken to only communicate concrete, verifiable, and verified figures, and therefore to wait until 2025-2026 to update this page.
                  </p>
                  <p>
                    In the meantime, you can still take a look at the indicators we will be using for the coming years, and we thank you in advance for your understanding...
                  </p>
                </div>
              </section>

              {/* Satisfaction Rate */}
              <section id="satisfaction" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Satisfaction rate
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  The satisfaction rate corresponds to the percentage of learners who gave the training a satisfaction rating of more than 5 out of 10 during the annual individual interview.
                </p>
                
                <RateGrid 
                  title="Students"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                    { label: "Autres formations", value: "0%", color: "#7D1F1F" },
                  ]}
                />
                <RateGrid 
                  title="Apprentice"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

              {/* Success Rate */}
              <section id="success" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Success rate
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  The pass rate corresponds to the percentage of learners registered for the exam who obtained certification.
                </p>
                
                <RateGrid 
                  title="Students"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                    { label: "Autres formations", value: "0%", color: "#7D1F1F" },
                  ]}
                />
                <RateGrid 
                  title="Apprentice"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

              {/* Continuation Rate */}
              <section id="continuation" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Continuation rate after 6 months
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  This percentage is obtained after a survey conducted six months after certification validation and represents the continuation of studies at Grand Sud or elsewhere.
                </p>
                
                <RateGrid 
                  title="Students"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                    { label: "Autres formations", value: "0%", color: "#7D1F1F" },
                  ]}
                />
                <RateGrid 
                  title="Apprentice"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

              {/* Dropout Rate */}
              <section id="dropout" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Dropout rate
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  This percentage is calculated based on the number of learners present at the start of the school year compared to the number of learners present at the end of the course.
                </p>
                
                <RateGrid 
                  title="Students"
                  isDropout={true}
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                    { label: "Autres formations", value: "0%", color: "#7D1F1F" },
                  ]}
                />
                <RateGrid 
                  title="Apprentice"
                  isDropout={true}
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

              {/* Work-study breakup Rate */}
              <section id="breakup" className="scroll-mt-32">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Work-study contract breakup rate
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  This percentage is calculated based on the number of contracts signed compared to the number of contracts terminated.
                </p>
                <RateGrid 
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

              {/* Employment Placement Rate */}
              <section id="employment" className="scroll-mt-32 pb-20">
                <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight mb-4">
                  Employment placement rate
                </h2>
                <p className="text-[14px] text-black font-medium mb-12">
                  The placement rate refers to learners who have successfully completed the targeted qualification.
                </p>
                <RateGrid 
                  title="Students"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                    { label: "Autres formations", value: "0%", color: "#7D1F1F" },
                  ]}
                />
                <RateGrid 
                  title="Apprentice"
                  items={[
                    { label: "BTS Tourisme", value: "0%", color: "#333" },
                    { label: "Bachelors", value: "0%", color: "#7D1F1F" },
                    { label: "Mastères", value: "0%", color: "#333" },
                  ]}
                />
              </section>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
