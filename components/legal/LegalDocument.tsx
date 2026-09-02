import type { LegalDocumentContent } from "@/lib/legal-content";

type LegalDocumentProps = {
  document: LegalDocumentContent;
};

export function LegalDocument({ document }: LegalDocumentProps) {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="container-site max-w-3xl">
        <p className="text-[11px] tracking-[0.16em] text-muted uppercase">
          Last updated {document.lastUpdated}
        </p>
        <p className="mt-8 text-[15px] leading-7 text-ivory-muted">
          {document.description}
        </p>

        <div className="mt-14 space-y-12">
          {document.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-[28px] text-ivory md:text-[32px]">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-ivory-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
