import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import "../photography.css";
import { photos } from "../../../data/photography";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const BASE_PATH = "/Portfolio-Website";

export function generateStaticParams() {
  return photos.map((photo) => ({
    slug: photo.slug,
  }));
}

export const dynamicParams = false;

function getImageSrc(src: string) {
  // Prefix local public-file paths; preserve remote and prefixed URLs.
  if (
    src.startsWith("/") &&
    !src.startsWith("//") &&
    !src.startsWith(`${BASE_PATH}/`)
  ) {
    return `${BASE_PATH}${src}`;
  }

  return src;
}

export default async function PhotoPage({ params }: Props) {
  const { slug } = await params;

  const photo = photos.find((p) => p.slug === slug);

  if (!photo) {
    notFound();
  }

  return (
    <main className="single-photo-page">
      <Link href="/photography" className="back-link">
        ← Back to Photography
      </Link>

      <section className="single-photo-container">
        <div className="single-photo-image-wrapper">
          <Image
            src={
              typeof photo.src === "string"
                ? getImageSrc(photo.src)
                : photo.src
            }
            alt={photo.title}
            width={photo.width}
            height={photo.height}
            className="single-photo-image"
            priority
          />
        </div>

        <div className="single-photo-info">
          <div className="single-photo-meta">
            <span>{photo.category}</span>
            <span>
              {photo.location} · {photo.year}
            </span>
          </div>

          <h1>{photo.title}</h1>
          <p>{photo.blurb}</p>
        </div>
      </section>
    </main>
  );
}