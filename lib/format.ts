import { site } from "@/lib/site";

export function formatPrice(amount: number): string {
  return `${site.currency.symbol}${amount.toLocaleString("en-IN")}`;
}
