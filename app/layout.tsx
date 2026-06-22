import type { Metadata } from "next";
import { Allura, Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingInfo from "@/components/layout/FloatingInfo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const allura = Allura({
  variable: "--font-celebration",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Welcome - Grand Sud - 100% Management & Tourism School",
  description: "The 100% Management & Tourism school since 1991 | A Supdeform School",
  icons: {
    icon: '/icon.svg',
  },
};

import { LanguageProvider } from "@/context/LanguageContext";
import { CookieProvider } from "@/context/CookieContext";
import { AccessibilityProvider } from "@/context/AccessibilityContext";
import AccessibilityWidget from "@/components/accessibility/AccessibilityWidget";
import GlobalAccessibilityFeatures from "@/components/accessibility/GlobalAccessibilityFeatures";
import CookieModal from "@/components/layout/CookieModal";
import SiteIntro from "@/components/layout/SiteIntro";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${allura.variable} h-full antialiased font-montserrat`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          <CookieProvider>
            <AccessibilityProvider>
              <SiteIntro />
              <Navbar />
              <main className="flex-1 flex flex-col pt-[var(--site-header-height)]">{children}</main>
              <Footer />
              <FloatingInfo />
              <AccessibilityWidget />
              <GlobalAccessibilityFeatures />
              <CookieModal />
            </AccessibilityProvider>
          </CookieProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
