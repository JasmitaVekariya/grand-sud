import CourseBanner from "@/components/courses/CourseBanner";

export default function MastereTourismPage() {
  const t = {
    title: "Mastere in Event and Tourism Project Management",
    image: "/assets/Gemini_Generated_Image_j1wcudj1wcudj1wc-scaled-e1756654688857.png",
    details: [
      { label: "Language of the course", value: "French" },
      { label: "Level", value: "7 (bac+5)" },
      { label: "Status", value: "student, apprentice, job seeker, and employee (CPF transition)" },
      { label: "Schedule", value: "initial or work-study—1 week at the training center/3 week at the company" },
      { label: "Duration", value: "2 years—1,148 hours" },
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
          Advanced Management & Leadership
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            The Mastere in Event and Tourism Project Management is a strategic programme designed for 
            future leaders in the global tourism industry. It focuses on large-scale project management, 
            strategic marketing, and sustainable development in the MICE and luxury travel sectors.
          </p>
        </div>
      </div>
    </main>
  );
}
