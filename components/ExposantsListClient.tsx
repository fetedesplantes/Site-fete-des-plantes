"use client";

import Image from "next/image";
import { useMemo, useState, useRef, useEffect } from "react";
import type { Exposant, ExposantCategory } from "@/lib/exposants";
import { Globe, Instagram, MapPin } from "lucide-react";
import { ChevronDown } from "lucide-react";

const CATEGORY_LABEL: Record<ExposantCategory, string> = {
    pepiniere: "Pépiniériste",
    plantes: "Plantes",
    artisanat: "Artisanat",
    librairie: "Librairie",
    restauration: "Restauration",
    association: "Association",
    autre: "Autre",
};

const categories: ExposantCategory[] = [
    "pepiniere",
    "plantes",
    "artisanat",
    "librairie",
    "restauration",
    "association",
    "autre",
];

function CategoryDropdown({
    value,
    onChange,
}: {
    value: string;
    onChange: (v: string) => void;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const options = [
        { value: "all", label: "Toutes les catégories" },
        { value: "pepiniere", label: "Pépiniériste" },
        { value: "plantes", label: "Plantes" },
        { value: "artisanat", label: "Artisanat" },
        { value: "librairie", label: "Librairie" },
        { value: "restauration", label: "Restauration" },
        { value: "association", label: "Association" },
        { value: "autre", label: "Autre" },
    ];

    // fermer si clic extérieur
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (!ref.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const current = options.find((o) => o.value === value);

    return (
        <div ref={ref} className="relative">
            {/* bouton */}
            <button
                onClick={() => setOpen((o) => !o)}
                className="flex items-center gap-2 rounded-2xl border border-stone/30 bg-paper px-4 py-2 text-sm font-medium text-forest shadow-soft transition hover:bg-paper/80"
            >
                {current?.label}
                <ChevronDown
                    className={`h-4 w-4 transition ${open ? "rotate-180" : ""
                        } text-terracotta2`}
                />
            </button>

            {/* menu */}
            {open && (
                <div className="absolute z-20 mt-2 w-56 overflow-hidden rounded-2xl border border-stone/25 bg-paper shadow-xl">
                    {options.map((o) => (
                        <button
                            key={o.value}
                            onClick={() => {
                                onChange(o.value);
                                setOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left text-sm transition
                ${value === o.value
                                    ? "bg-terracotta/20 text-forest font-semibold"
                                    : "text-forest2 hover:bg-sand/60"
                                }`}
                        >
                            {o.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

function ExposantCard({ e }: { e: Exposant }) {
    return (
        <div className="group rounded-3xl bg-paper/70 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur transition hover:-translate-y-0.5">
            <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-sand ring-1 ring-stone/25">
                    {e.image ? (
                        <Image
                            src={e.image}
                            alt={e.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-forest2">
                            Logo
                        </div>
                    )}
                </div>

                <div className="min-w-0">
                    <p className="text-xs font-semibold text-forest2">
                        {CATEGORY_LABEL[e.category] ?? "Exposant"}
                    </p>
                    <h3 className="mt-1 truncate font-serif text-xl font-semibold text-forest">
                        {e.name}
                    </h3>

                    {e.location ? (
                        <div className="mt-2 flex items-center gap-2 text-sm text-forest2">
                            <MapPin className="h-4 w-4 text-terracotta2" />
                            <span className="truncate">{e.location}</span>
                        </div>
                    ) : null}
                </div>
            </div>

            {e.description ? (
                <p className="mt-4 text-sm leading-relaxed text-forest2">{e.description}</p>
            ) : (
                <p className="mt-4 text-sm leading-relaxed text-forest2/70">
                    Description à venir.
                </p>
            )}

            {(e.website || e.instagram) && (
                <div className="mt-5 flex flex-wrap gap-3">
                    {e.website && (
                        <a
                            href={e.website}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl bg-paper/40 px-4 py-2 text-sm font-semibold text-forest ring-1 ring-stone/25 transition hover:bg-paper/55"
                        >
                            <Globe className="h-4 w-4 text-terracotta2" />
                            Site
                        </a>
                    )}
                    {e.instagram && (
                        <a
                            href={e.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl bg-paper/40 px-4 py-2 text-sm font-semibold text-forest ring-1 ring-stone/25 transition hover:bg-paper/55"
                        >
                            <Instagram className="h-4 w-4 text-terracotta2" />
                            Instagram
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export default function ExposantsListClient({ exposants }: { exposants: Exposant[] }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState<ExposantCategory | "all">("all");

    const filtered = useMemo(() => {
        const s = search.trim().toLowerCase();
        return exposants.filter((e) => {
            const matchSearch =
                !s ||
                e.name.toLowerCase().includes(s) ||
                (e.description?.toLowerCase().includes(s) ?? false);

            const matchCategory = category === "all" || e.category === category;
            return matchSearch && matchCategory;
        });
    }, [exposants, search, category]);

    return (
        <div className="mt-8">
            {/* BARRE FILTRE */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-3">
                    <input
                        placeholder="Rechercher un exposant…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full sm:w-72 rounded-2xl border border-stone/30 bg-paper px-4 py-2 text-sm text-forest outline-none ring-0 placeholder:text-forest2/60"
                    />

                    <CategoryDropdown
                        value={category}
                        onChange={(v) => setCategory(v as any)}
                    />
                </div>

                <p className="text-sm text-forest2">
                    {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
                </p>
            </div>

            {/* GRILLE */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((e) => (
                    <ExposantCard key={e.id} e={e} />
                ))}
            </div>
        </div>
    );
}