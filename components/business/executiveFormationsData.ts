export type ProgrammeItem = { subtitle: string; content: string };

export type ExecutiveFormation = {
  id: string;
  title: string;
  objectifs: string[];
  objectifsIntro?: string;
  objectifsIntroExtra?: string;
  preRequis: string | string[];
  programme: ProgrammeItem[];
};

export const executiveFormations: ExecutiveFormation[] = [
  {
    id: "management-basics",
    title: "Les fondamentaux du management",
    objectifs: [
      "Acquérir les outils de base du manager",
      "Adopter la posture adéquate dans les différents temps forts de mon quotidien de manager",
      "Prendre du recul et ajuster mes pratiques pour s'assurer d'une efficacité dans la relation managériale et dans ma communication interpersonnelle",
    ],
    preRequis: "Aucun",
    programme: [
      {
        subtitle: "Prendre conscience de son rôle de manager :",
        content: "les attentes et les enjeux de l'entreprise et de l'équipe envers le manager, les savoir-faire et savoir-être du manager, auto-évaluation sur la capacité à tenir le rôle de manager",
      },
      {
        subtitle: "Adopter le bon style de management selon la situation :",
        content: "identifier l'incidence de votre personnalité sur votre style de management, découvrir et s'adapter aux différents profils de vos collaborateurs, fédérer son équipe par des rituels collectifs, poser les bases d'une relation basée sur la confiance, fixer et faire vivre les règles du jeu de l'équipe, préparer et animer une réunion",
      },
      {
        subtitle: "Actionner les leviers de motivation de mes collaborateurs :",
        content: "comprendre les leviers de motivation de la performance, préparer et mener des entretiens de délégation efficaces et motivants, valoriser et encourager vos collaborateurs, recadrer un collaborateur",
      },
    ],
  },
  {
    id: "professional-relations",
    title: "Optimiser ses relations professionnelles",
    objectifsIntro: "Parce qu'une connaissance de soi-même, de ses qualités, défauts et de son fonctionnement personnel permet de gagner en efficience et de mieux interagir avec les autres en milieu professionnel",
    objectifsIntroExtra: "Grand Sud Formation propose une formation de deux jours centrée sur des outils et comportements qui permettent de mieux interagir dans un contexte professionnel. Cette formation permet d'acquérir de premiers outils essentiels et pratiques qui permettent de gagner en assurance et d'optimiser ses relations professionnelles.",
    objectifs: [
      "Adapter ses comportements aux situations professionnelles",
      "Développer des relations professionnelles, harmonieuses et efficaces",
      "Améliorer l'efficacité de son relationnel",
      "Savoir gérer son stress",
    ],
    preRequis: "Aucun",
    programme: [
      {
        subtitle: "Appréhender les règles de l'assertivité :",
        content: "analyser ses qualités et ses limites comportementales, changer son système de réactions spontanées, développer et renforcer sa confiance en soi, gérer les critiques",
      },
      {
        subtitle: "Comprendre les mécanismes de l'intelligence émotionnelle :",
        content: "identifier les composantes de l'intelligence émotionnelle, décrypter le langage des émotions dans ses relations professionnelles, exprimer son émotion de manière constructive avec la méthode DESC",
      },
      {
        subtitle: "Maitriser les bases de l'écoute active :",
        content: "comprendre les fondements de l'écoute active, créer un climat de confiance grâce à l'écoute de l'autre, ajuster son comportement verbal et non-verbal, optimiser son efficacité relationnelle",
      },
      {
        subtitle: "Découvrir la « théorie FIRO » :",
        content: "comprendre la méthodologie FIRO, utiliser le FIRO dans un contexte professionnel, tenir compte de la compatibilité des besoins psychologiques",
      },
      {
        subtitle: "Savoir gérer son stress :",
        content: "définir le stress, s'approprier le mécanisme pensée émotion action, réguler et utiliser ses émotions, nourrir les émotions positives",
      },
    ],
  },
  {
    id: "leadership",
    title: "Construire et développer son leadership",
    objectifs: [
      "Adopter une posture de leader pour mener son projet",
      "Faire adhérer en communiquant efficacement",
      "Décliner son projet en actions opérationnelles",
      "Développer son influence personnelle",
    ],
    preRequis: "Exercer des fonctions de manager au sein d'une entreprise, association, etc.",
    programme: [
      {
        subtitle: "Développer ses qualités de leader :",
        content: "quelles sont les bonnes pratiques des leaders ? Qu'apporte le leadership à la pratique managériale ? Identifier ses talents de leader, mettre en cohérence son système de valeurs avec son propre style de leadership",
      },
      {
        subtitle: "Construire un projet d'équipe et l'incarner :",
        content: "construire son projet de leader pour son équipe et son organisation, formaliser son projet",
      },
      {
        subtitle: "Communiquer sur son projet en leader :",
        content: "les clés pour réussir à bien communiquer auprès de son équipe, s'entraîner à des techniques simples de communication dynamique, développer son impact personnel et son charisme",
      },
      {
        subtitle: "Prouver son leadership grâce à des projets réussis :",
        content: "analyser et évaluer les opportunités du contexte, piloter son projet avec efficacité et succès, s'appuyer sur les ressources existantes et optimiser la mise en œuvre avec les parties prenantes",
      },
    ],
  },
  {
    id: "delegation",
    title: "Déléguer et responsabiliser ses équipes",
    objectifs: [
      "Intégrer les techniques clefs de délégation et responsabilisation",
      "Maîtriser la fixation d'objectifs et les latitudes de délégation",
      "Assurer un suivi, développer les compétences et coacher pour mieux déléguer",
    ],
    preRequis: "Exercer ses fonctions de manager au sein d'une équipe d'au moins 2 collaborateurs",
    programme: [
      {
        subtitle: "La délégation : instrument de performance individuelle et collective :",
        content: "délégation et responsabilisation : les grands principes, les freins personnels à la délégation, la dynamique de délégation",
      },
      {
        subtitle: "Les points clefs d'une délégation réussie :",
        content: "définir quoi et à qui déléguer, définir les étapes et le suivi, communiquer et renforcer l'adhésion",
      },
      {
        subtitle: "Evaluer, contrôler et développer les compétences :",
        content: "comment contrôler et analyser, rechercher l'amélioration continue, développer les compétences, rendre autonome et responsable",
      },
    ],
  },
  {
    id: "performance",
    title: "Manager la performance de ses équipes",
    objectifs: [
      "Mobiliser son équipe autour d'objectifs clairs et partagés",
      "Planifier et organiser le travail de son équipe",
      "Renforcer son leadership et sa capacité à fédérer pour accroître la performance",
      "Intégrer les différents modes de communication interpersonnelles dans son management",
      "Développer les compétences individuelles et la performance collective",
    ],
    preRequis: "Exercer des fonctions de manager au sein d'une entreprise, association, etc.",
    programme: [
      {
        subtitle: "Fixer le cap : définir les objectifs et le plan de route :",
        content: "identifier les facteurs indispensables à la performance collective, fixer des objectifs opérationnels pour soi et son équipe : équité & équilibre, finalité, objectifs, leviers d'action, indicateurs de pilotage, rôles et responsabilités, définir des critères d'évaluation mesurables et les communiquer",
      },
      {
        subtitle: "Piloter, organiser le travail de son équipe :",
        content: "analyser le fonctionnement de son équipe, donner le cadre, décliner les objectifs stratégiques en objectifs opérationnels, déléguer et responsabiliser",
      },
      {
        subtitle: "Animer son équipe : renforcer la performance collective :",
        content: "comprendre les leviers individuels et collectifs de motivation pour développer la synergie de l'équipe, mettre en place une stratégie relationnelle pour réduire les facteurs démotivants, « Jouer collectif » : renforcer la cohésion d'équipe et le sentiment d'appartenance par un défi commun, faire respecter les règles et partager des bonnes pratiques de travail",
      },
      {
        subtitle: "Optimiser la performance de l'équipe par l'amélioration continue :",
        content: "analyser l'activité de son équipe pour faire ressortir les freins et les difficultés qui nuisent à la performance, réagir face à la sous performance : le triptyque « voir, décider et agir ensemble », savoir réévaluer la performance au regard des moyens, concilier efficacité de l'équipe et bien-être au travail",
      },
    ],
  },
  {
    id: "project-team",
    title: "Manager une équipe projet",
    objectifs: [
      "Construire et impliquer son équipe projet",
      "Fédérer des ressources transversales",
      "Instaurer une dynamique de performance",
      "Développer son agilité",
      "Accompagner le changement",
    ],
    preRequis: [
      "Exercer des fonctions de manager au sein d'une entreprise, association, etc.",
      "Être dans une organisation qui travaille en mode projet ou qui veut instaurer le mode projet.",
    ],
    programme: [
      {
        subtitle: "Construire et impliquer son équipe projet :",
        content: "le chef de projet et l'écosystème, construction de l'équipe, la gestion d'un projet stratégique, le chef de projet et son équipe, identité et valeurs, les rituels relationnels de suivi",
      },
      {
        subtitle: "Fédérer des ressources transversales :",
        content: "accompagner les contributeurs, prise en compte des spécificités, l'équilibre relation/objectif, formaliser l'esprit d'équipe, un cadre et des règles, les conditions du « faire ensemble »",
      },
      {
        subtitle: "Instaurer une dynamique de performance :",
        content: "diagnostiquer son équipe, les indicateurs de fonctionnement, les rôles et les étapes de la confiance, manager des contributeurs à distance, les incontournables de l'efficacité, les outils digitaux",
      },
      {
        subtitle: "Développer son agilité :",
        content: "initier l'agilité dans son équipe, l'esprit agile, l'agilité dans le fonctionnement d'équipe, instaurer des rituels collectifs, innovation collective en réunion, résolution de problèmes avec créativité",
      },
      {
        subtitle: "Accompagner le changement :",
        content: "comprendre le changement, les différents degrés dans l'organisation, les moteurs de la résistance individuelle",
      },
      {
        subtitle: "Piloter le changement :",
        content: "les étapes du changement, les actes du chef de projet",
      },
    ],
  },
];
