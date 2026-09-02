import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export function GalleryPageHero() {
  return (
    <section className="relative isolate overflow-hidden pt-[120px] pb-16 md:pb-20">
      <Image
        src={images.gallery[1]}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.88),rgba(0,0,0,0.45))]"
        aria-hidden="true"
      />

      <div className="container-site relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-script text-[72px] leading-none text-gold md:text-[96px]">
            gallery
          </h1>
          <h2 className="mt-2 font-display text-[40px] text-ivory md:text-[52px]">
            Our Gallery
          </h2>
        </div>

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-base">
            <li>
              <Link href="/" className="text-ivory transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            <li className="text-ivory" aria-hidden="true">
              /
            </li>
            <li className="text-gold">Gallery</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
