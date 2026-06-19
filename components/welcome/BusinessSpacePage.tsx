"use client";

import { 
  Calendar, 
  FileText, 
  Upload, 
  FileSignature, 
  Phone
} from "lucide-react";

interface BusinessSpacePageProps {
  lang: "en" | "fr";
}

export default function BusinessSpacePage({ lang }: BusinessSpacePageProps) {
  const t = {
    en: {
      title: "BUSINESSES\nSPACE",
      intro: [
        "The company space is an essential tool for supporting companies in their recruitment efforts.",
        "It is a platform dedicated to job, internship, and work-study searches, with offers made available online by companies and our school to our students and graduates.",
        "It also serves as a practical guide for work-study programs and internships, centralizing the necessary information and contractual documents.",
        "Our corporate relations managers and coaches support you on a daily basis for successful recruitment!",
      ],
      features: [
        {
          icon: <Calendar className="w-8 h-8" />,
          title: "View annual schedules",
          desc: "To find the work-study or internship rhythm that suits you.",
          bgColor: "bg-[#333333]",
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: "Browse the CV library",
          desc: "To select the profiles that interest you.",
          bgColor: "bg-[#8B2318]",
        },
        {
          icon: <Upload className="w-8 h-8" />,
          title: "Post and manage your offers",
          desc: "Permanent contracts, fixed-term contracts, temporary work, freelance, work-study, internships, student jobs: post your offer and receive applications directly from our students and graduates!",
          bgColor: "bg-[#333333]",
        },
        {
          icon: <FileSignature className="w-8 h-8" />,
          title: "Discover contractual documents",
          desc: "Useful for securing an internship or work-study program with one of our young people",
          bgColor: "bg-[#8B2318]",
        },
        {
          icon: <Phone className="w-8 h-8" />,
          title: "Contact our corporate relations team",
          desc: "To discuss your search with them: profiles, pre-selection... We act as a recruitment agency to provide you with the best possible support.",
          bgColor: "bg-[#333333]",
        },
      ],
    },
    fr: {
      title: "ESPACE\nENTREPRISES",
      intro: [
        "L'espace entreprise est un outil essentiel pour accompagner les entreprises dans leurs recrutements",
        "C'est une plateforme dédiée à la recherche d'emploi, de stage et d'alternance avec des offres qui sont mises à disposition en ligne par des entreprises et notre école, à destination de nos étudiants et diplômés.",
        "Il sert aussi de guide pratique pour l'alternance et le stage, centralisant les informations et les documents contractuels nécessaires.",
        "Nos chargés de relations entreprises et coachs, vous accompagnent au quotidien, pour un recrutement réussi !",
      ],
      features: [
        {
          icon: <Calendar className="w-8 h-8" />,
          title: "Consultez les plannings annuels",
          desc: "Pour trouver le rythme d'alternance ou de stage qui vous convient.",
          bgColor: "bg-[#333333]"
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: "Consultez la CVthèque",
          desc: "Pour sélectionner les profils qui vous intéressent.",
          bgColor: "bg-[#8B2318]"
        },
        {
          icon: <Upload className="w-8 h-8" />,
          title: "Postez et gérez vos offres",
          desc: "CDI, CDD, intérim, freelance, alternance, stage, jobs étudiants : proposez votre offre et recevez directement les candidatures de nos étudiants et diplômés !",
          bgColor: "bg-[#333333]"
        },
        {
          icon: <FileSignature className="w-8 h-8" />,
          title: "Découvrez les documents contractuels",
          desc: "Utiles pour concrétiser un stage ou une alternance avec l'un de nos jeunes",
          bgColor: "bg-[#8B2318]"
        },
        {
          icon: <Phone className="w-8 h-8" />,
          title: "Contactez notre équipe relations entreprises",
          desc: "Pour échanger avec elle sur votre recherche : profils, pré-sélection... Nous intervenons tel un cabinet de recrutement pour mieux vous accompagner.",
          bgColor: "bg-[#333333]"
        }
      ]
    }
  }[lang];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left side: Red Background with Bracket Title */}
      <div className="relative w-full lg:w-[565px] lg:min-w-[565px] h-[300px] lg:h-auto bg-[#dc4b3b] flex items-start justify-center overflow-hidden">
        <div className="absolute left-6 md:left-10 lg:left-12 top-[100px] md:top-[160px] py-12 pl-6 pr-4 pointer-events-none">
          {/* White border bracket style */}
          <div className="absolute inset-0 border-l-[4px] border-t-[4px] border-b-[4px] border-white w-[80px] md:w-[100px]" />
          <h1 className="text-white text-[28px] md:text-[44px] lg:text-[52px] font-bold uppercase leading-[1.1] text-left tracking-tight relative z-10 whitespace-pre-line">
            {t.title}
          </h1>
        </div>
      </div>

      {/* Right side: Content */}
      <div className="flex-1 bg-white p-6 md:p-12 lg:p-20 space-y-12 overflow-y-auto">
        {/* Intro */}
        <div className="space-y-4 max-w-4xl">
          {t.intro.map((text, idx) => (
            <p key={idx} className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
              {text}
            </p>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {t.features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`${feature.bgColor} text-white p-8 md:p-10 flex flex-col items-center text-center space-y-6 h-full min-h-[320px] transition-all hover:brightness-110 ${
                idx === 2 ? "md:col-span-2 lg:col-span-1" : ""
              } ${
                idx === 3 ? "lg:col-span-1" : ""
              } ${
                idx === 4 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="text-white/90">
                {feature.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-[16px] md:text-[19px] font-bold uppercase tracking-tight leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[13px] md:text-[14px] font-medium opacity-90 leading-relaxed max-w-[280px] md:max-w-none">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
