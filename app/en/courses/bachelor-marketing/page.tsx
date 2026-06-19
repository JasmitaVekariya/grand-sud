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

const mod = (label: string, topics: string[]) => ({
  label,
  description: topics.join(", "),
});

const keySkills = [
  {
    title: "Market Analysis",
    items: [
      "Conduct market research",
      "Analyze customer behavior",
      "Perform competitive benchmarking",
      "Develop customer personas",
      "Conduct SWOT analysis",
    ],
  },
  {
    title: "Marketing Strategy",
    items: [
      "Design marketing plans",
      "Develop communication strategies",
      "Allocate budgets and resources",
      "Measure marketing performance",
    ],
  },
  {
    title: "Digital Marketing",
    items: ["SEO & SEM optimization", "Social media management", "Content marketing", "Marketing automation", "Web analytics"],
  },
  {
    title: "Communication & Branding",
    items: ["Content creation", "Graphic design", "Multimedia production", "Brand management", "Public relations"],
  },
  {
    title: "Customer Relationship Management",
    items: ["CRM implementation", "Customer engagement strategies", "Lead nurturing", "Community management"],
  },
  {
    title: "Business Development",
    items: ["Sales support", "Business growth strategies", "Partnership development", "Customer acquisition"],
  },
  {
    title: "Project Management",
    items: ["Campaign planning", "Team coordination", "Performance monitoring", "Continuous improvement processes"],
  },
];

export default function BachelorMarketingPage() {
  const bannerData = {
    title: "BACHELOR IN BUSINESS MARKETING AND COMMUNICATION",
    image: "/assets/Gemini_Generated_Image_hromqqhromqqhrom-e1756710798902.png",
    details: [
      { label: "LANGUAGE OF INSTRUCTION", value: "English" },
      { label: "LEVEL", value: "6 (bac+3)" },
      { label: "RNCP", value: "RNCP42050" },
      { label: "STATUS", value: "student" },
      { label: "PACE", value: "initial" },
      { label: "DURATION", value: "3 years" },
    ],
    logos: ["/assets/logo-france-competences.png"],
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
    subtitle:
      "With nearly 35 years of experience in education, Grand Sud School knows the keys to success in providing its students with what they need to succeed.",
    advantages: [
      { icon: CheckCircle2, text: "100% business and tourism expertise since 1991", isDarkRed: false },
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
      title: "Year 1 – Foundations of Marketing, Business & Communication",
      hours: "",
      content: [
        {
          unit: "Semester 1",
          items: [
            mod("Core modules", [
              "Introduction to Marketing",
              "Principles of Management",
              "Business Communication Skills",
              "Digital Literacy & Office Applications",
              "Consumer Behavior Fundamentals",
              "Economics for Business",
              "Academic Writing & Presentation Skills",
              "Professional English",
            ]),
          ],
        },
        {
          unit: "Semester 2",
          items: [
            mod("Core modules", [
              "Fundamentals of Communication",
              "Introduction to Digital Marketing",
              "Market Research Techniques",
              "Social Media Fundamentals",
              "Business Statistics",
              "Graphic Design Basics",
              "Introduction to Customer Relationship Management (CRM)",
              "Personal Development & Employability Skills",
            ]),
          ],
        },
        {
          unit: "Practical Projects",
          items: [
            mod("Applied projects", [
              "Market Observation Project",
              "Social Media Campaign Creation",
              "Communication Strategy Workshop",
              "Business Presentation Project",
            ]),
          ],
        },
        {
          unit: "Internship",
          items: [
            mod("Professional experience", [
              "8-week professional internship or equivalent work-based learning experience",
            ]),
          ],
        },
      ],
    },
    {
      id: "year2",
      title: "Year 2 – Digital Marketing, Content Creation & Customer Engagement",
      hours: "",
      content: [
        {
          unit: "Semester 3",
          items: [
            mod("Core modules", [
              "Marketing Strategy",
              "Digital Marketing & Analytics",
              "Content Marketing",
              "Graphic Design & Visual Communication",
              "Branding & Corporate Identity",
              "Customer Experience Management",
              "Web Design & CMS Fundamentals",
              "Data Analysis for Marketing",
            ]),
          ],
        },
        {
          unit: "Semester 4",
          items: [
            mod("Core modules", [
              "Search Engine Optimization (SEO)",
              "Search Engine Marketing (SEM)",
              "Social Media Marketing",
              "Multimedia Content Production",
              "Community Management",
              "CRM & Marketing Automation",
              "E-commerce Fundamentals",
              "Public Relations & Corporate Communication",
            ]),
          ],
        },
        {
          unit: "Practical Projects",
          items: [
            mod("Applied projects", [
              "Website Development Project",
              "Brand Development Project",
              "Digital Marketing Campaign",
              "Community Management Project",
            ]),
          ],
        },
        {
          unit: "Internship",
          items: [
            mod("Professional experience", [
              "8-week professional internship focused on marketing, communication, sales, or digital business",
            ]),
          ],
        },
      ],
    },
    {
      id: "year3",
      title: "Year 3 – Strategic Marketing, Business Development & Leadership",
      hours: "",
      content: [
        {
          unit: "Semester 5 – Strategic Marketing & Communication",
          items: [
            mod("Core modules", [
              "Strategic Marketing Planning",
              "Competitive Analysis & Benchmarking",
              "Marketing Intelligence & Market Trends",
              "Business Development Techniques",
              "Sales Enablement & Commercial Support",
              "Customer Journey Optimization",
              "Project Management",
              "Sustainable & Responsible Marketing",
            ]),
          ],
        },
        {
          unit: "Semester 6 – Performance & Innovation",
          items: [
            mod("Core modules", [
              "Advanced Digital Marketing",
              "Growth Marketing & Lead Generation",
              "Marketing Performance Measurement",
              "Marketing Automation & AI Applications",
              "Event Management & Experiential Marketing",
              "Innovation & Entrepreneurship",
              "Risk Management in Marketing Projects",
            ]),
          ],
        },
        {
          unit: "Final Capstone Project",
          items: [
            mod("Applied projects", [
              "Strategic Marketing Plan",
              "Business Development Project",
              "Multichannel Communication Campaign",
              "Final Consulting Project for a Company",
            ]),
          ],
        },
        {
          unit: "Internship / Apprenticeship",
          items: [
            mod("Professional experience", [
              "Minimum 8-week professional experience in marketing, communication, sales, business development, or related fields",
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
        "High school diploma (Bac or equivalent)",
        "A sufficient level of English to follow the course (minimum B2), demonstrated by official results from an English test or equivalent (TOEIC, BULATS, TOEFL, IELTS, CAMBRIDGE, etc.), except for native English speakers or candidates who have studied for at least two years in a program taught in English",
        "Good academic level and motivation for marketing and communication careers",
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
      initialLabel: "Per year: €12,500",
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
      assessmentText: "Individual assignments, group projects, case study analysis, presentations, examinations, internship reports",
      certificationTitle: "Certification",
      diplomaName: "Bachelor's degree – Level 6 professional qualification",
      rncpLabel: "RNCP42050",
      rncpLink: "https://www.francecompetences.fr/recherche/rncp/42050/",
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
          { label: "Marketing Manager", isDarkRed: false },
          { label: "Digital Marketing Specialist", isDarkRed: true },
          { label: "Social Media Manager", isDarkRed: false },
          { label: "Content Marketing Manager", isDarkRed: true },
          { label: "Community Manager", isDarkRed: false },
          { label: "Brand Manager", isDarkRed: true },
          { label: "Communication Manager", isDarkRed: false },
          { label: "CRM & Customer Engagement Manager", isDarkRed: true },
          { label: "Business Development Executive", isDarkRed: false },
          { label: "Marketing Project Manager", isDarkRed: true },
          { label: "SEO / SEM Specialist", isDarkRed: false },
          { label: "Public Relations Officer", isDarkRed: true },
        ],
      },
    ],
  };

  const furtherEducationData = {
    title: "FURTHER EDUCATION",
    links: [
      { label: "Mastere in Business Marketing and Communication", href: "/en/courses/mastere-marketing", flag: "UK" as const },
      { label: "Mastère Business & Tourism", href: "/en/courses/mastere-business", flag: "UK" as const },
      { label: "In general, all level 7 titles", href: "" },
    ],
    jobs: [],
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

      <CourseDetailLayout sections={sections} applyButton={{ label: "Apply", href: "/en/apply" }}>
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>
                This Bachelor in Business Marketing and Communication provides a strong foundation in business, communication, digital technologies, and marketing principles, preparing students for careers in marketing, communication, and digital business.
              </p>
              <p>
                Over three years, students progress from marketing fundamentals to advanced digital skills, strategic planning, and business development through practical projects and professional internships each year.
              </p>
              <p>
                Graduates obtain a level 6 professional qualification (RNCP42050) enabling them to access marketing, communication, and commercial roles in France and internationally.
              </p>
              <div className="space-y-6 pt-2">
                <h3 className="text-[18px] font-bold uppercase tracking-wide text-primary-red">Key skills developed</h3>
                <p>Upon graduation, students will be able to:</p>
                {keySkills.map((group) => (
                  <div key={group.title} className="space-y-2">
                    <h4 className="font-bold text-black">{group.title}</h4>
                    <ul className="list-disc list-outside pl-5 space-y-1">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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

        <section id="further-education" className="scroll-mt-32">
          <CourseFurtherEducation {...furtherEducationData} />
        </section>
      </CourseDetailLayout>
    </main>
  );
}
