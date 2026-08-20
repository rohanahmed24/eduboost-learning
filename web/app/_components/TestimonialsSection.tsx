"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ebAsset } from "@/app/_lib/eb-asset";
import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { scrollPaintDarkUniform } from "./motion/scrollPaintTokens";
import { Reveal } from "./motion/Reveal";

const imgEllipse1 =
  ebAsset("60df4e75-7695-4b2f-9222-90db48ea35bf");
const imgEllipse2 =
  ebAsset("03cb5fee-ddee-42fc-9d86-62ee15ea99bd");
const imgEllipse3 =
  ebAsset("546c2326-c555-456f-8f8c-661237ddbe79");
const imgEllipse4 =
  ebAsset("b7fc1975-8320-4973-98ab-d94305aa7caf");
const imgUnion =
  ebAsset("d6efb344-2131-4e55-a084-e36c3ab0f288");
const imgArrowUpRight01 =
  ebAsset("08889d15-b06a-420b-a84e-b981f47ab003");
const imgArrowUpRight2 =
  ebAsset("65f556e6-af05-4b1f-962b-c52171c34a83");
const imgFrame195 =
  ebAsset("20ec5b2a-b869-4ed8-8afa-9d2039a8fe76");

type Testimonial = {
  cardNodeId: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    cardNodeId: "65:79175",
    quote:
      '"EduBoost completely changed the way I approach learning. The courses are practical, engaging, and taught by real industry experts. I gained skills that immediately helped me in my career and boosted my confidence."',
    name: "Jerome Bell",
    role: "Nursing Assistant",
    avatar: imgEllipse1,
  },
  {
    cardNodeId: "65:79198",
    quote:
      '"The instructors at EduBoost are amazing! Each lesson is clear, hands-on, and easy to follow. I was able to complete projects, understand real-world applications, and feel prepared for professional challenges after every course."',
    name: "Bessie Cooper",
    role: "Marketing Coordinator",
    avatar: imgEllipse2,
  },
  {
    cardNodeId: "65:79221",
    quote:
      '"I highly recommend EduBoost to anyone wanting to grow their skills. The learning paths are structured perfectly, and I could study at my own pace while still achieving measurable results."',
    name: "Leslie Alexander",
    role: "Medical Assistant",
    avatar: imgEllipse3,
  },
  {
    cardNodeId: "65:79244",
    quote:
      '"EduBoost provides an outstanding learning experience. From beginner to advanced courses, everything is well-designed, practical, and motivating. I’ve learned so much and feel confident applying my knowledge in real work situations."',
    name: "Marvin McKinney",
    role: "Dog Trainer",
    avatar: imgEllipse4,
  },
  {
    cardNodeId: "65:79330",
    quote:
      '"The platform feels premium end-to-end: lessons, projects, and feedback loops are tied together so I always knew what to do next. I use what I learned in EduBoost every week on the job."',
    name: "Courtney Henry",
    role: "UX Designer",
    avatar: imgEllipse1,
  },
  {
    cardNodeId: "65:79331",
    quote:
      '"I rebuilt my portfolio with EduBoost projects and finally felt confident talking about outcomes in interviews. The career resources and structured paths saved me months of guessing."',
    name: "Ralph Edwards",
    role: "Product Manager",
    avatar: imgEllipse2,
  },
  {
    cardNodeId: "65:79332",
    quote:
      '"Certificates and project documentation were easy to share with my manager. The content is rigorous without being overwhelming. Exactly what I needed to level up."',
    name: "Darlene Robertson",
    role: "Business Analyst",
    avatar: imgEllipse3,
  },
  {
    cardNodeId: "65:79333",
    quote:
      '"Community discussions and instructor Q&A kept me accountable. The slide-from-home rhythm made it possible to study after work without burning out."',
    name: "Floyd Miles",
    role: "Software Engineer",
    avatar: imgEllipse4,
  },
];

function chunk<T>(arr: T[], size: number): T[][] {
  if (size < 1) return [];
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

function getPerView(width: number) {
  if (width >= 1280) return 4;
  if (width >= 640) return 2;
  return 1;
}

/** Shared 48×48 circle; fixed size avoids pill-style stretch from padding. */
const navCircleBtn =
  "inline-flex size-12 shrink-0 items-center justify-center rounded-full p-0 outline-none transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-35";

function StarRow() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="relative shrink-0 size-[24px]">
          <img
            alt=""
            className="absolute block max-w-none size-full"
            src={imgFrame195}
          />
        </div>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      className="relative flex min-h-0 min-w-0 w-full flex-col items-start gap-5 rounded-2xl bg-[rgba(255,255,255,0.04)] p-5 sm:gap-6 sm:p-6"
      data-node-id={item.cardNodeId}
    >
      <StarRow />
      <p className="w-full min-w-0 max-w-full break-words font-['PP_Neue_Montreal',sans-serif] font-normal text-[17px] leading-[1.45] not-italic text-white sm:text-[18px] sm:leading-[24px]">
        {item.quote}
      </p>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[48px]">
          <img
            alt=""
            className="absolute block max-w-none size-full"
            height="48"
            src={item.avatar}
            width="48"
          />
        </div>
        <div className="content-stretch flex min-w-0 flex-col items-start not-italic relative shrink-0 sm:w-[190px]">
          <p className="font-['PP_Neue_Montreal',sans-serif] font-normal leading-[24px] relative shrink-0 text-[18px] text-white w-full">
            {item.name}
          </p>
          <p className="font-['PP_Neue_Montreal',sans-serif] italic leading-[20px] relative shrink-0 text-[#858585] text-[14px] w-full">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const lastPerViewRef = useRef<number | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [carouselMinHeight, setCarouselMinHeight] = useState(0);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const perView = useMemo(() => getPerView(viewportWidth), [viewportWidth]);

  const pages = useMemo(
    () => chunk(TESTIMONIALS, perView),
    [perView],
  );

  const numPages = pages.length;

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const updateViewportWidth = (width: number) => {
      if (getPerView(width) !== perView) {
        setPage(0);
        setDirection(0);
      }
      setViewportWidth(width);
    };

    const ro = new ResizeObserver(([entry]) => {
      updateViewportWidth(entry.contentRect.width);
    });
    ro.observe(el);
    updateViewportWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, [perView]);

  const safePage = numPages > 0 ? Math.min(page, numPages - 1) : 0;
  const visibleChunk = pages[safePage] ?? [];

  /** Keep section height stable: each slide’s copy length varies row height. */
  useLayoutEffect(() => {
    const el = slideRef.current;
    if (!el) return;

    const measure = () => {
      const node = slideRef.current;
      if (!node) return;
      const h = Math.ceil(node.getBoundingClientRect().height);
      if (h < 1) return;
      const prevPv = lastPerViewRef.current;
      const perViewChanged =
        prevPv !== null && prevPv !== perView;
      lastPerViewRef.current = perView;
      if (perViewChanged) {
        setCarouselMinHeight(h);
        return;
      }
      setCarouselMinHeight((m) => Math.max(m, h));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [safePage, perView, numPages]);

  const goNext = useCallback(() => {
    if (numPages < 2) return;
    setDirection(1);
    setPage((p) => {
      const c = Math.min(p, numPages - 1);
      return (c + 1) % numPages;
    });
  }, [numPages]);

  const goPrev = useCallback(() => {
    if (numPages < 2) return;
    setDirection(-1);
    setPage((p) => {
      const c = Math.min(p, numPages - 1);
      return (c - 1 + numPages) % numPages;
    });
  }, [numPages]);

  const slideVariants = useMemo(
    () => ({
      enter: (dir: number) => ({
        x: dir > 0 ? 48 : -48,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (dir: number) => ({
        x: dir < 0 ? 48 : -48,
        opacity: 0,
      }),
    }),
    [],
  );

  const slideTransition = reduceMotion
    ? { duration: 0.16, ease: [0.22, 1, 0.36, 1] as const }
    : { type: "tween" as const, duration: 0.32, ease: [0.22, 1, 0.36, 1] as const };

  const navDisabled = numPages < 2;

  return (
    <section id="testimonials" className="w-full bg-black scroll-mt-28" data-node-id="65:79159">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-[clamp(1rem,4vw,3.75rem)] py-12 md:gap-[60px] lg:py-[clamp(3rem,10vw,10rem)]">
        <Reveal
          className="relative flex w-full shrink-0 flex-col items-start justify-between gap-5 lg:flex-row lg:items-start lg:gap-8"
          data-node-id="65:79160"
          duration={0.74}
          y={16}
        >
          <div
            className="bg-[rgba(255,255,255,0.04)] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0"
            data-node-id="65:79161"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Union"
              data-node-id="65:79162"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                src={imgUnion}
              />
            </div>
            <p
              className="font-['PP_Neue_Montreal',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.18px] whitespace-nowrap"
              data-node-id="65:79164"
            >
              Testimonials
            </p>
          </div>

          <div
            className="relative flex w-full min-w-0 max-w-[893px] shrink-0 flex-col items-start gap-5 lg:gap-8 lg:flex-1"
            data-node-id="65:79165"
          >
            <div
              className="relative w-full min-w-0 shrink-0 font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-white"
              data-node-id="65:79166"
            >
              <ScrollPaintHeadline
                theme="dark"
                uniform={scrollPaintDarkUniform}
                className="text-[clamp(1.5rem,2.2vw+1rem,2.5rem)] leading-[1] tracking-[-0.01em]"
                segments={[
                  {
                    variant: "primary",
                    text:
                      "Hear directly from our students who have grown their skills, advanced their careers, and achieved real results through EduBoost.",
                  },
                ]}
              />
            </div>

            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0"
              data-node-id="65:79167"
            >
              <button
                type="button"
                aria-label="Previous testimonials"
                disabled={navDisabled}
                className={`${navCircleBtn} cursor-pointer touch-manipulation border border-solid border-white bg-transparent hover:bg-white/[0.07] focus-visible:ring-[#f30]/55 [-webkit-tap-highlight-color:transparent]`}
                data-node-id="65:79168"
                onClick={goPrev}
              >
                <span
                  className="relative size-6 shrink-0 rotate-180"
                  data-name="arrow-up-right-01"
                  data-node-id="65:79169"
                  aria-hidden
                >
                  <img
                    alt=""
                    className="block size-full max-h-full max-w-full object-contain"
                    src={imgArrowUpRight01}
                  />
                </span>
              </button>

              <button
                type="button"
                aria-label="Next testimonials"
                disabled={navDisabled}
                className={`${navCircleBtn} cursor-pointer touch-manipulation border border-transparent bg-[#f30] hover:bg-[#ff401a] focus-visible:ring-white/40 [-webkit-tap-highlight-color:transparent]`}
                data-node-id="65:79171"
                onClick={goNext}
              >
                <span
                  className="relative size-6 shrink-0"
                  data-name="arrow-up-right-02"
                  aria-hidden
                >
                  <img
                    alt=""
                    className="block size-full max-h-full max-w-full object-contain"
                    src={imgArrowUpRight2}
                  />
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={viewportRef}
          className="relative w-full min-w-0 overflow-hidden"
          style={
            carouselMinHeight > 0
              ? { minHeight: carouselMinHeight }
              : undefined
          }
          data-node-id="65:79174"
        >
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              ref={slideRef}
              key={`${safePage}-${perView}`}
              role="region"
              aria-label={`Testimonials, page ${safePage + 1} of ${numPages}`}
              aria-live="polite"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4"
              drag={navDisabled ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              dragMomentum={false}
              onPanEnd={(_, info) => {
                const t = 48;
                if (info.offset.x < -t) {
                  goNext();
                } else if (info.offset.x > t) {
                  goPrev();
                }
              }}
            >
              {visibleChunk.map((item) => (
                <TestimonialCard key={item.cardNodeId} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
