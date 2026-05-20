"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface CreateCompanyAccountFormProps {
  lang: "en" | "fr";
}

export default function CreateCompanyAccountForm({ lang }: CreateCompanyAccountFormProps) {
  const t = {
    en: {
      title: "CREATE A BUSINESS ACCOUNT",
      fields: [
        { label: "USERNAME", type: "text" },
        { label: "FIRST NAME", type: "text" },
        { label: "LAST NAME", type: "text" },
        { label: "COMPANY", type: "text" },
        { label: "PHONE NUMBER", type: "text" },
        { label: "EMAIL ADDRESS", type: "email" },
        { label: "PASSWORD", type: "password" },
        { label: "CONFIRM PASSWORD", type: "password" }
      ],
      submit: "REGISTER",
      image: "/assets/pexels-pixabay-532173-scaled.jpg"
    },
    fr: {
      title: "CRÉER UN COMPTE ENTREPRISE",
      fields: [
        { label: "IDENTIFIANT", type: "text" },
        { label: "PRÉNOM", type: "text" },
        { label: "NOM", type: "text" },
        { label: "ENTREPRISE", type: "text" },
        { label: "TÉLÉPHONE", type: "text" },
        { label: "ADRESSE E-MAIL", type: "email" },
        { label: "MOT DE PASSE", type: "password" },
        { label: "CONFIRM MOT DE PASSE", type: "password" }
      ],
      submit: "S'INSCRIRE",
      image: "/assets/pexels-pixabay-532173-scaled.jpg"
    }
  }[lang];

  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 1000], [1, 1.3]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left side: Hero Image with Bracket Title (Reference from Apply form) */}
      <div className="relative w-full lg:w-[565px] lg:min-w-[565px] h-[400px] lg:h-auto overflow-hidden pt-[40px]">
        <div className="relative h-full w-full overflow-hidden">
          <motion.div 
            style={{ scale: imageScale }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={t.image} 
              alt="Registration Background" 
              fill 
              className="object-cover" 
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-[#dc4b3b]/60" />
          <div className="absolute left-6 md:left-10 lg:left-12 top-[120px] md:top-[160px] py-12 pl-6 pr-4 pointer-events-none max-w-[85%]">
            {/* White border bracket style */}
            <div className="absolute inset-0 border-l-[4px] border-t-[4px] border-b-[4px] border-white w-[80px] md:w-[100px]" />
            <h1 className="text-white text-[28px] md:text-[44px] lg:text-[52px] font-bold uppercase leading-[1.1] text-left tracking-tight relative z-10 whitespace-pre-line">
              {t.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Right side: Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white overflow-y-auto">
        <div className="w-full max-w-lg space-y-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {t.fields.map((field, idx) => (
                <div key={idx} className="space-y-2">
                  <label className="block text-[14px] font-bold text-gray-900 uppercase">
                    {field.label}
                  </label>
                  <input 
                    type={field.type} 
                    className="w-full border border-gray-200 px-4 py-3 focus:border-[#dc4b3b] outline-none text-[16px] transition-colors rounded-sm"
                  />
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="w-full md:w-auto bg-[#dc4b3b] text-white px-12 py-4 font-bold rounded-sm transition-transform hover:scale-105 uppercase tracking-wider">
                {t.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
