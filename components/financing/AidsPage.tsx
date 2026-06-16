"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Briefcase, 
  Banknote, 
  Wallet, 
  GraduationCap, 
  Search, 
  Home, 
  Flag, 
  ShieldCheck, 
  Building, 
  TrainFront, 
  Bike, 
  Bus, 
  Accessibility, 
  Layers 
} from "lucide-react";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";

interface AidsPageProps {
  lang: "en" | "fr";
}

const AidBlock = ({ item }: { item: any }) => {
  return (
    <div className={`${item.bgColor} text-white p-6 sm:p-8 md:p-10 flex flex-col items-center text-center space-y-4 h-full min-h-[220px] md:min-h-[280px]`}>
      <div className="text-white/90">
        <div className="scale-75 md:scale-100">
          {item.icon}
        </div>
      </div>
      <div className="space-y-2 md:space-y-3">
        <h3 className="text-[13px] sm:text-[15px] md:text-[18px] font-semibold uppercase leading-tight tracking-tight">
          {item.title}
        </h3>
        <p className="text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed opacity-90 font-medium">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default function AidsPage({ lang }: AidsPageProps) {
  const t = {
    en: {
      title: "FINANCIAL HELP",
      heroTitle: "FINANCE YOUR STUDIES",
      sidebar: [
        { id: "assistance", label: "FINANCIAL ASSISTANCE" },
        { id: "housing", label: "HOUSING BENEFITS" },
        { id: "mobility", label: "MOBILITY AIDS" },
        { id: "various", label: "VARIOUS AID" },
      ],
      intro: [
        "Whether you are starting or continuing your higher education, navigating the complex world of student aid can be challenging.",
        "Fortunately, many resources are available to support you in your journey. Scholarships, loans, various aids... this page is designed to enlighten you on all the existing devices.",
        "The objective is to provide you with the keys to serenely finance your studies and fully focus on your success!"
      ],
      sections: [
        {
          id: "assistance",
          title: "FINANCIAL ASSISTANCE",
          grid: [
            {
              icon: <Briefcase className="w-10 h-10" />,
              title: "Activity bonus",
              desc: "It is social aid paid by the CAF to supplement the income of employees and apprentices",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Banknote className="w-10 h-10" />,
              title: "State-guaranteed student loan",
              desc: "The state-guaranteed student loan allows students under 28 years of age to borrow up to 20,000 euros from a partner bank without personal guarantee or means conditions.",
              bgColor: "bg-[#8B2318]"
            },
            {
              icon: <Wallet className="w-10 h-10" />,
              title: "Youth Assistance Fund",
              desc: "The Youth Assistance Fund (FAJ) is a scheme managed by the Departmental Council of Haute-Garonne which offers last resort financial aid to young people aged 18 to 25.",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <GraduationCap className="w-10 h-10" />,
              title: "School grant",
              desc: "Depending on your personal situation, your education and your campus, Grand Sud can offer scholarships in the form of tuition fee reductions.",
              bgColor: "bg-[#8B2318]"
            },
            {
              icon: <Search className="w-10 h-10" />,
              title: "Local aid",
              desc: "Depending on your region of origin, it is possible that aid exists to finance your studies! For example, the Passport for Study Mobility for Overseas Students.",
              bgColor: "bg-[#333333]"
            }
          ]
        },
        {
          id: "housing",
          title: "HOUSING BENEFITS",
          grid: [
            {
              icon: <Home className="w-10 h-10" />,
              title: "APL/ALS/ALF",
              desc: "CAF housing grants (APL, ALS, ALF) are social benefits intended to reduce the amount of rent for students, subject to means conditions.",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Flag className="w-10 h-10" />,
              title: "Mobili Jeune",
              desc: "A subsidy from Action Logement that covers part of the rent for young people under 30 in work-study training (apprenticeship or professionalization contract).",
              bgColor: "bg-[#8B2318]"
            },
            {
              icon: <ShieldCheck className="w-10 h-10" />,
              title: "Visale Guarantee",
              desc: "A free service of Action Logement that serves as a guarantee for young people under 30 years old, facilitating access to housing.",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Wallet className="w-10 h-10" />,
              title: "Advance Loca-Pass",
              desc: "A zero-rate loan granted by Action Logement to finance the security deposit required by the owner upon entry into a dwelling.",
              bgColor: "bg-[#8B2318]"
            },
            {
              icon: <Building className="w-10 h-10" />,
              title: "Instal'Toit",
              desc: "Aid offered by the Toulouse City Hall for young people aged 18 to 29 to finance their move into housing up to 500 euros.",
              bgColor: "bg-[#333333]"
            }
          ]
        },
        {
          id: "mobility",
          title: "MOBILITY AIDS",
          grid: [
            {
              icon: <TrainFront className="w-10 h-10" />,
              title: "SNCF Reduced rate",
              desc: "Are you a student under 21, a student under 26 or an apprentice under 29? Take advantage of the offers reserved for you.",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Bike className="w-10 h-10" />,
              title: "Eco-check mobility",
              desc: "This aid from the Occitanie Region is intended for individuals to purchase bicycles or a hybrid/electric car to encourage sustainable transport.",
              bgColor: "bg-[#8B2318]"
            },
            {
              icon: <TrainFront className="w-10 h-10" />,
              title: "Subscriptions LiO train/TER -26 years",
              desc: "You can benefit from a reduced rate subscription for your journey by TER/LiO train in the Occitanie region.",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Bus className="w-10 h-10" />,
              title: "Tisseo subscription",
              desc: "Public transport is accessible at a preferential rate for students under 26 years old in the Toulouse area.",
              bgColor: "bg-[#8B2318]"
            }
          ]
        },
        {
          id: "various",
          title: "VARIOUS AID",
          grid: [
            {
              icon: <Accessibility className="w-10 h-10" />,
              title: "Students with disabilities",
              desc: "Many aids exist: AAH, PCH, AGEFIPH, 100% Handinamique... Contact your disability referent to learn more!",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Layers className="w-10 h-10" />,
              title: "Other",
              desc: "There are probably other aids to which you can claim, we advise you to inquire carefully to find all the solutions!",
              bgColor: "bg-[#8B2318]"
            }
          ]
        }
      ]
    },
    fr: {
      title: "AIDES FINANCIÈRES",
      heroTitle: "FINANCER SES ÉTUDES",
      sidebar: [
        { id: "assistance", label: "ASSISTANCE FINANCIÈRE" },
        { id: "housing", label: "AIDES AU LOGEMENT" },
        { id: "mobility", label: "AIDES À LA MOBILITÉ" },
        { id: "various", label: "AIDES DIVERSES" },
      ],
      intro: [
        "Que vous commenciez ou poursuiviez vos études supérieures, naviguer dans le monde complexe des aides étudiantes peut être un défi.",
        "Heureusement, de nombreuses ressources sont disponibles pour vous accompagner dans votre parcours. Bourses, prêts, aides diverses... cette page est conçue pour vous éclairer sur tous les dispositifs existants.",
        "L'objectif est de vous donner les clés pour financer sereinement vos études et vous concentrer pleinement sur votre réussite !"
      ],
      sections: [
        {
          id: "assistance",
          title: "ASSISTANCE FINANCIÈRE",
          grid: [
            {
              icon: <Briefcase className="w-10 h-10" />,
              title: "Prime d'activité",
              desc: "C'est une aide sociale versée par la CAF pour compléter les revenus des salariés et des apprentis.",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Banknote className="w-10 h-10" />,
              title: "Prêt étudiant garanti par l'État",
              desc: "Le prêt étudiant garanti par l'État permet aux étudiants de moins de 28 ans d'emprunter jusqu'à 20 000 euros sans caution personnelle ni conditions de ressources.",
              bgColor: "bg-[#8B2318]"
            },
            {
              icon: <Wallet className="w-10 h-10" />,
              title: "Fonds d'Aide aux Jeunes",
              desc: "Le FAJ est un dispositif géré par le Conseil Départemental de la Haute-Garonne qui offre une aide financière de dernier recours aux jeunes de 18 à 25 ans.",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <GraduationCap className="w-10 h-10" />,
              title: "Bourse d'école",
              desc: "Selon votre situation personnelle et votre campus, Grand Sud peut proposer des bourses sous forme de réductions de frais de scolarité.",
              bgColor: "bg-[#8B2318]"
            },
            {
              icon: <Search className="w-10 h-10" />,
              title: "Aides locales",
              desc: "Selon votre région d'origine, des aides peuvent exister pour financer vos études ! Par exemple, le Passeport pour la Mobilité des Études pour les Outre-mer.",
              bgColor: "bg-[#333333]"
            }
          ]
        },
        {
          id: "housing",
          title: "AIDES AU LOGEMENT",
          grid: [
            {
              icon: <Home className="w-10 h-10" />,
              title: "APL/ALS/ALF",
              desc: "Les aides au logement de la CAF sont des prestations sociales destinées à réduire le montant du loyer des étudiants, sous conditions de ressources.",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Flag className="w-10 h-10" />,
              title: "Mobili Jeune",
              desc: "Une subvention d'Action Logement qui prend en charge une partie du loyer des jeunes de moins de 30 ans en formation en alternance.",
              bgColor: "bg-[#8B2318]"
            },
            {
              icon: <ShieldCheck className="w-10 h-10" />,
              title: "Garantie Visale",
              desc: "Un service gratuit d'Action Logement qui sert de caution pour les jeunes de moins de 30 ans, facilitant l'accès au logement.",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Wallet className="w-10 h-10" />,
              title: "Avance Loca-Pass",
              desc: "Un prêt à taux zéro accordé par Action Logement pour financer le dépôt de garantie demandé par le propriétaire à l'entrée dans un logement.",
              bgColor: "bg-[#8B2318]"
            },
            {
              icon: <Building className="w-10 h-10" />,
              title: "Instal'Toit",
              desc: "Aide proposée par la Mairie de Toulouse pour les jeunes de 18 à 29 ans pour financer leur emménagement jusqu'à 500 euros.",
              bgColor: "bg-[#333333]"
            }
          ]
        },
        {
          id: "mobility",
          title: "AIDES À LA MOBILITÉ",
          grid: [
            {
              icon: <TrainFront className="w-10 h-10" />,
              title: "Tarif réduit SNCF",
              desc: "Vous êtes étudiant de moins de 21 ans, étudiant de moins de 26 ans ou apprenti de moins de 29 ans ? Profitez des offres réservées pour vous.",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Bike className="w-10 h-10" />,
              title: "Éco-chèque mobilité",
              desc: "Cette aide de la Région Occitanie est destinée aux particuliers pour l'achat de vélos ou d'une voiture hybride/électrique pour encourager les transports durables.",
              bgColor: "bg-[#8B2318]"
            },
            {
              icon: <TrainFront className="w-10 h-10" />,
              title: "Abonnements LiO train/TER -26 ans",
              desc: "Vous pouvez bénéficier d'un abonnement à tarif réduit pour vos trajets en train TER/LiO dans la région Occitanie.",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Bus className="w-10 h-10" />,
              title: "Abonnement Tisseo",
              desc: "Les transports en commun sont accessibles à un tarif préférentiel pour les étudiants de moins de 26 ans dans l'agglomération toulousaine.",
              bgColor: "bg-[#8B2318]"
            }
          ]
        },
        {
          id: "various",
          title: "AIDES DIVERSES",
          grid: [
            {
              icon: <Accessibility className="w-10 h-10" />,
              title: "Étudiants en situation de handicap",
              desc: "De nombreuses aides existent : AAH, PCH, AGEFIPH, 100% Handinamique... Contactez votre référent handicap pour en savoir plus !",
              bgColor: "bg-[#333333]"
            },
            {
              icon: <Layers className="w-10 h-10" />,
              title: "Autres",
              desc: "Il existe probablement d'autres aides auxquelles vous pouvez prétendre, nous vous conseillons de vous renseigner soigneusement !",
              bgColor: "bg-[#8B2318]"
            }
          ]
        }
      ]
    }
  }[lang];

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.heroTitle}
        image="/assets/card-aides.jpg"
      />

      <div className="pt-4">
        <CourseDetailLayout sections={t.sidebar}>
          <div className="pb-8 space-y-16">
            {/* Intro Section */}
            <section className="space-y-4">
              {t.intro.map((para, idx) => (
                <p key={idx} className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                  {para}
                </p>
              ))}
            </section>

            {/* Content Sections */}
            {t.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32 space-y-8">
                <h2 className="text-[#dc4b3b] text-[18px] sm:text-[20px] md:text-[28px] font-semibold uppercase leading-tight tracking-tight">
                  {section.title}
                </h2>

                <div className="flex flex-wrap">
                  {section.grid.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`w-full ${
                        section.grid.length % 3 === 0 
                          ? "md:w-1/2 lg:w-1/3" 
                          : section.grid.length === 2
                            ? "md:w-1/2"
                            : idx < 3 
                              ? "md:w-1/2 lg:w-1/3" 
                              : "md:w-1/2"
                      }`}
                    >
                      <AidBlock item={item} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </CourseDetailLayout>
      </div>
    </main>
  );
}
