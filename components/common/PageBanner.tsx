"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageBannerProps {
  title: string | React.ReactNode;
  image: string;
  height?: string;
  overlayOpacity?: number;
}

export default function PageBanner({
  title,
  image,
  height = "h-[500px] lg:h-[600px]",
  overlayOpacity = 0.3
}: PageBannerProps) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>

      {/* Split Background Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">

        {/* Left Section - Image */}
        <div className="relative h-[300px] lg:h-full overflow-hidden">
          <Image
            src={image}
            alt={typeof title === "string" ? title : "Banner"}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle Dark Overlay for readability */}
          <div
            className="absolute inset-0 bg-black/20"
          />
        </div>

        {/* Right Section - Solid Color Panel */}
        <div className="bg-primary-red h-full" />

      </div>

      {/* Overlapping Content Layer */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center translate-x-[8%] lg:translate-x-[12%]"
          >
            <h1 className="text-white text-left text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight pointer-events-auto whitespace-nowrap">
              {title}
            </h1>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
