"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface GenericLoginPageProps {
  lang: "en" | "fr";
  type: "student" | "faculty";
}

export default function GenericLoginPage({ lang, type }: GenericLoginPageProps) {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${lang}/`);
  };

  const t = {
    en: {
      student: "STUDENT AND ALUMNI LOGIN",
      faculty: "SPEAKER LOGIN",
      username: "Username or Email Address",
      password: "Password",
      remember: "Remember Me",
      submit: "LOG IN",
      forgot: "Forgotten password",
      back: "BACK TO CAREER CENTER"
    },
    fr: {
      student: "CONNEXION ÉTUDIANT ET ALUMNI",
      faculty: "CONNEXION INTERVENANT",
      username: "Nom d'utilisateur ou adresse e-mail",
      password: "Mot de passe",
      remember: "Se souvenir de moi",
      submit: "SE CONNECTER",
      forgot: "Mot de passe oublié",
      back: "RETOUR AU CAREER CENTER"
    }
  }[lang];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left side: Hero Image with Bracket Title */}
      <div className="relative w-full lg:w-[565px] lg:min-w-[565px] h-[400px] lg:h-auto overflow-hidden pt-[40px]">
        <div className="relative h-full w-full overflow-hidden">
          <Image 
            src="/assets/pexels-pixabay-532173-scaled.jpg" 
            alt="Login Background" 
            fill
                sizes="100vw" 
            className="object-cover brightness-[0.6] grayscale-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-[#8B2318]/40" />
          <div className="absolute left-6 md:left-10 lg:left-12 top-[120px] md:top-[160px] py-12 pl-6 pr-4 pointer-events-none max-w-[85%]">
            {/* White border bracket style */}
            <div className="absolute inset-0 border-l-[4px] border-t-[4px] border-b-[4px] border-white w-[80px] md:w-[100px]" />
            <h1 className="text-white text-[28px] md:text-[44px] lg:text-[52px] font-bold uppercase leading-[1.1] text-left tracking-tight relative z-10 whitespace-pre-line">
              {type === "student" ? t.student : t.faculty}
            </h1>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 bg-white px-8 md:px-16 lg:pl-[120px] pt-[120px] flex flex-col items-start w-full">
        <form onSubmit={handleLogin} className="space-y-10 w-full max-w-md">
            <div className="space-y-4">
              <label className="block text-[13px] font-bold uppercase tracking-widest text-[#333]">
                {t.username}
              </label>
              <input 
                type="text" 
                required
                className="w-full border-b border-gray-200 py-4 outline-none focus:border-primary-red transition-colors text-[18px] font-medium"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-[13px] font-bold uppercase tracking-widest text-[#333]">
                {t.password}
              </label>
              <input 
                type="password" 
                required
                className="w-full border-b border-gray-200 py-4 outline-none focus:border-primary-red transition-colors text-[18px] font-medium"
              />
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="remember" className="w-4 h-4 accent-primary-red cursor-pointer" />
              <label htmlFor="remember" className="text-[14px] font-medium text-[#666] cursor-pointer">
                {t.remember}
              </label>
            </div>

            <button 
              type="submit"
              className="bg-[#E25A4B] hover:bg-primary-red text-white font-bold px-12 py-5 rounded-md text-[13px] tracking-widest uppercase transition-all shadow-lg hover:shadow-red-900/20 w-fit"
            >
              {t.submit}
            </button>

            <a href="#" className="block text-primary-red/60 hover:text-primary-red text-[13px] font-bold transition-colors uppercase tracking-widest">
              {t.forgot}
            </a>
          </form>
        </div>
    </div>
  );
}
