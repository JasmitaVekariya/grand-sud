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

export default function BachelorSustainablePage() {
  const bannerData = {
    title: "Bachelor Sustainable and Digital Tourism Development",
    image: "/assets/Gemini_Generated_Image_ae35ae35ae35ae35-scaled.png",
    details: [
      { label: "Language of instruction", value: "French" },
      { label: "Level", value: "6 (bac+3)" },
      { label: "Status", value: "student, apprentice, job seeker, and employee (CPF transition)" },
      { label: "Schedule", value: "initial or work-study – 1 week at the training center/2 week at the company" },
      { label: "Duration", value: "1 year – 518 hours" },
    ],
    additionalInfo: "Training accessible through VAE (validation of acquired experience)",
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

  const advantages = [
    { icon: CheckCircle2, text: "100% tourism expertise since 1991", isDarkRed: false },
    { icon: Search, text: "support in finding work-study programs or internships", isDarkRed: true },
    { icon: PenTool, text: "exam preparation throughout the year", isDarkRed: false },
    { icon: Users, text: "workshop with real partners and real issues", isDarkRed: true },
    { icon: Briefcase, text: "real-life business cases studied in class", isDarkRed: false },
    { icon: MonitorPlay, text: "professional speakers", isDarkRed: true },
  ];

  const programYears = [
    {
      id: "year1",
      title: "Year 1 - 518 hours",
      hours: "518 hours",
      content: [
        {
          unit: "Skills Unit 1 – Developing general knowledge of tourism",
          items: [
            { label: "General knowledge", description: "Developing general knowledge that can be applied in your professional activity" },
            { label: "Start", description: "Back-to-school integration and team-building seminar" },
            { label: "Workshop", description: "Challenging professional scenarios involving concrete responses to customer needs, transforming needs into concrete solutions within a given time frame, developing adaptability, creativity, and collective intelligence in random multidisciplinary teams" },
          ]
        },
        {
          unit: "Skills Unit 2 – Managing the financial strategy of a tourism company",
          items: [
            { label: "Tourism project management", description: "Ability to manage a tourism development project for a region, event, or site or facility development" },
            { label: "Team management", description: "Mastering the basics of project team management" },
            { label: "Financial feasibility Creating a professional and financial dossier", description: "Mastering financial indicators specific to tourism and analyzing a company’s accounting performance" },
            { label: "Office automation", description: "Mastering Word & Excel and tools commonly used in business" },
          ]
        },
        {
          unit: "Skills Unit 3 – Defining and implementing the marketing and sales strategy of a tourism organization",
          items: [
            { label: "Analytical and strategic marketing", description: "Analyzing a situation and defining a marketing strategy" },
            { label: "Marketing plan", description: "Developing and implementing a marketing plan" },
            { label: "AI and tourism", description: "Integrating AI into a tourism approach" },
          ]
        },
        {
          unit: "Skills Unit 4 – Sustainable development and tourism 3.0",
          items: [
            { label: "Tourist destinations, trends, and monitoring", description: "Analyze trends, understand techniques for identifying, collecting, and analyzing information related to tourism" },
            { label: "Tourism and sustainable development", description: "Master concepts that minimize the negative impacts of tourism on the environment and local communities, while promoting positive economic and social benefits." },
            { label: "Tourism 3.0", description: "Integrate new technologies to make tourism more sustainable." },
          ]
        },
        {
          unit: "Skills Unit 5 – Preparing for professional integration",
          items: [
            { label: "Soft skills (theater workshop)", description: "Develop your elocution, learn to verbalize and communicate your needs and expectations" },
            { label: "English", description: "Prepare a satisfaction or motivation questionnaire in English for English-speaking visitors; create a regional promotion document in French and English, in paper and digital formats" },
            { label: "Spanish", description: "Prepare a satisfaction or motivation questionnaire in Spanish for Spanish-speaking visitors; create a regional promotion document in French and Spanish in paper and digital formats" },
            { label: "Qualification preparation", description: "Understand the certifier’s expectations and prepare submissions that comply with them" },
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
        "Two years of postsecondary education",
        "Sufficient French language skills to follow the program",
        "Languages: English and one other language of your choice"
      ]
    },
    intakes: {
      periodTitle: "Admissions time",
      periodText: "All year",
      intakesTitle: "Intakes",
      nextYearLabel: "Next start date",
      nextYearValue: "October 2025",
      deferredLabel: "Deferred start date",
      deferredValue: "February 2026"
    },
    processTitle: "Admission requirements",
    processSteps: [
      {
        title: "Step 1: Application",
        items: [
          { text: "Download your application form by clicking here (French only).", isLink: true, linkText: "clicking here (French only)." },
          { text: "Send your completed application by email, remembering to include all the required attachments!" },
          { text: "There is no application fee.", isItalic: true }
        ]
      },
      {
        title: "Step 2: Selection",
        items: [
          { text: "Review of your application and verification of prerequisites for the desired program: level of education and foreign languages, professional experience," },
          { text: "Individual appointment: motivational interview at the school or remotely (via video)" },
          { text: "Admissions committee review: our team will review your application as a whole" },
          { text: "Response within 48 business hours: favorable or unfavorable decision", isItalic: true }
        ]
      },
      {
        title: "Step 3: enrollment",
        items: [
          { text: "Validation of your status: Student / Job seeker / Vocational training intern / Employee" },
          { text: "Support with financing options and finding a company" }
        ]
      }
    ],
    prices: {
      title: "Prices",
      initialLabel: "Initial price:",
      initialPrice: "€7,500",
      visaNote: "*For students requiring assistance with visas (first entry into the EU) : €7,500",
      workStudyLabel: "Work-study program fee:",
      workStudyPrice: "€8,688",
      workStudyNote: "*In the work-study program, training costs are covered by the OPCO. This will be discussed with the company when the contract is signed.",
      seminarLabel: "Seminar: “The Tourism Landscape in France and Occitanie”",
      seminarPrice: "€1,050",
      seminarNote: "This module is mandatory for students from outside the European Union during their first year in France. Its cost is added to the cost of the first year of the chosen program."
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Assessment methods",
      assessmentText: "Written and oral exams.",
      downloadFrameworkLabel: "Download the validation framework (French only)",
      downloadFrameworkHref: "/assets/framework-pdf.pdf",
      certificationTitle: "Certification",
      diplomaName: "Responsable de développement touristique territorial (RDTT) – Certified bachelor's degree",
      rncpLabel: "RNCP 35706",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/35706/",
      diplomaCodeLabel: "Diploma code",
      diplomaCode: "36T33403",
      ministry: "Ministère du travail, du plein emploi et de l'insertion",
      expirationLabel: "Expiration date:",
      expirationDate: "08/02/2026",
      certificationNote: "This qualification consists of four skill sets called “certificates of professional competence” (CCP). It can be obtained by accumulating CCPs or by completing a training program.",
      equivalencesTitle: "Equivalences",
      equivalencesItems: [
        "The CCP “Supporting the marketing development of a region” in the RDTT qualification is equivalent to the CCP “Marketing a tourist establishment using a multi-channel approach” in the professional qualification “Tourist Establishment Manager.”",
        "The CCP “Ensuring the financial feasibility of a tourism initiative” of the RDTT qualification is equivalent to the CCP “Ensuring the operational management and planning investments for a tourist establishment” of the professional qualification “Tourist Establishment Manager.”"
      ]
    }
  };

  const jobsData = {
    title: "JOB OPPORTUNITIES",
    intro: "The tourism sector offers a wide range of opportunities <strong>in France and abroad</strong> for holders of a Bachelor's degree in Sustainable and Digital Tourism Development.",
    categories: [
      {
        jobs: [
          { label: "Tourism Product Manager", isDarkRed: false },
          { label: "Tourism product designer", isDarkRed: true },
          { label: "Coordinator of responsible tourism offerings", isDarkRed: false },
          { label: "B2B agency sales representative", isDarkRed: true },
          
          { label: "BtoC group sales representative", isDarkRed: true },
          { label: "Key Account Manager", isDarkRed: false },
          { label: "Sustainable Tourism Development Manager", isDarkRed: true },
          { label: "Digital Tourism Marketing Manager", isDarkRed: false },
          
          { label: "Sustainable Tourism Project Manager", isDarkRed: false },
          { label: "Tourism promotion officer", isDarkRed: true },
          { label: "Consultant in digital and sustainable strategy applied to tourism", isDarkRed: false },
          { label: "Head of Partnerships and Labels (Sustainable Tourism)", isDarkRed: true },
          
          { label: "Tourism web marketing manager", isDarkRed: true },
          { label: "Digital project manager for tourism organizations", isDarkRed: false },
          { label: "Digital communications manager for a destination", isDarkRed: true },
          { label: "Head of Innovation and Tourism 3.0", isDarkRed: false },
        ]
      }
    ]
  };

  const educationData = {
    title: "FURTHER EDUCATION",
    links: [
      { label: "Mastère Manager en Stratégies Touristiques", href: "/en/courses/mastere-tourism", flag: "FR" as const },
      { label: "Mastère Business & Tourism", href: "/en/courses/mastere-business", flag: "UK" as const },
      { label: "Mastère Hospitality Management", href: "/en/courses/mastere-hospitality", flag: "UK" as const },
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
        additionalInfo={bannerData.additionalInfo}
        logos={bannerData.logos}
      />
      
      <CourseDetailLayout 
        sections={sections}
        applyButton={{ label: "Apply (French only)", href: "/en/apply" }}
      >
        {/* Description Section */}
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>The Bachelor's degree in Sustainable and Digital Tourism Development is a three-year degree (level 6) that prepares professionals to design, promote, and manage tourism projects that integrate sustainability issues and digital tools.</p>
              <p>This comprehensive program covers a variety of topics such as the design of responsible tourism offerings, project and team management, web marketing and commercial strategy, the use of 3.0 technologies, data analysis, and the principles of sustainable tourism applied to different regions.</p>
              <p>Designed to combine technical know-how and interpersonal skills, it emphasizes professionalization through concrete projects, practical workshops, role-playing exercises, and internships: students thus acquire solid field experience and develop the skills sought after in a rapidly changing sector.</p>
            </div>
          </div>

          <CourseAdvantages 
            title="The advantages of Grand Sud"
            subtitle="With over 30 years of experience in preparing students for numerous qualifications, Grand Sud School knows the keys to success for passing this Level 6 qualification."
            advantages={advantages}
          />
        </section>

        {/* Program Section */}
        <section id="programm" className="scroll-mt-32">
          <CourseProgram 
            title="PROGRAM"
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
