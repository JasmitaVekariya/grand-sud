"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ChevronDown,
  Circle,
  Dot
} from "lucide-react";
import { useState } from "react";

interface HousingPageProps {
  lang: "en" | "fr";
}

export default function HousingPage({ lang }: HousingPageProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("residence");

  const t = {
    en: {
      sidebar: ["KNOW THE NEIGHBORHOODS", "THE DIFFERENT TYPES OF ACCOMMODATIONS", "ASSISTANCE IN FINDING HOUSING"],
      intro: {
        line1: "The search for student housing is an almost mandatory step for students who settle in Labège or in the outskirts of Toulouse.",
        line2: "The economic dynamism of the region, coupled with the presence of many higher schools and universities, attracts a large number of students each year.",
        line3: "It is therefore important to start in advance and to be well aware of the different options available to you."
      },
      neighborhoods: {
        title: "KNOW THE NEIGHBORHOODS",
        desc: "To properly choose your accommodation, it is important to know the surroundings well to define your search area. The choice is then made according to your desires, habits and resources!\n\nOverall, the localities to the east of our campus are cheaper, quieter (in the countryside quite often) but remain served by public transport. There is less traffic during peak hours for those who prefer the car.\n\nThe localities to the west of the campus (so towards Toulouse) are more lively, more expensive and served by a significant number of means of transport but traffic jams are more frequent.\n\nAnd, for places on the western outskirts of Toulouse, so opposite the campus, they are often cheaper but much more distant..",
        cards: [
          {
            title: "Labège, Castanet-Tolosan, Escalquens, Péchabou, Ramonville",
            desc: "Ideal for not being far from the campus.. The bus is well developed there.",
            bgColor: "bg-[#333333]",
            iconType: "full"
          },
          {
            title: "Rangueil, Pont des Demoiselles, Saint-Orens-de-Gameville",
            desc: "Very well served by public transport (metro line B) and close to the campus, it is a good alternative.",
            bgColor: "bg-[#8B2318]",
            iconType: "dot"
          },
          {
            title: "Toulouse's city center",
            desc: "Lively atmosphere, very developed public transport, but more expensive rents and more noise.",
            bgColor: "bg-[#333333]",
            iconType: "outline"
          }
        ]
      },
      types: {
        title: "THE DIFFERENT TYPES OF ACCOMMODATIONS",
        desc: "The possibilities offered to students for accommodation are numerous, each having its specificities. There are many others but the main ones are there!",
        accordions: [
          {
            id: "residence",
            title: "Student residence",
            content: "Student residences mainly offer furnished studios or one-rooms with various services (internet, laundry, etc.).\n\nThe private residences, such as Studéa or Les Belles Années, are modern, well-equipped and close to campus.\n\nThe CROUS offers affordable housing based on social criteria, accessible via the Student Social File from January."
          },
          {
            id: "flatsharing",
            title: "Flatsharing",
            content: "Shared accommodation is an economic and social solution appreciated by students, allowing them to share the costs.\n\nIt offers a wide variety of accommodation and promotes exchanges and community living.\n\nHowever, it requests good understanding between roommates and shared management of daily life."
          },
          {
            id: "individual",
            title: "Individual accommodation",
            content: "Renting via private or agency can concern a studio, an apartment or more rarely a house.\n\nResearch is done on specialized sites, being attentive to scams and preparing a solid file to present."
          },
          {
            id: "homestays",
            title: "Homestays",
            content: "The homestay room, often the most economical solution, offers a family setting adapted to students seeking calm and support."
          }
        ]
      },
      assistance: {
        title: "ASSISTANCE IN FINDING HOUSING",
        intro: "You can find your accommodation in multiple ways, but your school provides a non-exhaustive list of useful sources to help you.",
        partners: [
          { name: "Appart'City", logo: "/assets/appartcity.png" },
          { name: "Les estudines", logo: "/assets/estudines.png" },
          { name: "Recherche colocation", logo: "/assets/recherchecoloc.png" },
          { name: "Immojeune", logo: "/assets/immojeune.png" },
          { name: "Les belles années", logo: "/assets/lba.png" },
          { name: "Lokora", logo: "/assets/lokora.png" },
          { name: "Location étudiant", logo: "/assets/locetudiant.png" },
          { name: "Crous", logo: "/assets/crous.png" },
          { name: "Studylease", logo: "/assets/studylease.png" },
          { name: "Studapart", logo: "/assets/studapart.png" },
          { name: "Studently", logo: "/assets/studently.png" },
          { name: "Leboncoin", logo: "/assets/leboncoin.png" },
          { name: "Particulier à particulier", logo: "/assets/pap.png" },
          { name: "Bien ici", logo: "/assets/bienici.png" },
          { name: "Adele", logo: "/assets/adele.png" },
        ]
      }
    },
    fr: {
      sidebar: ["CONNAÎTRE LES QUARTIERS", "LES DIFFÉRENTS TYPES DE LOGEMENTS", "AIDE À LA RECHERCHE DE LOGEMENT"],
      intro: {
        line1: "La recherche d'un logement étudiant est une étape quasi obligatoire pour les étudiants qui s'installent à Labège ou dans la périphérie de Toulouse.",
        line2: "Le dynamisme économique de la région, conjugué à la présence de nombreuses écoles supérieures et universités, attire chaque année un grand nombre d'étudiants.",
        line3: "Il est donc important de s'y prendre à l'avance et de bien connaître les différentes options qui s'offrent à vous."
      },
      neighborhoods: {
        title: "CONNAÎTRE LES QUARTIERS",
        desc: "Pour bien choisir son logement, il est important de bien connaître les environs pour définir sa zone de recherche. Le choix se fait ensuite selon vos envies, vos habitudes et vos ressources !\n\nGlobalement, les localités à l'est de notre campus sont moins chères, plus calmes (à la campagne bien souvent) mais restent desservies par les transports en commun. Il y a moins de circulation aux heures de pointe pour ceux qui privilégient la voiture.\n\nLes localités à l'ouest du campus (donc vers Toulouse) sont plus animées, plus chères et desservies par un nombre important de moyens de transport mais les bouchons y sont plus fréquents.\n\nEt, pour les lieux en périphérie ouest de Toulouse, donc à l'opposé du campus, ils sont souvent moins chers mais beaucoup plus distants..",
        cards: [
          {
            title: "Labège, Castanet-Tolosan, Escalquens, Péchabou, Ramonville",
            desc: "Idéal pour ne pas être loin du campus.. Le bus y est bien développé.",
            bgColor: "bg-[#333333]",
            iconType: "full"
          },
          {
            title: "Rangueil, Pont des Demoiselles, Saint-Orens-de-Gameville",
            desc: "Très bien desservi par les transports en commun (métro ligne B) et proche du campus, c'est une bonne alternative.",
            bgColor: "bg-[#8B2318]",
            iconType: "dot"
          },
          {
            title: "Centre-ville de Toulouse",
            desc: "Ambiance animée, transports en commun très développés, mais loyers plus chers et plus de bruit.",
            bgColor: "bg-[#333333]",
            iconType: "outline"
          }
        ]
      },
      types: {
        title: "LES DIFFÉRENTS TYPES DE LOGEMENTS",
        desc: "Les possibilités offertes aux étudiants pour se loger sont nombreuses, chacune ayant ses spécificités. Il en existe bien d'autres mais les principales sont là !",
        accordions: [
          {
            id: "residence",
            title: "Résidence étudiante",
            content: "Les résidences étudiantes proposent principalement des studios ou des T1 meublés avec divers services (internet, blanchisserie, etc.).\n\nLes résidences privées, comme Studéa ou Les Belles Années, sont modernes, bien équipées et proches du campus.\n\nLe CROUS propose des logements abordables sur critères sociaux, accessibles via le Dossier Social Étudiant à partir de janvier."
          },
          {
            id: "flatsharing",
            title: "Colocation",
            content: "La colocation est une solution économique et sociale appréciée des étudiants, permettant de partager les frais.\n\nElle offre une grande variété de logements et favorise les échanges et la vie en communauté.\n\nCependant, elle demande une bonne entente entre colocataires et une gestion partagée de la vie quotidienne."
          },
          {
            id: "individual",
            title: "Logement individuel",
            content: "La location via particulier ou agence peut concerner un studio, un appartement ou plus rarement une maison.\n\nLes recherches se font sur des sites spécialisés, en étant attentif aux arnaques et en préparant un dossier solide à présenter."
          },
          {
            id: "homestays",
            title: "Chambre chez l'habitant",
            content: "La chambre chez l'habitant, souvent la solution la plus économique, offre un cadre familial adapté aux étudiants en quête de calme et d'accompagnement."
          }
        ]
      },
      assistance: {
        title: "AIDE À LA RECHERCHE DE LOGEMENT",
        intro: "Vous pouvez trouver votre logement de multiples façons, mais votre école vous propose une liste non exhaustive de sources utiles pour vous aider.",
        partners: [
          { name: "Appart'City", logo: "/assets/appartcity.png" },
          { name: "Les estudines", logo: "/assets/estudines.png" },
          { name: "Recherche colocation", logo: "/assets/recherchecoloc.png" },
          { name: "Immojeune", logo: "/assets/immojeune.png" },
          { name: "Les belles années", logo: "/assets/lba.png" },
          { name: "Lokora", logo: "/assets/lokora.png" },
          { name: "Location étudiant", logo: "/assets/locetudiant.png" },
          { name: "Crous", logo: "/assets/crous.png" },
          { name: "Studylease", logo: "/assets/studylease.png" },
          { name: "Studapart", logo: "/assets/studapart.png" },
          { name: "Studently", logo: "/assets/studently.png" },
          { name: "Leboncoin", logo: "/assets/leboncoin.png" },
          { name: "Particulier à particulier", logo: "/assets/pap.png" },
          { name: "Bien ici", logo: "/assets/bienici.png" },
          { name: "Adele", logo: "/assets/adele.png" },
        ]
      }
    }
  }[lang];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 gap-12">
      
      {/* Sticky Sidebar Navigation */}
      <aside className="lg:w-1/4 h-fit lg:sticky lg:top-32 space-y-4 hidden lg:block">
        {t.sidebar.map((item, idx) => (
          <button 
            key={idx}
            onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-'))}
            className="flex items-center gap-4 group w-full text-left"
          >
            <div className="w-4 h-4 bg-primary-red shrink-0" />
            <span className="text-[14px] font-bold text-[#444] group-hover:text-primary-red transition-colors uppercase tracking-widest">
              {item}
            </span>
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-24 pb-20">
        
        {/* Intro */}
        <section className="space-y-6">
          <p className="text-[16px] text-[#444] font-medium leading-relaxed">
            {t.intro.line1}
          </p>
          <p className="text-[16px] text-[#444] font-medium leading-relaxed">
            {t.intro.line2}
          </p>
          <p className="text-[16px] text-[#444] font-medium leading-relaxed">
            {t.intro.line3}
          </p>
        </section>

        {/* Neighborhoods Section */}
        <section id={t.sidebar[0].toLowerCase().replace(/ /g, '-')} className="scroll-mt-32 space-y-10">
          <h2 className="text-[32px] md:text-[48px] font-bold text-primary-red uppercase tracking-tight leading-none">
            {t.neighborhoods.title}
          </h2>
          
          <div className="space-y-12">
            <p className="text-[16px] text-[#444] font-medium leading-relaxed whitespace-pre-line max-w-4xl">
              {t.neighborhoods.desc}
            </p>

            {/* Neighborhood Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {t.neighborhoods.cards.map((card, idx) => (
                <div 
                  key={idx}
                  className={`${card.bgColor} p-10 text-white flex flex-col items-center text-center gap-8 min-h-[360px] justify-start border border-white/5`}
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    {card.iconType === "full" && <div className="w-10 h-10 bg-white/30 rounded-full" />}
                    {card.iconType === "dot" && <div className="w-10 h-10 border-4 border-white/30 rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-white/30 rounded-full" /></div>}
                    {card.iconType === "outline" && <div className="w-10 h-10 border-4 border-white/30 rounded-full flex items-center justify-center"><div className="w-5 h-5 border-2 border-white/30 rounded-full" /></div>}
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-[18px] font-bold leading-tight uppercase tracking-tight">
                      {card.title}
                    </h4>
                    <p className="text-[14px] opacity-90 leading-relaxed font-medium italic">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section id={t.sidebar[1].toLowerCase().replace(/ /g, '-')} className="scroll-mt-32 space-y-12">
          <h2 className="text-[32px] md:text-[48px] font-bold text-primary-red uppercase tracking-tight leading-none">
            {t.types.title}
          </h2>

          <div className="space-y-8">
            <p className="text-[16px] text-[#444] font-medium leading-relaxed max-w-4xl">
              {t.types.desc}
            </p>

            <div className="flex flex-col gap-1">
              {t.types.accordions.map((acc) => (
                <div key={acc.id} className="w-full">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                    className="w-full bg-[#F23A2E] text-white p-5 flex items-center justify-between font-bold uppercase tracking-widest text-[16px] md:text-[18px] transition-colors hover:bg-[#D42F25]"
                  >
                    {acc.title}
                    <ChevronDown size={24} className={`transition-transform duration-300 ${activeAccordion === acc.id ? 'rotate-180' : ''}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: activeAccordion === acc.id ? 'auto' : 0 }}
                    className="overflow-hidden bg-white border-x border-b border-gray-100"
                  >
                    <div className="p-8 text-[#444] font-medium text-[15px] leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assistance Section */}
        <section id={t.sidebar[2].toLowerCase().replace(/ /g, '-')} className="scroll-mt-32 space-y-12">
          <h2 className="text-[32px] md:text-[48px] font-bold text-primary-red uppercase tracking-tight leading-none">
            {t.assistance.title}
          </h2>

          {/* Hero Assistance */}
          <div className="relative w-full h-[450px] overflow-hidden group">
            <Image 
              src="/assets/pexels-fotoaibe-1571468-1024x684.jpg" 
              alt="Housing Assistance"
              fill
              className="object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute top-10 left-10 max-w-[400px] bg-white/95 backdrop-blur-sm p-8 border-l-4 border-primary-red shadow-xl">
              <p className="text-[14px] md:text-[15px] font-medium leading-relaxed text-[#333]">
                {t.assistance.intro}
              </p>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="bg-[#8B2318] p-10 md:p-20 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-20">
              {t.assistance.partners.map((partner, pidx) => (
                <div key={pidx} className="flex flex-col items-center gap-8 group relative">
                  {pidx < 2 && (
                    <span className="absolute -top-8 left-0 text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">
                      Partner
                    </span>
                  )}
                  <div className="relative w-24 h-24 bg-white p-4 overflow-hidden rounded-sm transition-transform duration-300 shadow-lg">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <h4 className="text-[14px] md:text-[15px] font-bold uppercase leading-tight tracking-widest text-center">
                    {partner.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
