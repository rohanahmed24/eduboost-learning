export type PricingCtaConfig = {
  nodeId: string;
  label: string;
  variant: "primary" | "surface";
  /** Tailwind gap between label and icon, e.g. `gap-1`, `gap-2` */
  gapClass: string;
  href: string;
};

export type PricingPlanDefinition = {
  staggerItemId: string;
  innerWrapperId: string;
  headerId: string;
  titleId: string;
  title: string;
  blurbId: string;
  blurb: string;
  priceId: string;
  price: string;
  /** Free tier wraps the CTA in an extra column; others place CTA inline */
  ctaWrapperId?: string;
  cta: PricingCtaConfig;
  /** Outer wrapper around “This Course includes” + feature list */
  includesSectionId: string;
  includesHeadingId: string;
  includesListId: string;
  features: string[];
};
