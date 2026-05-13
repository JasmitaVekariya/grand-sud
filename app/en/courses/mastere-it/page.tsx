import CourseBanner from "@/components/courses/CourseBanner";

export default function MastereITPage() {
  const t = {
    title: "Mastère IT & Tourism",
    image: "/assets/Gemini_Generated_Image_o2x5nlo2x5nlo2x5-scaled-e1756724790741.png",
    details: [
      { label: "Language of instruction", value: "English" },
      { label: "Level", value: "7 (bac+5)" },
      { label: "Status", value: "student" },
      { label: "Pace", value: "initial" },
      { label: "Duration", value: "2 years – 1,204 hours" },
    ],
    logos: ["/assets/logo-france-competences.png"]
  };

  return (
    <main className="bg-white pb-20">
      <CourseBanner 
        title={t.title} 
        image={t.image} 
        details={t.details} 
        logos={t.logos}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px] py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider border-l-4 border-primary-red pl-6">
          Digital Transformation Leadership
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            The Mastère IT & Tourism is our most advanced technology programme, designed for future CTOs and 
            digital strategy directors in the travel industry. Taught in English, it covers complex 
            system architecture, big data analytics for tourism, and the implementation of AI-driven 
            solutions in global travel platforms.
          </p>
        </div>
      </div>
    </main>
  );
}
