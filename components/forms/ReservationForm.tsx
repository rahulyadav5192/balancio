"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<string, string>>;

const seating = ["Bar", "Lounge", "Private Booth", "Chef's Counter"];
const occasions = [
  "Evening drinks",
  "Celebration",
  "Business",
  "Private gathering",
];
const times = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
];

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-ivory-muted uppercase">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs text-purple-bright">{error}</span> : null}
    </label>
  );
}

const inputClass =
  "w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold";

export function ReservationForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(form: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const date = String(form.get("date") ?? "").trim();
    const time = String(form.get("time") ?? "").trim();
    const guests = String(form.get("guests") ?? "").trim();

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (phone.length < 7) next.phone = "Please enter a contact number.";
    if (!date) next.date = "Please choose a date.";
    if (!time) next.time = "Please choose a time.";
    if (!guests) next.guests = "Please select the number of guests.";
    return next;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setState("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="border border-gold/40 bg-panel px-8 py-16 text-center">
        <p className="font-display text-[36px] text-ivory">Request Received</p>
        <p className="mx-auto mt-5 max-w-[420px] text-sm leading-7 text-ivory-muted">
          Reservation request received. Our concierge team will contact you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <input name="name" className={inputClass} autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            name="email"
            type="email"
            className={inputClass}
            autoComplete="email"
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input name="phone" type="tel" className={inputClass} autoComplete="tel" />
        </Field>
        <Field label="Date" error={errors.date}>
          <input name="date" type="date" className={inputClass} />
        </Field>
        <Field label="Time" error={errors.time}>
          <select name="time" className={cn(inputClass, "appearance-none")}>
            <option value="">Select a time</option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Guests" error={errors.guests}>
          <select name="guests" className={cn(inputClass, "appearance-none")}>
            <option value="">Select guests</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Seating Preference">
          <select name="seating" className={cn(inputClass, "appearance-none")}>
            {seating.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Occasion">
          <select name="occasion" className={cn(inputClass, "appearance-none")}>
            {occasions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Special Request">
        <textarea name="request" rows={4} className={inputClass} />
      </Field>
      {state === "error" ? (
        <p className="text-sm text-purple-bright">
          Something went wrong. Please try again or call the concierge desk.
        </p>
      ) : null}
      <p className="text-xs leading-6 text-muted">
        By submitting this request, you agree to our{" "}
        <Link href="/terms" className="text-ivory-muted underline hover:text-gold">
          Terms &amp; Conditions
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-ivory-muted underline hover:text-gold">
          Privacy Policy
        </Link>
        .
      </p>
      <Button type="submit" disabled={state === "submitting"} className="w-full md:w-auto">
        {state === "submitting" ? "Sending request…" : "Submit Request"}
      </Button>
    </form>
  );
}
