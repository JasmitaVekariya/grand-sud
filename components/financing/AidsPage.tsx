"use client";

import {
  Briefcase,
  Banknote,
  Wallet,
  GraduationCap,
  MapPin,
  Home,
  Flag,
  ShieldCheck,
  Building,
  TrainFront,
  Bike,
  Bus,
  Accessibility,
  Layers,
  type LucideIcon,
} from "lucide-react";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import PageBanner from "@/components/common/PageBanner";

interface AidsPageProps {
  lang: "en" | "fr";
}

type AidItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  variant: "gray" | "red";
};

const AidBlock = ({ item }: { item: AidItem }) => {
  const Icon = item.icon;
  const bgColor = item.variant === "red" ? "bg-[#802020]" : "bg-[#333333]";
  const iconColor = item.variant === "red" ? "text-[#f0b4ad]" : "text-white";

  return (
    <div
      className={`${bgColor} text-white p-8 md:p-10 flex flex-col items-center justify-start text-center space-y-4 w-full h-full min-h-[260px] md:min-h-[300px]`}
    >
      <Icon size={48} strokeWidth={1} className={`${iconColor} shrink-0`} />
      <h3 className="text-[16px] md:text-[18px] font-bold leading-tight tracking-tight">{item.title}</h3>
      <p className="text-[13px] md:text-[14px] leading-relaxed opacity-95 font-medium whitespace-pre-line">
        {item.desc}
      </p>
    </div>
  );
};

const AidSection = ({
  title,
  grid,
  columns = 3,
}: {
  title: string;
  grid: AidItem[];
  columns?: 2 | 3;
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none">
        {title}
      </h2>
      <div
        className={`grid grid-cols-1 gap-2 bg-white auto-rows-fr ${
          columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {grid.map((item, idx) => (
          <div key={idx} className="h-full min-h-[260px] md:min-h-[300px]">
            <AidBlock item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AidsPage({ lang }: AidsPageProps) {
  const t = {
    en: {
      heroTitle: (
        <>
          Pay your studies with
          <br /> financial help
        </>
      ),
      sidebar: [
        { id: "assistance", label: "FINANCIAL ASSISTANCE" },
        { id: "housing", label: "HOUSING BENEFITS" },
        { id: "mobility", label: "MOBILITY AIDS" },
        { id: "various", label: "VARIOUS AID" },
      ],
      intro: [
        "Whether you are starting or continuing your higher education, navigating the complex world of student aid can be challenging.",
        "Fortunately, many resources are available to support you in your journey. Scholarships, loans, various aids... this page is designed to enlighten you on all the existing devices.",
        "The objective is to provide you with the keys to serenely finance your studies and fully focus on your success!",
      ],
      sections: [
        {
          id: "assistance",
          title: "FINANCIAL ASSISTANCE",
          columns: 3 as const,
          grid: [
            {
              icon: Briefcase,
              title: "Activity bonus",
              desc: "It is social aid paid by the CAF to supplement the income of employees and apprentices",
              variant: "gray" as const,
            },
            {
              icon: Banknote,
              title: "State-guaranteed student loan",
              desc: "The state-guaranteed student loan allows students under 28 years of age to borrow up to 20,000 euros from a partner bank without personal guarantee or means conditions.",
              variant: "red" as const,
            },
            {
              icon: Wallet,
              title: "Youth Assistance Fund",
              desc: "The Youth Assistance Fund (FAJ) is a scheme managed by the Departmental Council of Haute-Garonne (or Toulouse Métropole depending on the place of residence) which offers last resort financial aid to young people aged 18 to 25, in situations of great social or professional difficulty.",
              variant: "gray" as const,
            },
            {
              icon: GraduationCap,
              title: "School grant",
              desc: "Depending on your personal situation, your education and your campus, Grand Sud can offer scholarships in the form of tuition fee reductions. More information is available from our team.",
              variant: "red" as const,
            },
            {
              icon: MapPin,
              title: "Local aid",
              desc: "Depending on your region of origin, it is possible that aid exists to finance your studies! For example, the Passport for Study Mobility for Overseas Students",
              variant: "gray" as const,
            },
          ],
        },
        {
          id: "housing",
          title: "HOUSING BENEFITS",
          columns: 3 as const,
          grid: [
            {
              icon: Home,
              title: "APL/ALS/ALF",
              desc: "CAF housing grants (APL, ALS, ALF) are social benefits, not cumulative, intended to reduce the amount of rent for students, subject to means conditions, the composition of the household and the type of housing.",
              variant: "gray" as const,
            },
            {
              icon: Flag,
              title: "Mobili Jeune",
              desc: "The Mobili-Jeune grant is a subsidy from Action Logement that covers part of the rent for young people under 30 in work-study training (apprenticeship or professionalization contract) in a company in the private non-agricultural sector.",
              variant: "red" as const,
            },
            {
              icon: ShieldCheck,
              title: "Visale Guarantee",
              desc: "The Visale guarantee is a free service of Action Logement that serves as a guarantee for young people under 30 years old (as well as other profiles under conditions) and students, thus reassuring the owners and facilitating access to housing.",
              variant: "gray" as const,
            },
            {
              icon: Wallet,
              title: "Advance Loca-Pass",
              desc: "The Loca-Pass advance is a zero-rate loan, without administrative fees, granted by Action Logement to finance the security deposit required by the owner upon entry into a dwelling.",
              variant: "red" as const,
            },
            {
              icon: Building,
              title: "Instal'Toit",
              desc: "The Install'Toit aid is a zero-interest loan, without administrative fees, offered by the Toulouse City Hall for young people aged 18 to 29, particularly students, in order to finance their move into housing (security deposit, rent, furniture) up to 500 euros.",
              variant: "gray" as const,
            },
          ],
        },
        {
          id: "mobility",
          title: "MOBILITY AIDS",
          columns: 3 as const,
          grid: [
            {
              icon: TrainFront,
              title: "SNCF Reduced rate",
              desc: "Are you a student under 21, a student under 26 or an apprentice under 29? Do you make at least one AR trip per week on your home-study or learning location journey? Take advantage of the offers reserved for you.",
              variant: "gray" as const,
            },
            {
              icon: Bike,
              title: "Eco-check mobility",
              desc: "This aid from the Occitanie Region is intended for individuals to purchase bicycles or a hybrid or electric car, in order to encourage more sustainable modes of transport.",
              variant: "red" as const,
            },
            {
              icon: TrainFront,
              title: "Subscriptions LiO train/TER -26 years",
              desc: "You can benefit from a reduced rate subscription for your journey by TER/LiO train in the Occitanie region.",
              variant: "gray" as const,
            },
            {
              icon: Bus,
              title: "Tisseo subscription",
              desc: "Public transport is accessible at a preferential rate for students under 26 years old. Depending on your personal situation, other offers may be more suitable as well.",
              variant: "red" as const,
            },
          ],
        },
        {
          id: "various",
          title: "VARIOUS AID",
          columns: 2 as const,
          grid: [
            {
              icon: Accessibility,
              title: "Students with disabilities",
              desc: "Many aids exist: AAH, PCH, AGEFIPH, 100% Handinamique... Contact your disability referent to learn more!",
              variant: "gray" as const,
            },
            {
              icon: Layers,
              title: "Other",
              desc: "There are probably other aids to which you can claim, we advise you to inquire carefully to find all the solutions that could apply to your situation!",
              variant: "red" as const,
            },
          ],
        },
      ],
    },
    fr: {
      heroTitle: <>Financer ses études avec <br/> des aides</>,
      sidebar: [
        { id: "assistance", label: "Aides financières" },
        { id: "housing", label: "Aides au logement" },
        { id: "mobility", label: "Aides à la mobilité" },
        { id: "various", label: "Aides diverses" },
      ],
      intro: [
        "Que vous entamiez vos études supérieures ou que vous les poursuiviez, naviguer dans le monde complexe des aides pour étudiants peut être un défi.",
        "Heureusement, de nombreuses ressources sont à votre disposition pour vous soutenir dans votre parcours. Bourses, prêts, aides diverses… cette page est conçue pour vous éclairer sur l'ensemble des dispositifs existants.",
        "L'objectif est de vous fournir les clés pour financer sereinement vos études et vous concentrer pleinement sur votre réussite !",
      ],
      sections: [
        {
          id: "assistance",
          title: "Aides financières",
          columns: 3 as const,
          grid: [
            {
              icon: Briefcase,
              title: "Prime d'activité",
              desc: "C'est une aide sociale versée par la CAF pour compléter les revenus des étudiants salariés et apprentis",
              variant: "gray" as const,
            },
            {
              icon: Banknote,
              title: "Prêt étudiant garanti par l'Etat",
              desc: "Le prêt étudiant garanti par l'État permet aux étudiants de moins de 28 ans d'emprunter jusqu'à 20 000 euros auprès d'une banque partenaire sans caution personnelle ni conditions de ressources.",
              variant: "red" as const,
            },
            {
              icon: Wallet,
              title: "Fonds d'Aide aux Jeunes",
              desc: "Le Fonds d'aide aux jeunes (FAJ) est un dispositif géré par le Conseil départemental de la Haute-Garonne (ou Toulouse Métropole selon le lieu de résidence) qui offre une aide financière de dernier recours aux jeunes de 18 à 25 ans, en situation de grande difficulté sociale ou professionnelle.",
              variant: "gray" as const,
            },
            {
              icon: GraduationCap,
              title: "Bourse d'école",
              desc: "Selon votre situation personnelle, votre formation et votre campus, Grand Sud peut proposer des bourses sous forme de réduction des frais de scolarité.\n\nPlus de renseignements sont disponibles auprès de notre équipe.",
              variant: "red" as const,
            },
            {
              icon: MapPin,
              title: "Aides locales",
              desc: "Selon votre région d'origine, il est possible que des aides existent pour financer vos études !\n\nPar exemple, le Passeport pour la Mobilité des Etudes pour les étudiants d'Outre-Mer",
              variant: "gray" as const,
            },
          ],
        },
        {
          id: "housing",
          title: "Aides au logement",
          columns: 3 as const,
          grid: [
            {
              icon: Home,
              title: "APL/ALS/ALF",
              desc: "Les aides au logement de la CAF (APL, ALS, ALF) sont des prestations sociales, non cumulables, destinées à réduire le montant du loyer des étudiants, sous réserve de conditions de ressources, de la composition du foyer et du type de logement.",
              variant: "gray" as const,
            },
            {
              icon: Flag,
              title: "Mobili Jeune",
              desc: "L'aide Mobili-Jeune est une subvention d'Action Logement qui prend en charge une partie du loyer des jeunes de moins de 30 ans en formation en alternance (contrat d'apprentissage ou de professionnalisation) dans une entreprise du secteur privé non agricole.",
              variant: "red" as const,
            },
            {
              icon: ShieldCheck,
              title: "Garantie Visale",
              desc: "La garantie Visale est un service gratuit d'Action Logement qui sert de caution pour les jeunes de moins de 30 ans (ainsi que d'autres profils sous conditions) et les étudiants, rassurant ainsi les propriétaires et facilitant l'accès au logement.",
              variant: "gray" as const,
            },
            {
              icon: Wallet,
              title: "Avance Loca-Pass",
              desc: "L'avance Loca-Pass est un prêt à taux zéro, sans frais de dossier, accordé par Action Logement pour financer le dépôt de garantie exigé par le propriétaire lors de l'entrée dans un logement.",
              variant: "red" as const,
            },
            {
              icon: Building,
              title: "Instal'Toit",
              desc: "L'aide Instal'Toit est un prêt à taux zéro, sans frais de dossier, proposé par la Mairie de Toulouse pour les jeunes de 18 à 29 ans, notamment les étudiants, afin de financer leur installation dans un logement (dépôt de garantie, loyer, mobilier) jusqu'à 500 euros.",
              variant: "gray" as const,
            },
          ],
        },
        {
          id: "mobility",
          title: "Aides à la mobilité",
          columns: 3 as const,
          grid: [
            {
              icon: TrainFront,
              title: "Tarif réduit SNCF",
              desc: "Vous êtes élève de moins de 21 ans, étudiant de moins de 26 ans ou apprenti de moins de 29 ans ? Vous effectuez au moins un trajet AR par semaine sur votre parcours domicile-lieu d'étude ou d'apprentissage ? Profitez des offres qui vous sont réservées.",
              variant: "gray" as const,
            },
            {
              icon: Bike,
              title: "Eco-chèque mobilité",
              desc: "Cette aide de la Région Occitanie est destinée aux particuliers pour l'achat de vélos ou d'une voiture hybride ou électrique, afin d'encourager des modes de transport plus durables.",
              variant: "red" as const,
            },
            {
              icon: TrainFront,
              title: "Abonnements LiO train/TER -26 ans",
              desc: "Vous pouvez bénéficier d'un abonnement à tarif réduit pour votre trajet en TER/LiO train dans la région Occitanie",
              variant: "gray" as const,
            },
            {
              icon: Bus,
              title: "Abonnement Tisseo",
              desc: "Les transports en commun sont accessibles à tarif préférentiel pour les étudiants de moins de 26 ans.\n\nSelon votre situation personnelle, d'autres offres peuvent être plus adaptées également.",
              variant: "red" as const,
            },
          ],
        },
        {
          id: "various",
          title: "Aides diverses",
          columns: 2 as const,
          grid: [
            {
              icon: Accessibility,
              title: "Etudiants en situation de handicap",
              desc: "De nombreuses aides existent : AAH, PCH, AGEFIPH, 100% Handinamique...\n\nContactez votre référent handicap pour en savoir plus !",
              variant: "gray" as const,
            },
            {
              icon: Layers,
              title: "Autres aides",
              desc: "Il existe probablement d'autres aides auxquelles vous pouvez prétendre, nous vous conseillons de bien vous renseigner pour trouver toutes les solutions qui pourraient s'appliquer à votre situation !",
              variant: "red" as const,
            },
          ],
        },
      ],
    },
  }[lang];

  return (
    <main className="bg-white">
      <PageBanner title={t.heroTitle} image="/assets/card-aides.jpg" />

      <div className="pt-4">
        <CourseDetailLayout sections={t.sidebar}>
          <div className="pb-8 space-y-16">
            <section className="space-y-4">
              {t.intro.map((para, idx) => (
                <p key={idx} className="text-[#333] text-[14px] md:text-[15px] leading-relaxed font-medium">
                  {para}
                </p>
              ))}
            </section>

            {t.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <AidSection title={section.title} grid={section.grid} columns={section.columns} />
              </section>
            ))}
          </div>
        </CourseDetailLayout>
      </div>
    </main>
  );
}
