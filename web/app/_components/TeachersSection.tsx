import Link from "next/link";
import type { CSSProperties } from "react";
import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "./motion/scrollPaintTokens";
import { Reveal, RevealStagger, RevealStaggerItem } from "./motion/Reveal";
import { ebAsset } from "@/app/_lib/eb-asset";
import { PillCta } from "./PillCta";

const imgUnion =
  ebAsset("3a377013-d47d-4ebe-9b9c-f000653b57c1");
const imgArrowUpRight01 =
  ebAsset("2d6d6583-b730-4b58-804d-f59a30024547");
const imgArrowUpRight2 =
  ebAsset("7dc6fbe6-2968-4b09-9765-43869faa6f80");

export const TEACHERS_DATA = [
  {
    id: "1",
    name: "Sophia Marie Hart",
    role: "Design Systems Expert",
    tag: "Design Systems",
    desc: "Enhance your teaching with effective strategies.",
    img: ebAsset("4742348d-32be-4225-ba51-0e9eec272f13"),
    desktopHeight: 549,
    hoverDesktopHeight: 549,
  },
  {
    id: "2",
    name: "Liam Alexander Carter",
    role: "English Language Coach",
    tag: "Communication",
    desc: "Hone your communication skills to inspire students.",
    img: ebAsset("371f773d-a4b0-485b-b884-f15e0d25450a"),
    desktopHeight: 324,
    hoverDesktopHeight: 549,
  },
  {
    id: "3",
    name: "Ethan James Brooks",
    role: "Senior Data Analyst",
    tag: "Data Analytics",
    desc: "Explore creative techniques for various learning styles.",
    img: ebAsset("292edf01-bcc6-49c3-ae1d-f74ba485dccc"),
    desktopHeight: 446,
    hoverDesktopHeight: 549,
  },
  {
    id: "4",
    name: "Ethan James Brooks",
    role: "Senior Data Analyst",
    tag: "Data Analytics",
    desc: "Find innovative methods for diverse learning needs.",
    img: ebAsset("177ec810-96d2-41ee-a566-1e6ddb2312b9"),
    desktopHeight: 446,
    hoverDesktopHeight: 549,
  },
  {
    id: "5",
    name: "Sophia Marie Hart",
    role: "Design Systems Expert",
    tag: "Design Systems",
    desc: "Strengthen your teaching with effective management.",
    img: ebAsset("3b7e4fe8-22a4-40fa-ab85-d3d3587a20a7"),
    desktopHeight: 549,
    hoverDesktopHeight: 549,
  },
  {
    id: "6",
    name: "Liam Alexander Carter",
    role: "English Language Coach",
    tag: "Communication",
    desc: "Enhance your communication to motivate students.",
    img: ebAsset("661ebb15-0407-42f2-a2a5-d2a2677e25e5"),
    desktopHeight: 324,
    hoverDesktopHeight: 549,
  },
  {
    id: "7",
    name: "Sophia Marie Hart",
    role: "Design Systems Expert",
    tag: "Design Systems",
    desc: "Elevate your teaching with strong management techniques.",
    img: ebAsset("978c2546-f1c7-4f09-a6bf-954c4d5d42de"),
    desktopHeight: 549,
    hoverDesktopHeight: 549,
  },
  {
    id: "8",
    name: "Liam Alexander Carter",
    role: "English Language Coach",
    tag: "Communication",
    desc: "Boost your communication to energize students.",
    img: ebAsset("63f86692-5338-4658-93fc-64430440201d"),
    desktopHeight: 324,
    hoverDesktopHeight: 549,
  },
  {
    id: "9",
    name: "Ethan James Brooks",
    role: "Senior Data Analyst",
    tag: "Data Analytics",
    desc: "Discover unique strategies for different learning styles.",
    img: ebAsset("b270d464-ba71-44ce-af8d-44abd13f5d97"),
    desktopHeight: 446,
    hoverDesktopHeight: 549,
  },
];

const TEACHER_DETAIL_BY_NAME: Record<string, string> = {
  "Sophia Marie Hart": "/teachers/sophia-marie-hart",
  "Liam Alexander Carter": "/teachers/liam-carter",
  "Ethan James Brooks": "/teachers/ethan-brooks",
};

export function TeachersSection({
  limit = 3,
  hideCta = false,
  uniformHeight = false,
}: {
  limit?: number;
  hideCta?: boolean;
  /** When true, all photo cards use one consistent portrait ratio (matches the full /teachers page grid). */
  uniformHeight?: boolean;
}) {
  const displayTeachers = TEACHERS_DATA.slice(0, limit);
  
  return (
    <section className="w-full bg-white" data-node-id="65:78680">
      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(1rem,4vw,3.75rem)] py-[clamp(3rem,10vw,10rem)]">
      <div
        className="relative flex w-full flex-col items-center gap-12 md:gap-[60px]"
        data-node-id="65:78681"
      >
        <Reveal
          className="relative flex w-full shrink-0 flex-col items-start justify-between gap-8 lg:flex-row lg:items-start"
          data-node-id="65:78682"
          duration={0.74}
          y={16}
        >
          <div
            className="bg-[#fff7f5] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0"
            data-node-id="65:78683"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Union"
              data-node-id="65:78684"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                src={imgUnion}
              />
            </div>
            <p
              className="font-['PP_Neue_Montreal',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.18px] whitespace-nowrap"
              data-node-id="65:78686"
            >
              Our Teacher
            </p>
          </div>

          <div
            className="relative flex w-full min-w-0 max-w-[893px] shrink-0 flex-col items-start gap-8 lg:flex-1"
            data-node-id="65:78687"
          >
            <div
              className="relative w-full min-w-0 shrink-0 font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black"
              data-node-id="65:78688"
            >
              <ScrollPaintHeadline
                theme="light"
                uniform={scrollPaintLightUniform}
                className="text-[clamp(1.5rem,2.2vw+1rem,2.5rem)] leading-[1] tracking-[-0.01em]"
                segments={[
                  {
                    variant: "primary",
                    text: "Meet our expert educators who guide, inspire, and support learners to gain practical ",
                  },
                {
                  variant: "muted",
                  text: "skills and succeed in their careers.",
                },
                ]}
              />
            </div>

            {!hideCta && (
              <PillCta
                className="pill-cta-primary relative flex shrink-0 items-center gap-[4px] bg-[#f30] px-[24px] py-[12px] rounded-[100px]"
                label="View all Teachers"
                href="/teachers"
                labelClassName="font-['PP_Neue_Montreal',sans-serif] font-medium text-[16px] leading-[24px] not-italic text-white whitespace-nowrap"
                iconSrc={imgArrowUpRight01}
                iconSizeClass="size-[24px]"
                data-node-id="65:78689"
              />
            )}
          </div>
        </Reveal>

        <RevealStagger
          className="relative grid w-full shrink-0 grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-2"
          data-node-id="65:78693"
        >
          {displayTeachers.map((teacher) => (
            <RevealStaggerItem
              key={teacher.id}
              className="relative flex min-w-0 flex-1 flex-col items-start gap-4"
              data-node-id="65:78694"
            >
              <div
                className={[
                  "group relative w-full shrink-0 overflow-hidden rounded-2xl transition-[height,transform] duration-500 ease-out",
                  uniformHeight
                    ? "aspect-[1432/1520]"
                    : "h-[320px] sm:h-[360px] xl:h-[var(--teacher-h)] xl:hover:h-[var(--teacher-h-hover)]",
                ].join(" ")}
                style={
                  {
                    "--teacher-h": uniformHeight ? "480px" : `${teacher.desktopHeight}px`,
                    "--teacher-h-hover": uniformHeight ? "480px" : `${teacher.hoverDesktopHeight ?? teacher.desktopHeight}px`,
                  } as CSSProperties
                }
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                  <img
                    alt=""
                    className="absolute inset-0 size-full max-w-none rounded-2xl object-cover transition-transform duration-500 ease-out xl:group-hover:scale-[0.985]"
                    src={teacher.img}
                  />
                </div>
                <div
                  className="absolute left-3 top-3 z-10 flex items-center rounded-[8px] border border-[rgba(255,255,255,0.1)] border-solid bg-[rgba(255,255,255,0.1)] px-3 py-1.5 backdrop-blur-[8px]"
                >
                  <p
                    className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[15px] leading-6 text-white md:text-[16px]"
                  >
                    {teacher.tag}
                  </p>
                </div>
              </div>

              <Link
                href={TEACHER_DETAIL_BY_NAME[teacher.name] ?? "/teachers/sophia-marie-hart"}
                className="relative flex w-full flex-col items-start gap-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f30]/40 focus-visible:ring-offset-2"
                aria-label={`View ${teacher.name} teacher profile`}
              >
                <div
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                >
                  <p
                    className="flex-[1_0_0] font-['PP_Neue_Montreal',sans-serif] font-medium leading-8 min-h-px min-w-px not-italic relative text-[24px] text-black tracking-[-0.24px]"
                  >
                    {teacher.name}
                  </p>
                  <div
                    className="relative shrink-0 size-[24px]"
                  >
                    <img
                      alt=""
                      className="absolute block max-w-none size-full"
                      src={imgArrowUpRight2}
                    />
                  </div>
                </div>

                <p
                  className="font-['PP_Neue_Montreal',sans-serif] font-normal leading-5 not-italic relative shrink-0 text-[#808080] text-[14px] tracking-[-0.14px]"
                >
                  {teacher.role}
                </p>
                <p
                  className="font-['PP_Neue_Montreal',sans-serif] font-normal leading-6 not-italic relative shrink-0 text-[#262626] text-[16px] tracking-[-0.16px]"
                >
                  {teacher.desc}
                </p>
              </Link>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
      </div>
    </section>
  );
}

