import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";
import { site } from "@/lib/site";
import CopyAddressButton from "@/components/CopyAddressButton";
import Gallery from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import { partners } from "@/lib/partners";
import { getGalleryPhotos } from "@/lib/gallery";
import type { Metadata } from "next";
import {
  Leaf,
  HeartHandshake,
  Sprout,
  Ticket,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Car,
  Accessibility,
  Utensils,
  Copy,
  Navigation,
} from "lucide-react";

/* ---------- UI helpers ---------- */

function Badge({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-paper/80 px-4 py-2 text-sm font-medium text-forest ring-1 ring-stone/30 shadow-soft backdrop-blur">
      <span className="text-forest2">{icon}</span>
      {children}
    </div>
  );
}

function FullWidthBand({
  children,
  tone = "paper",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "paper" | "sand" | "warm" | "sage" | "clear";
  className?: string;
}) {
  const toneClass =
    tone === "paper"
      ? "bg-paper/50"
      : tone === "sand"
        ? "bg-sand/50"
        : tone === "warm"
          ? "bg-terracotta/15"
          : tone === "sage"
            ? "bg-sage/25"
            : "bg-paper/20";

  return (
    <section className={["relative py-16 md:py-24", className].join(" ")}>
      <div className={`absolute inset-0 ${toneClass}`} />

      <div className="relative mx-auto max-w-6xl px-6">
        {children}
      </div>
    </section>
  );
}

type Accent = "leaf" | "sage" | "terracotta";

function InfoPill({
  icon,
  label,
  value,
  accent = "leaf",
}: {
  icon: "leaf" | "heart" | "sprout" | "ticket";
  label: string;
  value: string;
  accent?: Accent;
}) {
  const Icon =
    icon === "leaf"
      ? Leaf
      : icon === "heart"
        ? HeartHandshake
        : icon === "sprout"
          ? Sprout
          : Ticket;

  const accentColor =
    accent === "leaf"
      ? "bg-leaf/70"
      : accent === "sage"
        ? "bg-sage/70"
        : "bg-terracotta/70";

  const accentLine =
    accent === "leaf"
      ? "bg-leaf/60 group-hover:bg-leaf/90"
      : accent === "sage"
        ? "bg-sage/60 group-hover:bg-sage/90"
        : "bg-terracotta/60 group-hover:bg-terracotta";

  const gradient =
    accent === "terracotta"
      ? "linear-gradient(135deg, rgba(216,143,101,0.22), rgba(235,225,210,0.62))"
      : "linear-gradient(135deg, rgba(214,202,179,0.42), rgba(235,225,210,0.56))";

  return (
    <div className="group relative flex min-h-[180px] overflow-hidden rounded-2xl p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur transition hover:-translate-y-0.5">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: gradient }}
      />
      <div
        aria-hidden
        className={`absolute left-0 top-0 h-full w-[5px] ${accentColor} opacity-80`}
      />

      <div className="flex w-full items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-paper/70 ring-1 ring-stone/25">
          <Icon className="h-6 w-6 text-forest" strokeWidth={2.2} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div>
            <p className="text-sm font-semibold text-forest2">{label}</p>
            <p className="mt-1 font-serif text-xl font-semibold leading-tight text-forest">
              {value}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <div
              className={`h-[2px] w-10 rounded-full transition-all duration-300 group-hover:w-16 ${accentLine}`}
            />
            <ArrowRight className="h-4 w-4 text-forest2 opacity-0 transition group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="group flex min-h-[132px] items-center gap-4 rounded-2xl bg-paper/80 p-5 ring-1 ring-stone/30 shadow-soft backdrop-blur transition hover:-translate-y-0.5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sand ring-1 ring-stone/30 text-forest">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-forest2">{title}</p>
        <p className="font-serif text-lg font-semibold leading-tight text-forest">
          {value}
        </p>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Fête des Plantes de Barbirey-sur-Ouche — Dimanche 17 mai 2026",
  description:
    "La Fête des Plantes de Barbirey-sur-Ouche aura lieu le dimanche 17 mai 2026 de 10h à 18h. Pépiniéristes, artisans, plantes, idées jardin, restauration et entrée libre.",
  alternates: {
    canonical: "https://www.fetedesplantesbarbirey.fr",
  },
  openGraph: {
    title: "Fête des Plantes de Barbirey-sur-Ouche — Dimanche 17 mai 2026",
    description:
      "Pépiniéristes, artisans, plantes, idées jardin, restauration et entrée libre à Barbirey-sur-Ouche.",
    url: "https://www.fetedesplantesbarbirey.fr",
    siteName: "Fête des Plantes de Barbirey-sur-Ouche",
    images: [
      {
        url: "/images/affiche.jpg",
        width: 1200,
        height: 630,
        alt: "Affiche de la Fête des Plantes de Barbirey-sur-Ouche",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

/* ---------- Page ---------- */

export default function HomePage() {
  const address = "Les Jardins de Barbirey, 21410 Barbirey-sur-Ouche";
  const mapsEmbed =
    "https://www.google.com/maps?q=Les+Jardins+de+Barbirey,+21410+Barbirey-sur-Ouche&output=embed";
  const mapsDirections =
    "https://www.google.com/maps/search/?api=1&query=Les+Jardins+de+Barbirey,+21410+Barbirey-sur-Ouche";

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      // Optionnel: tu peux afficher un toast plus tard
    } catch {
      // ignore (clipboard peut être bloqué selon navigateur)
    }
  };

  const photos = getGalleryPhotos(8);

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Fête des Plantes de Barbirey-sur-Ouche",
    startDate: "2026-05-17T10:00:00+02:00",
    endDate: "2026-05-17T18:00:00+02:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Les Jardins de Barbirey",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Les Jardins de Barbirey",
        postalCode: "21410",
        addressLocality: "Barbirey-sur-Ouche",
        addressCountry: "FR",
      },
    },
    image: [
      "https://www.fetedesplantesbarbirey.fr/images/affiche.jpg",
    ],
    description:
      "La Fête des Plantes de Barbirey-sur-Ouche aura lieu le dimanche 17 mai 2026 de 10h à 18h. Pépiniéristes, artisans, plantes, idées jardin, restauration et entrée libre.",
    organizer: {
      "@type": "Organization",
      name: "Fête des Plantes de Barbirey-sur-Ouche",
      url: "https://www.fetedesplantesbarbirey.fr",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.fetedesplantesbarbirey.fr",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      {/* HERO */}
      <Section className="pt-10 md:pt-16">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-sm font-semibold text-forest2 ring-1 ring-stone/30 shadow-soft">
              <span className="h-2 w-2 rounded-full bg-leaf" />
              {site.edition}
            </div>

            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-forest md:text-7xl">
              Fête des Plantes de Barbirey-sur-Ouche
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-forest2">
              La Fête des Plantes de Barbirey-sur-Ouche revient le dimanche 17 mai 2026,
              de 10h à 18h, aux Jardins de Barbirey. Une journée dédiée aux plantes,
              aux pépiniéristes, à l’artisanat, aux idées jardin et aux rencontres
              autour du végétal.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Badge icon={<Calendar className="h-4 w-4" />}>{site.dateLong}</Badge>
              <Badge icon={<Clock className="h-4 w-4" />}>{site.hours}</Badge>
              <Badge icon={<Ticket className="h-4 w-4" />}>{site.freeEntry}</Badge>
              <Badge icon={<MapPin className="h-4 w-4" />}>{site.location}</Badge>
            </div>

            <p className="mt-4 text-sm text-olive">{site.venue}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/presentation">
                Découvrir la Fête des Plantes
              </ButtonLink>

              <ButtonLink href="/contact" variant="secondary">
                Consulter les infos pratiques
              </ButtonLink>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-full max-w-[420px] md:max-w-[480px]">
              <Image
                src="/images/affiche.jpg"
                alt="Affiche de la Fête des Plantes de Barbirey-sur-Ouche du dimanche 17 mai 2026"
                width={800}
                height={1100}
                className="h-auto w-full rounded-2xl shadow-soft ring-1 ring-stone/30"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* VIDEO / IMMERSION */}
      <section className="relative py-20 md:py-28">

        {/* fond plein (pas de carte !) */}
        <div className="absolute inset-0 bg-sand/40" />

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="grid gap-12 md:grid-cols-12 md:items-center">

            {/* TEXTE */}
            <div className="md:col-span-5">
              <h2 className="font-serif text-4xl font-semibold text-forest md:text-5xl">
                L’ambiance de la Fête des Plantes
              </h2>

              <div className="mt-3 h-[2px] w-24 bg-leaf/70" />

              <p className="mt-5 text-lg leading-relaxed text-forest2">
                Une journée au rythme des rencontres, des plantes et du partage
                dans un cadre naturel exceptionnel à Barbirey-sur-Ouche.
              </p>

              <div className="mt-8">
                <ButtonLink href="/presentation">
                  Découvrir l’événement
                </ButtonLink>
              </div>
            </div>

            {/* VIDEO */}
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <video
                  src="/videos/feteplantevideo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              {/* CREDIT */}
              <p className="mt-3 text-xs text-olive text-right">
                Vidéo réalisée par{" "}
                <span className="font-medium text-forestSoft">CM Création</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <FullWidthBand tone="sage">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_16px_40px_rgba(0,0,0,0.10)]">
                <Image
                  src="/images/presentation-lieu.jpg"
                  alt="Fête des Plantes à Barbirey-sur-Ouche"
                  width={900}
                  height={620}
                  className="aspect-[16/10] w-full object-cover"
                />

                <div className="absolute bottom-4 left-4 rounded-full bg-paper/85 px-4 py-2 text-sm font-medium text-forest shadow-soft backdrop-blur">
                  Barbirey-sur-Ouche · 17 mai 2026 · Entrée libre
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-sand/60 px-3 py-1.5 text-xs font-semibold text-forest2 ring-1 ring-stone/20">
                <span className="h-2 w-2 rounded-full bg-leaf" />
                L’esprit de la fête
              </div>

              <h2 className="mt-4 font-serif text-3xl font-semibold text-forest md:text-4xl">
                Un rendez-vous au cœur de Barbirey-sur-Ouche
              </h2>

              <div className="mt-2 h-[3px] w-24 rounded-full bg-leaf/70" />

              <p className="mt-5 text-base leading-relaxed text-forest2">
                La Fête des Plantes de Barbirey-sur-Ouche réunit pépiniéristes,
                artisans et passionnés du jardin dans une ambiance locale,
                conviviale et chaleureuse. Une journée pour flâner, échanger
                et repartir avec de belles découvertes.
              </p>

              <div className="mt-7">
                <ButtonLink href="/presentation">Découvrir la fête</ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-stone/20 pt-6 text-sm md:grid-cols-3">
            <div>
              <p className="font-semibold text-forest">Pépiniéristes & plantes</p>
              <p className="mt-1 text-forest2">
                Une sélection de producteurs passionnés et de plantes variées.
              </p>
            </div>

            <div>
              <p className="font-semibold text-forest">Artisanat & idées jardin</p>
              <p className="mt-1 text-forest2">
                Décorations, créations et inspirations pour votre extérieur.
              </p>
            </div>

            <div>
              <p className="font-semibold text-forest">Ambiance conviviale</p>
              <p className="mt-1 text-forest2">
                Une journée simple, locale et chaleureuse ouverte à tous.
              </p>
            </div>
          </div>
        </Reveal>
      </FullWidthBand>

      {/* INFOS PRATIQUES */}
      <FullWidthBand className="pt-0 bg-sand/40">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                Infos pratiques
              </h2>
              <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
              <p className="mt-3 max-w-lg text-forest2">
                Tout ce qu’il faut pour préparer votre visite.
              </p>
            </div>

            <ButtonLink href="/contact" variant="primary">
              Nous contacter
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Reveal delay={120}>
                  <InfoCard
                    icon={<Calendar className="h-5 w-5" />}
                    title="Date"
                    value={site.dateLong}
                  />
                </Reveal>

                <Reveal delay={180}>
                  <InfoCard
                    icon={<Clock className="h-5 w-5" />}
                    title="Horaires"
                    value={site.hours}
                  />
                </Reveal>

                <Reveal delay={240}>
                  <InfoCard
                    icon={<MapPin className="h-5 w-5" />}
                    title="Lieu"
                    value={site.location}
                  />
                </Reveal>

                <Reveal delay={300}>
                  <InfoCard
                    icon={<Utensils className="h-5 w-5" />}
                    title="Restauration"
                    value="Sur place"
                  />
                </Reveal>
              </div>

              <Reveal delay={340}>
                <div className="rounded-2xl bg-sand/45 p-5 ring-1 ring-stone/25">
                  <h3 className="font-serif text-lg font-semibold text-forest">
                    Accès & stationnement
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm text-forest2">
                    <li className="flex gap-2">
                      <Car size={16} className="mt-1 text-terracotta" />
                      Parking gratuit à proximité.
                    </li>
                    <li className="flex gap-2">
                      <Accessibility size={16} className="mt-1 text-terracotta" />
                      Accès adapté aux personnes à mobilité réduite.
                    </li>
                  </ul>

                  <p className="mt-3 text-sm text-olive">{site.venue}</p>
                </div>
              </Reveal>
            </div>

            <div className="space-y-4">
              <Reveal delay={160}>
                <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-stone/30">
                  <iframe
                    title="Carte - Fête des Plantes"
                    src={mapsEmbed}
                    className="h-[360px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={mapsDirections}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-forest px-4 py-2 text-sm font-medium text-paper shadow-soft transition hover:bg-forest2"
                  >
                    <Navigation size={16} />
                    Itinéraire
                  </a>

                  <CopyAddressButton address={address} />

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-terracotta px-4 py-2 text-sm font-semibold text-paper shadow-soft transition hover:bg-terracotta2"
                  >
                    Poser une question
                  </a>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <p className="text-xs text-olive">
                  Adresse : {address}
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </FullWidthBand>

      {/* GALERIE */}
      <FullWidthBand tone="clear">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                Galerie
              </h2>
              <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
              <p className="mt-3 text-forest2">
                Quelques souvenirs des éditions précédentes.
              </p>
            </div>

            <ButtonLink href="/galerie" variant="primary">
              Voir toutes les photos
            </ButtonLink>
          </div>

          <Gallery photos={photos} className="pt-6" />
        </Reveal>
      </FullWidthBand>

      {/* SEO */}
      <FullWidthBand tone="warm" className="pt-0">
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest2/70">
              Barbirey-sur-Ouche · Édition 2026
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-4xl">
              La Fête des Plantes de Barbirey-sur-Ouche
            </h2>

            <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />

            <div className="mt-5 space-y-4 text-base leading-relaxed text-forest2">
              <p>
                La Fête des Plantes de Barbirey-sur-Ouche est un rendez-vous dédié
                aux amoureux du jardin, des plantes et du vivant. Organisée aux
                Jardins de Barbirey, elle réunit pépiniéristes, artisans, exposants
                passionnés et visiteurs dans un cadre naturel et convivial.
              </p>

              <p>
                L’édition 2026 aura lieu le dimanche 17 mai 2026, de 10h à 18h,
                avec entrée libre. Tout au long de la journée, vous pourrez découvrir
                une sélection de plantes, d’idées jardin, de créations artisanales,
                des conseils de professionnels ainsi qu’une petite restauration sur place.
              </p>

              <p>
                Que vous soyez jardinier, amateur de botanique ou simple curieux,
                la Fête des Plantes à Barbirey-sur-Ouche est une belle occasion de
                flâner, d’échanger et de repartir avec de nouvelles inspirations pour
                le jardin.
              </p>
            </div>
          </div>
        </Reveal>
      </FullWidthBand>

      {/* PARTENAIRES */}
      <FullWidthBand tone="sage" className="pt-0">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                Partenaires
              </h2>
              <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
              <p className="mt-3 text-forest2">
                Merci à la mairie, aux associations et aux partenaires locaux.
              </p>
            </div>

            <p className="text-sm font-semibold text-forest2">
              {partners.length} partenaire{partners.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 60}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ouvrir le site de ${partner.name}`}
                  className="group flex h-24 items-center justify-center rounded-2xl bg-paper/55 px-4 ring-1 ring-stone/25 shadow-soft transition hover:-translate-y-0.5 hover:bg-paper/75"
                >
                  <div className="relative h-14 w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </FullWidthBand>
    </>
  );
}