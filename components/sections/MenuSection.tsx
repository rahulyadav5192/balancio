"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MenuItem } from "@/components/menu/MenuItem";
import { MenuTabs } from "@/components/menu/MenuTabs";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { menuItems, menuTabs, type MenuCategory } from "@/lib/data";
import { images } from "@/lib/images";

export function MenuSection() {
  const [active, setActive] = useState<MenuCategory>("starter");
  const reduce = useReducedMotion();
  const items = menuItems[active];
  const activeLabel = menuTabs.find((tab) => tab.id === active)?.label ?? "";

  return (
    <section id="menu" className="bg-bg-secondary py-24 md:py-32">
      <div className="container-site">
        <Reveal>
          <SectionEyebrow>Special Fine Dine</SectionEyebrow>
          <h2 className="max-w-[640px] font-display text-[42px] text-ivory md:text-[56px]">
            The Night&apos;s Finest
            <br />
            Served With Intention.
          </h2>
        </Reveal>

        <div className="relative mt-14 overflow-hidden bg-panel">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-[-4%] hidden -translate-y-1/2 rotate-90 font-display text-[120px] tracking-[0.2em] text-purple/25 uppercase lg:block"
          >
            {activeLabel}
          </span>

          <div className="grid items-stretch overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
            <div className="px-6 py-10 md:px-12 md:py-14">
              <MenuTabs active={active} onChange={setActive} />
              <div className="relative mt-10 min-h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-8"
                  >
                    {items.map((item) => (
                      <MenuItem key={item.name} item={item} />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="relative min-h-[420px]">
              <Image
                src={images.menu}
                alt="A signature cocktail in low amber light"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
