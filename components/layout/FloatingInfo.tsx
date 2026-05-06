"use client";

import { motion } from "framer-motion";

export default function FloatingInfo() {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 md:bottom-10 right-6 md:right-10 z-[100] w-10 h-10 md:w-12 md:h-12 bg-[#8B2318] hover:bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-white/10"
      aria-label="Information"
    >
      <div className="w-6 h-6 md:w-8 md:h-8 bg-white group-hover:bg-[#8B2318] rounded-full flex items-center justify-center transition-colors duration-300">
        <span className="text-[#8B2318] group-hover:text-white text-base md:text-lg font-black italic font-serif transition-colors duration-300">i</span>
      </div>
    </motion.button>
  );
}
