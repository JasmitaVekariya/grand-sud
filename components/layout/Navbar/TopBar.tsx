import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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

  return (
    <div className="bg-[#812522] text-white py-2 px-4 text-[10px] md:text-[11px] border-b border-white/5 uppercase tracking-[0.12em] font-semibold">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between md:px-[200px]">

        <div className="flex-1 text-center">
          {lang === "fr" ? "L'ÉCOLE 100% MANAGEMENT & TOURISME DEPUIS 1991 | UNE ÉCOLE SUPDEFORM" : "THE 100% MANAGEMENT & TOURISM SCHOOL SINCE 1991 | A SUPDEFORM SCHOOL"}
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-2">
            <Link href="https://facebook.com/ecolegrandsud" target="_blank" className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-md hover:bg-white/40 transition-colors">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.602 0 2.703.117 2.703.117v3.382s-1.136-.01-2.21-.01c-1.622 0-2.242.639-2.242 2.112v1.957h4.39l-.569 3.667h-3.82v7.98h-4.11z"/>
              </svg>
            </Link>
            <Link href="https://instagram.com/ecolegrandsud" target="_blank" className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-md hover:bg-white/40 transition-colors">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
            <Link href="https://youtube.com/@ecolegrandsud" target="_blank" className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-md hover:bg-white/40 transition-colors">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </Link>
            <Link href="https://linkedin.com/school/ecolegrandsud" target="_blank" className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-md hover:bg-white/40 transition-colors">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handleLanguageChange("en")}
              className={`transition-all duration-300 ${lang === "en" ? "opacity-100 scale-110" : "opacity-40 hover:opacity-100"}`}
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-auto shadow-sm" />
            </button>
            <button 
              onClick={() => handleLanguageChange("fr")}
              className={`transition-all duration-300 ${lang === "fr" ? "opacity-100 scale-110" : "opacity-40 hover:opacity-100"}`}
            >
              <img src="https://flagcdn.com/w40/fr.png" alt="Français" className="w-6 h-auto shadow-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

