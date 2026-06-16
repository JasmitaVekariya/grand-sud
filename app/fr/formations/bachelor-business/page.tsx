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
    title: "Bachelor Business & Tourism",
    image: "/assets/Gemini_Generated_Image_moyjrqmoyjrqmoyj-scaled-e1756663814308.png",
    details: [
      { label: "Langue de la formation", value: "anglais" },
      { label: "Niveau", value: "6 (bac+3)" },
      { label: "Statut", value: "étudiant" },
      { label: "Rythme", value: "initial" },
      { label: "Durée", value: "3 ans – 1806 heures" },
    ],
    logos: ["/assets/logo-france-competences.png"]
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
    title: "Les atouts de Grand Sud",
    subtitle: "Avec près de 35 ans d'expérience dans l'éducation, l'école Grand Sud connaît les clés de la réussite pour fournir à ses étudiants ce dont ils ont besoin pour réussir.",
    advantages: [
      { icon: CheckCircle2, text: "100% d'expertise touristique depuis 1991", isDarkRed: false },
      { icon: Search, text: "accompagnement dans la recherche d'alternance ou de stage", isDarkRed: true },
      { icon: PenTool, text: "Deux sessions d'examens blancs par an / examinateurs professionnels", isDarkRed: false },
      { icon: Users, text: "atelier avec de vrais partenaires et de vraies problématiques", isDarkRed: true },
      { icon: Briefcase, text: "cas d'entreprises réels étudiés en classe", isDarkRed: false },
      { icon: MonitorPlay, text: "intervenants professionnels", isDarkRed: true },
      { icon: BookOpen, text: "un programme adapté aux besoins des entreprises", isDarkRed: false },
      { icon: Globe, text: "un programme résolument tourné vers l'international", isDarkRed: true },
      { icon: Handshake, text: "des étudiants d'horizons divers, vecteurs de richesse culturelle", isDarkRed: false },
    ]
  };

  const programYears = [
    {
      id: "year1",
      title: "Année 1 - 602 heures",
      hours: "602 heures",
      content: [
        {
          unit: "Bloc de compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et team-building" },
            { label: "Anglais du tourisme", description: "Accueillir et assister les clients étrangers, vendre des produits touristiques français aux clients étrangers, vendre des produits touristiques étrangers aux clients français, accompagner les touristes étrangers, suivre et fidéliser les clients étrangers" },
            { label: "Français", description: "Apprendre à communiquer pour répondre à des besoins fondamentaux et spécifiques (niveau A1)" },
            { label: "Culture française", description: "Comprendre et maîtriser la culture française" },
            { label: "Devoirs surveillés et examens blancs", description: "Simulation d'examen" },
          ]
        },
        {
          unit: "Bloc de compétences 2 – Culture touristique",
          items: [
            { label: "Conception de produits touristiques", description: "Maîtriser les concepts de la phase d'analyse et de mise en œuvre jusqu'à la commercialisation" },
            { label: "Panorama du tourisme mondial", description: "Comprendre les spécificités et les tendances des différents types de tourisme, connaître les principales destinations touristiques dans le monde" },
            { label: "Amadeus", description: "Maîtriser le fonctionnement du GDS Amadeus (Global Distribution Systems), le système de réservation de l'écosystème aérien et ferroviaire" },
            { label: "Gestion de l'information touristique", description: "Maîtriser les principaux outils et logiciels de collecte, de traitement et de publication de l'information touristique" },
          ]
        },
        {
          unit: "Bloc de compétences 3 – Expérience utilisateur",
          items: [
            { label: "Gestion commerciale", description: "Établir des relations de qualité pour fidéliser la clientèle sur le long terme" },
            { label: "Marketing", description: "Comprendre les règles de base du marketing" },
            { label: "Marketing touristique", description: "Maîtriser les fondamentaux du marketing touristique" },
            { label: "Stratégie de communication", description: "Être capable de construire une stratégie de communication à 360°" },
          ]
        },
        {
          unit: "Bloc de compétences 4 – Management",
          items: [
            { label: "Fondamentaux du management", description: "Comprendre les différentes méthodes de management émergentes" },
            { label: "Management interculturel", description: "Analyser les interactions interculturelles dans des situations professionnelles à l'aide de différentes approches conceptuelles" },
            { label: "Management d'équipe", description: "Mobiliser les énergies individuelles des membres de l'équipe" },
            { label: "Management et RSE", description: "Intégrer la RSE dans les méthodes de management" },
          ]
        }
      ]
    },
    {
      id: "year2",
      title: "Année 2 - 602 heures",
      hours: "602 heures",
      content: [
        {
          unit: "Bloc de compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et team building" },
            { label: "Anglais du tourisme", description: "Accueillir et assister les clients étrangers, vendre des produits touristiques français aux clients étrangers, vendre des produits touristiques étrangers aux clients français, accompagner les touristes étrangers, suivre et fidéliser les clients étrangers" },
            { label: "Français", description: "Comprendre l'essentiel de textes écrits au quotidien : emails, brochures, articles, critiques de films ; capacité à rédiger des textes simples et cohérents sur des sujets familiers (niveau intermédiaire B1)" },
            { label: "Culture française", description: "Connaissance et maîtrise de la culture française" },
            { label: "Devoirs surveillés et examens blancs", description: "Simulation d'examen" },
          ]
        },
        {
          unit: "Bloc de compétences 2 – Culture touristique",
          items: [
            { label: "Conception de produits touristiques", description: "Maîtriser les concepts de la phase d'analyse et de mise en œuvre jusqu'à la commercialisation" },
            { label: "Panorama du tourisme mondial", description: "Comprendre les spécificités et les tendances des différents types de tourisme, connaître les principales destinations touristiques dans le monde" },
            { label: "Amadeus", description: "Maîtriser le fonctionnement du GDS Amadeus (Global Distribution Systems), le système de réservation de l'écosystème aérien et ferroviaire" },
            { label: "Gestion de l'information touristique", description: "Maîtriser les principaux outils et logiciels de collecte, de traitement et de publication de l'information touristique" },
          ]
        },
        {
          unit: "Bloc de compétences 3 – Expérience utilisateur",
          items: [
            { label: "Environnement économique et juridique", description: "Comprendre les bases juridiques de la gestion d'une entreprise" },
            { label: "Création de site e-commerce et éco-conception web [CMS]", description: "Être capable de créer un site e-commerce" },
            { label: "Gestion d'événements", description: "Organiser un événement éco-responsable" },
            { label: "Réseaux sociaux", description: "Être capable d'animer une campagne sur les réseaux sociaux" },
          ]
        },
        {
          unit: "Bloc de compétences 4 – Management",
          items: [
            { label: "Gérer une équipe de vente", description: "Connaître les règles du management" },
            { label: "Management interculturel", description: "Analyser les interactions interculturelles dans des situations professionnelles à l'aide de différentes approches conceptuelles" },
            { label: "Prise de parole en public", description: "Être capable de créer un discours engageant" },
            { label: "Négociation commerciale", description: "Comprendre les bases de la négociation commerciale (jeux de rôle)" },
          ]
        }
      ]
    },
    {
      id: "year3",
      title: "Année 3 - 602 heures",
      hours: "602 hours",
      content: [
        {
          unit: "Bloc de compétences 1 – Compétences transversales",
          items: [
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et team building" },
            { label: "Anglais du tourisme", description: "Accueillir et assister les clients étrangers, vendre des produits touristiques français aux clients étrangers, vendre des produits touristiques étrangers aux clients français, accompagner les touristes étrangers, suivre et fidéliser les clients étrangers" },
            { label: "Français", description: "Comprendre des textes rédigés en langage courant : e-mails, brochures, articles, critiques de films ; capacité à rédiger des textes connectés plus complexes sur des sujets familiers (niveau intermédiaire B2)" },
            { label: "Culture française", description: "Connaissance et maîtrise de la culture française" },
            { label: "Devoirs surveillés et examens blancs", description: "Simulation d'examen" },
          ]
        },
        {
          unit: "Bloc de compétences 2 – Commerce et économie",
          items: [
            { label: "Gestion de projet touristique", description: "Comprendre la gestion de projet" },
            { label: "Gestion financière", description: "Analyser la performance comptable d'une entreprise" },
            { label: "Marketing stratégique et analytique", description: "Choisir une stratégie marketing dans le secteur du tourisme et fixer des objectifs" },
            { label: "Plan marketing", description: "Planifier un plan de communication digitale dans le secteur du tourisme" },
          ]
        },
        {
          unit: "Bloc de compétences 3 – Expérience utilisateur",
          items: [
            { label: "Relations d'affaires", description: "Établir des relations de qualité pour fidéliser la clientèle sur le long terme" },
            { label: "Tourisme local et gestion d'événements", description: "Comprendre les principes du tourisme local et savoir monter un projet" },
            { label: "Aménagement du territoire", description: "Réaliser un diagnostic territorial, concevoir un projet territorial prenant en compte le développement durable et la RSE" },
            { label: "Stratégie locale", description: "Acquérir les connaissances fondamentales du patrimoine culturel, viticole et touristique aux niveaux régional, départemental et local ; identifier les produits locaux et les valoriser" },
          ]
        },
        {
          unit: "Bloc de compétences 4 – Management",
          items: [
            { label: "Fondamentaux du management", description: "Comprendre les différentes méthodes de management émergentes" },
            { label: "Management interculturel", description: "Analyser les interactions interculturelles dans des situations professionnelles à l'aide de différentes approches conceptuelles" },
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
      title: "Prérequis",
      items: [
        "Baccalauréat ou équivalent",
        "Un niveau d'anglais suffisant pour suivre le programme (minimum B2), prouvé par des résultats officiels à un test d'anglais ou équivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE, etc.), sauf pour les locuteurs natifs anglais ou les candidats ayant étudié pendant au moins deux ans dans un programme dispensé en anglais (les candidats doivent fournir des justificatifs).",
        "Bon niveau académique",
        "Si niveau bac : les candidats devront passer les épreuves manquantes en candidat libre lors de la première année"
      ]
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée :",
      nextYearValue: "6 Octobre 2025",
      deferredLabel: "Rentrée décalée :",
      deferredValue: "9 Février 2026"
    },
    processTitle: "Processus d'admission",
    processSteps: [
      {
        title: "Étape 1 : Candidature",
        items: [
          { text: "Téléchargez votre formulaire de candidature." },
          { text: "Envoyez votre candidature complétée par e-mail, en n'oubliant pas d'inclure toutes les pièces jointes requises !" },
          { text: "Frais de dossier : 300 €, non remboursables", isItalic: true }
        ]
      },
      {
        title: "Étape 2 : Sélection",
        items: [
          { text: "Examen de votre dossier et vérification des prérequis pour le programme souhaité : niveau d'études et langues étrangères, expérience professionnelle," },
          { text: "Rendez-vous individuel : entretien de motivation à distance (par vidéo)" },
          { text: "Examen par le comité d'admission : notre équipe examinera votre candidature dans son ensemble" },
          { text: "Réponse sous 48 heures ouvrables : favorable ou défavorable", isItalic: true }
        ]
      },
      {
        title: "Étape 3 : Inscription",
        items: [
          { text: "Signature du contrat d'études" },
          { text: "Accompagnement sur les options de financement et la recherche de stages" }
        ]
      }
    ],
    prices: {
      title: "Frais de scolarité (initial) :",
      initialLabel: "Par an :",
      initialPrice: "12 500 €\nDes bourses sont disponibles. Contactez votre responsable des admissions pour plus de détails.",
      visaNote: "",
      workStudyLabel: "",
      workStudyPrice: "",
      workStudyNote: "",
      seminarLabel: "",
      seminarPrice: "",
      seminarNote: ""
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Épreuves orales et écrites.",
      certificationTitle: "Certification",
      diplomaName: "Responsable de développement touristique territorial (RDTT) – Titre certifié de niveau 6",
      rncpLabel: "RNCP 35706",
      rncpLink: "",
      diplomaCodeLabel: "Code diplôme",
      diplomaCode: "36T33403",
      ministry: "Ministère du travail, du plein emploi et de l'insertion",
      expirationLabel: "Date d'échéance :",
      expirationDate: "08/02/2026",
      certificationNote: "Cette qualification est composée de quatre blocs de compétences appelés « certificats de compétences professionnelles » (CCP). Elle s'obtient par la capitalisation des CCP ou à l'issue d'un parcours de formation.",
      equivalencesTitle: "Équivalences",
      equivalencesItems: [
        "Le CCP « Accompagner le développement marketing d'un territoire » de la certification RDTT est équivalent au CCP « Commercialiser un établissement touristique dans une approche multicanale » de la certification professionnelle « Manager d'établissement touristique ».",
        "Le CCP « Assurer la faisabilité financière d'une action touristique » de la certification RDTT est équivalent au CCP « Assurer la gestion opérationnelle et prévoir les investissements d'un établissement touristique » de la certification professionnelle « Manager d'établissement touristique »."
      ]
    }
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Après l'obtention de ce bachelor international, le monde vous appartiendra et vous aurez d'excellentes opportunités de carrière !",
    categories: [
      {
        jobs: [
          { label: "CHEF(FE) DE RÉCEPTION ET D’HÉBERGEMENT", isDarkRed: false },
          { label: "CONCEPTEUR DE PRODUITS TOURISTIQUES", isDarkRed: true },
          { label: "ANIMATEUR TERRITORIAL", isDarkRed: false },
          { label: "DIRECTEUR DE STATION DE MONTAGNE", isDarkRed: true },
          { label: "RÉCEPTIONNISTE", isDarkRed: true },
          { label: "RESPONSABLE D’AGENCE DE VOYAGES", isDarkRed: false },
          { label: "RESPONSABLE COMMERCIAL", isDarkRed: true },
          { label: "RESPONSABLE MARKETING", isDarkRed: false },
          { label: "RESPONSABLE COMMUNICATION", isDarkRed: false },
          { label: "CHEF DE PROJET PRODUIT", isDarkRed: true },
          { label: "CHEF DE RÉCEPTION", isDarkRed: false },
          { label: "RESPONSABLE DES RELATIONS VISITEURS", isDarkRed: true },
        ]
      }
    ]
  };

  const furtherEducationData = {
    title: "POURSUITE D'ÉTUDES",
    links: [
      { label: "Mastère Business & Tourism", href: "/fr/formations/mastere-business", flag: "UK" as const },
      { label: "Mastère Hospitality Management", href: "/fr/formations/mastere-hospitality", flag: "UK" as const },
      { label: "Mastère Management Stratégique du Tourisme", href: "/fr/formations/mastere-projets", flag: "FR" as const },
      { label: "De manière générale, tous les titres de niveau 7", href: "/fr/formations" }
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
              <p>Ce Bachelor, conçu pour des étudiants ayant des ambitions internationales, les forme aux enjeux du tourisme, à la culture française et à la maîtrise du mix marketing spécifique au secteur.</p>
              <p>Les diplômés obtiennent une qualification professionnelle certifiée de niveau 6 leur permettant d'accéder à divers postes dans l'industrie du tourisme.</p>
              <p>Il est destiné aux étudiants passionnés de voyages, de culture et de commerce, titulaires d'un baccalauréat (ou équivalent) et souhaitant faire carrière dans le tourisme international, ainsi qu'aux étudiants européens et internationaux souhaitant étudier en France dans un environnement d'apprentissage international.</p>
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
