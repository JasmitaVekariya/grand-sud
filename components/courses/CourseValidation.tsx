"use client";

interface ValidationDetails {
  assessmentTitle: string;
  assessmentText: string;
  certificationTitle: string;
  diplomaName: string;
  rncpLabel: string;
  rncpLink: string;
  diplomaCodeLabel: string;
  diplomaCode: string;
  ministry: string;
  expirationLabel: string;
  expirationDate: string;
}

interface CourseValidationProps {
  title: string;
  details: ValidationDetails;
}

export default function CourseValidation({ title, details }: CourseValidationProps) {
  return (
    <div className="space-y-10">
      <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight">
        {title}
      </h2>

      <div className="space-y-12">
        {/* Assessment Methods */}
        <div className="space-y-4">
          <h3 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-tight">
            {details.assessmentTitle}
          </h3>
          <p className="text-[15px] text-gray-700 leading-relaxed max-w-3xl">
            {details.assessmentText}
          </p>
        </div>

        {/* Certification */}
        <div className="space-y-6">
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
                  className="underline hover:text-primary-red transition-colors"
                >
                  {details.rncpLabel}
                </a>
              </p>
              <p>{details.diplomaCodeLabel} {details.diplomaCode}</p>
              <p>{details.ministry}</p>
            </div>

            <div className="space-y-1 pt-2">
              <p className="font-bold text-black uppercase text-[13px] tracking-wider">
                {details.expirationLabel}
              </p>
              <p>{details.expirationDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
