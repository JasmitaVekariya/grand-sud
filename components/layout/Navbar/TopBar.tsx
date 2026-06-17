"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { navigationData } from "@/config/navigation";

interface TopBarProps {
  lang: "fr" | "en";
  setLang: (lang: "fr" | "en") => void;
}

export default function TopBar({ lang, setLang }: TopBarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLang: "fr" | "en") => {
    if (newLang === lang) return;

    const normalizedPath = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

    const manualRouteMappings: Record<string, string> = {
      "/en/school/recruitments": "/fr/lecole/recrutement",
      "/fr/lecole/recrutement": "/en/school/recruitments",
      "/en/apply": "/fr/candidater",
      "/fr/candidater": "/en/apply",
      "/en/welcome/business/dedicated-page-for-businesses": "/fr/welcome/business/espace-dedie-aux-entreprises",
      "/fr/welcome/business/espace-dedie-aux-entreprises": "/en/welcome/business/dedicated-page-for-businesses"
    };

    if (manualRouteMappings[normalizedPath]) {
      setLang(newLang);
      router.push(manualRouteMappings[normalizedPath]);
      return;
    }

    // Find the equivalent path in the other language
    let targetPath = `/${newLang}`;

    const findEquivalentPath = (): string => {
      const currentData = navigationData[lang];
      const targetData = navigationData[newLang];

      for (let i = 0; i < currentData.length; i++) {
        const item = currentData[i];
        const targetItem = targetData[i];

        if (item.href === pathname) return targetItem.href;

        if (item.megaMenu && targetItem.megaMenu) {
          // Check leftLinks
          if (item.megaMenu.leftLinks && targetItem.megaMenu.leftLinks) {
            const linkIndex = item.megaMenu.leftLinks.findIndex(l => l.href === pathname);
            if (linkIndex !== -1) return targetItem.megaMenu.leftLinks[linkIndex]?.href || `/${newLang}`;
          }
          // Check columns
          if (item.megaMenu.columns && targetItem.megaMenu.columns) {
            for (let j = 0; j < item.megaMenu.columns.length; j++) {
              const col = item.megaMenu.columns[j];
              const targetCol = targetItem.megaMenu.columns[j];
              if (!targetCol) continue;
              
              const linkIndex = col.links.findIndex(l => l.href === pathname);
              if (linkIndex !== -1) return targetCol.links[linkIndex]?.href || `/${newLang}`;

              if (col.extra?.links && targetCol.extra?.links) {
                const exLinkIndex = col.extra.links.findIndex(l => l.href === pathname);
                if (exLinkIndex !== -1) return targetCol.extra.links[exLinkIndex]?.href || `/${newLang}`;
              }
            }
          }
          // Check student-life links
          if (item.megaMenu.leftSection?.links && targetItem.megaMenu.leftSection?.links) {
            const linkIndex = item.megaMenu.leftSection.links.findIndex(l => l.href === pathname);
            if (linkIndex !== -1) return targetItem.megaMenu.leftSection.links[linkIndex]?.href || `/${newLang}`;
          }
          if (item.megaMenu.rightLinks && targetItem.megaMenu.rightLinks) {
            const linkIndex = item.megaMenu.rightLinks.findIndex(l => l.href === pathname);
            if (linkIndex !== -1) return targetItem.megaMenu.rightLinks[linkIndex]?.href || `/${newLang}`;
          }
          // Check rightSections
          if (item.megaMenu.rightSections && targetItem.megaMenu.rightSections) {
            const linkIndex = item.megaMenu.rightSections.findIndex(l => l.href === pathname);
            if (linkIndex !== -1) return targetItem.megaMenu.rightSections[linkIndex]?.href || `/${newLang}`;
          }
          // Check business links
          if (item.megaMenu.links && targetItem.megaMenu.links) {
            const linkIndex = item.megaMenu.links.findIndex(l => l.href === pathname);
            if (linkIndex !== -1) return targetItem.megaMenu.links[linkIndex]?.href || `/${newLang}`;
          }
          // Check bottomCards and cards
          if (item.megaMenu.bottomCards && targetItem.megaMenu.bottomCards) {
            const cardIndex = item.megaMenu.bottomCards.findIndex(c => c.href === pathname);
            if (cardIndex !== -1) return targetItem.megaMenu.bottomCards[cardIndex]?.href || `/${newLang}`;
          }
          if (item.megaMenu.cards && targetItem.megaMenu.cards) {
            const cardIndex = item.megaMenu.cards.findIndex(c => c.href === pathname);
            if (cardIndex !== -1) return targetItem.megaMenu.cards[cardIndex]?.href || `/${newLang}`;
          }
        }
      }
      return `/${newLang}`; // Default to language home if no match found
    };

    const getFallbackPath = (): string => {
      const currentPrefix = `/${lang}`;
      const targetPrefix = `/${newLang}`;

      if (pathname === currentPrefix || pathname === `${currentPrefix}/`) {
        return targetPrefix;
      } else if (pathname.startsWith(`${currentPrefix}/`)) {
        return pathname.replace(currentPrefix, targetPrefix);
      }
      return targetPrefix;
    };

    targetPath = findEquivalentPath();
    if (targetPath === `/${newLang}`) {
      targetPath = getFallbackPath();
    }

    setLang(newLang);
    router.push(targetPath);
  };

  const computeTargetPath = (newLang: "fr" | "en"): string => {
    if (newLang === lang) return pathname;

    const normalizedPath = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

    const manualRouteMappings: Record<string, string> = {
      "/en/school/recruitments": "/fr/lecole/recrutement",
      "/fr/lecole/recrutement": "/en/school/recruitments",
      "/en/apply": "/fr/candidater",
      "/fr/candidater": "/en/apply",
      "/en/welcome/business/dedicated-page-for-businesses": "/fr/welcome/business/espace-dedie-aux-entreprises",
      "/fr/welcome/business/espace-dedie-aux-entreprises": "/en/welcome/business/dedicated-page-for-businesses"
    };

    if (manualRouteMappings[normalizedPath]) {
      return manualRouteMappings[normalizedPath];
    }

    const currentPrefix = `/${lang}`;
    const targetPrefix = `/${newLang}`;
    if (pathname === currentPrefix || pathname === `${currentPrefix}/`) {
      return targetPrefix;
    } else if (pathname.startsWith(`${currentPrefix}/`)) {
      return pathname.replace(currentPrefix, targetPrefix);
    }
    return targetPrefix;
  };

  const handlePrefetch = (newLang: "fr" | "en") => {
    if (newLang === lang) return;
    router.prefetch(computeTargetPath(newLang));
  };

  return (
    <div className="bg-[#3d1311] text-white border-b border-black/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] h-8 md:h-9 flex items-center justify-between gap-4">
        <p className="hidden min-[880px]:block text-[10px] md:text-[11px] uppercase tracking-[0.12em] font-semibold text-white/90 whitespace-nowrap">
          {lang === "fr"
            ? "L'ÉCOLE 100% MANAGEMENT & TOURISME DEPUIS 1991 | UNE ÉCOLE SUPDEFORM"
            : "THE 100% MANAGEMENT & TOURISM SCHOOL SINCE 1991 | A SUPDEFORM SCHOOL"}
        </p>

        <div className="flex items-center gap-4 md:gap-6 shrink-0 ml-auto">
          <div className="hidden min-[880px]:flex items-center gap-3">
            <Link href="https://www.facebook.com/ecolegrandsud/" target="_blank" className="hover:opacity-70 transition-opacity">
              <FaFacebookF size={14} />
            </Link>
            <Link href="https://www.instagram.com/ecolegrandsud/" target="_blank" className="hover:opacity-70 transition-opacity">
              <FaInstagram size={16} />
            </Link>
            <Link href="https://www.youtube.com/@ecolegrandsud" target="_blank" className="hover:opacity-70 transition-opacity">
              <FaYoutube size={16} />
            </Link>
            <Link href="https://www.linkedin.com/school/ecolegrandsud/" target="_blank" className="hover:opacity-70 transition-opacity">
              <FaLinkedinIn size={14} />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleLanguageChange("en")}
              onMouseEnter={() => handlePrefetch("en")}
              className={`cursor-pointer transition-all duration-300 ${lang === "en" ? "opacity-100 scale-110" : "opacity-40 hover:opacity-100"}`}
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-auto shadow-sm" />
            </button>
            <button
              onClick={() => handleLanguageChange("fr")}
              onMouseEnter={() => handlePrefetch("fr")}
              className={`cursor-pointer transition-all duration-300 ${lang === "fr" ? "opacity-100 scale-110" : "opacity-40 hover:opacity-100"}`}
            >
              <img src="https://flagcdn.com/w40/fr.png" alt="Français" className="w-6 h-auto shadow-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
