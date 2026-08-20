"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "./motion/scrollPaintTokens";
import { Reveal } from "./motion/Reveal";
import { AnimatedStatValue } from "@/app/_components/motion/AnimatedStatValue";
import { ebAsset } from "@/app/_lib/eb-asset";
import { PillCta } from "./PillCta";

export type CourseFilterId =
  | "all"
  | "free"
  | "premium"
  | "no-code-ai"
  | "figma"
  | "english";

type CourseMeta = {
  tier: "free" | "premium";
  topics: ("no-code-ai" | "figma" | "english")[];
};

const COURSE_METAS: CourseMeta[] = [
  { tier: "premium", topics: ["no-code-ai"] },
  { tier: "premium", topics: [] },
  { tier: "premium", topics: ["figma"] },
  { tier: "free", topics: ["english"] },
  { tier: "premium", topics: [] },
  { tier: "premium", topics: [] },
];

function courseVisible(meta: CourseMeta, filter: CourseFilterId) {
  if (filter === "all") return true;
  if (filter === "free") return meta.tier === "free";
  if (filter === "premium") return meta.tier === "premium";
  if (filter === "no-code-ai") return meta.topics.includes("no-code-ai");
  if (filter === "figma") return meta.topics.includes("figma");
  if (filter === "english") return meta.topics.includes("english");
  return true;
}

const FILTER_CHIPS: {
  id: CourseFilterId;
  label: string;
  nodeId: string;
  labelNodeId: string;
}[] = [
  {
    id: "all",
    label: "View All Courses",
    nodeId: "65:78738",
    labelNodeId: "65:78739",
  },
  {
    id: "free",
    label: "Free Courses",
    nodeId: "65:78740",
    labelNodeId: "65:78741",
  },
  {
    id: "premium",
    label: "Premium Courses",
    nodeId: "65:78742",
    labelNodeId: "65:78743",
  },
];

const imgFrame248 = ebAsset("fd726f2b-6c68-42ec-978f-1cd5f6c50fc7");
const imgFrame249 = ebAsset("e057858d-076d-4cdf-9217-181f03209bb4");
const imgFrame250 = ebAsset("a3eb7ef4-1270-4fca-a0ab-5dd914121cb0");
const imgFrame251 = ebAsset("302c268b-d809-43a8-b8dc-0d434c5c8f89");
const imgFrame252 = ebAsset("b2c4228b-1812-4a0b-8a5d-0d6108c00f2c");
const imgFrame253 = ebAsset("479891dc-6a8c-486c-a8ff-b0c0e542d0cb");
const imgUnion = ebAsset("8b349245-0e4f-44ea-a37e-36356cdd08cb");
const imgArrowUpRight01 = ebAsset("d9d2891c-5e1b-45ed-be9d-40e5a15cbf02");
const imgFrame235 = ebAsset("fc50c69a-ac9c-49ec-a6f6-e10f5acb718c");
const imgNotebook02 = ebAsset("b9ffade8-0b71-46e6-b23c-a2c189cb3cd1");
const imgLine1 = ebAsset("8221df2a-ef7a-443d-92ab-7a2b3758a520");
const imgTime02 = ebAsset("bd41e8d4-530c-4786-bb18-e7063c892779");

export default function OurAllCoursesSection({
  badgeText = "Our All Courses",
  headlineText = "Explore all our courses designed to help learners of all levels gain practical skills, advance careers, and achieve their learning goals effectively.",
}: {
  badgeText?: string;
  headlineText?: string;
} = {}) {
  const [filter, setFilter] = useState<CourseFilterId>("all");
  const visible = useMemo(
    () => COURSE_METAS.map((m) => courseVisible(m, filter)),
    [filter],
  );
  const anyVisible = visible.some(Boolean);

  return (
    <section className="w-full bg-[#f1f1f1]" data-node-id="65:78724">
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1440px] flex-col gap-10 px-[clamp(1rem,4vw,3.75rem)] py-[clamp(3rem,10vw,10rem)] md:gap-[60px]">
        <Reveal
          className="relative flex w-full shrink-0 flex-col items-start justify-between gap-8 lg:flex-row lg:items-start"
          data-node-id="65:78725"
          duration={0.74}
          y={16}
        >
          <div
            className="relative inline-flex shrink-0 items-center justify-center gap-1 rounded-[100px] bg-[#fff7f5] px-3 py-[7px]"
            data-node-id="65:78726"
          >
          <div className="relative shrink-0 size-[20px]" data-name="Union" data-node-id="65:78727">
            <img alt="" className="absolute block max-w-none size-full" src={imgUnion} />
          </div>
          <p className="font-['PP_Neue_Montreal',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.18px] whitespace-nowrap" data-node-id="65:78729">
            {badgeText}
          </p>
          </div>
          <div
            className="relative flex w-full min-w-0 shrink-0 flex-col items-start gap-8 lg:w-[893px] lg:max-w-[893px]"
            data-node-id="65:78730"
          >
          <div className="relative w-full min-w-0 shrink-0 font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black" data-node-id="65:78731">
            <ScrollPaintHeadline
              theme="light"
              uniform={scrollPaintLightUniform}
              className="text-[clamp(1.5rem,2.2vw+1rem,2.5rem)] leading-[1] tracking-[-0.01em]"
              segments={[
                {
                  variant: "primary",
                  text: headlineText,
                },
              ]}
            />
          </div>
          <PillCta
            className="pill-cta-primary relative flex shrink-0 items-center gap-[4px] bg-[#f30] px-[24px] py-[12px] rounded-[100px]"
            label="Explore Courses"
            href="/courses"
            labelClassName="font-['PP_Neue_Montreal',sans-serif] font-medium font-medium text-[16px] leading-[24px] not-italic text-white whitespace-nowrap"
            iconSrc={imgArrowUpRight01}
            iconSizeClass="size-[24px]"
            data-node-id="65:78732"
          />
          </div>
        </Reveal>
        <Reveal
          className="relative flex w-full min-w-0 shrink-0 flex-col items-start gap-10"
          data-node-id="65:78736"
          delay={0.05}
          duration={0.76}
          y={18}
        >
        <div
          className="relative flex min-w-0 w-full max-w-full flex-nowrap items-center gap-2 overflow-x-auto overflow-y-visible pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:flex-wrap sm:gap-4 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden"
          data-node-id="65:78737"
          role="toolbar"
          aria-label="Course filters"
        >
          {FILTER_CHIPS.map((chip) => {
            const isActive = filter === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                data-node-id={chip.nodeId}
                onClick={() => setFilter(chip.id)}
                className={`inline-flex shrink-0 snap-start cursor-pointer items-center justify-center rounded-[100px] border border-solid px-4 py-2.5 touch-manipulation transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#f30]/45 focus-visible:ring-offset-2 sm:px-[24px] sm:py-[12px] [-webkit-tap-highlight-color:transparent] ${
                  isActive
                    ? "border-transparent bg-[#f30]"
                    : "border-[#e2e2e2] bg-[#f1f1f1]"
                }`}
              >
                <span
                  className={`m-0 text-[15px] leading-6 not-italic tracking-[-0.16px] whitespace-nowrap sm:text-[16px] ${
                    isActive
                      ? "font-['PP_Neue_Montreal',sans-serif] font-medium font-medium text-white"
                      : "font-['PP_Neue_Montreal',sans-serif] font-normal text-black"
                  }`}
                  data-node-id={chip.labelNodeId}
                >
                  {chip.label}
                </span>
              </button>
            );
          })}
        </div>
        {!anyVisible ? (
          <p
            className="m-0 w-full max-w-2xl font-['PP_Neue_Montreal',sans-serif] font-normal text-[16px] leading-6 tracking-[-0.16px] text-[#262626]"
            role="status"
          >
            No courses match this filter. Try View All Courses or another
            category.
          </p>
        ) : null}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="65:78750">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="65:78751">
            <div
              className="relative flex w-full min-w-0 shrink-0 flex-col items-stretch gap-2 lg:flex-row lg:gap-2"
              data-node-id="65:78752"
            >
              {visible[0] && (
              <div
                className="relative flex w-full min-w-0 shrink-0 flex-col overflow-hidden rounded-2xl bg-white p-6 max-lg:flex-none lg:flex-1 lg:basis-0"
                data-node-id="65:78753"
              >
                <div
                  className="relative flex w-full min-w-0 flex-col items-start gap-4"
                  data-node-id="65:78754"
                >
                  <div className="content-stretch flex flex-col h-[280px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="65:78755">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame248} />
                    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="65:78756">
                      <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="65:78757">
                        <p className="leading-[20px]">No-Code AI</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="65:78758">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="65:78759">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="65:78760">
                        <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-node-id="65:78761">
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78762">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78764">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78766">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78768">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78770">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                        </div>
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.96px] whitespace-nowrap" data-node-id="65:78772">
                          <AnimatedStatValue className="leading-[32px]" value="$105" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="65:78773">
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end relative shrink-0 text-[24px] text-black tracking-[-0.96px] w-full" data-node-id="65:78774">
                          <p className="leading-[32px]">Build AI Without Coding</p>
                        </div>
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal justify-end relative shrink-0 text-[#262626] text-[16px] tracking-[-0.16px] w-full" data-node-id="65:78775">
                          <p className="leading-[24px]">Build powerful AI tools without writing a single line of......</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f1f1f1] content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="65:78776">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:78777">
                        <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:78778">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="notebook-02" data-node-id="65:78779">
                            <img alt="" className="absolute block max-w-none size-full" src={imgNotebook02} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0 w-[91px]" data-node-id="65:78784">
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-full" data-node-id="65:78785">
                            <p className="leading-[20px]">Lessons</p>
                          </div>
                          <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-full" data-node-id="65:78786">
                            20+ Lessons
                          </p>
                        </div>
                      </div>
                      <div className="flex h-[32px] items-center justify-center relative shrink-0 w-0">
                        <div className="flex-none rotate-90">
                          <div className="h-0 relative w-[32px]" data-node-id="65:78787">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine1} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:78788">
                        <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:78789">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="time-02" data-node-id="65:78790">
                            <img alt="" className="absolute block max-w-none size-full" src={imgTime02} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0" data-node-id="65:78793">
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] min-w-full relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-[min-content]" data-node-id="65:78794">
                            <p className="leading-[20px]">Duration</p>
                          </div>
                          <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-[107px]" data-node-id="65:78795">
                            6 Hours 15 Min
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="/courses/no-code-ai" className="border border-[#e2e2e2] border-solid content-stretch flex items-center justify-center px-[10px] py-[12px] relative rounded-[100px] shrink-0 w-full" data-node-id="65:78796">
                      <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#262626] text-[16px] whitespace-nowrap" data-node-id="65:78797">
                        <p className="leading-[24px]">View Courses</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              )}
              {visible[1] && (
              <div
                className="relative flex w-full min-w-0 shrink-0 flex-col overflow-hidden rounded-2xl bg-white p-6 max-lg:flex-none lg:flex-1 lg:basis-0"
                data-node-id="65:78798"
              >
                <div
                  className="relative flex w-full min-w-0 flex-col items-start gap-4"
                  data-node-id="65:78799"
                >
                  <div className="content-stretch flex flex-col h-[280px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="65:78800">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame249} />
                    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex w-[363px] max-w-full items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="65:78801">
                      <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="65:78802">
                        <p className="leading-[20px]">Startup Playbook</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="65:78803">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="65:78804">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="65:78805">
                        <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-node-id="65:78806">
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78807">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78809">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78811">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78813">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78815">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                        </div>
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.96px] whitespace-nowrap" data-node-id="65:78817">
                          <AnimatedStatValue className="leading-[32px]" value="$110" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="65:78818">
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end relative shrink-0 text-[24px] text-black tracking-[-0.96px] w-full" data-node-id="65:78819">
                          <p className="leading-[32px]">Startup Growth Playbook</p>
                        </div>
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal justify-end relative shrink-0 text-[#262626] text-[16px] tracking-[-0.16px] w-full" data-node-id="65:78820">
                          <p className="leading-[24px]">Learn how to launch, grow, and scale successful......</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f1f1f1] content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="65:78821">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:78822">
                        <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:78823">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="notebook-02" data-node-id="65:78824">
                            <img alt="" className="absolute block max-w-none size-full" src={imgNotebook02} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0 w-[91px]" data-node-id="65:78829">
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-full" data-node-id="65:78830">
                            <p className="leading-[20px]">Lessons</p>
                          </div>
                          <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-full" data-node-id="65:78831">
                            18+ Lessons
                          </p>
                        </div>
                      </div>
                      <div className="flex h-[32px] items-center justify-center relative shrink-0 w-0">
                        <div className="flex-none rotate-90">
                          <div className="h-0 relative w-[32px]" data-node-id="65:78832">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine1} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:78833">
                        <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:78834">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="time-02" data-node-id="65:78835">
                            <img alt="" className="absolute block max-w-none size-full" src={imgTime02} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0" data-node-id="65:78838">
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] min-w-full relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-[min-content]" data-node-id="65:78839">
                            <p className="leading-[20px]">Duration</p>
                          </div>
                          <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-[107px]" data-node-id="65:78840">
                            7 Hours 30 Min
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="/courses/startup-playbook" className="border border-[#e2e2e2] border-solid content-stretch flex items-center justify-center px-[10px] py-[12px] relative rounded-[100px] shrink-0 w-full" data-node-id="65:78841">
                      <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#262626] text-[16px] whitespace-nowrap" data-node-id="65:78842">
                        <p className="leading-[24px]">View Courses</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              )}
              {visible[2] && (
              <div
                className="relative flex w-full min-w-0 shrink-0 flex-col overflow-hidden rounded-2xl bg-white p-6 max-lg:flex-none lg:flex-1 lg:basis-0"
                data-node-id="65:78843"
              >
                <div
                  className="relative flex w-full min-w-0 flex-col items-start gap-4"
                  data-node-id="65:78844"
                >
                  <div className="content-stretch flex flex-col h-[280px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="65:78845">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame250} />
                    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex w-full items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="65:78846">
                      <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="65:78847">
                        <p className="leading-[20px]">Figma Mastery</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="65:78848">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="65:78849">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="65:78850">
                        <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-node-id="65:78851">
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78852">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78854">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78856">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78858">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                          <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78860">
                            <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                          </div>
                        </div>
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.96px] whitespace-nowrap" data-node-id="65:78862">
                          <AnimatedStatValue className="leading-[32px]" value="$120" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="65:78863">
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end relative shrink-0 text-[24px] text-black tracking-[-0.96px] w-full" data-node-id="65:78864">
                          <p className="leading-[32px]">Complete Figma Mastery</p>
                        </div>
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal justify-end relative shrink-0 text-[#262626] text-[16px] tracking-[-0.16px] w-full" data-node-id="65:78865">
                          <p className="leading-[24px]">Master modern UI design workflows using Figma from...</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f1f1f1] content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="65:78866">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:78867">
                        <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:78868">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="notebook-02" data-node-id="65:78869">
                            <img alt="" className="absolute block max-w-none size-full" src={imgNotebook02} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0 w-[91px]" data-node-id="65:78874">
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-full" data-node-id="65:78875">
                            <p className="leading-[20px]">Lessons</p>
                          </div>
                          <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-full" data-node-id="65:78876">
                            32+ Lessons
                          </p>
                        </div>
                      </div>
                      <div className="flex h-[32px] items-center justify-center relative shrink-0 w-0">
                        <div className="flex-none rotate-90">
                          <div className="h-0 relative w-[32px]" data-node-id="65:78877">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine1} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:78878">
                        <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:78879">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="time-02" data-node-id="65:78880">
                            <img alt="" className="absolute block max-w-none size-full" src={imgTime02} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0" data-node-id="65:78883">
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] min-w-full relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-[min-content]" data-node-id="65:78884">
                            <p className="leading-[20px]">Duration</p>
                          </div>
                          <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-[107px]" data-node-id="65:78885">
                            8 Hours 25 Min
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="/courses/figma-mastery" className="border border-[#e2e2e2] border-solid content-stretch flex items-center justify-center px-[10px] py-[12px] relative rounded-[100px] shrink-0 w-full" data-node-id="65:78886">
                      <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#262626] text-[16px] whitespace-nowrap" data-node-id="65:78887">
                        <p className="leading-[24px]">View Courses</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="65:78888">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="65:78889">
              <div
              className="relative flex w-full min-w-0 shrink-0 flex-col items-stretch gap-2 lg:flex-row lg:gap-2"
              data-node-id="65:78890"
            >
                {visible[3] && (
                <div
                  className="relative flex w-full min-w-0 shrink-0 flex-col overflow-hidden rounded-2xl bg-white p-6 max-lg:flex-none lg:flex-1 lg:basis-0"
                  data-node-id="65:78891"
                >
                  <div
                    className="relative flex w-full min-w-0 flex-col items-start gap-4"
                    data-node-id="65:78892"
                  >
                    <div className="content-stretch flex flex-col h-[280px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="65:78893">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame251} />
                      <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="65:78894">
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="65:78895">
                          <p className="leading-[20px]">Spoken English</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="65:78896">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="65:78897">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="65:78898">
                          <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-node-id="65:78899">
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78900">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78902">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78904">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78906">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78908">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                          </div>
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.96px] whitespace-nowrap" data-node-id="65:78910">
                            <AnimatedStatValue className="leading-[32px]" value="$120" />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="65:78911">
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end relative shrink-0 text-[24px] text-black tracking-[-0.96px] w-full" data-node-id="65:78912">
                            <p className="leading-[32px]">Spoken English Mastery</p>
                          </div>
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal justify-end relative shrink-0 text-[#262626] text-[16px] tracking-[-0.16px] w-full" data-node-id="65:78913">
                            <p className="leading-[24px]">Improve fluency, confidence, pronunciation, and real-life...</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f1f1f1] content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="65:78914">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:78915">
                          <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:78916">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="notebook-02" data-node-id="65:78917">
                              <img alt="" className="absolute block max-w-none size-full" src={imgNotebook02} />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0 w-[91px]" data-node-id="65:78922">
                            <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-full" data-node-id="65:78923">
                              <p className="leading-[20px]">Lessons</p>
                            </div>
                            <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-full" data-node-id="65:78924">
                              40+ Lessons
                            </p>
                          </div>
                        </div>
                        <div className="flex h-[32px] items-center justify-center relative shrink-0 w-0">
                          <div className="flex-none rotate-90">
                            <div className="h-0 relative w-[32px]" data-node-id="65:78925">
                              <div className="absolute inset-[-1px_0_0_0]">
                                <img alt="" className="block max-w-none size-full" src={imgLine1} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:78926">
                          <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:78927">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="time-02" data-node-id="65:78928">
                              <img alt="" className="absolute block max-w-none size-full" src={imgTime02} />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0" data-node-id="65:78931">
                            <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] min-w-full relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-[min-content]" data-node-id="65:78932">
                              <p className="leading-[20px]">Duration</p>
                            </div>
                            <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-[107px]" data-node-id="65:78933">
                              9 Hours 15 Min
                            </p>
                          </div>
                        </div>
                      </div>
                      <Link href="/courses/spoken-english" className="border border-[#e2e2e2] border-solid content-stretch flex items-center justify-center px-[10px] py-[12px] relative rounded-[100px] shrink-0 w-full" data-node-id="65:78934">
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#262626] text-[16px] whitespace-nowrap" data-node-id="65:78935">
                          <p className="leading-[24px]">View Courses</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                )}
                {visible[4] && (
                <div
                  className="relative flex w-full min-w-0 shrink-0 flex-col overflow-hidden rounded-2xl bg-white p-6 max-lg:flex-none lg:flex-1 lg:basis-0"
                  data-node-id="65:78936"
                >
                  <div
                    className="relative flex w-full min-w-0 flex-col items-start gap-4"
                    data-node-id="65:78937"
                  >
                    <div className="content-stretch flex flex-col h-[280px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="65:78938">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
                        <img alt="" className="absolute object-cover rounded-[12px] size-full" src={imgFrame252} />
                        <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(-20.34784825333189deg, rgba(0, 0, 0, 0) 74.495%, rgba(0, 0, 0, 0.2) 94.779%)" }} />
                      </div>
                      <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="65:78939">
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="65:78940">
                          <p className="leading-[20px]">Data Analytics</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="65:78941">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="65:78942">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="65:78943">
                          <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-node-id="65:78944">
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78945">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78947">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78949">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78951">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78953">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                          </div>
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.96px] whitespace-nowrap" data-node-id="65:78955">
                            <AnimatedStatValue className="leading-[32px]" value="$130" />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="65:78956">
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end relative shrink-0 text-[24px] text-black tracking-[-0.96px] w-full" data-node-id="65:78957">
                            <p className="leading-[32px]">Data Analytics Career Foundations</p>
                          </div>
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal justify-end relative shrink-0 text-[#262626] text-[16px] tracking-[-0.16px] w-full" data-node-id="65:78958">
                            <p className="leading-[24px]">Learn data analysis, visualization, tools, and real-world..</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f1f1f1] content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="65:78959">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:78960">
                          <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:78961">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="notebook-02" data-node-id="65:78962">
                              <img alt="" className="absolute block max-w-none size-full" src={imgNotebook02} />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0 w-[91px]" data-node-id="65:78967">
                            <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-full" data-node-id="65:78968">
                              <p className="leading-[20px]">Lessons</p>
                            </div>
                            <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-full" data-node-id="65:78969">
                              32+ Lessons
                            </p>
                          </div>
                        </div>
                        <div className="flex h-[32px] items-center justify-center relative shrink-0 w-0">
                          <div className="flex-none rotate-90">
                            <div className="h-0 relative w-[32px]" data-node-id="65:78970">
                              <div className="absolute inset-[-1px_0_0_0]">
                                <img alt="" className="block max-w-none size-full" src={imgLine1} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:78971">
                          <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:78972">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="time-02" data-node-id="65:78973">
                              <img alt="" className="absolute block max-w-none size-full" src={imgTime02} />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0" data-node-id="65:78976">
                            <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] min-w-full relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-[min-content]" data-node-id="65:78977">
                              <p className="leading-[20px]">Duration</p>
                            </div>
                            <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-[107px]" data-node-id="65:78978">
                              8 Hours 25 Min
                            </p>
                          </div>
                        </div>
                      </div>
                      <Link href="/courses/data-analytics" className="border border-[#e2e2e2] border-solid content-stretch flex items-center justify-center px-[10px] py-[12px] relative rounded-[100px] shrink-0 w-full" data-node-id="65:78979">
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#262626] text-[16px] whitespace-nowrap" data-node-id="65:78980">
                          <p className="leading-[24px]">View Courses</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                )}
                {visible[5] && (
                <div
                  className="relative flex w-full min-w-0 shrink-0 flex-col overflow-hidden rounded-2xl bg-white p-6 max-lg:flex-none lg:flex-1 lg:basis-0"
                  data-node-id="65:78981"
                >
                  <div
                    className="relative flex w-full min-w-0 flex-col items-start gap-4"
                    data-node-id="65:78982"
                  >
                    <div className="content-stretch flex flex-col h-[280px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="65:78983">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
                        <img alt="" className="absolute object-cover rounded-[12px] size-full" src={imgFrame253} />
                        <div className="absolute inset-0 rounded-[12px]" style={{ backgroundImage: "linear-gradient(-34.04593221075423deg, rgba(0, 0, 0, 0) 71.974%, rgba(0, 0, 0, 0.2) 86.909%)" }} />
                      </div>
                      <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="65:78984">
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="65:78985">
                          <p className="leading-[20px]">Financial Planning</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="65:78986">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="65:78987">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="65:78988">
                          <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-node-id="65:78989">
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78990">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78992">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78994">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78996">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                            <div className="mr-[-4px] relative shrink-0 size-[32px]" data-node-id="65:78998">
                              <img alt="" className="absolute block max-w-none size-full" src={imgFrame235} />
                            </div>
                          </div>
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.96px] whitespace-nowrap" data-node-id="65:79000">
                            <AnimatedStatValue className="leading-[32px]" value="$140" />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="65:79001">
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-bold justify-end relative shrink-0 text-[24px] text-black tracking-[-0.96px] w-full" data-node-id="65:79002">
                            <p className="leading-[32px]">{`Financial Planning Career `}</p>
                          </div>
                          <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal justify-end relative shrink-0 text-[#262626] text-[16px] tracking-[-0.16px] w-full" data-node-id="65:79003">
                            <p className="leading-[24px]">Master budgeting, saving, investing, taxes, and smart..</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f1f1f1] content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="65:79004">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:79005">
                          <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:79006">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="notebook-02" data-node-id="65:79007">
                              <img alt="" className="absolute block max-w-none size-full" src={imgNotebook02} />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0 w-[91px]" data-node-id="65:79012">
                            <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-full" data-node-id="65:79013">
                              <p className="leading-[20px]">Lessons</p>
                            </div>
                            <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-full" data-node-id="65:79014">
                              32+ Lessons
                            </p>
                          </div>
                        </div>
                        <div className="flex h-[32px] items-center justify-center relative shrink-0 w-0">
                          <div className="flex-none rotate-90">
                            <div className="h-0 relative w-[32px]" data-node-id="65:79015">
                              <div className="absolute inset-[-1px_0_0_0]">
                                <img alt="" className="block max-w-none size-full" src={imgLine1} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="65:79016">
                          <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[34px]" data-node-id="65:79017">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="time-02" data-node-id="65:79018">
                              <img alt="" className="absolute block max-w-none size-full" src={imgTime02} />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-[34px] items-start not-italic relative shrink-0" data-node-id="65:79021">
                            <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal h-[15px] justify-end leading-[0] min-w-full relative shrink-0 text-[#262626] text-[14px] tracking-[-0.56px] w-[min-content]" data-node-id="65:79022">
                              <p className="leading-[20px]">Duration</p>
                            </div>
                            <p className="font-['PP_Neue_Montreal',sans-serif] font-medium h-[18px] leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.64px] w-[107px]" data-node-id="65:79023">
                              8 Hours 25 Min
                            </p>
                          </div>
                        </div>
                      </div>
                      <Link href="/courses/financial-planning" className="border border-[#e2e2e2] border-solid content-stretch flex items-center justify-center px-[10px] py-[12px] relative rounded-[100px] shrink-0 w-full" data-node-id="65:79024">
                        <div className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#262626] text-[16px] whitespace-nowrap" data-node-id="65:79025">
                          <p className="leading-[24px]">View Courses</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
