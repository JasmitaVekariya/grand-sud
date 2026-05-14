"use client";

import { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import Link from "next/link";
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Coins, 
  FileCheck, 
  Award,
  Search,
  UserCheck,
  Building2,
  Handshake,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Laptop,
  Send
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContinuingEducationPageEN() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("management-basics");

  const sections = [
    { id: "programs", label: "CONTINUING EDUCATION PROGRAMS" },
    { id: "internships", label: "INTERNSHIPS" },
    { id: "reference", label: "REFERENCE SITE" },
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  return (
    <main className="!bg-white">
      <PageBanner 
        title="Continuing Education" 
        image="/assets/pexels-fauxels-3184418-scaled.jpg" 
      />

      <CourseDetailLayout sections={sections}>
        <div className="bg-white">
          {/* Section 1: Programs */}
          <section id="programs" className="scroll-mt-32 space-y-12">
            <div className="space-y-8">
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
                CONTINUING EDUCATION PROGRAMS
              </h2>
              <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
                <p>We offer various training courses, adapted to professionals looking for continuing education:</p>
                <ul className="list-disc list-outside pl-5 space-y-2">
                  <li>intensive certification courses, allowing to improve your CV:</li>
                </ul>
              </div>

              {/* Grid for Amadeus and Travel Advisor */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100 rounded-sm overflow-hidden">
                <div className="bg-[#333333] p-12 text-white flex flex-col items-center justify-center space-y-6 min-h-[300px]">
                  <div className="border-2 border-white/40 p-4 rounded-sm">
                    <Laptop size={64} strokeWidth={1} className="opacity-90" />
                  </div>
                  <h3 className="text-[24px] font-bold uppercase tracking-widest text-center">GDS AMADEUS</h3>
                </div>
                <div className="bg-[#8B2B23] p-12 text-white flex flex-col items-center justify-center space-y-6 min-h-[300px]">
                  <Send size={64} strokeWidth={1} className="opacity-90" />
                  <h3 className="text-[24px] font-bold uppercase tracking-widest text-center">TRAVEL ADVISOR</h3>
                </div>
              </div>

              <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium pt-8">
                <ul className="list-disc list-outside pl-5 space-y-2">
                  <li>Grand Sud Executive qualifying training over 1 to 2 days, allowing to perfect skills or interpersonal skills and to apply the knowledge immediately in the company:</li>
                </ul>
              </div>

            {/* Accordions for Management Modules with Background */}
            <div className="relative rounded-sm overflow-hidden p-6 md:p-12 mt-8">
              {/* Background Image Container */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/pexels-fauxels-3184418-scaled.jpg")' }}
              />

              <div className="relative z-10 space-y-4">
              {[
                {
                  id: "management-basics",
                  title: "Management Fundamentals",
                  objectifs: [
                    "Acquire basic management tools",
                    "Adopt the appropriate posture during different highlights of daily management life",
                    "Step back and adjust practices to ensure effectiveness in managerial relationships and interpersonal communication"
                  ],
                  preRequis: "None",
                  programme: [
                    {
                      subtitle: "Becoming aware of your role as a manager:",
                      content: "company and team expectations and stakes, manager skills and soft skills, self-assessment of the ability to hold the manager role"
                    },
                    {
                      subtitle: "Adopting the right management style according to the situation:",
                      content: "identify the impact of your personality on your management style, discover and adapt to different employee profiles, unite your team through collective rituals, lay the foundations for a trust-based relationship, set and maintain team rules, prepare and lead a meeting"
                    },
                    {
                      subtitle: "Activating your employees' motivation levers:",
                      content: "understand performance motivation levers, prepare and conduct effective and motivating delegation interviews, value and encourage your employees, refocus an employee"
                    }
                  ]
                },
                {
                  id: "professional-relations",
                  title: "Optimizing Professional Relationships",
                  intro: "Self-knowledge of qualities, flaws, and personal functioning allows for better efficiency and interaction with others in a professional environment. Grand Sud Training offers a two-day course focused on tools and behaviors to better interact in a professional context. This course provides essential and practical tools to gain confidence and optimize professional relationships.",
                  objectifs: [
                    "Adapt behavior to professional situations",
                    "Develop harmonious and effective professional relationships",
                    "Improve interpersonal effectiveness",
                    "Know how to manage stress"
                  ],
                  preRequis: "None",
                  programme: [
                    {
                      subtitle: "Understanding assertiveness rules:",
                      content: "analyze behavioral qualities and limits, change spontaneous reaction systems, develop and strengthen self-confidence, manage criticism"
                    },
                    {
                      subtitle: "Understanding emotional intelligence mechanisms:",
                      content: "identify components of emotional intelligence, decipher emotional language in professional relationships, express emotions constructively with the DESC method"
                    },
                    {
                      subtitle: "Mastering active listening basics:",
                      content: "understand active listening foundations, create a climate of trust through listening, adjust verbal and non-verbal behavior, optimize relational effectiveness"
                    },
                    {
                      subtitle: "Discovering 'FIRO theory':",
                      content: "understand FIRO methodology, use FIRO in a professional context, consider psychological needs compatibility"
                    },
                    {
                      subtitle: "Knowing how to manage stress:",
                      content: "define stress, internalize the thought-emotion-action mechanism, regulate and use emotions, nourish positive emotions"
                    }
                  ]
                },
                {
                  id: "leadership",
                  title: "Building and Developing Leadership",
                  objectifs: [
                    "Adopt a leader posture to lead your project",
                    "Gain support through effective communication",
                    "Break down your project into operational actions",
                    "Develop personal influence"
                  ],
                  preRequis: "Holding a management position within a company, association, etc.",
                  programme: [
                    {
                      subtitle: "Developing leadership qualities:",
                      content: "what are the best practices of leaders? What does leadership bring to management practice? Identify leadership talents, align your value system with your own leadership style"
                    },
                    {
                      subtitle: "Building and embodying a team project:",
                      content: "build your leader project for your team and organization, formalize your project"
                    },
                    {
                      subtitle: "Communicating on your project as a leader:",
                      content: "keys to successful communication with your team, practice simple dynamic communication techniques, develop personal impact and charisma"
                    },
                    {
                      subtitle: "Proving leadership through successful projects:",
                      content: "analyze and evaluate context opportunities, lead your project effectively and successfully, rely on existing resources and optimize implementation with stakeholders"
                    }
                  ]
                },
                {
                  id: "delegation",
                  title: "Delegating and Empowering Teams",
                  objectifs: [
                    "Integrate key delegation and empowerment techniques",
                    "Master goal setting and delegation latitudes",
                    "Ensure follow-up, develop skills and coach for better delegation"
                  ],
                  preRequis: "Holding a management position within a team of at least 2 employees",
                  programme: [
                    {
                      subtitle: "Delegation: instrument for individual and collective performance:",
                      content: "delegation and empowerment: key principles, personal barriers to delegation, delegation dynamics"
                    },
                    {
                      subtitle: "Key points for successful delegation:",
                      content: "define what and to whom to delegate, define steps and follow-up, communicate and strengthen commitment"
                    },
                    {
                      subtitle: "Evaluating, monitoring and developing skills:",
                      content: "how to monitor and analyze, seek continuous improvement, develop skills, foster autonomy and responsibility"
                    }
                  ]
                },
                {
                  id: "performance",
                  title: "Managing Team Performance",
                  objectifs: [
                    "Mobilize your team around clear and shared goals",
                    "Plan and organize your team's work",
                    "Strengthen leadership and the ability to unite to increase performance",
                    "Integrate different interpersonal communication modes into management",
                    "Develop individual skills and collective performance"
                  ],
                  preRequis: "Holding a management position within a company, association, etc.",
                  programme: [
                    {
                      subtitle: "Setting the course: defining goals and the roadmap:",
                      content: "identify essential factors for collective performance, set operational goals for yourself and your team: equity & balance, purpose, goals, action levers, monitoring indicators, roles and responsibilities, define measurable evaluation criteria and communicate them"
                    },
                    {
                      subtitle: "Managing and organizing team work:",
                      content: "analyze team functioning, provide a framework, break down strategic goals into operational ones, delegate and empower"
                    },
                    {
                      subtitle: "Leading your team: strengthening collective performance:",
                      content: "understand individual and collective motivation levers to develop team synergy, implement a relational strategy to reduce demotivating factors, 'Team Play': strengthen team cohesion and the sense of belonging through a common challenge, enforce rules and share best working practices"
                    },
                    {
                      subtitle: "Optimizing team performance through continuous improvement:",
                      content: "analyze team activity to highlight barriers and difficulties that hinder performance, react to underperformance: the 'see, decide and act together' triptych, know how to re-evaluate performance in relation to resources, reconcile team effectiveness and well-being at work"
                    }
                  ]
                },
                {
                  id: "project-team",
                  title: "Managing a Project Team",
                  objectifs: [
                    "Build and involve your project team",
                    "Unite transverse resources",
                    "Establish a performance dynamic",
                    "Develop your agility",
                    "Manage change"
                  ],
                  preRequis: "Holding a management position within a company, association, etc. Being in an organization that works in project mode or wants to establish it.",
                  programme: [
                    {
                      subtitle: "Building and involving your project team:",
                      content: "the project manager and the ecosystem, team building, strategic project management, the project manager and their team, identity and values, relational monitoring rituals"
                    },
                    {
                      subtitle: "Uniting transverse resources:",
                      content: "supporting contributors, taking specificities into account, relationship/objective balance, formalizing team spirit, a framework and rules, 'working together' conditions"
                    },
                    {
                      subtitle: "Establishing a performance dynamic:",
                      content: "diagnosing the team, performance indicators, trust building steps, managing remote contributors, effectiveness essentials, digital tools"
                    },
                    {
                      subtitle: "Developing your agility:",
                      content: "initiating agility in the team, the agile mindset, agility in team functioning, establishing collective rituals, collective innovation in meetings, creative problem solving"
                    },
                    {
                      subtitle: "Accompanying change:",
                      content: "understanding change, different levels in the organization, individual resistance drivers"
                    },
                    {
                      subtitle: "Leading change:",
                      content: "change stages, project manager actions"
                    }
                  ]
                }
              ].map((item) => (
                <div key={item.id} className="overflow-hidden border-b border-white last:border-b-0">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full bg-[#E54841] text-white px-6 h-[60px] flex items-center justify-between group transition-colors hover:bg-primary-red/90"
                  >
                    <div className="flex items-center gap-4">
                      {openAccordion === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      <span className="text-[16px] md:text-[18px] font-bold uppercase tracking-wide text-left">{item.title}</span>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-white"
                      >
                        <div className="p-8 space-y-8 text-[15px] text-gray-700 leading-relaxed">
                          {item.intro && <p className="font-medium text-gray-900">{item.intro}</p>}
                          
                          <div className="space-y-4">
                            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[14px]">Objectives:</h4>
                            <ul className="list-disc list-outside pl-5 space-y-2">
                              {item.objectifs.map((obj, i) => <li key={i}>{obj}</li>)}
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[14px]">Prerequisites:</h4>
                            <p>{item.preRequis}</p>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[14px]">Program:</h4>
                            <ul className="list-disc list-outside pl-5 space-y-4">
                              {item.programme.map((prog, i) => (
                                <li key={i}>
                                  <span className="font-bold text-gray-900">{prog.subtitle}</span> {prog.content}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-6 border-t border-gray-100 space-y-4 text-[14px]">
                            <p><span className="font-bold uppercase">Training Location:</span> Toulouse-Labège Campus</p>
                            <div className="space-y-1">
                              <p className="font-bold uppercase">Duration, dates and schedule:</p>
                              <ul className="list-disc list-outside pl-5 space-y-1">
                                <li><span className="font-bold">Duration:</span> 2 days of training, 14 hours</li>
                                <li><span className="font-bold">Dates:</span> To be defined</li>
                                <li><span className="font-bold">Schedule:</span> from 09:00 to 12:30 and from 13:30 to 17:00</li>
                              </ul>
                            </div>
                            <p><span className="font-bold uppercase">Training Validation:</span> Certificate of training completion</p>
                            <p><span className="font-bold uppercase">Training Price:</span> €1,600</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

          {/* Section 2: Internships */}
          <section id="internships" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              INTERNSHIPS
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>
                All our certification courses include a mandatory period of professional immersion in a company, allowing you to put theoretical knowledge into practice.
              </p>
            </div>
          </section>

          {/* Section 3: Reference site */}
          <section id="reference" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              REFERENCE SITE
            </h2>
            <div className="bg-gray-50 p-8 rounded-sm">
              <a 
                href="https://www.moncompteformation.gouv.fr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[18px] text-black underline hover:text-primary-red transition-colors font-bold"
              >
                My Training Account (CPF)
              </a>
            </div>
          </section>
        </div>


      </CourseDetailLayout>
    </main>
  );
}
