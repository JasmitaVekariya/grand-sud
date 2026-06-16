"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay, BookOpen, Globe, Handshake, Plus } from "lucide-react";

export default function MastereITPage() {
  const bannerData = {
    title: "MASTÈRE IT & TOURISM",
    image: "/assets/Gemini_Generated_Image_o2x5nlo2x5nlo2x5-scaled-e1756724790741.png",
    details: [
      { label: "LANGUAGE OF INSTRUCTION", value: "English" },
      { label: "LEVEL", value: "7 (bac+5)" },
      { label: "STATUS", value: "student" },
      { label: "PACE", value: "initial" },
      { label: "DURATION", value: "2 years – 1,204 hours" },
    ],
    logos: ["/assets/logo-france-competences.png"]
  };

  const sections = [
    { id: "description", label: "DESCRIPTION" },
    { id: "programm", label: "PROGRAM" },
    { id: "admissions", label: "ADMISSIONS" },
    { id: "validation", label: "VALIDATION" },
    { id: "jobs", label: "JOB OPPORTUNITIES" },
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
      { icon: BookOpen, text: "a program tailored to the needs of businesses", isDarkRed: false },
      { icon: Globe, text: "an internationally oriented program", isDarkRed: true },
      { icon: Handshake, text: "students from diverse backgrounds, vectors of cultural richness", isDarkRed: false },
    ],
    bottomHighlight: "Supervised and professionalized project throughout the course",
    bottomHighlightIcon: Plus
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
            { label: "French", description: "Learning to communicate in order to meet advanced and specific needs (level B2)" },
            { label: "French culture", description: "Understanding and mastering French culture" }
          ]
        },
        {
          unit: "Skills Unit 2 – Business and economics",
          items: [
            { label: "Business intelligence and economic intelligence", description: "Data collection, strategic analysis, and use of economic intelligence to make informed decisions and secure competitive advantages" },
            { label: "E-commerce", description: "Applying online commerce techniques" },
            { label: "CRM & Data Analysis", description: "Implementing customer relationship management strategies using technological tools and data exploitation" },
            { label: "Growth Hacking", description: "Using digital channels to identify opportunities for rapid and effective growth" }
          ]
        },
        {
          unit: "Skills Unit 3 – User Experience",
          items: [
            { label: "No-code", description: "Create interactive and visually appealing websites without having to write code" },
            { label: "Digital transformation and business ethics", description: "Understand the specificities of the marketing mix of a hosting structure" },
            { label: "Business strategy", description: "Position the business competitively in its market while optimizing its performance" },
            { label: "Marketing plan", description: "Be able to develop a marketing strategy" }
          ]
        },
        {
          unit: "Skills Unit 4 – Management and Finance",
          items: [
            { label: "Intercultural Management", description: "Analyze intercultural interactions in professional situations using different conceptual approaches" },
            { label: "Innovation Management", description: "Understand the challenges of innovation" },
            { label: "Financial Management", description: "Set up specific dashboards" },
            { label: "Preparation for the qualification", description: "Understand the certifier's expectations and prepare files in accordance with them" }
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
            { label: "French", description: "Understanding the main points of written texts in everyday language: emails, brochures, articles, film reviews; ability to write simple, connected texts on familiar topics (level B2)" },
            { label: "French culture", description: "Knowledge and mastery of French culture" },
            { label: "Supervised assignments and mock exams", description: "Exam simulation" }
          ]
        },
        {
          unit: "Skills Unit 2 – Economics and business",
          items: [
            { label: "AI & business", description: "Using AI to support the economic development of businesses" },
            { label: "Economic intelligence", description: "Understanding the challenges of economic intelligence" },
            { label: "Geopolitics", description: "Analyzing the geopolitical issues of the contemporary world" },
            { label: "Workshop", description: "Developing concrete responses to a customer need within a given timeframe, developing adaptability, creativity, and collective intelligence within a randomly formed multidisciplinary team" }
          ]
        },
        {
          unit: "Skills Unit 3 – User Experience",
          items: [
            { label: "Digital Analytics", description: "Organizing and leveraging data" },
            { label: "Web Marketing", description: "Optimizing search engine optimization (SEO) and managing paid search engine advertising (SEA) campaigns" },
            { label: "360° Communication", description: "Design and manage a communication plan in the tourism sector" },
            { label: "Personal Branding", description: "Create a strong and visible personal brand image" }
          ]
        },
        {
          unit: "Skill Unit 4 – Management",
          items: [
            { label: "Optimization of methods and processes", description: "Optimize tools, methods, and processes based on interim results, identified discrepancies, or unforeseen events" },
            { label: "Business plan", description: "Master the rules of a business plan" },
            { label: "Dashboards and indicators", description: "Define and implement project management and monitoring indicators" },
            { label: "Preparation for certification", description: "Understand the certifier's expectations and prepare files in accordance with them" }
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
        "Bachelor's degree",
        "A sufficient level of English to enable you to follow the course (minimum B2), as demonstrated by official results from an English test or equivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE, etc.), except for native English speakers or candidates who have studied for at least two years in a program taught in English (candidates must provide supporting documentation).",
        "Good academic level"
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
          { text: "Download your application form.", isLink: true, linkText: "Download your application form." },
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
      title: "Initial tuition fee:",
      initialLabel: "Per year:",
      initialPrice: "€14,500\nScholarships are available. Contact your admissions officer for details.",
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
      assessmentText: "Written and oral exams according to FEDE standards",
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
    title: "JOB OPPORTUNITIES",
    intro: "After completing this international mastère's degree, the world will be your oyster and you'll have access to exciting career opportunities!",
    categories: [
      {
        jobs: [
          { label: "DIRECTOR OF 360° COMMUNICATIONS", isDarkRed: false },
          { label: "WEBMARKETING PROJECT MANAGER", isDarkRed: true },
          { label: "BRAND STRATEGY CONSULTANT", isDarkRed: false },
          { label: "ORGANIZATIONAL CONSULTANT", isDarkRed: true },
          
          { label: "OPERATIONAL UNIT MANAGER", isDarkRed: true },
          { label: "DATA ANALYST", isDarkRed: false },
          { label: "BUSINESS DEVELOPER", isDarkRed: true },
          { label: "BUSINESS DEVELOPER INTERNATIONAL", isDarkRed: false },
          
          { label: "INTERNATIONAL AFFAIRS OFFICER", isDarkRed: false },
          { label: "ECOMMERCE MANAGER", isDarkRed: true },
          { label: "TEAM LEADER", isDarkRed: false },
          { label: "CUSTOMER RELATIONS MANAGER", isDarkRed: true },
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
        applyButton={{ label: "Apply", href: "/en/apply" }}
      >
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>This Mastère's degree, designed for students with international ambitions, trains them in tourism issues, French culture, and mastery of IT systems specific to the tourism sector.</p>
              <p>Graduates obtain a certified level 7 professional qualification enabling them to access positions of responsibility in the world of tourism.</p>
              <p>It is designed for students who are passionate about travel, culture, responsibility, and business, who have a bachelor's degree (or equivalent) and are looking for a career in international tourism, as well as for European and international students seeking to study in France in an international learning environment.</p>
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
      </CourseDetailLayout>
    </main>
  );
}
