"use client";

import TopBar from "./TopBar";
import NavMenu from "./NavMenu";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col overflow-visible">
      <TopBar lang={lang} setLang={setLang} />
      <NavMenu lang={lang} />
    </header>
  );
}
