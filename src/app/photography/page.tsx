"use client";

import Image from "next/image";
import Link from "next/link";
import "./photography.css";

import { photos } from "../../data/photography";

export default function PhotographyPage() {
  return (
    <main className="photo-page">
      {/* HERO */}
      <section className="photo-hero">
        <Image
          src="/Portfolio-Website/images/photography/Annapurna.jpeg"
          alt="Photography Hero"
          fill
          priority
          className="photo-hero-image"
        />

        <div className="photo-hero-overlay" />

        <div className="photo-hero-content">
          <p className="photo-eyebrow">Visual Portfolio</p>

          <h1>Photography</h1>

          <p>
            A few favourite views and moments from my travels.
          </p>
        </div>
      </section>

     {/* INTRO */}
    <section className="photo-intro">
      <p>
        I love to travel, and I’m always trying to capture a little of the
        beauty of the places I get to visit. These photos are some of my
        favourite memories from hiking, enjoying nature and
        exploring somewhere new.
      </p>
    </section>

      {/* GRID */}
      <section className="photo-grid">
        {photos.map((photo) => (
          <Link
            key={photo.slug}
            href={`/photography/${photo.slug}`}
            className="photo-card"
          >
            <div className="photo-image-wrapper">
              <Image
                src={photo.src}
                alt={photo.title}
                width={photo.width}
                height={photo.height}
                className="photo-image"
              />
            </div>

            <div className="photo-caption">
              <div>
                <h2>{photo.title}</h2>

                <p>
                  {photo.location} · {photo.year}
                </p>
              </div>

              <span>{photo.category}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}