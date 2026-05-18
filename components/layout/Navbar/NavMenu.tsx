"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { navigationData } from "@/config/navigation";
import MegaMenu from "./MegaMenu";
import { AnimatePresence, motion } from "framer-motion";

interface NavMenuProps {
  lang: "fr" | "en";
}

export default function NavMenu({ lang }: NavMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = navigationData[lang];

  return (
    <nav className="bg-primary-red sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px]">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={`/${lang}`} className="relative z-50 translate-y-2 md:translate-y-3 -mb-10 hover:opacity-80 transition-opacity">
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              <Image
                src="/assets/logo.jpg"
                alt="Grand Sud Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1 h-full">
            {menuItems.map((item) => (
              <li
                key={item.title}
                className="h-full flex items-center"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`px-5 py-2 text-[14px] md:text-[15px] font-bold uppercase tracking-[0.05em] transition-all duration-200 flex items-center gap-2 ${activeMenu === item.title ? "text-[#3d1311]" : "text-white hover:bg-white/10"
                    }`}
                >
                  {item.title}
                  {item.megaMenu && <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === item.title ? "rotate-180 text-primary-red" : "text-white"}`} />}
                </Link>

                <AnimatePresence>
                  {activeMenu === item.title && item.megaMenu && (
                    <MegaMenu type={item.megaMenu.type} data={item.megaMenu} isOpen={true} />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <Link 
              href={lang === "en" ? "/en/apply" : "/fr/candidater"}
              className="bg-[#3d1311] text-white rounded-full p-1.5 hover:scale-110 transition-transform cursor-pointer"
              title={lang === "en" ? "Apply" : "Candidater"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-8 h-8 fill-white"
              >
                <circle fill="none" stroke="currentColor" strokeWidth="20" strokeMiterlimit="10" cx="256" cy="256" r="218.6" />
                <path d="M256,108c19.9,0,36,16.1,36,36s-16.1,36-36,36-36-16.1-36-36,16.1-36,36-36ZM373.7,206c-28.7,6.8-55.5,12.8-82.1,15.8.9,101,12.3,123.1,25,155.6,3.6,9.3-1,19.7-10.2,23.3s-19.7-1-23.3-10.2c-8.7-22.3-17.1-40.6-22.3-78.6h-9.7c-5.2,37.9-13.5,56.2-22.3,78.5-3.6,9.3-14.1,13.8-23.3,10.2-9.3-3.6-13.8-14.1-10.2-23.3,12.7-32.5,24.2-54.5,25-155.6-26.6-3.1-53.4-9-82.1-15.8-8.6-2-13.9-10.6-11.9-19.2,2-8.6,10.7-13.9,19.2-11.9,96.7,22.8,124.3,22.8,220.8,0,8.6-2,17.2,3.3,19.2,11.9,2,8.6-3.3,17.2-11.9,19.2h0Z" />
              </svg>
            </Link>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 bg-primary-red z-[60] overflow-y-auto"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-10">
                <div className="bg-white p-2">
                  <Image src="/assets/logo.jpg" alt="Logo" width={100} height={40} className="object-contain" />
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                  <X size={32} />
                </button>
              </div>
              <ul className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-2xl font-bold uppercase text-white hover:text-white/80"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
