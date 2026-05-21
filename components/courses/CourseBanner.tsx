"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CourseDetail {
  label: string;
  value: string;
}

interface CourseBannerProps {
  title: string;
  image: string;
  details: CourseDetail[];
  additionalInfo?: string;
  logos?: string[];
}

export default function CourseBanner({ 
  title, 
  image, 
  details, 
  additionalInfo,
  logos 
}: CourseBannerProps) {
  return (
    <section className="relative w-full bg-[#cb3329]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[150px] py-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-10 items-center gap-8 lg:gap-0">
          
          {/* Left Section - Image & Title (60%) */}
          <div className="relative lg:col-span-6 flex flex-col justify-center">
            <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-center"
                priority
              />
              {/* Overlay for Title */}
              <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-12">
                <motion.h1 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-primary-red text-4xl md:text-5xl lg:text-5xl font-bold uppercase tracking-tight"
                >
                  {title}
                </motion.h1>
              </div>
            </div>
          </div>

          {/* Right Section - Course Info (40%) */}
          <div className="lg:col-span-4 bg-[#cb3329] text-white p-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-1"
            >
              {details.map((detail, idx) => (
                <p key={idx} className="text-xs md:text-sm leading-relaxed">
                  <span className="font-semibold uppercase tracking-wider">{detail.label}:</span> {detail.value}
                </p>
              ))}
              
              {additionalInfo && (
                <p className="text-sm md:text-base italic pt-1 opacity-90">
                  {additionalInfo}
                </p>
              )}

              {/* Logos */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                {logos?.map((logo, idx) => (
                  <div key={idx} className="relative h-[150px] w-[150px] bg-white rounded-md p-2 shadow-sm">
                    <Image
                      src={logo}
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
                {/* Placeholder for National Diploma logo if needed */}
                <div className="relative w-20 h-20 border-2 border-white/30 rounded-full flex items-center justify-center text-[8px] font-bold text-center uppercase p-1">
                  National Education Diploma
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
