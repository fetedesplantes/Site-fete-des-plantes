import Section from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";
import fs from "fs";
import path from "path";

function getGalleryPhotos() {
  const dir = path.join(process.cwd(), "public", "images", "galerie");

  // si le dossier n'existe pas encore
  if (!fs.existsSync(dir)) return [];

  const allowed = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
  const files = fs
    .readdirSync(dir)
    .filter((f) => allowed.has(path.extname(f).toLowerCase()))
    // optionnel : ordre “naturel” (Image_2 avant Image_10)
    .sort((a, b) => a.localeCompare(b, "fr", { numeric: true }));

  return files.map((file, i) => ({
    src: `/images/galerie/${file}`,
    alt: `Photo ${i + 1} — Fête des Plantes`,
  }));
}

export default function GaleriePage() {
  const photos = getGalleryPhotos();

  return (
    <>
      <Section className="pt-10 md:pt-16">
        <div className="rounded-3xl bg-paper2 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-10">
          <h1 className="font-serif text-6xl font-semibold tracking-tight text-forest">
            Galerie
          </h1>
          <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
          <p className="mt-4 text-lg text-forest2">
            Quelques souvenirs des éditions précédentes.
          </p>
        </div>
      </Section>

      <Section className="pt-6 md:pt-8">
        {photos.length === 0 ? (
          <div className="rounded-3xl bg-paper/70 p-8 ring-1 ring-stone/30 shadow-soft backdrop-blur">
            <p className="text-forest2">Les photos arrivent bientôt ✨</p>
          </div>
        ) : (
          <GalleryGrid photos={photos} columns="md:grid-cols-4" />
        )}
      </Section>
    </>
  );
}