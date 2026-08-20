import Link from "next/link";
import { Reveal } from "./motion/Reveal";
import { ebAsset } from "@/app/_lib/eb-asset";
import { NewsletterForm } from "./NewsletterForm";

const imgLine2 =
  ebAsset("d9653087-5607-42bc-8e41-1fe01feaeca6");

export default function FooterSection() {
  return (
    <footer className="w-full bg-black" data-node-id="65:79313">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-[clamp(1rem,4vw,3.75rem)] py-[clamp(3rem,10vw,4rem)] md:gap-[60px] md:py-16">
      <Reveal
        className="relative flex w-full shrink-0 flex-col gap-12"
        data-node-id="65:79314"
        delay={0.04}
        duration={0.78}
        y={18}
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start justify-between gap-12 xl:flex-row xl:gap-8"
          data-node-id="65:79315"
        >
          <div
            className="grid w-full max-w-[626px] grid-cols-2 gap-x-8 gap-y-10 leading-[0] not-italic text-white sm:grid-cols-3 lg:flex lg:max-w-none lg:flex-1 lg:gap-12 xl:gap-20"
            data-node-id="65:79316"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[27px] items-start min-h-px min-w-px relative"
              data-node-id="65:79317"
            >
              <div
                className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end relative shrink-0 text-[24px] tracking-[-0.24px] w-full"
                data-node-id="65:79318"
              >
                <p className="leading-[normal]">Quick Links</p>
              </div>
              <div
                className="content-stretch flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-[16px] tracking-[-0.16px] w-full"
                data-node-id="65:79319"
              >
                <Link href="/" className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors">
                  <p className="leading-[24px]">Home</p>
                </Link>
                <Link href="/courses" className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors">
                  <p className="leading-[24px]">Courses</p>
                </Link>
                <Link href="/about" className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors">
                  <p className="leading-[24px]">About us</p>
                </Link>
                <Link href="/#testimonials" className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors">
                  <p className="leading-[24px]">Testimonials</p>
                </Link>
                <Link href="/teachers" className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors">
                  <p className="leading-[24px]">Teachers</p>
                </Link>
                <Link href="/#faq" className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors">
                  <p className="leading-[24px]">FAQ</p>
                </Link>
              </div>
            </div>

            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[27px] items-start min-h-px min-w-px relative"
              data-node-id="65:79326"
            >
              <div
                className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end relative shrink-0 text-[24px] tracking-[-0.24px] w-full"
                data-node-id="65:79327"
              >
                <p className="leading-[normal]">Support</p>
              </div>
              <div
                className="content-stretch flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-[16px] tracking-[-0.16px] w-full"
                data-node-id="65:79328"
              >
                <Link href="/courses#courses" className="flex flex-col justify-end min-w-full relative shrink-0 w-[min-content] hover:text-white/70 transition-colors" data-node-id="65:79329">
                  <p className="leading-[24px]">Course catalog</p>
                </Link>
                <Link href="/#pricing" className="flex flex-col justify-end relative shrink-0 whitespace-nowrap hover:text-white/70 transition-colors" data-node-id="65:79330">
                  <p className="leading-[24px]">Pricing</p>
                </Link>
                <Link href="/#faq" className="flex flex-col justify-end min-w-full relative shrink-0 w-[min-content] hover:text-white/70 transition-colors" data-node-id="65:79331">
                  <p className="leading-[24px]">Learning FAQ</p>
                </Link>
                <Link href="/about" className="flex flex-col justify-end min-w-full relative shrink-0 w-[min-content] hover:text-white/70 transition-colors" data-node-id="65:79332">
                  <p className="leading-[24px]">About EduBoost</p>
                </Link>
                <Link href="/teachers" className="flex flex-col justify-end min-w-full relative shrink-0 w-[min-content] hover:text-white/70 transition-colors" data-node-id="65:79334">
                  <p className="leading-[24px]">Meet the teachers</p>
                </Link>
              </div>
            </div>

            <div
              className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0"
              data-node-id="65:79335"
            >
              <div
                className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end relative shrink-0 text-[24px] tracking-[-0.24px] whitespace-nowrap"
                data-node-id="65:79336"
              >
                <p className="leading-[normal]">Connect With Us</p>
              </div>
              <div
                className="content-stretch flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-[16px] tracking-[-0.16px] w-full"
                data-node-id="65:79337"
              >
                <a
                  href="https://github.com/rohanahmed24/eduboost-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors"
                  data-node-id="65:79338"
                >
                  <p className="leading-[24px]">GitHub</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmedrohan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors"
                  data-node-id="65:79339"
                >
                  <p className="leading-[24px]">LinkedIn</p>
                </a>
                <a
                  href="https://eduboost-dev.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors"
                  data-node-id="65:79340"
                >
                  <p className="leading-[24px]">Live demo</p>
                </a>
                <a
                  href="/#courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors"
                  data-node-id="65:79341"
                >
                  <p className="leading-[24px]">Course catalog</p>
                </a>
                <a
                  href="/#testimonials"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors"
                  data-node-id="65:79342"
                >
                  <p className="leading-[24px]">Student stories</p>
                </a>
                <a
                  href="/#faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-end relative shrink-0 w-full hover:text-white/70 transition-colors"
                  data-node-id="65:79343"
                >
                  <p className="leading-[24px]">FAQ</p>
                </a>
              </div>
            </div>
          </div>

          <div
            className="relative flex w-full min-w-0 max-w-[558px] shrink-0 flex-col items-start gap-8 xl:max-w-[min(558px,40%)]"
            data-node-id="65:79344"
          >
            <div
              className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-white w-full"
              data-node-id="65:79345"
            >
              <div
                className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-medium justify-end relative shrink-0 text-[32px] tracking-[-0.32px] w-full"
                data-node-id="65:79346"
              >
                <p className="leading-[40px]">
                  Join our newsletter for updates, tips, and new courses
                  delivered to your inbox.
                </p>
              </div>
              <div
                className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal justify-end relative shrink-0 text-[16px] tracking-[-0.16px] w-full"
                data-node-id="65:79347"
              >
                <p className="leading-[24px]">
                  EduBoost offers expert-led courses, flexible learning paths,
                  and practical skills to help learners grow confidently, advance
                  their careers, and achieve real-world success.
                </p>
              </div>
            </div>

            <NewsletterForm />
          </div>
        </div>

        <div
          className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
          data-node-id="65:79352"
        >
          <div className="h-0 relative shrink-0 w-full" data-node-id="65:79353">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine2} />
            </div>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start justify-between gap-4 not-italic text-white sm:flex-row sm:items-center"
            data-node-id="65:79354"
          >
            <p
              className="font-['PP_Neue_Montreal',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] tracking-[-0.24px]"
              data-node-id="65:79355"
            >
              EduBoost
            </p>
            <div
              className="flex flex-col font-['PP_Neue_Montreal',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[16px] tracking-[-0.16px]"
              data-node-id="65:79356"
            >
              <p className="leading-[24px]">© 2026 EduBoost. Demo project.</p>
            </div>
          </div>
        </div>
      </Reveal>
      </div>
    </footer>
  );
}

