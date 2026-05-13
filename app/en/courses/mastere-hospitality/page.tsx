import CourseBanner from "@/components/courses/CourseBanner";

export default function MastereHospitalityPage() {
  const t = {
    title: "Mastère Hospitality Management",
    image: "/assets/Gemini_Generated_Image_euyvcheuyvcheuyv-scaled-e1756721064422.png",
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
          Luxury Hospitality Strategy
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            The Mastère Hospitality Management is an elite postgraduate programme for students aspiring to 
            executive roles in the luxury hotel and resort industry. Taught in English, it combines 
            advanced hospitality operations with strategic financial management and luxury brand positioning.
          </p>
        </div>
      </div>
    </main>
  );
}
