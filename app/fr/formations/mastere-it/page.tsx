"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay, BookOpen, Globe, Handshake } from "lucide-react";

export default function MastereITPageFR() {
  const bannerData = {
    title: "MASTÈRE IT & TOURISM",
    image: "/assets/Gemini_Generated_Image_o2x5nlo2x5nlo2x5-scaled-e1756724790741.png",
    details: [
      { label: "LANGUE DE LA FORMATION", value: "anglais" },
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
    ],
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
            { label: "Anglais touristique", description: "Maîtriser le vocabulaire du tourisme" },
            { label: "Langue étrangère française", description: "Niveau avancé B2 ; produire des rapports et textes argumentatifs pour perfectionner l'expression écrite" },
            { label: "Culture française", description: "Connaître et maîtriser la culture française" },
            { label: "Journées d'accueil", description: "Créer du lien et l'esprit Grand Sud Formation" },
          ],
        },
        {
          unit: "Unité de Compétences 2 – Commerce et économie",
          items: [
            { label: "IA & entreprise", description: "Utiliser l'IA pour soutenir le développement économique des entreprises" },
            { label: "Intelligence économique", description: "Comprendre les enjeux de l'intelligence économique" },
            { label: "Géopolitique", description: "Analyser les enjeux géopolitiques du monde contemporain" },
            { label: "Atelier", description: "Élaborer des réponses concrètes à un besoin client dans un délai imparti, développer l'adaptabilité, la créativité et l'intelligence collective au sein d'une équipe pluridisciplinaire constituée aléatoirement" },
          ],
        },
        {
          unit: "Unité de Compétences 3 – Développement et Application",
          items: [
            { label: "Gestion des coûts d'un projet informatique", description: "Comprendre les pratiques Agile et le développement incrémental" },
            { label: "Introduction à la blockchain", description: "Comprendre les principaux principes de fonctionnement d'une blockchain" },
            { label: "Gestion de projet", description: "Maîtriser les technologies pour créer un site web réactif" },
            { label: "Méthodes Agile", description: "Comprendre les pratiques Agile" },
          ],
        },
        {
          unit: "Unité de Compétences 4 – Développement et sécurisation",
          items: [
            { label: "Algorithmes avancés", description: "Comprendre les algorithmes avancés" },
            { label: "Framework web avancé", description: "Concevoir, développer et maintenir des sites web et applications web performants" },
            { label: "Programmation orientée objet", description: "Faciliter l'écriture et la maintenance du code" },
            { label: "Pentest & Cybersécurité", description: "Comprendre et sécuriser les vulnérabilités d'une infrastructure grâce à la maîtrise des techniques avancées de Pentest" },
          ],
        },
      ],
    },
    {
      id: "year2",
      title: "Année 2",
      hours: "602 heures",
      content: [
        {
          unit: "Unité de Compétences 1 – Compétences transversales",
          items: [
            { label: "Anglais touristique", description: "Maîtriser le vocabulaire du tourisme" },
            { label: "Langue étrangère française", description: "Niveau avancé B3 ; produire des rapports et textes argumentatifs pour perfectionner l'expression écrite" },
            { label: "Culture française", description: "Connaître et maîtriser la culture française" },
            { label: "Welcome days", description: "Créer du lien et l'esprit Grand Sud Formation" },
          ],
        },
        {
          unit: "Unité de Compétences 2 – Economie et commerce",
          items: [
            { label: "IA & entreprise", description: "Utiliser l'IA pour soutenir le développement économique des entreprises" },
            { label: "Données & Intelligence économique", description: "Créer, gérer et interroger des bases de données relationnelles" },
            { label: "Management multiculturel", description: "Comprendre les mécanismes du management interculturel et acquérir la culture sociale et professionnelle" },
            { label: "Atelier", description: "Élaborer des réponses concrètes à un besoin client dans un délai imparti, développer l'adaptabilité, la créativité et l'intelligence collective au sein d'une équipe pluridisciplinaire constituée aléatoirement" },
          ],
        },
        {
          unit: "Unité de Compétences 3 – Outils",
          items: [
            { label: "Green IT", description: "Identifier les enjeux environnementaux et sociaux du numérique" },
            { label: "DevOps", description: "Script en Python pour automatiser les tâches de livraison et d'administration" },
            { label: "Gestion de projet", description: "Identifier les outils et développer ses compétences interpersonnelles pour gérer un projet" },
            { label: "Préparation au titre", description: "Comprendre les attentes du certificateur et préparer les dossiers en conformité avec celles-ci" },
          ],
        },
        {
          unit: "Unité de Compétences 4 – Développement et sécurisation",
          items: [
            { label: "IA", description: "Mettre l'IA au service de votre projet de développement informatique" },
            { label: "Machine Learning", description: "Positionner le Machine Learning dans la chaîne de traitement des données" },
            { label: "Chatbots et assistants virtuels", description: "Apprendre à concevoir des chatbots avancés en utilisant le traitement du langage naturel (NLP) et des techniques de Machine Learning" },
            { label: "Cloud computing avancé", description: "Garantir la performance, la sécurité et la disponibilité des services Cloud" },
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
        "Bac+3",
        "Un niveau d'anglais suffisant pour permettre de suivre la formation (au minimum B2), justifié par des résultats officiels d'un test d'anglais ou équivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE…), sauf pour les anglophones (langue maternelle anglaise) ou les candidats qui ont étudié au moins 2 ans dans un programme enseigné en anglais (le candidat devra fournir des documents justificatifs)",
        "Bon niveau académique",
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
          { text: "Etude de votre dossier de candidature et vérification des pré-requis selon la formation souhaitée : niveau d'études et langues étrangères, expérience professionnelle," },
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
    },
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Après ce mastère international, le monde s'ouvre à vous et les débouchés sont intéressants !",
    categories: [
      {
        jobs: [
          { label: "Responsable innovation et transformation digitale", isDarkRed: false },
          { label: "Data Analyst / Business Intelligence Analyst", isDarkRed: true },
          { label: "Chef de projet IT / Digital Project Manager", isDarkRed: false },
          { label: "Consultant en intelligence économique et veille stratégique", isDarkRed: true },
          { label: "Expert en IA et Machine Learning appliqué à l'hôtellerie", isDarkRed: true },
          { label: "Responsable DevOps / Ingénieur automatisation", isDarkRed: false },
          { label: "Cloud Architect / Ingénieur Cloud", isDarkRed: true },
          { label: "Consultant en management interculturel et relations internationales", isDarkRed: false },
          { label: "Responsable Green IT / Responsable RSE digitale", isDarkRed: false },
          { label: "Content & Branding Manager", isDarkRed: true },
          { label: "Analyste en cybersécurité et protection des données", isDarkRed: false },
          { label: "Responsable IT", isDarkRed: true },
        ],
      },
    ],
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
              <p>
                Ce Mastère, formulé pour les étudiants visant l&apos;international, les forme aux enjeux des systèmes informatiques dans le tourisme, au fonctionnement du secteur et à la culture française.
              </p>
              <p>
                Les diplômés obtiennent un titre professionnel certifié de niveau 7 leur permettant d&apos;accéder à des postes à responsabilités dans les domaines informatiques du tourisme.
              </p>
              <p>
                Il est fait pour les étudiants passionnés par les voyages, la culture, les responsabilités et le développement, diplômés d&apos;un Bac+3 (ou équivalent) à la recherche d&apos;une carrière IT dans le tourisme international ainsi que pour les étudiants européens et internationaux cherchant à étudier en France dans un environnement d&apos;apprentissage international.
              </p>
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
