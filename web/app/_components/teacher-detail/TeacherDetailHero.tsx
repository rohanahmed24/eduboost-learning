"use client";

import { ebAsset } from "@/app/_lib/eb-asset";
import { Reveal } from "../motion/Reveal";
import { ScrollPaintHeadline } from "../motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "../motion/scrollPaintTokens";
import { SharedDetailLayout } from "../layout/SharedDetailLayout";
import type { TeacherData } from "@/app/_lib/teachers";

const imgUnion = ebAsset("16b548f8-89d8-48c0-8d0e-08202ce26fb8");
const imgStarPrimary = ebAsset("8b349245-0e4f-44ea-a37e-36356cdd08cb");
const imgStarSecondary = ebAsset("8b349245-0e4f-44ea-a37e-36356cdd08cb");

type Props = {
  teacher: TeacherData;
};

export default function TeacherDetailHero({ teacher }: Props) {
  const leftContent = (
    <>
      <Reveal
        className="flex w-full shrink-0 flex-col items-start gap-6 lg:gap-8 mb-6 lg:mb-12"
        y={16}
        duration={0.8}
      >
        <div className="bg-[#fff7f5] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0">
          <div
            className="relative shrink-0 size-[20px] data-name=Union"
            aria-hidden
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgUnion} />
          </div>
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] lg:text-[18px] text-[#262626] tracking-[-0.18px] whitespace-nowrap">
            Teacher Details
          </p>
        </div>

        <div className="w-full max-w-[877px] font-['PP_Neue_Montreal:Medium',sans-serif] text-[0px] not-italic text-black">
          <ScrollPaintHeadline
            theme="light"
            uniform={scrollPaintLightUniform}
            className="text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.01em]"
            segments={[
              {
                variant: "primary",
                text: teacher.headline,
              },
            ]}
          />
        </div>
      </Reveal>

      <Reveal
          className="relative w-full aspect-[877/511] bg-[#F3F3F3] rounded-[24px] overflow-hidden"
          y={20}
          duration={0.8}
        >
          <img
            src={teacher.image}
            className="absolute inset-0 w-full h-full object-cover object-[50%_18%]"
            alt={`${teacher.name} Portrait`}
          />
          <div className="absolute top-[24px] left-[24px] bg-white px-5 py-2.5 rounded-[100px] shadow-sm flex items-center justify-center">
            <span className="font-['PP_Neue_Montreal:Medium',sans-serif] text-[16px] text-[#262626] tracking-[-0.01em]">
              {teacher.tag}
            </span>
          </div>
        </Reveal>
    </>
  );

  const rightCard = (
    <Reveal
      className="mx-auto flex w-full max-w-[387px] flex-col gap-10"
      y={24}
      delay={0.1}
      duration={0.8}
    >
      <div className="flex items-center gap-2">
        <div className="flex shrink-0 gap-[2px] items-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={i < 3 ? imgStarPrimary : imgStarSecondary}
              className="size-[24px]"
              alt=""
            />
          ))}
        </div>

        <span className="font-['PP_Neue_Montreal:Book',sans-serif] text-[16px] leading-[24px] tracking-[-0.16px] text-black">
          {teacher.rating}
        </span>
        <span className="font-['PP_Neue_Montreal:Book',sans-serif] text-[16px] leading-[24px] tracking-[-0.16px] text-black">
          {teacher.reviewCount}
        </span>
      </div>

      <div className="w-full h-px bg-[#EBEBEB]" />

      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="font-['PP_Neue_Montreal:Medium',sans-serif] text-[28px] leading-[28px] tracking-[-0.56px] text-black">
            Name:
          </span>
          <span className="font-['PP_Neue_Montreal:Book',sans-serif] text-[16px] leading-[24px] tracking-[-0.16px] text-[#262626]">
            {teacher.name}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-['PP_Neue_Montreal:Medium',sans-serif] text-[28px] leading-[28px] tracking-[-0.56px] text-black">
            Experience:
          </span>
          <span className="font-['PP_Neue_Montreal:Book',sans-serif] text-[16px] leading-[24px] tracking-[-0.16px] text-[#262626]">
            {teacher.role}
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-[#EBEBEB]" />

      <div className="flex w-full flex-col gap-4">
        <h4 className="m-0 font-['PP_Neue_Montreal:Medium',sans-serif] text-[28px] leading-[28px] tracking-[-0.56px] text-black">
          Teacher Skill and Expertise
        </h4>

        <div className="flex flex-col gap-3">
          {teacher.skills.map((skill, index) => (
            <div key={index} className="flex items-start gap-3">
              <img src={imgUnion} className="size-[20px] shrink-0" alt="" />
              <span className="font-['PP_Neue_Montreal:Medium',sans-serif] text-[16px] leading-[24px] tracking-[-0.16px] text-[#262626]">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );

  return (
    <SharedDetailLayout
      leftContent={leftContent}
      rightCard={rightCard}
      sectionBg="bg-[#f1f1f1]"
      stopSelector='section#teacher-info'
      stickyDesktop
      rightCardClassName="lg:min-h-[796px] lg:px-6 lg:py-[40px]"
    />
  );
}
