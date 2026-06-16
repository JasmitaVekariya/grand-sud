"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import CourseFurtherEducation from "@/components/courses/CourseFurtherEducation";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay } from "lucide-react";

export default function BTSTourismPage() {
  const bannerData = {
    title: "BTS TOURISM",
    image: "/assets/eiffeltower-1536x838.png",
    details: [
      { label: "Language of instruction", value: "French" },
      { label: "Level", value: "5 (two years of post-secondary education)" },
      { label: "Status", value: "student, apprentice, job seeker and employee (CPF transition)" },
      { label: "Schedule", value: "full-time or work-study programme – 1 week at the training center/2 week at the company" },
      { label: "Duration", value: "2 years – 1,197 hours" },
    ],
    additionalInfo: "Training accessible through VAE (validation of acquired experience)",
    logos: ["/assets/logo-france-competences.png"]
  };

  const sections = [
    { id: "description", label: "DESCRIPTION" },
    { id: "programm", label: "PROGRAMM" },
    { id: "admissions", label: "ADMISSIONS" },
    { id: "validation", label: "VALIDATION" },
    { id: "jobs", label: "JOB OPPORTUNITIES" },
    { id: "further-education", label: "FURTHER EDUCATION" },
  ];

  const advantages = [
    { icon: CheckCircle2, text: "100% tourism expertise since 1991", isDarkRed: false },
    { icon: Search, text: "support in finding work-study programmes or internships", isDarkRed: true },
    { icon: PenTool, text: "Two mock BTS sessions per year / professional juries", isDarkRed: false },
    { icon: Users, text: "workshop with partners and real-life issues", isDarkRed: true },
    { icon: Briefcase, text: "real-life business cases studied in class", isDarkRed: false },
    { icon: MonitorPlay, text: "professional speakers", isDarkRed: true },
  ];

  const programYears = [
    {
      id: "year1",
      title: "Year 1",
      hours: "581 hours",
      content: [
        {
          unit: "Skills Unit 1 – Cross-disciplinary skills",
          items: [
            { label: "Start", description: "Back-to-school integration seminar and team building" },
            { label: "Workshop", description: "Challenging professional scenarios requiring concrete responses to customer needs, transforming needs into concrete solutions within a given time frame, developing adaptability, creativity and collective intelligence in random multidisciplinary teams (soft & hard skills)." },
            { label: "General Culture and Expression", description: "Synthesising information, providing reasoned answers to questions related to the documents provided for reading" },
            { label: "English", description: "Welcoming and assisting foreign customers, selling French tourism products to foreign customers, selling foreign tourism products to French customers, accompanying foreign tourists, monitoring and retaining foreign customers" },
            { label: "Second Foreign Language", description: "Spanish, Italian or German" },
            { label: "Supervised assignments and mock BTS exams", description: "Exam simulation" },
          ]
        },
        {
          unit: "Skills Unit 2 – Tourism customer relationship management",
          items: [
            { label: "Amadeus", description: "Mastering the operation of the Amadeus GDS (Global Distribution Systems), the airline and rail ecosystem reservation system" },
            { label: "GRCT", description: "Organising the reception area, welcoming customers and actively listening to them, presenting the key features of the destinations or products concerned, offering a suitable tourism service and finalising the sale" },
          ]
        },
        {
          unit: "Skills Unit 3 – Innovating in management and organisational methods",
          items: [
            { label: "Management and law applied to tourism", description: "Determining the cost price of the service, setting a selling price in line with commercial policy" },
            { label: "Tourism marketing", description: "Identify threats and opportunities, strengths and weaknesses in the environment and in a given tourism organisation, identify the strengths and weaknesses of a given tourism organisation, identify the characteristics of supply and demand (for a given service), choose appropriate distribution networks, select appropriate communication media" },
          ]
        },
        {
          unit: "Skills Unit 4 – Tourism information management",
          items: [
            { label: "Professional workshop", description: "Select suppliers and service providers and assemble the components of the service; assess the design and implementation of the service; monitor information; identify significant developments and changes in the environment" },
            { label: "Tourism stakeholders", description: "Establish links between socio-economic or legal developments and tourism activity; characterise the role and status of tourism stakeholders" },
          ]
        }
      ]
    },
    {
      id: "year2",
      title: "Year 2",
      hours: "616 hours",
      content: [
        {
          unit: "Skills Unit 1 – Cross-disciplinary skills",
          items: [
            { label: "Start", description: "Back-to-school integration seminar and team building" },
            { label: "Workshop", description: "Challenging professional scenarios requiring concrete responses to customer needs, transforming needs into concrete solutions within a given time frame, developing adaptability, creativity and collective intelligence in random multidisciplinary teams (soft & hard skills)." },
            { label: "General Culture and Expression", description: "Synthesising information, providing reasoned answers to questions related to the documents provided for reading" },
            { label: "English", description: "Welcoming and assisting foreign customers, selling French tourism products to foreign customers, selling foreign tourism products to French customers, accompanying foreign tourists, monitoring and retaining foreign customers" },
            { label: "Second Foreign Language", description: "Spanish, Italian or German" },
            { label: "Supervised assignments and mock BTS exams", description: "Exam simulation" },
          ]
        },
        {
          unit: "Skills Unit 2 – Tourism customer relationship management",
          items: [
            { label: "Amadeus", description: "Mastering the operation of the Amadeus GDS (Global Distribution Systems), the airline and rail ecosystem reservation system" },
            { label: "GRCT", description: "Organising the reception area, welcoming customers and actively listening to them, presenting the key features of the destinations or products concerned, offering a suitable tourism service and finalising the sale" },
          ]
        },
        {
          unit: "Skills Unit 3 – Innovating in management and organisational methods",
          items: [
            { label: "Management and law applied to tourism", description: "Determining the cost price of the service, setting a selling price in line with commercial policy" },
            { label: "Tourism marketing", description: "Identify threats and opportunities, strengths and weaknesses in the environment and in a given tourism organisation, identify the strengths and weaknesses of a given tourism organisation, identify the characteristics of supply and demand (for a given service), choose appropriate distribution networks, select appropriate communication media" },
          ]
        },
        {
          unit: "Skills Unit 4 – Tourism information management",
          items: [
            { label: "Professional workshop", description: "Select suppliers and service providers and assemble the components of the service; assess the design and implementation of the service; monitor information; identify significant developments and changes in the environment" },
            { label: "Tourism stakeholders", description: "Establish links between socio-economic or legal developments and tourism activity; characterise the role and status of tourism stakeholders" },
          ]
        }
      ]
    }
  ];

  const admissionsData = {
    title: "ADMISSIONS",
    prerequisite: {
      title: "Prerequisite",
      items: [
        "Baccalaureate or equivalent",
        "A sufficient level of French to enable the candidate to follow the course",
        "Languages: English and one other language of their choice",
        "If baccalaureate level: candidates must pass the missing exams as independent candidates during the first year of the BTS"
      ]
    },
    intakes: {
      periodTitle: "Admission period",
      periodText: "All year round",
      intakesTitle: "Intakes",
      nextYearLabel: "Next academic year",
      nextYearValue: "October 2025",
      deferredLabel: "Deferred academic year",
      deferredValue: "February 2026"
    },
    processTitle: "Admission process",
    processSteps: [
      {
        title: "Step 1: Application submission",
        items: [
          { text: "Download the application by clicking here (French only).", isLink: true, linkText: "clicking here (French only)." },
          { text: "Send your completed application by email, remembering to include all the required attachments!" },
          { text: "There is no application fee." }
        ]
      },
      {
        title: "Step 2: selection",
        items: [
          { text: "Review of your application and verification of the prerequisites for the desired programme: level of education and foreign languages, professional experience," },
          { text: "Individual appointment: motivational interview at the school or remotely (via video conference)" },
          { text: "Admissions committee review: our team will review your application as a whole" },
          { text: "Response within 48 working hours: favourable or unfavourable decision" }
        ]
      },
      {
        title: "Step 3: enrolment",
        items: [
          { text: "Confirmation of your status: Student / Job seeker / Vocational training intern / Employee" },
          { text: "Support with financing options and finding a company" }
        ]
      }
    ],
    prices: {
      title: "Prices",
      initialLabel: "Initial fee:",
      initialYear1: "€5,500",
      initialYear2: "€5,700",
      visaNote: "*For students requiring assistance with visas (first entry into the EU) :",
      visaYear1: "€6,500",
      visaYear2: "€5,700",
      workStudyLabel: "Work-study program fees:",
      workStudyYear1: "€8,000",
      workStudyYear2: "€8,000",
      workStudyNote: "*In the work-study program, training costs are covered by the OPCO. This will be discussed with the company when the contract is signed."
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Assessment methods",
      assessmentText: "Written and oral exams in accordance with the guidelines of the French Ministry of Education for BTS exams.",
      certificationTitle: "Certification",
      diplomaName: "BTS Tourisme – BAC+2 National State Diploma",
      rncpLabel: "RNCP 37890",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/37890/",
      diplomaCodeLabel: "Diploma Code",
      diplomaCode: "32033426",
      ministry: "Ministère de l'enseignement supérieur et de la recherche",
      expirationLabel: "Expiration date :",
      expirationDate: "08/31/2028"
    }
  };

  const jobsData = {
    title: "JOB OPPORTUNITIES",
    intro: "The tourism sector offers a wide range of opportunities in France and abroad for holders of a BTS (Higher National Diploma) in Tourism.",
    categories: [
      {
        title: "Jobs related to destination offerings:",
        jobs: [
          { label: "TRAVEL ADVISOR", isDarkRed: false },
          { label: "PACKAGE TOUR OPERATOR", isDarkRed: true },
          { label: "TICKET ADVISOR", isDarkRed: false },
          { label: "RECEPTIVE AGENT", isDarkRed: true },
          { label: "GROUND HANDLING AGENT", isDarkRed: true },
          { label: "TOUR GUIDE", isDarkRed: false },
          { label: "OPERATIONS (OR PLANNING) AGENT", isDarkRed: true },
          { label: "RECEPTIVE DELEGATE (OR LOCAL CORRESPONDENT)", isDarkRed: false },
        ],
        prospects: "Career development prospects: team manager, office manager, branch manager(s), platform manager or product manager, yield manager, etc."
      },
      {
        title: "Jobs related to the design of tourism offerings by tourism organizations in a given region:",
        jobs: [
          { label: "TRAVEL ADVISOR", isDarkRed: false },
          { label: "LOCAL TOURISM COORDINATOR", isDarkRed: true },
          { label: "DIGITAL REGIONAL DEVELOPMENT MANAGER", isDarkRed: false },
          { label: "TOURISM DEVELOPMENT OFFICER", isDarkRed: true },
        ],
        prospects: "Career prospects: reception manager/director, tourist office director (small organization)."
      },
      {
        title: "Jobs related to accommodation, tourist travel, and hospitality at leisure sites:",
        jobs: [
          { label: "TOURISM RECEPTION TECHNICIAN", isDarkRed: true },
          { label: "RECREATION OR ATTRACTION EMPLOYEE", isDarkRed: false },
          { label: "RECEPTION MANAGER", isDarkRed: true },
          { label: "SALES AND RESERVATIONS AGENT", isDarkRed: false },
        ],
        prospects: "Career development prospects: director (of a center, campground, etc.), site manager."
      }
    ]
  };

  const educationData = {
    title: "FURTHER EDUCATION",
    links: [
      { label: "Bachelor Sustainable and digital tourism Development", href: "/en/courses/bachelor-sustainable", flag: "FR" as const },
      { label: "Bachelor MICE DESIGNER", href: "/en/courses/bachelor-mice", flag: "FR" as const },
      { label: "Bachelor Hospitality Management", href: "/en/courses/bachelor-hospitality", flag: "FR" as const, isHighlighted: true },
      { label: "Bachelor Hospitality Management", href: "/en/courses/bachelor-hospitality-en", flag: "UK" as const },
      { label: "Bachelor Business & Tourism", href: "/en/courses/bachelor-business", flag: "UK" as const },
      { label: "In general, Level 6 titles", href: "/en/courses" }
    ],
    jobs: [
      { label: "CHEF D'ENTREPRISE, CRÉATEUR OU REPRENEUR D'ENTREPRISES", isDarkRed: false },
      { label: "DIRECTEUR MEMBRE DU COMITÉ DE DIRECTION", isDarkRed: true },
      { label: "DIRECTEUR FONCTIONNEL (COMMERCIAL, MARKETING, JURIDIQUE, FINANCE, RESSOURCES HUMAINES, SUPPLY CHAIN, LOGISTIQUE, EXPORT)", isDarkRed: false },
      { label: "DIRECTEUR D'UNITÉS OPÉRATIONNELLES AU NIVEAU UNITAIRE, RÉGIONAL, NATIONAL OU MONDIAL", isDarkRed: true },
      { label: "DIRECTEUR / MANAGER DE ZONE, FILIALE, D'UNITÉ, DE SERVICES", isDarkRed: true },
      { label: "DIRECTEUR GÉNÉRAL ADJOINT", isDarkRed: false },
      { label: "GÉRANT", isDarkRed: true },
      { label: "DIRECTEUR DE SERVICE, DÉPARTEMENT, UNITÉ, D'AGENCE", isDarkRed: false },
      { label: "DIRECTEUR DE PROJET / MANAGER DE PROJET", isDarkRed: false },
      { label: "DIRECTEUR DU DEVELOPPEMENT", isDarkRed: true },
      { label: "DIRECTEUR DES VENTES", isDarkRed: false },
      { label: "MANAGER DES ORGANISATIONS", isDarkRed: true },
      { label: "MANAGER INTERNATIONAL", isDarkRed: true },
      { label: "CONSULTANT DANS DES CABINETS DE CONSEIL ORIENTÉS", isDarkRed: false },
      { label: "DIRECTEUR GÉNÉRAL DE FILIALE", isDarkRed: true },
      { label: "DIRECTEUR ADJOINT", isDarkRed: false },
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
        applyButton={{ label: "Apply (French only)", href: "/fr/candidater" }}
      >
        {/* Description Section */}
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>The BTS in Tourism is the benchmark two-year higher education diploma in the sector.</p>
              <p>This versatile course covers a variety of areas such as tourism project management, product and service marketing, hospitality, entertainment and foreign language skills.</p>
              <p>With a focus on professional development, it includes work placements, offering future graduates solid practical experience and real opportunities to enter a dynamic and constantly evolving sector.</p>
            </div>
          </div>

          <CourseAdvantages 
            title="The advantages of Grand Sud"
            subtitle="With over 20 years of experience in preparing students for the BTS Tourism exams, the Grand Sud school knows the keys to success for obtaining this Level 5 qualification."
            topHighlight="100% of success in 2025, for the second consecutive year"
            advantages={advantages}
          />
        </section>

        {/* Program Section */}
        <section id="programm" className="scroll-mt-32">
          <CourseProgram 
            title="PROGRAMM"
            years={programYears}
            downloadButton={{ label: "Download the full program (French only)", href: "/assets/program-pdf.pdf" }}
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
          <CourseFurtherEducation {...educationData} />
        </section>

      </CourseDetailLayout>
    </main>
  );
}
