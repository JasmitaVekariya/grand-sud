"use client";

import CourseBanner from "@/components/courses/CourseBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import CourseAdvantages from "@/components/courses/CourseAdvantages";
import CourseProgram from "@/components/courses/CourseProgram";
import CourseAdmissions from "@/components/courses/CourseAdmissions";
import CourseValidation from "@/components/courses/CourseValidation";
import CourseJobs from "@/components/courses/CourseJobs";
import { CheckCircle2, Search, PenTool, Users, Briefcase, MonitorPlay } from "lucide-react";

export default function MastereEventPage() {
  const bannerData = {
    title: "Mastère in Event and Tourism Project Management",
    image: "/assets/Gemini_Generated_Image_ae35ae35ae35ae35-scaled.png", // Placeholder
    details: [
      { label: "Language of instruction", value: "French" },
      { label: "Level", value: "7 (bac+5)" },
      { label: "Status", value: "student, apprentice, job seeker, and employee (CPF transition)" },
      { label: "Schedule", value: "initial or work-study – 1 week at the training center/2 week at the company" },
      { label: "Duration", value: "2 years – 1,148 hours" },
    ],
    additionalInfo: "Training accessible through VAE (validation of acquired experience)",
    logos: ["/assets/logo-france-competences.png"]
  };

  const sections = [
    { id: "description", label: "DESCRIPTION" },
    { id: "programm", label: "PROGRAM" },
    { id: "admissions", label: "ADMISSIONS" },
    { id: "validation", label: "VALIDATION" },
    { id: "jobs", label: "OPPORTUNITIES" },
  ];

  const advantagesData = {
    title: "The advantages of Grand Sud",
    subtitle: "With over 30 years of experience in preparing students for numerous qualifications, Grand Sud School knows the keys to success for this Level 7 qualification.",
    advantages: [
      { icon: CheckCircle2, text: "100% tourism expertise since 1991", isDarkRed: false },
      { icon: Search, text: "support in finding work-study programs or internships", isDarkRed: true },
      { icon: PenTool, text: "mock exams to prepare for the qualification", isDarkRed: false },
      { icon: Users, text: "workshop with real partners and real issues", isDarkRed: true },
      { icon: Briefcase, text: "real-life business cases studied in class", isDarkRed: false },
      { icon: MonitorPlay, text: "professional teachers", isDarkRed: true },
    ]
  };

  const programYears = [
    {
      id: "year1",
      title: "Year 1 - 574 hours",
      hours: "574 hours",
      content: [
        {
          unit: "Develop a responsible product offering for the events and tourism sectors.",
          items: [
            { label: "", description: "Establish a strategic intelligence system by identifying key research areas—particularly regarding market-driven innovation in events and tourism, legal and regulatory compliance, and sustainable development—and by identifying reliable sources and automating data collection (specifically through the use of generative AI tools), in order to secure reliable, up-to-date, and complementary data on targeted topics for proactive trend analysis." },
            { label: "", description: "Analyze collected market intelligence—including innovations in events and tourism, regulatory and normative developments, and the behaviors and expectations of various consumer segments—by leveraging reliable and relevant data, in order to identify opportunities for integrating new formats and concepts, ensure legal, ethical, and environmental compliance, and align the product/service offering with client requirements, including the accessibility and mobility needs of people with disabilities." },
            { label: "", description: "Analyze a client’s request by exploring the context and various dimensions of their project; conducting a strategic, territorial, and cultural assessment of their market positioning; integrating both internal factors (the offering) and external environmental factors (the market, regulatory changes, consumer practices and expectations, etc.); and assessing the threats and opportunities present in their market in light of socio-economic trends and potential sources of growth and innovation, in order to identify their specific expectations, objectives, constraints, and values." },
            { label: "", description: "Design a responsible product solution for the events and tourism sectors by developing a format, editorial content, and narrative that meet the client's needs while taking their constraints into account; and by planning for the application of environmentally friendly rules and principles (e.g., accessibility, consumable recycling, waste management, use of local suppliers, short supply chains, etc.), in order to formulate a proposal that is fully aligned with their resources, aspirations, and objectives. Define the target audience for a renewed range of event or tourism products by characterizing their key motivations, aspirations, and economic capacity—based on market analyses and customer data—in the form of personas, in order to design an offering that is tailored and responsive to market expectations." },
            { label: "", description: "Establish or validate the specifications for event or tourism products by defining their technical, pricing, format, and content characteristics, while ensuring the document's completeness, consistency with strategic objectives, and overall quality, in order to guarantee optimal framing of the operational phase and the ultimate success of the offering." },
            { label: "", description: "Ensure the quality of the event or tourism product offering by recommending its alignment with relevant standards and/or quality labels, and by evaluating their added value and suitability regarding the company's strategy, corporate values, and target clientele’s expectations, in order to enhance the offering’s appeal and highlight commitments regarding inclusion and sustainable development." },
            { label: "", description: "Evaluate the feasibility and market potential of an event or tourism product offering by estimating its production and go-to-market costs—taking into account the product specifications, the company's market positioning, its strategic objectives, and prevailing market threats and opportunities—in order to provide a basis for decision-making regarding its development." },
          ]
        },
        {
          unit: "Manage the purchasing strategy for the various components of event and tourism products.",
          items: [
            { label: "", description: "Develop a purchasing strategy for the goods and services required to create event or tourism products, basing this strategy on a precise definition of the needs generated by their production and implementation, and establishing criteria and requirements that balance quality, price, delivery timelines, and CSR considerations, in order to optimize the curation of a portfolio of partners and service providers contributing to the delivery of the offering. Define the procedures for consulting potential suppliers—taking into account any legal obligations arising from the market context—in order to secure a sufficiently broad range of proposals to facilitate a competitive bidding process." },
            { label: "", description: "Identify service providers and suppliers capable of meeting the requirements associated with the production and delivery of event, tourism, and travel products, by implementing appropriate research methods and gathering targeted information regarding them, so as to possess the necessary data for an informed and objective selection." },
            { label: "", description: "Evaluate the product and service offerings of the identified providers and suppliers by verifying their reliability, the capacity of their human, technical, and financial resources, and their compliance with ethical and environmental standards." },
          ]
        }
      ]
    },
    {
      id: "year2",
      title: "Year 2 - 574 hours",
      hours: "574 hours",
      content: [
        {
          unit: "Manage the development of a portfolio of event and tourism products.",
          items: [
            { label: "", description: "Plan the execution of event and tourism products by structuring the necessary actions, defining deadlines, and coordinating stakeholders, in order to ensure the proper sequencing and timely management of operations." },
            { label: "", description: "Estimate the budget for executing event and tourism products by realistically evaluating all expenditure items and utilizing a tracking tool equipped with monitoring indicators, in order to ensure effective cost control." },
            { label: "", description: "Assemble a project team dedicated to the execution of event and tourism products by identifying the necessary skills and profiles; sizing human resources both qualitatively and quantitatively; clearly defining the roles, scope of work, and responsibilities of each team member; and establishing the organizational conditions and accommodations required to ensure the inclusion of employees with disabilities, in order to foster an optimal, complementary, and high-performing team structure." },
            { label: "", description: "Establish working methods and information-sharing protocols within a hybrid work environment (combining in-person and remote work) by defining information flows and integrating collaborative tools that facilitate the pooling of information and resources, in order to optimize project operations and execution." },
            { label: "", description: "Supervise the teams involved in the operational implementation of event and tourism products by adopting a management style that fosters cooperation, mutual support, and employee autonomy, in order to maintain team cohesion and motivation while mitigating the psychosocial risks associated with remote work environments." },
            { label: "", description: "Develop and monitor management tools for the implementation of event and tourism products by defining control indicators to track progress, in order to ensure compliance with—and the achievement of—established objectives regarding deadlines, costs, and quality. Manage the budget for the implementation of event and tourism products by continuously monitoring resource allocation and, where necessary, making trade-offs to address unforeseen circumstances, thereby ensuring the project’s economic viability and profitability." },
            { label: "", description: "Verify that the implementation conditions for event and tourism products comply with standards regarding logistics, accessibility, safety, and sustainability; this involves ensuring adherence to the specifications outlined in the project brief, as well as to all legal and regulatory obligations, and anticipating potential deviations to guarantee the smooth execution of operations." },
          ]
        },
        {
          unit: "Develop the commercial strategy for a portfolio of event and tourism products.",
          items: [
            { label: "", description: "Formulate a marketing strategy for a range of event and tourism products, ensuring alignment with company policy while taking market specificities into account; this involves leveraging analytical, digital, and financial tools, and engaging both internal and external stakeholders to ensure the activity's viability and growth." },
            { label: "", description: "Select specific business development initiatives to be implemented by assessing their technical and financial feasibility and estimating their return on investment; the objective is to structure a budgeted and scheduled action plan for presentation to senior management for validation." },
            { label: "", description: "Identify and mobilize key channels and levers for disseminating information—across \"phygital\" (physical-digital) platforms—regarding the event, tourism, and travel product portfolio; this involves evaluating which channels are most appropriate and suitably scaled given the target audience and available budget, thereby ensuring comprehensive coverage that optimizes the product's reputation and market impact." },
            { label: "", description: "Define the communication strategy associated with the market launch of the event and tourism product portfolio by determining the specific channels, formats, and types of content to be utilized, thereby contributing to the optimization of its commercial development. Structure a multichannel customer feedback system for tourism and event offerings—defining the specific information to be gathered, along with the associated methods and tools—in order to continuously monitor customer satisfaction levels." },
            { label: "", description: "Evaluate the economic performance and impact of tourism and event product portfolios by establishing and utilizing reliable, objective, and digitized metrics, thereby verifying their profitability and the achievement of commercial objectives." },
            { label: "", description: "Implement a tailored pricing strategy—informed by the continuous analysis of lifecycle metrics for tourism and event products—in order to optimize their market appeal, sales volume, and profitability." },
          ]
        }
      ]
    }
  ];

  const admissionsData = {
    title: "ADMISSIONS",
    prerequisite: {
      title: "Prerequisites",
      items: [
        "Bac+3 (or Bac+4 for admission to the second year of the Master's program)",
        "A sufficient level of French to enable you to follow the course",
        "Languages: English and another language of your choice"
      ]
    },
    intakes: {
      periodTitle: "Admission period",
      periodText: "All year round",
      intakesTitle: "Intakes",
      nextYearLabel: "Next start date:",
      nextYearValue: "October 2025",
      deferredLabel: "Deferred start date:",
      deferredValue: "February 2026"
    },
    processTitle: "Admission requirements",
    processSteps: [
      {
        title: "Step 1: Application submission",
        items: [
          { text: "Download the application form." },
          { text: "Send your completed application by email, remembering to include all the required attachments!" },
          { text: "There is no application fee.", isItalic: true }
        ]
      },
      {
        title: "Step 2: Selection",
        items: [
          { text: "Review of your application and verification of prerequisites for the desired program: level of education and foreign languages, professional experience," },
          { text: "Individual appointment: motivational interview at the school or remotely (via video)" },
          { text: "Admissions committee review: our team will review your application as a whole." },
          { text: "Response within 48 business hours: favorable or unfavorable decision." }
        ]
      },
      {
        title: "Step 3: enrollment",
        items: [
          { text: "Validation of your status: Student / Job Seeker / Vocational Training Intern / Employee." },
          { text: "Support with financing options and finding a company." }
        ]
      }
    ],
    prices: {
      title: "Prices",
      initialLabel: "Initial fee:",
      initialPrice: "Year 1: €7,950\nYear 2: €7,950",
      visaNote: "*For students requiring assistance with visas (first entry into the EU) :\nYear 1: €8,500\nYear 2: €8,500",
      workStudyLabel: "Work-study program fees:",
      workStudyPrice: "Year 1: €8,870\nYear 2: €8,870",
      workStudyNote: "In the work-study program, training costs are covered by the OPCO. This will be discussed with the company when the contract is signed.",
      seminarLabel: "Seminar: \"The Tourism Landscape in France and Occitanie\"",
      seminarPrice: "€1,050",
      seminarNote: "This module is mandatory for students from outside the European Union during their first year in France. Its cost is added to the total cost of the first year of the chosen program."
    }
  };

  const validationData = {
    title: "VALIDATION",
    details: {
      assessmentTitle: "Assessment methods",
      assessmentText: "Written and oral exams according to FEDE standards.",
      downloadFrameworkLabel: "Download the reference framework (French only)",
      downloadFrameworkHref: "/assets/framework-pdf.pdf",
      certificationTitle: "Certification",
      diplomaName: "Mastère Degree – Titre de niveau bac +5,",
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
    title: "OPPORTUNITIES",
    intro: "The tourism sector offers a wide range of opportunities in France and abroad for holders of the Master's Degree in Tourism Strategy Management.",
    categories: [
      {
        jobs: [
          { label: "EVENT PROJECT MANAGER", isDarkRed: false },
          { label: "EVENT MANAGER", isDarkRed: true },
          { label: "TRAVEL MANAGER", isDarkRed: false },
          { label: "SALES MANAGER", isDarkRed: true },
          { label: "KEY ACCOUNT MANAGER", isDarkRed: true },
          { label: "ACCOUNT MANAGER", isDarkRed: false },
          { label: "TOURISM PROJECT MANAGER (CDT, CRT)", isDarkRed: true },
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
        applyButton={{ label: "Apply (French only)", href: "/fr/candidater" }}
      >
        {/* Description Section */}
        <section id="description" className="scroll-mt-32 space-y-16">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight">
              DESCRIPTION
            </h2>
            <div className="space-y-6 text-[16px] text-black leading-relaxed font-medium max-w-4xl">
              <p>The Master's degree is a five-year post-secondary program (RNCP Level 7) that provides a solid foundation and is directly applicable in the workplace. This program prepares students to understand specific needs, propose tailored solutions, and effectively manage projects from conception through implementation. It emphasizes a highly practical approach, focusing on analytical, organizational, and project management skills, while developing essential qualities such as communication, independence, and teamwork. Through learning methods based on real-world cases and role-playing exercises, participants acquire professional reflexes that can be quickly applied. Upon completion of the program, they are capable of advancing to leadership roles in diverse environments, with a certification that enhances their professional profile and facilitates their entry into the workforce or career advancement.</p>
            </div>
          </div>
          <CourseAdvantages {...advantagesData} />
        </section>

        {/* Program Section */}
        <section id="programm" className="scroll-mt-32">
          <CourseProgram 
            title="PROGRAM"
            years={programYears}
            downloadButton={{ label: "Download the educational program (French only)", href: "/assets/program-pdf.pdf" }}
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
