import CourseBanner from "@/components/courses/CourseBanner";

export default function AmadeusPage() {
  const t = {
    title: "GDS AMADEUS",
    image: "/assets/Gemini_Generated_Image_zhhzwzhhzwzhhzwz-scaled.png",
    details: [
      { label: "Language of instruction", value: "French" },
      { label: "Level", value: "–" },
      { label: "Status", value: "student, job seeker and employee (CPF transition)" },
      { label: "Pace", value: "initial" },
      { label: "Duration", value: "–" },
    ],
    logos: [] // No specific logos mentioned for this intensive course
  };

  return (
    <main className="bg-white pb-20">
      <CourseBanner 
        title={t.title} 
        image={t.image} 
        details={t.details} 
        logos={t.logos}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-16 text-center border-t border-b border-gray-100">
        <p className="text-lg font-medium text-gray-900">
          The Amadeus GDS training course will be back very soon in an updated format, so stay tuned for more information!
        </p>
      </div>
    </main>
  );
}
