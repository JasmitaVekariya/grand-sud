import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingInfo from "@/components/layout/FloatingInfo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Welcome - Grand Sud - 100% Management & Tourism School",
  description: "The 100% Management & Tourism school since 1991 | A Supdeform School",
  icons: {
    icon: '/icon.svg',
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} h-full antialiased font-montserrat`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <FloatingInfo />
        </LanguageProvider>
      </body>
    </html>
  );
}
