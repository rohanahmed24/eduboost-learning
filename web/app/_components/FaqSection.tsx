"use client";

import { useCallback, useId, useState } from "react";
import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "./motion/scrollPaintTokens";
import { Reveal } from "./motion/Reveal";
import { ebAsset } from "@/app/_lib/eb-asset";

const imgUnion =
  ebAsset("56452679-a9fc-45a2-a253-d52868312951");
const imgAdd01 =
  ebAsset("61549b85-8386-4e5d-818a-485d33fcb946");

type FaqItemData = {
  id: string;
  cardNodeId: string;
  headerNodeId: string;
  titleNodeId: string;
  iconNodeId: string;
  bodyNodeId: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItemData[] = [
  {
    id: "types",
    cardNodeId: "65:79276",
    headerNodeId: "65:79277",
    titleNodeId: "65:79278",
    iconNodeId: "65:79279",
    bodyNodeId: "65:79282",
    question: "What types of courses does EduBoost offer?",
    answer:
      "EduBoost courses are designed for learners of all levels, offering flexible learning paths, expert guidance, and certificates upon completion, accessible anytime, anywhere, with multiple payment options.",
  },
  {
    id: "instructors",
    cardNodeId: "65:79283",
    headerNodeId: "65:79284",
    titleNodeId: "65:79285",
    iconNodeId: "65:79286",
    bodyNodeId: "65:79287-body",
    question: "Can I interact with instructors or ask questions?",
    answer:
      "Yes. Each course includes discussion areas, Q&A threads, and, in many premium courses, live sessions or office hours so you can get feedback from instructors and teaching assistants when you are stuck.",
  },
  {
    id: "beginners",
    cardNodeId: "65:79289",
    headerNodeId: "65:79290",
    titleNodeId: "65:79291",
    iconNodeId: "65:79292",
    bodyNodeId: "65:79293-body",
    question: "Are the courses suitable for beginners?",
    answer:
      "Absolutely. Paths are labeled by level, and many courses start from fundamentals before moving to advanced projects. You can filter by beginner-friendly tracks and learn at your own pace.",
  },
  {
    id: "certificate",
    cardNodeId: "65:79295",
    headerNodeId: "65:79296",
    titleNodeId: "65:79297",
    iconNodeId: "65:79298",
    bodyNodeId: "65:79299-body",
    question: "Do I get a certificate after completing a course?",
    answer:
      "When you complete all required lessons, quizzes, and projects for a certificated course, you can download a verifiable certificate from your dashboard. Requirements are listed on each course page.",
  },
  {
    id: "materials",
    cardNodeId: "65:79301",
    headerNodeId: "65:79302",
    titleNodeId: "65:79303",
    iconNodeId: "65:79304",
    bodyNodeId: "65:79305-body",
    question: "How do I access course materials?",
    answer:
      "After enrollment, all videos, readings, downloads, and assignments appear in your course classroom on the web and mobile app. Materials stay available for the access period shown on your purchase.",
  },
  {
    id: "payment",
    cardNodeId: "65:79307",
    headerNodeId: "65:79308",
    titleNodeId: "65:79309",
    iconNodeId: "65:79310",
    bodyNodeId: "65:79311-body",
    question: "What payment options are available for courses?",
    answer:
      "We support major credit and debit cards and regional payment methods where available. Some courses offer one-time purchase, bundles, or installment plans. Check the checkout screen for the options that apply to you.",
  },
];

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div
      className="relative flex w-full min-w-0 shrink-0 flex-col items-start overflow-hidden rounded-2xl bg-[#f1f1f1] p-6"
      data-node-id={item.cardNodeId}
    >
      <h3 className="m-0 w-full min-w-0 p-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="relative flex min-w-0 w-full shrink-0 cursor-pointer items-start justify-between gap-3 rounded-lg border-0 bg-transparent p-0 text-left outline-none touch-manipulation focus-visible:ring-2 focus-visible:ring-[#f30]/50 focus-visible:ring-offset-2 [-webkit-tap-highlight-color:transparent]"
          data-node-id={item.headerNodeId}
          onClick={onToggle}
        >
          <div
            className="min-w-0 flex-1 flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end leading-[0] not-italic relative pr-2 text-[clamp(1.0625rem,4.2vw,1.5rem)] text-black tracking-[-0.24px] sm:text-[24px]"
            data-node-id={item.titleNodeId}
          >
            <span className="min-w-0 break-words leading-[normal]">
              {item.question}
            </span>
          </div>
          <div
            className="relative shrink-0 size-[32px] transition-transform duration-300 ease-out"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
            data-name="add-01"
            data-node-id={item.iconNodeId}
            aria-hidden
          >
            <img
              alt=""
              className="absolute block max-w-none size-full"
              src={imgAdd01}
            />
          </div>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="min-w-0 w-full shrink-0 pt-4 font-['PP_Neue_Montreal',sans-serif] font-normal text-[16px] leading-6 tracking-[-0.16px] text-[#262626]"
            data-node-id={item.bodyNodeId}
          >
            <p className="break-words leading-6">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = useCallback((id: string) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <section id="faq" className="w-full bg-white scroll-mt-28" data-node-id="65:79267">
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1440px] flex-col gap-12 px-[clamp(1rem,4vw,3.75rem)] py-[clamp(3rem,10vw,10rem)] md:gap-[60px] lg:items-end">
        <Reveal
          className="relative flex w-full shrink-0 flex-col items-start justify-between gap-8 lg:flex-row lg:items-start"
          data-node-id="65:79268"
          duration={0.74}
          y={16}
        >
          <div
            className="bg-[#fff7f5] content-stretch flex min-w-0 max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-0 px-2.5 py-[7px] text-center sm:flex-nowrap sm:gap-[4px] sm:px-[12px] sm:text-left"
            data-node-id="65:79269"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Union"
              data-node-id="65:79270"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                src={imgUnion}
              />
            </div>
            <p
              className="min-w-0 max-w-full font-['PP_Neue_Montreal',sans-serif] font-medium leading-snug not-italic relative text-[15px] text-black tracking-[-0.18px] sm:shrink-0 sm:text-[18px] sm:leading-[24px] sm:whitespace-nowrap"
              data-node-id="65:79272"
            >
              Frequently Asked Questions
            </p>
          </div>
          <div
            className="relative flex w-full min-w-0 max-w-[893px] shrink-0 flex-col items-start lg:flex-1"
            data-node-id="65:79273"
          >
            <div
              className="relative w-full shrink-0 font-['PP_Neue_Montreal',sans-serif] font-medium text-[0px] not-italic text-black"
              data-node-id="65:79274"
            >
              <ScrollPaintHeadline
                theme="light"
                uniform={scrollPaintLightUniform}
                className="text-[clamp(1.5rem,2.2vw+1rem,2.5rem)] leading-[1] tracking-[-0.01em]"
                segments={[
                  {
                    variant: "primary",
                    text: "Find answers to common queries about EduBoost courses, learning paths, ",
                  },
                  {
                    variant: "muted",
                    text: "enrollment, certifications, and how our platform works.",
                  },
                ]}
              />
            </div>
          </div>
        </Reveal>

        <Reveal
          className="relative flex w-full min-w-0 max-w-[893px] shrink-0 flex-col items-start gap-4 lg:ml-auto"
          data-node-id="65:79275"
          delay={0.06}
          duration={0.76}
          y={18}
        >
          {FAQ_ITEMS.map((item) => (
            <FaqAccordionItem
              key={item.id}
              isOpen={Boolean(open[item.id])}
              item={item}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
