import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "./motion/scrollPaintTokens";
import { Reveal, RevealStagger } from "./motion/Reveal";
import { ebAsset } from "@/app/_lib/eb-asset";
import { PillCta } from "./PillCta";
import { COURSES } from "@/app/_lib/courses";
import { CourseCard } from "./CourseCard";

const imgUnion = ebAsset("16b548f8-89d8-48c0-8d0e-08202ce26fb8");
const imgArrowUpRight01 = ebAsset("3501ee90-ed1d-4663-bb0f-370b23a1c590");

export default function FeaturedCoursesSection({
  sectionBg = "bg-white",
  ctaLabel = "View All Courses",
  hideCta = false,
}: {
  sectionBg?: string;
  ctaLabel?: string;
  hideCta?: boolean;
} = {}) {
  return (
    <section className={`w-full ${sectionBg}`} data-node-id="65:78486">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-[clamp(1rem,4vw,3.75rem)] py-[clamp(3rem,10vw,10rem)] md:gap-[60px]">
      <Reveal
        className="relative flex w-full shrink-0 flex-col items-start justify-between gap-8 lg:flex-row lg:items-start"
        data-node-id="65:78487"
        duration={0.74}
        y={16}
      >
        <div
          className="bg-[#fff7f5] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0"
          data-node-id="65:78488"
        >
          <div
            className="relative shrink-0 size-[20px]"
            data-name="Union"
            data-node-id="65:78489"
          >
            <img alt="" className="absolute block max-w-none size-full" src={imgUnion} />
          </div>
          <p className="font-['PP_Neue_Montreal',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.18px] whitespace-nowrap" data-node-id="65:78491">
            Featured courses
          </p>
        </div>
        <div
          className="relative flex w-full min-w-0 max-w-[893px] shrink-0 flex-col items-start gap-8 lg:flex-1"
          data-node-id="65:78492"
        >
          <div
            className="relative w-full min-w-0 shrink-0 font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black"
            data-node-id="65:78493"
          >
            <ScrollPaintHeadline
              theme="light"
              uniform={scrollPaintLightUniform}
              className="text-[clamp(1.5rem,2.2vw+1rem,2.5rem)] leading-[1] tracking-[-0.01em]"
              segments={[
                {
                  variant: "primary",
                  text: "Discover handpicked courses curated by experts to help you learn practical ",
                },
                {
                  variant: "muted",
                  text: "skills and grow confidently in your career.",
                },
              ]}
            />
          </div>
          {!hideCta && (
            <PillCta
              className="pill-cta-primary relative flex shrink-0 items-center gap-[4px] bg-[#f30] px-[24px] py-[12px] rounded-[100px]"
              label={ctaLabel}
              href="/courses"
              labelClassName="font-['PP_Neue_Montreal',sans-serif] font-medium text-[16px] leading-[24px] not-italic text-white whitespace-nowrap"
              iconSrc={imgArrowUpRight01}
              iconSizeClass="size-[24px]"
              data-node-id="65:78494"
            />
          )}
        </div>
      </Reveal>
      <div className="relative flex w-full shrink-0 flex-col items-start" data-node-id="65:78498">
        <RevealStagger
          className="relative flex w-full min-w-0 shrink-0 flex-col items-stretch gap-2 lg:flex-row lg:gap-2"
          data-node-id="65:78499"
        >
          {COURSES.slice(0, 3).map((course) => (
            <CourseCard
              key={course.slug}
              course={course}
              className="max-lg:flex-none lg:flex-1 lg:basis-0"
            />
          ))}
        </RevealStagger>
      </div>
      </div>
    </section>
  );
}

