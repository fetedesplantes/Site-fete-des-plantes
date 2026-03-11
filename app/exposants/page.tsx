//app/exposants/page.tsx
import Link from "next/link";
import Section from "@/components/Section";
import { exposants } from "@/lib/exposants";
import ExposantsListClient from "@/components/ExposantsListClient";


export default function ExposantsPage() {
    return (
        <>
            {/* HERO */}
            <Section className="pt-10 md:pt-16">
                <div className="rounded-3xl bg-paper2 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-10">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                            <h1 className="font-serif text-5xl font-semibold tracking-tight text-forest md:text-6xl">
                                Exposants
                            </h1>
                            <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
                            <p className="mt-4 text-lg leading-relaxed text-forest2">
                                Pépiniéristes, artisans, idées jardin, librairie, restauration…
                                Découvrez celles et ceux qui font vivre la Fête des Plantes.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-2xl bg-forest px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:bg-forest2"
                            >
                                Devenir exposant
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-2xl bg-paper/40 px-5 py-3 text-sm font-semibold text-forest ring-1 ring-stone/25 transition hover:bg-paper/55"
                            >
                                Nous contacter
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* LISTE */}
            <Section>
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                            La sélection 2026
                        </h2>
                        <p className="mt-2 text-forest2">
                            {exposants.length > 0
                                ? `${exposants.length} exposant(s) pour l’instant — liste mise à jour au fil des confirmations.`
                                : "La liste sera complétée au fil des confirmations."}
                        </p>
                    </div>
                </div>
                <ExposantsListClient exposants={exposants} />
            </Section>

            {/* INFOS */}
            <Section className="pt-0">
                <div className="rounded-3xl bg-paper2/85 p-6 ring-1 ring-stone/25 md:p-10">
                    <h3 className="font-serif text-2xl font-semibold text-forest">
                        Vous êtes exposant ?
                    </h3>
                    <p className="mt-2 text-forest2">
                        Contactez-nous pour recevoir le dossier d’inscription et les infos logistiques.
                    </p>
                    <div className="mt-5">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-2xl bg-terracotta px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:bg-terracotta2"
                        >
                            Demander le dossier
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}