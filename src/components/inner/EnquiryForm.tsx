"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import clsx from "clsx";
import { contact } from "@/lib/content";

const enquiryTypes = [
  "Drinking water — residential",
  "Drinking water — commercial",
  "Wastewater / effluent treatment",
  "General enquiry",
];

const input =
  "w-full rounded-lg border border-black/15 bg-white px-4 font-sans text-base leading-6 font-light text-black placeholder:text-black/40 transition-colors outline-none hover:border-black/30 focus:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

function Field({ label, id, children, className }: { label: string; id: string; children: ReactNode; className?: string }) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="font-sans text-sm leading-5 font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}

/**
 * Enquiry form. There is no form backend yet, so submitting opens the
 * visitor's email app with the details filled in, addressed to the
 * Dubhe inbox. Swap `onSubmit` for an API route when one is set up.
 */
export function EnquiryForm() {
  const id = useId();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Website enquiry — ${get("type") || "General"}${get("company") ? ` — ${get("company")}` : ""}`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Enquiry type: ${get("type")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" id={`${id}-name`}>
          <input id={`${id}-name`} name="name" required autoComplete="name" placeholder="Your full name" className={clsx(input, "h-14")} />
        </Field>
        <Field label="Company" id={`${id}-company`}>
          <input
            id={`${id}-company`}
            name="company"
            autoComplete="organization"
            placeholder="Organisation or property name"
            className={clsx(input, "h-14")}
          />
        </Field>
        <Field label="Email" id={`${id}-email`}>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="name@company.com"
            className={clsx(input, "h-14")}
          />
        </Field>
        <Field label="Phone" id={`${id}-phone`}>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="+91" className={clsx(input, "h-14")} />
        </Field>
      </div>

      <Field label="Enquiry type" id={`${id}-type`}>
        <div className="relative">
          <select id={`${id}-type`} name="type" required defaultValue="" className={clsx(input, "h-14 appearance-none pr-12 invalid:text-black/40")}>
            <option value="" disabled>
              Select an enquiry type
            </option>
            {enquiryTypes.map((t) => (
              <option key={t} value={t} className="text-black">
                {t}
              </option>
            ))}
          </select>
          <svg aria-hidden width="20" height="20" viewBox="0 0 20 20" fill="none" className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#191818" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Field>

      <Field label="Message" id={`${id}-message`}>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={5}
          placeholder="Tell us about the site, daily water use and what you're trying to solve."
          className={clsx(input, "min-h-40 resize-y py-4")}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-3xl bg-black py-3 pr-3 pl-5 font-sans text-base leading-6 font-bold text-white transition-colors duration-300 hover:bg-ink/85"
        >
          Send enquiry
          <span className="flex rounded-xl bg-white p-1 text-ink transition-transform duration-300 group-hover:translate-x-0.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        <p role="status" className="font-sans text-sm leading-5 text-black/55">
          {sent ? "Your email app should open with the enquiry filled in — just press send." : "We reply within one business day."}
        </p>
      </div>
    </form>
  );
}
