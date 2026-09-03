"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ScrollOrnament } from "@/components/ui/ScrollOrnament";
import { SocialRail } from "@/components/ui/SocialRail";
import { images } from "@/lib/images";

const SLIDE_DURATION_MS = 5000;
const cinematicEase = [0.22, 0.61, 0.36, 1] as const;

const slides = [
  {
    src: images.hero,
    objectPosition: "center 30%",
    heading: ["CURATED NIGHTS.", "UNFORGETTABLE MOMENTS."],
    supporting: "An elevated experience after dark.",
    cta: { label: "RESERVE A TABLE →", href: "/reservation" },
  },
  {
    src: images.heroCraft,
    objectPosition: "center center",
    heading: ["CRAFTED AFTER DARK."],
    supporting: "Signature cocktails. Elevated experiences.",
    cta: { label: "EXPLORE THE MENU →", href: "/menu" },
  },
  {
    src: images.heroNight,
    objectPosition: "center center",
    heading: ["WHERE THE NIGHT BEGINS."],
    supporting: "Music. Energy. Unforgettable nights.",
    cta: { label: "EXPERIENCE THE NIGHT →", href: "/gallery" },
  },
] as const;

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: cinematicEase },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.45, ease: cinematicEase },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION_MS);

    return () => window.clearInterval(id);
  }, [reduce]);

  const slide = slides[active];

  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden bg-black pt-[120px] min-[768px]:min-h-screen">
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((item, index) => {
          const isActive = index === active;

          return (
            <motion.div
              key={item.src}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: reduce ? 1 : isActive ? 1.06 : 1,
              }}
              transition={{
                opacity: { duration: 1.25, ease: cinematicEase },
                scale: isActive
                  ? { duration: 6, ease: "linear" }
                  : { duration: 1.25, ease: cinematicEase },
              }}
              style={{ zIndex: isActive ? 1 : 0 }}
            >
              <Image
                src={item.src}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: item.objectPosition }}
              />
            </motion.div>
          );
        })}
      </div>

      <div
        className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(0,0,0,.62)_0%,rgba(0,0,0,.42)_35%,rgba(0,0,0,.55)_74%,rgba(0,0,0,.88)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,.48)_100%)]"
        aria-hidden="true"
      />

      <SocialRail />

      <div className="relative z-10 flex min-h-[calc(90vh-120px)] min-[768px]:min-h-[calc(100vh-120px)] items-center justify-center px-6 pb-28 text-center">
        <div className="w-full max-w-[1300px]">
          <AnimatePresence mode="wait" initial={!reduce}>
            <motion.div
              key={slide.src}
              className="flex flex-col items-center"
              variants={reduce ? undefined : textContainer}
              initial={reduce ? false : "hidden"}
              animate="visible"
              exit={reduce ? undefined : "exit"}
              aria-live="polite"
            >
              <motion.h1
                className="font-display text-[40px] leading-[0.92] font-light tracking-[-0.02em] text-ivory uppercase sm:text-[58px] md:text-[84px] lg:text-[104px]"
                variants={reduce ? undefined : textItem}
              >
                {slide.heading.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                className="mt-5 max-w-xl font-sans text-[15px] leading-relaxed tracking-[0.04em] text-ivory/80 sm:mt-6 sm:text-[16px] md:text-[17px]"
                variants={reduce ? undefined : textItem}
              >
                {slide.supporting}
              </motion.p>

              <motion.div variants={reduce ? undefined : textItem}>
                <Link
                  href={slide.cta.href}
                  className="mt-8 inline-flex items-center gap-2 border-b border-ivory/35 pb-1 font-sans text-[12px] font-semibold tracking-[0.2em] text-ivory uppercase transition-colors duration-300 hover:border-gold hover:text-gold sm:mt-10 sm:text-[13px]"
                >
                  {slide.cta.label}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <ScrollOrnament />
    </section>
  );
}
