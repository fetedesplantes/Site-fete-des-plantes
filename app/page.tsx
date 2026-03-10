import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";
import { site } from "@/lib/site";
import CopyAddressButton from "@/components/CopyAddressButton";
import Gallery from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import { partners } from "@/lib/partners";
import { getGalleryPhotos } from "@/lib/gallery";
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

  return (
    <>
      {/* HERO */}
      <Section className="pt-10 md:pt-16">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-sm font-semibold text-forest2 ring-1 ring-stone/30 shadow-soft">
              <span className="h-2 w-2 rounded-full bg-leaf" />
              {site.edition}
            </div>

            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-forest md:text-7xl">
              {site.name}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-forest2">
              Une journée au vert pour découvrir des plantes, rencontrer des
              passionnés et partager des savoir-faire locaux.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Badge icon={<Calendar className="h-4 w-4" />}>{site.dateLong}</Badge>
              <Badge icon={<Clock className="h-4 w-4" />}>{site.hours}</Badge>
              <Badge icon={<Ticket className="h-4 w-4" />}>{site.freeEntry}</Badge>
              <Badge icon={<MapPin className="h-4 w-4" />}>{site.location}</Badge>
            </div>

            <p className="mt-4 text-sm text-olive">{site.venue}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/presentation">Découvrir l’événement</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Infos pratiques & contact
              </ButtonLink>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-full max-w-[420px] md:max-w-[480px]">
              <Image
                src="/images/affiche.jpg"
                alt={`Affiche - ${site.name}`}
                width={800}
                height={1100}
                className="h-auto w-full rounded-2xl shadow-soft ring-1 ring-stone/30"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* PRESENTATION */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-paper/70 ring-1 ring-stone/30 shadow-soft backdrop-blur">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf/10 blur-2xl"
            />

            <div className="grid gap-8 p-6 md:grid-cols-12 md:gap-10 md:p-10">
              <div className="md:col-span-6">
                <Reveal delay={0}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-sand/70 px-3 py-1.5 text-xs font-semibold text-forest2 ring-1 ring-stone/25">
                    <span className="h-2 w-2 rounded-full bg-leaf" />
                    L’esprit de la fête
                  </div>
                </Reveal>

                <Reveal delay={80}>
                  <h2 className="mt-4 font-serif text-3xl font-semibold text-forest md:text-4xl">
                    La Fête des Plantes
                  </h2>
                </Reveal>

                <Reveal delay={120}>
                  <div className="mt-2 h-[3px] w-28 rounded-full bg-leaf/70" />
                </Reveal>

                <Reveal delay={160}>
                  <p className="mt-4 max-w-prose text-base leading-relaxed text-forest2">
                    Un rendez-vous convivial au cœur du village : pépiniéristes,
                    plantes, artisans, idées jardin, librairie, restauration… Une
                    journée pour flâner, échanger et repartir avec de belles
                    trouvailles.
                  </p>
                </Reveal>

                <div className="mt-6 space-y-3 text-sm text-forest2">
                  <Reveal delay={220}>
                    <li className="flex gap-3 list-none">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-leaf/80" />
                      Une sélection de pépiniéristes et producteurs passionnés.
                    </li>
                  </Reveal>

                  <Reveal delay={280}>
                    <li className="flex gap-3 list-none">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-leaf/80" />
                      Des idées jardin, de l’artisanat, et des stands à découvrir.
                    </li>
                  </Reveal>

                  <Reveal delay={340}>
                    <li className="flex gap-3 list-none">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-leaf/80" />
                      Une ambiance simple et chaleureuse, pour tous.
                    </li>
                  </Reveal>
                </div>

                <Reveal delay={400}>
                  <div className="mt-7">
                    <ButtonLink href="/presentation" variant="secondary">
                      En savoir plus
                    </ButtonLink>
                  </div>
                </Reveal>
              </div>

              <div className="md:col-span-6 md:flex md:items-center">
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  <Reveal delay={120}>
                    <InfoPill
                      icon="leaf"
                      label="Esprit"
                      value="Local & passionné"
                      accent="leaf"
                    />
                  </Reveal>

                  <Reveal delay={180}>
                    <InfoPill
                      icon="heart"
                      label="Ambiance"
                      value="Conviviale"
                      accent="terracotta"
                    />
                  </Reveal>

                  <Reveal delay={240}>
                    <InfoPill
                      icon="sprout"
                      label="Pour"
                      value="Jardiniers & curieux"
                      accent="sage"
                    />
                  </Reveal>

                  <Reveal delay={300}>
                    <InfoPill
                      icon="ticket"
                      label="Entrée"
                      value="Libre"
                      accent="terracotta"
                    />
                  </Reveal>
                </div>
              </div>
            </div>

            <Reveal delay={360}>
              <div className="border-t border-stone/25 bg-sand/40 px-6 py-4 text-sm text-forest2 md:px-10">
                <span className="font-semibold text-forest">À découvrir :</span>{" "}
                pépiniéristes, plantes rares, artisanat, librairie et petite
                restauration.
              </div>
            </Reveal>
          </div>
        </Reveal>
      </Section>

      {/* INFOS PRATIQUES */}
      <Section className="pt-0">
        <Reveal>
          <div className="rounded-3xl bg-paper/80 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <Reveal delay={0}>
                  <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                    Infos pratiques
                  </h2>
                </Reveal>

                <Reveal delay={80}>
                  <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
                </Reveal>

                <Reveal delay={140}>
                  <p className="mt-3 max-w-lg text-forest2">
                    Tout ce qu’il faut pour préparer votre visite.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={180}>
                <ButtonLink href="/contact" variant="secondary">
                  Nous contacter
                </ButtonLink>
              </Reveal>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {/* LEFT */}
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
                  <div className="rounded-2xl bg-sand/60 p-5 ring-1 ring-stone/30">
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

              {/* RIGHT */}
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
          </div>
        </Reveal>
      </Section>

      {/* GALERIE */}
      <Section>
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal delay={0}>
                <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                  Galerie
                </h2>
              </Reveal>

              <Reveal delay={80}>
                <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-3 text-forest2">
                  Quelques souvenirs des éditions précédentes.
                </p>
              </Reveal>
            </div>

            <Reveal delay={180}>
              <ButtonLink href="/galerie" variant="secondary">
                Voir toutes les photos
              </ButtonLink>
            </Reveal>
          </div>

          <Gallery photos={photos} className="py-4" />
        </Reveal>
      </Section>

      {/* PARTENAIRES */}
      <Section className="pt-0">
        <Reveal>
          <div className="rounded-3xl bg-paper/70 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                  Partenaires
                </h2>
                <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
                <p className="mt-3 text-forest2">
                  Merci à la mairie, associations et partenaires locaux.
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
                    className="group flex h-24 items-center justify-center rounded-2xl bg-sand px-4 ring-1 ring-stone/30 shadow-soft transition hover:-translate-y-0.5 hover:bg-paper"
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
          </div>
        </Reveal>
      </Section>
    </>
  );
}