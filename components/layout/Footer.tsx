import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { images } from "@/lib/images";
import { navigation, site } from "@/lib/site";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconBtn =
  "flex h-11 w-11 items-center justify-center rounded-full bg-red-deep text-ivory transition-colors hover:bg-syndicate";

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
          A refined after-dark destination for exceptional cocktails, private
          gatherings, and unforgettable nights.
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
          <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={iconBtn}>
            <Facebook size={16} strokeWidth={1.6} />
          </a>
          <a href={site.social.twitter} target="_blank" rel="noreferrer" aria-label="X" className={iconBtn}>
            <XIcon />
          </a>
          <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={iconBtn}>
            <Instagram size={16} strokeWidth={1.6} />
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconBtn}>
            <Linkedin size={16} strokeWidth={1.6} />
          </a>
        </div>

        <div className="mt-16 flex w-full flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-[11px] tracking-[0.12em] text-muted uppercase sm:flex-row">
          <p>© {new Date().getFullYear()} Midnight Syndicate. All rights reserved.</p>
          <p>{site.address.display}</p>
        </div>
      </div>
    </footer>
  );
}
