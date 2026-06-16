"use client";

interface ValidationDetails {
  assessmentTitle: string;
  assessmentText: string;
  downloadFrameworkLabel?: string;
  downloadFrameworkHref?: string;
  certificationTitle: string;
  diplomaName: string;
  rncpLabel: string;
  rncpLink: string;
  diplomaCodeLabel: string;
  diplomaCode: string;
  ministry: string;
  expirationLabel: string;
  expirationDate: string;
  certificationNote?: string;
  equivalencesTitle?: string;
  equivalencesItems?: string[];
}

interface CourseValidationProps {
  title: string;
  details: ValidationDetails;
}

export default function CourseValidation({ title, details }: CourseValidationProps) {
  return (
    <div className="space-y-10">
      <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-none mt-[-2px]">
        {title}
      </h2>

      <div className="space-y-12">
        {/* Assessment Methods */}
        <div className="space-y-6">
          <h3 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-tight">
            {details.assessmentTitle}
          </h3>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl">
            <p className="text-[15px] text-gray-700 leading-relaxed max-w-3xl">
              {details.assessmentText}
            </p>
            {details.downloadFrameworkLabel && details.downloadFrameworkHref && (
              <a 
                href={details.downloadFrameworkHref} 
                className="inline-block bg-[#F24841] text-white px-8 py-3 rounded-full font-medium hover:bg-[#D13D37] transition-colors whitespace-nowrap"
              >
                {details.downloadFrameworkLabel}
              </a>
            )}
          </div>
        </div>

        {/* Certification */}
        <div className="space-y-6 max-w-4xl">
          <h3 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-tight">
            {details.certificationTitle}
          </h3>
          
          <div className="space-y-4 text-[15px] text-gray-700 font-medium">
            <p className="text-black font-bold text-[18px]">{details.diplomaName}</p>
            
            <div className="space-y-2">
              <p>
                <a 
                  href={details.rncpLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-[#F24841] text-[#F24841]/70 transition-colors"
                >
                  {details.rncpLabel}
                </a>
              </p>
              <p>{details.diplomaCodeLabel} {details.diplomaCode}</p>
              <p>{details.ministry}</p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <p className="font-bold text-black text-[15px]">
                {details.expirationLabel}
              </p>
              <p>{details.expirationDate}</p>
            </div>
            
            {details.certificationNote && (
              <p className="text-[15px] italic text-gray-700 mt-6 leading-relaxed">
                {details.certificationNote}
              </p>
            )}
          </div>
        </div>

        {/* Equivalences */}
        {details.equivalencesTitle && details.equivalencesItems && (
          <div className="space-y-6 max-w-4xl pt-4">
            <h3 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-tight">
              {details.equivalencesTitle}
            </h3>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              {details.equivalencesItems.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
