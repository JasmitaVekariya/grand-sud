"use client";

import { useLanguage } from "@/context/LanguageContext";
import PageBanner from "@/components/common/PageBanner";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function NewsDetailPage() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();

  // Sync language with URL path
  useEffect(() => {
    if (pathname.startsWith("/fr")) {
      setLang("fr");
    } else if (pathname.startsWith("/en")) {
      setLang("en");
    }
  }, [pathname, setLang]);

  const t = {
    en: {
      bannerTitle: "REFORM OF APPRENTICESHIPS FROM JULY 1, 2025",
      backLink: "Back to News",
      backLinkHref: "/en/explore/news",
      intro: "July 1, 2025 marks a significant milestone in the landscape of apprenticeships in France. A funding reform, introduced by the 2025 Finance Act, has come into force, changing the rules for companies, Apprentice Training Centers (CFA), and apprentices. The main objective of this reform is to ensure the financial sustainability of the system while adapting it to the needs of the labor market.",
      sections: [
        {
          title: "WHAT IS CHANGING FOR COMPANIES: MANDATORY CONTRIBUTION FOR HIGHER LEVELS",
          content: (
            <p className="text-black text-[16px] leading-[1.8] font-[500]">
              The most notable measure for employers is the introduction of a <strong className="font-bold text-black">mandatory contribution of €750</strong> for each apprenticeship contract targeting a level 6 or 7 diploma (equivalent to a bachelor's degree or higher). This amount, invoiced by the CFA to the company after the 45-day trial period, is a new fixed cost that is added to the cost of training. It aims to make companies more responsible for financing higher education and to compensate for the reduction in funding by the Opérateurs de Compétences (OPCO).
            </p>
          )
        },
        {
          title: "NEW FINANCING TERMS: MORE RIGOROUS MANAGEMENT",
          content: (
            <div className="space-y-4 text-black text-[16px] leading-[1.8] font-[500]">
              <p>The reform introduces several changes for CFAs and OPCOs in order to better control costs and align them with the reality of training:</p>
              <ul className="list-disc list-outside pl-6 space-y-4">
                <li>
                  <strong className="font-bold text-black">Daily pro-rata financing</strong>: the "month started is due" rule has been abolished. From now on, contract financing is calculated on a pro-rata basis according to the number of training days actually completed, allowing for more accurate calculations and avoiding additional costs in the event of early termination of the contract.
                </li>
                <li>
                  <strong className="font-bold text-black">Reductions for distance learning</strong>: for courses delivered more than 80% remotely, the level of funding provided by OPCOs is reduced by 20%, with a minimum of €4,000.
                </li>
                <li>
                  <strong className="font-bold text-black">New payment schedule</strong>: 10% of the total funding is now withheld and paid only at the end of the contract. This measure is intended in particular to avoid overpayments.
                </li>
              </ul>
            </div>
          )
        },
        {
          title: "IMPACT ON APPRENTICESHIPS: WHAT ARE THE OBJECTIVES?",
          content: (
            <div className="space-y-4 text-black text-[16px] leading-[1.8] font-[500]">
              <p>This reform has two main objectives:</p>
              <ul className="list-disc list-outside pl-6 space-y-4">
                <li>
                  <strong className="font-bold text-black">Responding to the needs of the labor market</strong>: funding is now directed towards training courses that lead to professions in high demand and initial qualification levels (CAP, Bac Pro). Professional branches will play a more important role in defining these priorities.
                </li>
                <li>
                  <strong className="font-bold text-black">Financial sustainability</strong>: by adjusting the levels of funding and giving employers greater responsibility, the reform seeks to ensure the financial sustainability of the apprenticeship system.
                </li>
              </ul>
              <p className="pt-2">
                The reform is also part of a plan to <strong className="font-bold text-black">strengthen quality control</strong> of training in CFAs, which will be rolled out from the start of the 2025 academic year.
              </p>
            </div>
          )
        },
        {
          title: "SUMMARY: KEY POINTS",
          content: (
            <div className="bg-[#F9F9F9] border-l-4 border-[#F23A2E] p-6 md:p-8 rounded-[4px] shadow-sm text-black text-[16px] leading-[1.8]">
              <p className="mb-3">
                <strong className="font-bold text-black italic">When?</strong> <span className="italic text-gray-700">The reform came into force on July 1, 2025, for all contracts signed from that date onwards.</span>
              </p>
              <p className="mb-3">
                <strong className="font-bold text-black italic">Who is affected?</strong> <span className="italic text-gray-700">Employers, apprentices, CFAs, and OPCOs.</span>
              </p>
              <p className="mb-1">
                <strong className="font-bold text-black italic">What are the main measures?</strong>
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2 italic text-gray-700">
                <li>
                  <strong className="font-bold text-black">Employer contribution of €750</strong> for contracts at the Bac+3 level and above.
                </li>
                <li>
                  Funding calculated <strong className="font-bold text-black">to the nearest day</strong> rather than to the nearest month.
                </li>
                <li>
                  <strong className="font-bold text-black">20% reduction</strong> for training courses that are more than 80% distance learning.
                </li>
                <li>
                  <strong className="font-bold text-black">10% balance</strong> of funding paid at the end of the contract.
                </li>
              </ul>
            </div>
          )
        }
      ]
    },
    fr: {
      bannerTitle: "RÉFORME DE L'APPRENTISSAGE DÈS LE 1ER JUILLET 2025",
      backLink: "Retour aux Actualités",
      backLinkHref: "/fr/explore/news",
      intro: "Le 1er juillet 2025 marque une étape importante pour l'apprentissage en France. Une réforme du financement, introduite par la loi de finances 2025, est entrée en vigueur, modifiant les règles pour les entreprises, les Centres de Formation d'Apprentis (CFA) et les apprentis. L'objectif principal de cette réforme est d'assurer la pérennité financière du système tout en l'adaptant aux besoins du marché du travail.",
      sections: [
        {
          title: "CE QUI CHANGE POUR LES ENTREPRISES : CONTRIBUTION OBLIGATOIRE POUR LES NIVEAUX SUPÉRIEURS",
          content: (
            <p className="text-black text-[16px] leading-[1.8] font-[500]">
              La mesure la plus notable pour les employeurs est l'instauration d'une <strong className="font-bold text-black">contribution obligatoire de 750 €</strong> pour chaque contrat d'apprentissage visant un diplôme de niveau 6 ou 7 (équivalent bac+3 ou supérieur). Ce montant, facturé par le CFA à l'entreprise à l'issue de la période d'essai de 45 jours, constitue un nouveau coût fixe qui s'ajoute au coût de la formation. Il vise à responsabiliser davantage les entreprises dans le financement de l'enseignement supérieur et à compenser la baisse des financements des Opérateurs de Compétences (OPCO).
            </p>
          )
        },
        {
          title: "NOUVELLES MODALITÉS DE FINANCEMENT : UNE GESTION PLUS RIGOUREUSE",
          content: (
            <div className="space-y-4 text-black text-[16px] leading-[1.8] font-[500]">
              <p>La réforme introduit plusieurs changements pour les CFA et les OPCO afin de mieux maîtriser les coûts et de les aligner sur la réalité de la formation :</p>
              <ul className="list-disc list-outside pl-6 space-y-4">
                <li>
                  <strong className="font-bold text-black">Financement proratisé à la journée</strong> : la règle du "mois entamé est dû" est supprimée. Désormais, le financement des contrats est calculé au prorata temporis selon le nombre de jours de formation réellement effectués, permettant un calcul plus juste et évitant des surcoûts en cas de rupture anticipée du contrat.
                </li>
                <li>
                  <strong className="font-bold text-black">Abattements pour le distanciel</strong> : pour les formations dispensées à plus de 80 % en distanciel, le niveau de financement des OPCO est réduit de 20 %, avec un plancher fixé à 4 000 €.
                </li>
                <li>
                  <strong className="font-bold text-black">Nouvel échéancier de versement</strong> : 10 % du financement total est désormais retenu et versé uniquement à la fin du contrat. Cette mesure vise notamment à éviter les trop-perçus.
                </li>
              </ul>
            </div>
          )
        },
        {
          title: "IMPACT SUR L'APPRENTISSAGE : QUELS SONT LES OBJECTIFS ?",
          content: (
            <div className="space-y-4 text-black text-[16px] leading-[1.8] font-[500]">
              <p>Cette réforme poursuit deux objectifs principaux :</p>
              <ul className="list-disc list-outside pl-6 space-y-4">
                <li>
                  <strong className="font-bold text-black">Répondre aux besoins du marché du travail</strong> : le financement est réorienté vers les formations menant aux métiers en tension et aux premiers niveaux de qualification (CAP, Bac Pro). Les branches professionnelles joueront un rôle plus important dans la définition de ces priorités.
                </li>
                <li>
                  <strong className="font-bold text-black">Pérennité financière</strong> : en ajustant les niveaux de prise en charge et en responsabilisant les employeurs, la réforme cherche à garantir l'équilibre financier du système d'apprentissage.
                </li>
              </ul>
              <p className="pt-2">
                La réforme s'inscrit également dans un plan de <strong className="font-bold text-black">renforcement du contrôle de la qualité</strong> des formations au sein des CFA, déployé dès la rentrée 2025.
              </p>
            </div>
          )
        },
        {
          title: "SYNTHÈSE : POINTS CLÉS",
          content: (
            <div className="bg-[#F9F9F9] border-l-4 border-[#F23A2E] p-6 md:p-8 rounded-[4px] shadow-sm text-black text-[16px] leading-[1.8]">
              <p className="mb-3">
                <strong className="font-bold text-black italic">Quand ?</strong> <span className="italic text-gray-700">La réforme est entrée en vigueur le 1er juillet 2025 pour tous les contrats signés à partir de cette date.</span>
              </p>
              <p className="mb-3">
                <strong className="font-bold text-black italic">Qui est concerné ?</strong> <span className="italic text-gray-700">Les employeurs, les apprentis, les CFA et les OPCO.</span>
              </p>
              <p className="mb-1">
                <strong className="font-bold text-black italic">Quelles sont les principales mesures ?</strong>
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2 italic text-gray-700">
                <li>
                  <strong className="font-bold text-black">Contribution de l'employeur de 750 €</strong> pour les contrats de niveau Bac+3 et plus.
                </li>
                <li>
                  Financement calculé <strong className="font-bold text-black">au jour près</strong> plutôt qu'au mois entamé.
                </li>
                <li>
                  <strong className="font-bold text-black">Réduction de 20 %</strong> pour les formations réalisées à plus de 80 % à distance.
                </li>
                <li>
                  <strong className="font-bold text-black">Solde de 10 %</strong> du financement versé à la fin du contrat.
                </li>
              </ul>
            </div>
          )
        }
      ]
    }
  }[lang];

  return (
    <main className="bg-white min-h-screen w-full">
      {/* 1. PageBanner Component */}
      <PageBanner
        title={t.bannerTitle}
        image="/assets/events_planer.png"
      />

      {/* 2. Content Section */}
      <div className="max-w-[800px] mx-auto px-6 py-12 md:py-16">
        {/* Intro Text */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <p className="text-black text-[16px] md:text-[17px] font-[500] leading-relaxed italic">
            {t.intro}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {t.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-[#F23A2E] text-[20px] md:text-[22px] lg:text-[24px] font-bold uppercase tracking-tight leading-snug">
                {section.title}
              </h2>
              <div>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
