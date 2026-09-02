"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryItems } from "@/lib/data";

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((current) =>
      current === null
        ? current
        : (current + galleryItems.length - 1) % galleryItems.length,
    );
  }, []);
  const next = useCallback(() => {
    setActive((current) =>
      current === null ? current : (current + 1) % galleryItems.length,
    );
  }, []);

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
    <section id="gallery" className="bg-background py-6 md:py-10">
      <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto overflow-y-hidden px-2 md:grid md:grid-cols-5 md:overflow-visible md:px-2">
        {galleryItems.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            className="group relative min-w-[78%] snap-center overflow-hidden border border-white/10 md:min-w-0"
            aria-label={`View gallery image ${index + 1}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={720}
              height={520}
              className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.045] md:h-[340px]"
            />
            <span className="absolute inset-0 bg-black/25 transition-opacity duration-500 group-hover:bg-black/10" />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[11px] tracking-[0.2em] text-ivory uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              View
            </span>
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 px-6"
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
            className="absolute left-4 font-display text-4xl text-ivory md:left-10"
            aria-label="Previous image"
          >
            ‹
          </button>
          <Image
            src={galleryItems[active].src}
            alt={galleryItems[active].alt}
            width={1400}
            height={900}
            className="max-h-[82vh] w-auto max-w-full object-contain"
          />
          <button
            type="button"
            onClick={next}
            className="absolute right-4 font-display text-4xl text-ivory md:right-10"
            aria-label="Next image"
          >
            ›
          </button>
          <p className="absolute bottom-6 text-xs tracking-[0.16em] text-muted uppercase">
            {active + 1} / {galleryItems.length}
          </p>
        </div>
      ) : null}
    </section>
  );
}
