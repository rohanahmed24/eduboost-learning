"use client";

import { FormEvent, useState } from "react";
import { ebAsset } from "@/app/_lib/eb-asset";
import { PillCta } from "./PillCta";

const imgArrowUpRight = ebAsset("fd003dad-abd0-490d-9b6f-f2affd45e218");

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <form className="flex w-full flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setSubmitted(false);
          }}
          placeholder="Your email address"
          required
          className="min-w-0 flex-1 rounded-[100px] border border-white/20 bg-white/10 px-5 py-3 font-['PP_Neue_Montreal',sans-serif] text-[16px] leading-6 text-white outline-none placeholder:text-white/55 focus:border-white/60 focus:ring-2 focus:ring-[#f30]/40"
        />
        <PillCta
          type="submit"
          className="pill-cta-primary relative flex shrink-0 items-center justify-center gap-[4px] rounded-[100px] bg-[#f30] px-[24px] py-[12px]"
          label="Join the list"
          labelClassName="font-['PP_Neue_Montreal',sans-serif] font-medium text-[16px] leading-[24px] not-italic text-white whitespace-nowrap"
          iconSrc={imgArrowUpRight}
          iconSizeClass="size-[24px]"
        />
      </div>
      <p className="min-h-6 text-[14px] leading-5 text-white/65" aria-live="polite">
        {submitted
          ? "You’re on the list — this demo captured your interest locally."
          : "No spam. Just practical learning ideas and new course updates."}
      </p>
    </form>
  );
}
