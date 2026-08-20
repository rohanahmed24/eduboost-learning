import { PillCta } from "@/app/_components/PillCta";
import { AnimatedStatValue } from "@/app/_components/motion/AnimatedStatValue";
import { PricingFeatureRow } from "./PricingFeatureRow";
import { pricingArrowLight, pricingArrowOnPrimary } from "./assets";
import { pricingPillLabelClass } from "./pricing-plans";
import type { PricingPlanDefinition } from "./types";

type PricingPlanCardProps = {
  plan: PricingPlanDefinition;
};

export function PricingPlanCard({ plan }: PricingPlanCardProps) {
  const iconSrc =
    plan.cta.variant === "primary" ? pricingArrowOnPrimary : pricingArrowLight;
  const pillClass =
    plan.cta.variant === "primary"
      ? `pill-cta-primary relative flex w-full shrink-0 items-center justify-center ${plan.cta.gapClass} bg-[#f30] px-[24px] py-[12px] rounded-[100px]`
      : `pill-cta-surface relative flex w-full shrink-0 items-center justify-center ${plan.cta.gapClass} px-[24px] py-[12px] rounded-[100px]`;

  const cta = (
    <PillCta
      className={pillClass}
      label={plan.cta.label}
      labelClassName={pricingPillLabelClass(
        plan.cta.variant === "primary" ? "on-primary" : "on-surface",
      )}
      iconSrc={iconSrc}
      iconSizeClass="size-[24px]"
      href={plan.cta.href}
      data-node-id={plan.cta.nodeId}
    />
  );

  return (
    <div
      className="relative flex w-full min-w-0 flex-col items-start gap-10"
      data-node-id={plan.innerWrapperId}
    >
      <div
        className="content-stretch relative flex w-full shrink-0 flex-col items-start gap-[16px] font-['PP_Neue_Montreal:Medium',sans-serif] not-italic"
        data-node-id={plan.headerId}
      >
        <p
          className="relative w-full min-w-0 shrink-0 text-[clamp(1.375rem,5vw,1.75rem)] text-black leading-tight tracking-[-0.56px] sm:text-[28px] sm:leading-[28px]"
          data-node-id={plan.titleId}
        >
          {plan.title}
        </p>
        <div
          className="relative w-full min-w-0 shrink-0 flex flex-col justify-end text-[#262626] text-[clamp(1rem,3.8vw,1.375rem)] leading-[0] tracking-[-0.24px] sm:text-[24px]"
          data-node-id={plan.blurbId}
        >
          <p className="leading-[1.45] sm:leading-[32px]">{plan.blurb}</p>
        </div>
      </div>

      <div
        className="relative min-w-0 shrink-0 font-['PP_Neue_Montreal:Medium',sans-serif] text-[clamp(2.25rem,11vw,3.5rem)] text-black not-italic leading-none tracking-[-0.56px] sm:text-[56px] sm:leading-[0] sm:whitespace-nowrap flex flex-col justify-end"
        data-node-id={plan.priceId}
      >
        <AnimatedStatValue
          className="leading-[normal]"
          durationSec={1.25}
          value={plan.price}
        />
      </div>

      {plan.ctaWrapperId ? (
        <div
          className="content-stretch relative flex w-full shrink-0 flex-col items-start justify-center"
          data-node-id={plan.ctaWrapperId}
        >
          {cta}
        </div>
      ) : (
        cta
      )}

      <div
        className="content-stretch relative flex w-full shrink-0 flex-col items-start gap-[16px]"
        data-node-id={plan.includesSectionId}
      >
        <div
          className="relative w-full shrink-0 flex flex-col justify-end font-['PP_Neue_Montreal:Medium',sans-serif] text-[28px] text-black not-italic leading-[0] tracking-[-0.56px]"
          data-node-id={plan.includesHeadingId}
        >
          <p className="leading-[28px]">This Course includes</p>
        </div>
        <div
          className="content-stretch relative flex w-full shrink-0 flex-col items-start gap-[12px]"
          data-node-id={plan.includesListId}
        >
          {plan.features.map((text, i) => (
            <PricingFeatureRow key={`${plan.staggerItemId}-f-${i}`} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}
