"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryPhoto = {
  src: string;
  alt: string;
};

function nextImageOptimizedUrl(src: string, width = 1920, quality = 75) {
  // Next/Image optimise via /_next/image?url=...&w=...&q=...
  // Ça marche très bien pour les images locales dans /public.
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

export default function GalleryGrid({
  photos,
  columns = "md:grid-cols-4",
  className = "",
  gridClassName = "",
  sizes = "(min-width: 768px) 25vw, 50vw",
}: {
  photos: GalleryPhoto[];
  columns?: string;
  className?: string;
  gridClassName?: string;
  sizes?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const opened = openIndex !== null;

  const current = useMemo(() => {
    if (openIndex === null) return null;
    return photos[openIndex] ?? null;
  }, [openIndex, photos]);

  const close = () => setOpenIndex(null);

  const prev = () => {
    if (openIndex === null) return;
    setOpenIndex((i) => {
      const idx = i ?? 0;
      return idx === 0 ? photos.length - 1 : idx - 1;
    });
  };

  const next = () => {
    if (openIndex === null) return;
    setOpenIndex((i) => {
      const idx = i ?? 0;
      return idx === photos.length - 1 ? 0 : idx + 1;
    });
  };

  // clavier: esc / flèches
  useEffect(() => {
    if (!opened) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, openIndex, photos.length]);

  // bloque scroll quand ouvert
  useEffect(() => {
    if (!opened) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [opened]);

  // ✅ précharge next/prev MAIS avec l’URL optimisée (sinon ça sert à rien)
  useEffect(() => {
    if (openIndex === null || photos.length < 2) return;

    const nextIndex = openIndex === photos.length - 1 ? 0 : openIndex + 1;
    const prevIndex = openIndex === 0 ? photos.length - 1 : openIndex - 1;

    const preload = (src: string) => {
      const img = new window.Image();
      img.decoding = "async";
      img.loading = "eager";
      img.src = nextImageOptimizedUrl(src, 1920, 75);
    };

    preload(photos[nextIndex].src);
    preload(photos[prevIndex].src);
  }, [openIndex, photos]);

  return (
    <>
      {/* GRID */}
      <div className={className}>
        <div
          className={[
            "grid gap-4 sm:grid-cols-2",
            columns,
            gridClassName,
          ].join(" ")}
        >
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand ring-1 ring-stone/30 shadow-soft cursor-pointer"
              aria-label={`Ouvrir ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                sizes={sizes}
              />

              {/* voile hover */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

              {/* vignette */}
              <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-paper/80 px-3 py-1 text-xs font-semibold text-forest opacity-0 ring-1 ring-stone/30 backdrop-blur transition group-hover:opacity-100">
                Voir
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {opened && current && typeof window !== "undefined"
        ? createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/70 cursor-default"
            onMouseDown={close}
            role="dialog"
            aria-modal="true"
          >
            {/* Infos top-left */}
            <div className="pointer-events-none absolute left-4 top-4 z-[101] rounded-2xl bg-black/35 px-4 py-3 text-paper backdrop-blur ring-1 ring-white/15">
              <div className="text-sm font-semibold">{current.alt}</div>
              <div className="text-xs opacity-80">
                {openIndex! + 1} / {photos.length}
              </div>
            </div>

            {/* Close */}
            <button
              type="button"
              onMouseDown={(e) => e.stopPropagation()}
              onClick={close}
              className="absolute right-4 top-4 z-[102] inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black/35 text-paper backdrop-blur ring-1 ring-white/15 transition hover:bg-black/45 cursor-pointer"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev/Next */}
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={prev}
                  className="absolute left-6 top-1/2 z-[102] -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black/35 text-paper backdrop-blur ring-1 ring-white/15 transition hover:bg-black/45 cursor-pointer"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={next}
                  className="absolute right-6 top-1/2 z-[102] -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black/35 text-paper backdrop-blur ring-1 ring-white/15 transition hover:bg-black/45 cursor-pointer"
                  aria-label="Suivant"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="absolute inset-0 flex items-center justify-center p-5 md:p-10">
              <div
                className="relative max-h-[88vh] w-auto max-w-[92vw] cursor-default"
                onMouseDown={(e) => e.stopPropagation()}
              >
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  width={1800}
                  height={1200}
                  className="h-auto max-h-[88vh] w-auto max-w-[92vw] rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
                  sizes="92vw"
                  priority
                />
              </div>
            </div>
          </div>,
          document.body
        )
        : null}
    </>
  );
}