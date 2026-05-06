"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, TrendingUp, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const valuesData = [
  {
    id: "care",
    icon: Users,
    title: {
      en: "THAT CARES",
      fr: "HUMAINE",
    },
    content: {
      en: {
        heading: "A SCHOOL",
        p1: "At our school, learning goes hand in hand with <bold>kindness, listening,</bold> and <bold>personalized support,</bold> for a successful and peaceful future.",
        p2: "Our classes and campuses are <bold>small enough</bold> for everyone to feel at home!",
      },
      fr: {
        heading: "UNE ÉCOLE",
        p1: "Chez nous, l’apprentissage rime avec <bold>bienveillance, écoute</bold> et <bold>accompagnement personnalisé,</bold> pour un futur réussi et serein.",
        p2: "Nos classes et nos campus sont à <bold>tailles humaines</bold> pour que chacun et chacune puisse s'y retrouver !",
      },
    },
  },
  {
    id: "dynamic",
    icon: TrendingUp,
    title: {
      en: "THAT IS DYNAMIC",
      fr: "DYNAMIQUE",
    },
    content: {
      en: {
        heading: "A SCHOOL",
        p1: "Regular events, professional speakers, workshops, a rich community life, a lively campus...",
        p2: "Immerse yourself in a dynamic education program, connected to the world, for a future full of opportunities... all on a campus located in a hub of activity!",
      },
      fr: {
        heading: "UNE ÉCOLE",
        p1: "Événements réguliers, intervenants professionnels, ateliers, vie associative riche, campus vivant...",
        p2: "Immergez-vous dans un programme pédagogique dynamique, connecté au monde, pour un futur plein d'opportunités... le tout sur un campus situé dans un pôle d'activité !",
      },
    },
  },
  {
    id: "global",
    icon: Globe,
    title: {
      en: "THAT IS GLOBAL",
      fr: "INTERNATIONALE",
    },
    content: {
      en: {
        heading: "A SCHOOL",
        p1: "Master foreign languages, benefit from our <bold>international partnerships,</bold> and grow alongside students <bold>from all backgrounds</bold> in your classroom and on campus.",
        p2: "And with <bold>six degrees taught entirely in English,</bold> complementing our French-language programs, your passport to an international career is guaranteed: <bold>develop a global vision and prepare to shine anywhere in the world!</bold>",
      },
      fr: {
        heading: "UNE ÉCOLE",
        p1: "Maîtrisez les langues étrangères, bénéficiez de nos <bold>partenariats internationaux,</bold> et grandissez aux côtés d'étudiants <bold>de tous horizons</bold> dans votre classe et sur le campus.",
        p2: "Et avec <bold>six diplômes enseignés entièrement en anglais,</bold> complétant nos programmes en français, votre passeport pour une carrière internationale est garanti : <bold>développez une vision globale et préparez-vous à briller partout dans le monde !</bold>",
      },
    },
  },
];

// Helper to render text with bold parts
const FormattedText = ({ text }: { text: string }) => {
  const parts = text.split(/(<bold>.*?<\/bold>)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("<bold>") && part.endsWith("</bold>")) {
          return (
            <span key={i} className="font-bold text-white">
              {part.replace(/<\/?bold>/g, "")}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

export default function SchoolValues() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(valuesData[0].id);

  const activeData = valuesData.find((v) => v.id === activeTab)!;
  const t = activeData.content[lang];

  return (
    <section className="bg-[#F23A2E] py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px]">
        
        {/* Heading - Top Left */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[42px] md:text-[72px] font-bold uppercase leading-[1] mb-6 md:mb-8 tracking-tighter text-white"
        >
          {lang === 'fr' ? "UNE ÉCOLE" : "A SCHOOL"}
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
          
          {/* Left Side: Interactive Tabs */}
          <div className="w-full lg:w-[350px] flex flex-col gap-2">
            {valuesData.map((value) => {
              const isActive = activeTab === value.id;
              return (
                <button
                  key={value.id}
                  onClick={() => setActiveTab(value.id)}
                  className="flex items-center gap-6 px-4 py-6 transition-all text-left group relative"
                >
                  {/* Icon - Always Dark Maroon per request */}
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                    <value.icon className="w-12 h-12 text-[#8B0000]" strokeWidth={2.5} />
                  </div>
                  
                  {/* Title - Maroon when active, White when inactive */}
                  <h3 className={`text-[18px] md:text-[20px] font-bold uppercase leading-[1.1] tracking-tight max-w-[140px] transition-colors ${
                    isActive ? "text-[#8B0000]" : "text-white group-hover:text-white/80"
                  }`}>
                    {value.title[lang]}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Side: Content Area */}
          <div className="flex-1 text-white lg:pt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-6 md:gap-8 min-h-[160px]"
              >
                <p className="text-[12px] md:text-[13px] font-[400] leading-relaxed text-white/90">
                  <FormattedText text={t.p1} />
                </p>
                <p className="text-[12px] md:text-[13px] font-[400] leading-relaxed text-white/90">
                  <FormattedText text={t.p2} />
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
