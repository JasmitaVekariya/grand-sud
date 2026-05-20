"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { X } from "lucide-react";

export default function FloatingInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = {
    en: [
      { label: "■ Ask to be called back", href: "/en/callback", isWhatsApp: false },
      { label: "■ Download the brochure", href: "/en/brochure", isWhatsApp: false },
      { label: "■ Apply", href: "/en/apply", isWhatsApp: false },
      { label: "■ Connect on WhatsApp", href: "https://wa.me/33651376620", isWhatsApp: true },
    ],
    fr: [
      { label: "■ Demander à être rappelé", href: "/fr/callback", isWhatsApp: false },
      { label: "■ Télécharger la brochure", href: "/fr/brochure", isWhatsApp: false },
      { label: "■ Candidater", href: "/fr/candidater", isWhatsApp: false },
      { label: "■ Nous contacter sur WhatsApp", href: "https://wa.me/33651376620", isWhatsApp: true },
    ],
  }[lang];

  return (
    <div ref={containerRef} className="fixed bottom-6 md:bottom-10 right-6 md:right-10 z-[100] flex flex-col items-end">
      
      {/* Floating Menu Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-4 bg-white border border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.18)] rounded-none p-6 pt-10 pb-6 w-[320px] origin-bottom-right relative"
          >
            {/* Close Button inside Card */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-black hover:text-[#8B2318] transition-colors"
              aria-label="Close menu"
            >
              <X size={20} className="stroke-[2.5]" />
            </button>

            {/* Menu Items */}
            <div className="flex flex-col">
              {menuItems.map((item, index) => (
                <div key={index} className="w-full">
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-black hover:text-[#8B2318] text-[15px] font-extrabold transition-colors duration-200 py-3.5 flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    {item.isWhatsApp && (
                      <svg
                        className="w-5 h-5 text-black group-hover:text-[#8B2318] transition-colors duration-200 fill-current ml-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.012 2c-5.506 0-9.969 4.468-9.969 9.979 0 1.761.458 3.479 1.332 5.006l-1.419 5.191 5.309-1.393c1.468.802 3.111 1.222 4.747 1.222 5.507 0 9.97-4.469 9.97-9.979s-4.463-9.979-9.97-9.979zm5.829 14.281c-.244.688-1.427 1.248-1.956 1.314-.469.058-.936.084-2.738-.63-2.302-.912-3.784-3.25-3.899-3.403-.114-.153-.941-1.253-.941-2.394 0-1.141.597-1.702.812-1.933.214-.23.468-.288.625-.288.156 0 .313.001.448.006.14.006.331-.053.518.397.192.463.655 1.597.712 1.713.057.116.095.25.018.404-.077.153-.153.249-.249.363-.097.116-.202.259-.288.35-.095.097-.194.203-.083.393.111.19.493.815 1.058 1.319.728.647 1.341.847 1.529.941.189.095.299.078.411-.05.111-.129.479-.558.608-.748.129-.19.258-.158.436-.091.178.066 1.13.533 1.325.63.195.097.325.145.372.227.047.082.047.478-.197 1.166z" />
                      </svg>
                    )}
                  </Link>
                  {index < menuItems.length - 1 && (
                    <div className="border-t-[1.5px] border-[#8B2318] w-full" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-10 h-10 md:w-12 md:h-12 bg-[#8B2318] hover:bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-white/10"
        aria-label="Information Menu"
      >
        <div className="w-6 h-6 md:w-8 md:h-8 bg-white group-hover:bg-[#8B2318] rounded-full flex items-center justify-center transition-colors duration-300">
          {isOpen ? (
            <X className="text-[#8B2318] group-hover:text-white w-4 h-4 md:w-5 md:h-5 transition-colors duration-300" />
          ) : (
            <span className="text-[#8B2318] group-hover:text-white text-base md:text-lg font-black italic font-serif transition-colors duration-300">i</span>
          )}
        </div>
      </motion.button>

    </div>
  );
}
