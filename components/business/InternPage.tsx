"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  MessageCircle, 
  Send, 
  Leaf, 
  Building, 
  Users, 
  User, 
  Globe,
  PieChart,
  Code,
  LineChart,
  Handshake,
  Briefcase
} from "lucide-react";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";

interface InternPageProps {
  lang: "en" | "fr";
}

const CourseCard = ({ item }: { item: any }) => {
  return (
    <div className={`${item.bgColor} text-white p-6 flex flex-col items-center text-center space-y-4 h-full min-h-[320px]`}>
      <div className="text-white/90 py-2">
        {item.icon}
      </div>
      <div className="space-y-3 flex-grow">
        <h3 className="text-[15px] md:text-[17px] font-bold uppercase leading-tight tracking-tight">
          {item.title}
        </h3>
        <p className="text-[12px] md:text-[13px] font-medium opacity-90 leading-relaxed">
          {item.subtitle}
        </p>
      </div>
      <div className="pt-4 border-t border-white/20 w-full">
        <p className="text-[11px] md:text-[12px] font-medium leading-relaxed opacity-80">
          {item.duration}
        </p>
      </div>
    </div>
  );
};

export default function InternPage({ lang }: InternPageProps) {
  const t = {
    en: {
      title: "HIRE AN INTERN",
      heroTitle: "FIND THE RIGHT INTERN",
      bannerImage: "/assets/pexels-danxavier-1239291-scaled.jpg",
      sidebar: [
        { id: "courses", label: "OUR TRAINEES' TRAINING COURSES" },
        { id: "regulations", label: "APPLICABLE REGULATIONS" },
        { id: "how-to", label: "HOW TO FIND AN INTERN?" },
      ],
      intro: "This page guides you through the training courses on offer and details the regulatory framework for internships, as well as how to recruit one of our students: make your search a success with our corporate relations officers!",
      frenchCourses: {
        title: "OUR TRAINEES' TRAINING COURSES",
        subtitle: "Courses in French",
        desc: "Students from these programs are all French speakers (minimum level B1) and, in addition to the skills acquired during their studies, are also able to express themselves in English and at least one other language.",
        grid: [
          {
            icon: <MessageCircle className="w-10 h-10" />,
            title: "BTS Communication",
            subtitle: "State Diploma from the French Ministry of Education - BAC+2",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Send className="w-10 h-10" />,
            title: "BTS Tourism",
            subtitle: "State Diploma from the French Ministry of Education - BAC+2",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Leaf className="w-10 h-10" />,
            title: "BACHELOR Sustainable and Digital Tourism Development Manager",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum 14-week internship",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Building className="w-10 h-10" />,
            title: "BACHELOR Hospitality Management",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum 14-week internship",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Users className="w-10 h-10" />,
            title: "BACHELOR MICE Designer",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum 14-week internship",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <User className="w-10 h-10" />,
            title: "MASTERE Manager in Tourism Strategy",
            subtitle: "RNCP qualification - Mastère's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Globe className="w-10 h-10" />,
            title: "Travel Advisor",
            subtitle: "Certification training",
            duration: "Minimum 14-week internship",
            bgColor: "bg-[#8B2318]"
          }
        ]
      },
      englishCourses: {
        subtitle: "Courses in English",
        desc: "The students enrolled in these programs are primarily English speakers (minimum B1 level) and have international backgrounds. Some students also speak French, while others speak several languages: internationalism is an important value for Grand Sud!",
        grid: [
          {
            icon: <PieChart className="w-10 h-10" />,
            title: "BACHELOR Business & Tourism",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 42 weeks in total)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Building className="w-10 h-10" />,
            title: "BACHELOR Hospitality Management",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 42 weeks in total)",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Code className="w-10 h-10" />,
            title: "BACHELOR IT & Tourism",
            subtitle: "RNCP qualification - Bachelor's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 42 weeks in total)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <LineChart className="w-10 h-10" />,
            title: "MASTERE Business & Tourism",
            subtitle: "RNCP qualification - Master's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Building className="w-10 h-10" />,
            title: "MASTERE Hospitality Management",
            subtitle: "RNCP qualification - Master's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Code className="w-10 h-10" />,
            title: "MASTERE IT & Tourism",
            subtitle: "RNCP qualification - Master's degree",
            duration: "Minimum of 14 weeks of internship per year (i.e., a minimum of 28 weeks in total)",
            bgColor: "bg-[#8B2318]"
          }
        ]
      },
      regulations: {
        title: "APPLICABLE REGULATIONS",
        paragraphs: [
          "In France, internships are governed by strict regulations designed to protect interns and ensure that these professional experiences are educational.",
          "Law No. 2014-788 of July 10, 2014 (known as the \"Youth Guarantee\" or \"Internship\" law) is one of the key pieces of legislation that has consolidated and strengthened the rights of interns.",
          "Some of those rules are :"
        ],
        bullets: [
          "the obligation to sign an internship agreement,",
          "remuneration as soon as the internship exceeds two months,",
          "a maximum working time of seven hours per day, for 5 days a week,",
          "a maximum internship duration of six months per academic year"
        ]
      },
      howTo: {
        title: "HOW TO FIND AN INTERN?",
        desc: "To recruit your intern, you can use your company space: it will allow you to post your offer and also contact our corporate relations managers!",
        bgImage: "/assets/pexels-pixabay-532173-scaled.jpg",
        buttons: [
          { label: "Create a business account", href: `/${lang}/welcome/create-a-company-account`, icon: <Handshake size={32} /> },
          { label: "Business login", href: `/${lang}/welcome/company-login`, icon: <Briefcase size={32} /> }
        ]
      }
    },
    fr: {
      title: "RECRUTER UN STAGIAIRE",
      heroTitle: "TROUVER LE BON STAGIAIRE",
      bannerImage: "/assets/pexels-danxavier-1239291-scaled.jpg",
      sidebar: [
        { id: "courses", label: "LES FORMATIONS DE NOS STAGIAIRES" },
        { id: "regulations", label: "RÉGLEMENTATION APPLICABLE" },
        { id: "how-to", label: "COMMENT TROUVER UN STAGIAIRE ?" },
      ],
      intro: "Cette page vous guide à travers les formations proposées et détaille le cadre réglementaire des stages, ainsi que les modalités de recrutement de l'un de nos étudiants : faites de votre recherche un succès avec nos chargés de relations entreprises !",
      frenchCourses: {
        title: "LES FORMATIONS DE NOS STAGIAIRES",
        subtitle: "Cursus en Français",
        desc: "Les étudiants de ces programmes sont tous francophones (niveau B1 minimum) et, en complément des compétences acquises lors de leurs études, sont également capables de s'exprimer en anglais et au moins une autre langue.",
        grid: [
          {
            icon: <MessageCircle className="w-10 h-10" />,
            title: "BTS Communication",
            subtitle: "Diplôme d'État du Ministère de l'Éducation Nationale - BAC+2",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Send className="w-10 h-10" />,
            title: "BTS Tourisme",
            subtitle: "Diplôme d'État du Ministère de l'Éducation Nationale - BAC+2",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Leaf className="w-10 h-10" />,
            title: "BACHELOR Responsable du Développement Touristique Durable et Numérique",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Stage de 14 semaines minimum",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Building className="w-10 h-10" />,
            title: "BACHELOR Management de l'Hôtellerie",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Stage de 14 semaines minimum",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Users className="w-10 h-10" />,
            title: "BACHELOR MICE Designer",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Stage de 14 semaines minimum",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <User className="w-10 h-10" />,
            title: "MASTÈRE Manager en Stratégie Touristique",
            subtitle: "Titre RNCP - Niveau Mastère",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Globe className="w-10 h-10" />,
            title: "Conseiller Voyage",
            subtitle: "Formation certifiante",
            duration: "Stage de 14 semaines minimum",
            bgColor: "bg-[#8B2318]"
          }
        ]
      },
      englishCourses: {
        subtitle: "Cursus en Anglais",
        desc: "Les étudiants inscrits dans ces programmes sont majoritairement anglophones (niveau B1 minimum) et ont un parcours international. Certains étudiants parlent également français, d'autres plusieurs langues : l'internationalité est une valeur forte chez Grand Sud !",
        grid: [
          {
            icon: <PieChart className="w-10 h-10" />,
            title: "BACHELOR Business & Tourism",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 42 semaines au total)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Building className="w-10 h-10" />,
            title: "BACHELOR Hospitality Management",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 42 semaines au total)",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Code className="w-10 h-10" />,
            title: "BACHELOR IT & Tourism",
            subtitle: "Titre RNCP - Niveau Bachelor",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 42 semaines au total)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <LineChart className="w-10 h-10" />,
            title: "MASTERE Business & Tourism",
            subtitle: "Titre RNCP - Niveau Mastère",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            bgColor: "bg-[#8B2318]"
          },
          {
            icon: <Building className="w-10 h-10" />,
            title: "MASTERE Hospitality Management",
            subtitle: "Titre RNCP - Niveau Mastère",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            bgColor: "bg-[#333333]"
          },
          {
            icon: <Code className="w-10 h-10" />,
            title: "MASTERE IT & Tourism",
            subtitle: "Titre RNCP - Niveau Mastère",
            duration: "Minimum de 14 semaines de stage par an (soit un minimum de 28 semaines au total)",
            bgColor: "bg-[#8B2318]"
          }
        ]
      },
      regulations: {
        title: "RÉGLEMENTATION APPLICABLE",
        paragraphs: [
          "En France, les stages sont régis par une réglementation stricte visant à protéger les stagiaires et à garantir que ces expériences professionnelles sont pédagogiques.",
          "La loi n° 2014-788 du 10 juillet 2014 (dite loi « Garantie Jeunes » ou « Stage ») est l'un des textes législatifs clés qui a consolidé et renforcé les droits des stagiaires.",
          "Quelques-unes de ces règles sont :"
        ],
        bullets: [
          "l'obligation de signer une convention de stage,",
          "la gratification dès lors que le stage dépasse deux mois,",
          "un temps de travail maximum de sept heures par jour, 5 jours par semaine,",
          "une durée de stage maximale de six mois par année universitaire"
        ]
      },
      howTo: {
        title: "COMMENT TROUVER UN STAGIAIRE ?",
        desc: "Pour recruter votre stagiaire, vous pouvez utiliser votre espace entreprise : il vous permettra de déposer votre offre et également de contacter nos chargés de relations entreprises !",
        bgImage: "/assets/pexels-pixabay-532173-scaled.jpg",
        buttons: [
          { label: "Créer un compte entreprise", href: `/${lang}/welcome/create-a-company-account`, icon: <Handshake size={32} /> },
          { label: "Connexion entreprise", href: `/${lang}/welcome/company-login`, icon: <Briefcase size={32} /> }
        ]
      }
    }
  }[lang];

  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 1000], [1, 1.2]);

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
            <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium max-w-4xl">
              {t.intro}
            </p>

            {/* Courses Section */}
            <section id="courses" className="scroll-mt-32 space-y-12">
              <h2 className="text-[#dc4b3b] text-[20px] md:text-[32px] font-bold uppercase tracking-tight leading-tight">
                {t.frenchCourses.title}
              </h2>

              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900">{t.frenchCourses.subtitle}</h3>
                  <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium opacity-80">
                    {t.frenchCourses.desc}
                  </p>
                </div>
                <div className="flex flex-wrap">
                  {t.frenchCourses.grid.map((item, idx) => (
                    <div key={idx} className={`w-full ${idx < 4 ? "md:w-1/2 lg:w-1/4" : "md:w-1/2 lg:w-1/3"}`}>
                      <CourseCard item={item} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-10 pt-8">
                <div className="space-y-4">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900">{t.englishCourses.subtitle}</h3>
                  <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium opacity-80">
                    {t.englishCourses.desc}
                  </p>
                </div>
                <div className="flex flex-wrap">
                  {t.englishCourses.grid.map((item, idx) => (
                    <div key={idx} className="w-full md:w-1/2 lg:w-1/3">
                      <CourseCard item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Regulations Section */}
            <section id="regulations" className="scroll-mt-32 space-y-8">
              <h2 className="text-[#dc4b3b] text-[20px] md:text-[32px] font-bold uppercase tracking-tight leading-tight">
                {t.regulations.title}
              </h2>
              <div className="space-y-6">
                {t.regulations.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                    {para}
                  </p>
                ))}
                <ul className="space-y-3 pl-2">
                  {t.regulations.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-[#333] text-[14px] md:text-[15px]">
                      <span className="text-[#dc4b3b] text-[18px] leading-none mt-0.5">–</span>
                      <span className="font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* How To Section */}
            <section id="how-to" className="scroll-mt-32 space-y-8 pb-12">
              <h2 className="text-[#dc4b3b] text-[20px] md:text-[32px] font-bold uppercase tracking-tight leading-tight">
                {t.howTo.title}
              </h2>
              <p className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                {t.howTo.desc}
              </p>

              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center p-6 rounded-none overflow-hidden group">
                <motion.div 
                  style={{ scale: imageScale }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src={t.howTo.bgImage} 
                    alt="Recruitment background" 
                    fill
                sizes="100vw" 
                    className="object-cover" 
                  />
                </motion.div>
                <div className="absolute inset-0 bg-[#dc4b3b]/40" />
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                  {t.howTo.buttons.map((btn, idx) => (
                    <Link 
                      key={idx}
                      href={btn.href}
                      className={`${idx === 0 ? "bg-[#8B2318]" : "bg-[#333333]"} text-white p-8 md:p-12 flex flex-col items-center justify-center space-y-6 transition-all hover:scale-[1.02] shadow-xl`}
                    >
                      <div className="text-white/90">
                        {btn.icon}
                      </div>
                      <span className="text-[16px] md:text-[18px] font-bold uppercase tracking-wide text-center">
                        {btn.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </CourseDetailLayout>
      </div>
    </main>
  );
}
