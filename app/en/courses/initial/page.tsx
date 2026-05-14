"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  Send, 
  Leaf, 
  Hotel, 
  Users, 
  User, 
  PieChart, 
  Laptop, 
  TrendingUp, 
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
  FileEdit
} from "lucide-react";

export default function InitialTrainingPageEN() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  const sections = [
    { id: "accessible", label: "ACCESSIBLE COURSES IN INITIAL TRAINING" },
    { id: "possible-internships", label: "THE DIFFERENT POSSIBLE INTERNSHIPS" },
    { id: "rights-duties", label: "RIGHTS AND DUTIES OF THE INTERN" },
    { id: "reference-site", label: "REFERENCE SITE" },
    { id: "internship-program", label: "GRAND SUD INTERNSHIP PROGRAM" },
  ];

  const courses = [
    {
      icon: MessageSquare,
      title: "BTS Communication",
      diploma: "State Diploma - BAC+2",
      duration: "14 weeks of internship minimum per year (i.e. 28 weeks minimum in total)",
      color: "bg-[#8B2B23]",
      href: "/en/courses/bts-mco",
      flag: "🇫🇷"
    },
    {
      icon: Send,
      title: "BTS Tourism",
      diploma: "State Diploma - BAC+2",
      duration: "14 weeks of internship minimum per year (i.e. 28 weeks minimum in total)",
      color: "bg-[#333333]",
      href: "/en/courses/bts-tourism",
      flag: "🇫🇷"
    },
    {
      icon: Leaf,
      title: "BACHELOR Sustainable Tourism Development",
      diploma: "RNCP Title - BAC+3",
      duration: "14 weeks of internship minimum",
      color: "bg-[#8B2B23]",
      href: "/en/courses/bachelor-sustainable",
      flag: "🇫🇷"
    },
    {
      icon: Hotel,
      title: "BACHELOR Hospitality Management",
      diploma: "RNCP Title - BAC+3",
      duration: "14 weeks of internship minimum",
      color: "bg-[#333333]",
      href: "/en/courses/bachelor-hospitality",
      flag: "🇫🇷"
    },
    {
      icon: Users,
      title: "BACHELOR MICE Designer",
      diploma: "RNCP Title - BAC+3",
      duration: "14 weeks of internship minimum",
      color: "bg-[#8B2B23]",
      href: "/en/courses/bachelor-mice",
      flag: "🇫🇷"
    },
    {
      icon: User,
      title: "MASTERE Manager in Tourism Strategies",
      diploma: "RNCP Title - BAC+5",
      duration: "14 weeks of internship minimum per year (i.e. 28 weeks minimum in total)",
      color: "bg-[#333333]",
      href: "/en/courses/mastere-tourism",
      flag: "🇫🇷"
    },
    {
      icon: PieChart,
      title: "BACHELOR Business & Tourism",
      diploma: "RNCP Title - BAC+3",
      duration: "14 weeks of internship minimum per year (i.e. 42 weeks minimum in total)",
      color: "bg-[#333333]",
      href: "/en/courses/bachelor-business",
      flag: "🇬🇧"
    },
    {
      icon: Hotel,
      title: "BACHELOR Hospitality Management",
      diploma: "RNCP Title - BAC+3",
      duration: "14 weeks of internship minimum",
      color: "bg-[#8B2B23]",
      href: "/en/courses/bachelor-hospitality",
      flag: "🇬🇧"
    },
    {
      icon: Laptop,
      title: "BACHELOR IT & Tourism",
      diploma: "RNCP Title - BAC+3",
      duration: "14 weeks of internship minimum per year (i.e. 42 weeks minimum in total)",
      color: "bg-[#333333]",
      href: "/en/courses/bachelor-it",
      flag: "🇬🇧"
    },
    {
      icon: TrendingUp,
      title: "MASTERE Business & Tourism",
      diploma: "RNCP Title - BAC+5",
      duration: "14 weeks of internship minimum per year (i.e. 28 weeks minimum in total)",
      color: "bg-[#8B2B23]",
      href: "/en/courses/mastere-business",
      flag: "🇬🇧"
    },
    {
      icon: Briefcase,
      title: "MASTERE Hospitality Management",
      diploma: "RNCP Title - BAC+5",
      duration: "14 weeks of internship minimum per year (i.e. 28 weeks minimum in total)",
      color: "bg-[#333333]",
      href: "/en/courses/mastere-hospitality",
      flag: "🇬🇧"
    },
    {
      icon: Laptop,
      title: "MASTERE IT & Tourism",
      diploma: "RNCP Title - BAC+5",
      duration: "14 weeks of internship minimum per year (i.e. 28 weeks minimum in total)",
      color: "bg-[#8B2B23]",
      href: "/en/courses/mastere-it",
      flag: "🇬🇧"
    }
  ];

  return (
    <main className="bg-white">
      <PageBanner 
        title="Complete a course as an initial training" 
        image="/assets/pexels-danxavier-1239291-scaled.jpg" 
      />

      <CourseDetailLayout sections={sections}>
        {/* Section 1: Accessible Courses */}
        <section id="accessible" className="scroll-mt-32 space-y-12">
          <div className="space-y-6">
            <p className="text-[15px] font-bold text-black leading-relaxed">
              Initial training is a solution adapted for those wishing for a more academic pace than work-study. This training rhythm allows students to follow their theoretical learning and then apply it in a company, in order to immerse themselves in the professional culture.
            </p>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              The status of the person choosing initial training is that of a student, and a trainee during the period in the company.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              ACCESSIBLE COURSES IN INITIAL TRAINING
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>From BTS to Mastère, all our courses are accessible in initial training, whether with an alternating internship or a year-end internship.</p>
              <p>The signing of an internship agreement allows you to apply the theoretical skills and knowledge seen in class.</p>
            </div>

            {/* French Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {courses.filter(c => c.flag === "🇫🇷").map((course, index) => (
                <Link key={index} href={course.href}>
                  <div className={`${course.color} p-8 text-white flex flex-col items-center text-center space-y-6 min-h-[350px] transition-transform hover:scale-[1.02] hover:z-10 h-full cursor-pointer`}>
                    <course.icon size={48} strokeWidth={1} className="opacity-80" />
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-[14px] font-bold uppercase tracking-wider mb-2">
                        <span className="text-[18px]">{course.flag}</span>
                        {course.title.split(' ')[0]}
                      </div>
                      <h3 className="text-[18px] font-bold leading-tight uppercase">
                        {course.title.split(' ').slice(1).join(' ')}
                      </h3>
                    </div>
                    <p className="text-[13px] opacity-90">{course.diploma}</p>
                    <p className="text-[13px] font-bold pt-4 border-t border-white/20 w-full">
                      {course.duration}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* English Courses Grid - Starts from new row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {courses.filter(c => c.flag === "🇬🇧").map((course, index) => (
                <Link key={index} href={course.href}>
                  <div className={`${course.color} p-8 text-white flex flex-col items-center text-center space-y-6 min-h-[350px] transition-transform hover:scale-[1.02] hover:z-10 h-full cursor-pointer`}>
                    <course.icon size={48} strokeWidth={1} className="opacity-80" />
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-[14px] font-bold uppercase tracking-wider mb-2">
                        <span className="text-[18px]">{course.flag}</span>
                        {course.title.split(' ')[0]}
                      </div>
                      <h3 className="text-[18px] font-bold leading-tight uppercase">
                        {course.title.split(' ').slice(1).join(' ')}
                      </h3>
                    </div>
                    <p className="text-[13px] opacity-90">{course.diploma}</p>
                    <p className="text-[13px] font-bold pt-4 border-t border-white/20 w-full">
                      {course.duration}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Different internships */}
        <section id="possible-internships" className="scroll-mt-32 space-y-12">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              THE DIFFERENT POSSIBLE INTERNSHIPS
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>Your year can take 2 forms, depending on the training and your personal choices:</p>
              <ul className="list-disc list-outside pl-5 space-y-2 font-bold text-black">
                <li>alternating internship</li>
                <li>year-end internship</li>
              </ul>
              <p className="italic">To date, the vast majority of internship agreements signed are for a year-end internship.</p>
              <p>Grand Sud Formation will transmit to you the necessary elements for the implementation of your internship agreement with your host company (educational program, course schedule, reference of the targeted title, etc.) and will accompany you for the various steps.</p>
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
                  onClick={() => toggleAccordion("alternating")}
                  className="w-full bg-[#E54841] text-white px-6 h-[50px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                >
                  <div className="flex items-center gap-3">
                    {openAccordion === "alternating" ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    <span className="text-[18px] font-bold tracking-wide">Alternating internship</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === "alternating" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white/95 overflow-hidden"
                    >
                      <div className="p-8 text-[15px] text-gray-800 leading-relaxed space-y-4">
                        <p>For courses available in work-study, the student can choose to do their internship according to the work-study calendar.</p>
                        <p>It then combines periods in training and periods in the company, but remains under student and trainee status, and not salaried as is the case for an apprentice.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion("yearend")}
                  className="w-full bg-[#E54841] text-white px-6 h-[50px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                >
                  <div className="flex items-center gap-3">
                    {openAccordion === "yearend" ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    <span className="text-[18px] font-bold tracking-wide">Year-end internship</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === "yearend" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white/95 overflow-hidden"
                    >
                      <div className="p-8 text-[15px] text-gray-800 leading-relaxed space-y-4">
                        <p>Adapted to those looking for immersion for a long period in the business world, the year-end internship generally takes place at the end of the school year, between May and October (depending on the courses).</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Rights and duties */}
        <section id="rights-duties" className="scroll-mt-32 space-y-12">
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              RIGHTS AND DUTIES OF THE INTERN
            </h2>
            
            {/* Header Image for Section */}
            <div className="relative h-[250px] rounded-sm overflow-hidden mb-12">
              <img src="/assets/pexels-asphotograpy-518244-scaled.jpg" alt="Rights and Duties" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center p-8">
                <div className="max-w-2xl text-white space-y-4">
                  <p className="text-[15px] leading-relaxed">
                    If the completion of an internship is an asset for the student's career path, the law imposes a framework.
                  </p>
                  <p className="font-bold text-[18px]">
                    Rights and duties are to be known before committing!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col border border-gray-100 rounded-sm overflow-hidden">
              {/* Rights Column - Full Width */}
              <div className="bg-[#8B2B23] p-10 text-white space-y-12">
                <h3 className="text-[42px] font-bold border-b border-white/20 pb-4">Rights</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div className="space-y-4">
                    <Clock size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Internship Duration</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">The internship can last for a maximum of 6 months in the same company for each academic year (i.e., 924 hours).</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">The duration of the internship is calculated based on the actual time spent in the company. A day of presence corresponds to 7 hours, whether consecutive or not, and a month of presence is reached after 22 days in the company.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <UserCheck size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Working Time</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">The intern cannot work more than 7 hours per day.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">Working time is capped at 35 hours per week.</p>
                  </div>

                  <div className="space-y-4">
                    <Bed size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Rest Time</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">The weekly rest time is at least 24 consecutive hours, to which is added the daily rest time of at least 11 consecutive hours. The daily break time is at least 20 minutes for 6 consecutive hours of work.</p>
                  </div>

                  <div className="space-y-4">
                    <Banknote size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Allowance</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">A minimum allowance is paid to the intern if the duration of the internship is more than 2 consecutive months (i.e., the equivalent of 44 days at 7 hours per day, or 309 hours) during the same school or university year.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">Below these duration thresholds, the host organization is not required to pay an allowance.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">If the hourly amount of the allowance is less than €4.35, the intern is exempt from social security contributions.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-8">
                  <div className="space-y-4">
                    <Umbrella size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Leave</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">When the internship lasts more than 2 months, the internship agreement must provide for the possibility of taking leave and authorized absences.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">If the internship lasts at most 2 months, taking leave is not mandatory. Payment for leave is optional.</p>
                  </div>

                  <div className="space-y-4">
                    <Heart size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Social Coverage</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">The student continues to benefit from their personal health insurance, often that of their parents.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">Since they are not employees, they do not benefit from the social coverage assigned to them. However, as the internship agreement is tripartite and involves the school, they benefit from its support daily throughout the internship.</p>
                  </div>

                  <div className="space-y-4">
                    <CreditCard size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Expense Reimbursement</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">The intern has access to the company restaurant or restaurant vouchers as well as social and cultural activities provided by the social and economic committee (CSE).</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">The intern benefits from the reimbursement of part of public transport costs under the same conditions as employees (50% of the subscription cost).</p>
                  </div>

                  <div className="space-y-4">
                    <Plus size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Aids for each situation</h4>
                  </div>
                </div>
              </div>

              {/* Duties Column - Full Width Below */}
              <div className="bg-[#333333] p-10 text-white space-y-12">
                <h3 className="text-[42px] font-bold border-b border-white/20 pb-4">Duties</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="space-y-4">
                    <CalendarCheck size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Work, Training and Attendance</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">The intern must be invested in an establishment and perform the tasks entrusted by the company.</p>
                  </div>

                  <div className="space-y-4">
                    <FileEdit size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Respect of Rules</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">The intern must respect the rules of the host company and the training center (internal regulations) as well as hygiene and safety rules.</p>
                  </div>

                  <div className="space-y-4">
                    <Briefcase size={48} strokeWidth={1} className="opacity-80 p-2 bg-white/10 rounded-full w-16 h-16" />
                    <h4 className="font-bold text-[18px] uppercase tracking-wide">Professional Attitude</h4>
                    <p className="text-[14px] opacity-90 leading-relaxed">To develop a positive image and prove their ability to integrate into the company, the apprentice must respect working hours.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed">In case of absence, the intern must provide the company and the school with justification; otherwise, the absence will be unjustified.</p>
                    <p className="text-[14px] opacity-90 leading-relaxed font-bold">The intern must be loyal and in good faith with their employer and school.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Reference site */}
        <section id="reference-site" className="scroll-mt-32 space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            REFERENCE SITE
          </h2>
          <a 
            href="https://www.service-public.fr/particuliers/vosdroits/F20559" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[18px] text-black underline hover:text-primary-red transition-colors font-medium"
          >
            Internship in a professional environment
          </a>
        </section>

        {/* Section 5: Internship program */}
        <section id="internship-program" className="scroll-mt-32 space-y-12">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            GRAND SUD INTERNSHIP PROGRAM
          </h2>
          
          <div className="space-y-10 text-[15px] text-gray-700 leading-relaxed">
            <p>
              Thanks to a partner specialist in the sector, we can offer an <span className="font-bold text-black">internship in catering</span> for a duration of <span className="font-bold text-black">3 to 6 months</span>, with negotiated benefits:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">• Indemnity:</span> 650 € per month
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">• Accommodation covered</span> in a shared room
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">• Meals:</span> provided during work days (generally lunch and dinner)
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">• Transport:</span> coverage up to the nearest station or airport
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-black">• Refund:</span> 100 % if visa refused (on presentation of the refusal and after verification)
              </li>
            </ul>

            <div className="space-y-4">
              <p className="font-bold text-black">Profile sought:</p>
              <ul className="space-y-2 list-disc list-outside pl-5">
                <li>Minimum experience of <span className="font-bold text-black">6 months in kitchen or catering</span></li>
                <li><span className="font-bold text-black">English level B2</span> required with very good communication skills</li>
                <li>French is not mandatory, except for a <span className="font-bold text-black">Front Desk</span> position, where perfect mastery is necessary</li>
              </ul>
            </div>

            <p>
              <span className="font-bold text-black">Eligibility:</span> any student from one of our campuses on one of our Hospitality Management titles, aged 18 to 28.
            </p>

            <p>
              This opportunity allows you to <span className="font-bold text-black">develop your skills in an international environment</span>, while benefiting from support and practical advantages for your stay.
            </p>

            <p className="italic font-bold">Get in touch with your campus team to know the details!</p>
          </div>
        </section>
      </CourseDetailLayout>
    </main>
  );
}
