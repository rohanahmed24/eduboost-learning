import type { PricingPlanDefinition } from "./types";

const labelUi =
  "font-['PP_Neue_Montreal:Medium',sans-serif] text-[16px] leading-[24px] not-italic whitespace-nowrap";

export const pricingPlans: PricingPlanDefinition[] = [
  {
    staggerItemId: "65:79035",
    innerWrapperId: "65:79036",
    headerId: "65:79037",
    titleId: "65:79038",
    title: "Free",
    blurbId: "65:79039",
    blurb: "Access basic lessons and explore learning platform features",
    priceId: "65:79040",
    price: "$0",
    ctaWrapperId: "65:79041",
    cta: {
      nodeId: "65:79042",
      label: "Start With Free",
      variant: "surface",
      gapClass: "gap-2",
      href: "/courses#courses",
    },
    includesSectionId: "65:79046",
    includesHeadingId: "65:79047",
    includesListId: "65:79048",
    features: [
      "Access to selected beginner-level courses",
      "Introductory lessons and core fundamentals",
      "Limited course materials and resources",
      "Basic quizzes and practice tasks",
      "Community access with limited features",
      "Learn platform navigation and tools",
      "No payment required, forever free",
    ],
  },
  {
    staggerItemId: "65:79077",
    innerWrapperId: "65:79078",
    headerId: "65:79079",
    titleId: "65:79080",
    title: "Package",
    blurbId: "65:79081",
    blurb: "Get full access to one professional skill-focused course",
    priceId: "65:79082",
    price: "$300",
    cta: {
      nodeId: "65:79083",
      label: "Get this course",
      variant: "primary",
      gapClass: "gap-1",
      href: "/courses#courses",
    },
    includesSectionId: "65:79087",
    includesHeadingId: "65:79088",
    includesListId: "65:79089",
    features: [
      "Full access to one premium course",
      "Expert-led structured learning path",
      "Practical projects and assignments",
      "Downloadable resources and materials",
      "Certificate after course completion",
      "Community discussion and support",
      "One-time affordable payment option",
    ],
  },
  {
    staggerItemId: "65:79118",
    innerWrapperId: "65:79119",
    headerId: "65:79120",
    titleId: "65:79121",
    title: "Bundle",
    blurbId: "65:79122",
    blurb: "Unlock all courses with lifetime access and updates",
    priceId: "65:79123",
    price: "$450",
    cta: {
      nodeId: "65:79124",
      label: "Get Bundle Course",
      variant: "surface",
      gapClass: "gap-1",
      href: "/courses#courses",
    },
    includesSectionId: "65:79128",
    includesHeadingId: "65:79129",
    includesListId: "65:79130",
    features: [
      "Unlimited access to all premium courses",
      "Multiple career-focused learning tracks",
      "Real-world projects and case studies",
      "Lifetime updates and new content",
      "Priority learner support and guidance",
      "Certificates for every completed course",
      "Best value for long-term growth",
    ],
  },
];

/** Shared typography helper for {@link PillCta} labels (exposed for custom pages) */
export const pricingPillLabelClass = (tone: "on-primary" | "on-surface") =>
  tone === "on-primary"
    ? `${labelUi} text-white`
    : `${labelUi} text-black`;
