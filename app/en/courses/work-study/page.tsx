"use client";

import { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function WorkStudyPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  const sections = [
    { id: "available", label: "WORK-STUDY PROGRAMS AVAILABLE" },
    { id: "contracts", label: "THE DIFFERENT WORK-STUDY CONTRACTS" },
  ];

  return (
    <main className="bg-white">
      <PageBanner 
        title="Complete your course with a work-study training program" 
        image="/assets/pexels-olly-3769021-scaled.jpg" 
      />

      <CourseDetailLayout sections={sections}>
        {/* Section 1: Available Programs */}
        <section id="available" className="scroll-mt-32 space-y-12">
          <div className="space-y-6">
            <p className="text-[15px] font-bold text-black leading-relaxed">
              Note: this page is for informational purposes only for English-speaking students; only some of our French-language programs are available as work-study programs.
            </p>
            <p className="text-[18px] font-bold text-black leading-relaxed">
              Work-study programs are a real bridge to employment and professional integration.
            </p>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              This training program allows students to combine theoretical learning with practical experience in a company, enabling them to prepare for a career and immerse themselves in the professional world. With employee status and a regulated framework, work-study students can finance their studies while enjoying many benefits.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              WORK-STUDY PROGRAMS AVAILABLE
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>From BTS to Mastère's degrees, our French-speaking students combine periods on campus with periods off campus.</p>
              <p>Signing a work-study contract will allow you to combine:</p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>theoretical skills in the classroom (general, professional, or technological education),</li>
                <li>practical skills within a company,</li>
                <li>partial or total participation in the financing of your training.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Different Contracts */}
        <section id="contracts" className="scroll-mt-32 space-y-12">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
              THE DIFFERENT WORK-STUDY CONTRACTS
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>Your year can take two forms:</p>
              <ul className="list-disc list-outside pl-5 space-y-2 font-bold text-black">
                <li>work-study program through a professional training contract</li>
                <li>work-study program through an apprenticeship contract</li>
              </ul>
              <p className="italic">To date, the vast majority of work-study contracts are signed through an apprenticeship contract.</p>
              <p>Grand Sud Formation will provide you with the necessary information to set up your contract with your host company (educational program, course schedule, reference of the qualification sought, etc.) and will assist you with the various procedures.</p>
            </div>
          </div>

          {/* Accordion with Background Image */}
          <div className="relative min-h-[600px] flex items-center justify-center py-20 overflow-hidden rounded-sm">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/assets/pexels-pixabay-262978-scaled.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Accordions */}
            <div className="relative z-10 w-full max-w-4xl px-6 space-y-1">
              {/* Professional Training Contract */}
              <div className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion("professional")}
                  className="w-full bg-[#E54841] text-white px-6 h-[50px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                >
                  <div className="flex items-center gap-3">
                    {openAccordion === "professional" ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    <span className="text-[18px] font-bold tracking-wide">Professional training contract</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === "professional" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-gray-50/95 overflow-hidden"
                    >
                      <div className="p-8 text-[14px] text-gray-800 leading-relaxed space-y-6">
                        <p>A professional training contract is a work-study contract between an employer and an employee who meets certain criteria. It can be signed with any type of private employer subject to continuing professional training funding, except for private individuals who are employers. It can be signed as a fixed-term contract (for a minimum of 6 months and a maximum of 24 months) or as a permanent contract. To help them develop their skills, employees receive support from a mentor.</p>
                        
                        <div className="space-y-4">
                          <p className="font-bold">The professional training contract aims to obtain a qualification or diploma corresponding to a qualification:</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li><strong>registered in the National Directory of Professional Certifications (RNCP)</strong> (this is the case for training courses provided by Grand Sud Formation),</li>
                            <li>or recognized in the classifications of a national collective agreement for the sector,</li>
                            <li>or appearing on the list entitling the holder to a certificate of professional qualification.</li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold">It is intended for:</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>young people aged 16 to 25 (26 years old minus one day),</li>
                            <li>job seekers aged 26 and over,</li>
                            <li>recipients of RSA income support,</li>
                            <li>recipients of the specific solidarity allowance (ASS),</li>
                            <li>recipients of the adult disability allowance (AAH),</li>
                            <li>people who have benefited from a single integration contract (CUI).</li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Public employers are not affected, i.e.:</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>the State,</li>
                            <li>local authorities,</li>
                            <li>public administrative establishments (EPA), such as hospitals or high schools.</li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Working conditions and remuneration</p>
                          <p>Holders of professional training contracts are full-fledged employees. As such, they are subject to the same laws, regulations, and collective agreements as other employees, insofar as these provisions are not incompatible with the requirements of their training. Their working hours are the same as those of other employees in the company. Please note that training time is included in working hours.</p>
                          <p>During the term of the contract, the work-study employee receives remuneration, the amount of which varies according to:</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>their age,</li>
                            <li>their initial level of training,</li>
                            <li>the collective agreement applied in the host company.</li>
                          </ul>
                          <p>This remuneration may not be less than the amounts indicated <a href="https://www.service-public.fr/particuliers/vosdroits/F15478" target="_blank" rel="noopener noreferrer" className="text-primary-red underline">on the government website</a>.</p>
                          <p>Collective or contractual provisions may provide for more favorable remuneration for the employee.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Probationary period</p>
                          <p>For fixed-term contracts of at least six months, the probationary period lasts a maximum of one month.</p>
                          <p>For open-ended professional training contracts, the length of the probationary period depends on the classification of the position in the collective agreement.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Coverage of training costs and procedures to be followed</p>
                          <p>Regardless of the type of contract (fixed-term or permanent), it must be in writing and signed by both the employer and the employee (<strong>cerfa No. 12434</strong>). The employer must send the request for coverage of the contract to the skills operator (OPCO) to which they contribute <strong>no later than 5 days after the start of the contract</strong>. However, employers are advised to submit the application before the start of the contract to ensure that the OPCO approves it and covers the training costs. The OPCO has 20 days to object to the contract and cancel it if it considers that it contains provisions that are illegal or do not comply with the collective agreement.</p>
                          <p>Within the maximum limit of 24 months, the professional training contract:</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>may begin in the company up to 2 months before the first class at the training center</li>
                            <li>may end 1 month after the exams to validate the targeted qualification.</li>
                          </ul>
                          <p>Regarding the contract start dates, OPCOs generally allow for two months of flexibility, which can be spread out before the start of the school year and after the exams (if the contract begins two months before the first class, it must therefore end on the date of the final exams).</p>
                          <p>In the case of a permanent contract, the maximum duration of 24 months covers the period of professional training, i.e., from the first day at the training center to the last day of exams. At the end of this period, the contract continues under a permanent employment contract under common law.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Contract renewal</p>
                          <p>A fixed-term professional training contract may be renewed once with the same employer:</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>if the beneficiary who has obtained the targeted qualification is preparing for a higher or additional qualification,</li>
                            <li>if the beneficiary has not obtained the targeted qualification for one of the following reasons: failure to obtain the qualification, maternity or adoption, illness, accident at work, absence or inadequacy of the courses provided by the training organization.</li>
                          </ul>
                        </div>

                        <p className="font-bold text-black">The maximum €6,000 subsidy previously granted to employers who recruit work-study students no longer applies to professional training contracts concluded after April 30, 2024 (see Decree No. 2024-392 of April 27, 2024).</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Apprenticeship Contract */}
              <div className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion("apprenticeship")}
                  className="w-full bg-[#E54841] text-white px-6 h-[50px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                >
                  <div className="flex items-center gap-3">
                    {openAccordion === "apprenticeship" ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    <span className="text-[18px] font-bold tracking-wide">Apprenticeship contract</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === "apprenticeship" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-gray-50/95 overflow-hidden"
                    >
                      <div className="p-8 text-[14px] text-gray-800 leading-relaxed space-y-6">
                        <p>An apprenticeship contract is a written fixed-term (CDD) or permanent (CDI) employment contract between an employee and an employer. It allows the apprentice to follow a work-study program in a company under the supervision of a master craftsman and at an apprentice training center (CFA) for a period of 6 months to 3 years.</p>
                        <p>Unless an exception is made, <strong>the start date of the apprenticeship contract cannot be more than three months before or after the start of the training</strong> cycle that the apprentice is following. When concluded as a permanent contract, the contract begins with the apprenticeship period, which is equivalent in length to the training cycle being followed.</p>
                        
                        <div className="space-y-4">
                          <p className="font-bold text-black">The apprenticeship allows the apprentice to prepare for:</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>a secondary school vocational qualification: vocational aptitude certificate (CAP), vocational baccalaureate, vocational diploma, additional qualification,</li>
                            <li>a higher education qualification: advanced technician's certificate (BTS), university technology diploma (DUT), vocational bachelor's degrees, engineering or business school degrees, etc.</li>
                            <li><strong>a vocational qualification registered in the national register of vocational certifications (RNCP)</strong>, which includes all vocational qualifications under the jurisdiction of the Ministry of Employment.</li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <p>The minimum age is 16 and the maximum age is 30 (29 years old), but may be extended to 35 (34 years old) in the following cases:</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>the apprentice wishes to sign a new contract to obtain a higher level of qualification than that already obtained,</li>
                            <li>the apprentice's previous contract was terminated for reasons beyond their control,</li>
                            <li>the apprentice's previous contract was terminated due to temporary physical incapacity.</li>
                          </ul>
                          <p>In these cases, there must be no more than one year between the two contracts.</p>
                          <p>There is no age limit in the following cases:</p>
                          <ul className="list-disc list-outside pl-5 space-y-1">
                            <li>the apprentice is recognized as a disabled worker,</li>
                            <li>the apprentice plans to start or take over a business that requires a diploma (e.g., Acre, Nacre, or Cape individualized assistance programs),</li>
                            <li>the apprentice is registered as a high-level athlete,</li>
                            <li>the apprentice does not obtain the desired diploma or professional title. In this case, the apprenticeship may be extended for a maximum of one year with a new contract with another employer.</li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Which employers?</p>
                          <p>Any private sector company, including associations, may hire an apprentice. The employer must declare that they will take the necessary measures to organize the apprenticeship. In this regard, the employer must ensure that the company's equipment, the techniques used, the working conditions, health and safety, and the professional and teaching skills of the apprenticeship supervisor are such as to enable satisfactory training.</p>
                          <p>The non-industrial and non-commercial public sector, including the three civil services (state, local, and hospital), may also use apprenticeships.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Working conditions and remuneration</p>
                          <p>The apprentice is a full-fledged employee. As such, the laws, regulations, and collective agreement of the professional branch or company apply to them under the same conditions as to other employees. The apprentice's working hours are the same as those of other employees. The employer must allow the apprentice to attend professional theory classes. This time is included in the actual working time and remunerated as such.</p>
                          <p>During the term of the contract, <a href="https://www.service-public.fr/particuliers/vosdroits/F2918" target="_blank" rel="noopener noreferrer" className="text-primary-red underline">the apprentice receives remuneration that varies according to their age</a>. In addition, their remuneration increases with each new calendar year of the contract.</p>
                          <p>The minimum wage received by apprentices corresponds to a percentage of the SMIC (minimum wage) or SMC (minimum wage for the job) for those aged 21 and over.</p>
                          <p>Apprentices preparing for a <strong>one-year professional degree</strong> receive remuneration corresponding to a second year of contract.</p>
                          <p>The amounts may be increased if a collective agreement applicable in the company sets a higher minimum remuneration.</p>
                          <p>Deductions for benefits in kind (food or accommodation) provided for in the apprenticeship contract may be made up to a limit of 75% of the salary.</p>
                          <p>The apprentice is entitled to <a href="https://www.service-public.fr/particuliers/vosdroits/F12163" target="_blank" rel="noopener noreferrer" className="text-primary-red underline">reimbursement of their transportation costs</a> from their home to their place of work.</p>
                          <p>The conditions for overtime pay are those applicable to the staff of the company concerned.</p>
                          <p>When an apprentice enters into a new apprenticeship contract with the same employer or with a different employer, <strong>their remuneration is at least equal to that which they received during the last year of the previous contract if they have validated the qualification</strong>, except when the application of age-related remuneration is more favorable.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Probationary period</p>
                          <p>During the first 45 days (consecutive or otherwise) at the company, the contract may be terminated without cause by the employer or the apprentice.</p>
                          <p>Unilateral termination of the contract by either party during this period or termination by mutual agreement must be recorded in writing and notified to the director of the CFA.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Coverage of training costs and steps to be taken</p>
                          <p>The apprenticeship contract is concluded using a standard form signed by the employer and the apprentice (<strong>cerfa No. 10103</strong>). The employer must send the request for coverage of the contract to the skills operator (OPCO) to which they contribute <strong>no later than five days after the start of the contract</strong>. However, employers are advised to submit the application before the start of the contract to ensure that the OPCO approves it and covers the training expenses. The skills operator has 20 days to decide whether to cover the contract. If the OPCO does not respond within this period, the application is rejected.</p>
                        </div>

                        <div className="space-y-4">
                          <p className="font-bold text-black">Succession of contracts</p>
                          <p>After a fixed-term apprenticeship contract, it is possible to conclude with the same employer:</p>
                          <ul className="list-disc list-outside pl-5 space-y-2">
                            <li>another fixed-term apprenticeship contract for a different certification, at the same level or not (no time limit is required between the two contracts),</li>
                            <li>a fixed-term or permanent professional training contract.</li>
                          </ul>
                        </div>

                        <p className="font-bold text-black italic">The government is continuing its commitment to companies that recruit apprentices. As such, for all apprenticeship contracts signed, financial assistance is available, up to a maximum of €6,000 (up to €6,000 for a person with a disability).</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </CourseDetailLayout>
    </main>
  );
}
