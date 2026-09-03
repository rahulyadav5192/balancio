"use client";

import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Logo } from "@/components/ui/Logo";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          solid
            ? "h-[96px] border-b border-gold/18 bg-black/90 backdrop-blur-md"
            : "h-[120px] bg-transparent",
        )}
      >
        <div className="container-site flex h-full items-center justify-between gap-6">
          <Link href="/" className="relative z-10 shrink-0">
            <Logo compact={solid} priority />
          </Link>

          <nav
            aria-label="Primary"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 min-[900px]:flex"
          >
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative font-sans text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-200",
                    active ? "text-gold" : "text-ivory hover:text-gold",
                  )}
                >
                  {item.label.replace(" Us", "")}
                  {active ? (
                    <span className="absolute -bottom-2 left-1/2 h-px w-4 -translate-x-1/2 bg-gold" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 min-[900px]:flex">
            <Link
              href="/order"
              aria-label="Order"
              className="flex h-11 w-11 items-center justify-center text-ivory transition-colors hover:text-gold"
            >
              <ShoppingBag size={18} strokeWidth={1.6} />
            </Link>
            <ReserveButton href="/reservation" compact className="shrink-0">
              <span className="max-[1179px]:hidden">Reserve A Table</span>
              <span className="min-[1180px]:hidden">Reservation</span>
            </ReserveButton>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center text-ivory min-[900px]:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
