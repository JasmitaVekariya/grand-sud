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

export default function BachelorITPage() {
  const bannerData = {
    title: "BACHELOR IT & TOURISM",
    image: "/assets/Gemini_Generated_Image_bvjg5ybvjg5ybvjg-scaled-e1756665675348.png",
    details: [
      { label: "LANGUAGE OF INSTRUCTION", value: "English" },
      { label: "LEVEL", value: "6 (bac+3)" },
      { label: "STATUS", value: "student" },
      { label: "PACE", value: "initial" },
      { label: "DURATION", value: "3 years – 1,806 hours" },
    ],
    logos: ["/assets/logo-france-competences.png"]
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
    advantages: [
      { icon: CheckCircle2, text: "100% tourism expertise since 1991", isDarkRed: false },
      { icon: Search, text: "support in finding an internship", isDarkRed: true },
      { icon: PenTool, text: "Two mock exam sessions per year / professional juries", isDarkRed: false },
      { icon: Users, text: "workshop with real partners and real issues", isDarkRed: true },
      { icon: Briefcase, text: "real-life business cases studied in class", isDarkRed: false },
      { icon: MonitorPlay, text: "professional speakers", isDarkRed: true },
      { icon: BookOpen, text: "a program tailored to business needs", isDarkRed: false },
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
            { label: "Welcome Days", description: "Back-to-school integration seminar and team building" },
            { label: "Tourism English", description: "Welcoming and assisting foreign customers, selling French tourism products to foreign customers, selling foreign tourism products to French customers, accompanying foreign tourists, monitoring and retaining foreign customers" },
            { label: "French", description: "Learning to communicate in order to meet basic and specific needs (level A1)" },
            { label: "French culture", description: "Understanding and mastering French culture" }
          ]
        },
        {
          unit: "Skills Unit 2 – Tourism culture",
          items: [
            { label: "Overview of French tourism", description: "Understanding the specific characteristics and trends of tourism in France" },
            { label: "Overview of global tourism", description: "Understanding the specific characteristics and trends of tourism around the world" },
            { label: "French economy", description: "Mastering the economics of the sector" },
            { label: "Artificial Intelligence", description: "Mastering how AI works" }
          ]
        },
        {
          unit: "Skills Unit 3 – Development",
          items: [
            { label: "HTML/CSS/JS framework", description: "Knowing how to create a website" },
            { label: "Full Stack concepts", description: "Mastering the main Full Stack concepts" },
            { label: "iOS and Android Development", description: "Mastering the technologies needed to create a responsive website" },
            { label: "Algorithms", description: "Understanding the basics of algorithms" }
          ]
        },
        {
          unit: "Skills Unit 4 – Securing a network within a tourism organization",
          items: [
            { label: "Network Architecture (CCNA 1)", description: "Understanding the basics of creating a computer network (CNA 1 certification)" },
            { label: "Network security", description: "Mastering the basics of securing a network" },
            { label: "IT and asset management", description: "Managing an IT system" },
            { label: "Databases", description: "Knowing how to manage databases" }
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
            { label: "French", description: "Understanding the essentials of texts written in everyday language: emails, brochures, articles, film reviews; ability to write simple, coherent texts on familiar topics (intermediate level B1)" },
            { label: "French culture", description: "Knowledge and mastery of French culture" }
          ]
        },
        {
          unit: "Skills Unit 2 – Tourism culture",
          items: [
            { label: "Overview of French tourism", description: "Know the specific features and trends of tourism in France" },
            { label: "Overview of global tourism", description: "Know the specific features and trends of tourism around the world" },
            { label: "French economy", description: "Master the economics of the sector" },
            { label: "Artificial Intelligence", description: "Master how AI works" }
          ]
        },
        {
          unit: "Skills Unit 3 – Development",
          items: [
            { label: "Flutter", description: "Know how to create an application" },
            { label: "Full Stack Concepts", description: "Master the main Full Stack concepts" },
            { label: "React Native", description: "Master the technologies for creating a responsive website" },
            { label: "Algorithms", description: "Understand the basics of algorithms" }
          ]
        },
        {
          unit: "Skills Unit 4 – Development and Security",
          items: [
            { label: "Network Architecture (CCNA 2)", description: "Understanding the basics of creating a computer network (CNA 2 certification)" },
            { label: "Advanced Security", description: "Mastering the basics of network security" },
            { label: "Object-Oriented Programming", description: "Knowing how to program" },
            { label: "Backend Development", description: "Knowing how to design the tools needed to administer a website" }
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
            { label: "French", description: "Understanding texts written in everyday language: emails, brochures, articles, film reviews; ability to write more complex, connected texts on familiar topics (intermediate level B2)" },
            { label: "Certification preparation", description: "Understanding the certifier's expectations and knowing how to meet them" }
          ]
        },
        {
          unit: "Skills Unit 2 – Business and Economics",
          items: [
            { label: "Monitoring and Business Intelligence", description: "Data collection, strategic analysis, and use of business intelligence to make informed decisions and gain competitive advantages" },
            { label: "E-commerce", description: "Applying e-commerce techniques" },
            { label: "CRM and data analysis", description: "Customer relationship management strategies through the use of technological tools and data exploitation" },
            { label: "Growth Hacking", description: "Using digital channels to identify opportunities for rapid and effective growth" }
          ]
        },
        {
          unit: "Skill Unit 3 – Development",
          items: [
            { label: "Devops", description: "Understanding agile practices and incremental development" },
            { label: "Docker & Kubernetes", description: "Creating feature-rich mobile applications with secure API integration" },
            { label: "Cross-platform technologies", description: "Mastering cross-platform technologies" },
            { label: "Deploying a Mobile Application", description: "Develop, test, and deploy cross-platform hybrid mobile applications" }
          ]
        },
        {
          unit: "Skill Unit 4 – Development and Security",
          items: [
            { label: "Web Hacking", description: "Understand and master the techniques used by hackers to test and protect your systems" },
            { label: "Mobile Application Security", description: "Develop application architecture, create mockups and prototypes" },
            { label: "Front-end development", description: "Create a graphic model of the site allowing the client to visualize the functional and graphic interface of the web platform" },
            { label: "Back-end development", description: "Use various tools, frameworks, and languages to determine the best way to develop intuitive and user-friendly prototypes and transform them into websites" }
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
          { text: "Review of your application and verification of prerequisites for the desired program: level of education and foreign languages, professional experience." },
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
      downloadFrameworkLabel: "Télécharger le guide de validation",
      downloadFrameworkHref: "/assets/validation-guide.pdf",
      certificationTitle: "Certification",
      diplomaName: "Responsable de développement touristique territorial (RDTT) – Certified bachelor's degree",
      rncpLabel: "RNCP 35706",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/35706/",
      diplomaCodeLabel: "Diploma code",
      diplomaCode: "36T33403",
      ministry: "Ministère du travail, du plein emploi et de l'insertion",
      expirationLabel: "Expiration date:",
      expirationDate: "08/02/2026",
      certificationNote: "This qualification consists of four skill sets known as “professional skill certificates” (CCP). It can be obtained by accumulating CCPs or by completing a training program.",
      equivalencesTitle: "Equivalences",
      equivalencesItems: [
        "The CCP “Supporting the marketing development of a region” in the RDTT qualification is equivalent to the CCP “Marketing a tourist establishment using a multi-channel approach” in the professional qualification “Tourist Establishment Manager.”",
        "The CCP “Ensuring the financial feasibility of a tourism initiative” of the RDTT qualification is equivalent to the CCP “Ensuring the operational management and planning investments for a tourist establishment” of the professional qualification “Tourist Establishment Manager.”"
      ]
    }
  };

  const jobsData = {
    title: "JOB OPPORTUNITIES",
    intro: "After completing this international bachelor's degree, the world will be your oyster and you'll have access to exciting career opportunities!",
    categories: [
      {
        jobs: [
          { label: "FULL STACK WEB DEVELOPER", isDarkRed: false },
          { label: "MOBILE APP DEVELOPER", isDarkRed: true },
          { label: "DEVOPS ENGINEER", isDarkRed: false },
          { label: "CYBERSECURITY SPECIALIST", isDarkRed: true },
          
          { label: "SYSTEMS AND NETWORKS ADMINISTRATOR", isDarkRed: true },
          { label: "GROWTH HACKER", isDarkRed: false },
          { label: "DATA ANALYST", isDarkRed: true },
          { label: "ECOMMERCE SPECIALIST", isDarkRed: false },
          
          { label: "DIGITAL MARKETER", isDarkRed: false },
          { label: "DIGITAL TOURISM PROJECT MANAGER", isDarkRed: true },
          { label: "DIGITAL TRANSFORMATION CONSULTANT FOR THE HOTEL INDUSTRY", isDarkRed: false },
          { label: "TOURISM PRODUCT DEVELOPMENT SPECIALIST", isDarkRed: true },
        ]
      }
    ]
  };

  const educationData = {
    title: "FURTHER EDUCATION",
    links: [
      { label: "Mastère IT & Tourism", href: "/en/courses/mastere-it", flag: "UK" as const },
      { label: "Mastère Business & Tourism", href: "/en/courses/mastere-business", flag: "UK" as const },
      { label: "Mastère Hospitality Management", href: "/en/courses/mastere-hospitality", flag: "UK" as const },
      { label: "Mastère Tourism Strategy Management", href: "/en/courses/mastere-tourism", flag: "FR" as const },
      { label: "In general, all level 7 titles", href: "#" }
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
        applyButton={{ label: "Apply", href: "/en/apply" }}
      >
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>This bachelor's degree, designed for students aiming for international careers, trains them in tourism issues, French culture, and mastery of IT systems specific to the tourism sector.</p>
              <p>Graduates obtain a certified level 6 professional qualification enabling them to access a variety of positions in the tourism industry.</p>
              <p>It is designed for students who are passionate about travel and IT, who have a high school diploma (or equivalent) and are looking for a career in international tourism, as well as for European and international students seeking to study in France in an international learning environment.</p>
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
