"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, BarChart2, Calendar, Map, Home, MapIcon, Briefcase, ChevronRight } from "lucide-react";

interface MegaMenuProps {
  type: string;
  data: any;
  isOpen: boolean;
}

export default function MegaMenu({ type, data, isOpen }: MegaMenuProps) {
  if (!isOpen) return null;

  const RedBullet = () => <span className="w-3 h-3 bg-primary-red inline-block mr-3 mt-1 flex-shrink-0" />;

  const renderSchoolMenu = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
      <div className="p-12 flex flex-col gap-6">
        <ul className="flex flex-col gap-6">
          {data.leftLinks.map((link: any, idx: number) => (
            <li key={idx}>
              <Link href={link.href} className="flex items-start text-[17px] font-[600] text-gray-800 hover:text-primary-red">
                <RedBullet /> {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col">
        {data.rightSections.map((section: any, idx: number) => (
          <div key={idx} className={`flex-1 p-8 flex flex-col justify-center ${idx === 1 ? "bg-[#3d1311]" : "bg-primary-red"} text-white group cursor-pointer transition-colors hover:brightness-110`}>
            <div className="flex items-center gap-5 mb-2">
              {section.icon === "map-pin" && <MapPin size={36} />}
              {section.icon === "bar-chart" && <BarChart2 size={36} />}
              {section.icon === "calendar" && <Calendar size={36} />}
              <h3 className="text-[20px] font-[700] uppercase tracking-[0.12em]">{section.title}</h3>
            </div>
            {section.image && (
              <div className="mt-4 relative w-full h-36 overflow-hidden border-2 border-white/20">
                <Image src={section.image} alt={section.subtext} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-sm font-[700] uppercase tracking-[0.15em]">{section.subtext}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderCoursesMenu = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-[500px]">
      <div className="bg-primary-red p-12 text-white flex flex-col">
        <p className="text-[14px] font-[400] leading-relaxed mb-10">
          {data.description}
        </p>
        <Link href={data.button.href} className="mt-auto bg-white text-primary-red font-[700] py-4 px-10 rounded-full text-center hover:bg-primary-dark hover:text-white transition-all shadow-xl tracking-widest">
          {data.button.label}
        </Link>
      </div>
      <div className="md:col-span-3 p-12 grid grid-cols-1 md:grid-cols-3 gap-12 bg-white">
        {data.columns.map((col: any, idx: number) => (
          <div key={idx} className="flex flex-col gap-6">
            <h3 className="text-[16px] font-[700] uppercase tracking-[0.1em] text-gray-900 border-b-4 border-gray-100 pb-4 mb-2">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-5">
              {col.links.map((link: any, lIdx: number) => (
                <li key={lIdx}>
                  <Link href={link.href} className="flex items-start text-[14px] font-[600] text-gray-700 hover:text-primary-red transition-colors leading-tight">
                    <RedBullet /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {col.extra && (
              <div className="mt-8">
                <h3 className="text-[16px] font-[900] uppercase tracking-[0.1em] text-gray-900 border-b-4 border-gray-100 pb-4 mb-4">
                  {col.extra.title}
                </h3>
                <ul className="flex flex-col gap-5">
                  {col.extra.links.map((link: any, lIdx: number) => (
                    <li key={lIdx}>
                      <Link href={link.href} className="flex items-start text-[14px] font-[700] text-gray-700 hover:text-primary-red transition-colors">
                        <RedBullet /> {link.label}
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
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-[450px]">
      <div className="bg-primary-red p-0 text-white flex flex-col">
        <div className="p-10 pb-4">
          <div className="flex items-center gap-4 mb-8">
            <MapPin size={28} className="text-white" />
            <h3 className="text-[18px] font-[700] uppercase tracking-[0.15em]">{data.leftSection.title}</h3>
          </div>
          <div className="relative w-full h-36 mb-6 border-2 border-white/20">
            <Image src={data.leftSection.image} alt="Campus" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-[12px] font-[700] uppercase tracking-widest">{data.leftSection.subtext}</span>
            </div>
          </div>
          <div className="relative w-full h-36 mb-8 border-2 border-white/20 opacity-90 hover:opacity-100 transition-opacity">
            <Image src="/assets/card-alumni.jpg" alt="Dubai" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-[12px] font-[700] uppercase tracking-widest">Dubai Campus</span>
            </div>
          </div>
        </div>
        <div className="px-10 pb-10 flex flex-col gap-5">
          {data.leftSection.links.map((link: any, idx: number) => (
            <Link key={idx} href={link.href} className="flex items-center gap-4 text-[12px] font-[600] uppercase tracking-[0.05em] hover:translate-x-2 transition-transform">
              {link.icon === "map" && <Map size={18} />}
              {link.icon === "home" && <Home size={18} />}
              {link.icon === "map-signs" && <MapIcon size={18} />}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 p-12 flex flex-col gap-12 bg-white">
        <ul className="flex flex-col gap-8">
          {data.rightLinks.map((link: any, idx: number) => (
            <li key={idx}>
              <Link href={link.href} className="flex items-start text-[17px] font-[600] text-gray-800 hover:text-primary-red">
                <RedBullet /> {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <p className="text-[15px] font-[700] text-gray-900 uppercase tracking-[0.12em] mb-8 border-b-2 border-gray-100 pb-3">
            Pay for your studies:
          </p>
          <div className="grid grid-cols-3 gap-6">
            {data.bottomCards.map((card: any, idx: number) => (
              <div key={idx} className="relative group cursor-pointer overflow-hidden aspect-[16/11]">
                <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-3 text-center group-hover:bg-black/40 transition-colors">
                  <span className="text-[11px] md:text-[13px] font-[700] text-white tracking-[0.12em] uppercase leading-tight">{card.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBusinessMenu = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-[400px]">
      <div className="md:col-span-3 p-12 flex flex-col bg-white">
        <ul className="flex flex-col gap-10 mb-14">
          {data.links.map((link: any, idx: number) => (
            <li key={idx}>
              <Link href={link.href} className="flex items-start text-[20px] font-[700] text-gray-900 hover:text-primary-red">
                <RedBullet /> {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-3 gap-8">
          {data.cards.map((card: any, idx: number) => (
            <div key={idx} className="relative group overflow-hidden aspect-[16/10] cursor-pointer">
              <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 text-center group-hover:bg-black/20 transition-colors">
                <span className="text-[14px] font-[700] text-white tracking-[0.15em] uppercase">{card.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary-red p-12 flex flex-col items-center justify-center text-white group cursor-pointer hover:brightness-110 transition-all">
        <Briefcase size={80} className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
        <h3 className="text-[20px] font-[700] text-center uppercase tracking-[0.2em] leading-snug">{data.rightBox.title}</h3>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "circOut" }}
      className="absolute top-full left-0 w-full bg-white border-b-4 border-primary-red shadow-2xl z-50 overflow-hidden"
    >
      <div className="container mx-auto">
        {type === "school" && renderSchoolMenu()}
        {type === "courses" && renderCoursesMenu()}
        {type === "student-life" && renderStudentLifeMenu()}
        {type === "business" && renderBusinessMenu()}
      </div>
    </motion.div>
  );
}
