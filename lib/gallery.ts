// lib/gallery.ts
export type GalleryPhoto = {
  src: string;
  alt: string;
};

export function getGalleryPhotos(count = 8): GalleryPhoto[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/galerie/Image_${i + 1}.jpg`,
    alt: `Photo ${i + 1} — Fête des Plantes`,
  }));
}