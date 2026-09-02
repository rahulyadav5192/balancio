"use client";

import { menuTabs, type MenuCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

type MenuTabsProps = {
  active: MenuCategory;
  onChange: (id: MenuCategory) => void;
};

export function MenuTabs({ active, onChange }: MenuTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Menu categories"
      className="flex gap-8 overflow-x-auto pb-2"
    >
      {menuTabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative shrink-0 cursor-pointer pb-3 font-sans text-[13px] font-semibold tracking-[0.14em] uppercase transition-colors duration-200",
              isActive ? "text-ivory" : "text-muted hover:text-ivory",
            )}
          >
            {tab.label}
            {isActive ? (
              <span className="absolute right-0 bottom-0 left-0 h-px bg-ivory">
                <span className="absolute top-[-5px] left-1/2 h-[7px] w-[7px] -translate-x-1/2 rotate-45 bg-gold" />
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
