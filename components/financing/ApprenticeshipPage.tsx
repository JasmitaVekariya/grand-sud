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
            <Image src={section.image} alt={section.title} fill className="object-cover" />
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
            <Image src={section.image} alt={section.title} fill className="object-cover" />
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
        { id: "costs", label: "COÛTS DE FORMATION" },
        { id: "health", label: "SANTÉ ET ALIMENTATION" },
        { id: "transport", label: "TRANSPORT ET LOGEMENT" },
      ],
      heroTitle: "PAYEZ VOS ÉTUDES GRÂCE À L'ALTERNANCE",
      intro: [
        "Après une année en France, pour les étudiants hors UE, vous pouvez prétendre à l'apprentissage si votre cursus propose ce type de rythme.",
        "Passerelle vers l'emploi et l'insertion professionnelle, l'alternance est un rythme qui permet à l'étudiant de conjuguer temps de formation et travail en entreprise, dans le but de se former à un métier et de s'intégrer plus facilement à la vie et à la culture de l'entreprise.",
        "Avec un statut de salarié et un cadre réglementaire particulier, l'alternance permet de financer ses études et présente de nombreux avantages !"
      ],
      sections: [
        {
          id: "costs",
          title: "COÛTS DE FORMATION",
          bgColor: "bg-[#333333]",
          textColor: "text-white",
          image: "/assets/pexels-fauxels-3184465-768x512.jpg",
          imageLeft: true,
          content: [
            "En alternance, sous contrat de professionnalisation ou d'apprentissage, l'apprenant n'a aucun frais de formation à sa charge, hormis les éventuelles options qu'il souhaite suivre.",
            "C'est l'entreprise, par l'intermédiaire de son OPCO, qui prend directement en charge l'intégralité des frais de formation.",
            "Bonus : la possibilité de bénéficier, sous conditions, d'une aide au premier équipement d'un montant maximum de 500€, pour l'achat d'un ordinateur vous permettant de suivre vos cours et de réaliser vos travaux nécessaires à la formation."
          ]
        },
        {
          id: "health",
          title: "SANTÉ ET ALIMENTATION",
          bgColor: "bg-[#8B2318]",
          textColor: "text-white",
          image: "/assets/pexels-shkrabaanthony-5215017-768x1152.jpg",
          imageLeft: false,
          content: [
            "L'apprenti est assuré et bénéficie de la même protection sociale que les autres salariés (sans être soumis à cotisations : maladie, maternité, invalidité, vieillesse, accidents du travail et maladies professionnelles). La prise en charge concerne les arrêts maladie, les accidents du travail, les maladies professionnelles, etc. De plus, l'employeur doit proposer une mutuelle à son apprenti.",
            "Lors de votre premier emploi, votre employeur doit effectuer une déclaration préalable à l'embauche – DPAE. De votre côté, vous devez informer la Caisse d'Assurance Maladie de votre nouveau statut d'apprenti.",
            "Vous bénéficiez d'une visite médicale dans les deux mois suivant l'embauche (visite d'embauche auprès de la médecine du travail).",
            "Autre avantage : si l'entreprise met à disposition des salariés des tickets restaurant ou une cantine, alors l'apprenti en bénéficie également !"
          ]
        },
        {
          id: "transport",
          title: "TRANSPORT ET LOGEMENT",
          bgColor: "bg-[#dc4b3b]",
          textColor: "text-white",
          image: "/assets/pexels-d123x-946281-768x1152.jpg",
          imageLeft: true,
          content: [
            "L'employeur doit prendre en charge 50% des trajets professionnels effectués en transports en commun.",
            "Pour les frais liés à un véhicule personnel, la prise en charge dépend des entreprises.",
            "Certaines structures peuvent vous proposer un logement, selon des modalités à définir avec votre employeur : c'est souvent le cas des campings et des hôtels par exemple !",
            "Bonus : vous pouvez bénéficier, sous certaines conditions, d'une aide au permis de conduire, d'un montant de 500 €, pour vous permettre d'obtenir votre permis de conduire."
          ]
        }
      ],
      closing: [
        "À Grand Sud, la grande majorité de nos jeunes sont en alternance !",
        "Un accompagnement spécifique par des coachs pour la recherche d'alternance est prévu dès l'admission à l'école, puis un suivi régulier est effectué pour s'assurer que l'alternance est bénéfique tant pour notre apprenant que pour l'entreprise."
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
          <div className="py-8">
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
