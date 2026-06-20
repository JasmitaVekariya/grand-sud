"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { submitFormToApi } from "@/lib/submit-form-client";
import { pickFieldOptions } from "@/lib/form-options-defaults";
import { useFormOptions } from "@/lib/use-form-options";

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
    prenom: "",
    email: "",
    phone: "",
    country: "",
    diploma: "Bachelor Business & Tourism",
    formationSouhaitee: "BTS Tourisme 1ère année",
    niveauActuel: "BAC",
    dateEvenement: "",
    intake: "September/October",
    consent: false,
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const formOptionsKey = lang === "fr" ? "candidater" : "apply";
  const { fields: optionFields } = useFormOptions(formOptionsKey, lang);

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

  const evenements = [
    "Portes ouvertes – 11 octobre 2025 – 10h-13h",
    "Soirée d'information – 15 octobre 2025 – 17h-20h30",
    "Portes ouvertes – 15 novembre 2025 – 10h-13h",
    "Soirée d'information – 19 novembre 2025 – 17h-20h30",
    "Portes ouvertes – 13 décembre 2025 – 10h-13h",
    "Soirée d'information – 17 décembre 2025 – 17h-20h30",
    "Portes ouvertes – 17 janvier 2026 – 10h-13h",
    "Soirée d'information – 21 janvier 2026 – 17h-20h30",
    "Portes ouvertes – 14 février 2026 – 10h-13h",
    "Soirée d'information – 18 février 2026 – 17h-20h30",
    "Portes ouvertes – 14 mars 2026 – 10h-13h",
    "Soirée d'information – 18 mars 2026 – 17h-20h30",
    "Portes ouvertes – 11 avril 2026 – 10h-13h",
    "Soirée d'information – 15 avril 2026 – 17h-20h30",
    "Soirée d'information – 20 mai 2026 – 17h-20h30",
    "Portes ouvertes – 30 mai 2026 – 10h-13h",
    "Portes ouvertes – 13 juin 2026 – 10h-13h",
    "Soirée d'information – 17 juin 2026 – 17h-20h30",
    "Portes ouvertes – 11 juillet 2026 – 10h-13h",
    "Soirée d'information – 15 juillet 2026 – 17h-20h30",
    "Portes ouvertes – 22 août 2026 – 10h-13h",
    "Soirée d'information – 26 août 2026 – 17h-20h30",
    "Portes ouvertes – 12 septembre 2026 – 10h-13h"
  ];

  const formationsList = [
    "BTS MCO 1ère année",
    "BTS Tourisme 1ère année",
    "BTS Tourisme 2ème année",
    "BTS MCO 2ème année",
    "BACHELOR RESPONSABLE DU DÉVELOPPEMENT TOURISTIQUE DURABLE ET DIGITAL",
    "BACHELOR HOSPITALITY MANAGEMENT",
    "BACHELOR MICE DESIGNER",
    "MASTERE MANAGER DE PROJETS ÉVÉNEMENTIELS ET TOURISTIQUES"
  ];

  const niveauxList = [
    "BAC",
    "BAC+1",
    "BAC+2",
    "BAC+3",
    "BAC+4",
    "BAC+5",
    "Autre"
  ];

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
      successMsg: "Your request has been submitted successfully.",
      submitErrorMsg: "Something went wrong. Please try again.",
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
      heading: "CANDIDATER À NOS FORMATIONS",
      topText: "Pour télécharger le dossier de candidature, il vous suffit de compléter le formulaire ci-dessous.\nVous le recevrez alors par mail, il faudra nous le renvoyer accompagné des pièces justificatives demandées pour nous permettre d'étudier votre profil et de vous proposer un entretien d'admission.",
      fields: {
        firstName: "FIRST NAME",
        surname: "SURNAME",
        prenom: "PRÉNOM",
        email: "EMAIL",
        phone: "MOBILE",
        formationSouhaitee: "FORMATION SOUHAITÉE",
        niveauActuel: "NIVEAU ACTUEL",
        dateEvenement: "DATE DE L'ÉVÈNEMENT",
        consentement: "CONSENTEMENT",
        consentText: "Je m'inscris à l'évènement souhaité et j'accepte d'être recontacté pour m'aider dans ma démarche de recherche de formation. Je peux retirer mon consentement à tout moment et m'inscrire sur Bloctel.",
      },
      button: "S'INSCRIRE",
      errorMsg: "Ce champ est requis",
      successMsg: "Votre inscription a été enregistrée avec succès.",
      submitErrorMsg: "Une erreur est survenue. Veuillez réessayer.",
    },
  }[lang];

  const diplomaOptions = pickFieldOptions(optionFields, "diploma", t.diplomas || []);
  const intakeOptions = pickFieldOptions(optionFields, "intake", t.intakes || []);
  const formationOptions = pickFieldOptions(optionFields, "formationSouhaitee", formationsList);
  const niveauOptions = pickFieldOptions(optionFields, "niveauActuel", niveauxList);
  const evenementOptions = pickFieldOptions(optionFields, "dateEvenement", evenements);

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const getError = (field: keyof typeof formData) => {
    if (touched[field] && !formData[field] && field !== 'consent') {
      return t.errorMsg;
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      const endpoint = lang === "fr" ? "/api/forms/candidater" : "/api/forms/apply";
      await submitFormToApi(endpoint, formData);
      setSubmitted(true);
      setFormData({
        firstName: "",
        surname: "",
        prenom: "",
        email: "",
        phone: "",
        country: "",
        diploma: "Bachelor Business & Tourism",
        formationSouhaitee: "BTS Tourisme 1ère année",
        niveauActuel: "BAC",
        dateEvenement: "",
        intake: "September/October",
        consent: false,
      });
      setTouched({});
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError(lang === "fr" ? "Une erreur est survenue. Veuillez réessayer." : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="mb-10">
            <p className="text-black text-[13px] font-medium leading-relaxed whitespace-pre-line">
              {t.topText}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {lang === 'en' ? (
              <>
                {/* Name fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="space-y-1.5 w-full">
                    <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                      {t.fields.firstName} <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
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
                      className="w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
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

                <div className="space-y-1.5 w-full">
                  <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                    {t.fields.email} <span className="text-primary-red">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
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

                <div className="space-y-1.5 w-full">
                  <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                    {t.fields.phone} <span className="text-primary-red">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
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

                <div className="w-full">
                  <CustomSelect 
                    label={t.fields.diploma!}
                    options={diplomaOptions}
                    value={formData.diploma}
                    onChange={(val) => setFormData({ ...formData, diploma: val })}
                    required
                    error={getError('diploma')}
                  />
                </div>

                <div className="w-full">
                  <CustomSelect 
                    label={t.fields.intake!}
                    options={intakeOptions}
                    value={formData.intake}
                    onChange={(val) => setFormData({ ...formData, intake: val })}
                    required
                    error={getError('intake')}
                  />
                </div>

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
              </>
            ) : (
              <>
                {/* French Specific Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="space-y-1.5 w-full">
                    <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                      {t.fields.firstName} <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                      value={formData.firstName}
                      onBlur={() => handleBlur('firstName')}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5 w-full">
                    <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                      {t.fields.surname} <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                      value={formData.surname}
                      onBlur={() => handleBlur('surname')}
                      onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5 w-full">
                  <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                    {t.fields.prenom}
                  </label>
                  <input
                    type="text"
                    className="w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5 w-full">
                  <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                    {t.fields.email} <span className="text-primary-red">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                    value={formData.email}
                    onBlur={() => handleBlur('email')}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5 w-full">
                  <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                    {t.fields.phone} <span className="text-primary-red">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full h-[40px] border border-black px-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0]"
                    value={formData.phone}
                    onBlur={() => handleBlur('phone')}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="w-full">
                  <CustomSelect 
                    label={t.fields.formationSouhaitee!}
                    options={formationOptions}
                    value={formData.formationSouhaitee}
                    onChange={(val) => setFormData({ ...formData, formationSouhaitee: val })}
                  />
                </div>

                <div className="w-full">
                  <CustomSelect 
                    label={t.fields.niveauActuel!}
                    options={niveauOptions}
                    value={formData.niveauActuel}
                    onChange={(val) => setFormData({ ...formData, niveauActuel: val })}
                  />
                </div>

                <div className="space-y-3 w-full pt-4">
                  <label className="text-[12px] font-bold uppercase text-black tracking-wide block">
                    {t.fields.dateEvenement} <span className="text-primary-red">*</span>
                  </label>
                  <div className="space-y-3 pl-1">
                    {evenementOptions.map((evt, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <input
                          type="radio"
                          id={`evt-${idx}`}
                          name="dateEvenement"
                          className="mt-1 w-4 h-4 accent-gray-500 cursor-pointer"
                          checked={formData.dateEvenement === evt}
                          onChange={() => setFormData({ ...formData, dateEvenement: evt })}
                        />
                        <label htmlFor={`evt-${idx}`} className="text-[13px] text-gray-700 font-medium cursor-pointer">
                          {evt}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-6">
                  <label className="text-[12px] font-bold uppercase text-black tracking-wide block">
                    {t.fields.consentement} <span className="text-primary-red">*</span>
                  </label>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 w-5 h-5 border-black text-primary-red focus:ring-primary-red rounded-sm cursor-pointer shrink-0"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <label htmlFor="consent" className="text-[12px] text-[#555] font-medium leading-relaxed cursor-pointer pt-1">
                      {t.fields.consentText}
                    </label>
                  </div>
                </div>
              </>
            )}

            {/* Submit Button */}
            <div className="pt-6 space-y-3">
              {submitted && (
                <div className="bg-green-500/10 px-4 py-3 border border-green-500/30">
                  <p className="text-black text-[13px]">{lang === "en" ? "Your request has been submitted successfully." : "Votre inscription a été enregistrée avec succès."}</p>
                </div>
              )}
              {submitError && (
                <div className="bg-red-500/10 px-4 py-3 border border-red-500/30">
                  <p className="text-black text-[13px]">{submitError}</p>
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#dc4b3b] disabled:opacity-60 text-white px-10 py-3 text-[14px] font-bold uppercase tracking-widest hover:bg-[#c03d2f] transition-all shadow-none active:scale-95"
              >
                {isSubmitting ? "..." : t.button}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
