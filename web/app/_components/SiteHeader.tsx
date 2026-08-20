"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PageContainer } from "./PageContainer";
import { ebAsset } from "@/app/_lib/eb-asset";
import { Reveal } from "./motion/Reveal";
import { PillCta } from "./PillCta";

const imgMenu01 =
  ebAsset("5f46eb20-8618-47c1-86e9-2e13a55b9049");
const imgArrowDown01 =
  ebAsset("70d7f32a-30fb-4325-98e0-d4b9463e32c3");
const imgArrowUpRightHeader01 =
  ebAsset("5f44e61c-d25d-4a9d-9307-b04ddc986fa5");

const mobileMenuLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Teachers", href: "/teachers" },
];

const teacherMenuLinks = [
  {
    label: "Design Systems",
    name: "Sophia Marie Hart",
    href: "/teachers/sophia-marie-hart",
  },
  {
    label: "Communication",
    name: "Liam Carter",
    href: "/teachers/liam-carter",
  },
  {
    label: "Data Analytics",
    name: "Ethan Brooks",
    href: "/teachers/ethan-brooks",
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTeachersMenuOpen, setIsTeachersMenuOpen] = useState(false);
  const teachersMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isTeachersMenuOpen) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!teachersMenuRef.current?.contains(event.target as Node)) {
        setIsTeachersMenuOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsTeachersMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isTeachersMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/[0.04] bg-white lg:border-black/[0.04] lg:bg-[#f1f1f1]/85 lg:backdrop-blur-md lg:supports-[backdrop-filter]:bg-[#f1f1f1]/70"
      data-node-id="65:78356"
    >
      <PageContainer className="py-4 lg:pt-5 lg:pb-5 xl:pt-6 xl:pb-6">
        <Reveal mode="mount" duration={0.58} y={10} className="w-full">
          <div
            className="flex w-full items-center justify-between lg:hidden"
            data-node-id="65:79358"
          >
            <p
              className="flex h-7 w-[103px] shrink-0 items-center font-['PP_Neue_Montreal',sans-serif] text-[24px] font-bold leading-none tracking-[-0.96px] text-black"
              data-node-id="65:79359"
            >
              EduBoost
            </p>
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg touch-manipulation [-webkit-tap-highlight-color:transparent]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              data-node-id="65:79360"
            >
              <img alt="" className="size-6 max-w-none" src={imgMenu01} />
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={closeMobileMenu}
                  className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                />
                {/* Drawer */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-white shadow-2xl lg:hidden"
                >
                  <div className="flex h-full flex-col p-6">
                    {/* Close button */}
                    <div className="flex items-center justify-between mb-8">
                      <p className="font-['PP_Neue_Montreal',sans-serif] text-[20px] font-bold tracking-[-0.8px] text-black">
                        Menu
                      </p>
                      <button
                        type="button"
                        onClick={closeMobileMenu}
                        className="inline-flex size-10 items-center justify-center rounded-lg touch-manipulation"
                        aria-label="Close menu"
                      >
                        <svg
                          className="size-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-1">
                      {mobileMenuLinks.map((link, index) => (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 + 0.1 }}
                        >
                          <Link
                            href={link.href}
                            onClick={closeMobileMenu}
                            className="flex items-center py-3 font-['PP_Neue_Montreal',sans-serif] text-[18px] font-medium tracking-[-0.18px] text-black transition-colors hover:text-[#f30]"
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-black/10">
                      <PillCta
                        className="pill-cta-ghost rounded-[100px] px-4 py-3 w-full justify-center"
                        label="Browse Courses"
                        href="/courses"
                        labelClassName="font-['PP_Neue_Montreal',sans-serif] text-[16px] font-medium tracking-[-0.16px] text-black"
                      />
                      <PillCta
                        className="pill-cta-primary flex items-center justify-center gap-1 rounded-[100px] bg-[#f30] px-4 py-3"
                        label="Get Started"
                        href="/#pricing"
                        labelClassName="font-['PP_Neue_Montreal',sans-serif] text-[16px] font-medium text-white"
                        iconSrc={imgArrowUpRightHeader01}
                        iconSizeClass="size-5"
                      />
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </Reveal>

        <Reveal
          mode="mount"
          delay={0.04}
          duration={0.58}
          y={10}
          className="hidden w-full min-w-0 grid-cols-1 gap-4 rounded-[12px] bg-white py-4 pl-4 pr-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-3 lg:px-6 lg:py-5 xl:gap-6 xl:px-9 xl:py-6"
          data-node-id="65:78356-inner"
        >
          <p
            className="font-['PP_Neue_Montreal',sans-serif] text-[20px] font-bold text-black tracking-[-0.8px] sm:text-[22px] sm:tracking-[-0.88px] md:text-[24px] md:tracking-[-0.96px]"
            data-node-id="65:78357"
          >
            EduBoost
          </p>

          <nav
            className="flex min-w-0 justify-center md:px-2"
            aria-label="Primary"
          >
            <div
              className="scrollbar-none -mx-1 flex w-max max-w-full min-w-0 items-center gap-8 overflow-visible rounded-[100px] bg-[#f1f1f1] px-3 py-2.5 sm:mx-0 sm:px-4 sm:py-3 xl:gap-10"
              data-node-id="65:78359"
            >
              <Link
                href="/"
                className={`shrink-0 font-['PP_Neue_Montreal',sans-serif] text-[15px] leading-6 text-black transition-colors duration-150 hover:text-black/60 md:text-[16px] ${pathname === "/" ? "font-medium" : "font-normal"}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`shrink-0 font-['PP_Neue_Montreal',sans-serif] text-[15px] leading-6 tracking-[-0.15px] text-black transition-colors duration-150 hover:text-black/60 md:text-[16px] md:tracking-[-0.16px] ${pathname === "/about" ? "font-medium" : "font-normal"}`}
              >
                About us
              </Link>
              <Link
                href="/courses"
                className={`shrink-0 font-['PP_Neue_Montreal',sans-serif] text-[15px] leading-6 tracking-[-0.15px] text-black transition-colors duration-150 hover:text-black/60 md:text-[16px] md:tracking-[-0.16px] ${pathname === "/courses" ? "font-medium" : "font-normal"}`}
              >
                Courses
              </Link>
              <Link
                href="/#pricing"
                className="shrink-0 font-['PP_Neue_Montreal',sans-serif] text-[15px] font-normal leading-6 tracking-[-0.15px] text-black transition-colors duration-150 hover:text-black/60 md:text-[16px] md:tracking-[-0.16px]"
              >
                Pricing
              </Link>
              <div className="relative shrink-0" ref={teachersMenuRef}>
                <button
                  type="button"
                  onClick={() => setIsTeachersMenuOpen((isOpen) => !isOpen)}
                  className={`flex shrink-0 items-center gap-1 font-['PP_Neue_Montreal',sans-serif] text-[15px] leading-6 tracking-[-0.15px] text-black transition-colors duration-150 hover:text-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f30] focus-visible:ring-offset-2 md:text-[16px] md:tracking-[-0.16px] ${pathname.startsWith("/teachers") ? "font-medium" : "font-normal"}`}
                  aria-expanded={isTeachersMenuOpen}
                  aria-haspopup="true"
                  aria-controls="teachers-menu"
                >
                  <span>Teachers</span>
                  <span
                    className={`relative size-[22px] shrink-0 transition-transform duration-150 md:size-[24px] ${isTeachersMenuOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <img
                      alt=""
                      className="absolute block size-full max-w-none"
                      src={imgArrowDown01}
                    />
                  </span>
                </button>

                <AnimatePresence>
                  {isTeachersMenuOpen && (
                    <motion.div
                      id="teachers-menu"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className="absolute left-1/2 top-full z-[60] mt-3 w-[520px] max-w-[calc(100vw-32px)] -translate-x-1/2 rounded-[20px] border border-black/[0.08] bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.14)]"
                    >
                      <div className="mb-3 flex items-start justify-between gap-4 border-b border-black/[0.08] px-2 pb-3">
                        <div>
                          <p className="font-['PP_Neue_Montreal',sans-serif] text-[15px] font-medium leading-5 text-black">
                            Meet our educators
                          </p>
                          <p className="mt-1 font-['PP_Neue_Montreal',sans-serif] text-[13px] leading-5 text-black/55">
                            Explore mentors by their teaching specialty.
                          </p>
                        </div>
                        <Link
                          href="/teachers"
                          onClick={() => setIsTeachersMenuOpen(false)}
                          className="shrink-0 rounded-full px-2 py-1 font-['PP_Neue_Montreal',sans-serif] text-[13px] font-medium leading-5 text-[#f30] transition-colors hover:bg-[#fff1eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f30]"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-3">
                        {teacherMenuLinks.map((teacher) => (
                          <Link
                            key={teacher.href}
                            href={teacher.href}
                            onClick={() => setIsTeachersMenuOpen(false)}
                            className="group rounded-[14px] border border-black/[0.08] p-3 transition-colors hover:border-[#f30]/30 hover:bg-[#fff8f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f30]"
                          >
                            <span className="block font-['PP_Neue_Montreal',sans-serif] text-[12px] font-medium leading-4 text-[#f30]">
                              {teacher.label}
                            </span>
                            <span className="mt-1 block font-['PP_Neue_Montreal',sans-serif] text-[14px] font-medium leading-5 text-black">
                              {teacher.name}
                            </span>
                            <span className="mt-3 block font-['PP_Neue_Montreal',sans-serif] text-[12px] leading-4 text-black/55 transition-colors group-hover:text-black">
                              View profile <span aria-hidden>↗</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </nav>

          <div
            className="flex shrink-0 flex-wrap items-center gap-4"
            data-node-id="65:78368"
          >
            <PillCta
              className="pill-cta-ghost rounded-[100px] px-4 py-2.5 md:px-6 md:py-3"
              label="Browse Courses"
              href="/courses"
              labelClassName="font-['PP_Neue_Montreal',sans-serif] text-[15px] font-normal leading-6 tracking-[-0.15px] text-inherit md:text-[16px] md:tracking-[-0.16px]"
            />
            <PillCta
              className="pill-cta-primary flex items-center gap-1 rounded-[100px] bg-[#f30] px-4 py-2.5 md:gap-1 md:px-6 md:py-3"
              label="Get Started"
              href="/#pricing"
              labelClassName="font-['PP_Neue_Montreal',sans-serif] text-[15px] font-medium leading-6 text-white md:text-[16px]"
              iconSrc={imgArrowUpRightHeader01}
              iconSizeClass="size-[22px] md:size-[24px]"
            />
          </div>
        </Reveal>
      </PageContainer>
    </header>
  );
}
