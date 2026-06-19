"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay, BookOpen, Globe, Handshake } from "lucide-react";

const mod = (label: string, topics: string[]) => ({
  label,
  description: topics.join(", "),
});

export default function MastereMarketingPageFR() {
  const bannerData = {
    title: "MASTÈRE BUSINESS MARKETING AND COMMUNICATION",
    image: "/assets/Gemini_Generated_Image_hromqqhromqqhrom-e1756710798902.png",
    details: [
      { label: "LANGUE DE LA FORMATION", value: "Anglais" },
      { label: "NIVEAU", value: "7 (bac+5)" },
      { label: "RNCP", value: "RNCP38504" },
      { label: "STATUT", value: "étudiant" },
      { label: "RYTHME", value: "initial" },
      { label: "DURÉE", value: "2 ans – 120 ECTS" },
    ],
    logos: ["/assets/logo-france-competences.png"],
    certificationBadge: "TITRE CERTIFIÉ PAR L'ÉTAT",
  };

  const sections = [
    { id: "description", label: "DESCRIPTION" },
    { id: "programm", label: "PROGRAMME" },
    { id: "admissions", label: "ADMISSIONS" },
    { id: "validation", label: "VALIDATION" },
    { id: "jobs", label: "DÉBOUCHÉS" },
  ];

  const advantagesData = {
    title: "Les plus de Grand Sud",
    subtitle:
      "Avec une expérience de la formation depuis bientôt 35 ans, l'école Grand Sud connaît les clefs du succès pour apporter à ses étudiants le nécessaire pour réussir.",
    advantages: [
      { icon: CheckCircle2, text: "une expertise business et tourisme depuis 1991", isDarkRed: false },
      { icon: Search, text: "accompagnement à la recherche de stage", isDarkRed: true },
      { icon: PenTool, text: "2 sessions par an d'examens blancs / jurys professionnels", isDarkRed: false },
      { icon: Users, text: "workshop avec des partenaires et des problématiques réels", isDarkRed: true },
      { icon: Briefcase, text: "des cas réels d'entreprise étudiés en cours", isDarkRed: false },
      { icon: MonitorPlay, text: "des intervenants professionnels", isDarkRed: true },
      { icon: BookOpen, text: "un programme adapté à la demande des entreprises", isDarkRed: false },
      { icon: Globe, text: "un programme à visée internationale", isDarkRed: true },
      { icon: Handshake, text: "des étudiants aux origines diverses, vecteurs de richesse culturelle", isDarkRed: false },
    ],
  };

  const programYears = [
    {
      id: "year1",
      title: "Année 1 – Fondamentaux du management commercial stratégique",
      hours: "60 ECTS",
      content: [
        {
          unit: "Semestre 1 (30 ECTS)",
          items: [
            mod("Module 1 : Marketing stratégique & veille marché", [
              "Stratégie marketing",
              "Méthodes d'études de marché",
              "Comportement du consommateur",
              "Veille concurrentielle",
              "Business analytics",
            ]),
            mod("Module 2 : Fondamentaux du développement commercial", [
              "Management des ventes",
              "Techniques de développement commercial",
              "Gestion de la relation client (CRM)",
              "Prospection & génération de leads",
              "Grands comptes",
            ]),
            mod("Module 3 : Finance d'entreprise pour managers", [
              "Analyse financière",
              "Budget & prévisions",
              "Indicateurs de performance",
              "Analyse de rentabilité commerciale",
            ]),
            mod("Module 4 : Communication professionnelle & anglais des affaires", [
              "Rédaction professionnelle",
              "Présentations corporate",
              "Communication interculturelle",
              "Communication en négociation",
            ]),
            mod("Module 5 : Transformation digitale & technologie", [
              "Modèles économiques digitaux",
              "Technologies CRM",
              "Intelligence artificielle appliquée aux ventes",
              "Prise de décision basée sur les données",
            ]),
          ],
        },
        {
          unit: "Semestre 2 (30 ECTS)",
          items: [
            mod("Module 6 : Planification commerciale stratégique", [
              "Conception de stratégie commerciale",
              "Business planning",
              "Stratégies de croissance",
              "Expansion internationale",
            ]),
            mod("Module 7 : Vente avancée & négociation", [
              "Vente stratégique",
              "Techniques de négociation complexe",
              "Modèles de vente B2B & B2C",
              "Négociation contractuelle",
            ]),
            mod("Module 8 : Gestion omnicanale de la clientèle", [
              "Conception du parcours client",
              "Expérience client digitale",
              "Management e-commerce",
              "Stratégies de fidélisation",
            ]),
            mod("Module 9 : Gestion de projet", [
              "Méthodes agiles",
              "Planification de projets commerciaux",
              "Gestion des ressources",
              "Gestion des risques",
            ]),
            mod("Module 10 : Projet appliqué de développement commercial", [
              "Analyse d'opportunités de marché",
              "Rapport de stratégie commerciale",
              "Projet de conseil en groupe",
              "Stage I (8 à 12 semaines, crédits inclus au semestre 2)",
            ]),
          ],
        },
      ],
    },
    {
      id: "year2",
      title: "Année 2 – Leadership commercial avancé & stratégie",
      hours: "60 ECTS",
      content: [
        {
          unit: "Semestre 3 (30 ECTS)",
          items: [
            mod("Module 11 : Stratégie commerciale & croissance", [
              "Développement stratégique",
              "Modèles de croissance",
              "Fusions & partenariats stratégiques",
              "Management de l'innovation",
            ]),
            mod("Module 12 : Leadership commercial & management d'équipe", [
              "Principes de leadership",
              "Management d'équipes commerciales",
              "Évaluation de la performance",
              "Développement des talents",
            ]),
            mod("Module 13 : Développement international", [
              "Entrée sur les marchés internationaux",
              "Négociation internationale",
              "Management export",
              "Droit commercial international",
            ]),
            mod("Module 14 : Entreprise durable & RSE", [
              "Stratégie ESG",
              "Pratiques commerciales durables",
              "Développement éthique",
              "Leadership responsable",
            ]),
            mod("Module 15 : Data analytics avancée pour décisions commerciales", [
              "Analyse prédictive",
              "Prévisions de ventes",
              "Outils de business intelligence",
              "Développement de tableaux de bord",
            ]),
          ],
        },
        {
          unit: "Semestre 4 (30 ECTS)",
          items: [
            mod("Module 16 : Performance commerciale omnicanale", [
              "Gestion des KPI",
              "Optimisation des revenus",
              "Analyse de la valeur vie client",
              "Audit commercial",
            ]),
            mod("Module 17 : Entrepreneuriat & innovation", [
              "Développement de startup",
              "Innovation de modèle économique",
              "Financement de projets",
              "Leadership entrepreneurial",
            ]),
            mod("Module 18 : Négociation stratégique & partenariats", [
              "Négociation de haut niveau",
              "Management d'alliances",
              "Gestion des parties prenantes",
              "Achats stratégiques",
            ]),
            mod("Module 19 : Développement professionnel & employabilité", [
              "Gestion de carrière",
              "Leadership exécutif",
              "Personal branding",
              "Préparation aux entretiens",
            ]),
            mod("Module 20 : Mémoire de fin d'études / projet capstone", [
              "Recherche appliquée",
              "Développement de stratégie commerciale",
              "Projet de conseil en entreprise",
              "Soutenance",
              "Stage II (4 à 6 mois, crédits inclus au semestre 4)",
            ]),
          ],
        },
      ],
    },
  ];

  const admissionsData = {
    title: "ADMISSIONS",
    prerequisite: {
      title: "Pré-requis",
      items: [
        "Bac+3 ou équivalent",
        "Un niveau d'anglais suffisant pour suivre la formation (minimum B2), justifié par des résultats officiels d'un test d'anglais ou équivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE…), sauf pour les anglophones ou candidats ayant étudié au moins 2 ans en anglais",
        "Bon niveau académique et motivation pour les métiers du marketing et du commerce",
      ],
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée",
      nextYearValue: "6 octobre 2025",
      deferredLabel: "Rentrée décalée",
      deferredValue: "9 février 2026",
    },
    processTitle: "Modalités d'admission",
    processSteps: [
      {
        title: "Etape 1 : Dépôt de candidature",
        items: [
          { text: "Téléchargez votre dossier de candidature sur la version anglaise de notre site internet.", isLink: true, linkText: "version anglaise de notre site internet", linkHref: "/en/apply" },
          { text: "Envoyez votre dossier complété par mail en n'oubliant pas les pièces jointes à fournir !" },
          { text: "Frais de dossier : 300€, non remboursables", isItalic: true },
        ],
      },
      {
        title: "Etape 2 : sélection",
        items: [
          { text: "Etude de votre dossier de candidature et vérification des pré-requis selon la formation souhaitée." },
          { text: "Rendez-vous individuel : entretien de motivation à distance (en visio)" },
          { text: "Passage en commission d'admission : notre équipe étudie votre dossier dans son ensemble" },
          { text: "Réponse sous 48h ouvrée : avis favorable ou défavorable" },
        ],
      },
      {
        title: "Etape 3 : inscription",
        items: [
          { text: "Signature du contrat d'enseignement" },
          { text: "Accompagnement sur les dispositifs de financement et la recherche de stage" },
        ],
      },
    ],
    prices: {
      title: "Tarifs",
      initialLabel: "Tarif en initial :",
      initialPrice: "Par an : 14 500 €\nDes bourses sont disponibles, contactez votre chargé d'admissions pour connaître les modalités",
      workStudyLabel: "",
      workStudyPrice: "",
      workStudyNote: "",
    },
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText:
        "Travaux individuels, projets de groupe, business plans, analyse de cas, présentations, examens, rapports de stage, soutenance de mémoire",
      certificationTitle: "Certification",
      diplomaName: "Titre de niveau bac +5",
      rncpLabel: "RNCP38504",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/38504/",
      diplomaCodeLabel: "",
      diplomaCode: "",
      ministry: "",
      expirationLabel: "",
      expirationDate: "",
    },
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Les diplômés peuvent exercer les fonctions suivantes :",
    categories: [
      {
        jobs: [
          { label: "Responsable du développement commercial", isDarkRed: false },
          { label: "Directeur commercial", isDarkRed: true },
          { label: "Directeur des ventes", isDarkRed: false },
          { label: "Responsable grands comptes", isDarkRed: true },
          { label: "Responsable développement international", isDarkRed: false },
          { label: "Directeur du développement commercial", isDarkRed: true },
          { label: "Responsable partenariats stratégiques", isDarkRed: false },
          { label: "Directeur customer success", isDarkRed: true },
          { label: "Responsable excellence commerciale", isDarkRed: false },
          { label: "Entrepreneur / Fondateur de startup", isDarkRed: true },
        ],
      },
    ],
  };

  const teachingMethods = [
    "Etudes de cas",
    "Simulations business",
    "Projets sectoriels",
    "Missions de conseil",
    "Ateliers",
    "Conférences professionnelles",
    "Visites d'entreprise",
  ];

  return (
    <main className="bg-white">
      <CourseBanner
        title={bannerData.title}
        image={bannerData.image}
        details={bannerData.details}
        logos={bannerData.logos}
        certificationBadge={bannerData.certificationBadge}
      />

      <CourseDetailLayout sections={sections} applyButton={{ label: "Candidater", href: "/fr/candidater" }}>
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>
                Ce Mastère Business Marketing and Communication forme les futurs leaders commerciaux au marketing stratégique, au développement des ventes, à la transformation digitale et à la croissance internationale.
              </p>
              <p>
                Sur deux ans, les étudiants développent des compétences avancées en stratégie commerciale, négociation, prise de décision data-driven et gestion omnicanale de la clientèle, à travers des projets appliqués et des stages professionnels.
              </p>
              <p>
                Les diplômés obtiennent un titre professionnel certifié de niveau 7 (RNCP38504) leur permettant d&apos;accéder à des postes de direction commerciale et marketing en France et à l&apos;international.
              </p>
              <div className="space-y-3 pt-2">
                <h3 className="text-[18px] font-bold uppercase tracking-wide text-primary-red">Méthodes pédagogiques</h3>
                <ul className="list-disc list-outside pl-5 space-y-1">
                  {teachingMethods.map((method) => (
                    <li key={method}>{method}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <CourseAdvantages {...advantagesData} />
        </section>

        <section id="programm" className="scroll-mt-32">
          <CourseProgram title="PROGRAMME" years={programYears} />
        </section>

        <section id="admissions" className="scroll-mt-32">
          <CourseAdmissions {...admissionsData} />
        </section>

        <section id="validation" className="scroll-mt-32">
          <CourseValidation {...validationData} />
        </section>

        <section id="jobs" className="scroll-mt-32">
          <CourseJobs {...jobsData} />
        </section>
      </CourseDetailLayout>
    </main>
  );
}
