"use client";

import React, { useState } from "react";
import { ebAsset } from "@/app/_lib/eb-asset";
import { Reveal } from "./motion/Reveal";
import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "./motion/scrollPaintTokens";
import { PageContainer } from "./PageContainer";

const imgUnion = ebAsset("f269b23c-45e2-44c2-b17b-6cb43544cf13");

/*
 * Figma node 65:80418: AboutStoreSection
 *
 * Heights are exact Figma values for bento grid layout.
 */
const PHOTOS = [
  {
    src: ebAsset("3833642b-12f7-4f30-81b1-6cae22e179b8"),
    alt: "EduBoost educator presenting",
    h: 549,
    objectPosition: "50% 2%",
    nodeId: "65:80430",
  },
  {
    src: ebAsset("22704b8a-1990-4c29-8703-c5204c79c86f"),
    alt: "EduBoost students collaborating",
    h: 446,
    objectPosition: "50% 30%",
    nodeId: "65:80434",
  },
  {
    src: ebAsset("d6d61355-2b3a-4933-9006-9f053549b3c4"),
    alt: "EduBoost courses in action",
    h: 324,
    objectPosition: "50% 31%",
    nodeId: "65:80436",
  },
] as const;

// Duplicate photos 4 times to ensure seamless coverage across wide viewports
const MARQUEE_PHOTOS = [...PHOTOS, ...PHOTOS, ...PHOTOS, ...PHOTOS];

const CARD_W = "clamp(220px, 30.1vw, 434px)";
const HOVER_H = 600;

export function AboutStoreSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const isAnyHovered = hoveredIdx !== null;

  return (
    <section className="w-full bg-white overflow-hidden" data-node-id="65:80418">
      <style>{`
        @keyframes eb-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-75%); }
        }
        .eb-marquee-strip {
          animation: eb-marquee 60s linear infinite;
          animation-play-state: var(--eb-play, running);
          will-change: transform;
        }
      `}</style>

      {/* ── Mobile-only header ── */}
      <div className="lg:hidden">
        <div className="px-4 pt-12 pb-8 flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-1 rounded-full bg-[#fff7f5] px-3 py-[7px]">
            <div className="relative shrink-0 size-5">
              <img alt="" className="absolute block size-full max-w-none" src={imgUnion} />
            </div>
            <p className="font-['PP_Neue_Montreal',sans-serif] font-normal text-[14px] leading-5 tracking-[-0.56px] text-black whitespace-nowrap">
              Our Store
            </p>
          </div>
          <div className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black tracking-[-0.32px]">
            <ScrollPaintHeadline
              theme="light"
              className="text-[2rem] leading-[1.25] tracking-[-0.32px]"
              segments={[
                { variant: "primary", text: "Meet our expert educators who guide, inspire, and support learners to gain practical" },
                { variant: "muted", text: " skills and succeed in their careers growing" },
              ]}
            />
          </div>
        </div>
        {/* Mobile photo stack - only 2 photos */}
        <div className="px-4 pb-12 flex flex-col gap-4">
          <div className="relative h-[380px] w-full rounded-xl overflow-hidden">
            <img
              src={PHOTOS[0].src}
              alt={PHOTOS[0].alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 27%" }}
            />
            <div className="absolute top-3 left-3 flex items-center backdrop-blur-[8px] bg-white/10 border border-white/10 rounded-lg px-3 py-1.5">
              <p className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[16px] leading-6 text-white whitespace-nowrap">
                Design Systems
              </p>
            </div>
          </div>
          <div className="relative h-[380px] w-full rounded-xl overflow-hidden">
            <img
              src={PHOTOS[1].src}
              alt={PHOTOS[1].alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: PHOTOS[1].objectPosition }}
            />
          </div>
        </div>
      </div>

      {/* ── Headline row ── */}
      <PageContainer className="pt-[clamp(4rem,11.1vw,10rem)] pb-[clamp(2rem,4.2vw,3.75rem)]">
        <Reveal
          className="max-lg:hidden flex items-start justify-between gap-8"
          duration={0.74}
          y={16}
          data-node-id="65:80420"
        >
          <div
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#fff7f5] px-3 py-[7px]"
            data-node-id="65:80421"
          >
            <div className="relative shrink-0 size-5" data-node-id="65:80422">
              <img alt="" className="absolute block size-full max-w-none" src={imgUnion} />
            </div>
            <p
              className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[18px] leading-6 tracking-[-0.18px] text-black whitespace-nowrap"
              data-node-id="65:80424"
            >
              Our Store
            </p>
          </div>

          <div className="flex min-w-0 max-w-[893px] flex-col" data-node-id="65:80425">
            <div
              className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black tracking-[-0.4px]"
              data-node-id="65:80426"
            >
              <ScrollPaintHeadline
                theme="light"
                uniform={scrollPaintLightUniform}
                className="text-[clamp(1.75rem,2.78vw,2.5rem)] leading-[1] tracking-[-0.025em]"
                segments={[
                  {
                    variant: "primary",
                    text: "From a simple vision to empower learners, we've grown into a platform delivering expert-led courses, practical skills, and meaningful growth.",
                  },
                ]}
              />
            </div>
          </div>
        </Reveal>
      </PageContainer>

      {/* ── Marquee photo strip - seamless infinite loop ── */}
      <div className="max-lg:hidden pb-[clamp(4rem,11.1vw,10rem)]" data-node-id="65:80427">
        <div
          className="eb-marquee-strip flex items-start w-max"
          style={{ "--eb-play": isAnyHovered ? "paused" : "running" } as React.CSSProperties}
        >
          {MARQUEE_PHOTOS.map((photo, i) => {
            const isHovered = hoveredIdx === i;

            return (
              <div
                key={`${photo.nodeId}-${i}`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 mr-2 relative"
                style={{
                  width: CARD_W,
                  height: HOVER_H,
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="absolute inset-0 w-full h-full block"
                  style={{
                    objectFit: "cover",
                    objectPosition: photo.objectPosition,
                    transition: "transform 600ms cubic-bezier(0.4,0,0.2,1)",
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
