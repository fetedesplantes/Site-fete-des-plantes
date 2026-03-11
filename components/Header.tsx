"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/presentation", label: "Présentation" },
  { href: "/exposants", label: "Exposants" },
  { href: "/galerie", label: "Galerie" },
];

function NavLink({
  href,
  label,
  active,
  onClick,
  compact = false,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "group relative inline-flex items-center",
        compact ? "px-3 py-3 text-base font-semibold" : "px-2 py-2 text-base font-semibold md:text-lg",
        "transition-colors duration-200",
        active ? "text-leaf" : "text-forest",
        "hover:text-leaf",
      ].join(" ")}
    >
      {label}
      <span
        aria-hidden
        className={[
          "absolute left-0 bottom-1 h-[2px] rounded-full bg-leaf",
          "transition-all duration-300 ease-out",
          active ? "w-full" : "w-0",
          "group-hover:w-full",
        ].join(" ")}
      />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = useMemo(() => {
    return (href: string) => {
      if (!pathname) return false;
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(href + "/");
    };
  }, [pathname]);

  // Ferme le menu mobile quand on change de page
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10">
        {/* TOP BAR */}
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* LEFT: Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-sand ring-1 ring-stone/40 shadow-soft transition-transform duration-300 group-hover:scale-[1.03] md:h-12 md:w-12">
              <Image
                src="/images/logo_fete.png"
                alt="Logo Fête des Plantes"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-base font-semibold text-forest transition-colors duration-200 group-hover:text-forest2 md:text-lg">
                {site.name}
              </div>
              <div className="text-xs font-medium text-forest2 md:text-xs">
                {site.location}
              </div>
            </div>
          </Link>

          {/* CENTER: Desktop nav */}
          <nav className="hidden items-center justify-center gap-10 md:flex">
            {NAV.map((n) => (
              <NavLink key={n.href} href={n.href} label={n.label} active={isActive(n.href)} />
            ))}
          </nav>

          {/* RIGHT: Desktop button + Mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={[
                "hidden md:inline-flex items-center justify-center rounded-2xl px-5 py-2.5",
                "text-sm font-extrabold",
                "bg-forest text-paper shadow-soft",
                "transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest2",
                "focus:outline-none focus:ring-2 focus:ring-leaf/50",
              ].join(" ")}
            >
              Contact
            </Link>

            {/* Mobile: contact compact + burger */}
            <Link
              href="/contact"
              className={[
                "md:hidden inline-flex items-center justify-center rounded-2xl px-4 py-2",
                "text-sm font-extrabold",
                "bg-forest text-paper shadow-soft",
                "transition-all duration-300 hover:bg-forest2",
              ].join(" ")}
            >
              Contact
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className={[
                "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl",
                "bg-paper/60 ring-1 ring-stone/30 shadow-soft",
                "transition hover:bg-paper/80",
              ].join(" ")}
            >
              {mobileOpen ? <X className="h-5 w-5 text-forest" /> : <Menu className="h-5 w-5 text-forest" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (dropdown) */}
        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="pb-4">
            <div className="rounded-3xl bg-paper/70 ring-1 ring-stone/30 shadow-soft backdrop-blur">
              <nav className="flex flex-col py-2">
                {NAV.map((n) => (
                  <NavLink
                    key={n.href}
                    href={n.href}
                    label={n.label}
                    active={isActive(n.href)}
                    compact
                    onClick={() => setMobileOpen(false)}
                  />
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}