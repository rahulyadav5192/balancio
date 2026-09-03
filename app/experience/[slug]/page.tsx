import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { experiences } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experiences.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = experiences.find((experience) => experience.slug === slug);
  if (!item) return { title: "Experience" };
  return { title: item.title, description: item.description };
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const item = experiences.find((experience) => experience.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHero title={item.title} eyebrow="Experience" image={item.image} />
      <section className="bg-background py-24">
        <div className="container-site grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="max-w-[520px] text-[15px] leading-7 text-ivory-muted">
              {item.longform}
            </p>
            <div className="mt-10">
              <ReserveButton href="/reservation" />
            </div>
          </div>
          <div className="image-overlay overflow-hidden rounded-t-[200px] border border-gold/60">
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={960}
              className="aspect-[0.82] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
