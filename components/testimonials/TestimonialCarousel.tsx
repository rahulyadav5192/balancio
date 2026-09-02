"use client";

import { useState } from "react";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(1);

  return (
    <div>
      <div className="hidden gap-6 lg:grid lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <TestimonialCard
            key={item.name}
            item={item}
            featured={i === index}
          />
        ))}
      </div>

      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:hidden">
        {testimonials
          .filter((_, i) => i === index || i === (index + 1) % testimonials.length)
          .map((item, i) => (
            <TestimonialCard
              key={item.name}
              item={item}
              featured={i === 0}
            />
          ))}
      </div>

      <div className="md:hidden">
        <TestimonialCard item={testimonials[index]} featured />
      </div>

      <div className="mt-10 flex justify-center gap-3" aria-label="Testimonials">
        {testimonials.map((item, i) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "h-3 w-3 cursor-pointer rounded-full border",
              i === index
                ? "border-red-soft bg-transparent"
                : "border-white/30 bg-white/20",
            )}
          />
        ))}
      </div>
    </div>
  );
}
