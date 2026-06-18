"use client";

interface JobCategory {
  title?: string;
  jobs: {
    label: string;
    isDarkRed: boolean;
  }[];
  prospects?: string;
}

interface CourseJobsProps {
  title: string;
  intro: string;
  categories: JobCategory[];
}

export default function CourseJobs({ title, intro, categories }: CourseJobsProps) {
  return (
    <div className="space-y-12">
      <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
        {title}
      </h2>

      <div className="space-y-6 text-[16px] text-black leading-relaxed max-w-4xl">
        <p dangerouslySetInnerHTML={{ __html: intro }} />
      </div>

      <div className="space-y-16">
        {categories.map((category, idx) => (
          <div key={idx} className="space-y-8">
            {category.title && (
              <h3 className="text-[16px] font-medium text-black max-w-2xl leading-relaxed">
                {category.title}
              </h3>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 w-full items-stretch gap-0">
              {category.jobs.map((job, i) => (
                <div 
                  key={i}
                  className={`flex items-center justify-center px-4 py-8 text-center text-[12px] md:text-[14px] font-bold uppercase tracking-wide leading-tight min-h-[90px] h-full
                    ${job.isDarkRed ? "bg-[#8B2525] text-[#E28C8C]" : "bg-[#2D2D2D] text-white"}
                  `}
                >
                  {job.label}
                </div>
              ))}
            </div>

            {category.prospects && (
              <p className="text-[14px] text-gray-700 leading-relaxed italic">
                {category.prospects}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
