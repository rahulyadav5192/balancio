import Image from "next/image";
import type { MenuItemData } from "@/lib/data";
import { formatPrice } from "@/lib/format";

export function MenuItem({ item }: { item: MenuItemData }) {
  return (
    <article className="flex gap-4">
      <Image
        src={item.image}
        alt=""
        width={72}
        height={72}
        className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-end">
          <h3 className="font-display text-[22px] leading-none text-ivory">
            {item.name}
          </h3>
          <span className="dotted-leader" aria-hidden="true" />
          <span className="font-sans text-sm font-semibold text-gold">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
      </div>
    </article>
  );
}
