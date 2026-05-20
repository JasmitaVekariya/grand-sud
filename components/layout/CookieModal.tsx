"use client";

import React from "react";
import { useCookie } from "@/context/CookieContext";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieModal() {
  const { isCookieModalOpen, setIsCookieModalOpen, acceptCookies, declineCookies } = useCookie();
  const { lang } = useLanguage();

  const t = {
    en: {
      title: "Manage cookies",
      description: "To provide the best experiences, we use technologies such as cookies to store and/or access device information. Consent to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent may negatively impact certain features and functions.",
      agree: "AGREE",
      disagree: "DISAGREE",
      seeSettings: "SEE SETTINGS",
    },
    fr: {
      title: "Gérer les cookies",
      description: "Pour offrir les meilleures expériences, nous utilisons des technologies telles que les cookies pour stocker et/ou accéder aux informations des appareils. Consentir à ces technologies nous permettra de traiter des données telles que le comportement de navigation ou les identifiants uniques sur ce site. Le fait de ne pas consentir ou de retirer son consentement peut avoir un effet négatif sur certaines caractéristiques et fonctions.",
      agree: "ACCEPTER",
      disagree: "REFUSER",
      seeSettings: "VOIR LES PRÉFÉRENCES",
    },
  }[lang];

  return (
    <AnimatePresence>
      {isCookieModalOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[10000]"
            onClick={() => setIsCookieModalOpen(false)}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed z-[10001] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[620px] bg-white p-6 md:p-8 shadow-2xl flex flex-col items-center"
          >
            {/* Title */}
            <h2 className="text-black text-[18px] md:text-[20px] font-bold tracking-tight mb-4 text-center">
              {t.title}
            </h2>

            {/* Description */}
            <p className="text-[#333333] text-[13px] md:text-[14px] leading-relaxed text-center font-medium mb-8">
              {t.description}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <button
                onClick={acceptCookies}
                className="bg-[#F23A2E] text-white px-8 py-3.5 text-[13px] font-bold tracking-wider hover:bg-[#d62f24] transition-all uppercase flex-1 sm:flex-initial"
              >
                {t.agree}
              </button>
              <button
                onClick={declineCookies}
                className="bg-[#F23A2E] text-white px-8 py-3.5 text-[13px] font-bold tracking-wider hover:bg-[#d62f24] transition-all uppercase flex-1 sm:flex-initial"
              >
                {t.disagree}
              </button>
              <button
                onClick={() => setIsCookieModalOpen(false)}
                className="bg-[#2D2D2D] text-white px-8 py-3.5 text-[13px] font-bold tracking-wider hover:bg-[#1a1a1a] transition-all uppercase flex-1 sm:flex-initial"
              >
                {t.seeSettings}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
