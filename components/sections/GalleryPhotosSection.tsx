"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  galleryFilters,
  galleryItems,
  type GalleryFilterId,
  type GalleryItem,
} from "@/lib/data";
import { cn } from "@/lib/utils";

type GalleryPhotosSectionProps = {
  id?: string;
};

function GalleryCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full text-left"
      aria-label={`View ${item.title}`}
    >
      <div className="relative overflow-hidden rounded-md">
        <Image
          src={item.src}
          alt={item.alt}
          width={720}
          height={520}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.2]"
        />

        <div
          className="absolute right-0 bottom-0 z-[1] h-20 w-0 bg-[rgba(12,12,12,0.7)] opacity-0 backdrop-blur-md transition-all duration-500 group-hover:w-full group-hover:opacity-100"
          aria-hidden="true"
        />

        <div className="absolute bottom-4 left-0 z-[2] translate-x-[-100px] opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100">
          <h3 className="flex items-center font-display text-[22px] text-ivory">
            <span className="mr-4 inline-block h-px w-7 bg-gold" aria-hidden="true" />
            {item.title}
          </h3>
          <p className="mt-1 pl-11 text-sm text-ivory-muted">{item.caption}</p>
        </div>
      </div>
    </button>
  );
}

export function GalleryPhotosSection({ id }: GalleryPhotosSectionProps) {
  const [filter, setFilter] = useState<GalleryFilterId>("all");
  const [active, setActive] = useState<number | null>(null);

  const visibleItems = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  const close = useCallback(() => setActive(null), []);

  const prev = useCallback(() => {
    setActive((current) =>
      current === null
        ? current
        : (current + visibleItems.length - 1) % visibleItems.length,
    );
  }, [visibleItems.length]);

  const next = useCallback(() => {
    setActive((current) =>
      current === null ? current : (current + 1) % visibleItems.length,
    );
  }, [visibleItems.length]);

  useEffect(() => {
    setActive(null);
  }, [filter]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute -left-24 bottom-40 h-40 w-40 rounded-full border border-purple/30 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[28%] -right-16 h-28 w-28 rotate-45 border border-gold/25 opacity-50"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="font-script text-[64px] leading-none text-gold md:text-[80px]">
              Photos
            </h2>
            <h3 className="mt-2 font-display text-[40px] text-ivory md:text-[52px]">
              Our Gallery
            </h3>
            <span
              className="mx-auto mt-6 block h-px w-16 bg-gold"
              aria-hidden="true"
            />
            <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-7 text-ivory-muted">
              Discover the rhythm of the room, one frame at a time. Browse
              cocktails, dining, and live nights from Balenciao.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14 flex justify-center">
            <ul
              className="flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] p-2 sm:gap-4 md:gap-6"
              role="tablist"
              aria-label="Gallery categories"
            >
              {galleryFilters.map((tab) => {
                const isActive = filter === tab.id;
                return (
                  <li key={tab.id} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setFilter(tab.id)}
                      className={cn(
                        "rounded-full px-5 py-2 text-base capitalize transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-r from-purple via-purple-bright to-purple text-ivory"
                          : "text-ivory hover:text-gold",
                      )}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <Reveal key={`${item.src}-${item.title}-${index}`} delay={index * 0.04}>
              <GalleryCard item={item} onOpen={() => setActive(index)} />
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && visibleItems[active] ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[linear-gradient(180deg,rgba(64,3,81,0.5)_30%,rgba(13,23,73,0.5)_80%,rgba(4,25,39,0.65)_100%)] px-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center text-ivory"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 font-display text-4xl text-gold md:left-10"
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="max-w-[92vw] text-center">
            <Image
              src={visibleItems[active].src}
              alt={visibleItems[active].alt}
              width={1400}
              height={900}
              className="max-h-[78vh] w-auto max-w-full rounded-md object-contain"
            />
            <p className="mt-4 font-display text-2xl text-ivory">
              {visibleItems[active].title}
            </p>
            <p className="mt-1 text-sm text-ivory-muted">
              {visibleItems[active].caption}
            </p>
          </div>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 font-display text-4xl text-gold md:right-10"
            aria-label="Next image"
          >
            ›
          </button>
          <p className="absolute bottom-6 text-xs tracking-[0.16em] text-muted uppercase">
            {active + 1} / {visibleItems.length}
          </p>
        </div>
      ) : null}
    </section>
  );
}
