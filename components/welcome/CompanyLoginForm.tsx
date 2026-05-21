"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CompanyLoginFormProps {
  lang: "en" | "fr";
}

export default function CompanyLoginForm({ lang }: CompanyLoginFormProps) {
  const t = {
    en: {
      title: "COMPANY LOGIN",
      username: "Username or Email Address",
      password: "Password",
      rememberMe: "Remember Me",
      login: "LOG IN",
      forgotPassword: "Forgotten password",
      image: "/assets/pexels-pixabay-532173-scaled.jpg"
    },
    fr: {
      title: "CONNEXION ENTREPRISE",
      username: "Identifiant ou adresse e-mail",
      password: "Mot de passe",
      rememberMe: "Se souvenir de moi",
      login: "SE CONNECTER",
      forgotPassword: "Mot de passe oublié",
      image: "/assets/pexels-pixabay-532173-scaled.jpg"
    }
  }[lang];

  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 1000], [1, 1.3]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left side: Hero Image with Bracket Title (Reference from Apply form) */}
      <div className="relative w-full lg:w-[565px] lg:min-w-[565px] h-[400px] lg:h-auto overflow-hidden pt-[40px]">
        <div className="relative h-full w-full overflow-hidden">
          <motion.div 
            style={{ scale: imageScale }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={t.image} 
              alt="Login Background" 
              fill 
              className="object-cover" 
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-[#dc4b3b]/60" />
          <div className="absolute left-6 md:left-10 lg:left-12 top-[120px] md:top-[160px] py-12 pl-6 pr-4 pointer-events-none max-w-[85%]">
            {/* White border bracket style */}
            <div className="absolute inset-0 border-l-[4px] border-t-[4px] border-b-[4px] border-white w-[80px] md:w-[100px]" />
            <h1 className="text-white text-[28px] md:text-[44px] lg:text-[52px] font-bold uppercase leading-[1.1] text-left tracking-tight relative z-10 whitespace-pre-line">
              {t.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Right side: Login Form */}
      <div className="flex-1 bg-white px-8 md:px-16 lg:pl-[120px] pt-[120px] flex flex-col items-start w-full">
        <div className="w-full max-w-md space-y-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[14px] font-bold text-gray-900 uppercase">
                {t.username}
              </label>
              <input 
                type="text" 
                className="w-full border-b-2 border-gray-100 focus:border-[#dc4b3b] outline-none py-3 text-[16px] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[14px] font-bold text-gray-900 uppercase">
                {t.password}
              </label>
              <input 
                type="password" 
                className="w-full border-b-2 border-gray-100 focus:border-[#dc4b3b] outline-none py-3 text-[16px] transition-colors"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 accent-[#dc4b3b]" />
              <label htmlFor="remember" className="text-[14px] font-medium text-gray-700">
                {t.rememberMe}
              </label>
            </div>

            <button className="w-full md:w-auto bg-[#dc4b3b] text-white px-10 py-4 font-bold rounded-sm transition-transform hover:scale-105">
              {t.login}
            </button>
          </form>

          <Link href="#" className="block text-[#dc4b3b] text-[14px] font-medium hover:underline">
            {t.forgotPassword}
          </Link>
        </div>
      </div>
    </div>
  );
}
