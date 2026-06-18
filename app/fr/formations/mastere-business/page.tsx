"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay, BookOpen, Globe, Handshake } from "lucide-react";

export default function MastereBusinessPageFR() {
  const bannerData = {
    title: "MASTÈRE BUSINESS & TOURISM",
    image: "/assets/Gemini_Generated_Image_hromqqhromqqhrom-e1756710798902.png",
    details: [
      { label: "LANGUE DE LA FORMATION", value: "Anglais" },
      { label: "NIVEAU", value: "7 (bac+5)" },
      { label: "STATUT", value: "étudiant" },
      { label: "RYTHME", value: "initial" },
      { label: "DURÉE", value: "2 ans – 1 204 heures" },
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
            { label: "Français", description: "Apprendre à communiquer afin de répondre à des besoins avancés et concrets (niveau B2)" },
            { label: "Culture française", description: "Connaître et maîtriser la culture française" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Commerce et économie",
          items: [
            { label: "Veille et intelligence économique", description: "Collecte de données, analyse stratégique et utilisation de l'intelligence économique pour prendre des décisions éclairées et sécuriser des avantages concurrentiels" },
            { label: "E-commerce", description: "Appliquer les techniques du commerce en ligne" },
            { label: "CRM & Analyse de données", description: "Mettre en œuvre des stratégies de gestion de la relation client grâce aux outils technologiques et à l'exploitation des données" },
            { label: "Growth Hacking", description: "Utiliser les canaux numériques pour identifier des opportunités de croissance rapide et efficace" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Expérience utilisateur",
          items: [
            { label: "No-code", description: "Créer des sites web interactifs et visuellement attractifs sans avoir à écrire de code" },
            { label: "Transformation digitale et éthique d'entreprise", description: "Comprendre les spécificités du marketing mix d'une structure d'hébergement" },
            { label: "Stratégie d'entreprise", description: "Positionner l'activité de manière compétitive sur son marché tout en optimisant sa performance" },
            { label: "Plan marketing", description: "Être capable d'élaborer une stratégie marketing" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Management et finances",
          items: [
            { label: "Management interculturel", description: "Analyser les interactions interculturelles en situation professionnelle à l'aide de différentes approches conceptuelles" },
            { label: "Management de l'innovation", description: "Comprendre les enjeux de l'innovation" },
            { label: "Gestion financière", description: "Mettre en place des tableaux de bord spécifiques" },
            { label: "Préparation au titre", description: "Comprendre les attentes du certificateur et préparer les dossiers en conformité avec celles-ci" },
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
            { label: "Français", description: "Comprendre l'essentiel des textes écrits dans le langage de tous les jours : mails, brochures, articles, critiques de films ; possibilité d'écrire des textes simples, connectés sur des sujets familiers (niveau B2)" },
            { label: "Culture française", description: "Connaître et maîtriser la culture française" },
            { label: "Devoirs surveillés et examens blancs", description: "Mise en situation d'examens" },
          ]
        },
        {
          unit: "Unité de Compétences 2 – Economie et commerce",
          items: [
            { label: "IA & entreprise", description: "Utiliser l'IA pour soutenir le développement économique des entreprises" },
            { label: "Intelligence économique", description: "Comprendre les enjeux de l'intelligence économique" },
            { label: "Géopolitique", description: "Analyser les enjeux géopolitiques du monde contemporain" },
            { label: "Atelier", description: "Élaborer des réponses concrètes à un besoin client dans un délai imparti, développer l'adaptabilité, la créativité et l'intelligence collective au sein d'une équipe pluridisciplinaire constituée aléatoirement" },
          ]
        },
        {
          unit: "Unité de Compétences 3 – Expérience utilisateur",
          items: [
            { label: "Digital Analytics", description: "Organiser et valoriser les données" },
            { label: "Webmarketing", description: "Optimiser le référencement naturel (SEO) et gérer des campagnes de référencement payant (SEA)" },
            { label: "Communication 360°", description: "Concevoir et piloter un plan de communication dans le secteur du tourisme" },
            { label: "Personal Branding", description: "Créer une image de marque personnelle forte et visible" },
          ]
        },
        {
          unit: "Unité de Compétences 4 – Management",
          items: [
            { label: "Optimisation des méthodes et des processus", description: "Optimiser les outils, méthodes et processus en fonction des résultats intermédiaires, des écarts constatés ou des imprévus rencontrés" },
            { label: "Business plan", description: "Maîtriser les règles d'un business plan" },
            { label: "Tableaux de bord et indicateurs", description: "Définir et mettre en place des indicateurs de gestion et de suivi de projet" },
            { label: "Préparation au titre", description: "Comprendre les attentes du certificateur et préparer les dossiers en conformité avec celles-ci" },
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
        "Bac+3",
        "Un niveau d'anglais suffisant pour permettre de suivre la formation (au minimum B2), justifié par des résultats officiels d'un test d'anglais ou équivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE…), sauf pour les anglophones (langue maternelle anglaise) ou les candidats qui ont étudié au moins 2 ans dans un programme enseigné en anglais (le candidat devra fournir des documents justificatifs)",
        "Bon niveau académique"
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
      initialPrice: "Par an : 14 500 €\nDes bourses sont disponibles, contactez votre chargé d'admissions pour connaître les modalités",
      workStudyLabel: "",
      workStudyPrice: "",
      workStudyNote: "",
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Épreuves écrites et orales selon le référentiel de la FEDE",
      downloadFrameworkLabel: "Télécharger le référentiel",
      certificationTitle: "Certification",
      diplomaName: "Titre de niveau bac +5",
      rncpLabel: "RNCP41997",
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
    intro: "Après ce mastère international, le monde s'ouvre à vous et les débouchés sont intéressants !",
    categories: [
      {
        jobs: [
          { label: "Directeur de communication 360°", isDarkRed: false },
          { label: "Chef de projet webmarketing", isDarkRed: true },
          { label: "Consultant en stratégie de marque", isDarkRed: false },
          { label: "Consultant en organisation", isDarkRed: true },
          { label: "Responsable d'unité opérationnelle", isDarkRed: true },
          { label: "Data Analyst", isDarkRed: false },
          { label: "Responsable de développement commercial", isDarkRed: true },
          { label: "Business Developer international", isDarkRed: false },
          { label: "Chargé d'affaires internationales", isDarkRed: false },
          { label: "Responsable e-commerce", isDarkRed: true },
          { label: "Manager d'équipe", isDarkRed: false },
          { label: "Responsable relation clients", isDarkRed: true },
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
        certificationBadge={bannerData.certificationBadge}
      />

      <CourseDetailLayout 
        sections={sections}
        applyButton={{ label: "Candidater", href: "/fr/candidater" }}
      >
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>Ce Mastère, formulé pour les étudiants visant l&apos;international, les forme aux enjeux du tourisme, à la culture française et à la maîtrise du marketing mix et du management spécifiques au secteur.</p>
              <p>Les diplômés obtiennent un titre professionnel certifié de niveau 7 leur permettant d&apos;accéder à des postes à responsabilités dans l&apos;univers du tourisme.</p>
              <p>Il est fait pour les étudiants passionnés par les voyages, la culture, les responsabilités et les affaires, diplômés d&apos;un Bac+3 (ou équivalent) à la recherche d&apos;une carrière dans le tourisme international ainsi que pour les étudiants européens et internationaux cherchant à étudier en France dans un environnement d&apos;apprentissage international.</p>
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
