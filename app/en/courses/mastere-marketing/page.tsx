"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay, BookOpen, Globe, Handshake } from "lucide-react";

const mod = (label: string, topics: string[]) => ({
  label,
  description: topics.join(", "),
});

export default function MastereMarketingPage() {
  const bannerData = {
    title: "MASTÈRE IN BUSINESS MARKETING AND COMMUNICATION",
    image: "/assets/Gemini_Generated_Image_hromqqhromqqhrom-e1756710798902.png",
    details: [
      { label: "LANGUAGE OF INSTRUCTION", value: "English" },
      { label: "LEVEL", value: "7 (bac+5)" },
      { label: "RNCP", value: "RNCP38504" },
      { label: "STATUS", value: "student" },
      { label: "PACE", value: "initial" },
      { label: "DURATION", value: "2 years – 120 ECTS" },
    ],
    logos: ["/assets/logo-france-competences.png"],
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
    subtitle:
      "With nearly 35 years of experience in education, Grand Sud School knows the keys to success in providing its students with what they need to succeed.",
    advantages: [
      { icon: CheckCircle2, text: "100% tourism and business expertise since 1991", isDarkRed: false },
      { icon: Search, text: "support in finding an internship", isDarkRed: true },
      { icon: PenTool, text: "Two mock exam sessions per year / professional juries", isDarkRed: false },
      { icon: Users, text: "workshop with real partners and real issues", isDarkRed: true },
      { icon: Briefcase, text: "real-life business cases studied in class", isDarkRed: false },
      { icon: MonitorPlay, text: "professional speakers", isDarkRed: true },
      { icon: BookOpen, text: "a program tailored to the needs of businesses", isDarkRed: false },
      { icon: Globe, text: "an internationally oriented program", isDarkRed: true },
      { icon: Handshake, text: "students from diverse backgrounds, vectors of cultural richness", isDarkRed: false },
    ],
  };

  const programYears = [
    {
      id: "year1",
      title: "Year 1 – Foundation of Strategic Commercial Management",
      hours: "60 ECTS",
      content: [
        {
          unit: "Semester 1 (30 ECTS)",
          items: [
            mod("Module 1: Strategic Marketing & Market Intelligence", [
              "Marketing Strategy",
              "Market Research Methods",
              "Consumer Behaviour",
              "Competitive Intelligence",
              "Business Analytics",
            ]),
            mod("Module 2: Commercial Development Fundamentals", [
              "Sales Management",
              "Business Development Techniques",
              "Customer Relationship Management (CRM)",
              "Prospecting & Lead Generation",
              "Key Account Management",
            ]),
            mod("Module 3: Corporate Finance for Managers", [
              "Financial Analysis",
              "Budgeting & Forecasting",
              "Business Performance Indicators",
              "Commercial Profitability Analysis",
            ]),
            mod("Module 4: Business Communication & Professional English", [
              "Business Writing",
              "Corporate Presentations",
              "Cross-Cultural Communication",
              "Negotiation Communication",
            ]),
            mod("Module 5: Digital Transformation & Technology", [
              "Digital Business Models",
              "CRM Technologies",
              "Artificial Intelligence in Sales",
              "Data-Driven Decision Making",
            ]),
          ],
        },
        {
          unit: "Semester 2 (30 ECTS)",
          items: [
            mod("Module 6: Strategic Commercial Planning", [
              "Commercial Strategy Design",
              "Business Planning",
              "Growth Strategies",
              "International Market Expansion",
            ]),
            mod("Module 7: Advanced Sales & Negotiation", [
              "Strategic Selling",
              "Complex Negotiation Techniques",
              "B2B & B2C Sales Models",
              "Contract Negotiation",
            ]),
            mod("Module 8: Omnichannel Customer Management", [
              "Customer Journey Design",
              "Digital Customer Experience",
              "E-commerce Management",
              "Customer Retention Strategies",
            ]),
            mod("Module 9: Project Management", [
              "Agile Methodologies",
              "Commercial Project Planning",
              "Resource Management",
              "Risk Management",
            ]),
            mod("Module 10: Applied Business Development Project", [
              "Market Opportunity Analysis",
              "Commercial Strategy Report",
              "Group Consulting Project",
              "Internship I (8–12 weeks, credits included in Semester 2)",
            ]),
          ],
        },
      ],
    },
    {
      id: "year2",
      title: "Year 2 – Advanced Commercial Leadership & Strategy",
      hours: "60 ECTS",
      content: [
        {
          unit: "Semester 3 (30 ECTS)",
          items: [
            mod("Module 11: Commercial Strategy & Business Growth", [
              "Strategic Business Development",
              "Corporate Growth Models",
              "Mergers & Strategic Partnerships",
              "Innovation Management",
            ]),
            mod("Module 12: Sales Leadership & Team Management", [
              "Leadership Principles",
              "Commercial Team Management",
              "Performance Evaluation",
              "Talent Development",
            ]),
            mod("Module 13: International Business Development", [
              "Global Market Entry",
              "International Negotiation",
              "Export Management",
              "International Commercial Law",
            ]),
            mod("Module 14: Sustainable Business & CSR", [
              "ESG Strategy",
              "Sustainable Commercial Practices",
              "Ethical Business Development",
              "Responsible Leadership",
            ]),
            mod("Module 15: Advanced Data Analytics for Commercial Decisions", [
              "Predictive Analytics",
              "Sales Forecasting",
              "Business Intelligence Tools",
              "Dashboard Development",
            ]),
          ],
        },
        {
          unit: "Semester 4 (30 ECTS)",
          items: [
            mod("Module 16: Omnichannel Commercial Performance Management", [
              "KPI Management",
              "Revenue Optimization",
              "Customer Lifetime Value Analysis",
              "Commercial Auditing",
            ]),
            mod("Module 17: Entrepreneurship & Innovation", [
              "Startup Development",
              "Business Model Innovation",
              "Venture Financing",
              "Entrepreneurial Leadership",
            ]),
            mod("Module 18: Strategic Negotiation & Partnership Development", [
              "High-Level Negotiation",
              "Alliance Management",
              "Stakeholder Management",
              "Strategic Procurement",
            ]),
            mod("Module 19: Professional Development & Employability", [
              "Career Management",
              "Executive Leadership",
              "Personal Branding",
              "Interview Preparation",
            ]),
            mod("Module 20: Master's Thesis / Capstone Project", [
              "Applied Research",
              "Commercial Strategy Development",
              "Industry-Based Consultancy Project",
              "Viva Voce Defense",
              "Internship II (4–6 months, credits included in Semester 4)",
            ]),
          ],
        },
      ],
    },
  ];

  const admissionsData = {
    title: "ADMISSIONS",
    prerequisite: {
      title: "Prerequisite",
      items: [
        "Bachelor's degree (Bac+3) or equivalent",
        "A sufficient level of English to follow the course (minimum B2), demonstrated by official results from an English test or equivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE, etc.), except for native English speakers or candidates who have studied for at least two years in a program taught in English.",
        "Good academic level and motivation for commercial and marketing careers",
      ],
    },
    intakes: {
      periodTitle: "Admission period",
      periodText: "All year",
      intakesTitle: "Intakes",
      nextYearLabel: "Next start date:",
      nextYearValue: "October 6, 2025",
      deferredLabel: "Deferred start date:",
      deferredValue: "February 9, 2026",
    },
    processTitle: "Admission process",
    processSteps: [
      {
        title: "Step 1: Application",
        items: [
          { text: "Download your application form.", isLink: true, linkText: "Download your application form.", linkHref: "/en/apply" },
          { text: "Send your completed application by email, remembering to include all the required attachments!" },
          { text: "Application fee: €300, non-refundable", isItalic: true },
        ],
      },
      {
        title: "Step 2: Selection",
        items: [
          { text: "Review of your application and verification of prerequisites for the desired program." },
          { text: "Individual appointment: remote motivation interview (via video)" },
          { text: "Admissions committee review: our team will review your application as a whole" },
          { text: "Response within 48 business hours: favorable or unfavorable", isItalic: true },
        ],
      },
      {
        title: "Step 3: enrollment",
        items: [
          { text: "Signing of the education contract" },
          { text: "Support with financing options and internship searches" },
        ],
      },
    ],
    prices: {
      title: "Initial tuition fee:",
      initialLabel: "Per year: €14,500",
      initialPrice: "\nScholarships are available. Contact your admissions officer for details.",
      visaNote: "",
      workStudyLabel: "",
      workStudyPrice: "",
      workStudyNote: "",
      seminarLabel: "",
      seminarPrice: "",
      seminarNote: "",
    },
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Assessment methods",
      assessmentText:
        "Individual Assignments, Group Projects, Business Plans, Case Study Analysis, Presentations, Examinations, Internship Reports, Master's Thesis Defense",
      certificationTitle: "Certification",
      diplomaName: "",
      rncpLabel: "Mastère Degree – Titre de niveau bac +5, RNCP38504",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/38504/",
      diplomaCodeLabel: "",
      diplomaCode: "",
      ministry: "",
      expirationLabel: "",
      expirationDate: "",
    },
  };

  const jobsData = {
    title: "JOB OPPORTUNITIES",
    intro: "Graduates may work as:",
    categories: [
      {
        jobs: [
          { label: "Business Development Manager", isDarkRed: false },
          { label: "Commercial Manager", isDarkRed: true },
          { label: "Sales Director", isDarkRed: false },
          { label: "Key Account Manager", isDarkRed: true },
          { label: "International Business Manager", isDarkRed: false },
          { label: "Business Development Director", isDarkRed: true },
          { label: "Strategic Partnerships Manager", isDarkRed: false },
          { label: "Customer Success Director", isDarkRed: true },
          { label: "Commercial Excellence Manager", isDarkRed: false },
          { label: "Entrepreneur / Startup Founder", isDarkRed: true },
        ],
      },
    ],
  };

  const teachingMethods = [
    "Case Studies",
    "Business Simulations",
    "Industry Projects",
    "Consulting Missions",
    "Workshops",
    "Professional Conferences",
    "Company Visits",
  ];

  return (
    <main className="bg-white">
      <CourseBanner
        title={bannerData.title}
        image={bannerData.image}
        details={bannerData.details}
        logos={bannerData.logos}
        certificationBadge="State Certified Title"
      />

      <CourseDetailLayout sections={sections} applyButton={{ label: "Apply", href: "/en/apply" }}>
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>
                This Mastère in Business Marketing and Communication trains future commercial leaders in strategic marketing, sales development, digital transformation, and international business growth.
              </p>
              <p>
                Over two years, students build advanced skills in commercial strategy, negotiation, data-driven decision making, and omnichannel customer management through applied projects and professional internships.
              </p>
              <p>
                Graduates obtain a level 7 professional qualification (RNCP38504) enabling them to access senior commercial and marketing management positions in France and internationally.
              </p>
              <div className="space-y-3 pt-2">
                <h3 className="text-[18px] font-bold uppercase tracking-wide text-primary-red">Teaching methods</h3>
                <ul className="list-disc list-outside pl-5 space-y-1">
                  {teachingMethods.map((method) => (
                    <li key={method}>{method}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <CourseAdvantages {...advantagesData} />
        </section>

        <section id="programm" className="scroll-mt-32">
          <CourseProgram title="PROGRAM" years={programYears} />
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
