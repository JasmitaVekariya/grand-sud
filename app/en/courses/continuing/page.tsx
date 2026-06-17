"use client";

import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";
import Link from "next/link";

export default function ContinuingEducationPageEN() {
  const sections = [
    { id: "programs", label: "LES FORMATIONS CONTINUES PROPOSÉES" },
    { id: "internships", label: "INTERNSHIPS" },
    { id: "reference", label: "REFERENCE WEBSITE" },
  ];

  return (
    <main className="!bg-white">
      <PageBanner
        title="Continuing Education"
        image="/assets/pexels-fauxels-3184418-scaled.jpg"
      />

      <CourseDetailLayout sections={sections}>
        <div className="bg-white space-y-24">
          <div className="space-y-6">
            <p className="text-[15px] font-bold text-black leading-relaxed">
              Note: this type of training is currently only available in French at our school, so this page is for informational purposes only for English-speaking students.
            </p>
            <p className="text-[15px] font-bold text-black leading-relaxed">
              Continuing education allows you to update your skills throughout your career and is aimed at professionals who wish to develop, retrain, or strengthen their expertise.
            </p>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              The programs are designed to adapt to market needs and developments in tourism. By combining theory and practice, it promotes rapid application in the workplace.
            </p>
          </div>

          {/* Section 1: Programs */}
          <section id="programs" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              LES FORMATIONS CONTINUES PROPOSÉES
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>
                We offer a variety of training courses tailored to professionals seeking continuing education:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>intensive certification courses that will enhance your resume.</li>
                <li>
                  Grand Sud Executive qualification courses lasting 1 to 2 days, enabling participants to perfect their technical or interpersonal skills and apply what they have learned immediately in the workplace.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: Internships */}
          <section id="internships" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              INTERNSHIPS
            </h2>
            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>
                Some training courses require internships to be validated. If the person is not working during the training, then they can complete this internship under normal conditions. However, in the case of a person who is working, if it is not possible to take time off for an internship, then it will be necessary to apply the required skills directly to your employer.
              </p>
            </div>
          </section>

          {/* Section 3: Reference website */}
          <section id="reference" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              REFERENCE WEBSITE
            </h2>
            <div className="bg-gray-50 p-8 rounded-sm">
              <Link
                href="/fr/formations/continue"
                className="text-[18px] text-black underline hover:text-primary-red transition-colors font-bold"
              >
                Continuing education (French only)
              </Link>
            </div>
          </section>
        </div>
      </CourseDetailLayout>
    </main>
  );
}
