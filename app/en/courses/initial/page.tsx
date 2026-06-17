"use client";

import { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  Clock,
  UserCheck,
  Bed,
  Banknote,
  Umbrella,
  Heart,
  CreditCard,
  Plus,
  CalendarCheck,
  FileEdit,
} from "lucide-react";

export default function InitialTrainingPageEN() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const sections = [
    { id: "accessible", label: "INITIAL TRAINING COURSES AVAILABLE" },
    { id: "possible-internships", label: "THE DIFFERENT INTERNSHIPS AVAILABLE" },
    { id: "rights-duties", label: "RIGHTS AND RESPONSIBILITIES OF THE INTERN" },
    { id: "internship-program", label: "GRAND SUD INTERNSHIP PROGRAM" },
  ];

  return (
    <main className="bg-white">
      <PageBanner
        title={
          <>
            Complete a course as an<br />
            initial training
          </>
        }
        image="/assets/pexels-danxavier-1239291-scaled.jpg"
      />

      <CourseDetailLayout sections={sections}>
        {/* Section 1: Initial training courses available */}
        <section id="accessible" className="scroll-mt-32 space-y-12">
          <div className="space-y-6">
            <p className="text-[15px] font-bold text-black leading-relaxed">
              Initial training is a suitable solution for those who prefer a more academic pace than work-study programs. This training pace allows students to learn theory and then apply it in a company, immersing themselves in the professional culture.
            </p>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              Those who choose initial training have the status of students and interns during their time in the company.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              INITIAL TRAINING COURSES AVAILABLE
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>
                From the BTS to the Mastère&apos;s degree, all our courses are available as initial training, whether through a work-study program or an end-of-year internship.
              </p>
              <p>
                Signing an internship agreement allows you to apply the skills and theoretical knowledge you have learned in class.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Different internships */}
        <section id="possible-internships" className="scroll-mt-32 space-y-12">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              THE DIFFERENT INTERNSHIPS AVAILABLE
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>Your year can take two forms, depending on the program and your personal choices:</p>
              <ul className="list-disc list-outside pl-5 space-y-2 font-bold text-black">
                <li>work-study internship</li>
                <li>end-of-year internship</li>
              </ul>
              <p className="italic">
                To date, the vast majority of internship agreements signed are for end-of-year internships.
              </p>
              <p>
                Grand Sud Formation will provide you with the necessary information to set up your internship agreement with your host company (educational program, course schedule, reference of the qualification sought, etc.) and will assist you with the various procedures.
              </p>
            </div>
          </div>

          {/* Accordion with Background Image */}
          <div className="relative min-h-[500px] flex items-center justify-center py-20 overflow-hidden rounded-sm">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/assets/pexels-pixabay-262978-scaled.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 w-full max-w-4xl px-6 space-y-1">
              <div className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion("work-study")}
                  className="w-full bg-[#E54841] text-white px-6 h-[50px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                >
                  <div className="flex items-center gap-3">
                    {openAccordion === "work-study" ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    <span className="text-[18px] font-bold tracking-wide">Work-study internship</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === "work-study" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white/95 overflow-hidden"
                    >
                      <div className="p-8 text-[15px] text-gray-800 leading-relaxed space-y-4">
                        <p>
                          For work-study programs (so some of our French courses), students can choose to complete their internship according to the work-study schedule.
                        </p>
                        <p>
                          They then alternate between periods of training and periods in the workplace, but remain students and interns, rather than employees as is the case with work-study students.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion("end-of-year")}
                  className="w-full bg-[#E54841] text-white px-6 h-[50px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                >
                  <div className="flex items-center gap-3">
                    {openAccordion === "end-of-year" ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    <span className="text-[18px] font-bold tracking-wide">End-of-year internship</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === "end-of-year" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white/95 overflow-hidden"
                    >
                      <div className="p-8 text-[15px] text-gray-800 leading-relaxed space-y-4">
                        <p>
                          Suitable for those seeking a long-term immersion in the business world, the end-of-year internship generally takes place at the end of the academic year, between May and October (depending on the program).
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Rights and responsibilities */}
        <section id="rights-duties" className="scroll-mt-32 space-y-12">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              RIGHTS AND RESPONSIBILITIES OF THE INTERN
            </h2>

            <div className="relative h-[250px] rounded-sm overflow-hidden mb-12">
              <img
                src="/assets/pexels-asphotograpy-518244-scaled.jpg"
                alt="Rights and responsibilities of the intern"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center p-8">
                <div className="max-w-2xl text-white space-y-4">
                  <p className="text-[15px] leading-relaxed">
                    While completing an internship is an asset for a student&apos;s career, legislation imposes certain requirements.
                  </p>
                  <p className="font-bold text-[18px]">
                    It is important to be aware of your rights and responsibilities before committing to an internship.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col border border-gray-100 rounded-sm overflow-hidden">
              <div className="bg-[#8B2B23] p-10 text-white space-y-12">
                <h3 className="text-[42px] font-bold border-b border-white/20 pb-4">Rights</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div className="space-y-4">
                    <Clock size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Duration of the internship</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      The internship can only last a maximum of 6 months in the same company for each year of study (i.e. 924 hours).
                    </p>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      The duration of the internship is calculated based on the time actually spent in the company. One day of attendance corresponds to 7 hours, whether consecutive or not, and one month of attendance is reached after 22 days in the company.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <UserCheck size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Working hours</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">Interns may not work more than 7 hours per day.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">Working hours are therefore capped at 35 hours per week.</p>
                  </div>

                  <div className="space-y-4">
                    <Bed size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Rest time</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      The weekly rest period is a minimum of 24 consecutive hours, in addition to the daily rest period, which is a minimum of 11 consecutive hours. The daily break is a minimum of 20 minutes for every 6 consecutive hours of work.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Banknote size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Compensation</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      A minimum stipend is paid to the intern if the internship lasts more than two consecutive months (equivalent to 44 days at seven hours per day, or 309 hours) during the same school or university year.
                    </p>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      Below these thresholds, the host organization is not required to pay a stipend.
                    </p>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      If the hourly amount of the stipend is less than €4.35, the intern is exempt from social security contributions.
                    </p>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      The stipend can be paid in two different ways: based on the actual number of hours worked per month or by smoothing out the total number of hours worked during the internship per month.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-8">
                  <div className="space-y-4">
                    <Umbrella size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Vacation</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      When the internship lasts more than two months, the internship agreement must provide for the possibility of taking leave and authorizations for absence.
                    </p>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      If the internship lasts two months or less, taking leave is not mandatory.
                    </p>
                    <p className="text-[14px] opacity-90 leading-relaxed">Payment for leave is optional.</p>
                  </div>

                  <div className="space-y-4">
                    <Heart size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Health</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      The student continues to benefit from their personal health insurance.
                    </p>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      As they are not employees, they do not benefit from the social security coverage granted to employees.
                    </p>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      However, as the internship agreement is tripartite and involves their school, they benefit from the school&apos;s support on a daily basis throughout the internship.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <CreditCard size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Coverage of expenses</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      Interns have access to the company restaurant or meal vouchers, as well as social and cultural activities organized by the Social and Economic Committee (CSE).
                    </p>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      Interns are entitled to reimbursement of a portion of their public transportation costs under the same conditions as employees (50% of the cost of a monthly pass).
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Plus size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Assistance for every situation</h4>
                  </div>
                </div>
              </div>

              <div className="bg-[#333333] p-10 text-white space-y-12">
                <h3 className="text-[42px] font-bold border-b border-white/20 pb-4">Responsibilities</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="space-y-4">
                    <CalendarCheck size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Work, training, and attendance</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      The intern must be enrolled in an educational institution and perform the tasks assigned by their company.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <FileEdit size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Compliance with rules</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      Interns must comply with the rules of their host company and training center (internal regulations) as well as hygiene rules and safety instructions.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Briefcase size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Professional conduct</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      To develop a positive image and prove their ability to fit into the company, apprentices must adhere to the work schedule.
                    </p>
                    <p className="text-[14px] opacity-90 leading-relaxed">
                      In the event of absence, interns must provide the company and the school with supporting documentation, otherwise the absence will be considered unjustified.
                    </p>
                    <p className="text-[14px] opacity-90 leading-relaxed font-bold">
                      Interns must be loyal and act in good faith toward their employer and their school.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Internship program */}
        <section id="internship-program" className="scroll-mt-32 space-y-12">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            GRAND SUD INTERNSHIP PROGRAM
          </h2>

          <div className="space-y-10 text-[15px] text-gray-700 leading-relaxed">
            <p>
              Thanks to a partner specializing in the sector, we can offer an internship in catering lasting 3 to 6 months, with negotiated benefits:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">Allowance:</span> €650 per month
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">Accommodation:</span> provided in a shared room
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">Meals:</span> provided on working days (usually lunch and dinner)
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">Transport:</span> provided to the nearest train station or airport
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">Reimbursement:</span> 100% if visa is refused (upon presentation of the refusal and after verification)
              </li>
            </ul>

            <div className="space-y-4">
              <p className="font-bold text-black">Required profile:</p>
              <ul className="space-y-2 list-disc list-outside pl-5">
                <li>Minimum 6 months&apos; experience in cooking or catering</li>
                <li>Level of English B2 required with very good communication skills</li>
                <li>
                  French is not mandatory, except for a position at the Front Desk, where perfect fluency is required
                </li>
              </ul>
            </div>

            <p>
              <span className="font-bold text-black">Eligibility:</span> any student from one of our campuses enrolled in one of our Hospitality Management programs, aged 18 to 28.
            </p>

            <p>
              This opportunity allows you to develop your skills in an international environment, while benefiting from support and practical advantages for your stay.
            </p>

            <p className="italic font-bold">Contact your campus team to find out more!</p>
          </div>
        </section>
      </CourseDetailLayout>
    </main>
  );
}
