"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  MessageCircle, 
  Send, 
  Leaf, 
  Building, 
  Users, 
  User 
} from "lucide-react";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";

interface ApprenticePageProps {
  lang: "en" | "fr";
}

const CourseCard = ({ item }: { item: any }) => {
  return (
    <div className={`${item.bgColor} text-white p-6 flex flex-col items-center text-center space-y-4 h-full min-h-[350px]`}>
      <div className="text-white/90 py-2">
        {item.icon}
      </div>
      <div className="space-y-3 flex-grow">
        <h3 className="text-[15px] md:text-[17px] font-bold uppercase leading-tight tracking-tight">
          {item.title}
        </h3>
        <p className="text-[12px] md:text-[13px] font-bold opacity-90 leading-relaxed uppercase">
          {item.qualification}
        </p>
      </div>
      <div className="pt-4 border-t border-white/20 w-full">
        <p className="text-[12px] md:text-[13px] font-medium leading-relaxed opacity-90">
          {item.rhythm}
        </p>
      </div>
    </div>
  );
};

export default function ApprenticePage({ lang }: ApprenticePageProps) {
  const t = {
    en: {
      title: "RECRUIT AN APPRENTICE",
      heroTitle: "HIRE THE RIGHT APPRENTICE",
      bannerImage: "/assets/pexels-mikhail-nilov-7820321-scaled.jpg",
      sidebar: [
        { id: "courses", label: "OUR LEARNERS' TRAINING COURSES" },
        { id: "regulations", label: "APPLICABLE REGULATIONS" },
      ],
      note: "Note : our apprentice are only coming from our french-speaking courses at this time.",
      intro: "This page guides you through the training programs we offer and details the regulatory framework for work-study programs, as well as how to recruit one of our young people: make your search a success with our corporate relations managers!",
      courses: {
        title: "OUR LEARNERS' TRAINING COURSES",
        grid: [
          {
            icon: <MessageCircle className="w-10 h-10" />,
            title: "BTS Communication",
            qualification: "National Education Diploma - BAC+2",
            rhythm: "On average, 3 days at school for every 2 days at work, with availability for almost full-time work during the summer period.",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Send className="w-10 h-10" />,
            title: "BTS Tourism",
            qualification: "National Education Diploma - BAC+2",
            rhythm: "On average, 3 days at school for every 2 days at work, with availability for almost full-time work during the summer period.",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Leaf className="w-10 h-10" />,
            title: "BACHELOR Sustainable and Digital Tourism Development",
            qualification: "RNCP qualification - BAC+3",
            rhythm: "On average, one week at school for every week in a company, with almost full-time availability during the summer period.",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Building className="w-10 h-10" />,
            title: "BACHELOR Hospitality Management",
            qualification: "RNCP qualification - BAC+3",
            rhythm: "On average, one week at school for every week in a company, with almost full-time availability during the summer period.",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Users className="w-10 h-10" />,
            title: "BACHELOR MICE Designer",
            qualification: "RNCP qualification - BAC+3",
            rhythm: "On average, one week at school for every week in a company, with almost full-time availability during the summer period.",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <User className="w-10 h-10" />,
            title: "MASTERE Tourism Strategy Manager",
            qualification: "RNCP qualification - BAC+5",
            rhythm: "On average, one week at school for every week in a company, with almost full-time availability during the summer period.",
            bgColor: "bg-[#333333]"
          }
        ]
      },
      regulations: {
        title: "APPLICABLE REGULATIONS",
        paragraphs: [
          "In France, work-study programs are governed by regulations designed to protect young people and ensure that this professional experience is of high quality. It also allows companies to benefit from subsidies for hiring this type of employee."
        ]
      }
    },
    fr: {
      title: "RECRUTER EN ALTERNANCE",
      heroTitle: "RECRUTER LE BON ALTERNANT",
      bannerImage: "/assets/pexels-mikhail-nilov-7820321-scaled.jpg",
      sidebar: [
        { id: "courses", label: "LES FORMATIONS DE NOS APPRENANTS" },
        { id: "regulations", label: "RÉGLEMENTATION APPLICABLE" },
      ],
      note: "Note : nos alternants proviennent uniquement de nos cursus francophones pour le moment.",
      intro: "Cette page vous guide à travers les programmes de formation que nous proposons et détaille le cadre réglementaire de l'alternance, ainsi que les modalités de recrutement de l'un de nos jeunes : faites de votre recherche un succès avec nos chargés de relations entreprises !",
      courses: {
        title: "LES FORMATIONS DE NOS APPRENANTS",
        grid: [
          {
            icon: <MessageCircle className="w-10 h-10" />,
            title: "BTS Communication",
            qualification: "Diplôme de l'Éducation Nationale - BAC+2",
            rhythm: "En moyenne, 3 jours à l'école pour 2 jours en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Send className="w-10 h-10" />,
            title: "BTS Tourisme",
            qualification: "Diplôme de l'Éducation Nationale - BAC+2",
            rhythm: "En moyenne, 3 jours à l'école pour 2 jours en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Leaf className="w-10 h-10" />,
            title: "BACHELOR Responsable du Développement Touristique Durable et Numérique",
            qualification: "Titre RNCP - BAC+3",
            rhythm: "En moyenne, une semaine à l'école pour une semaine en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Building className="w-10 h-10" />,
            title: "BACHELOR Management de l'Hôtellerie",
            qualification: "Titre RNCP - BAC+3",
            rhythm: "En moyenne, une semaine à l'école pour une semaine en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Users className="w-10 h-10" />,
            title: "BACHELOR MICE Designer",
            qualification: "Titre RNCP - BAC+3",
            rhythm: "En moyenne, une semaine à l'école pour une semaine en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <User className="w-10 h-10" />,
            title: "MASTÈRE Manager en Stratégie Touristique",
            qualification: "Titre RNCP - BAC+5",
            rhythm: "En moyenne, une semaine à l'école pour une semaine en entreprise, avec une disponibilité quasi à temps plein durant la période estivale.",
            bgColor: "bg-[#333333]"
          }
        ]
      },
      regulations: {
        title: "RÉGLEMENTATION APPLICABLE",
        paragraphs: [
          "En France, l'alternance est régie par une réglementation visant à protéger les jeunes et à garantir une expérience professionnelle de qualité. Elle permet également aux entreprises de bénéficier d'aides à l'embauche pour ce type de profil."
        ]
      }
    }
  }[lang];

  const { scrollY } = useScroll();
  const cardScale = useTransform(scrollY, [0, 1000], [1, 1.05]);

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.heroTitle}
        image={t.bannerImage}
      />

      <div className="pt-4">
        <CourseDetailLayout sections={t.sidebar}>
          <div className="pb-8 space-y-20">
            {/* Intro */}
            <div className="space-y-6 max-w-4xl">
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-bold italic">
                {t.note}
              </p>
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                {t.intro}
              </p>
            </div>

            {/* Courses Section */}
            <section id="courses" className="scroll-mt-32 space-y-12">
              <h2 className="text-[#dc4b3b] text-[20px] md:text-[32px] font-bold uppercase tracking-tight leading-tight">
                {t.courses.title}
              </h2>

              <div className="flex flex-wrap">
                {t.courses.grid.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    style={{ scale: cardScale }}
                    className={`w-full ${idx < 4 ? "md:w-1/2 lg:w-1/4" : "md:w-1/2 lg:w-1/2"}`}
                  >
                    <CourseCard item={item} />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Regulations Section */}
            <section id="regulations" className="scroll-mt-32 space-y-8 pb-12">
              <h2 className="text-[#dc4b3b] text-[20px] md:text-[32px] font-bold uppercase tracking-tight leading-tight">
                {t.regulations.title}
              </h2>
              <div className="space-y-6">
                {t.regulations.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </CourseDetailLayout>
      </div>
    </main>
  );
}
