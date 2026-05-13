import CourseBanner from "@/components/courses/CourseBanner";

export default function BTSMCOPage() {
  const t = {
    title: "BTS MCO",
    image: "/assets/Gemini_Generated_Image_99uv1u99uv1u99uv-e1756911385254.png",
    details: [
      { label: "Language of instruction", value: "English" },
      { label: "Level", value: "5 (two years of postsecondary education)" },
      { label: "Status", value: "student, apprentice, job seeker, and employee (CPF transition)" },
      { label: "Schedule", value: "full-time or work-study—1 week at the training center/2 week at the company" },
      { label: "Duration", value: "2 years—1,162 hours" },
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
          Objectives
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            The BTS MCO (Management Commercial Opérationnel) is designed to train future managers capable of managing 
            a commercial unit or a part of it. This course provides a strong foundation in management, marketing, 
            and commercial relations.
          </p>
        </div>
      </div>
    </main>
  );
}
