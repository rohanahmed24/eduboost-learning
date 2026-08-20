import { PageContainer } from "./PageContainer";
import { ebAsset } from "@/app/_lib/eb-asset";
import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "./motion/scrollPaintTokens";
import {
  Reveal,
  RevealStagger,
  RevealStaggerItem,
} from "./motion/Reveal";
import { AnimatedStatValue } from "./motion/AnimatedStatValue";
import { PillCta } from "./PillCta";

const imgUnionAbout =
  ebAsset("f269b23c-45e2-44c2-b17b-6cb43544cf13");
const imgArrowUpRightAbout01 =
  ebAsset("62748921-856c-4807-afd3-89bac949936a");
const imgAddAbout01 =
  ebAsset("2d331c86-7015-4c70-87ad-d46b619c5cbf");

function StatCard({
  value,
  body,
  nodeIds,
}: {
  value: string;
  body: string;
  nodeIds: string[];
}) {
  return (
    <div
      className="flex h-[400px] min-h-[400px] flex-col justify-start rounded-2xl bg-white px-4 py-6 lg:h-auto lg:min-h-[320px] lg:justify-center lg:p-6"
      data-node-id={nodeIds[0]}
    >
      {/* Mobile Figma: card 358×400, inner 326×352 @ (16,24); ×206 between stat & body. */}
      <div
        className="flex min-h-0 w-full flex-1 items-stretch justify-between gap-0 lg:min-h-0 lg:flex-none lg:gap-4"
        data-node-id={nodeIds[1]}
      >
        <div
          className="flex min-w-0 flex-1 flex-col justify-start pt-[13px] max-lg:gap-[206px] lg:gap-[clamp(2.5rem,10vw,12.875rem)] lg:pt-0"
          data-node-id={nodeIds[2]}
        >
          <AnimatedStatValue
            className="w-full min-w-0 font-['PP_Neue_Montreal',sans-serif] font-medium text-[clamp(1.75rem,6.5vw+0.25rem,2.75rem)] leading-[1.15] tracking-[-0.4px] text-black max-lg:min-h-[48px] lg:min-h-0 lg:text-[clamp(2.5rem,4vw+1.5rem,4.5rem)] lg:leading-none lg:tracking-[-0.05em]"
            data-node-id={nodeIds[3]}
            durationSec={1.6}
            value={value}
          />
          <p
            className="w-full min-h-[72px] font-['PP_Neue_Montreal',sans-serif] font-normal text-[16px] leading-6 tracking-[-0.16px] text-[#bfbfbf] lg:min-h-0"
            data-node-id={nodeIds[4]}
          >
            {body}
          </p>
        </div>
        <div
          className="flex w-8 shrink-0 flex-col justify-between self-stretch py-0 max-lg:self-stretch lg:py-1"
          data-node-id={nodeIds[5]}
        >
          <div className="relative size-8">
            <img
              alt=""
              className="absolute block size-full max-w-none"
              src={imgAddAbout01}
            />
          </div>
          <div className="relative size-8">
            <img
              alt=""
              className="absolute block size-full max-w-none"
              src={imgAddAbout01}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section data-node-id="65:78436">
      <PageContainer className="py-12 lg:py-[clamp(3rem,10vw,10rem)]">
        <div
          className="flex flex-col gap-8 md:gap-14 lg:gap-[60px]"
          data-node-id="65:78437"
        >
          <Reveal
            className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10"
            data-node-id="65:78438"
            duration={0.74}
            y={16}
          >
            <div
              className="inline-flex w-fit items-center gap-1 rounded-[100px] bg-[#fff7f5] px-3 py-[7px] lg:shrink-0 lg:py-1.5"
              data-node-id="65:78439"
            >
              <div className="relative size-5 shrink-0" data-node-id="65:78440">
                <img
                  alt=""
                  className="absolute block size-full max-w-none"
                  src={imgUnionAbout}
                />
              </div>
              <p
                className="font-['PP_Neue_Montreal',sans-serif] font-normal text-[14px] leading-5 tracking-[-0.56px] text-black lg:font-medium lg:text-[17px] lg:leading-6 lg:tracking-[-0.01em] xl:text-[18px]"
                data-node-id="65:78442"
              >
                About us
              </p>
            </div>

            <div
              className="flex min-w-0 flex-1 flex-col gap-6 lg:max-w-[893px] lg:gap-8"
              data-node-id="65:78443"
            >
              <div
                className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black"
                data-node-id="65:78444"
              >
                <ScrollPaintHeadline
                  theme="light"
                  uniform={scrollPaintLightUniform}
                  className="text-[32px] leading-[40px] tracking-[-0.32px] lg:text-[clamp(1.5rem,2.2vw+1rem,2.5rem)] lg:leading-[1] lg:tracking-[-0.01em]"
                  segments={[
                    {
                      variant: "primary",
                      text:
                        "Eduboost is an innovative e-learning platform built to empower learners with practical, career-focused skills. We connect students with expert instructors, interactive courses, and flexible learning paths ",
                    },
                  ]}
                />
              </div>

              <PillCta
                className="pill-cta-primary flex w-fit items-center gap-1 rounded-[100px] bg-[#f30] px-6 py-3"
                label="Learn More"
                href="/about"
                labelClassName="font-['PP_Neue_Montreal',sans-serif] font-medium text-[16px] leading-6 text-white lg:text-[15px] xl:text-[16px]"
                iconSrc={imgArrowUpRightAbout01}
                iconSizeClass="size-6"
                data-node-id="65:78445"
              />
            </div>
          </Reveal>

          <RevealStagger
            className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
            data-node-id="65:78449"
          >
            <RevealStaggerItem className="min-w-0">
              <StatCard
                value="500K+"
                body="Trusted by students worldwide, enrolled learners continue growing skills, advancing careers."
                nodeIds={["65:78450", "65:78451", "65:78452", "65:78453", "65:78454", "65:78455"]}
              />
            </RevealStaggerItem>
            <RevealStaggerItem className="min-w-0">
              <StatCard
                value="300+"
                body="Experienced industry professionals delivering practical knowledge, real-world insights."
                nodeIds={["65:78462", "65:78463", "65:78464", "65:78465", "65:78466", "65:78467"]}
              />
            </RevealStaggerItem>
            <RevealStaggerItem className="min-w-0">
              <StatCard
                value="95%"
                body="High learner satisfaction driven by quality content, expert instruction, and measurable learning."
                nodeIds={["65:78474", "65:78475", "65:78476", "65:78477", "65:78478", "65:78479"]}
              />
            </RevealStaggerItem>
          </RevealStagger>
        </div>
      </PageContainer>
    </section>
  );
}
