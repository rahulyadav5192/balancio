import { site } from "@/lib/site";

const links = [
  { label: "IG", href: site.social.instagram },
  { label: "FB", href: site.social.facebook },
  { label: "YT", href: site.social.youtube },
  { label: "TT", href: site.social.tiktok },
];

export function SocialRail() {
  return (
    <nav
      aria-label="Social media"
      className="pointer-events-auto absolute top-1/2 left-8 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 min-[900px]:flex"
    >
      {links.map((link, index) => (
        <span key={link.label} className="flex flex-col items-center gap-4">
          {index > 0 ? (
            <span aria-hidden="true" className="text-[8px] leading-none text-gold">
              ◆
            </span>
          ) : null}
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="font-sans text-[11px] font-medium tracking-[0.22em] text-ivory transition-colors duration-200 hover:text-gold"
          >
            {link.label}
          </a>
        </span>
      ))}
    </nav>
  );
}
