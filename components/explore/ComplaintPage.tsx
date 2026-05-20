"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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

export default function ComplaintPage() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  
  const [formData, setFormData] = useState({
    campus: "",
    userType: "",
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    studentInfo: "",
    subject: "",
    detail: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

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
      heading: "FILE A COMPLAINT",
      topText: "In accordance with the decree n°2019-790 of June 30, 2019 related to the quality of the actions of the continuing vocational training, you can complete this form to express your complaint.\n\nGrand Sud Formation will review your request in 3 working days to provide you with the first elements of response as quickly as possible.\n\nWe thank you for clearly explaining the context as well as the subject of your complaint.",
      fields: {
        campus: "Campus",
        userType: "I am",
        firstName: "First Name",
        surname: "Surname",
        email: "Email",
        phone: "Phone Number",
        studentInfo: "Name, surname and course of the student",
        studentInfoSub: "If this complaint is not made by the student himself",
        subject: "Subject of the complaint",
        detail: "Context / Detail of the complaint",
      },
      userTypes: [
        "a student",
        "a company",
        "an OPCO",
        "a parent of a student"
      ],
      campuses: ["Toulouse-Labège"],
      button: "SEND COMPLAINT",
      successMsg: "Your complaint has been submitted successfully.",
      errorMsg: "This is required",
      selectCampus: "PICK THE CAMPUS",
    },
    fr: {
      heading: "FORMULAIRE DE RÉCLAMATION",
      topText: "Conformément au décret n°2019-790 du 30 juin 2019 relatif à la qualité des actions de la formation professionnelle continue, vous pouvez remplir ce formulaire pour exprimer votre réclamation.\n\nGrand Sud Formation étudiera votre demande sous 3 jours ouvrés afin de vous apporter les premiers éléments de réponse dans les plus brefs délais.\n\nNous vous remercions de bien vouloir expliquer clairement le contexte ainsi que l'objet de votre réclamation.",
      fields: {
        campus: "Campus",
        userType: "Je suis",
        firstName: "Prénom",
        surname: "Nom",
        email: "Email",
        phone: "Numéro de téléphone",
        studentInfo: "Nom, prénom et formation de l'étudiant",
        studentInfoSub: "Si cette réclamation n'est pas faite par l'étudiant lui-même",
        subject: "Objet de la réclamation",
        detail: "Contexte / Détail de la réclamation",
      },
      userTypes: [
        "un étudiant",
        "une entreprise",
        "un OPCO",
        "un parent d'étudiant"
      ],
      campuses: ["Toulouse-Labège"],
      button: "ENVOYER LA RÉCLAMATION",
      successMsg: "Votre réclamation a été envoyée avec succès.",
      errorMsg: "Ce champ est requis",
      selectCampus: "CHOISISSEZ LE CAMPUS",
    },
  }[lang];

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const getError = (field: keyof typeof formData) => {
    // Only studentInfo is optional, all other fields are required
    if (field === 'studentInfo') return "";
    if (touched[field] && !formData[field]) {
      return t.errorMsg;
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all required fields as touched to trigger validation messages
    const allTouched: Record<string, boolean> = {
      campus: true,
      userType: true,
      firstName: true,
      surname: true,
      email: true,
      phone: true,
      subject: true,
      detail: true,
    };
    setTouched(allTouched);

    // Validate fields
    const hasErrors = Object.keys(allTouched).some(
      (key) => !formData[key as keyof typeof formData]
    );

    if (hasErrors) {
      // Scroll to the first error or show visually
      console.log("Validation failed");
      return;
    }

    console.log("Complaint form submitted:", formData);
    setSubmitted(true);
    // Reset form
    setFormData({
      campus: "",
      userType: "",
      firstName: "",
      surname: "",
      email: "",
      phone: "",
      studentInfo: "",
      subject: "",
      detail: "",
    });
    setTouched({});
    setTimeout(() => setSubmitted(false), 5000);
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
              src="/assets/pexels-pixabay-532173-scaled (1).jpg"
              alt="Complaint Background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 565px"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-[#dc4b3b]/60 pointer-events-none" />
          <div className="absolute left-6 md:left-10 lg:left-12 top-[120px] md:top-[160px] py-12 pl-6 pr-4 pointer-events-none max-w-[85%]">
            {/* White border bracket */}
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

          {/* Success Alert */}
          {submitted && (
            <div className="mb-8 bg-green-500/10 border border-green-500 text-green-700 px-4 py-3 rounded">
              <p className="font-semibold text-[15px]">{t.successMsg}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Campus selection */}
            <div className="w-full md:w-[800px]">
              <CustomSelect 
                label={t.fields.campus}
                options={t.campuses}
                value={formData.campus}
                onChange={(val) => setFormData({ ...formData, campus: val })}
                required
                placeholder={t.selectCampus}
                error={getError('campus')}
              />
            </div>

            {/* I am (Radio Choices) */}
            <div className="space-y-2.5">
              <label className="text-[12px] font-bold uppercase text-black tracking-wide block">
                {t.fields.userType} <span className="text-primary-red">*</span>
              </label>
              <div className="flex flex-col gap-3">
                {t.userTypes.map((typeOption) => (
                  <label key={typeOption} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="userType"
                      value={typeOption}
                      checked={formData.userType === typeOption}
                      onChange={() => setFormData({ ...formData, userType: typeOption })}
                      onBlur={() => handleBlur('userType')}
                      className="w-4 h-4 text-primary-red focus:ring-primary-red border-black cursor-pointer"
                    />
                    <span className="text-[15px] text-black font-medium group-hover:text-primary-red transition-colors">
                      {typeOption}
                    </span>
                  </label>
                ))}
              </div>
              {getError('userType') && (
                <div className="bg-red-500/10 px-3 py-1.5 w-full md:w-[800px]">
                  <p className="text-black text-[13px]">{getError('userType')}</p>
                </div>
              )}
            </div>

            {/* Name fields */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                  {t.fields.firstName} <span className="text-primary-red">*</span>
                </label>
                <input
                  type="text"
                  className="w-full md:w-[388px] h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                  value={formData.firstName}
                  onBlur={() => handleBlur('firstName')}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                {getError('firstName') && (
                  <div className="bg-red-500/10 px-3 py-1.5 w-full md:w-[388px]">
                    <p className="text-black text-[13px]">{getError('firstName')}</p>
                  </div>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                  {t.fields.surname} <span className="text-primary-red">*</span>
                </label>
                <input
                  type="text"
                  className="w-full md:w-[388px] h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                  value={formData.surname}
                  onBlur={() => handleBlur('surname')}
                  onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                />
                {getError('surname') && (
                  <div className="bg-red-500/10 px-3 py-1.5 w-full md:w-[388px]">
                    <p className="text-black text-[13px]">{getError('surname')}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                {t.fields.email} <span className="text-primary-red">*</span>
              </label>
              <input
                type="email"
                className="w-full md:w-[800px] h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                value={formData.email}
                onBlur={() => handleBlur('email')}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {getError('email') && (
                <div className="bg-red-500/10 px-3 py-1.5 w-full md:w-[800px]">
                  <p className="text-black text-[13px]">{getError('email')}</p>
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                {t.fields.phone} <span className="text-primary-red">*</span>
              </label>
              <input
                type="tel"
                className="w-full md:w-[800px] h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                value={formData.phone}
                onBlur={() => handleBlur('phone')}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {getError('phone') && (
                <div className="bg-red-500/10 px-3 py-1.5 w-full md:w-[800px]">
                  <p className="text-black text-[13px]">{getError('phone')}</p>
                </div>
              )}
            </div>

            {/* Student Info */}
            <div className="space-y-1.5">
              <div className="flex flex-col">
                <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                  {t.fields.studentInfo}
                </label>
                <span className="text-[11px] text-gray-500 mt-0.5">
                  {t.fields.studentInfoSub}
                </span>
              </div>
              <input
                type="text"
                className="w-full md:w-[800px] h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                value={formData.studentInfo}
                onChange={(e) => setFormData({ ...formData, studentInfo: e.target.value })}
              />
            </div>

            {/* Subject of Complaint */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                {t.fields.subject} <span className="text-primary-red">*</span>
              </label>
              <input
                type="text"
                className="w-full md:w-[800px] h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                value={formData.subject}
                onBlur={() => handleBlur('subject')}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              {getError('subject') && (
                <div className="bg-red-500/10 px-3 py-1.5 w-full md:w-[800px]">
                  <p className="text-black text-[13px]">{getError('subject')}</p>
                </div>
              )}
            </div>

            {/* Context/Detail of Complaint */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                {t.fields.detail} <span className="text-primary-red">*</span>
              </label>
              <textarea
                className="w-full md:w-[800px] h-[150px] border border-black px-4 py-3 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0] resize-y"
                value={formData.detail}
                onBlur={() => handleBlur('detail')}
                onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
              />
              {getError('detail') && (
                <div className="bg-red-500/10 px-3 py-1.5 w-full md:w-[800px]">
                  <p className="text-black text-[13px]">{getError('detail')}</p>
                </div>
              )}
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
