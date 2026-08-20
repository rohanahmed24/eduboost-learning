import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "./motion/scrollPaintTokens";
import { Reveal, RevealStagger, RevealStaggerItem } from "./motion/Reveal";
import { ebAsset } from "@/app/_lib/eb-asset";
import { PricingPlanCard } from "./pricing/PricingPlanCard";
import { pricingPlans } from "./pricing/pricing-plans";

const imgUnion =
  ebAsset("af1bbb12-89db-4024-a2a1-094d917cce11");

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-white scroll-mt-28" data-node-id="65:79026">
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1440px] flex-col gap-12 px-[clamp(1rem,4vw,3.75rem)] pb-[clamp(3rem,10vw,10rem)] pt-[clamp(2.5rem,8vw,7.5rem)] md:gap-[60px]">
        <Reveal
          className="relative flex w-full shrink-0 flex-col items-start justify-between gap-8 lg:flex-row lg:items-start"
          data-node-id="65:79027"
          duration={0.74}
          y={16}
        >
          <div
            className="bg-[#fff7f5] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0"
            data-node-id="65:79028"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Union"
              data-node-id="65:79029"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                src={imgUnion}
              />
            </div>
            <p
              className="font-['PP_Neue_Montreal',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.18px] whitespace-nowrap"
              data-node-id="65:79031"
            >
              Choose Your Plan
            </p>
          </div>
          <div
            className="relative flex w-full min-w-0 max-w-[893px] shrink-0 flex-col items-start lg:flex-1"
            data-node-id="65:79032"
          >
            <div
              className="relative w-full shrink-0 font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black"
              data-node-id="65:79033"
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
          className="relative flex w-full min-w-0 shrink-0 flex-col items-stretch gap-2 lg:flex-row lg:gap-2"
          data-node-id="65:79034"
        >
          {pricingPlans.map((plan) => (
            <RevealStaggerItem
              key={plan.staggerItemId}
              className="relative flex w-full min-w-0 shrink-0 flex-col rounded-xl bg-[#f1f1f1] p-6 max-lg:flex-none lg:flex-1 lg:basis-0"
              data-node-id={plan.staggerItemId}
            >
              <PricingPlanCard plan={plan} />
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
