import Link from "next/link";
import { site } from "@/lib/site";
import { Mail, Facebook, Instagram, ArrowUpRight } from "lucide-react";

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/presentation", label: "Présentation" },
  { href: "/exposants", label: "Exposants" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  // 👉 adapte si tu n’as pas encore ces champs dans site.ts
  const email = (site as any).email ?? "fetedesplantesbarbirey@gmail.com";
  const instagram = (site as any).instagram ?? "https://www.instagram.com/";
  const facebook = site.facebook ?? "https://www.facebook.com/";

  return (
    <footer className="relative">
      {/* fond + séparation plus “marquée” */}
      <div className="bg-sand/60">
        <div className="h-px w-full bg-stone/35" />

        <div className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-10">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            {/* COL 1 */}
            <div className="md:col-span-5">
              <div className="font-serif text-2xl font-semibold text-forest">
                {site.name}
              </div>

              <p className="mt-2 text-sm text-forest2">
                {site.location} — {site.dateLong}
              </p>

              <div className="mt-5 space-y-2 text-sm text-forest2">
                <p className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-xl bg-paper/60 ring-1 ring-stone/25">
                    🕙
                  </span>
                  {site.hours}
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-xl bg-paper/60 ring-1 ring-stone/25">
                    🎟️
                  </span>
                  {site.freeEntry}
                </p>

                <p className="pt-2 text-olive">{site.venue}</p>
              </div>

              {/* mini badge optionnel */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-paper/55 px-4 py-2 text-xs font-semibold text-forest ring-1 ring-stone/25">
                Entrée libre · Ambiance conviviale
              </div>
            </div>

            {/* COL 2 */}
            <div className="md:col-span-3 md:pl-2">
              <div className="text-sm font-semibold text-forest">Navigation</div>
              <ul className="mt-4 space-y-2">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="inline-flex items-center gap-2 text-sm text-forest2 transition hover:text-forest"
                    >
                      {n.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-40" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3 */}
            <div className="md:col-span-4">
              <div className="text-sm font-semibold text-forest">
                Infos & réseaux
              </div>

              <p className="mt-4 text-sm text-forest2">
                Une question ? Écris-nous, on répond dès que possible.
              </p>

              {/* email + réseaux */}
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex items-center justify-between rounded-2xl bg-paper/55 px-4 py-3 text-sm ring-1 ring-stone/25 transition hover:bg-paper/70"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sand ring-1 ring-stone/25">
                      <Mail className="h-5 w-5 text-terracotta2" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold text-forest2">
                        Email
                      </span>
                      <span className="block truncate font-semibold text-forest">
                        {email}
                      </span>
                    </span>
                  </span>

                  <span className="text-xs font-semibold text-forest2 group-hover:text-forest">
                    Écrire
                  </span>
                </a>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-forest px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:bg-forest2"
                  >
                    Nous contacter
                  </Link>

                  <a
                    href={facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-paper/55 ring-1 ring-stone/25 transition hover:bg-paper/70"
                  >
                    <Facebook className="h-5 w-5 text-forest" />
                  </a>

                  <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-paper/55 ring-1 ring-stone/25 transition hover:bg-paper/70"
                  >
                    <Instagram className="h-5 w-5 text-forest" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bottom bar */}
          <div className="mt-10 flex flex-col gap-3 border-t border-stone/30 pt-6 text-sm text-forest2 md:flex-row md:items-center md:justify-between">
            <div>
              © {year} {site.name} — {site.location}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/mentions-legales" className="hover:text-forest">
                Mentions légales
              </Link>
              <Link href="/contact" className="hover:text-forest">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}