"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Calendar, 
  FileText, 
  Upload, 
  FileSignature, 
  Phone,
  Handshake,
  Briefcase
} from "lucide-react";

interface BusinessSpacePageProps {
  lang: "en" | "fr";
}

export default function BusinessSpacePage({ lang }: BusinessSpacePageProps) {
  const t = {
    en: {
      title: "BUSINESSES\nSPACE",
      intro: [
        "This dedicated private page is an essential tool for supporting companies in their recruitment efforts.",
        "It is a platform dedicated to job, internship, and work-study searches, with offers made available online by companies and our school to our students and graduates.",
        "It also serves as a practical guide for work-study programs and internships, centralizing the necessary information and contractual documents.",
        "Our corporate relations managers and coaches are there to support you on a daily basis to ensure successful recruitment!"
      ],
      features: [
        {
          icon: <Calendar className="w-8 h-8" />,
          title: "See annual schedules",
          desc: "To find the proper rhythm for your business",
          bgColor: "bg-[#333333]"
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: "Check the CV of our students",
          desc: "To pick the ones you're interested in.",
          bgColor: "bg-[#8B2318]"
        },
        {
          icon: <Upload className="w-8 h-8" />,
          title: "Publish and manage job offers",
          desc: "Permanent contracts, fixed-term contracts, temporary work, freelance work, work-study programs, internships, student jobs: post your job offer and receive applications directly from our students and graduates!",
          bgColor: "bg-[#333333]"
        },
        {
          icon: <FileSignature className="w-8 h-8" />,
          title: "Find all contractual documents",
          desc: "Useful for securing an internship or work-study program with one of our young people",
          bgColor: "bg-[#8B2318]"
        },
        {
          icon: <Phone className="w-8 h-8" />,
          title: "Contact our corporate relations team",
          desc: "To discuss your search with them: profiles, pre-selection, etc. We act as a recruitment agency to provide you with the best possible support.",
          bgColor: "bg-[#333333]"
        }
      ],
      cta: {
        bgImage: "/assets/pexels-pixabay-532173-scaled.jpg",
        buttons: [
          { label: "Create an account", href: `/${lang}/welcome/create-a-company-account`, icon: <Handshake className="w-6 h-6" /> },
          { label: "Login", href: `/${lang}/welcome/company-login`, icon: <Briefcase className="w-6 h-6" /> }
        ]
      }
    },
    fr: {
      title: "ESPACE\nENTREPRISES",
      intro: [
        "Cette page privée dédiée est un outil essentiel pour accompagner les entreprises dans leurs efforts de recrutement.",
        "Il s'agit d'une plateforme dédiée à la recherche d'emploi, de stage et d'alternance, avec des offres mises en ligne par les entreprises et notre école auprès de nos étudiants et diplômés.",
        "Elle sert également de guide pratique pour l'alternance et les stages, centralisant les informations et documents contractuels nécessaires.",
        "Nos chargés de relations entreprises et coachs sont là pour vous accompagner au quotidien pour garantir la réussite de vos recrutements !"
      ],
      features: [
        {
          icon: <Calendar className="w-8 h-8" />,
          title: "Consulter les calendriers annuels",
          desc: "Pour trouver le bon rythme pour votre entreprise",
          bgColor: "bg-[#333333]"
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: "Consulter les CV de nos étudiants",
          desc: "Pour sélectionner les profils qui vous intéressent.",
          bgColor: "bg-[#8B2318]"
        },
        {
          icon: <Upload className="w-8 h-8" />,
          title: "Diffuser et gérer vos offres",
          desc: "CDI, CDD, intérim, freelance, alternance, stage, job étudiant : déposez votre offre et recevez directement les candidatures de nos étudiants et diplômés !",
          bgColor: "bg-[#333333]"
        },
        {
          icon: <FileSignature className="w-8 h-8" />,
          title: "Retrouver les documents contractuels",
          desc: "Utile pour sécuriser un stage ou une alternance avec l'un de nos jeunes",
          bgColor: "bg-[#8B2318]"
        },
        {
          icon: <Phone className="w-8 h-8" />,
          title: "Contacter l'équipe relations entreprises",
          desc: "Pour échanger avec eux sur votre recherche : profils, pré-sélection, etc. Nous agissons comme un cabinet de recrutement pour vous apporter le meilleur support possible.",
          bgColor: "bg-[#333333]"
        }
      ],
      cta: {
        bgImage: "/assets/pexels-pixabay-532173-scaled.jpg",
        buttons: [
          { label: "Créer un compte", href: `/${lang}/welcome/create-a-company-account`, icon: <Handshake className="w-6 h-6" /> },
          { label: "Connexion", href: `/${lang}/welcome/company-login`, icon: <Briefcase className="w-6 h-6" /> }
        ]
      }
    }
  }[lang];

  const { scrollY } = useScroll();
  const imageScale = useScroll().scrollYProgress; // We can use a simpler scroll zoom or just reuse the logic
  const zoomScale = useTransform(scrollY, [0, 1000], [1, 1.2]);

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
            <p key={idx} className={`text-[#333] text-[14px] md:text-[15px] leading-relaxed ${idx === 1 || idx === 2 ? "font-bold" : "font-medium"}`}>
              {text.split("platform dedicated to job, internship, and work-study").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="font-bold underline">platform dedicated to job, internship, and work-study</span>}
                </span>
              ))}
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

        {/* Bottom CTA with Background Zoom */}
        <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden flex items-center justify-center p-6">
          <motion.div 
            style={{ scale: zoomScale }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={t.cta.bgImage} 
              alt="Recruitment Background" 
              fill
                sizes="(max-width: 1024px) 100vw, 60vw" 
              className="object-cover" 
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
            {t.cta.buttons.map((btn, idx) => (
              <Link 
                key={idx}
                href={btn.href}
                className={`${idx === 0 ? "bg-[#8B2318]" : "bg-[#333333]"} text-white p-8 md:p-10 flex flex-col items-center justify-center space-y-4 transition-all hover:scale-[1.02] shadow-2xl`}
              >
                <div className="text-white/90">
                  {btn.icon}
                </div>
                <span className="text-[18px] md:text-[20px] font-bold uppercase tracking-wide text-center">
                  {btn.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
