"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { MapPin, BarChart2, Calendar, Map, Home, MapIcon, Briefcase, ChevronRight } from "lucide-react";
import NavLinkLabel from "./NavLinkLabel";

interface MegaMenuProps {
  type: string;
  data: any;
  isOpen: boolean;
  onNavigate?: () => void;
}

export default function MegaMenu({ type, data, isOpen, onNavigate }: MegaMenuProps) {
  if (!isOpen) return null;

  const handleMenuClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (event.target as HTMLElement).closest("a[href]");
    if (anchor && onNavigate) {
      onNavigate();
    }
  };

  const RedBullet = () => <span className="w-3 h-3 bg-primary-red inline-block mr-3 mt-1 flex-shrink-0" />;

  const renderSchoolMenu = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-[280px]">
      <div className="md:col-span-5 py-8 md:py-10 px-8 md:px-10 flex flex-col justify-center bg-white">
        <ul className="flex flex-col gap-3">
          {data.leftLinks.map((link: any, idx: number) => (
            <li key={idx}>
              <Link href={link.href} prefetch={false} className="flex items-center text-[15px] font-[500] text-gray-900 hover:text-primary-red transition-colors">
                <span className="w-2.5 h-2.5 bg-primary-red mr-3 flex-shrink-0" /> {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-7 flex flex-col h-full">
        {data.rightSections.map((section: any, idx: number) => {
          const Content = (
            <div className={`flex-1 px-8 py-3 flex flex-col justify-center ${idx === 1 ? "bg-[#3d1311]" : "bg-primary-red"} text-white group cursor-pointer transition-colors hover:brightness-105 h-full`}>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {section.icon === "map-pin" && <MapPin size={22} />}
                  {section.icon === "bar-chart" && <BarChart2 size={22} />}
                  {section.icon === "calendar" && <Calendar size={22} />}
                </div>
                <h3 className="text-[13px] font-[700] uppercase tracking-widest">{section.title}</h3>
              </div>
              {section.image && (idx === 0) && (
                <div className="mt-2 relative w-full h-20 overflow-hidden border border-white/20">
                  <Image
                    src={section.image}
                    alt={section.subtext}
                    fill
                    sizes="(max-width: 1280px) 280px, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-red/0 group-hover:bg-primary-red/30 transition-colors duration-300 z-10" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
                    <span className="text-[10px] font-[700] uppercase tracking-widest">{section.subtext}</span>
                  </div>
                </div>
              )}
            </div>
          );

          return section.href ? (
            <Link key={idx} href={section.href} prefetch={false} className="flex-1">
              {Content}
            </Link>
          ) : (
            <div key={idx} className="flex-1">
              {Content}
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCoursesMenu = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-[350px]">
      <div className="md:col-span-3 bg-primary-red p-8 md:p-10 text-white flex flex-col justify-center">
        <p className="text-[14px] font-[500] leading-relaxed mb-8 opacity-90">
          {data.description}
        </p>
        <Link href={data.button.href} prefetch={false} className="relative group w-fit">
          <div className="bg-white text-primary-red font-[700] py-2.5 px-8 rounded-full text-center tracking-widest text-[13px] transition-all overflow-hidden relative">
            <span className="relative z-20 uppercase">{data.button.label}</span>
            <div className="absolute inset-0 bg-primary-red/0 group-hover:bg-primary-red/30 transition-colors duration-300 z-10" />
          </div>
        </Link>
      </div>
      <div className="md:col-span-9 py-8 md:py-10 px-8 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 bg-white">
        {data.columns.map((col: any, idx: number) => (
          <div key={idx} className="flex flex-col">
            <h3 className="text-[14px] font-[700] uppercase tracking-widest text-gray-900 mb-5">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {col.links.map((link: any, lIdx: number) => (
                <li key={lIdx}>
                  <Link href={link.href} prefetch={false} className="flex items-center text-[13px] font-[500] text-gray-800 hover:text-primary-red transition-colors leading-tight">
                    <span className="w-2.5 h-2.5 bg-primary-red mr-3 flex-shrink-0" />
                    <NavLinkLabel label={link.label} isNew={link.isNew} />
                  </Link>
                </li>
              ))}
            </ul>
            {col.extra && (
              <div className="mt-6">
                <h3 className="text-[14px] font-[700] uppercase tracking-widest text-gray-900 mb-4">
                  {col.extra.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.extra.links.map((link: any, lIdx: number) => (
                    <li key={lIdx}>
                      <Link href={link.href} prefetch={false} className="flex items-center text-[13px] font-[500] text-gray-800 hover:text-primary-red transition-colors">
                        <span className="w-2.5 h-2.5 bg-primary-red mr-3 flex-shrink-0" /> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStudentLifeMenu = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-[350px]">
      <div className="md:col-span-4 bg-primary-red text-white flex flex-col">
        <div className="p-8 pb-2">
          <div className="flex items-center gap-3 mb-6">
            <MapPin size={22} className="text-white" />
            <h3 className="text-[14px] font-[700] uppercase tracking-widest">{data.leftSection.title}</h3>
          </div>
          {/* Left Images with Red Overlay */}
          <div className="flex flex-col gap-3 mb-6">
            {data.leftSection.href ? (
              <Link href={data.leftSection.href} prefetch={false} className="relative w-full h-20 overflow-hidden border border-white/20 group cursor-pointer block">
                <Image
                  src={data.leftSection.image}
                  alt="Toulouse"
                  fill
                  sizes="(max-width: 1280px) 280px, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-red/0 group-hover:bg-primary-red/30 transition-colors duration-300 z-10" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
                  <span className="text-[10px] font-[700] uppercase tracking-widest">Toulouse-Labège</span>
                </div>
              </Link>
            ) : (
              <div className="relative w-full h-20 overflow-hidden border border-white/20 group cursor-pointer">
                <Image
                  src={data.leftSection.image}
                  alt="Toulouse"
                  fill
                  sizes="(max-width: 1280px) 280px, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-red/0 group-hover:bg-primary-red/30 transition-colors duration-300 z-10" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
                  <span className="text-[10px] font-[700] uppercase tracking-widest">Toulouse-Labège</span>
                </div>
              </div>
            )}
            <a 
              href="http://formainstitute.ae/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative w-full h-20 overflow-hidden border border-white/20 group cursor-pointer"
            >
              <Image
                src="/assets/card-alumni.jpg"
                alt="Dubai"
                fill
                sizes="(max-width: 1280px) 280px, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-red/0 group-hover:bg-primary-red/30 transition-colors duration-300 z-10" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
                <span className="text-[10px] font-[700] uppercase tracking-widest">Dubai Campus</span>
              </div>
            </a>
          </div>
        </div>
        <div className="px-8 pb-8 flex flex-col gap-3">
          {data.leftSection.links.map((link: any, idx: number) => (
            <Link key={idx} href={link.href} prefetch={false} className="flex items-center gap-3 text-[12px] font-[600] uppercase tracking-widest hover:text-[#3d1311] transition-colors">
              {link.icon === "map" && <Map size={16} />}
              {link.icon === "home" && <Home size={16} />}
              {link.icon === "map-signs" && <MapIcon size={16} />}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="md:col-span-8 py-8 md:py-10 px-8 md:px-10 flex flex-col justify-center bg-white">
        <ul className="flex flex-col gap-4 mb-8">
          {data.rightLinks.map((link: any, idx: number) => (
            <li key={idx}>
              <Link href={link.href} prefetch={false} className="flex items-center text-[15px] font-[500] text-gray-900 hover:text-primary-red transition-colors">
                <span className="w-2.5 h-2.5 bg-primary-red mr-3 flex-shrink-0" /> {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p className="text-[14px] font-[700] text-gray-900 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
            Pay for your studies:
          </p>
          <div className="grid grid-cols-3 gap-4">
            {data.bottomCards.map((card: any, idx: number) => {
              const CardContent = (
                <div className="relative group cursor-pointer overflow-hidden aspect-[16/7] border border-gray-100 h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                  {/* White Hover Overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/30 transition-colors duration-300 z-10" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2 text-center z-20">
                    <span className="text-[11px] font-[700] text-white tracking-widest uppercase leading-tight">{card.title}</span>
                  </div>
                </div>
              );

              return card.href ? (
                <Link key={idx} href={card.href} prefetch={false}>
                  {CardContent}
                </Link>
              ) : (
                <div key={idx}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBusinessMenu = () => (
    <div className="py-8 md:py-10 bg-white min-h-[250px] flex flex-col justify-center">
      <ul className="flex flex-col gap-4 mb-8">
        {data.links.map((link: any, idx: number) => (
          <li key={idx}>
            {link.href ? (
              <Link href={link.href} prefetch={false} className="flex items-center text-[15px] font-[500] text-gray-900 hover:text-primary-red transition-colors">
                <span className="w-2.5 h-2.5 bg-primary-red mr-3 flex-shrink-0" /> {link.label}
              </Link>
            ) : (
              <span className="flex items-center text-[15px] font-[500] text-gray-900 cursor-default select-none">
                <span className="w-2.5 h-2.5 bg-primary-red mr-3 flex-shrink-0" /> {link.label}
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.cards.map((card: any, idx: number) => {
          const CardContent = (
            <div className="relative group overflow-hidden aspect-[16/8] cursor-pointer border border-gray-100 h-full">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
              {/* White Hover Overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/30 transition-colors duration-300 z-10" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2 text-center z-20">
                <span className="text-[11px] font-[700] text-white tracking-widest uppercase">{card.title}</span>
              </div>
            </div>
          );

          return card.href ? (
            <Link key={idx} href={card.href} prefetch={false}>
              {CardContent}
            </Link>
          ) : (
            <div key={idx}>
              {CardContent}
            </div>
          );
        })}
        {/* Business Space Fixed Card - 4th Box */}
        <Link 
          href={data.rightBox.href}
          prefetch={false}
          className="bg-primary-red relative group overflow-hidden aspect-[16/8] cursor-pointer flex items-center justify-center text-white hover:brightness-110 transition-all shadow-md"
        >
          <div className="flex items-center gap-5 px-6">
            <Briefcase size={32} className="text-white opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            <h3 className="text-[14px] font-[800] uppercase tracking-widest leading-tight border-l-2 border-white/30 pl-5">{data.rightBox.title}</h3>
          </div>
        </Link>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "circOut" }}
      onClick={handleMenuClick}
      className="absolute top-full left-0 w-full bg-white border-b-4 border-primary-red shadow-2xl z-50 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px]">
        {type === "school" && renderSchoolMenu()}
        {type === "courses" && renderCoursesMenu()}
        {type === "student-life" && renderStudentLifeMenu()}
        {type === "business" && renderBusinessMenu()}
      </div>
    </motion.div>
  );
}
