"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay, BookOpen, Globe, Handshake, Plus } from "lucide-react";

export default function MastereHospitalityPageFR() {
  const bannerData = {
    title: "MASTÈRE HOSPITALITY MANAGEMENT",
    image: "/assets/Gemini_Generated_Image_euyvcheuyvcheuyv-scaled-e1756721064422.png",
    details: [
      { label: "LANGUE DE LA FORMATION", value: "Anglais" },
      { label: "NIVEAU", value: "7 (bac+5)" },
      { label: "STATUT", value: "étudiant" },
      { label: "RYTHME", value: "initial" },
      { label: "DURÉE", value: "2 ans – 1 204 heures" },
    ],
    logos: ["/assets/logo-france-competences.png"]
  };

  const sections = [
    { id: "description", label: "DESCRIPTION" },
    { id: "programm", label: "PROGRAMME" },
    { id: "admissions", label: "ADMISSIONS" },
    { id: "validation", label: "VALIDATION" },
    { id: "jobs", label: "DÉBOUCHÉS" },
  ];

  const advantagesData = {
    title: "Les atouts de Grand Sud",
    subtitle: "Avec près de 35 ans d'expérience dans l'éducation, l'école Grand Sud connaît les clés du succès pour offrir à ses étudiants ce dont ils ont besoin pour réussir.",
    advantages: [
      { icon: CheckCircle2, text: "100% d'expertise touristique depuis 1991", isDarkRed: false },
      { icon: Search, text: "accompagnement dans la recherche de stage", isDarkRed: true },
      { icon: PenTool, text: "Deux sessions d'examens blancs par an / jurys de professionnels", isDarkRed: false },
      { icon: Users, text: "atelier avec de vrais partenaires et de vrais enjeux", isDarkRed: true },
      { icon: Briefcase, text: "cas d'entreprises réels étudiés en classe", isDarkRed: false },
      { icon: MonitorPlay, text: "intervenants professionnels", isDarkRed: true },
      { icon: BookOpen, text: "un programme adapté aux besoins des entreprises", isDarkRed: false },
      { icon: Globe, text: "un programme tourné vers l'international", isDarkRed: true },
      { icon: Handshake, text: "des étudiants d'horizons divers, vecteurs de richesse culturelle", isDarkRed: false },
    ],
    bottomHighlight: "Un stage garanti dans l'industrie de la restauration, d'une durée de 3 à 6 mois, en France",
    bottomHighlightIcon: Plus
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
            { label: "Welcome Days", description: "Séminaire d'intégration de rentrée et team building" },
            { label: "Anglais du tourisme", description: "Accueillir et accompagner des clients étrangers, vendre des produits touristiques français à des clients étrangers, vendre des produits touristiques étrangers à des clients français, accompagner des touristes étrangers, suivre et fidéliser la clientèle étrangère" },
            { label: "Français", description: "Apprendre à communiquer afin de répondre à des besoins avancés (niveau B2)" },
            { label: "Culture française", description: "Comprendre et maîtriser la culture française" }
          ]
        },
        {
          unit: "Bloc de compétences 2 – Commerce et économie",
          items: [
            { label: "Veille commerciale et veille économique", description: "Collecte de données, analyse stratégique, et utilisation de l'intelligence économique pour prendre des décisions éclairées et s'assurer des avantages concurrentiels" },
            { label: "Vente de produits de luxe", description: "Comprendre les spécificités et les techniques de vente dans le secteur du luxe" },
            { label: "CRM & Analyse de données", description: "Mettre en œuvre des stratégies de gestion de la relation client utilisant des outils technologiques et l'exploitation des données" },
            { label: "E-commerce", description: "Comprendre les fondamentaux du e-commerce" }
          ]
        },
        {
          unit: "Bloc de compétences 3 – Expérience utilisateur",
          items: [
            { label: "Gestion de la relation humain-digital et valeur de la marque", description: "Comprendre l'impact du numérique sur les relations humaines et la perception de la marque afin de développer des stratégies de gestion de l'expérience client à l'ère du numérique" },
            { label: "Transformation digitale et éthique d'entreprise", description: "Articuler les enjeux technologiques avec les responsabilités éthiques des entreprises dans un environnement numérique" },
            { label: "Investissements touristiques et hôteliers & développement de projets internationaux", description: "Comprendre la planification et la mise en œuvre de projets d'investissement dans le secteur du tourisme et de l'hôtellerie à l'échelle internationale" },
            { label: "Innovation dans l'industrie hôtelière", description: "Explorer la dynamique de l'innovation dans le secteur hôtelier en lien avec les évolutions technologiques, les attentes des clients et les nouveaux modèles économiques" }
          ]
        },
        {
          unit: "Bloc de compétences 4 – Management et finance",
          items: [
            { label: "Management interculturel", description: "Analyser les interactions interculturelles en situation professionnelle à travers différentes approches conceptuelles" },
            { label: "Management de l'innovation", description: "Comprendre les enjeux de l'innovation" },
            { label: "Gestion financière", description: "Mettre en place des tableaux de bord spécifiques" },
            { label: "Préparation à la certification", description: "Comprendre les attentes du certificateur et préparer les dossiers en conséquence" }
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
            { label: "Anglais du tourisme", description: "Accueillir et accompagner des clients étrangers, vendre des produits touristiques français à des clients étrangers, vendre des produits touristiques étrangers à des clients français, accompagner des touristes étrangers, suivre et fidéliser la clientèle étrangère" },
            { label: "Français", description: "Comprendre les points essentiels d'un texte écrit en langage courant : courriels, brochures, articles, critiques de films ; capacité à écrire des textes simples et connectés sur des sujets familiers (niveau B2 avancé)" },
            { label: "Culture française", description: "Connaissance et maîtrise de la culture française" }
          ]
        },
        {
          unit: "Bloc de compétences 2 – Économie et commerce",
          items: [
            { label: "IA & business", description: "Utiliser l'IA pour soutenir le développement économique des entreprises" },
            { label: "Intelligence économique", description: "Comprendre les enjeux de l'intelligence économique" },
            { label: "Géopolitique", description: "Analyser les enjeux géopolitiques du monde contemporain" },
            { label: "Workshop", description: "Développer des réponses concrètes à un besoin client dans un laps de temps imparti, développer l'adaptabilité, la créativité et l'intelligence collective au sein d'une équipe pluridisciplinaire formée aléatoirement" }
          ]
        },
        {
          unit: "Bloc de compétences 3 – Expérience utilisateur",
          items: [
            { label: "Digital Analytics", description: "Organiser et exploiter les données" },
            { label: "Comptabilité de gestion en hôtellerie", description: "Utiliser les outils comptables pour la prise de décision managériale dans le secteur de l'hôtellerie-restauration" },
            { label: "Lean Management en hôtellerie", description: "Appliquer les principes du Lean Management pour améliorer l'efficacité, la qualité de service et la rentabilité dans le secteur de l'hôtellerie" },
            { label: "Personal Branding", description: "Créer une image de marque personnelle forte et visible" }
          ]
        },
        {
          unit: "Bloc de compétences 4 – Management",
          items: [
            { label: "Optimisation des méthodes et processus", description: "Optimiser les outils, méthodes et processus en fonction de résultats intermédiaires, d'écarts identifiés ou d'événements imprévus" },
            { label: "Business plan", description: "Maîtriser les règles du business plan" },
            { label: "Tableaux de bord et indicateurs", description: "Définir et mettre en place des indicateurs de pilotage et de suivi de projet" },
            { label: "Préparation à la certification", description: "Comprendre les attentes du certificateur et préparer les dossiers en conséquence" }
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
        "Niveau Bac+3 / Bachelor",
        "Un niveau d'anglais suffisant pour permettre de suivre la formation (minimum B2), justifié par des résultats officiels à un test d'anglais ou équivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE, etc.), sauf pour les anglophones natifs ou les candidats ayant étudié pendant au moins deux ans dans un programme dispensé en anglais (les candidats devront fournir des justificatifs).",
        "Bon niveau académique"
      ]
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée :",
      nextYearValue: "6 octobre 2025",
      deferredLabel: "Rentrée décalée :",
      deferredValue: "9 février 2026"
    },
    processTitle: "Conditions d'admission",
    processSteps: [
      {
        title: "Étape 1 : Candidature",
        items: [
          { text: "Téléchargez votre dossier de candidature.", isLink: true, linkText: "Téléchargez votre dossier de candidature." },
          { text: "Envoyez votre dossier complété par email, en pensant à joindre toutes les pièces annexes demandées !" },
          { text: "Frais de dossier : 300 €, non remboursables", isItalic: true }
        ]
      },
      {
        title: "Étape 2 : Sélection",
        items: [
          { text: "Étude de votre dossier et vérification des prérequis de la formation souhaitée : niveau d'études et langues étrangères, expérience professionnelle," },
          { text: "Rendez-vous individuel : entretien à distance (en visioconférence)" },
          { text: "Commission d'admission : notre équipe étudiera votre candidature dans son intégralité" },
          { text: "Réponse sous 48h ouvrées : favorable ou défavorable", isItalic: true }
        ]
      },
      {
        title: "Étape 3 : Inscription",
        items: [
          { text: "Signature du contrat d'études" },
          { text: "Assistance pour les options de financement et la recherche de stage" }
        ]
      }
    ],
    prices: {
      title: "Tarif initial :",
      initialLabel: "Par an :",
      initialPrice: "14 500 €\nDes bourses sont disponibles. Contactez votre chargé d'admissions pour plus de détails.",
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
      assessmentTitle: "Méthodes d'évaluation",
      assessmentText: "Épreuves écrites et orales selon le processus FEDE.",
      certificationTitle: "Certification",
      diplomaName: "",
      rncpLabel: "Mastère Degree – Titre de niveau bac +5, RNCP41997",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/41997/",
      diplomaCodeLabel: "",
      diplomaCode: "",
      ministry: "",
      expirationLabel: "",
      expirationDate: "",
    }
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Une fois ce mastère international en poche, le monde vous appartiendra et vous pourrez accéder à de belles opportunités de carrière !",
    categories: [
      {
        jobs: [
          { label: "DIRECTEUR DE L'EXPÉRIENCE CLIENT", isDarkRed: false },
          { label: "CONSULTANT EN STRATÉGIE HÔTELIÈRE", isDarkRed: true },
          { label: "COORDINATEUR RÉGIONAL", isDarkRed: false },
          { label: "REVENUE MANAGER", isDarkRed: true },
          
          { label: "MANAGER EN MARKETING DIGITAL", isDarkRed: true },
          { label: "CHEF DE PROJET TRANSFORMATION DIGITALE", isDarkRed: false },
          { label: "DIRECTEUR OPÉRATIONNEL D'UN HÔTEL OU D'UN RESORT", isDarkRed: true },
          { label: "CONSULTANT EN BUSINESS INTELLIGENCE", isDarkRed: false },
          
          { label: "DIRECTEUR DE LA COMMUNICATION ET DE LA MARQUE", isDarkRed: false },
          { label: "DIRECTEUR DES RELATIONS INTERNATIONALES", isDarkRed: true },
          { label: "CONTRÔLEUR DE GESTION HÔTELIÈRE", isDarkRed: false },
          { label: "BUSINESS DEVELOPER", isDarkRed: true },
        ]
      }
    ]
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
        applyButton={{ label: "Candidater", href: "/fr/candidature" }}
      >
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>Ce Mastère, destiné aux étudiants ayant des ambitions internationales, les forme aux enjeux du tourisme, de la culture française, et aux spécificités de l'hôtellerie et de l'hébergement.</p>
              <p>Les diplômés obtiennent une qualification professionnelle certifiée de niveau 7 leur permettant d'accéder à des postes à responsabilités dans l'industrie hôtelière.</p>
              <p>Il est destiné aux étudiants passionnés par les voyages, la culture, les responsabilités et la relation client, titulaires d'un baccalauréat (ou équivalent) et recherchant une carrière dans le tourisme international, ainsi qu'aux étudiants européens et internationaux cherchant à étudier en France dans un environnement d'apprentissage international.</p>
            </div>
          </div>
          <CourseAdvantages {...advantagesData} />
        </section>

        <section id="programm" className="scroll-mt-32">
          <CourseProgram 
            title="PROGRAMME"
            years={programYears}
          />
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
