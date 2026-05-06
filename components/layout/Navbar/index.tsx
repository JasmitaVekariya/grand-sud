"use client";

import TopBar from "./TopBar";
import NavMenu from "./NavMenu";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <header className="w-full flex flex-col">
      <TopBar lang={lang} setLang={setLang} />
      <NavMenu lang={lang} />
    </header>
  );
}
