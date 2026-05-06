export const navigationData = {
  fr: [
    {
      title: "Ecole",
      href: "/fr/lecole",
      megaMenu: {
        type: "school",
        leftLinks: [
          { label: "Histoire", href: "/fr/lecole/histoire" },
          { label: "Engagements", href: "/fr/lecole/engagements" },
          { label: "International", href: "/fr/lecole/international" },
        ],
        rightSections: [
          { title: "CAMPUS", icon: "map-pin", image: "/assets/campus-toulouse.jpg", subtext: "Toulouse-Labège" },
          { title: "CHIFFRES CLÉS", icon: "bar-chart" },
          { title: "NOUS RENCONTRER", icon: "calendar" },
        ],
      },
    },
    {
      title: "Formations",
      href: "/fr/formations",
      megaMenu: {
        type: "courses",
        description: "Grand Sud Formation se distingue par son approche personnalisée et son engagement à faire grandir chaque étudiant, dans un environnement stimulant et bienveillant.",
        button: { label: "CANDIDATER", href: "/fr/candidater" },
        columns: [
          {
            title: "PROGRAMMES EN FRANÇAIS",
            links: [
              { label: "BTS Tourisme", href: "/fr/bts-tourisme" },
              { label: "BTS MCO", href: "/fr/bts-mco" },
              { label: "Bachelor Hospitality Management", href: "/fr/bachelor-hospitality" },
              { label: "Bachelor MICE Designer", href: "/fr/bachelor-mice" },
              { label: "Bachelor Tourisme Durable", href: "/fr/bachelor-durable" },
              { label: "Mastère Manager de projets", href: "/fr/mastere-projets" },
            ],
            extra: { title: "COURS INTENSIFS", links: [{ label: "GDS Amadeus", href: "/fr/amadeus" }] }
          },
          {
            title: "PROGRAMMES EN ANGLAIS",
            links: [
              { label: "Bachelor Business & Tourism", href: "/fr/bachelor-business" },
              { label: "Bachelor Hospitality Management", href: "/fr/bachelor-hospitality-en" },
              { label: "Bachelor IT & Tourism", href: "/fr/bachelor-it" },
              { label: "Mastère Business & Tourism", href: "/fr/mastere-business" },
              { label: "Mastère Hospitality Management", href: "/fr/mastere-hospitality" },
              { label: "Mastère IT & Tourism", href: "/fr/mastere-it" },
            ]
          },
          {
            title: "MODALITÉS",
            links: [
              { label: "Alternance", href: "/fr/alternance" },
              { label: "Initial", href: "/fr/initial" },
              { label: "Formation continue", href: "/fr/continue" },
              { label: "VAE", href: "/fr/vae" },
            ]
          }
        ]
      }
    },
    {
      title: "Vie étudiante",
      href: "/fr/vie-etudiante",
      megaMenu: {
        type: "student-life",
        leftSection: {
          title: "CAMPUS",
          image: "/assets/campus-toulouse.jpg",
          subtext: "Toulouse-Labège",
          links: [
            { label: "Le campus et ses alentours", icon: "map", href: "/fr/campus/alentours" },
            { label: "Se loger autour du campus", icon: "home", href: "/fr/campus/logement" },
            { label: "La vie à Toulouse", icon: "map-signs", href: "/fr/campus/toulouse" },
          ]
        },
        rightLinks: [
          { label: "Vie associative", href: "/fr/associatif" },
          { label: "E-campus et career center", href: "/fr/career-center" },
        ],
        bottomCards: [
          { title: "ALTERNANCE", image: "/assets/card-alternance.jpg" },
          { title: "JOBS ÉTUDIANTS", image: "/assets/card-jobs.jpg" },
          { title: "AIDES FINANCIÈRES", image: "/assets/card-aides.jpg" },
        ]
      }
    },
    {
      title: "Entreprise",
      href: "/fr/entreprise",
      megaMenu: {
        type: "business",
        links: [
          { label: "Formez vos équipes", href: "/fr/entreprise/formation" },
          { label: "Recrutez vos talents :", href: "/fr/entreprise/recrutement" },
        ],
        cards: [
          { title: "STAGIAIRE", image: "/assets/card-stagiaire.jpg" },
          { title: "ALTERNANT", image: "/assets/card-alternant.jpg" },
          { title: "ALUMNI", image: "/assets/card-alumni.jpg" },
        ],
        rightBox: { title: "ESPACE ENTREPRISE", icon: "briefcase" }
      }
    }
  ],
  en: [
    {
      title: "School",
      href: "/en/school",
      megaMenu: {
        type: "school",
        leftLinks: [
          { label: "History", href: "/en/school/history" },
          { label: "Commitments", href: "/en/school/commitments" },
          { label: "International", href: "/en/school/international" },
        ],
        rightSections: [
          { title: "CAMPUS", icon: "map-pin", image: "/assets/campus-toulouse.jpg", subtext: "Toulouse-Labège" },
          { title: "KEY FIGURES", icon: "bar-chart" },
          { title: "MEET US", icon: "calendar" },
        ],
      },
    },
    {
      title: "Courses",
      href: "/en/courses",
      megaMenu: {
        type: "courses",
        description: "Grand Sud Formation stands out for its personalized approach and commitment to helping each student grow in a stimulating and supportive environment.",
        button: { label: "APPLY", href: "/en/apply" },
        columns: [
          {
            title: "COURSES IN FRENCH",
            links: [
              { label: "BTS Tourism", href: "/en/bts-tourism" },
              { label: "BTS MCO", href: "/en/bts-mco" },
              { label: "Bachelor Hospitality Management", href: "/en/bachelor-hospitality" },
              { label: "Bachelor MICE Designer", href: "/en/bachelor-mice" },
              { label: "Bachelor Sustainable and Digital Tourism Development", href: "/en/bachelor-sustainable" },
              { label: "Mastere in Event and Tourism Project Management", href: "/en/mastere-tourism" },
            ],
            extra: { title: "Intensive courses", links: [{ label: "GDS Amadeus", href: "/en/amadeus" }] }
          },
          {
            title: "COURSES IN ENGLISH",
            links: [
              { label: "Bachelor Business & Tourism", href: "/en/bachelor-business" },
              { label: "Bachelor Hospitality Management", href: "/en/bachelor-hospitality-en" },
              { label: "Bachelor IT & Tourism", href: "/en/bachelor-it" },
              { label: "Mastère Business & Tourism", href: "/en/mastere-business" },
              { label: "Mastère Hospitality Management", href: "/en/mastere-hospitality" },
              { label: "Mastère IT & Tourism", href: "/en/mastere-it" },
            ]
          },
          {
            title: "TRAINING OPTIONS",
            links: [
              { label: "Work study program", href: "/en/work-study" },
              { label: "Initial training", href: "/en/initial" },
              { label: "Continuing education", href: "/en/continuing" },
              { label: "Validation of Acquired Experience (VAE)", href: "/en/vae" },
            ]
          }
        ]
      }
    },
    {
      title: "Student Life",
      href: "/en/student-life",
      megaMenu: {
        type: "student-life",
        leftSection: {
          title: "CAMPUS",
          image: "/assets/campus-toulouse.jpg",
          subtext: "Toulouse-Labège",
          links: [
            { label: "The campus and its surroundings", icon: "map", href: "/en/campus/surroundings" },
            { label: "Housing around the campus", icon: "home", href: "/en/campus/housing" },
            { label: "Living in Toulouse", icon: "map-signs", href: "/en/campus/toulouse" },
          ]
        },
        rightLinks: [
          { label: "Community Life", href: "/en/community-life" },
          { label: "E-campus and career center", href: "/en/career-center" },
        ],
        bottomCards: [
          { title: "APPRENTICESHIP", image: "/assets/card-alternance.jpg" },
          { title: "STUDENT JOBS", image: "/assets/card-jobs.jpg" },
          { title: "FINANCIAL AIDS", image: "/assets/card-aides.jpg" },
        ]
      }
    },
    {
      title: "Businesses",
      href: "/en/business",
      megaMenu: {
        type: "business",
        links: [
          { label: "Train your teams", href: "/en/business/training" },
          { label: "Hire your talents :", href: "/en/business/recruitment" },
        ],
        cards: [
          { title: "INTERN", image: "/assets/card-stagiaire.jpg" },
          { title: "APPRENTICE", image: "/assets/card-alternant.jpg" },
          { title: "GRADUATE", image: "/assets/card-alumni.jpg" },
        ],
        rightBox: { title: "BUSINESS SPACE", icon: "briefcase" }
      }
    }
  ],
};
