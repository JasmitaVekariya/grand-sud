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
      <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight">
        {title}
      </h2>

      <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed max-w-4xl">
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

            <div className="grid grid-cols-2 md:grid-cols-4 w-full items-stretch">
              {category.jobs.map((job, i) => (
                <div 
                  key={i}
                  className={`flex items-center justify-center px-4 py-8 text-center text-white text-[13px] md:text-[14px] font-bold uppercase tracking-wider leading-tight min-h-[80px] h-full
                    ${job.isDarkRed ? "bg-[#4D1B19]" : "bg-[#3F3F3F]"}
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
