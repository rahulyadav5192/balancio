import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { images } from "@/lib/images";
import { navigation, site } from "@/lib/site";

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

const iconBtn =
  "flex h-11 w-11 items-center justify-center rounded-full bg-purple-deep text-ivory transition-colors hover:bg-purple";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden py-24 md:py-32">
      <Image
        src={images.footer}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/84" aria-hidden="true" />

      <div className="container-site relative flex flex-col items-center text-center">
        <Logo variant="footer" />
        <p className="mt-8 max-w-[520px] text-sm leading-7 text-ivory-muted">
          A refined after-dark destination for exceptional cocktails, live
          performances, and unforgettable nights in Connaught Place.
        </p>

        <nav
          aria-label="Footer"
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[12px] font-medium tracking-[0.14em] text-ivory uppercase transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex gap-3">
          <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={iconBtn}>
            <Instagram size={16} strokeWidth={1.6} />
          </a>
          <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={iconBtn}>
            <Facebook size={16} strokeWidth={1.6} />
          </a>
          <a href={site.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className={iconBtn}>
            <Youtube size={16} strokeWidth={1.6} />
          </a>
          <a href={site.social.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className={iconBtn}>
            <TikTokIcon />
          </a>
        </div>

        <div className="mt-16 flex w-full flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-[11px] tracking-[0.12em] text-muted uppercase sm:flex-row">
          <p>© {new Date().getFullYear()} Balenciao. All rights reserved.</p>
          <p>{site.address.display}</p>
        </div>
      </div>
    </footer>
  );
}
