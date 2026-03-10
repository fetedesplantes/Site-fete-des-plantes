//components/ExposantsFilter
"use client";

import { useState } from "react";
import { Exposant, ExposantCategory } from "@/lib/exposants";

const categories: ExposantCategory[] = [
  "pepiniere",
  "plantes",
  "artisanat",
  "librairie",
  "restauration",
  "association",
];

export default function ExposantsFilter({
  exposants,
  children,
}: {
  exposants: Exposant[];
  children: (filtered: Exposant[]) => React.ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ExposantCategory | "all">("all");

  const filtered = exposants.filter((e) => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || e.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <input
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-2xl border border-stone/30 bg-paper px-4 py-2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as any)}
          className="rounded-2xl border border-stone/30 bg-paper px-4 py-2"
        >
          <option value="all">Toutes</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {children(filtered)}
    </>
  );
}