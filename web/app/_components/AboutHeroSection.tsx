import { ebAsset } from "@/app/_lib/eb-asset";
import { Reveal } from "./motion/Reveal";
import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "./motion/scrollPaintTokens";
import { PageContainer } from "./PageContainer";

/* Reuse existing Union/flame icon already in eb-asset */
const imgUnion = ebAsset("f269b23c-45e2-44c2-b17b-6cb43544cf13");
/* New hero photo downloaded from Figma */
const imgHero = ebAsset("677e16e6-716c-4a1c-9cc1-908c7216d86e");

export function AboutHeroSection() {
  return (
    <section data-node-id="65:80363">
      <PageContainer className="flex flex-col gap-6 lg:gap-[clamp(2rem,6vw,3.75rem)] py-6 lg:py-[clamp(3rem,10vw,7.5rem)]">
        {/* ── Pill label + headline ── */}
        <Reveal
          className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
          duration={0.74}
          y={16}
          data-node-id="65:80364"
        >
          {/* "About us" pill */}
          <div
            className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full bg-[#fff7f5] px-3 py-[7px]"
            data-node-id="65:80365"
          >
            <div
              className="relative shrink-0 size-5"
              data-name="Union"
              data-node-id="65:80366"
            >
              <img
                alt=""
                className="absolute block size-full max-w-none"
                src={imgUnion}
              />
            </div>
            <p
              className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[15px] leading-6 tracking-[-0.01em] text-black whitespace-nowrap sm:text-[18px] sm:leading-[24px] sm:tracking-[-0.18px]"
              data-node-id="65:80368"
            >
              About us
            </p>
          </div>

          {/* Two-tone headline */}
          <div
            className="flex min-w-0 flex-1 flex-col lg:max-w-[893px]"
            data-node-id="65:80369"
          >
            <div
              className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black tracking-[-0.4px]"
              data-node-id="65:80370"
            >
              <ScrollPaintHeadline
                theme="light"
                uniform={scrollPaintLightUniform}
                className="text-[2rem] leading-[1.25] tracking-[-0.01em] lg:text-[clamp(2rem,2.2vw+1rem,2.5rem)] lg:leading-[1]"
                segments={[
                  {
                    variant: "primary",
                    text: "We are a learning-driven platform committed to empowering individuals with practical skills, industry-focused knowledge, and expert-led courses that inspire confidence and unlock career opportunities.",
                  },
                ]}
              />
            </div>
          </div>
        </Reveal>

        {/* ── Hero image ── */}
        <Reveal
          mode="mount"
          duration={0.82}
          y={24}
          delay={0.08}
          data-node-id="65:80371"
        >
          <div
            className="relative w-full overflow-hidden rounded-xl h-[260px] sm:h-[clamp(260px,40vw,640px)]"
            data-node-id="65:80372"
          >
            <img
              alt="EduBoost learning environment"
              className="absolute inset-0 h-full w-full object-cover"
              src={imgHero}
            />
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
