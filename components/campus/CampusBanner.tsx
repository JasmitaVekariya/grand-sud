"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

interface CampusBannerProps {
  title: string;
  image: string;
  postalLabel: string;
  postalAddress: string;
  programsLabel: string;
  programs: string;
}

export default function CampusBanner({
  title,
  image,
  postalLabel,
  postalAddress,
  programsLabel,
  programs,
}: CampusBannerProps) {
  return (
    <section className="relative w-full bg-[#cb3329]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px] lg:min-h-[480px]">
        <div className="relative h-[320px] lg:h-auto overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-primary-red px-3 py-2 md:px-4 md:py-3 shadow-md">
            <Image
              src="/assets/logo.jpg"
              alt="Grand Sud"
              width={88}
              height={36}
              className="h-7 md:h-9 w-auto object-contain brightness-0 invert"
            />
          </div>
        </div>

        <div className="bg-[#cb3329] text-white px-8 py-10 md:px-12 lg:px-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 max-w-xl"
          >
            <h1 className="text-[28px] md:text-[34px] lg:text-[38px] font-bold uppercase leading-tight tracking-tight">
              {title}
            </h1>

            <div className="space-y-5 text-[14px] md:text-[15px] leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" strokeWidth={2} />
                <p>
                  <span className="font-semibold">{postalLabel}:</span> {postalAddress}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="mt-1 shrink-0" strokeWidth={2} />
                <p>
                  <span className="font-semibold">{programsLabel}:</span> {programs}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
