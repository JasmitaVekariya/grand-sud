"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

const CustomSelect = ({ label, options, value, onChange, required, placeholder, error }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={dropdownRef}>
      <label className="text-[12px] font-bold uppercase text-black tracking-wide">
        {label} {required && <span className="text-primary-red">*</span>}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-[40px] border border-black bg-[#f3f3f3] px-4 flex justify-between items-center cursor-pointer transition-all ${
          isOpen ? "border-[#1a80b0]" : ""
        }`}
      >
        <span className="text-[15px] text-black">
          {value || placeholder}
        </span>
        <ChevronDown 
          size={18} 
          className={`text-black transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
        />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            className="absolute z-[110] left-0 right-0 top-full mt-0 bg-white border border-black shadow-lg"
          >
            <div className="max-h-[300px] overflow-y-auto">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 text-[15px] cursor-pointer transition-all border border-transparent hover:border-[#1a80b0] ${
                    value === option ? "bg-[#1a80b0] text-white" : "text-black hover:bg-gray-50"
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {error && (
        <div className="bg-red-500/10 px-3 py-1.5 mt-1">
          <p className="text-black text-[13px]">{error}</p>
        </div>
      )}
    </div>
  );
};

export default function ApplyPage() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    country: "",
    diploma: "Bachelor Business & Tourism",
    intake: "September/October",
    consent: false,
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Scroll zoom animation
  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 1000], [1, 1.3]);

  // Sync language with URL path
  useEffect(() => {
    if (pathname.startsWith("/fr")) {
      setLang("fr");
    } else if (pathname.startsWith("/en")) {
      setLang("en");
    }
  }, [pathname, setLang]);

  const t = {
    en: {
      heading: "APPLY TO OUR COURSES",
      topText: "To download the application file, simply fill the form below. \nYou will then receive it by email, you will need to send it back to us accompanied by the requested supporting documents to allow us to study your profile and offer you an admission interview.",
      fields: {
        firstName: "First Name",
        surname: "Surname",
        email: "Email",
        phone: "Phone Number",
        country: "Country of Origin",
        diploma: "Pick your favored diploma",
        intake: "Select your favored intake",
        consent: "I agree to be contacted in regard to my admission",
      },
      button: "GET THE ADMISSION FORM",
      errorMsg: "This is required",
      diplomas: [
        "Bachelor Business & Tourism",
        "Bachelor IT & Tourism",
        "Bachelor Hospitality Management",
        "Mastère Business & Tourism",
        "Mastère IT & Tourism",
        "BTS Tourism",
        "BTS MCO",
        "Bachelor MICE Designer",
        "Bachelor Sustainable Tourism",
      ],
      intakes: ["September/October", "January", "Spring Intake"],
    },
    fr: {
      heading: "POSTULEZ À NOS FORMATIONS",
      topText: "Pour télécharger le dossier de candidature, veuillez remplir le formulaire ci-dessous. \nVous le recevrez ensuite par e-mail et devrez nous le renvoyer accompagné des pièces justificatives demandées afin que nous puissions étudier votre profil et vous proposer un entretien d’admission.",
      fields: {
        firstName: "Prénom",
        surname: "Nom",
        email: "Email",
        phone: "Numéro de téléphone",
        country: "Pays d’origine",
        diploma: "Choisissez votre diplôme",
        intake: "Choisissez votre rentrée",
        consent: "J'accepte d'être contacté au sujet de mon admission",
      },
      button: "OBTENIR LE DOSSIER D’ADMISSION",
      errorMsg: "Ce champ est requis",
      diplomas: [
        "Bachelor Business & Tourism",
        "Bachelor IT & Tourism",
        "Bachelor Hospitality Management",
        "Mastère Business & Tourism",
        "Mastère IT & Tourism",
        "BTS Tourisme",
        "BTS MCO",
        "Bachelor MICE Designer",
        "Bachelor Tourisme Durable",
      ],
      intakes: ["Septembre/Octobre", "Janvier", "Rentrée de printemps"],
    },
  }[lang];

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const getError = (field: keyof typeof formData) => {
    if (touched[field] && !formData[field] && field !== 'consent') {
      return t.errorMsg;
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full relative bg-white">
      {/* Left Section - Image (Fixed width 565px) */}
      <div className="relative w-full lg:w-[565px] lg:min-w-[565px] h-[400px] lg:h-auto overflow-hidden pt-[40px]">
        <div className="relative h-full w-full overflow-hidden">
          <motion.div 
            style={{ scale: imageScale }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/assets/apply-course-card.jpg"
              alt="Apply Background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 565px"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-[#dc4b3b]/60 pointer-events-none" />
          <div className="absolute left-6 md:left-10 lg:left-12 top-[120px] md:top-[160px] py-12 pl-6 pr-4 pointer-events-none max-w-[85%]">
            {/* White border bracket: bold lines with small horizontal width */}
            <div className="absolute inset-0 border-l-[4px] border-t-[4px] border-b-[4px] border-white w-[100px]" />
            <h1 className="text-white text-[28px] md:text-[44px] lg:text-[52px] font-bold uppercase leading-[1.1] text-left tracking-tight relative z-10 whitespace-pre-line">
              {t.heading}
            </h1>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 px-6 pb-12 md:px-12 lg:pl-[35px] pt-[90px] flex flex-col items-start bg-white">
        <div className="max-w-[800px] w-full">
          {/* Top Text */}
          <div className="mb-14">
            <p className="text-black text-[13px] font-medium leading-relaxed whitespace-pre-line">
              {t.topText}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="space-y-1.5 w-full">
                <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                  {t.fields.firstName} <span className="text-primary-red">*</span>
                </label>
                <input
                  type="text"
                  className={`w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]`}
                  value={formData.firstName}
                  onBlur={() => handleBlur('firstName')}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                {getError('firstName') && (
                  <div className="bg-red-500/10 px-3 py-1.5 w-full">
                    <p className="text-black text-[13px]">{getError('firstName')}</p>
                  </div>
                )}
              </div>
              <div className="space-y-1.5 w-full">
                <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                  {t.fields.surname} <span className="text-primary-red">*</span>
                </label>
                <input
                  type="text"
                  className={`w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]`}
                  value={formData.surname}
                  onBlur={() => handleBlur('surname')}
                  onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                />
                {getError('surname') && (
                  <div className="bg-red-500/10 px-3 py-1.5 w-full">
                    <p className="text-black text-[13px]">{getError('surname')}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5 w-full">
              <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                {t.fields.email} <span className="text-primary-red">*</span>
              </label>
              <input
                type="email"
                className={`w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]`}
                value={formData.email}
                onBlur={() => handleBlur('email')}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {getError('email') && (
                <div className="bg-red-500/10 px-3 py-1.5 w-full">
                  <p className="text-black text-[13px]">{getError('email')}</p>
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1.5 w-full">
              <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                {t.fields.phone} <span className="text-primary-red">*</span>
              </label>
              <input
                type="tel"
                className={`w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]`}
                value={formData.phone}
                onBlur={() => handleBlur('phone')}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {getError('phone') && (
                <div className="bg-red-500/10 px-3 py-1.5 w-full">
                  <p className="text-black text-[13px]">{getError('phone')}</p>
                </div>
              )}
            </div>

            {/* Country */}
            <div className="space-y-1.5 w-full">
              <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                {t.fields.country}
              </label>
              <input
                type="text"
                className="w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
            </div>

            {/* Custom Dropdowns */}
            <div className="w-full">
              <CustomSelect 
                label={t.fields.diploma}
                options={t.diplomas}
                value={formData.diploma}
                onChange={(val) => setFormData({ ...formData, diploma: val })}
                required
                error={getError('diploma')}
              />
            </div>

            <div className="w-full">
              <CustomSelect 
                label={t.fields.intake}
                options={t.intakes}
                value={formData.intake}
                onChange={(val) => setFormData({ ...formData, intake: val })}
                required
                error={getError('intake')}
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-4 pt-4">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 w-5 h-5 border-black text-primary-red focus:ring-primary-red rounded-sm cursor-pointer"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              />
              <label htmlFor="consent" className="text-[15px] text-black font-medium leading-relaxed cursor-pointer">
                {t.fields.consent} <span className="text-primary-red">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="bg-[#dc4b3b] text-white px-10 py-4 text-[15px] font-bold uppercase tracking-widest hover:bg-[#c03d2f] transition-all shadow-none active:scale-95"
              >
                {t.button}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
