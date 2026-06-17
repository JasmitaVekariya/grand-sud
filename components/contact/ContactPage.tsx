"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Mail, Clock, Phone, MapPin } from "lucide-react";

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
    <div className="space-y-2 relative w-full md:w-[800px]" ref={dropdownRef}>
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

export default function ContactPage() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    campus: "",
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
      heading: "CONTACT US",
      openingHoursTitle: "Opening hours (French time)",
      openingHours: [
        "From Monday to Friday: 8:30 am - 6 pm",
        "Summer time: June, 15 to September, 1: 9:15 am - 5:15pm",
        "Campus is closed during weekends and holidays, and from December, 19 to January, 4 and August 1 to 17"
      ],
      phoneTitle: "Phone number",
      phoneSubtitle: "Campus Toulouse-Labège",
      phone: "+33 (0) 5 37 17 01 06",
      emailTitle: "Email",
      emailSubtitle: (
        <>
          To contact us by email you can use the form below or{" "}
          <a href="mailto:contact@grandsud.fr" className="underline font-bold hover:text-primary-red transition-colors">
            contact@grandsud.fr
          </a>
        </>
      ),
      fields: {
        firstName: "First Name",
        surname: "Surname",
        email: "Email",
        phone: "Phone Number",
        message: "Your Message",
        campus: "Campus to Contact",
        consent: "I agree to be contacted to reply to my message"
      },
      campusPlaceholder: "Pick the campus",
      campuses: ["Toulouse-Labège", "Other"],
      button: "SEND",
      errorMsg: "This is required",
      postalTitle: "Postal address",
      postalAddress: [
        "Campus de Toulouse-Labège :",
        "Bâtiment 6 - 21 rue du village d'entreprises",
        "31670 Labège (France)"
      ]
    },
    fr: {
      heading: "CONTACTEZ-NOUS",
      openingHoursTitle: "Horaires d'ouverture (heure française)",
      openingHours: [
        "Du lundi au vendredi : 8h30 - 18h",
        "Période d'été : du 15 juin au 1er septembre : 9h15 - 17h15",
        "Le campus est fermé les week-ends et jours fériés, ainsi que du 18 décembre au 4 janvier et du 1er au 17 août"
      ],
      phoneTitle: "Numéro de téléphone",
      phoneSubtitle: "Campus Toulouse-Labège",
      phone: "+33 (0) 5 37 17 01 06",
      emailTitle: "E-mail",
      emailSubtitle: (
        <>
          Pour nous contacter par e-mail, vous pouvez utiliser le formulaire ci-dessous ou{" "}
          <a href="mailto:contact@grandsud.fr" className="underline font-bold hover:text-primary-red transition-colors">
            contact@grandsud.fr
          </a>
        </>
      ),
      fields: {
        firstName: "Prénom",
        surname: "Nom",
        email: "Email",
        phone: "Numéro de téléphone",
        message: "Votre Message",
        campus: "Campus à Contacter",
        consent: "J'accepte d'être contacté pour répondre à mon message"
      },
      campusPlaceholder: "Choisir le campus",
      campuses: ["Toulouse-Labège", "Autre"],
      button: "ENVOYER",
      errorMsg: "Ce champ est requis",
      postalTitle: "Adresse postale",
      postalAddress: [
        "Campus de Toulouse-Labège :",
        "Bâtiment 6 - 21 rue du village d'entreprises",
        "31670 Labège (France)"
      ]
    }
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
    
    // Mark all fields as touched to trigger validation messages
    const allTouched = {
      firstName: true,
      surname: true,
      email: true,
      phone: true,
      message: true,
      campus: true,
    };
    setTouched(allTouched);

    const isFormValid =
      formData.firstName &&
      formData.surname &&
      formData.email &&
      formData.phone &&
      formData.message &&
      formData.campus;

    if (!isFormValid) {
      console.log("Contact Form validation failed.");
      return;
    }

    console.log("Contact Form submitted:", formData);
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
              src="/assets/pexels-pixabay-532173-scaled.jpg"
              alt="Contact Background"
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

      {/* Right Section - Content */}
      <div className="flex-1 pt-[90px] flex flex-col justify-between bg-white min-w-0">
        
        {/* Main Content Area */}
        <div className="px-6 pb-16 md:px-12 lg:pl-[35px] max-w-[800px] w-full">
          
          {/* Top Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10">
            {/* Hours Card */}
            <div className="bg-[#7A1F1B] text-white p-6 rounded-[4px] flex flex-col gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-white shrink-0" />
                <h3 className="text-[14px] md:text-[15px] font-bold uppercase tracking-wide">
                  {t.openingHoursTitle}
                </h3>
              </div>
              <div className="text-[12px] leading-relaxed space-y-2 font-medium opacity-90">
                {t.openingHours.map((hour, idx) => (
                  <p key={idx}>{hour}</p>
                ))}
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#F23A2E] text-white p-6 rounded-[4px] flex flex-col gap-4 shadow-md justify-between">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-white shrink-0" />
                <h3 className="text-[14px] md:text-[15px] font-bold uppercase tracking-wide">
                  {t.phoneTitle}
                </h3>
              </div>
              <div className="font-medium space-y-1">
                <p className="text-[12px] opacity-90">{t.phoneSubtitle}</p>
                <p className="text-[18px] md:text-[20px] font-bold tracking-tight">{t.phone}</p>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex flex-col gap-2 mb-10">
            <div className="flex items-center gap-3 text-primary-red">
              <Mail size={22} className="shrink-0" />
              <h3 className="text-[16px] md:text-[18px] font-bold uppercase tracking-wide text-black">
                {t.emailTitle}
              </h3>
            </div>
            <p className="text-gray-700 text-[13px] font-medium leading-relaxed">
              {t.emailSubtitle}
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="space-y-1.5 flex-1">
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
              <div className="space-y-1.5 flex-1">
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

            {/* Email Field */}
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

            {/* Phone Field */}
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

            {/* Message Field */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold uppercase text-black tracking-wide">
                {t.fields.message} <span className="text-primary-red">*</span>
              </label>
              <textarea
                rows={4}
                className="w-full md:w-[800px] border border-black p-4 text-[15px] focus:outline-none transition-colors focus:border-[#1a80b0] resize-y"
                value={formData.message}
                onBlur={() => handleBlur('message')}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {getError('message') && (
                <div className="bg-red-500/10 px-3 py-1.5 w-full md:w-[800px]">
                  <p className="text-black text-[13px]">{getError('message')}</p>
                </div>
              )}
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 w-full md:w-[800px]">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 cursor-pointer w-4 h-4 accent-primary-red shrink-0"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              />
              <label htmlFor="consent" className="text-[13px] text-gray-700 font-medium cursor-pointer select-none">
                {t.fields.consent}
              </label>
            </div>

            {/* Campus dropdown */}
            <CustomSelect
              label={t.fields.campus}
              options={t.campuses}
              value={formData.campus}
              onChange={(val) => setFormData({ ...formData, campus: val })}
              placeholder={t.campusPlaceholder}
              required
              error={getError('campus')}
            />

            {/* Send Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-primary-red hover:bg-primary-red/90 text-white font-bold py-2.5 px-8 rounded-full uppercase tracking-wider text-[14px] transition-colors"
              >
                {t.button}
              </button>
            </div>
          </form>

        </div>

        {/* Postal Address & Map Section (Deep Dark Red, no gray color) */}
        <div className="bg-[#7A1F1B] text-white py-12 px-6 md:px-12 lg:pl-[35px] w-full">
          <div className="max-w-[800px] w-full flex flex-col gap-6">
            
            {/* Address details */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white">
                <MapPin size={24} className="shrink-0" />
                <h3 className="text-[16px] md:text-[18px] font-bold uppercase tracking-wide">
                  {t.postalTitle}
                </h3>
              </div>
              <div className="text-[14px] leading-relaxed font-medium opacity-90 space-y-1">
                {t.postalAddress.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>

            {/* Google Map iframe */}
            <div className="w-full md:w-[600px] aspect-[16/9] border border-white/10 rounded-sm overflow-hidden shadow-lg relative">
              <iframe 
                src="https://www.google.com/maps?cid=6638451043788040812&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Grand Sud Campus Toulouse-Labège"
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
