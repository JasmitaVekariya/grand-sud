"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/common/PageBanner";
import { Briefcase, Globe, Banknote, Calendar, GraduationCap, Star, Flag, Building2 } from "lucide-react";

export default function HistoryPage() {
  const [activeSection, setActiveSection] = useState("tourism");

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
      const tourism = document.getElementById("tourism");
      const dates = document.getElementById("dates");
      
      if (tourism && dates) {
        const tourismPos = tourism.getBoundingClientRect().top;
        const datesPos = dates.getBoundingClientRect().top;

        if (datesPos < 200) {
          setActiveSection("dates");
        } else if (tourismPos < 200) {
          setActiveSection("tourism");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineData = [
    {
      date: "january 1991",
      title: "Grand Sud Formation is born",
      text: "With the boom in travel and vacations, there is a real need for qualified staff... To meet this need, Danielle Chevallier founded the Grand Sud Formation tourism school, the first training school for tourism professions in Toulouse. It prepares students for tour guide and activity leader qualifications.",
      icon: <Calendar className="w-5 h-5 text-white" />,
      side: "right"
    },
    {
      date: "september 1999",
      title: "Opening of the BTS Tourisme",
      text: "The school's DNA, focused on rigor, professionalism, and excellence, is applied to the industry's benchmark diploma: the BTS, which is now part of Grand Sud's training catalog.",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      side: "left"
    },
    {
      date: "september 2010",
      title: "Opening of professional specializations",
      text: "In response to demand for specific skills, Grand Sud Formation offers professional specializations in the form of intensive, short training courses designed to meet specific needs.",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      side: "right"
    },
    {
      date: "january 2011",
      title: "20 years anniversary",
      text: "In the presence of nearly 700 people, including many tourism professionals, the school celebrated its 20th anniversary with an exceptional evening event.",
      icon: <Star className="w-5 h-5 text-white" />,
      side: "left"
    },
    {
      date: "October 2015",
      title: "Opening of the first Mastère degree",
      text: "Previously focused on two-year and three-year college degrees, the school is now taking a new step forward by allowing students to continue their studies up to a five-year college degree!",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      side: "right"
    },
    {
      date: "january 2019",
      title: "BTS Tourism excellence",
      text: "The BTS Tourism program has been awarded the \"training excellence in tourism professions\" label by the CFET. Proof of the quality of our training programs.",
      icon: <Star className="w-5 h-5 text-white" />,
      side: "left"
    },
    {
      date: "2019-2021",
      title: "COVID-19 Resilience",
      text: "Despite the difficulties encountered by the tourism sector, Grand Sud Formation has continued and adapted its activities. 80% of students find an internship or work-study program.",
      icon: <Flag className="w-5 h-5 text-white" />,
      side: "right"
    },
    {
      date: "june 2024",
      title: "The Toulouse Campus is moving",
      text: "After 30 years, Grand Sud Formation is moving to premises that meet the requirements of today and tomorrow. It's the end of one chapter and the beginning of a new one.",
      icon: <Building2 className="w-5 h-5 text-white" />,
      side: "left"
    },
    {
      date: "may 2025",
      title: "Joining the SUPDEFORM group",
      text: "With this change, the school is re-energizing itself and undergoing a complete overhaul of its operations, with the introduction of a resolutely human and international dimension.",
      icon: <Flag className="w-5 h-5 text-white" />,
      side: "right"
    },
    {
      date: "August 2025",
      title: "Qualiopi certification",
      text: "As a guarantee of quality, the school has been awarded Qualiopi certification for its training and apprenticeship programs.",
      icon: <Star className="w-5 h-5 text-white" />,
      side: "left"
    },
    {
      date: "october 2025",
      title: "Launch of six new degrees",
      text: "Expanding our international reach with specialized programs designed for the global tourism market, taught entirely in English.",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      side: "right"
    }
  ];

  const t = {
    title: (
      <>
        The history of Grand Sud Tourism school
      </>
    ),
    image: "/assets/pexels-gold7k-69004-1536x1024.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
        height="h-[450px]" 
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
           
          {/* Sidebar - Navigation Section */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 self-start space-y-6">
            <button 
              onClick={() => scrollToSection("tourism")}
              className="flex items-start gap-4 group w-full text-left transition-all duration-300"
            >
              <div className={`w-4 h-4 mt-1.5 flex-shrink-0 transition-colors duration-300 ${activeSection === "tourism" ? "bg-primary-red" : "bg-gray-300 group-hover:bg-red-200"}`} />
              <span className={`text-sm md:text-base font-bold uppercase tracking-wider transition-colors duration-300 ${activeSection === "tourism" ? "text-primary-red" : "text-gray-400 group-hover:text-red-300"}`}>
                TOURISM IN FRANCE
              </span>
            </button>
            <button 
              onClick={() => scrollToSection("dates")}
              className="flex items-start gap-4 group w-full text-left transition-all duration-300"
            >
              <div className={`w-4 h-4 mt-1.5 flex-shrink-0 transition-colors duration-300 ${activeSection === "dates" ? "bg-primary-red" : "bg-gray-300 group-hover:bg-red-200"}`} />
              <span className={`text-sm md:text-base font-bold uppercase tracking-wider transition-colors duration-300 ${activeSection === "dates" ? "text-primary-red" : "text-gray-400 group-hover:text-red-300"}`}>
                KEY DATES IN OUR HISTORY
              </span>
            </button>
          </aside>
 
          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-12">
             
            {/* Introduction */}
            <div className="space-y-8">
              <p className="text-[12px] text-black leading-relaxed font-medium">
                Grand Sud Formation, a school specializing in tourism, has trained more than 5,000 people in various tourism professions since its foundation.
              </p>
              <div className="space-y-4">
                <p className="text-[12px] text-black font-bold uppercase tracking-wider">
                  Its objectives are simple:
                </p>
                <ul className="space-y-3 pl-6">
                  {["your success", "your professional development", "your skills enhancement"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[12px] text-black">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
 
            {/* Section: Tourism in France */}
            <section id="tourism" className="space-y-8 pt-8 border-t border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-red uppercase tracking-tight">
                TOURISM IN FRANCE
              </h2>
              <p className="text-[12px] text-black leading-relaxed">
                Tourism is a strategic sector of the local, national, and international economy. Every development at the school is closely linked to tourism figures and trends.
              </p>
 
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl max-w-[820px]">
                {/* Stat 1 */}
                <div className="bg-[#333] h-[277px] p-6 text-center text-white flex flex-col items-center justify-center gap-4">
                  <Briefcase className="w-10 h-10 text-gray-400" />
                  <div className="space-y-3">
                    <span className="block text-xl font-bold">2 millions</span>
                    <p className="text-[10px] uppercase tracking-widest leading-relaxed text-gray-300 px-2">
                      jobs in the region in the tourism sector (all types of jobs combined)
                    </p>
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="bg-primary-red h-[277px] p-6 text-center text-white flex flex-col items-center justify-center gap-4">
                  <Globe className="w-10 h-10 text-white/50" />
                  <div className="space-y-3">
                    <span className="block text-xl font-bold">100 millions of global visitors</span>
                    <p className="text-[10px] uppercase tracking-widest leading-relaxed text-white/80 px-2">
                      in France in 2024, with visitor numbers boosted by the Olympic and Paralympic Games
                    </p>
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="bg-[#333] h-[277px] p-6 text-center text-white flex flex-col items-center justify-center gap-4">
                  <Banknote className="w-10 h-10 text-gray-400" />
                  <div className="space-y-3">
                    <span className="block text-xl font-bold">7.5% of French GDP</span>
                    <p className="text-[10px] uppercase tracking-widest leading-relaxed text-gray-300 px-2">
                      comes from tourism, representing €71.3 billion in international revenue in 2024 (+8% compared to 2023)
                    </p>
                  </div>
                </div>
              </div>
            </section>
 
            {/* Section: Key Dates - Vertical Timeline */}
            <section id="dates" className="space-y-12 pt-8 border-t border-gray-100 pb-20 overflow-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-red uppercase tracking-tight text-center mb-24">
                KEY DATES IN OUR HISTORY
              </h2>
              
              <div className="relative">
                {/* Central Line */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-900" />
 
                <div className="space-y-12 md:space-y-24 relative">
                  {timelineData.map((item, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row items-start w-full gap-8 md:gap-0">
                      
                      {/* Center Icon */}
                      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 top-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#7D1F1F] border-4 border-white flex items-center justify-center shadow-lg">
                          {item.icon}
                        </div>
                      </div>
 
                      {/* Left Side Container */}
                      <div className={`w-full md:w-1/2 pl-12 pr-6 md:px-12 flex flex-col items-start md:items-end text-left md:text-right ${item.side === "left" ? "order-2 md:order-none" : "order-1 md:order-none"}`}>
                        {item.side === "right" ? (
                           <span className="text-lg md:text-xl font-black text-[#7D1F1F] uppercase tracking-tight mt-0 md:mt-2">{item.date}</span>
                        ) : (
                          <div className="relative bg-[#7D1F1F] p-6 md:p-8 shadow-xl rounded-sm w-full max-w-[400px]">
                            {/* Pointer - Top Right */}
                            <div className="hidden md:block absolute top-4 -right-2 w-4 h-4 bg-[#7D1F1F] transform rotate-45" />
                            {/* Pointer - Top Left (mobile only) */}
                            <div className="block md:hidden absolute top-4 -left-2 w-4 h-4 bg-[#7D1F1F] transform rotate-45" />
                            <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-tight uppercase">{item.title}</h3>
                            <p className="text-[12px] text-white/90 leading-relaxed">{item.text}</p>
                          </div>
                        )}
                      </div>
 
                      {/* Right Side Container */}
                      <div className={`w-full md:w-1/2 pl-12 pr-6 md:px-12 flex flex-col items-start text-left ${item.side === "left" ? "order-1 md:order-none" : "order-2 md:order-none"}`}>
                        {item.side === "left" ? (
                           <span className="text-lg md:text-xl font-black text-[#7D1F1F] uppercase tracking-tight mt-0 md:mt-2">{item.date}</span>
                        ) : (
                          <div className="relative bg-[#7D1F1F] p-6 md:p-8 shadow-xl rounded-sm w-full max-w-[400px]">
                            {/* Pointer - Top Left */}
                            <div className="absolute top-4 -left-2 w-4 h-4 bg-[#7D1F1F] transform rotate-45" />
                            <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-tight uppercase">{item.title}</h3>
                            <p className="text-[12px] text-white/90 leading-relaxed">{item.text}</p>
                          </div>
                        )}
                      </div>
 
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

        </div>
      </div>
    </main>
  );
}
