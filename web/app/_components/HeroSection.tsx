import { PageContainer } from "./PageContainer";
import { ebAsset } from "@/app/_lib/eb-asset";
import {
  HeroFallingPillStack,
  type HeroPillRow,
} from "./HeroFallingPillStack";
import { AnimatedStatValue } from "./motion/AnimatedStatValue";
import { Reveal } from "./motion/Reveal";
import { PillCta } from "./PillCta";

const imgFocusedWomanWorkingRemotelyInASereneSetting1 =
  ebAsset("f4830c0f-7997-4714-ad94-06119ccd3807");
const imgWomanAtDeskWithLaptop1 =
  ebAsset("1143c3f7-fd27-4362-a7b7-9281f3fe5054");
const imgWomanUsingLaptop1 =
  ebAsset("d0f74e55-f3f5-4efa-bcfd-e1b1778ec749");
const imgManWorkingIndoors1 =
  ebAsset("1d369e3a-4609-4914-bdef-da0943eaabfc");
const imgUnionHero =
  ebAsset("2e36e7b2-b26e-4b74-a4fc-904522bc5366");
const imgArrowUpRightHero01 =
  ebAsset("b4ee1010-75e9-4038-857d-2f5d62abe10f");
const imgStar =
  ebAsset("b7613f96-52ff-42ce-8982-daed16b1b481");
const imgStar1 =
  ebAsset("e9a886ec-c0cb-447d-bed8-57c126703b43");

const heroPillRows: HeroPillRow[][] = [
  [
    {
      key: "design-systems",
      label: "Design Systems",
      chipClassName: "max-lg:!p-2",
    },
  ],
  [
    {
      key: "figma-mastery",
      label: "Figma Mastery",
      chipClassName: "max-lg:!shrink-0 max-lg:!p-2",
    },
    {
      key: "digital-marketing",
      label: "Digital Marketing",
      chipClassName: "max-lg:!shrink-0 max-lg:!p-2",
    },
  ],
  [
    {
      key: "startup-a",
      label: "Startup Playbook",
      chipClassName: "max-lg:!shrink-0 max-lg:!p-2",
    },
    {
      key: "no-code-ai",
      label: "No-Code AI",
      chipClassName: "max-lg:!shrink-0 max-lg:!p-2",
    },
    {
      key: "startup-b",
      label: "Startup Playbook",
      chipClassName: "max-lg:!shrink-0 max-lg:!p-2",
    },
  ],
];

export function HeroSection() {
  return (
    <section data-node-id="65:78375">
      <PageContainer className="pb-12 pt-2 md:pb-20 md:pt-4">
        <div
          className="flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-2"
          data-node-id="65:79364"
        >
          <div
            className="relative flex min-h-0 min-w-0 flex-1 flex-col rounded-xl bg-white lg:min-h-[740px]             lg:basis-[56%]"
            data-node-id="65:78376"
          >
              <div
                className="flex flex-1 flex-col justify-between gap-8 px-4 py-6 lg:gap-6 lg:p-9"
                data-node-id="65:78378"
              >
              <div className="flex flex-col gap-6" data-node-id="65:79367">
                <Reveal
                  mode="mount"
                  className="flex flex-col gap-6 md:gap-5 lg:gap-5"
                  data-node-id="65:79368"
                  duration={0.78}
                  y={18}
                >
                  <div
                    className="inline-flex w-fit items-center gap-2 rounded-[100px] bg-[#fff7f5] px-3 py-[6px]"
                    data-node-id="65:79369"
                  >
                    <div
                      className="relative size-5 shrink-0"
                      data-node-id="65:79370"
                    >
                      <img
                        alt=""
                        className="absolute block size-full max-w-none"
                        src={imgUnionHero}
                      />
                    </div>
                    <p
                      className="font-['PP_Neue_Montreal',sans-serif] text-[14px] leading-5 text-[#f30] lg:text-[13px] xl:text-[14px] italic"
                      data-node-id="65:79372"
                    >
                      Learn Smarter, Achieve Faster
                    </p>
                  </div>

                  <h1
                    className="max-w-[480px] font-['PP_Neue_Montreal',sans-serif] text-[32px] leading-[1.06] tracking-[-0.64px] text-black max-lg:break-words lg:text-[40px] lg:leading-[1.1] lg:tracking-[-0.4px] xl:max-w-[520px] font-bold"
                    data-node-id="65:79373"
                  >
                    Unlock Your Potential with Eduboost
                  </h1>

                  <p
                    className="w-full max-w-[480px] font-['PP_Neue_Montreal',sans-serif] text-[18px] leading-6 tracking-[-0.36px] text-[#262626] font-normal"
                    data-node-id="65:79374"
                  >
                    Explore expert-led courses, learn at your own pace, and gain
                    practical skills for your career and life.
                  </p>

                <div
                  className="relative z-10 flex w-full flex-col gap-4 overflow-visible pb-1 lg:flex-row lg:flex-wrap lg:gap-4"
                  data-node-id="65:79375"
                >
                  <PillCta
                    className="pill-cta-primary flex w-full items-center justify-center gap-1 rounded-[100px] bg-[#f30] px-6 py-3 lg:w-[192px] lg:px-6 lg:py-3"
                    label="Explore Courses"
                    href="/courses"
                    labelClassName="font-['PP_Neue_Montreal',sans-serif] text-[16px] leading-6 text-white font-medium"
                    iconSrc={imgArrowUpRightHero01}
                    iconSizeClass="size-6"
                  />
                  <PillCta
                    className="pill-cta-outline flex w-full items-center justify-center rounded-[100px] border border-black border-solid px-6 py-3 lg:w-[140px] lg:px-6 lg:py-3"
                    label="Get Started"
                    href="/#pricing"
                    labelClassName="font-['PP_Neue_Montreal',sans-serif] text-[16px] leading-6 text-inherit whitespace-nowrap font-medium"
                  />
                </div>
                </Reveal>
              </div>

              <Reveal
                mode="mount"
                className="mt-auto flex flex-col gap-6 lg:gap-6"
                data-node-id="65:79382"
                delay={0.1}
                duration={0.78}
                y={14}
              >
                <div
                  className="flex flex-wrap items-center gap-2 lg:gap-4 xl:gap-2"
                  data-node-id="65:79383"
                >
                  <div
                    className="flex items-center pr-[25px]"
                    data-node-id="65:79384"
                  >
                    <div className="relative flex shrink-0 items-center">
                      <div className="relative z-[1] mr-[-25px] size-14 shrink-0 overflow-hidden rounded-[100px] border-2 border-[#f1f1f1] bg-white">
                        <div className="-translate-x-1/2 absolute left-[calc(50%-6px)] top-[-16px] h-[91px] w-[60px]">
                          <img
                            alt=""
                            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                            src={
                              imgFocusedWomanWorkingRemotelyInASereneSetting1
                            }
                          />
                        </div>
                      </div>
                      <div className="relative z-[2] mr-[-25px] size-14 shrink-0 overflow-hidden rounded-[100px] border-2 border-[#f1f1f1] bg-white">
                        <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[-2px] h-[76px] w-[53px]">
                          <img
                            alt=""
                            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                            src={imgWomanAtDeskWithLaptop1}
                          />
                        </div>
                      </div>
                      <div className="relative z-[3] mr-[-25px] size-14 shrink-0 overflow-hidden rounded-[100px] border-2 border-[#f1f1f1] bg-white">
                        <div className="absolute left-[-5px] top-[-11px] flex h-[92px] w-[61px] items-center justify-center">
                          <div className="flex-none -scale-y-100 rotate-180">
                            <div className="relative h-[92px] w-[61px]">
                              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                                <img
                                  alt=""
                                  className="absolute left-[1.31%] top-0 h-full w-[105.57%] max-w-none"
                                  src={imgWomanUsingLaptop1}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-col gap-1 leading-6 text-black">
                    <AnimatedStatValue
                      className="font-['PP_Neue_Montreal',sans-serif] text-[24px] leading-none tracking-[-0.24px] font-bold"
                      data-node-id="65:79392"
                      durationSec={1.4}
                      value="10K+"
                    />
                    <p
                      className="font-['PP_Neue_Montreal',sans-serif] text-[18px] leading-6 tracking-[-0.36px] font-normal"
                      data-node-id="65:79393"
                    >
                      Satisfied Learners
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-wrap items-center gap-2"
                  data-node-id="65:79394"
                >
                  <div className="flex items-center gap-0.5">
                    {[imgStar, imgStar, imgStar, imgStar1, imgStar1].map(
                      (s, j) => (
                        <div key={j} className="relative size-6">
                          <img
                            alt=""
                            className="absolute block size-full max-w-none"
                            src={s}
                          />
                        </div>
                      ),
                    )}
                  </div>
                  <p className="font-['PP_Neue_Montreal',sans-serif] text-[16px] leading-6 tracking-[-0.16px] font-normal">
                    4.9 (15,008)
                  </p>
                  <p className="font-['PP_Neue_Montreal',sans-serif] text-[16px] leading-6 tracking-[-0.16px] font-normal">
                    Excellent
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal
            mode="mount"
            className="relative isolate aspect-[358/448] w-full min-h-[280px] rounded-xl bg-white [container-type:inline-size] lg:aspect-auto lg:min-h-[420px] lg:flex-1 lg:basis-[44%] xl:min-h-[740px] overflow-hidden"
            data-node-id="65:79408"
            delay={0.06}
            duration={0.85}
            y={22}
          >
            {/* Clip photo only so chip pills are not cropped; matches Figma 358×448. */}
            <div
              className="absolute inset-0 z-0 overflow-hidden rounded-xl"
              aria-hidden
            >
              {/* Mobile: image 609×1086 at (-125,-146). Desktop: centered crop. */}
              <div
                className="pointer-events-none absolute max-lg:left-[calc(-125*100%/358)] max-lg:top-[calc(-146*100%/448)] max-lg:h-[calc(1086*100%/448)] max-lg:w-[calc(609*100%/358)] lg:left-[calc(50%+0.5px)] lg:top-[calc(50%+173px)] lg:h-[1086px] lg:w-[609px] lg:-translate-x-1/2 lg:-translate-y-1/2"
                data-node-id="65:79409"
              >
                <img
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                  src={imgManWorkingIndoors1}
                />
              </div>
            </div>

            {/* Figma Frame 231: positioned at bottom center of image */}
            <div
              className="absolute bottom-2 left-1/2 z-10 w-full max-w-[90%] -translate-x-1/2 lg:bottom-4 lg:max-w-[80%]"
              data-node-id="65:79410"
            >
              <HeroFallingPillStack rows={heroPillRows} />
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
