import CourseBanner from "@/components/courses/CourseBanner";

export default function BachelorMICEPage() {
  const t = {
    title: "Bachelor MICE Designer",
    image: "/assets/Gemini_Generated_Image_gl11shgl11shgl11-scaled-e1756651535869.png",
    details: [
      { label: "Language of instruction", value: "French" },
      { label: "Level", value: "6 (bac+3)" },
      { label: "Status", value: "student, apprentice, job seeker, and employee (CPF transition)" },
      { label: "Schedule", value: "initial or work-study—1 week at the training center/2 week at the company" },
      { label: "Duration", value: "1 year—560 hours" },
    ],
    additionalInfo: "Training accessible through VAE (validation of acquired experience)",
    logos: ["/assets/logo-france-competences.png"]
  };

  return (
    <main className="bg-white pb-20">
      <CourseBanner 
        title={t.title} 
        image={t.image} 
        details={t.details} 
        additionalInfo={t.additionalInfo}
        logos={t.logos}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px] py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider border-l-4 border-primary-red pl-6">
          Event Design & Management
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            The Bachelor MICE Designer (Meetings, Incentives, Conferences, and Exhibitions) programme is 
            specifically designed for creative and organized individuals looking to master the art of 
            event production and professional tourism management.
          </p>
        </div>
      </div>
    </main>
  );
}
