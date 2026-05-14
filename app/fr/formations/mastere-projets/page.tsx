"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay } from "lucide-react";

export default function MastereEventPageFR() {
  const bannerData = {
    title: "Mastère Management de Projet Événementiel et Touristique",
    image: "/assets/Gemini_Generated_Image_ae35ae35ae35ae35-scaled.png", // Placeholder
    details: [
      { label: "Langue de la formation", value: "français" },
      { label: "Niveau", value: "7 (bac+5)" },
      { label: "Statut", value: "étudiant, apprenti, demandeur d’emploi et salarié (CPF de transition)" },
      { label: "Rythme", value: "initial ou alternance – 1 semaine en centre de formation/2 semaines en entreprise" },
      { label: "Durée", value: "2 ans – 1 148 heures" },
    ],
    additionalInfo: "Formation accessible par le biais de la VAE",
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
    subtitle: "Forte de plus de 30 ans d'expérience dans la préparation de nombreux diplômes, l'école Grand Sud possède les clés de la réussite pour l'obtention de ce titre de niveau 7.",
    advantages: [
      { icon: CheckCircle2, text: "100% d'expertise touristique depuis 1991", isDarkRed: false },
      { icon: Search, text: "accompagnement dans la recherche d'alternance ou de stage", isDarkRed: true },
      { icon: PenTool, text: "examens blancs pour préparer le diplôme", isDarkRed: false },
      { icon: Users, text: "atelier avec de vrais partenaires et de vraies problématiques", isDarkRed: true },
      { icon: Briefcase, text: "cas d'entreprises réels étudiés en classe", isDarkRed: false },
      { icon: MonitorPlay, text: "intervenants professionnels", isDarkRed: true },
    ]
  };

  const programYears = [
    {
      id: "year1",
      title: "Année 1 - 574 heures",
      hours: "574 heures",
      content: [
        {
          unit: "Développer une offre de produits responsable pour les secteurs de l'événementiel et du tourisme.",
          items: [
            { label: "", description: "Mettre en place un système de veille stratégique en identifiant les axes de recherche prioritaires — notamment concernant l'innovation liée au marché dans l'événementiel et le tourisme, la conformité légale et réglementaire, et le développement durable — et en identifiant des sources fiables et en automatisant la collecte de données (notamment par l'utilisation d'outils d'IA générative), afin de s'assurer de données fiables, à jour et complémentaires sur des sujets ciblés pour une analyse proactive des tendances." },
            { label: "", description: "Analyser l'intelligence marché collectée — y compris les innovations dans l'événementiel et le tourisme, les évolutions réglementaires et normatives, et les comportements et attentes de divers segments de consommateurs — en exploitant des données fiables et pertinentes, afin d'identifier des opportunités d'intégration de nouveaux formats et concepts, d'assurer la conformité légale, éthique et environnementale, et d'aligner l'offre de produits/services avec les exigences des clients, y compris les besoins d'accessibilité et de mobilité des personnes handicapées." },
            { label: "", description: "Analyser la demande d'un client en explorant le contexte et les différentes dimensions de son projet ; mener une évaluation stratégique, territoriale et culturelle de son positionnement sur le marché ; intégrer les facteurs internes (l'offre) et les facteurs environnementaux externes (le marché, les évolutions réglementaires, les pratiques et attentes des consommateurs, etc.) ; et évaluer les menaces et opportunités présentes sur son marché à la lumière des tendances socio-économiques et des sources potentielles de croissance et d'innovation, afin d'identifier ses attentes spécifiques, ses objectifs, ses contraintes et ses valeurs." },
            { label: "", description: "Concevoir une solution produit responsable pour les secteurs de l'événementiel et du tourisme en développant un format, un contenu éditorial et un récit qui répondent aux besoins du client tout en tenant compte de ses contraintes ; et en planifiant l'application de règles et principes respectueux de l'environnement (par ex. accessibilité, recyclage des consommables, gestion des déchets, recours aux fournisseurs locaux, circuits courts, etc.), afin de formuler une proposition parfaitement alignée sur ses ressources, ses aspirations et ses objectifs. Définir le public cible d'une gamme renouvelée de produits événementiels ou touristiques en caractérisant ses motivations clés, ses aspirations et sa capacité économique — sur la base d'analyses de marché et de données clients — sous forme de personas, afin de concevoir une offre adaptée et réactive aux attentes du marché." },
            { label: "", description: "Établir ou valider le cahier des charges des produits événementiels ou touristiques en définissant leurs caractéristiques techniques, tarifaires, de format et de contenu, tout en s'assurant de l'exhaustivité du document, de sa cohérence avec les objectifs stratégiques et de sa qualité globale, afin de garantir un encadrement optimal de la phase opérationnelle et le succès final de l'offre." },
            { label: "", description: "Garantir la qualité de l'offre de produits événementiels ou touristiques en recommandant son alignement avec les normes et/ou labels de qualité pertinents, et en évaluant leur valeur ajoutée et leur pertinence par rapport à la stratégie de l'entreprise, ses valeurs fondamentales et les attentes de la clientèle cible, afin d'améliorer l'attractivité de l'offre et de mettre en valeur les engagements en matière d'inclusion et de développement durable." },
            { label: "", description: "Évaluer la faisabilité et le potentiel commercial d'une offre de produits événementiels ou touristiques en estimant ses coûts de production et de commercialisation — en tenant compte du cahier des charges du produit, du positionnement de l'entreprise sur son marché, de ses objectifs stratégiques et des menaces et opportunités existantes — afin de fournir une base pour la prise de décision concernant son développement." },
          ]
        },
        {
          unit: "Gérer la stratégie d'achat pour les différentes composantes des produits événementiels et touristiques.",
          items: [
            { label: "", description: "Développer une stratégie d'achat pour les biens et services nécessaires à la création de produits événementiels ou touristiques, en basant cette stratégie sur une définition précise des besoins générés par leur production et leur mise en œuvre, et en établissant des critères et des exigences qui équilibrent la qualité, le prix, les délais de livraison et les considérations RSE, afin d'optimiser la sélection d'un portefeuille de partenaires et prestataires de services contribuant à la réalisation de l'offre. Définir les procédures de consultation des fournisseurs potentiels — en tenant compte des obligations légales découlant du contexte du marché — afin de s'assurer d'un panel de propositions suffisamment large pour faciliter un processus d'appel d'offres compétitif." },
            { label: "", description: "Identifier les prestataires de services et fournisseurs capables de répondre aux exigences liées à la production et à la livraison de produits événementiels, touristiques et de voyage, en mettant en œuvre des méthodes de recherche appropriées et en recueillant des informations ciblées à leur sujet, de manière à disposer des données nécessaires à une sélection éclairée et objective." },
            { label: "", description: "Évaluer l'offre de produits et services des fournisseurs et prestataires identifiés en vérifiant leur fiabilité, la capacité de leurs ressources humaines, techniques et financières, et leur conformité avec les normes éthiques et environnementales." },
          ]
        }
      ]
    },
    {
      id: "year2",
      title: "Année 2 - 574 heures",
      hours: "574 heures",
      content: [
        {
          unit: "Piloter le développement d'un portefeuille de produits événementiels et touristiques.",
          items: [
            { label: "", description: "Planifier l'exécution des produits événementiels et touristiques en structurant les actions nécessaires, en définissant les délais et en coordonnant les parties prenantes, afin d'assurer le bon enchaînement et la gestion dans les temps des opérations." },
            { label: "", description: "Estimer le budget d'exécution des produits événementiels et touristiques en évaluant de manière réaliste tous les postes de dépenses et en utilisant un outil de suivi doté d'indicateurs de contrôle, afin d'assurer une maîtrise efficace des coûts." },
            { label: "", description: "Constituer une équipe projet dédiée à la réalisation de produits événementiels et touristiques en identifiant les compétences et profils nécessaires ; dimensionner les ressources humaines tant qualitativement que quantitativement ; définir clairement les rôles, le périmètre d'intervention et les responsabilités de chaque membre de l'équipe ; et établir les conditions d'organisation et d'aménagement nécessaires pour garantir l'inclusion des salariés en situation de handicap, afin de favoriser une structure d'équipe optimale, complémentaire et performante." },
            { label: "", description: "Mettre en place des méthodes de travail et des protocoles de partage d'informations dans un environnement de travail hybride (combinant travail en présentiel et à distance) en définissant les flux d'informations et en intégrant des outils collaboratifs facilitant la mutualisation des informations et des ressources, afin d'optimiser le fonctionnement et l'exécution du projet." },
            { label: "", description: "Superviser les équipes impliquées dans la mise en œuvre opérationnelle des produits événementiels et touristiques en adoptant un style de management favorisant la coopération, l'entraide et l'autonomie des collaborateurs, afin de maintenir la cohésion et la motivation de l'équipe tout en atténuant les risques psychosociaux liés au travail à distance." },
            { label: "", description: "Développer et suivre des outils de gestion pour la mise en œuvre des produits événementiels et touristiques en définissant des indicateurs de contrôle pour suivre l'état d'avancement, afin d'assurer la conformité avec — et l'atteinte de — objectifs fixés en matière de délais, de coûts et de qualité. Gérer le budget de réalisation des produits événementiels et touristiques en surveillant en permanence l'allocation des ressources et, si nécessaire, en procédant à des arbitrages pour faire face aux imprévus, garantissant ainsi la viabilité économique et la rentabilité du projet." },
            { label: "", description: "Vérifier que les conditions de mise en œuvre des produits événementiels et touristiques respectent les normes en matière de logistique, d'accessibilité, de sécurité et de durabilité ; cela implique de s'assurer du respect du cahier des charges défini dans le brief projet, ainsi que de l'ensemble des obligations légales et réglementaires, et d'anticiper les éventuels écarts pour garantir le bon déroulement des opérations." },
          ]
        },
        {
          unit: "Développer la stratégie commerciale d'un portefeuille de produits événementiels et touristiques.",
          items: [
            { label: "", description: "Formuler une stratégie marketing pour une gamme de produits événementiels et touristiques, en s'assurant de son adéquation avec la politique de l'entreprise tout en tenant compte des spécificités du marché ; cela implique de s'appuyer sur des outils analytiques, numériques et financiers, et de mobiliser les parties prenantes internes et externes pour assurer la viabilité et la croissance de l'activité." },
            { label: "", description: "Sélectionner des initiatives spécifiques de développement commercial à mettre en œuvre en évaluant leur faisabilité technique et financière et en estimant leur retour sur investissement ; l'objectif est de structurer un plan d'action budgétisé et planifié pour présentation à la direction générale pour validation." },
            { label: "", description: "Identifier et mobiliser les canaux et leviers clés pour diffuser l'information — à travers les plateformes \"phygitales\" (physiques et numériques) — concernant le portefeuille de produits événementiels, touristiques et de voyage ; cela implique d'évaluer quels canaux sont les plus appropriés et proportionnés compte tenu du public cible et du budget disponible, garantissant ainsi une couverture globale optimisant la réputation du produit et son impact sur le marché." },
            { label: "", description: "Définir la stratégie de communication associée au lancement sur le marché du portefeuille de produits événementiels et touristiques en déterminant les canaux spécifiques, les formats et les types de contenu à utiliser, contribuant ainsi à l'optimisation de son développement commercial. Structurer un système multicanal de recueil des avis clients pour les offres touristiques et événementielles — en définissant les informations spécifiques à recueillir, ainsi que les méthodes et outils associés — afin de suivre en continu les niveaux de satisfaction de la clientèle." },
            { label: "", description: "Évaluer les performances économiques et l'impact des portefeuilles de produits touristiques et événementiels en établissant et en utilisant des indicateurs fiables, objectifs et numérisés, vérifiant ainsi leur rentabilité et l'atteinte des objectifs commerciaux." },
            { label: "", description: "Mettre en œuvre une stratégie tarifaire adaptée — éclairée par l'analyse continue des indicateurs de cycle de vie des produits touristiques et événementiels — afin d'optimiser leur attractivité sur le marché, le volume des ventes et la rentabilité." },
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
        "Bac+3 (ou Bac+4 pour une admission en 2ème année de Mastère)",
        "Niveau de français suffisant pour suivre la formation",
        "Langues : Anglais et une autre langue de votre choix"
      ]
    },
    intakes: {
      periodTitle: "Période d'admission",
      periodText: "Toute l'année",
      intakesTitle: "Rentrées",
      nextYearLabel: "Prochaine rentrée :",
      nextYearValue: "Octobre 2025",
      deferredLabel: "Rentrée décalée :",
      deferredValue: "Février 2026"
    },
    processTitle: "Processus d'admission",
    processSteps: [
      {
        title: "Étape 1 : Candidature",
        items: [
          { text: "Téléchargez le formulaire de candidature." },
          { text: "Envoyez votre dossier complété par email, en pensant à joindre toutes les pièces demandées !" },
          { text: "Il n'y a pas de frais de dossier.", isItalic: true }
        ]
      },
      {
        title: "Étape 2 : Sélection",
        items: [
          { text: "Étude de votre dossier et vérification des prérequis pour le programme souhaité : niveau d'études et langues étrangères, expérience professionnelle," },
          { text: "Entretien individuel : entretien de motivation à l'école ou à distance (visio)" },
          { text: "Examen par le comité d'admission : notre équipe examinera votre candidature dans son intégralité." },
          { text: "Réponse sous 48 heures ouvrées : avis favorable ou défavorable." }
        ]
      },
      {
        title: "Étape 3 : Inscription",
        items: [
          { text: "Validation de votre statut : Étudiant / Demandeur d'emploi / Stagiaire de la formation professionnelle / Salarié." },
          { text: "Accompagnement sur les options de financement et la recherche d'entreprise." }
        ]
      }
    ],
    prices: {
      title: "Tarifs",
      initialLabel: "Tarif initial :",
      initialPrice: "Année 1 : 7 950 €\nAnnée 2 : 7 950 €",
      visaNote: "*Pour les étudiants nécessitant une aide aux visas (première entrée dans l'UE) :\nAnnée 1 : 8 500 €\nAnnée 2 : 8 500 €",
      workStudyLabel: "Tarif en alternance :",
      workStudyPrice: "Année 1 : 8 870 €\nAnnée 2 : 8 870 €",
      workStudyNote: "Dans le cadre de l'alternance, les frais de formation sont pris en charge par l'OPCO. Cela sera discuté avec l'entreprise lors de la signature du contrat.",
      seminarLabel: "Séminaire : \"Le Paysage Touristique en France et en Occitanie\"",
      seminarPrice: "1 050 €",
      seminarNote: "Ce module est obligatoire pour les étudiants hors Union Européenne lors de leur première année en France. Son coût s'ajoute au coût total de la première année du programme choisi."
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Modalités d'évaluation",
      assessmentText: "Épreuves écrites et orales selon les normes FEDE.",
      downloadFrameworkLabel: "Télécharger le référentiel",
      downloadFrameworkHref: "/assets/framework-pdf.pdf",
      certificationTitle: "Certification",
      diplomaName: "Mastère – Titre de niveau bac +5,",
      rncpLabel: "RNCP41997",
      rncpLink: "",
      diplomaCodeLabel: "",
      diplomaCode: "",
      ministry: "",
      expirationLabel: "",
      expirationDate: "",
    }
  };

  const jobsData = {
    title: "DÉBOUCHÉS",
    intro: "Le secteur du tourisme offre de nombreuses opportunités en France et à l'étranger aux titulaires du Mastère en Management Stratégique du Tourisme.",
    categories: [
      {
        jobs: [
          { label: "CHEF DE PROJET ÉVÉNEMENTIEL", isDarkRed: false },
          { label: "EVENT MANAGER", isDarkRed: true },
          { label: "TRAVEL MANAGER", isDarkRed: false },
          { label: "SALES MANAGER", isDarkRed: true },
          { label: "KEY ACCOUNT MANAGER", isDarkRed: true },
          { label: "ACCOUNT MANAGER", isDarkRed: false },
          { label: "CHEF DE PROJET TOURISTIQUE (CDT, CRT)", isDarkRed: true },
          { label: "BUSINESS TRAVEL MANAGER", isDarkRed: false },
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
        additionalInfo={bannerData.additionalInfo}
        logos={bannerData.logos}
      />
      
      <CourseDetailLayout 
        sections={sections}
        applyButton={{ label: "Candidater", href: "/fr/candidater" }}
      >
        {/* Description Section */}
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>Le Mastère est une formation de niveau bac+5 (titre RNCP de niveau 7) qui apporte un socle solide et directement opérationnel sur le marché du travail. Ce programme prépare les étudiants à comprendre des besoins spécifiques, à proposer des solutions sur mesure et à piloter efficacement des projets de leur conception à leur réalisation. Il privilégie une approche très pratique, axée sur les capacités d'analyse, d'organisation et de gestion de projet, tout en développant des qualités essentielles telles que la communication, l'autonomie et le travail en équipe. Grâce à des méthodes d'apprentissage fondées sur des cas réels et des jeux de rôle, les participants acquièrent des réflexes professionnels rapidement mobilisables. À l'issue de la formation, ils sont capables d'évoluer vers des postes à responsabilité dans des environnements variés, avec une certification qui valorise leur profil professionnel et facilite leur insertion ou leur évolution de carrière.</p>
            </div>
          </div>
          <CourseAdvantages {...advantagesData} />
        </section>

        {/* Program Section */}
        <section id="programm" className="scroll-mt-32">
          <CourseProgram 
            title="PROGRAMME"
            years={programYears}
            downloadButton={{ label: "Télécharger le programme pédagogique", href: "/assets/program-pdf.pdf" }}
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

      </CourseDetailLayout>
    </main>
  );
}
