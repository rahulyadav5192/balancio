"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navigation, site } from "@/lib/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.classList.add("lock-scroll");
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lock-scroll");
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[90] bg-[#050505]"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex h-full flex-col px-8 py-8">
            <div className="flex items-center justify-between">
              <Logo compact />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 cursor-pointer items-center justify-center text-ivory"
              >
                <X size={22} strokeWidth={1.4} />
              </button>
            </div>

            <h2 id={titleId} className="sr-only">
              Site navigation
            </h2>

            <nav className="mt-16 flex flex-1 flex-col gap-1">
              {navigation.map((item, index) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <motion.div
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + index * 0.08, duration: 0.55 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block border-b border-white/10 py-4 font-display text-[36px] leading-none tracking-tight ${
                        active ? "text-gold" : "text-ivory"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="pb-6">
              <Button href="/reservation" className="w-full" onClick={onClose}>
                Reservation
              </Button>
              <p className="mt-5 text-center text-xs tracking-[0.16em] text-muted uppercase">
                {site.phone}
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
