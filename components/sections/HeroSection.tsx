"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";
import { images } from "@/content/images";

const slides = [
  { slot: "hero1" as const, caption: "Halaqah Qur'an" },
  { slot: "hero2" as const, caption: "Kehidupan Santri" },
  { slot: "hero3" as const, caption: "Fasilitas Pesantren" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  return (
    <section
      className="relative min-h-[560px] md:min-h-[680px] overflow-hidden bg-primary-dark"
      aria-label="Hero — Selamat datang di Pesantren Ar-Raudhah Paseh"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => {
        const img = images[slide.slot];
        const isActive = i === current;
        return (
          <div
            key={slide.slot}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              isActive ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            aria-hidden={!isActive}
          >
            {/* Placeholder bg */}
            <div className="absolute inset-0 bg-linear-to-br from-[#0D5C3A] to-[#1A4329]" />
            {/* Image overlay when photo exists */}
            {img.src && !img.src.startsWith("[ISI:") ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : null}
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        );
      })}

      {/* Islamic pattern accent */}
      <div className="absolute inset-0 bg-pattern-islamic opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 flex items-center min-h-[560px] md:min-h-[680px]">
        <div className="max-w-2xl py-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Yayasan Pesantren Ar-Raudhah Paseh — Tasikmalaya
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-5">
            {siteConfig.tagline}
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Lembaga pendidikan Islam dan yayasan sosial keagamaan di Kecamatan
            Paseh, Tasikmalaya, Jawa Barat — membimbing santri menuju generasi
            hafidz, berilmu, dan berakhlak mulia.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as="link" href="/ppdb" size="lg" variant="accent">
              Daftar PPDB Sekarang
            </Button>
            <Button as="link" href="/profil/sejarah" size="lg" variant="white">
              Tentang Kami
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10"
        role="tablist"
        aria-label="Slide navigator"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={cn(
              "rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
              i === current
                ? "w-8 h-2.5 bg-accent"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80",
            )}
          />
        ))}
      </div>
    </section>
  );
}
