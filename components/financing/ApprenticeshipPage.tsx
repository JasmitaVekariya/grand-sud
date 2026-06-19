"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";

interface ApprenticeshipPageProps {
  lang: "en" | "fr";
}

const ModularSection = ({ section }: { section: any }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);

  return (
    <section 
      ref={containerRef}
      id={section.id}
      className={`${section.bgColor} ${section.textColor} flex flex-col md:flex-row overflow-hidden rounded-none shadow-none scroll-mt-32 w-full`}
    >
      {section.imageLeft && (
        <div className="md:w-1/2 relative min-h-[300px] lg:min-h-[380px] overflow-hidden">
          <motion.div style={{ scale }} className="absolute inset-0">
            <Image src={section.image} alt={section.title} fill
                sizes="100vw" className="object-cover" />
          </motion.div>
        </div>
      )}
      <div className="md:w-1/2 p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-center">
        <h2 className="text-[20px] md:text-[26px] lg:text-[34px] font-bold uppercase leading-[1] tracking-tight">
          {section.title}
        </h2>
        <div className="space-y-2">
          {section.content.map((para: string, idx: number) => (
            <p key={idx} className="text-[13px] md:text-[14px] leading-relaxed opacity-95 font-medium">
              {para}
            </p>
          ))}
        </div>
      </div>
      {!section.imageLeft && (
        <div className="md:w-1/2 relative min-h-[300px] lg:min-h-[380px] overflow-hidden">
          <motion.div style={{ scale }} className="absolute inset-0">
            <Image src={section.image} alt={section.title} fill
                sizes="100vw" className="object-cover" />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default function ApprenticeshipPage({ lang }: ApprenticeshipPageProps) {
  const t = {
    en: {
      title: "FINANCING / APPRENTICESHIP",
      sidebar: [
        { id: "costs", label: "TRAINING COSTS" },
        { id: "health", label: "HEALTH AND FOOD" },
        { id: "transport", label: "TRANSPORT AND ACCOMMODATION" },
      ],
      intro: [
        "After a year in France, for non EU students, you can pretend to an apprenticeship if your course is offering this type of pace.",
        "Gateway to employment and professional integration, the work-study program is a rhythm that allows the student to combine training time and work in a company, with the aim of training for a profession and to integrate more easily into the life and culture of the company.",
        "With a salaried status and a particular regulatory framework, work-study allows you to finance your studies and has many advantages!"
      ],
      sections: [
        {
          id: "costs",
          title: "TRAINING COSTS",
          bgColor: "bg-[#333333]",
          textColor: "text-white",
          image: "/assets/pexels-fauxels-3184465-768x512.jpg",
          imageLeft: true,
          content: [
            "In work-study, under a professionalization or apprenticeship contract, the learner has no training costs at their expense, except for any options that they wish to pursue.",
            "It is the company, through its OPCO, that directly covers all the training costs.",
            "Bonus: the possibility to benefit, under conditions, from assistance with the first equipment for a maximum amount of 500€, for the purchase of a computer allowing you to grade your courses and complete your work necessary for training."
          ]
        },
        {
          id: "health",
          title: "HEALTH AND FOOD",
          bgColor: "bg-[#8B2318]",
          textColor: "text-white",
          image: "/assets/pexels-shkrabaanthony-5215017-768x1152.jpg",
          imageLeft: false,
          content: [
            "The apprentice is insured and enjoys the same social protection as other employees (without being subject to contributions: sickness, maternity, disability, old age, work accidents and occupational diseases). The coverage concerns sick leave, work accidents, occupational diseases, etc. In addition, the employer must offer a mutual insurance to his apprentice.",
            "During your first job, your employer must make a pre-employment declaration – DPAE. On your side, you must inform the Health Insurance Fund of your new apprentice status.",
            "You receive a medical examination within two months of employment (employment visit with occupational medicine).",
            "Another advantage: if the company makes restaurant tickets or a canteen available to employees, then the apprentice also benefits!"
          ]
        },
        {
          id: "transport",
          title: "TRANSPORT AND ACCOMMODATION",
          bgColor: "bg-[#dc4b3b]",
          textColor: "text-white",
          image: "/assets/pexels-d123x-946281-768x1152.jpg",
          imageLeft: true,
          content: [
            "The employer must cover 50% of business trips made by public transport.",
            "For expenses related to a personal vehicle, the coverage depends on the companies.",
            "Some structures can offer you accommodation, according to arrangements to be defined with your employer: this is often the case with campsites and hotels for example!",
            "Bonus: you can benefit, under certain conditions, from driving license assistance, in the amount of €500, to allow you to obtain your driver's license."
          ]
        }
      ],
      closing: [
        "At Grand Sud, the vast majority of our young people are in apprenticeship!",
        "A specific support by coaches for the search for work-study is planned from admission to the school, then regular monitoring is done to ensure that the work-study is beneficial both for our learner and for the company."
      ],
      heroTitle: "PAY YOUR STUDIES WITH AN APPRENTICESHIP"
    },
    fr: {
      title: "FINANCEMENT / ALTERNANCE",
      sidebar: [
        { id: "costs", label: "Frais de formation" },
        { id: "health", label: "Santé et repas" },
        { id: "transport", label: "Transport et logement" },
      ],
      heroTitle: <>Financer ses études avec <br/> l&apos;alternance</>,
      intro: [
        "Passerelle vers l'emploi et l'insertion professionnelle, l'alternance est un rythme qui permet à l'étudiant d'allier temps de formation et travail en entreprise, dans le but de se former à un métier et de s'intégrer plus facilement à la vie et la culture de l'entreprise.",
        "Avec un statut salarié et un cadre réglementaire particulier, l'alternance vous permet de financer vos études et présente de nombreux avantages !"
      ],
      sections: [
        {
          id: "costs",
          title: "Frais de formation",
          bgColor: "bg-[#333333]",
          textColor: "text-white",
          image: "/assets/pexels-fauxels-3184465-768x512.jpg",
          imageLeft: true,
          content: [
            "En alternance, sous contrat de professionnalisation ou d'apprentissage, l'apprenant n'a aucun frais de formation à sa charge, à l'exception d'éventuelles options que celui-ci souhaite suivre.",
            "C'est l'entreprise, par le biais de son OPCO, qui prend directement en charge la totalité des frais de formation.",
            "Bonus : la possibilité de bénéficier, sous conditions, de l'aide au premier équipement d'un montant maximum de 500€, pour l'achat d'un ordinateur vous permettant de noter vos cours et de réaliser vos travaux nécessaires à la formation."
          ]
        },
        {
          id: "health",
          title: "Santé et repas",
          bgColor: "bg-[#8B2318]",
          textColor: "text-white",
          image: "/assets/pexels-shkrabaanthony-5215017-768x1152.jpg",
          imageLeft: false,
          content: [
            "L'apprenti est assuré social et bénéficie de la même protection sociale que les autre salariés (sans être assujetti aux cotisations : assurance maladie, maternité, invalidité, vieillesse, accidents du travail et maladies professionnelles). La prise en charge concerne les congés maladie, les accidents de travail, maladies professionnelles, etc. De plus, l'employeur doit proposer une mutuelle à son apprenti.",
            "Lors de votre premier emploi, votre employeur doit faire une déclaration préalable à l'embauche – DPAE. De votre côté, vous devez informer la Caisse d'Assurance Maladie de votre nouveau statut d'apprenti.",
            "Vous bénéficiez d'un examen médical dans les deux mois qui suivent l'embauche (visite d'embauche auprès de la médecine du travail).",
            "Autre avantage : si l'entreprise met à la disposition des salariés des tickets restaurant ou une cantine, alors l'apprenti en bénéficie également !"
          ]
        },
        {
          id: "transport",
          title: "Transport et logement",
          bgColor: "bg-[#dc4b3b]",
          textColor: "text-white",
          image: "/assets/pexels-d123x-946281-768x1152.jpg",
          imageLeft: true,
          content: [
            "L'employeur doit prendre en charge 50% des déplacements professionnels effectués en transport en commun.",
            "Pour les frais liés à un véhicule personnel, la prise en charge dépend en revanche des entreprises.",
            "Certaines structures peuvent vous proposer un logement, selon des modalités à définir avec votre employeur : c'est souvent le cas des campings et hôtels par exemple !",
            "Bonus : vous pouvez bénéficier, sous conditions, de l'aide au permis de conduire, d'un montant de 500€, pour vous permettre d'obtenir votre permis de conduire."
          ]
        }
      ],
      closing: [
        "Chez Grand Sud, la grande majorité de nos jeunes sont en alternance !",
        "Un accompagnement spécifique par des coachs pour la recherche d'alternance est prévu dès l'admission à l'école puis un suivi régulier est fait afin de nous assurer que l'alternance soit bénéfique tant pour notre apprenant que pour l'entreprise."
      ]
    }
  }[lang];

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.heroTitle}
        image="/assets/pexels-olly-3769021-scaled.jpg"
      />

      <div className="pt-4"> 
        <CourseDetailLayout sections={t.sidebar}>
          <div className="pb-8">
            {/* Intro Section */}
            <section className="space-y-4 mb-12">
              {t.intro.map((para, idx) => (
                <p key={idx} className="text-[#333] text-[15px] md:text-[16px] leading-relaxed font-medium">
                  {para}
                </p>
              ))}
            </section>

            {/* Modular Sections (Flush + Scroll Zoom) */}
            <div className="flex flex-col">
              {t.sections.map((section) => (
                <ModularSection key={section.id} section={section} />
              ))}
            </div>

            {/* Closing Section */}
            <section className="space-y-6 pt-16">
              {t.closing.map((para, idx) => (
                <p key={idx} className="text-[#333] text-[15px] md:text-[16px] leading-relaxed font-semibold">
                  {para}
                </p>
              ))}
            </section>
          </div>
        </CourseDetailLayout>
      </div>
    </main>
  );
}
