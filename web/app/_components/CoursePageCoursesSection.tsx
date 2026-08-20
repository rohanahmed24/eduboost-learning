"use client";

import { useMemo, useRef, useState } from "react";
import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { Reveal, RevealStagger } from "./motion/Reveal";
import { ebAsset } from "@/app/_lib/eb-asset";
import { COURSES } from "@/app/_lib/courses";
import { CourseCard } from "./CourseCard";

export type CourseFilterId =
  | "all"
  | "free"
  | "premium"
  | "no-code-ai"
  | "figma"
  | "english";

type CourseMeta = {
  tier: "free" | "premium";
  topics: ("no-code-ai" | "figma" | "english")[];
};

const COURSE_METAS: CourseMeta[] = [
  { tier: "premium", topics: ["no-code-ai"] },
  { tier: "premium", topics: [] },
  { tier: "premium", topics: ["figma"] },
  { tier: "free", topics: ["english"] },
  { tier: "premium", topics: [] },
  { tier: "premium", topics: [] },
];

function courseVisible(meta: CourseMeta, filter: CourseFilterId) {
  if (filter === "all") return true;
  if (filter === "free") return meta.tier === "free";
  if (filter === "premium") return meta.tier === "premium";
  if (filter === "no-code-ai") return meta.topics.includes("no-code-ai");
  if (filter === "figma") return meta.topics.includes("figma");
  if (filter === "english") return meta.topics.includes("english");
  return true;
}

const FILTER_CHIPS: {
  id: CourseFilterId;
  label: string;
}[] = [
  { id: "all", label: "View All Courses" },
  { id: "free", label: "Free Courses" },
  { id: "premium", label: "Premium Courses" },
];

const imgUnion = ebAsset("8b349245-0e4f-44ea-a37e-36356cdd08cb");

export default function CoursePageCoursesSection() {
  const [filter, setFilter] = useState<CourseFilterId>("all");
  const [query, setQuery] = useState("");

  const filterBarRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ dragging: false, startX: 0, scrollLeft: 0, moved: false });

  function onFilterMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const el = filterBarRef.current;
    if (!el) return;
    dragState.current = { dragging: true, startX: e.clientX, scrollLeft: el.scrollLeft, moved: false };
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  }

  function onFilterMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const s = dragState.current;
    if (!s.dragging) return;
    const dx = e.clientX - s.startX;
    if (Math.abs(dx) > 3) s.moved = true;
    if (filterBarRef.current) filterBarRef.current.scrollLeft = s.scrollLeft - dx;
  }

  function onFilterMouseUp() {
    dragState.current.dragging = false;
    if (filterBarRef.current) {
      filterBarRef.current.style.cursor = "";
      filterBarRef.current.style.userSelect = "";
    }
  }

  function resetFilters() {
    setFilter("all");
    setQuery("");
    filterBarRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }

  const visibleCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return COURSES.filter((course, index) => {
      const meta = COURSE_METAS[index];
      const matchesFilter = courseVisible(meta, filter);
      if (!normalizedQuery) return matchesFilter;
      const searchable = `${course.tag} ${course.cardTitle} ${course.shortDescription}`.toLowerCase();
      return matchesFilter && searchable.includes(normalizedQuery);
    });
  }, [query, filter]);
  const anyVisible = visibleCourses.length > 0;
  const visibleCourseKey = visibleCourses.map((course) => course.slug).join("|") || "empty";

  return (
    <section id="courses" className="w-full bg-[#f1f1f1] scroll-mt-28" data-node-id="65:78724">
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1440px] flex-col gap-10 px-[clamp(1rem,4vw,3.75rem)] py-[clamp(3rem,10vw,10rem)] md:gap-[60px]">
        <Reveal
          className="relative flex w-full shrink-0 flex-col items-start justify-between gap-8 lg:flex-row lg:items-start"
          data-node-id="65:78725"
          duration={0.74}
          y={16}
        >
          <div
            className="relative inline-flex shrink-0 items-center justify-center gap-1 rounded-[100px] bg-[#fff7f5] px-3 py-[7px]"
            data-node-id="65:78726"
          >
          <div className="relative shrink-0 size-[20px]" data-name="Union" data-node-id="65:78727">
            <img alt="" className="absolute block max-w-none size-full" src={imgUnion} />
          </div>
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.18px] whitespace-nowrap" data-node-id="65:78729">
            Featured courses
          </p>
          </div>
          <div
            className="relative flex w-full min-w-0 shrink-0 flex-col items-start gap-8 lg:w-[893px] lg:max-w-[893px]"
            data-node-id="65:78730"
          >
            <ScrollPaintHeadline
              className="m-0 font-['PP_Neue_Montreal:Medium',sans-serif] text-[clamp(2rem,4vw+1rem,3.5rem)] leading-[1.1] tracking-[-0.02em]"
              theme="light"
              segments={[
                {
                  variant: "primary",
                  text: "Discover handpicked courses curated by experts to help you learn ",
                },
                {
                  variant: "muted",
                  text: "practical skills, build confidence, and grow your career.",
                },
              ]}
            />
          </div>
        </Reveal>
        
        <Reveal
          className="relative flex w-full min-w-0 shrink-0 flex-col items-start gap-10"
          data-node-id="65:78736"
          delay={0.05}
          duration={0.76}
          y={18}
        >
          <div
            ref={filterBarRef}
            className="relative flex min-w-0 w-full max-w-full flex-nowrap items-center gap-2 overflow-x-auto overflow-y-visible pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:flex-wrap sm:gap-4 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden"
            role="toolbar"
            aria-label="Course filters"
            onMouseDown={onFilterMouseDown}
            onMouseMove={onFilterMouseMove}
            onMouseUp={onFilterMouseUp}
            onMouseLeave={onFilterMouseUp}
          >
            {FILTER_CHIPS.map((chip) => {
              const isActive = filter === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => { if (!dragState.current.moved) setFilter(chip.id); }}
                  aria-pressed={isActive}
                  className={`inline-flex shrink-0 snap-start cursor-pointer items-center justify-center rounded-[100px] border border-solid px-4 py-2.5 touch-manipulation transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#f30]/45 focus-visible:ring-offset-2 sm:px-[24px] sm:py-[12px] [-webkit-tap-highlight-color:transparent] ${
                    isActive
                      ? "border-transparent bg-[#f30]"
                      : "border-[#e2e2e2] bg-white"
                  }`}
                >
                  <span
                    className={`m-0 text-[15px] leading-6 not-italic tracking-[-0.16px] whitespace-nowrap sm:text-[16px] ${
                      isActive
                        ? "font-['PP_Neue_Montreal:Medium',sans-serif] font-medium text-white"
                        : "font-['PP_Neue_Montreal:Book',sans-serif] text-black"
                    }`}
                  >
                    {chip.label}
                  </span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={resetFilters}
              className="ml-auto inline-flex shrink-0 items-center justify-center rounded-[100px] border border-[#e2e2e2] bg-white px-4 py-2.5 sm:px-[24px] sm:py-[12px] transition-colors hover:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f30]/45 focus-visible:ring-offset-2"
              aria-label="Reset course filters"
            >
              <span className="m-0 font-['PP_Neue_Montreal:Book',sans-serif] text-[15px] leading-6 text-black tracking-[-0.16px] sm:text-[16px] mr-2">
                Reset
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black" aria-hidden="true">
                <path d="M4 10a6 6 0 1 0 1.76-4.24" />
                <path d="M4 4v4h4" />
              </svg>
            </button>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex w-full max-w-xl items-center gap-3 rounded-[100px] border border-[#e2e2e2] bg-white px-5 py-3 focus-within:border-[#f30] focus-within:ring-2 focus-within:ring-[#f30]/15">
              <span className="sr-only">Search courses</span>
              <svg aria-hidden="true" className="size-5 shrink-0 text-[#858585]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
              <input
                type="search"
                name="course-search"
                autoComplete="off"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by course, skill, or topic…"
                className="min-w-0 flex-1 bg-transparent font-['PP_Neue_Montreal:Book',sans-serif] text-[16px] leading-6 text-black outline-none placeholder:text-[#858585]"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="shrink-0 rounded-full px-2 py-1 text-[14px] text-[#858585] transition-colors hover:bg-[#f1f1f1] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f30]/45"
                >
                  Clear
                </button>
              ) : null}
            </label>
            <p className="text-[15px] leading-6 text-[#858585]" role="status" aria-live="polite">
              {visibleCourses.length} {visibleCourses.length === 1 ? "course" : "courses"} available
            </p>
          </div>

          {!anyVisible ? (
            <p className="m-0 w-full max-w-2xl font-['PP_Neue_Montreal:Book',sans-serif] text-[16px] leading-6 tracking-[-0.16px] text-[#262626]" role="status">
              No courses match your search. Try a different keyword or reset the filters.
            </p>
          ) : null}

          {/* New Abstraction Grid */}
          <RevealStagger key={visibleCourseKey} className="grid w-full grid-cols-1 gap-6 pt-2 sm:gap-7 sm:pt-4 lg:grid-cols-3 lg:gap-8">
            {visibleCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </RevealStagger>
        </Reveal>
      </div>
    </section>
  );
}
