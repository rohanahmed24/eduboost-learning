import Link from "next/link";
import type { MouseEventHandler } from "react";

export type PillCtaProps = {
  /** Full pill classes: `pill-cta-primary` | `pill-cta-outline` | `pill-cta-ghost` | `pill-cta-surface` + layout. */
  className: string;
  label?: string;
  labelClassName?: string;
  iconSrc?: string;
  /** Tailwind size for the square icon clip, e.g. `size-6` or `size-[22px] md:size-[24px]`. */
  iconSizeClass?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  /** Required when there is no `label` (icon-only). */
  "aria-label"?: string;
  "data-node-id"?: string;
};

/**
 * Label: vertical rail. Icon: 45° diagonal rail matching a ↗ arrow: duplicate sits
 * SW in track space; hover translate (50%, -50%) moves the first arrow out along ↗
 * and the ghost settles in from the opposite corner along the same line.
 */
export function PillCta({
  className,
  label,
  labelClassName = "",
  iconSrc,
  iconSizeClass = "size-6",
  href,
  onClick,
  type = "button",
  disabled = false,
  "aria-label": ariaLabelProp,
  "data-node-id": dataNodeId,
}: PillCtaProps) {
  const showLabel = Boolean(label);
  const showIcon = Boolean(iconSrc);

  if (!showLabel && !showIcon) {
    throw new Error("PillCta needs at least one of label or iconSrc");
  }

  const a11yName =
    label ??
    ariaLabelProp ??
    (showIcon ? "Continue" : "Action");

  const mergedClass = `${className} font-inherit`.trim();

  const rails = (
    <>
      {showLabel ? (
        <div
          className={`pill-cta-text-clip pointer-events-none block h-[1lh] min-h-0 min-w-0 max-w-full overflow-hidden ${labelClassName}`}
          aria-hidden
        >
          <div className="pill-cta-text-track flex flex-col">
            <span className="block">{label}</span>
            <span className="block">{label}</span>
          </div>
        </div>
      ) : null}
      {showIcon ? (
        <div
          className={`pill-cta-icon-clip pointer-events-none shrink-0 overflow-hidden ${iconSizeClass}`}
          aria-hidden
        >
          <div className="pill-cta-icon-track absolute left-0 top-0 h-[200%] w-[200%]">
            <div className="pill-cta-icon-cell absolute left-0 top-0 flex h-1/2 w-1/2 items-center justify-center">
              <img
                alt=""
                className="block max-h-full max-w-full object-contain"
                src={iconSrc}
              />
            </div>
            <div className="pill-cta-icon-cell absolute -left-1/2 top-1/2 flex h-1/2 w-1/2 items-center justify-center">
              <img
                alt=""
                className="block max-h-full max-w-full object-contain"
                src={iconSrc}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={mergedClass}
        aria-label={a11yName}
        data-node-id={dataNodeId}
        onClick={onClick}
      >
        {rails}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={mergedClass}
      aria-label={a11yName}
      data-node-id={dataNodeId}
      onClick={onClick}
      disabled={disabled}
    >
      {rails}
    </button>
  );
}
