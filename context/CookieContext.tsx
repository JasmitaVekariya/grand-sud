"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ConsentStatus = "undecided" | "agreed" | "disagreed";

interface CookieContextType {
  isCookieModalOpen: boolean;
  setIsCookieModalOpen: (open: boolean) => void;
  consentStatus: ConsentStatus;
  acceptCookies: () => void;
  declineCookies: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("undecided");

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie-consent") as ConsentStatus;
    if (savedConsent) {
      setConsentStatus(savedConsent);
    } else {
      // Auto-open modal if no consent decision has been saved yet
      setIsCookieModalOpen(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "agreed");
    setConsentStatus("agreed");
    setIsCookieModalOpen(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "disagreed");
    setConsentStatus("disagreed");
    setIsCookieModalOpen(false);
  };

  return (
    <CookieContext.Provider
      value={{
        isCookieModalOpen,
        setIsCookieModalOpen,
        consentStatus,
        acceptCookies,
        declineCookies,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookie() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error("useCookie must be used within a CookieProvider");
  }
  return context;
}
