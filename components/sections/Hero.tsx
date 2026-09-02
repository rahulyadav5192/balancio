"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ScrollOrnament } from "@/components/ui/ScrollOrnament";
import { SocialRail } from "@/components/ui/SocialRail";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const [heroLineOne, heroLineTwo] = site.tagline.split(". ").map((line) =>
  line.endsWith(".") ? line : `${line}.`,
);

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden bg-black pt-[120px] min-[768px]:min-h-screen">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1 }}
        animate={reduce ? undefined : { scale: 1.03 }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src={images.hero}
          alt="Bartender composing a cocktail in a dimly lit luxury lounge"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.58)_0%,rgba(0,0,0,.38)_35%,rgba(0,0,0,.52)_74%,rgba(0,0,0,.86)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,.45)_100%)]"
        aria-hidden="true"
      />

      <SocialRail />

      <div className="relative z-10 flex min-h-[calc(90vh-120px)] min-[768px]:min-h-[calc(100vh-120px)] items-center justify-center px-6 pb-28 text-center">
        <div className="max-w-[1300px]">
          <motion.h1
            className="font-display text-[44px] leading-[0.92] font-light tracking-[-0.02em] text-ivory uppercase sm:text-[58px] md:text-[84px] lg:text-[104px]"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <span className="block max-md:hidden">{heroLineOne}</span>
            <span className="block max-md:hidden">{heroLineTwo}</span>
            <span className="block md:hidden">
              {heroLineOne.replace(".", "")}
              <br />
              {heroLineTwo.replace(".", "")}
            </span>
          </motion.h1>
          <motion.p
            className="font-script -mt-3 text-[56px] leading-none text-ivory sm:-mt-5 sm:text-[78px] md:text-[96px] lg:text-[110px]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {site.heroAccent}
          </motion.p>
        </div>
      </div>

      <ScrollOrnament />
    </section>
  );
}
