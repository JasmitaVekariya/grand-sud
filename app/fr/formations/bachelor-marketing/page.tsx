"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import CourseFurtherEducation from "@/components/courses/CourseFurtherEducation";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay, BookOpen, Globe, Handshake } from "lucide-react";

const mod = (label: string, topics: string[]) => ({
  label,
  description: topics.join(", "),
});

const keySkills = [
  {
    title: "Analyse de marché",
    items: [
      "Conduire des études de marché",
      "Analyser le comportement client",
      "Réaliser du benchmarking concurrentiel",
      "Développer des personas clients",
      "Conduire une analyse SWOT",
    ],
  },
  {
    title: "Stratégie marketing",
    items: [
      "Concevoir des plans marketing",
      "Développer des stratégies de communication",
      "Allouer budgets et ressources",
      "Mesurer la performance marketing",
    ],
  },
  {
    title: "Marketing digital",
    items: ["Optimisation SEO & SEM", "Gestion des réseaux sociaux", "Content marketing", "Marketing automation", "Web analytics"],
  },
  {
    title: "Communication & branding",
    items: ["Création de contenu", "Design graphique", "Production multimédia", "Gestion de marque", "Relations publiques"],
  },
  {
    title: "Gestion de la relation client",
    items: ["Implémentation CRM", "Stratégies d'engagement client", "Lead nurturing", "Community management"],
  },
  {
    title: "Développement commercial",
    items: ["Support commercial", "Stratégies de croissance", "Développement de partenariats", "Acquisition client"],
  },
  {
    title: "Gestion de projet",
    items: ["Planification de campagnes", "Coordination d'équipe", "Suivi de performance", "Amélioration continue"],
  },
];

export default function BachelorMarketingPageFR() {
  const bannerData = {
    title: "BACHELOR BUSINESS MARKETING AND COMMUNICATION",
    image: "/assets/Gemini_Generated_Image_hromqqhromqqhrom-e1756710798902.png",
    details: [
      { label: "LANGUE DE LA FORMATION", value: "Anglais" },
      { label: "NIVEAU", value: "6 (bac+3)" },
      { label: "RNCP", value: "RNCP42050" },
      { label: "STATUT", value: "étudiant" },
      { label: "RYTHME", value: "initial" },
      { label: "DURÉE", value: "3 ans" },
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
    { id: "further-education", label: "POURSUITE D'ÉTUDES" },
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
      title: "Année 1 – Fondamentaux du marketing, du business et de la communication",
      hours: "",
      content: [
        {
          unit: "Semestre 1",
          items: [
            mod("Modules principaux", [
              "Introduction au marketing",
              "Principes de management",
              "Compétences en communication professionnelle",
              "Culture digitale & bureautique",
              "Fondamentaux du comportement consommateur",
              "Économie appliquée au business",
              "Rédaction académique & présentation",
              "Anglais professionnel",
            ]),
          ],
        },
        {
          unit: "Semestre 2",
          items: [
            mod("Modules principaux", [
              "Fondamentaux de la communication",
              "Introduction au marketing digital",
              "Techniques d'études de marché",
              "Fondamentaux des réseaux sociaux",
              "Statistiques appliquées au business",
              "Bases du design graphique",
              "Introduction à la gestion de la relation client (CRM)",
              "Développement personnel & employabilité",
            ]),
          ],
        },
        {
          unit: "Projets pratiques",
          items: [
            mod("Projets appliqués", [
              "Projet d'observation de marché",
              "Création de campagne social media",
              "Atelier stratégie de communication",
              "Projet de présentation business",
            ]),
          ],
        },
        {
          unit: "Stage",
          items: [
            mod("Expérience professionnelle", [
              "Stage professionnel de 8 semaines ou expérience équivalente en alternance",
            ]),
          ],
        },
      ],
    },
    {
      id: "year2",
      title: "Année 2 – Marketing digital, création de contenu & engagement client",
      hours: "",
      content: [
        {
          unit: "Semestre 3",
          items: [
            mod("Modules principaux", [
              "Stratégie marketing",
              "Marketing digital & analytics",
              "Content marketing",
              "Design graphique & communication visuelle",
              "Branding & identité corporate",
              "Gestion de l'expérience client",
              "Web design & fondamentaux CMS",
              "Analyse de données pour le marketing",
            ]),
          ],
        },
        {
          unit: "Semestre 4",
          items: [
            mod("Modules principaux", [
              "Référencement naturel (SEO)",
              "Référencement payant (SEM)",
              "Marketing des réseaux sociaux",
              "Production de contenu multimédia",
              "Community management",
              "CRM & marketing automation",
              "Fondamentaux e-commerce",
              "Relations publiques & communication corporate",
            ]),
          ],
        },
        {
          unit: "Projets pratiques",
          items: [
            mod("Projets appliqués", [
              "Projet de développement de site web",
              "Projet de développement de marque",
              "Campagne de marketing digital",
              "Projet de community management",
            ]),
          ],
        },
        {
          unit: "Stage",
          items: [
            mod("Expérience professionnelle", [
              "Stage professionnel de 8 semaines en marketing, communication, vente ou business digital",
            ]),
          ],
        },
      ],
    },
    {
      id: "year3",
      title: "Année 3 – Marketing stratégique, développement commercial & leadership",
      hours: "",
      content: [
        {
          unit: "Semestre 5 – Marketing stratégique & communication",
          items: [
            mod("Modules principaux", [
              "Planification marketing stratégique",
              "Analyse concurrentielle & benchmarking",
              "Veille marketing & tendances de marché",
              "Techniques de développement commercial",
              "Sales enablement & support commercial",
              "Optimisation du parcours client",
              "Gestion de projet",
              "Marketing durable & responsable",
            ]),
          ],
        },
        {
          unit: "Semestre 6 – Performance & innovation",
          items: [
            mod("Modules principaux", [
              "Marketing digital avancé",
              "Growth marketing & génération de leads",
              "Mesure de la performance marketing",
              "Marketing automation & applications IA",
              "Gestion d'événements & marketing expérientiel",
              "Innovation & entrepreneuriat",
              "Gestion des risques en projets marketing",
            ]),
          ],
        },
        {
          unit: "Projet capstone final",
          items: [
            mod("Projets appliqués", [
              "Plan marketing stratégique",
              "Projet de développement commercial",
              "Campagne de communication multicanale",
              "Projet de conseil final pour une entreprise",
            ]),
          ],
        },
        {
          unit: "Stage / Alternance",
          items: [
            mod("Expérience professionnelle", [
              "Minimum 8 semaines en marketing, communication, vente, développement commercial ou domaines connexes",
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
        "Baccalauréat ou équivalent",
        "Un niveau d'anglais suffisant pour suivre la formation (minimum B2), justifié par des résultats officiels d'un test d'anglais ou équivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE…), sauf pour les anglophones ou candidats ayant étudié au moins 2 ans en anglais",
        "Bon niveau académique et motivation pour les métiers du marketing et de la communication",
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
      initialPrice: "Par an : 12 500 €\nDes bourses sont disponibles, contactez votre chargé d'admissions pour connaître les modalités",
      workStudyLabel: "",
      workStudyPrice: "",
      workStudyNote: "",
    },
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Travaux individuels, projets de groupe, analyse de cas, présentations, examens, rapports de stage",
      certificationTitle: "Certification",
      diplomaName: "Titre de niveau bac +3",
      rncpLabel: "RNCP42050",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/42050/",
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
          { label: "Responsable marketing", isDarkRed: false },
          { label: "Spécialiste marketing digital", isDarkRed: true },
          { label: "Community manager", isDarkRed: false },
          { label: "Responsable content marketing", isDarkRed: true },
          { label: "Responsable réseaux sociaux", isDarkRed: false },
          { label: "Brand manager", isDarkRed: true },
          { label: "Responsable communication", isDarkRed: false },
          { label: "Responsable CRM & engagement client", isDarkRed: true },
          { label: "Chargé de développement commercial", isDarkRed: false },
          { label: "Chef de projet marketing", isDarkRed: true },
          { label: "Spécialiste SEO / SEM", isDarkRed: false },
          { label: "Chargé de relations publiques", isDarkRed: true },
        ],
      },
    ],
  };

  const furtherEducationData = {
    title: "POURSUITE D'ÉTUDES",
    links: [
      { label: "Mastère Business Marketing and Communication", href: "/fr/formations/mastere-marketing", flag: "UK" as const },
      { label: "Mastère Business & Tourism", href: "/fr/formations/mastere-business", flag: "UK" as const },
      { label: "En général, tous les titres de niveau 7", href: "" },
    ],
    jobs: [],
  };

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
                Ce Bachelor Business Marketing and Communication offre une solide base en business, communication, technologies digitales et principes marketing, préparant les étudiants aux métiers du marketing, de la communication et du business digital.
              </p>
              <p>
                Sur trois ans, les étudiants progressent des fondamentaux marketing aux compétences digitales avancées, à la planification stratégique et au développement commercial, à travers des projets pratiques et des stages professionnels chaque année.
              </p>
              <p>
                Les diplômés obtiennent un titre professionnel certifié de niveau 6 (RNCP42050) leur permettant d&apos;accéder à des postes en marketing, communication et commerce en France et à l&apos;international.
              </p>
              <div className="space-y-6 pt-2">
                <h3 className="text-[18px] font-bold uppercase tracking-wide text-primary-red">Compétences clés développées</h3>
                <p>À l&apos;issue de la formation, les étudiants seront capables de :</p>
                {keySkills.map((group) => (
                  <div key={group.title} className="space-y-2">
                    <h4 className="font-bold text-black">{group.title}</h4>
                    <ul className="list-disc list-outside pl-5 space-y-1">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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

        <section id="further-education" className="scroll-mt-32">
          <CourseFurtherEducation {...furtherEducationData} />
        </section>
      </CourseDetailLayout>
    </main>
  );
}
