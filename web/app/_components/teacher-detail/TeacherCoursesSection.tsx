"use client";

import { Reveal, RevealStagger } from "../motion/Reveal";
import { ebAsset } from "@/app/_lib/eb-asset";
import { COURSES } from "@/app/_lib/courses";
import { CourseCard } from "../CourseCard";

type Props = {
  courseSlugs: string[];
  teacherName: string;
};

export default function TeacherCoursesSection({ courseSlugs, teacherName }: Props) {
  const teacherCourses = courseSlugs
    .map((slug) => COURSES.find((c) => c.slug === slug))
    .filter(Boolean) as typeof COURSES;

  return (
    <section id="teacher-courses-section" className="w-full bg-[#f1f1f1]">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-10 md:gap-[60px] px-[clamp(1rem,4vw,3.75rem)] py-[clamp(3rem,10vw,10rem)]">
        <Reveal className="flex w-full shrink-0 flex-col items-start gap-4 lg:gap-8 lg:flex-row lg:items-start" y={16} duration={0.8}>
          <div className="bg-[#fff7f5] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0">
            <div className="relative shrink-0 size-[20px] data-name=Union" aria-hidden>
              <img alt="" className="absolute block max-w-none size-full" src={ebAsset("16b548f8-89d8-48c0-8d0e-08202ce26fb8")} />
            </div>
            <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] lg:text-[18px] text-[#262626] tracking-[-0.18px] whitespace-nowrap">
              Courses by {teacherName}
            </p>
          </div>
          
          <h2 className="text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.01em] font-['PP_Neue_Montreal:Medium',sans-serif] text-black">
            Discover handpicked courses curated by experts to help you learn practical skills and grow confidently in your career.
          </h2>
        </Reveal>

        <RevealStagger className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {teacherCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
