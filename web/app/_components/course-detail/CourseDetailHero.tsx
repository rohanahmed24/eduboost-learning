"use client";

import { ebAsset } from "@/app/_lib/eb-asset";
import { PillCta } from "../PillCta";
import { ScrollPaintHeadline } from "../motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "../motion/scrollPaintTokens";
import type { CourseData } from "@/app/_lib/courses";

const imgStar = ebAsset("8b349245-0e4f-44ea-a37e-36356cdd08cb");
const imgArrowUpRight = ebAsset("d9d2891c-5e1b-45ed-be9d-40e5a15cbf02");

import { SharedDetailLayout } from "../layout/SharedDetailLayout";

export default function CourseDetailHero({ course }: { course: CourseData }) {
  const leftContent = (
    <>
          {/* ── Left column: pill + headline + image ── */}
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-4 md:gap-8 lg:w-[877px] lg:max-w-[877px]"
            data-node-id="65:82017"
          >
            {/* Pill */}
            <div
              className="bg-[#fff7f5] content-stretch flex shrink-0 items-center justify-center gap-1 rounded-[100px] px-3 py-[7px]"
              data-node-id="65:82018"
            >
              <div className="relative size-[20px] shrink-0" data-name="Union" data-node-id="65:82019">
                <img alt="" className="absolute block size-full" src={imgStar} />
              </div>
              <p className="font-['PP_Neue_Montreal:Book',sans-serif] leading-5 not-italic relative shrink-0 text-[14px] text-black tracking-[-0.56px] whitespace-nowrap md:font-['PP_Neue_Montreal:Medium',sans-serif] md:leading-[24px] md:text-[18px] md:tracking-[-0.18px]" data-node-id="65:82021">
                Course Details
              </p>
            </div>

            {/* Headline */}
            <div
              className="relative w-full shrink-0 font-['PP_Neue_Montreal:Medium',sans-serif] text-[0px] not-italic text-black"
              data-node-id="65:82022"
            >
              <h1 className="sr-only">{course.headline}</h1>
              <ScrollPaintHeadline
                theme="light"
                uniform={scrollPaintLightUniform}
                className="text-[32px] leading-[40px] tracking-[-0.32px] md:text-[clamp(1.625rem,2.8vw+0.85rem,2.5rem)] md:leading-[1.1] md:tracking-[-0.01em]"
                segments={[
                  { variant: "primary", text: course.headlinePrimary ?? course.headline },
                  ...(course.headlineMuted ? [{ variant: "muted" as const, text: course.headlineMuted }] : []),
                ]}
              />
            </div>

            {/* Course image */}
            <div
              className="relative h-[380px] w-full shrink-0 overflow-hidden rounded-2xl md:h-[420px] lg:h-[499px] lg:w-[877px]"
              data-node-id="65:82024"
            >
              <img
                alt={course.cardTitle}
                className="absolute inset-0 block max-w-none object-cover size-full"
                src={course.image}
              />
              <div className="absolute left-1/2 top-3 -translate-x-1/2 flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-[7px] backdrop-blur-[8px] sm:top-4">
                <p className="font-['PP_Neue_Montreal:Medium',sans-serif] text-[14px] leading-5 not-italic text-white whitespace-nowrap">
                  {course.tag}
                </p>
              </div>
          </div>
        </div>
    </>
  );

  const rightCard = (
    <>
              {/* Rating + title + description */}
              <div className="flex flex-col gap-4" data-node-id="65:82027">
                <div className="flex items-center gap-2" data-node-id="65:82028">
                  <div className="flex shrink-0 gap-[2px]" data-node-id="65:82029">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="size-[24px] shrink-0">
                        <img alt="" className="size-full" src={imgStar} />
                      </div>
                    ))}
                  </div>
                  <p className="font-['PP_Neue_Montreal:Book',sans-serif] leading-6 not-italic text-[16px] text-black tracking-[-0.32px]">
                    {course.rating}
                  </p>
                  <p className="font-['PP_Neue_Montreal:Book',sans-serif] leading-6 not-italic text-[16px] text-black tracking-[-0.32px]">
                    {course.reviewCount}
                  </p>
                </div>
                <h2 className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1.2] not-italic text-[24px] text-black tracking-[-0.24px] md:text-[28px] md:tracking-[-0.28px]">
                  {course.cardTitle}
                </h2>
                <p className="font-['PP_Neue_Montreal:Book',sans-serif] leading-6 not-italic text-[16px] text-[#262626] tracking-[-0.16px]">
                  {course.shortDescription}
                </p>
              </div>

              {/* Price */}
              <div
                className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1] not-italic text-[40px] text-black tracking-[-0.4px] md:text-[clamp(2.25rem,4vw+1.25rem,3.5rem)] md:tracking-[-0.56px]"
                data-node-id="65:82035"
              >
                {course.price === "$0" ? "Free" : course.price}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <PillCta
                  className="pill-cta-primary flex w-full items-center justify-center gap-2 rounded-[100px] bg-[#f30] px-6 py-3"
                  label="Buy Course"
                  href="/#pricing"
                  labelClassName="font-['PP_Neue_Montreal:Medium',sans-serif] text-[16px] leading-6 not-italic text-white"
                  iconSrc={imgArrowUpRight}
                  iconSizeClass="size-[24px]"
                  data-node-id="65:82036"
                />
                <PillCta
                  className="pill-cta-ghost flex w-full items-center justify-center gap-2 rounded-[100px] bg-[#f1f1f1] px-6 py-3"
                  label="Get All Courses"
                  href="/courses"
                  labelClassName="font-['PP_Neue_Montreal:Book',sans-serif] text-[16px] leading-6 not-italic text-black"
                  data-node-id="65:82037"
                />
              </div>

              {/* Course includes */}
              <div className="flex flex-col gap-4 pt-2" data-node-id="65:82038">
                <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[1] not-italic text-[28px] text-black tracking-[-0.28px]">
                  This Course includes
                </p>
                <div className="flex flex-col gap-3">
                  {course.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="size-[20px] shrink-0">
                        <img alt="" className="size-full" src={imgStar} />
                      </div>
                      <p className="font-['PP_Neue_Montreal:Book',sans-serif] leading-6 not-italic text-[16px] text-[#262626] tracking-[-0.16px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
    </>
  );

  return (
    <SharedDetailLayout
      leftContent={leftContent}
      rightCard={rightCard}
      sectionBg="bg-[#f1f1f1]"
      stopSelector='section[data-node-id="65:79159"]'
    />
  );
}
