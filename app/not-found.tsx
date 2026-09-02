import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-background px-6 pt-24 text-center">
      <p className="text-[11px] tracking-[0.18em] text-red-soft uppercase">✦ 404 ✦</p>
      <h1 className="mt-6 font-display text-[56px] text-ivory">The Room Is Closed.</h1>
      <p className="mt-4 max-w-[420px] text-sm leading-7 text-ivory-muted">
        This page is not part of the evening. Return to the lounge or request a table.
      </p>
      <div className="mt-10 flex gap-4">
        <Button href="/">Home</Button>
        <Button href="/reservation" variant="secondary">
          Reservation
        </Button>
      </div>
      <Link href="/contact" className="mt-8 text-xs tracking-[0.14em] text-gold uppercase">
        Contact concierge
      </Link>
    </section>
  );
}
