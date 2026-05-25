"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { Accessibility, ShieldCheck, Info } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

import { useAccessibility } from "@/context/AccessibilityContext";
import { useCookie } from "@/context/CookieContext";

export default function Footer() {
  const { lang } = useLanguage();
  const { setIsOpen: setAccessibilityOpen } = useAccessibility();
  const { setIsCookieModalOpen } = useCookie();

  const t = {
    en: {
      description: "Grand Sud has been the leading school for tourism enthusiasts since 1991, offering comprehensive training programs ranging from BTS to Master's degrees. Focused on employability, it offers innovative teaching methods and strong links with professionals in the sector.",
      aSchoolOf: "A school of",
      explore: "EXPLORE",
      privateSpaces: "PRIVATE SPACES",
      links: {
        news: "News",
        meetUs: "Meet us",
        contactUs: "Contact us",
        recruitments: "Recruitments",
        rules: "Rules",
        complaint: "Complaint form",
        company: "Company login",
        student: "Student and alumni login",
        faculty: "Speaker login"
      },
      legal: {
        notices: "LEGAL NOTICES AND PRIVACY POLICY",
        terms: "TERMS OF SALES AND USE",
        copyright: "© 2025 GRAND SUD FORMATION"
      }
    },
    fr: {
      description: "Grand Sud est l’école de référence des passionnés du tourisme depuis 1991, proposant des formations complètes du BTS au Mastère. Tournée vers l’employabilité, elle offre des méthodes pédagogiques innovantes et des liens forts avec les professionnels du secteur.",
      aSchoolOf: "Une école de",
      explore: "EXPLORER",
      privateSpaces: "ESPACES PRIVÉS",
      links: {
        news: "Actualités",
        meetUs: "Nous rencontrer",
        contactUs: "Contact",
        recruitments: "Recrutements",
        rules: "Règlement intérieur",
        complaint: "Formulaire de réclamation",
        company: "Connexion entreprise",
        student: "Connexion étudiant et alumni",
        faculty: "Connexion intervenant"
      },
      legal: {
        notices: "MENTIONS LÉGALES ET POLITIQUE DE CONFIDENTIALITÉ",
        terms: "CONDITIONS GÉNÉRALES DE VENTE ET D'UTILISATION",
        copyright: "© 2025 GRAND SUD FORMATION"
      }
    }
  }[lang];

  return (
    <footer className="bg-primary-red text-white pt-10 md:pt-14">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

          {/* Left Column */}
          <div className="flex flex-col gap-5 md:col-span-1">
            <div className="relative w-32 h-32">
              <Image
                src="/assets/logo.jpg"
                alt="Grand Sud Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[12px] md:text-[13px] leading-relaxed max-w-full font-[400] opacity-90">
              <span className="font-[700] uppercase">Grand Sud</span> {t.description.replace("Grand Sud ", "")}
            </p>
            <div className="flex flex-col items-start gap-2 mt-2">
              <span className="text-[11px] font-[500] uppercase opacity-80">{t.aSchoolOf}</span>
              <div className="bg-white rounded-full px-3 py-0.5 shadow-sm inline-flex items-center justify-center">
                <Image
                  src="/assets/logo-supdeform.png"
                  alt="Supdeform"
                  fill
                  sizes="110px"
                  className="object-contain p-0.5"
                />
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[14px] md:text-[15px] font-bold tracking-tight opacity-95">{t.explore}</h3>
            <ul className="flex flex-col gap-2 text-[12px] md:text-[13px] font-[400] opacity-90">
              <li><Link href={`/${lang}/explore/news`} className="hover:opacity-100 transition-opacity">{t.links.news}</Link></li>
              <li><Link href={lang === "en" ? "/en/school/meetus" : "/fr/lecole/rencontrer"} className="hover:opacity-100 transition-opacity">{t.links.meetUs}</Link></li>
              <li><Link href={lang === "en" ? "/en/contact" : "/fr/contact"} className="hover:opacity-100 transition-opacity">{t.links.contactUs}</Link></li>
              <li><Link href={lang === "en" ? "/en/school/recruitments" : "/fr/lecole/recrutement"} className="hover:opacity-100 transition-opacity">{t.links.recruitments}</Link></li>
              <li><Link href={`/${lang}/explore/rules`} className="hover:opacity-100 transition-opacity">{t.links.rules}</Link></li>
              <li><Link href={`/${lang}/explore/complaint`} className="hover:opacity-100 transition-opacity">{t.links.complaint}</Link></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 relative">
            <h3 className="text-[14px] md:text-[15px] font-bold tracking-tight opacity-95">{t.privateSpaces}</h3>
            <ul className="flex flex-col gap-2 text-[12px] md:text-[13px] font-[400] opacity-90">
              <li><Link href={`/${lang}/welcome/company-login`} className="hover:opacity-100 transition-opacity">{t.links.company}</Link></li>
              <li><Link href={`/${lang}/campus/career-center/student-login`} className="hover:opacity-100 transition-opacity">{t.links.student}</Link></li>
              <li><Link href={`/${lang}/campus/career-center/faculty-login`} className="hover:opacity-100 transition-opacity">{t.links.faculty}</Link></li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8 md:mt-12">
              <Link href="https://www.facebook.com/ecolegrandsud/" target="_blank" className="hover:opacity-70 transition-opacity">
                <FaFacebookF size={18} />
              </Link>
              <Link href="https://www.instagram.com/ecolegrandsud/" target="_blank" className="hover:opacity-70 transition-opacity">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://www.youtube.com/@ecolegrandsud" target="_blank" className="hover:opacity-70 transition-opacity">
                <FaYoutube size={20} />
              </Link>
              <Link href="https://www.linkedin.com/school/ecolegrandsud/" target="_blank" className="hover:opacity-70 transition-opacity">
                <FaLinkedinIn size={18} />
              </Link>
            </div>

            {/* Accessibility & Security Icons */}
            <div className="flex items-center gap-3 mt-6">
              <div
                onClick={() => setAccessibilityOpen(true)}
                className="w-[36px] h-[36px] rounded-full bg-[#3d1311] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-white"
                >
                  <circle fill="none" stroke="currentColor" strokeWidth="20" strokeMiterlimit="10" cx="256" cy="256" r="218.6" />
                  <path d="M256,108c19.9,0,36,16.1,36,36s-16.1,36-36,36-36-16.1-36-36,16.1-36,36-36ZM373.7,206c-28.7,6.8-55.5,12.8-82.1,15.8.9,101,12.3,123.1,25,155.6,3.6,9.3-1,19.7-10.2,23.3s-19.7-1-23.3-10.2c-8.7-22.3-17.1-40.6-22.3-78.6h-9.7c-5.2,37.9-13.5,56.2-22.3,78.5-3.6,9.3-14.1,13.8-23.3,10.2-9.3-3.6-13.8-14.1-10.2-23.3,12.7-32.5,24.2-54.5,25-155.6-26.6-3.1-53.4-9-82.1-15.8-8.6-2-13.9-10.6-11.9-19.2,2-8.6,10.7-13.9,19.2-11.9,96.7,22.8,124.3,22.8,220.8,0,8.6-2,17.2,3.3,19.2,11.9,2,8.6-3.3,17.2-11.9,19.2h0Z" />
                </svg>
              </div>
              <div
                onClick={() => setIsCookieModalOpen(true)}
                className="w-[36px] h-[36px] rounded-full bg-[#3d1311] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-md"
              >
                <ShieldCheck size={20} className="text-white" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#7A1F1B] py-3 px-6 mt-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-[10px] md:text-[11px] font-[500] tracking-wider opacity-70 uppercase text-center">
          <Link href="#" className="hover:text-white transition-colors">{t.legal.notices}</Link>
          <span className="hidden md:block opacity-20">•</span>
          <Link href="#" className="hover:text-white transition-colors">{t.legal.terms}</Link>
          <span className="hidden md:block opacity-20">•</span>
          <span>{t.legal.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
