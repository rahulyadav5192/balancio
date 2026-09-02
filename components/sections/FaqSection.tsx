import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { faqItems } from "@/lib/site";

export function FaqSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-site">
        <Reveal>
          <SectionEyebrow>Before You Arrive</SectionEyebrow>
          <h2 className="max-w-[520px] font-display text-[42px] text-ivory md:text-[56px]">
            A Few Things
            <br />
            Worth Knowing.
          </h2>
        </Reveal>

        <dl className="mt-14 grid gap-8 md:grid-cols-2">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05}>
              <div className="border border-white/10 bg-panel p-8">
                <dt className="font-display text-[26px] leading-snug text-ivory">
                  {item.question}
                </dt>
                <dd className="mt-4 text-sm leading-7 text-ivory-muted">
                  {item.answer}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
