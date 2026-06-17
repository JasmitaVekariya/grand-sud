"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import CourseFurtherEducation from "@/components/courses/CourseFurtherEducation";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay, BookOpen, Globe, Handshake, Plus } from "lucide-react";

export default function BachelorHospitalityENPage() {
  const bannerData = {
    title: "BACHELOR HOSPITALITY MANAGEMENT",
    image: "/assets/Gemini_Generated_Image_tkqn4otkqn4otkqn-scaled-e1756664070201.png",
    details: [
      { label: "LANGUAGE OF INSTRUCTION", value: "English" },
      { label: "LEVEL", value: "6 (bac+3)" },
      { label: "STATUS", value: "student" },
      { label: "PACE", value: "initial" },
      { label: "DURATION", value: "3 years – 1,806 hours" },
    ],
    logos: ["/assets/logo-france-competences.png", "/assets/logo-diploma.png"] // Placeholder for national diploma
  };

  const sections = [
    { id: "description", label: "DESCRIPTION" },
    { id: "programm", label: "PROGRAM" },
    { id: "admissions", label: "ADMISSIONS" },
    { id: "validation", label: "VALIDATION" },
    { id: "jobs", label: "JOB OPPORTUNITIES" },
    { id: "further-education", label: "FURTHER EDUCATION" },
  ];

  const advantagesData = {
    title: "The advantages of Grand Sud",
    subtitle: "With nearly 35 years of experience in education, Grand Sud School knows the keys to success in providing its students with what they need to succeed.",
    bottomHighlight: "A guaranteed internship in the restaurant industry, lasting 3 to 6 months, in France",
    bottomHighlightIcon: Plus,
    advantages: [
      { icon: CheckCircle2, text: "100% tourism expertise since 1991", isDarkRed: false },
      { icon: Search, text: "support in finding an internship", isDarkRed: true },
      { icon: PenTool, text: "Two mock exam sessions per year / professional juries", isDarkRed: false },
      { icon: Users, text: "workshop with real partners and real issues", isDarkRed: true },
      { icon: Briefcase, text: "real-life business cases studied in class", isDarkRed: false },
      { icon: MonitorPlay, text: "professional speakers", isDarkRed: true },
      { icon: BookOpen, text: "a program tailored to the needs of businesses", isDarkRed: false },
      { icon: Globe, text: "an internationally oriented program", isDarkRed: true },
      { icon: Handshake, text: "students from diverse backgrounds, vectors of cultural richness", isDarkRed: false },
    ]
  };

  const programYears = [
    {
      id: "year1",
      title: "Year 1 - 602 hours",
      hours: "602 hours",
      content: [
        {
          unit: "Skills Unit 1 – Cross-disciplinary skills",
          items: [
            { label: "Welcome Days", description: "Back-to-school integration and team-building seminar" },
            { label: "Tourism English", description: "Welcoming and assisting foreign customers, selling French tourism products to foreign customers, selling foreign tourism products to French customers, accompanying foreign tourists, monitoring and retaining foreign customers" },
            { label: "French", description: "Learning to communicate in order to meet basic and specific needs (level A1)" },
            { label: "French culture", description: "Understanding and mastering French culture" }
          ]
        },
        {
          unit: "Skills Unit 2 – Tourism culture",
          items: [
            { label: "Tourism product design", description: "Mastering the concepts from the analysis and implementation phase through to marketing" },
            { label: "Overview of global tourism", description: "Understanding the specific features and trends of different types of tourism, understanding the main tourist destinations around the world" },
            { label: "Amadeus", description: "Mastering the functioning of the Amadeus GDS (Global Distribution Systems), the reservation system for the airline and rail ecosystem" },
            { label: "Tourism information management", description: "Mastering the main tools and software for collecting, processing, and publishing tourism information" }
          ]
        },
        {
          unit: "Skills Unit 3 – User experience",
          items: [
            { label: "Commercial management", description: "Build quality relationships to ensure long-term customer loyalty" },
            { label: "Marketing", description: "Understand the basic rules of marketing" },
            { label: "Tourism marketing", description: "Master the fundamentals of tourism marketing" },
            { label: "Communication strategy", description: "Be able to build a 360° communication strategy" }
          ]
        },
        {
          unit: "Skills Unit 4 – Customer Experience",
          items: [
            { label: "Luxury codes", description: "Understand and master the codes of luxury" },
            { label: "Overview of hospitality", description: "Know the different structures, trends, and challenges in catering and hospitality" },
            { label: "Housekeeping team management", description: "Master the fundamentals of supervising housekeeping teams" },
            { label: "Events", description: "Know how to organize an event" }
          ]
        }
      ]
    },
    {
      id: "year2",
      title: "Year 2 - 602 hours",
      hours: "602 hours",
      content: [
        {
          unit: "Skills Unit 1 – Cross-disciplinary skills",
          items: [
            { label: "Welcome Days", description: "Back-to-school integration seminar and team building" },
            { label: "Tourism English", description: "Welcoming and assisting foreign customers, selling French tourism products to foreign customers, selling foreign tourism products to French customers, accompanying foreign tourists, monitoring and retaining foreign customers" },
            { label: "French", description: "Understanding the main points of written texts in everyday language: emails, brochures, articles, film reviews; ability to write simple, connected texts on familiar topics (intermediate level B1)" },
            { label: "French culture", description: "Knowledge and mastery of French culture" }
          ]
        },
        {
          unit: "Skills Unit 2 – Tourism culture",
          items: [
            { label: "Tourism product design", description: "Mastery of concepts from the analysis and implementation phase through to marketing" },
            { label: "Eco-responsible tourism", description: "Understanding the environmental, social, and economic issues related to sustainable tourism" },
            { label: "Sustainable development in the hotel and restaurant industry", description: "Explore strategies to minimize food waste and promote recycling" },
            { label: "Tourism information management", description: "Master the main tools and software for collecting, processing, and publishing tourism information" }
          ]
        },
        {
          unit: "Skills Unit 3 – User experience",
          items: [
            { label: "Economic and legal environment", description: "Understanding the legal basis for running a business" },
            { label: "Marketing in the hotel and restaurant industry", description: "Understanding the specific features of the marketing mix for an accommodation or restaurant establishment (adapting the offering to different customers, yield management, distribution, 3Ps of services)" },
            { label: "Hotel operations management", description: "Identifying the different departments of a hotel, explaining the interactions between these departments, applying management methods to optimize performance" },
            { label: "Social media", description: "Being able to carry out a social media campaign" }
          ]
        },
        {
          unit: "Skills Unit 4 – Management",
          items: [
            { label: "Managing a sales team", description: "Understanding the rules of management" },
            { label: "Intercultural management", description: "Analyzing intercultural interaction in professional situations using different conceptual approaches" },
            { label: "Public speaking", description: "Being able to create an engaging speech" },
            { label: "Commercial negotiation", description: "Understanding the basics of commercial negotiation (role play)" }
          ]
        }
      ]
    },
    {
      id: "year3",
      title: "Year 3 - 602 hours",
      hours: "602 hours",
      content: [
        {
          unit: "Skills Unit 1 – Cross-disciplinary skills",
          items: [
            { label: "Welcome Days", description: "Back-to-school integration seminar and team building" },
            { label: "Tourism English", description: "Welcoming and assisting foreign customers, selling French tourism products to foreign customers, selling foreign tourism products to French customers, accompanying foreign tourists, monitoring and retaining foreign customers" },
            { label: "French", description: "Understanding texts written in everyday language: emails, brochures, articles, film reviews; ability to write more complex texts on familiar topics (intermediate level B2)" },
            { label: "French culture", description: "Knowledge and mastery of French culture" }
          ]
        },
        {
          unit: "Skills Unit 2 – Business and economics",
          items: [
            { label: "Tourism project management", description: "Understand project management" },
            { label: "Financial management", description: "Analyze a company's accounting performance" },
            { label: "Analytical and strategic marketing", description: "Choose a marketing strategy in the tourism sector and set objectives" },
            { label: "Marketing plan", description: "Plan a digital communication plan in the tourism sector" }
          ]
        },
        {
          unit: "Skills Unit 3 – User experience",
          items: [
            { label: "Restaurant and accommodation marketing", description: "Understanding the specific features of the marketing mix for an accommodation or catering establishment (adapting the offering to different customers, yield management, distribution, 3Ps of services)" },
            { label: "Local tourism and events management", description: "Understand the principles of local tourism and know how to set up a project" },
            { label: "Territorial development", description: "Carry out a territorial diagnosis, develop a territorial project taking into account sustainable development and CSR" },
            { label: "Management of an accommodation establishment", description: "Understanding the specific HR, legal, and financial aspects of a hotel establishment (managing the operating budget and planning investments, hotel/restaurant KPIs, regulations, HR management, front and back office management)" }
          ]
        },
        {
          unit: "Skills Unit 4 – Management",
          items: [
            { label: "Management fundamentals", description: "Understand different management methods" },
            { label: "Intercultural management", description: "Analyze intercultural interaction in professional situations using different conceptual approaches" },
            { label: "Team management", description: "Mobilize the individual energies of team members" },
            { label: "Management and CSR", description: "Integrate CSR into management methods" }
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
        "High school diploma or equivalent",
        "Sufficient English language skills to follow the program (minimum B2), as demonstrated by official results from an English language test or equivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE, etc.), except for native English speakers or candidates who have studied for at least two years in a program taught in English (candidates must provide supporting documents).",
        "Good academic level",
        "If high school diploma level: candidates must pass the missing exams as independent candidates during the first year of the program"
      ]
    },
    intakes: {
      periodTitle: "Admission period",
      periodText: "All year",
      intakesTitle: "Intakes",
      nextYearLabel: "Next start date:",
      nextYearValue: "October 6, 2025",
      deferredLabel: "Deferred start date:",
      deferredValue: "February 9, 2026"
    },
    processTitle: "Admission process",
    processSteps: [
      {
        title: "Step 1: Application",
        items: [
          { text: "Download your application form." },
          { text: "Send your completed application by email, remembering to include all the required attachments!" },
          { text: "Application fee: €300, non-refundable", isItalic: true }
        ]
      },
      {
        title: "Step 2: Selection",
        items: [
          { text: "Review of your application and verification of prerequisites for the desired program: level of education and foreign languages, professional experience," },
          { text: "Individual appointment: remote motivation interview (via video)" },
          { text: "Admissions committee review: our team will review your application as a whole" },
          { text: "Response within 48 business hours: favorable or unfavorable", isItalic: true }
        ]
      },
      {
        title: "Step 3: enrollment",
        items: [
          { text: "Signing of the education contract" },
          { text: "Support with financing options and internship searches" }
        ]
      }
    ],
    prices: {
      title: "Initial tuition fees:",
      initialLabel: "Per year:",
      initialPrice: "€12,500\nScholarships are available. Contact your admissions officer for more information.",
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
      assessmentTitle: "Assessment methods",
      assessmentText: "Written and oral exams.",
      certificationTitle: "Certification",
      diplomaName: "Responsable de développement touristique territorial (RDTT)\n– Certified bachelor's degree",
      rncpLabel: "RNCP 35706",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/35706/",
      diplomaCodeLabel: "Diploma code",
      diplomaCode: "36T33403",
      ministry: "Ministère du travail, du plein emploi et de l'insertion",
      expirationLabel: "Expiration date:",
      expirationDate: "08/02/2026",
      certificationNote: "This qualification consists of four skill sets known as “certificates of professional competence” (CCP). It can be obtained by accumulating CCPs or by completing a training course.",
      equivalencesTitle: "Equivalences",
      equivalencesItems: [
        "The CCP “Supporting the marketing development of a region” in the RDTT qualification is equivalent to the CCP “Marketing a tourist establishment using a multi-channel approach” in the professional qualification “Tourist Establishment Manager.”",
        "The CCP “Ensuring the financial feasibility of a tourism initiative” of the RDTT qualification is equivalent to the CCP “Ensuring the operational management and planning investments for a tourist establishment” of the professional qualification “Tourist Establishment Manager.”"
      ]
    }
  };

  const jobsData = {
    title: "JOB OPPORTUNITIES",
    intro: "After completing this international bachelor's degree, the world will be your oyster and you'll have some exciting career opportunities!",
    categories: [
      {
        jobs: [
          { label: "MANAGER OF AN ACCOMMODATION FACILITY", isDarkRed: false },
          { label: "TOURISM PROJECT MANAGER", isDarkRed: true },
          { label: "ACCOMMODATION MANAGER (HOTEL, RESIDENCE, HOSTEL)", isDarkRed: false },
          { label: "TOURISM DEVELOPMENT OFFICER", isDarkRed: true },
          { label: "HOTEL MARKETING MANAGER", isDarkRed: true },
          { label: "RESTAURANT MANAGER", isDarkRed: false },
          { label: "GUEST EXPERIENCE MANAGER", isDarkRed: true },
          { label: "YIELD MANAGER / REVENUE MANAGER", isDarkRed: false },
          { label: "HOTEL/RESTAURANT FINANCIAL AND ADMINISTRATIVE MANAGEMENT ASSISTANT", isDarkRed: false },
          { label: "INTERNATIONAL CUSTOMER RELATIONS MANAGER", isDarkRed: true },
          { label: "INTERCULTURAL COORDINATOR / TOURISM COORDINATOR", isDarkRed: false },
          { label: "VISITOR RELATIONS MANAGER", isDarkRed: true },
        ]
      }
    ]
  };

  const educationData = {
    title: "FURTHER EDUCATION",
    links: [
      { label: "Mastère Business & Tourism", href: "/en/courses/mastere-business", flag: "UK" as const },
      { label: "Mastère Hospitality Management", href: "/en/courses/mastere-hospitality", flag: "UK" as const },
      { label: "Mastère Tourism Strategy Management", href: "/en/courses/mastere-tourism", flag: "FR" as const },
      { label: "In general, all level 7 titles", href: "" }
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
        certificationBadge="State Certified Title"
      />
      
      <CourseDetailLayout 
        sections={sections}
        applyButton={{ label: "Apply (French only)", href: "/fr/candidater" }}
      >
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>This Bachelor's degree, designed for students with international ambitions, trains them in the challenges of tourism, French culture, and specific areas of hospitality in the hotel and restaurant industry.</p>
              <p>Graduates obtain a certified Level 6 professional qualification, enabling them to access a variety of positions in the tourism sector.</p>
              <p>It is designed for students who are passionate about travel, culture, and customer relations, who have a high school diploma (or equivalent) and are looking for a career in international tourism, as well as for European and international students seeking to study in France in an international learning environment.</p>
            </div>
          </div>
          <CourseAdvantages {...advantagesData} />
        </section>

        <section id="programm" className="scroll-mt-32">
          <CourseProgram 
            title="PROGRAM"
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

        <section id="further-education" className="scroll-mt-32">
          <CourseFurtherEducation {...educationData} />
        </section>
      </CourseDetailLayout>
    </main>
  );
}
