import Link from "next/link";
import { RevealStaggerItem } from "./motion/Reveal";
import { ebAsset } from "@/app/_lib/eb-asset";
import type { CourseData } from "@/app/_lib/courses";

const imgStar = ebAsset("8b349245-0e4f-44ea-a37e-36356cdd08cb");
const imgNotebook02 = ebAsset("b9ffade8-0b71-46e6-b23c-a2c189cb3cd1");
const imgTime02 = ebAsset("bd41e8d4-530c-4786-bb18-e7063c892779");

export function CourseCard({
  course,
  className = "",
}: {
  course: CourseData;
  className?: string;
}) {
  // Aggregate duration across all lessons or fallback to mock if none
  const totalMinutes = course.lessons.reduce((acc, lesson) => {
    const minsMatch = lesson.duration.match(/(\d+)\s*Min/i);
    return acc + (minsMatch ? parseInt(minsMatch[1], 10) : 0);
  }, 0);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const durationText = hours > 0 ? `${hours} Hours ${mins} Min` : `${mins} Min`;
  const compactDurationText = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;

  return (
    <RevealStaggerItem
      className={`group/card relative flex h-full w-full min-w-0 flex-col rounded-[28px] border border-black/[0.08] bg-white p-3 shadow-[0_12px_32px_rgba(24,24,24,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(24,24,24,0.12)] ${className}`}
      duration={0.6}
    >
      <div className="relative flex h-full w-full min-w-0 flex-col items-start gap-5">
        {/* Thumbnail */}
        <div className="relative flex aspect-[1.42/1] min-h-[190px] w-full shrink-0 flex-col items-start overflow-hidden rounded-[20px] bg-[#e9e9e7] p-3.5 sm:min-h-[210px] sm:p-4">
          <img
            alt={course.cardTitle}
            className="pointer-events-none absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.045]"
            src={course.image}
            width={1200}
            height={840}
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" aria-hidden="true" />
          <div className="relative z-10 inline-flex items-center justify-center rounded-full border border-white/25 bg-black/25 px-3 py-1.5 backdrop-blur-md">
            <p className="m-0 whitespace-nowrap font-['PP_Neue_Montreal',sans-serif] text-[13px] font-medium leading-5 tracking-[0.01em] text-white">
              {course.tag}
            </p>
          </div>
        </div>

        {/* Body Content */}
        <div className="relative flex w-full flex-grow flex-col items-start justify-between gap-6 px-2 pb-2 sm:px-2.5 sm:pb-2.5">
          <div className="flex w-full flex-col items-start gap-5">
            {/* Stars and Price */}
            <div className="flex w-full min-w-0 items-center justify-between gap-4">
              <div className="flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars" role="img">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative size-[18px] shrink-0 sm:size-5">
                    <img alt="" className="absolute block size-full max-w-none" src={imgStar} width={18} height={18} />
                  </div>
                ))}
              </div>
              <p className="m-0 shrink-0 font-['PP_Neue_Montreal',sans-serif] text-[21px] font-bold leading-none tracking-[-0.02em] text-black sm:text-[24px]">
                {course.price === "$0" ? "Free" : course.price}
              </p>
            </div>

            {/* Title and Description */}
            <div className="flex w-full flex-col items-start gap-2">
              <h4 className="m-0 line-clamp-2 w-full text-pretty font-['PP_Neue_Montreal',sans-serif] text-[21px] font-medium leading-[1.12] tracking-[-0.02em] text-black sm:text-[24px]">
                {course.cardTitle}
              </h4>
              <p className="m-0 line-clamp-3 w-full font-['PP_Neue_Montreal',sans-serif] text-[15px] font-normal leading-[1.5] text-[#666] sm:text-[16px]">
                {course.shortDescription}
              </p>
            </div>

            {/* Meta Stats */}
            <div className="grid w-full min-w-0 grid-cols-2 gap-2.5">
              <div className="flex min-w-0 items-center gap-2.5 rounded-[16px] bg-[#f6f6f4] px-3 py-2.5">
                <div className="relative flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-white">
                  <img alt="" className="block size-[18px]" src={imgNotebook02} width={18} height={18} />
                </div>
                <div className="min-w-0 flex flex-col justify-center">
                  <p className="m-0 font-['PP_Neue_Montreal',sans-serif] text-[12px] font-normal leading-tight text-[#858585] sm:text-[13px]">
                    Lessons
                  </p>
                  <p className="m-0 mt-0.5 truncate font-['PP_Neue_Montreal',sans-serif] text-[14px] font-medium leading-snug text-black sm:text-[15px]">
                    {course.lessons.length}+
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-center gap-2.5 rounded-[16px] bg-[#f6f6f4] px-3 py-2.5">
                <div className="relative flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-white">
                  <img alt="" className="block size-[18px]" src={imgTime02} width={18} height={18} />
                </div>
                <div className="min-w-0 flex flex-col justify-center">
                  <p className="m-0 font-['PP_Neue_Montreal',sans-serif] text-[12px] font-normal leading-tight text-[#858585] sm:text-[13px]">
                    Duration
                  </p>
                  <p className="m-0 mt-0.5 truncate font-['PP_Neue_Montreal',sans-serif] text-[14px] font-medium leading-snug text-black sm:text-[15px]">
                    {durationText ? compactDurationText : "Self-paced"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Link */}
          <Link href={`/courses/${course.slug}`} className="flex w-full shrink-0 touch-manipulation items-center justify-center rounded-[15px] border border-black/[0.08] bg-[#f6f6f4] px-3 py-3.5 font-['PP_Neue_Montreal',sans-serif] text-[15px] font-medium leading-6 text-[#262626] outline-none transition-[background-color,border-color,color] duration-200 hover:border-[#f30] hover:bg-[#f30] hover:text-white focus-visible:ring-2 focus-visible:ring-black">
            <span>
              View Course
            </span>
          </Link>
        </div>
      </div>
    </RevealStaggerItem>
  );
}
