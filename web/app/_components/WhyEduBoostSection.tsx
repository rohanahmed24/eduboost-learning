import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "./motion/scrollPaintTokens";
import { Reveal, RevealStagger, RevealStaggerItem } from "./motion/Reveal";
import { ebAsset } from "@/app/_lib/eb-asset";

const imgUnion =
  ebAsset("16fdb56d-31eb-4cf4-8ad5-8864398f25dc");

export function WhyEduBoostSection() {
  return (
    <section className="w-full bg-[#f1f1f1]" data-node-id="65:78635">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-[clamp(1rem,4vw,3.75rem)] py-[clamp(3rem,10vw,10rem)] md:gap-[60px]">
      <Reveal
        className="relative flex w-full shrink-0 flex-col items-start justify-between gap-8 lg:flex-row lg:items-start"
        data-node-id="65:78636"
        duration={0.74}
        y={16}
      >
        <div
          className="bg-[#fff7f5] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0"
          data-node-id="65:78637"
        >
          <div
            className="relative shrink-0 size-[20px]"
            data-name="Union"
            data-node-id="65:78638"
          >
            <img
              alt=""
              className="absolute block max-w-none size-full"
              src={imgUnion}
            />
          </div>
          <p
            className="font-['PP_Neue_Montreal',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.18px] whitespace-nowrap"
            data-node-id="65:78640"
          >
            Why EduBoost
          </p>
        </div>
        <div
          className="relative flex w-full min-w-0 max-w-[893px] shrink-0 flex-col items-start lg:flex-1"
          data-node-id="65:78641"
        >
          <div
            className="relative w-full shrink-0 font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black"
            data-node-id="65:78642"
          >
            <ScrollPaintHeadline
              theme="light"
              uniform={scrollPaintLightUniform}
              className="text-[clamp(1.5rem,2.2vw+1rem,2.5rem)] leading-[1] tracking-[-0.01em]"
              segments={[
                {
                  variant: "primary",
                  text:
                    "Empower your learning journey with expert courses, hands-on projects, flexible paths, and real-world skills for career growth.",
                },
              ]}
            />
          </div>
        </div>
      </Reveal>

      <RevealStagger
        className="flex w-full shrink-0 flex-col gap-2 xl:h-[400px] xl:flex-row xl:items-stretch"
        data-node-id="65:78643"
      >
        <RevealStaggerItem
          className="relative flex min-h-[320px] flex-1 flex-col items-center justify-center rounded-2xl bg-white p-6 xl:min-h-0 xl:max-h-[400px]"
          data-node-id="65:78644"
        >
          <div
            className="relative flex w-full max-w-[386px] items-center justify-between gap-4 xl:max-w-none"
            data-node-id="65:78645"
          >
            <div
              className="relative flex min-w-0 flex-1 flex-col items-start justify-between gap-8 not-italic md:gap-10"
              data-node-id="65:78646"
            >
              <p
                className="font-['PP_Neue_Montreal',sans-serif] font-medium leading-[normal] relative shrink-0 text-[clamp(1.5rem,6vw+0.35rem,2.5rem)] text-black tracking-[-0.4px] w-full"
                data-node-id="65:78647"
              >
                Learn From Industry Experts
              </p>
              <p
                className="font-['PP_Neue_Montreal',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#bfbfbf] text-[16px] tracking-[-0.16px] w-full"
                data-node-id="65:78648"
              >
                Gain practical skills through courses designed and taught by
                experienced professionals for real-world success.
              </p>
            </div>
          </div>
        </RevealStaggerItem>

        <RevealStaggerItem
          className="relative flex min-h-[320px] flex-1 flex-col items-center justify-center rounded-2xl bg-white p-6 xl:min-h-0 xl:max-h-[400px]"
          data-node-id="65:78656"
        >
          <div
            className="relative flex w-full max-w-[386px] items-center justify-between gap-4 xl:max-w-none"
            data-node-id="65:78657"
          >
            <div
              className="relative flex min-w-0 flex-1 flex-col items-start justify-between gap-8 not-italic md:gap-10"
              data-node-id="65:78658"
            >
              <p
                className="font-['PP_Neue_Montreal',sans-serif] font-medium leading-[normal] relative shrink-0 text-[clamp(1.5rem,6vw+0.35rem,2.5rem)] text-black tracking-[-0.4px] w-full"
                data-node-id="65:78659"
              >
                Learn At Your Own Pace
              </p>
              <p
                className="font-['PP_Neue_Montreal',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#bfbfbf] text-[16px] tracking-[-0.16px] w-full"
                data-node-id="65:78660"
              >
                Follow personalized learning paths that fit your schedule and
                help you achieve your goals efficiently.
              </p>
            </div>
          </div>
        </RevealStaggerItem>

        <RevealStaggerItem
          className="relative flex min-h-[320px] flex-1 flex-col items-center justify-center rounded-2xl bg-white p-6 xl:min-h-0 xl:max-h-[400px]"
          data-node-id="65:78668"
        >
          <div
            className="relative flex w-full max-w-[386px] items-center justify-between gap-4 xl:max-w-none"
            data-node-id="65:78669"
          >
            <div
              className="relative flex min-w-0 flex-1 flex-col items-start justify-between gap-8 not-italic md:gap-10"
              data-node-id="65:78670"
            >
              <p
                className="font-['PP_Neue_Montreal',sans-serif] font-medium leading-[normal] relative shrink-0 text-[clamp(1.5rem,6vw+0.35rem,2.5rem)] text-black tracking-[-0.4px] w-full"
                data-node-id="65:78671"
              >
                Skills That Boost Careers
              </p>
              <p
                className="font-['PP_Neue_Montreal',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#bfbfbf] text-[16px] tracking-[-0.16px] w-full"
                data-node-id="65:78672"
              >
                Acquire relevant skills that enhance your career opportunities,
                employability, and professional growth worldwide.
              </p>
            </div>
          </div>
        </RevealStaggerItem>
      </RevealStagger>
      </div>
    </section>
  );
}

