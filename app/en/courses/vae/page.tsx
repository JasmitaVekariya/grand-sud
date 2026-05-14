"use client";

import { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import Link from "next/link";
import { 
  Users, 
  Building,
  Send,
  MessageCircle,
  Leaf,
  PiggyBank,
  Banknote,
  Handshake,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VAEPageEN() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("etape-1");

  const sections = [
    { id: "accessibles", label: "COURSES ACCESSIBLE THROUGH VAE" },
    { id: "etapes", label: "THE DIFFERENT STAGES OF THE VALIDATION OF ACQUIRED EXPERIENCE" },
    { id: "aides", label: "VAE FINANCIAL AIDS" },
    { id: "reference", label: "REFERENCE SITE" },
    { id: "details", label: "REQUEST MORE DETAILS" },
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  const etapes = [
    {
      id: "etape-1",
      title: "Step 1: I get informed",
      content: (
        <div className="space-y-4">
          <p>It allows you to discover in detail the Validation of Acquired Experience system and offers the opportunity to understand the access conditions, available certifications and the overall progress of the course.</p>
          <p>This first step helps to verify the relevance of the VAE in relation to your professional project and to identify possible support resources.</p>
          <p>It is also the time to gather the first necessary information to build your file with complete peace of mind.</p>
        </div>
      )
    },
    {
      id: "etape-2",
      title: "Step 2: I build my admissibility file",
      content: (
        <div className="space-y-4">
          <p>The VAE application file consists of several essential sections.</p>
          <p>In <span className="font-bold">Section 1</span>, you specify the nature of your request: first request, renewal or extension.</p>
          <p><span className="font-bold">Section 2</span> concerns the targeted professional certification; it is necessary to indicate its full title, its level and the authority that issues it.</p>
          <p><span className="font-bold">Section 3</span> gathers your personal and professional information (civil status, contact details, current situation, possible disability).</p>
          <p><span className="font-bold">Section 4</span> details your educational background and your already obtained certifications.</p>
          <p><span className="font-bold">Section 5</span>, which is particularly important, must present your experiences directly related to the targeted certification, describing the missions carried out and their duration.</p>
          <p>Finally, <span className="font-bold">Section 6</span> corresponds to a sworn statement attesting to the accuracy of the information provided and compliance with the VAE eligibility conditions.</p>
          <p>Do not forget to attach the necessary supporting documents.</p>
        </div>
      )
    },
    {
      id: "etape-3",
      title: "Step 3: I build my validation file",
      content: (
        <div className="space-y-4">
          <p>For each diploma, a specific validation file template is proposed to guide the candidate and meet the certifier's expectations.</p>
          <p>This template generally includes several parts: information relating to the candidate's identity, the presentation of their experiences in the form of a professional career path (similar to a CV), the motivations that led them to engage in a VAE process, as well as a detailed analysis of their activities related to the targeted certification.</p>
          <p>Finally, an insert is reserved for the candidate's signature, by which they swear on their honor to be the author of the file.</p>
        </div>
      )
    },
    {
      id: "etape-4",
      title: "Step 4: jury",
      content: (
        <div className="space-y-4">
          <p>VAE juries are governed by the reference framework of the diploma concerned, which explains why certain rules may vary from one certification to another. However, their functioning is based on common principles.</p>
          <p>The jury plays a central role: it examines the candidate's validation file, questions them to verify the adequacy of their achievements with the expected skills, then gives its decision regarding the obtaining of the certification.</p>
          <p>Its composition generally brings together at least two members, who can be professionals from the sector, experts of the diploma or representatives of the certifier.</p>
          <p>The evaluation modalities are defined by the certifier, who summons the candidate specifying the conditions of passage.</p>
          <p>On D-Day, the evaluation can take the form of an oral interview - where the candidate exposes their motivations, their experiences and answers the jury's questions - and/or a professional simulation, real or reconstituted, intended to concretely assess their skills.</p>
        </div>
      )
    },
    {
      id: "etape-5",
      title: "Step 5: result",
      content: (
        <div className="space-y-4">
          <p>At the end of their appearance before the jury, the candidate receives an official decision concerning their request for Validation of Acquired Experience.</p>
          <p>Three outcomes are possible:</p>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>a <span className="font-bold">total</span> validation, which allows to immediately obtain the targeted certification;</li>
            <li>a <span className="font-bold">partial</span> validation, where certain skills are recognized but others must still be acquired, for example via complementary training or new experience;</li>
            <li>a <span className="font-bold">refusal of validation</span> if the achievements presented do not correspond sufficiently to the requirements of the diploma.</li>
          </ul>
          <p>In all cases, the jury's decision is notified in writing to the candidate.</p>
        </div>
      )
    }
  ];

  return (
    <main className="!bg-white">
      <PageBanner 
        title="Validation of Acquired Experience (VAE)" 
        image="/assets/pexels-olly-3756679-scaled.jpg" 
      />

      <CourseDetailLayout sections={sections}>
        <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium mb-16">
          <p>The Validation of Acquired Experience (VAE) offers the possibility of obtaining professional certification by validating the skills acquired during professional, personal or volunteer experiences. The certification obtained in this way has the same value as that issued after initial or continuing education.</p>
        </div>

        {/* Section 1: Formations Accessibles */}
        <section id="accessibles" className="scroll-mt-32 space-y-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              COURSES ACCESSIBLE THROUGH VAE
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              From BTS to Bachelor, most of our French degrees are accessible via VAE, according to different modalities depending on the degree.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 text-white">
            <Link href="/en/courses/bts-communication" className="bg-[#8B2B23] p-10 flex flex-col items-center justify-center space-y-6 text-center min-h-[300px] hover:brightness-110 transition-all cursor-pointer group">
              <MessageCircle size={56} strokeWidth={1} className="opacity-90 group-hover:scale-110 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold uppercase tracking-wider">BTS<br/>Communication</h3>
                <p className="text-[14px]">National Education State Diploma - BAC+2</p>
              </div>
            </Link>
            <Link href="/en/courses/bts-tourism" className="bg-[#333333] p-10 flex flex-col items-center justify-center space-y-6 text-center min-h-[300px] hover:brightness-110 transition-all cursor-pointer group">
              <Send size={56} strokeWidth={1} className="opacity-90 group-hover:scale-110 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold uppercase tracking-wider">BTS Tourism</h3>
                <p className="text-[14px]">National Education State Diploma - BAC+2</p>
              </div>
            </Link>
            <Link href="/en/courses/bachelor-sustainable" className="bg-[#8B2B23] p-10 flex flex-col items-center justify-center space-y-6 text-center min-h-[300px] hover:brightness-110 transition-all cursor-pointer group">
              <Leaf size={56} strokeWidth={1} className="opacity-90 group-hover:scale-110 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold uppercase tracking-wider">BACHELOR<br/>Sustainable and Digital Tourism Development Manager</h3>
                <p className="text-[14px]">RNCP Title - BAC+3</p>
              </div>
            </Link>
            <Link href="/en/courses/bachelor-hospitality" className="bg-[#333333] p-10 flex flex-col items-center justify-center space-y-6 text-center min-h-[300px] hover:brightness-110 transition-all cursor-pointer group">
              <Building size={56} strokeWidth={1} className="opacity-90 group-hover:scale-110 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold uppercase tracking-wider">BACHELOR<br/>Hospitality Management</h3>
                <p className="text-[14px]">RNCP Title - BAC+3</p>
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 text-white mt-0">
            <Link href="/en/courses/bachelor-mice" className="bg-[#8B2B23] p-10 flex flex-col items-center justify-center space-y-6 text-center min-h-[300px] md:col-span-1 hover:brightness-110 transition-all cursor-pointer group">
              <Users size={56} strokeWidth={1} className="opacity-90 group-hover:scale-110 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold uppercase tracking-wider">BACHELOR MICE<br/>Designer</h3>
                <p className="text-[14px]">RNCP Title - BAC+3</p>
              </div>
            </Link>
            <div className="md:col-span-3"></div>
          </div>
        </section>

        {/* Section 2: Étapes */}
        <section id="etapes" className="scroll-mt-32 space-y-8 mb-16">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            THE DIFFERENT STAGES OF THE VALIDATION OF ACQUIRED EXPERIENCE
          </h2>
          
          <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
            <p>VAE is accessible to all, regardless of age, status or level of education. All experiences related to the targeted certification, including volunteering, can be taken into account. A real lever for professional development, it allows you to:</p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Value your skills</li>
              <li>Give meaning and consistency to your career path</li>
              <li>Relaunch or boost your career</li>
              <li>Anticipate or accelerate a career evolution</li>
              <li>Change professional orientation</li>
            </ul>
            <p className="pt-4">The VAE pathway is organized in several essential steps, for which we recommend support that will allow you to complete each of them with complete peace of mind.</p>
            <p className="italic">Whether you carry out your VAE with support or independently, fees related to the jury are to be expected. The conditions and modalities of this jury will be specified to you before any commitment in a VAE pathway.</p>
          </div>

          <div className="relative rounded-sm overflow-hidden p-6 md:p-12 mt-8">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/assets/pexels-samjjohnson-1764956-scaled.jpg")' }}
            />
            
            <div className="relative z-10">
              {etapes.map((etape) => (
                <div key={etape.id} className="overflow-hidden border-b border-white last:border-b-0">
                  <button
                    onClick={() => toggleAccordion(etape.id)}
                    className="w-full bg-[#E54841] text-white px-6 h-[60px] flex items-center gap-4 transition-colors hover:bg-primary-red/90"
                  >
                    {openAccordion === etape.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    <span className="text-[16px] md:text-[18px] font-bold uppercase tracking-wide text-left">{etape.title}</span>
                  </button>
                  <AnimatePresence>
                    {openAccordion === etape.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-white/95 backdrop-blur-sm"
                      >
                        <div className="p-8 text-[15px] text-gray-800 leading-relaxed font-medium">
                          {etape.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Aides */}
        <section id="aides" className="scroll-mt-32 space-y-8 mb-16">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            VAE FINANCIAL AIDS
          </h2>
          
          <div className="rounded-sm overflow-hidden flex flex-col">
            <div className="relative h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/pexels-divinetechygirl-1181303-scaled.jpg")' }}
              />
              <div className="relative z-10 h-full flex items-center p-8 md:p-12">
                <div className="bg-white/40 backdrop-blur-sm p-8 max-w-lg">
                  <p className="text-[16px] text-gray-900 font-medium leading-relaxed">
                    To allow you to carry out your VAE project, you can mobilize various aids to best meet your needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#8B2B23] text-white p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <PiggyBank size={48} className="opacity-90" />
                <h3 className="text-[20px] font-bold">Personal Training Account (CPF)</h3>
                <div className="space-y-4 text-[15px] leading-relaxed opacity-90">
                  <p>It is possible to finance all or part of your VAE using your Personal Training Account rights.</p>
                  <p><span className="font-bold">Attention:</span> A fixed contribution, indexed to inflation, is mandatory. It currently amounts to around €100.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Banknote size={48} className="opacity-90" />
                <h3 className="text-[20px] font-bold">Additional Funding</h3>
                <div className="space-y-4 text-[15px] leading-relaxed opacity-90">
                  <p>If the CPF amount does not cover the total costs, other funding sources may intervene: your employer, your OPCO, the regional council, the departmental council, your town hall, France Travail, etc.</p>
                  <p>Additional costs related to the training, such as transport, accommodation or meals, are not covered.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Handshake size={48} className="opacity-90" />
                <h3 className="text-[20px] font-bold">Support</h3>
                <div className="space-y-4 text-[15px] leading-relaxed opacity-90">
                  <p>Support is not mandatory, you can choose to do your VAE independently.</p>
                  <p>However, we recommend it because it allows you to be accompanied by a professional who knows the VAE and the degree inside out: they will be able to guide you in the development of your project!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Site de référence */}
        <section id="reference" className="scroll-mt-32 space-y-8 mb-16">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            REFERENCE SITE
          </h2>
          <div>
            <a 
              href="https://vae.gouv.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[18px] text-black underline hover:text-primary-red transition-colors font-medium"
            >
              The official VAE portal
            </a>
          </div>
        </section>

        {/* Section 5: Demander plus de détails */}
        <section id="details" className="scroll-mt-32 space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
            REQUEST MORE DETAILS
          </h2>
          <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
            <p>Completely free, this exchange time will answer your questions and define your project and your needs.</p>
            <p>To schedule your appointment, <Link href="/en/contact" className="text-[#E54841] hover:underline transition-colors">simply request a callback!</Link></p>
          </div>
        </section>
      </CourseDetailLayout>
    </main>
  );
}
