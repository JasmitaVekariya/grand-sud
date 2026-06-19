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

export default function BachelorBusinessPageFR() {
  const bannerData = {
    title: "BACHELOR BUSINESS & TOURISM",
    image: "/assets/Gemini_Generated_Image_moyjrqmoyjrqmoyj-scaled-e1756663814308.png",
    details: [
      { label: "LANGUE DE LA FORMATION", value: "anglais" },
      { label: "NIVEAU", value: "6 (bac+3)" },
      { label: "STATUT", value: "étudiant" },
      { label: "RYTHME", value: "initial" },
      { label: "DURÉE", value: "3 ans – 1 806 heures" },
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
    subtitle: "Avec une expérience de la formation depuis bientôt 35 ans, l'école Grand Sud connaît les clefs du succès pour apporter à ses étudiants le nécessaire pour réussir.",
    advantages: [
      { icon: CheckCircle2, text: "une expertise 100% tourisme depuis 1991", isDarkRed: false },
      { icon: Search, text: "accompagnement à la recherche de stage", isDarkRed: true },
      { icon: PenTool, text: "2 sessions par an d'examens blancs / jurys professionnels", isDarkRed: false },
      { icon: Users, text: "workshop avec des partenaires et des problématiques réels", isDarkRed: true },
      { icon: Briefcase, text: "des cas réels d'entreprise étudiés en cours", isDarkRed: false },
      { icon: MonitorPlay, text: "des intervenants professionnels", isDarkRed: true },
      { icon: BookOpen, text: "un programme adapté à la demande des entreprises", isDarkRed: false },
      { icon: Globe, text: "un programme à visée internationale", isDarkRed: true },
      { icon: Handshake, text: "des étudiants aux origines diverses, vecteurs de richesse culturelle", isDarkRed: false },
    ]
  };

  const programYears = [
    {
      id: "year1",
      title: "Année 1",
      hours: "602 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et teambuilding" },
            { label: "Anglais touristique", description: "Accueillir et prendre en charge des clients étrangers, vendre à des clients étrangers des produits touristiques français, vendre des produits touristiques étrangers à une clientèle française, accompagner des touristes étrangers, suivre et fidéliser la clientèle étrangère" },
            { label: "Français", description: "Apprendre à communiquer afin de répondre à des besoins basiques et concrets (niveau A1)" },
            { label: "Culture française", description: "Connaître et maîtriser la culture française" },
            { label: "Devoirs surveillés et examens blancs", description: "Mise en situation d'examens" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Culture touristique",
          items: [
            { label: "Conception de produits touristiques", description: "Maîtriser les concepts de la phase d'analyse et de mise en œuvre jusqu'au marketing" },
            { label: "Panorama du tourisme mondial", description: "Connaître les spécificités et tendances des différents types de tourisme, connaître les principales destinations touristiques dans le monde" },
            { label: "Amadeus", description: "Maîtriser le fonctionnement du GDS (Global Distribution Systems) Amadeus, système de réservation de l'écosystème de l'aérien et du ferroviaire" },
            { label: "Gestion de l'information touristique", description: "Maîtriser les principaux outils et logiciels de collecte, de traitement et de publication d'informations touristiques" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Expérience utilisateur",
          items: [
            { label: "Gestion commerciale", description: "Créer une relation de qualité pour fidéliser durablement les clients" },
            { label: "Marketing", description: "Comprendre les règles de base du marketing" },
            { label: "Marketing touristique", description: "Maîtriser les fondamentaux du marketing touristique" },
            { label: "Stratégie de communication", description: "Être capable de construire une stratégie de communication 360" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Management",
          items: [
            { label: "Fondamentaux du management", description: "Comprendre les différentes méthodes de management émergentes" },
            { label: "Management interculturel", description: "Analyser l'interaction interculturelle dans des situations professionnelles en utilisant différentes approches conceptuelles" },
            { label: "Management d'équipe", description: "Mobiliser les énergies individuelles des membres de l'équipe" },
            { label: "Management et RSE", description: "Intégrer la RSE dans les méthodes de management" },
          ]
        }
      ]
    },
    {
      id: "year2",
      title: "Année 2",
      hours: "602 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et teambuilding" },
            { label: "Anglais touristique", description: "Accueillir et prendre en charge des clients étrangers, vendre à des clients étrangers des produits touristiques français, vendre des produits touristiques étrangers à une clientèle française, accompagner des touristes étrangers, suivre et fidéliser la clientèle étrangère" },
            { label: "Français", description: "Comprendre l'essentiel des textes écrits dans le langage de tous les jours : mails, brochures, articles, critiques de films ; possibilité d'écrire des textes simples, connectés sur des sujets familiers (niveau intermédiaire B1)" },
            { label: "Culture française", description: "Connaître et maîtriser la culture française" },
            { label: "Devoirs surveillés et examens blancs", description: "Mise en situation d'examens" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Culture touristique",
          items: [
            { label: "Conception de produits touristiques", description: "Maîtriser les concepts de la phase d'analyse et de mise en œuvre jusqu'au marketing" },
            { label: "Panorama du tourisme mondial", description: "Connaître les spécificités et tendances des différents types de tourisme, connaître les principales destinations touristiques dans le monde" },
            { label: "Amadeus", description: "Maîtriser le fonctionnement du GDS (Global Distribution Systems) Amadeus, système de réservation de l'écosystème de l'aérien et du ferroviaire" },
            { label: "Gestion de l'information touristique", description: "Maîtriser les principaux outils et logiciels de collecte, de traitement et de publication d'informations touristiques" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Expérience utilisateur",
          items: [
            { label: "Environnement économique et juridique", description: "Comprendre les bases juridiques du fonctionnement d'une entreprise" },
            { label: "Création de site e-commerce et éco-conception web [CMS]", description: "Pouvoir créer un site e-commerce" },
            { label: "Management événementiel", description: "Organiser un évènement éco-responsable" },
            { label: "Réseaux sociaux", description: "Être capable de réaliser une campagne sur les réseaux sociaux" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Management",
          items: [
            { label: "Manager une équipe de vente", description: "Connaître les règles du management" },
            { label: "Management interculturel", description: "Analyser l'interaction interculturelle dans des situations professionnelles en utilisant différentes approches conceptuelles" },
            { label: "Prise de parole en public", description: "Être capable de créer un discours engageant" },
            { label: "Négociation commerciale", description: "Comprendre les bases de la négociation commerciale (jeu de rôle)" },
          ]
        }
      ]
    },
    {
      id: "year3",
      title: "Année 3",
      hours: "602 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et teambuilding" },
            { label: "Anglais touristique", description: "Accueillir et prendre en charge des clients étrangers, vendre à des clients étrangers des produits touristiques français, vendre des produits touristiques étrangers à une clientèle française, accompagner des touristes étrangers, suivre et fidéliser la clientèle étrangère" },
            { label: "Français", description: "Comprendre des textes écrits dans le langage courant : mails, brochures, articles, critiques de films ; possibilité d'écrire des textes plus complexes, connectés sur des sujets familiers (niveau intermédiaire B2)" },
            { label: "Culture française", description: "Connaître et maîtriser la culture française" },
            { label: "Devoirs surveillés et examens blancs", description: "Mise en situation d'examens" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Commerce et économie",
          items: [
            { label: "Management d'un projet touristique", description: "Comprendre la gestion de projet" },
            { label: "Gestion financière", description: "Analyser la performance comptable d'une entreprise" },
            { label: "Marketing analytique et stratégique", description: "Choisir une stratégie marketing dans le secteur du tourisme et fixer des objectifs" },
            { label: "Plan marketing", description: "Planifier un plan de communication digitale dans le secteur du tourisme" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Expérience utilisateur",
          items: [
            { label: "Relations commerciales", description: "Créer une relation de qualité pour fidéliser durablement les clients" },
            { label: "Gestion du tourisme local et des animations", description: "Comprendre les principes du tourisme local et savoir mettre en place un projet" },
            { label: "Développement territorial", description: "Réaliser un diagnostic territorial, élaborer un projet territorial en tenant compte du développement durable et de la RSE" },
            { label: "Stratégie locale", description: "Acquérir des connaissances fondamentales sur le patrimoine culturel, viticole et touristique au niveau régional, départemental et local ; identifier les produits locaux et assurer leur promotion" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Management",
          items: [
            { label: "Fondamentaux du management", description: "Comprendre les différentes méthodes de management" },
            { label: "Management interculturel", description: "Analyser l'interaction interculturelle dans des situations professionnelles en utilisant différentes approches conceptuelles" },
            { label: "Management d'équipe", description: "Mobiliser les énergies individuelles des membres de l'équipe" },
            { label: "Management et RSE", description: "Intégrer la RSE dans les méthodes de management" },
          ]
        }
      ]
    }
  ];

  const admissionsData = {
    title: "ADMISSIONS",
    prerequisite: {
      title: "Pré-requis",
      items: [
        "Bac ou équivalent",
        "Un niveau d'anglais suffisant pour permettre de suivre la formation (au minimum B2), justifié par des résultats officiels d'un test d'anglais ou équivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE…), sauf pour les anglophones (langue maternelle anglaise) ou les candidats qui ont étudié au moins 2 ans dans un programme enseigné en anglais (le candidat devra fournir des documents justificatifs)",
        "Bon niveau académique",
        "Si niveau bac : le candidat devra valider les épreuves manquantes en candidat libre lors de la 1ère année du programme"
      ]
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée",
      nextYearValue: "6 octobre 2025",
      deferredLabel: "Rentrée décalée",
      deferredValue: "9 février 2026"
    },
    processTitle: "Modalités d'admission",
    processSteps: [
      {
        title: "Etape 1 : Dépôt de candidature",
        items: [
          { text: "Téléchargez votre dossier de candidature sur la version anglaise de notre site internet.", isLink: true, linkText: "version anglaise de notre site internet", linkHref: "/en/apply" },
          { text: "Envoyez votre dossier complété par mail en n'oubliant pas les pièces jointes à fournir !" },
          { text: "Frais de dossier : 300€, non remboursables", isItalic: true }
        ]
      },
      {
        title: "Etape 2 : sélection",
        items: [
          { text: "Etude de votre dossier de candidature et vérification des pré-requis selon la formation souhaitée : niveau d'études et langues étrangères, expérience professionnelle," },
          { text: "Rendez-vous individuel : entretien de motivation à distance (en visio)" },
          { text: "Passage en commission d'admission : notre équipe étudie votre dossier dans son ensemble" },
          { text: "Réponse sous 48h ouvrée : avis favorable ou défavorable" }
        ]
      },
      {
        title: "Etape 3 : inscription",
        items: [
          { text: "Signature du contrat d'enseignement" },
          { text: "Accompagnement sur les dispositifs de financement et la recherche de stage" }
        ]
      }
    ],
    prices: {
      title: "Tarifs",
      initialLabel: "Tarif en initial :",
      initialPrice: "Par an : 12 500 €\nDes bourses sont disponibles, contactez votre chargé d'admissions pour connaître les modalités",
      workStudyLabel: "",
      workStudyPrice: "",
      workStudyNote: "",
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Épreuves écrites et orales",
      downloadFrameworkLabel: "Télécharger le guide de validation",
      downloadFrameworkHref: "/assets/Guide-de-validation-RDTT_2025-20261.pdf",
      certificationTitle: "Certification",
      diplomaName: "Responsable de développement touristique territorial (RDTT) – Titre certifié de niveau bac +3",
      rncpLabel: "RNCP 35706",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/35706/",
      diplomaCodeLabel: "Code diplôme",
      diplomaCode: "36T33403",
      ministry: "Ministère du travail, du plein emploi et de l'insertion",
      expirationLabel: "Date d'échéance :",
      expirationDate: "02/08/2026",
      certificationNote: "Ce titre est composé de quatre blocs de compétences dénommés « certificats de compétences professionnelles » (CCP). Il est accessible par capitalisation de CCP ou suite à un parcours de formation.",
      equivalencesTitle: "Equivalences",
      equivalencesItems: [
        "Le CCP « Accompagner le développement marketing d'un territoire » du titre RDTT est équivalent au CCP « Commercialiser un établissement touristique avec une démarche multicanale » du titre professionnel « Responsable d'établissement touristique ».",
        "Le CCP « Assurer la faisabilité financière d'une action touristique » du titre RDTT est équivalent au CCP « Assurer la gestion opérationnelle d'exploitation et prévoir les investissements d'un établissement touristique » du titre professionnel « Responsable d'établissement touristique »."
      ]
    }
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Après ce bachelor international, le monde s'ouvre à vous et les débouchés sont intéressants !",
    categories: [
      {
        jobs: [
          { label: "Manager d'une structure d'accueil", isDarkRed: false },
          { label: "Concepteur de produits touristiques", isDarkRed: true },
          { label: "Animateur de territoire", isDarkRed: false },
          { label: "Responsable d'animation en station de montagne", isDarkRed: true },
          { label: "Chargé d'accueil", isDarkRed: true },
          { label: "Manager d'une agence de voyage", isDarkRed: false },
          { label: "Responsable commercial", isDarkRed: true },
          { label: "Responsable marketing", isDarkRed: false },
          { label: "Responsable de communication", isDarkRed: false },
          { label: "Chef de projet produit", isDarkRed: true },
          { label: "Chef d'équipe d'accueil", isDarkRed: false },
          { label: "Responsable relation visiteurs", isDarkRed: true },
        ]
      }
    ]
  };

  const furtherEducationData = {
    title: "POURSUITE D'ÉTUDES",
    links: [
      { label: "Mastère Business & Tourism", href: "/fr/formations/mastere-business", flag: "UK" as const },
      { label: "Mastère Hospitality Management", href: "/fr/formations/mastere-hospitality", flag: "UK" as const },
      { label: "Mastère Manager en Stratégies Touristiques", href: "/fr/formations/mastere-tourism", flag: "FR" as const },
      { label: "De manière générale, les titres de niveau 7", href: "" }
    ],
    jobs: []
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
      
      <CourseDetailLayout 
        sections={sections}
        applyButton={{ label: "Candidater", href: "/fr/candidater" }}
      >
        {/* Description Section */}
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>Ce Bachelor, formulé pour les étudiants visant l&apos;international, les forme aux enjeux du tourisme, à la culture française et à la maîtrise du marketing mix spécifique au secteur.</p>
              <p>Les diplômés obtiennent un titre professionnel certifié de niveau 6 leur permettant d&apos;accéder à des postes variés dans l&apos;univers du tourisme.</p>
              <p>Il est fait pour les étudiants passionnés par les voyages, la culture et les affaires, diplômés d&apos;un bac (ou équivalent) à la recherche d&apos;une carrière dans le tourisme international ainsi que pour les étudiants européens et internationaux cherchant à étudier en France dans un environnement d&apos;apprentissage international.</p>
            </div>
          </div>
          <CourseAdvantages {...advantagesData} />
        </section>

        {/* Program Section */}
        <section id="programm" className="scroll-mt-32">
          <CourseProgram 
            title="PROGRAMME"
            years={programYears}
          />
        </section>

        {/* Admissions Section */}
        <section id="admissions" className="scroll-mt-32">
          <CourseAdmissions {...admissionsData} />
        </section>

        {/* Validation Section */}
        <section id="validation" className="scroll-mt-32">
          <CourseValidation {...validationData} />
        </section>

        {/* Job Opportunities Section */}
        <section id="jobs" className="scroll-mt-32">
          <CourseJobs {...jobsData} />
        </section>
        
        {/* Further Education Section */}
        <section id="further-education" className="scroll-mt-32">
          <CourseFurtherEducation {...furtherEducationData} />
        </section>

      </CourseDetailLayout>
    </main>
  );
}
