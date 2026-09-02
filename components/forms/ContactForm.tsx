"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const inputClass =
  "w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const next: FieldErrors = {};

    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (phone.length < 7) next.phone = "Please enter a contact number.";
    if (message.length < 8) next.message = "Please share a little more detail.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setState("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-gold/40 bg-panel px-8 py-16 text-center">
        <p className="font-display text-[32px] text-ivory">Message Received</p>
        <p className="mx-auto mt-4 max-w-[400px] text-sm leading-7 text-ivory-muted">
          Thank you. Our concierge team will reply shortly. This is a request —
          not an instant confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6" noValidate>
      <label className="block">
        <span className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-ivory-muted uppercase">
          Name
        </span>
        <input name="name" className={inputClass} autoComplete="name" />
        {errors.name ? <span className="mt-2 block text-xs text-purple-bright">{errors.name}</span> : null}
      </label>
      <label className="block">
        <span className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-ivory-muted uppercase">
          Email
        </span>
        <input name="email" type="email" className={inputClass} autoComplete="email" />
        {errors.email ? <span className="mt-2 block text-xs text-purple-bright">{errors.email}</span> : null}
      </label>
      <label className="block">
        <span className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-ivory-muted uppercase">
          Phone
        </span>
        <input name="phone" type="tel" className={inputClass} autoComplete="tel" />
        {errors.phone ? <span className="mt-2 block text-xs text-purple-bright">{errors.phone}</span> : null}
      </label>
      <label className="block">
        <span className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-ivory-muted uppercase">
          Message
        </span>
        <textarea name="message" rows={5} className={inputClass} />
        {errors.message ? (
          <span className="mt-2 block text-xs text-purple-bright">{errors.message}</span>
        ) : null}
      </label>
      {state === "error" ? (
        <p className="text-sm text-purple-bright">Unable to send. Please try again.</p>
      ) : null}
      <Button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
