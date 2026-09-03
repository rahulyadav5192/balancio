import Image from "next/image";
import type { MenuItemData } from "@/lib/data";
import { formatPrice } from "@/lib/format";

export function MenuItem({ item }: { item: MenuItemData }) {
  return (
    <article className="flex gap-3 sm:gap-4">
      <Image
        src={item.image}
        alt=""
        width={72}
        height={72}
        className="h-[56px] w-[56px] shrink-0 rounded-full object-cover sm:h-[72px] sm:w-[72px]"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-end gap-1">
          <h3 className="shrink font-display text-[18px] leading-none text-ivory sm:text-[22px]">
            {item.name}
          </h3>
          <span className="dotted-leader" aria-hidden="true" />
          <span className="shrink-0 font-sans text-sm font-semibold text-gold">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
      </div>
    </article>
  );
}
