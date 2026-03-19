import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";
import { content, site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import {
    Sprout,
    HeartHandshake,
    Leaf,
    BookOpen,
    Palette,
    Utensils,
    MessageCircle,
    Users,
    Clock3,
    ArrowRight,
    CalendarDays,
    MapPin,
    TicketCheck
} from "lucide-react";

/* ---------- styles ---------- */

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
            ? "bg-paper/45"
            : tone === "sand"
                ? "bg-sand/45"
                : tone === "warm"
                    ? "bg-terracotta/12"
                    : tone === "sage"
                        ? "bg-sage/20"
                        : "bg-paper/18";

    return (
        <section className={["relative py-16 md:py-24", className].join(" ")}>
            <div aria-hidden className={["absolute inset-0", toneClass].join(" ")} />
            <div className="relative mx-auto max-w-6xl px-6">
                {children}
            </div>
        </section>
    );
}

function SmallCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={[
                "rounded-3xl bg-paper/65 p-6 ring-1 ring-stone/25 shadow-soft backdrop-blur",
                "transition hover:-translate-y-0.5",
                className,
            ].join(" ")}
        >
            {children}
        </div>
    );
}

function PillarCard({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <SmallCard>
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-paper/70 ring-1 ring-stone/25">
                    <span className="text-forest">{icon}</span>
                </div>
                <div>
                    <h3 className="font-serif text-xl font-semibold text-forest">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest2">{desc}</p>
                </div>
            </div>
        </SmallCard>
    );
}

function FindCard({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <SmallCard>
            <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-paper/70 ring-1 ring-stone/25">
                    <span className="text-forest">{icon}</span>
                </div>
                <div>
                    <h3 className="font-serif text-lg font-semibold text-forest">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest2">{desc}</p>
                </div>
            </div>
        </SmallCard>
    );
}

function TimelineItem({
    time,
    title,
    desc,
    isLast,
}: {
    time: string;
    title: string;
    desc: string;
    isLast?: boolean;
}) {
    return (
        <div className="relative w-full pl-12">
            {/* point */}
            <div className="absolute left-1 top-7 h-3 w-3 rounded-full bg-leaf ring-4 ring-paper/60" />

            {/* ligne */}
            {!isLast && (
                <div className="absolute left-[10px] top-12 h-[calc(100%-2rem)] w-px bg-stone/30" />
            )}

            <div className="-translate-y-2 w-full">
                <SmallCard className="w-full">
                    <div className="flex items-center justify-between gap-4">
                        <div className="font-serif text-lg font-semibold text-forest">
                            {title}
                        </div>

                        <div className="shrink-0 text-sm font-semibold text-forest2">
                            {time}
                        </div>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-forest2">
                        {desc}
                    </p>
                </SmallCard>
            </div>
        </div>
    );
}

/* ---------- page ---------- */

export default function PresentationPage() {
    return (
        <>
            {/* HERO IMAGE full width */}
            <section className="relative w-full">
                <div className="relative h-[42vh] min-h-[320px] w-full md:h-[52vh]">
                    <Image
                        src="/images/presentation-hero-presentation.jpg"
                        alt="Ambiance de la Fête des Plantes"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    {/* voile pour lisibilité */}
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            </section>

            {/* HERO TEXT (sans tags) */}
            <Section className="pt-6 md:pt-10">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-paper/80 px-4 py-2 text-sm font-semibold text-forest2 ring-1 ring-stone/25 shadow-soft backdrop-blur">
                        <Leaf className="h-4 w-4 text-leaf" />
                        Présentation
                    </div>

                    <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-forest md:text-6xl">
                        La Fête des Plantes de Barbirey-sur-Ouche
                    </h1>

                    <p className="mt-4 text-lg leading-relaxed text-forest2">
                        Un rendez-vous convivial à Barbirey-sur-Ouche pour découvrir des plantes,
                        rencontrer des passionnés et partager des savoir-faire locaux.
                    </p>

                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                        <ButtonLink href="/exposants">Découvrir les exposants</ButtonLink>
                        <ButtonLink href="/contact" variant="secondary">
                            Infos pratiques
                        </ButtonLink>
                    </div>

                    <p className="mt-4 text-sm text-olive">
                        Prochaine édition : <span className="font-semibold text-forest">{site.dateLong}</span>
                    </p>
                </div>
            </Section>

            {/* ESPRIT */}
            <FullWidthBand tone="sage">
                <Reveal>
                    {/* HEADER */}
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full bg-paper/55 px-3 py-1.5 text-xs font-semibold text-forest2 ring-1 ring-stone/20">
                            <span className="h-2 w-2 rounded-full bg-leaf" />
                            L’esprit de la fête
                        </div>

                        <h2 className="mt-4 font-serif text-4xl font-semibold text-forestSoft md:text-5xl">
                            Une fête des plantes locale, vivante et engagée
                        </h2>

                        <div className="mt-3 h-[2px] w-24 mx-auto rounded-full bg-leaf/70" />
                    </div>

                    {/* CONTENT */}
                    <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-center">

                        {/* IMAGE */}
                        <div className="md:col-span-6">
                            <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-stone/25">
                                <Image
                                    src="/images/esprit_pressentation.jpg"
                                    alt="Ambiance de la Fête des Plantes à Barbirey-sur-Ouche"
                                    width={1000}
                                    height={700}
                                    className="aspect-[16/10] w-full object-cover"
                                />

                                <div className="absolute bottom-4 left-4 rounded-full bg-paper/85 px-4 py-2 text-sm font-medium text-forestSoft shadow-soft backdrop-blur">
                                    Barbirey-sur-Ouche · convivialité · nature
                                </div>
                            </div>
                        </div>

                        {/* TEXTE */}
                        <div className="md:col-span-6">
                            <p className="text-lg leading-relaxed text-forest2">
                                {content.philosophie}
                            </p>
                        </div>
                    </div>

                    {/* PILIERS */}
                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        <Reveal delay={120}>
                            <div className="h-full rounded-[1.75rem] bg-paper/55 p-5 ring-1 ring-stone/20 shadow-soft">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-paper/70 ring-1 ring-stone/20">
                                        <Leaf className="h-6 w-6 text-forestSoft" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl font-semibold text-forestSoft">
                                            Local & passionné
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-forest2">
                                            Une sélection d’exposants engagés, des échanges et des conseils.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={200}>
                            <div className="h-full rounded-[1.75rem] bg-paper/55 p-5 ring-1 ring-stone/20 shadow-soft">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-paper/70 ring-1 ring-stone/20">
                                        <HeartHandshake className="h-6 w-6 text-forestSoft" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl font-semibold text-forestSoft">
                                            Convivial & familial
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-forest2">
                                            Un événement à taille humaine : on flâne, on discute, on partage.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={280}>
                            <div className="h-full rounded-[1.75rem] bg-paper/55 p-5 ring-1 ring-stone/20 shadow-soft">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-paper/70 ring-1 ring-stone/20">
                                        <Sprout className="h-6 w-6 text-forestSoft" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl font-semibold text-forestSoft">
                                            Respect du vivant
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-forest2">
                                            Une approche orientée jardin durable, biodiversité et bon sens.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Reveal>
            </FullWidthBand>

            {/* HISTOIRE */}
            <FullWidthBand tone="paper">
                <Reveal>
                    <div className="text-center">
                        <h2 className="font-serif text-3xl font-semibold text-forestSoft md:text-4xl">
                            L’histoire de la fête
                        </h2>
                        <div className="mx-auto mt-2 h-[2px] w-24 rounded-full bg-terracotta/80" />
                        <p className="mx-auto mt-4 max-w-2xl text-forest2 leading-relaxed">
                            Comment elle s’est créée, et comment elle a grandi au fil des éditions.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-7">
                        <Reveal delay={180}>
                            <div className="space-y-6">
                                <p className="text-base leading-relaxed text-forest2">
                                    {content.histoire}
                                </p>

                                <div className="rounded-2xl bg-paper/60 p-5 ring-1 ring-stone/25">
                                    <div className="flex items-start gap-3">
                                        <Users className="mt-0.5 h-5 w-5 text-terracotta" />
                                        <p className="text-sm text-forest2">
                                            Aujourd’hui, la fête rassemble des visiteurs de toute la région autour d’une
                                            sélection d’exposants et d’une ambiance simple et chaleureuse.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="md:col-span-5">
                        <Reveal delay={260}>
                            <div className="overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-stone/25">
                                <div className="relative aspect-[5/4] w-full">
                                    <Image
                                        src="/images/presentation-histoire.jpg"
                                        alt="Ambiance de la Fête des Plantes"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </FullWidthBand>

            {/* CE QUE VOUS TROUVEREZ */}
            <FullWidthBand tone="warm">
                <Reveal>
                    <div>
                        <h2 className="font-serif text-3xl font-semibold text-forestSoft md:text-4xl">
                            Ce que vous trouverez
                        </h2>
                        <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
                        <p className="mt-4 text-forest2">
                            Une sélection pensée pour jardiniers, curieux et amoureux du vivant.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                            <Reveal delay={80}>
                                <FindCard
                                    icon={<Sprout className="h-6 w-6" />}
                                    title="Plantes & pépiniéristes"
                                    desc="Vivaces, arbustes, conseils et belles découvertes."
                                />
                            </Reveal>

                            <Reveal delay={140}>
                                <FindCard
                                    icon={<Palette className="h-6 w-6" />}
                                    title="Artisanat"
                                    desc="Poteries, déco jardin, créations locales."
                                />
                            </Reveal>

                            <Reveal delay={200}>
                                <FindCard
                                    icon={<BookOpen className="h-6 w-6" />}
                                    title="Librairie"
                                    desc="Livres & idées pour jardiner, apprendre, s’inspirer."
                                />
                            </Reveal>

                            <Reveal delay={260}>
                                <FindCard
                                    icon={<Utensils className="h-6 w-6" />}
                                    title="Restauration"
                                    desc="De quoi se régaler sur place pendant la journée."
                                />
                            </Reveal>

                            <Reveal delay={320}>
                                <FindCard
                                    icon={<MessageCircle className="h-6 w-6" />}
                                    title="Rencontres"
                                    desc="Échanges, astuces, passion partagée."
                                />
                            </Reveal>

                            <Reveal delay={380}>
                                <FindCard
                                    icon={<Leaf className="h-6 w-6" />}
                                    title="Idées jardin"
                                    desc="Accessoires, outils, inspirations pour vos espaces verts."
                                />
                            </Reveal>
                        </div>
                    </div>
                </Reveal>
            </FullWidthBand>

            {/* JOURNÉE TYPE */}
            <FullWidthBand tone="clear">
                <div className="grid gap-8 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-5">
                        <h2 className="font-serif text-3xl font-semibold text-forestSoft md:text-4xl">
                            Une journée type
                        </h2>
                        <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
                        <p className="mt-4 text-forest2 leading-relaxed">
                            Pour se projeter facilement et profiter au maximum.
                        </p>
                    </div>

                    <div className="md:col-span-7 w-full min-w-0 space-y-4">
                        <Reveal delay={80}>
                            <TimelineItem
                                time="10h"
                                title="Ouverture"
                                desc="Accueil des visiteurs, premiers tours, échanges avec les exposants."
                            />
                        </Reveal>

                        <Reveal delay={160}>
                            <TimelineItem
                                time="Midi"
                                title="Pause & restauration"
                                desc="Un moment convivial pour se poser, manger et discuter."
                            />
                        </Reveal>

                        <Reveal delay={240}>
                            <TimelineItem
                                time="Après-midi"
                                title="Découvertes"
                                desc="Trouvailles, conseils, idées jardin… et repartir avec ses coups de cœur."
                            />
                        </Reveal>

                        <Reveal delay={320}>
                            <TimelineItem
                                time="18h"
                                title="Clôture"
                                desc="Derniers achats et au revoir aux exposants."
                                isLast
                            />
                        </Reveal>
                    </div>
                </div>
            </FullWidthBand>

            {/* INFOS ESSENTIELLES */}
            <FullWidthBand tone="sand">
                <Reveal>
                    <div className="text-center">
                        <h2 className="font-serif text-3xl font-semibold text-forestSoft md:text-4xl">
                            Infos essentielles
                        </h2>
                        <div className="mx-auto mt-2 h-[2px] w-24 rounded-full bg-terracotta/80" />
                        <p className="mx-auto mt-4 max-w-2xl text-forest2 leading-relaxed">
                            À retenir pour venir sereinement.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-center">
                        <div className="md:col-span-7">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Reveal delay={180}>
                                    <SmallCard>
                                        <div className="flex items-start gap-3">
                                            <MapPin className="mt-1 h-5 w-5 text-terracotta" />
                                            <div>
                                                <p className="text-sm font-semibold text-forest2">Lieu</p>
                                                <p className="mt-1 font-serif text-xl font-semibold text-forestSoft">
                                                    {site.location}
                                                </p>
                                            </div>
                                        </div>
                                    </SmallCard>
                                </Reveal>

                                <Reveal delay={220}>
                                    <SmallCard>
                                        <div className="flex items-start gap-3">
                                            <CalendarDays className="mt-1 h-5 w-5 text-terracotta" />
                                            <div>
                                                <p className="text-sm font-semibold text-forest2">Date</p>
                                                <p className="mt-1 font-serif text-xl font-semibold text-forestSoft">
                                                    {site.dateLong}
                                                </p>
                                            </div>
                                        </div>
                                    </SmallCard>
                                </Reveal>

                                <Reveal delay={260}>
                                    <SmallCard>
                                        <div className="flex items-start gap-3">
                                            <Clock3 className="mt-1 h-5 w-5 text-terracotta" />
                                            <div>
                                                <p className="text-sm font-semibold text-forest2">Horaires</p>
                                                <p className="mt-1 font-serif text-xl font-semibold text-forestSoft">
                                                    {site.hours}
                                                </p>
                                            </div>
                                        </div>
                                    </SmallCard>
                                </Reveal>

                                <Reveal delay={300}>
                                    <SmallCard>
                                        <div className="flex items-start gap-3">
                                            <TicketCheck className="mt-1 h-5 w-5 text-terracotta" />
                                            <div>
                                                <p className="text-sm font-semibold text-forest2">Entrée</p>
                                                <p className="mt-1 font-serif text-xl font-semibold text-forestSoft">
                                                    {site.freeEntry}
                                                </p>
                                            </div>
                                        </div>
                                    </SmallCard>
                                </Reveal>
                            </div>

                            <Reveal delay={340}>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 rounded-2xl bg-forest px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:-translate-y-0.5 hover:bg-forest2"
                                    >
                                        Préparer ma visite
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>

                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Les+Jardins+de+Barbirey,+21410+Barbirey-sur-Ouche"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-2xl bg-paper/60 px-5 py-3 text-sm font-semibold text-forestSoft ring-1 ring-stone/25 transition hover:bg-paper/80"
                                    >
                                        Itinéraire
                                        <ArrowRight className="h-4 w-4 text-terracotta2" />
                                    </a>
                                </div>
                            </Reveal>
                        </div>

                        <div className="md:col-span-5 w-full h-full">
                            <Reveal delay={220}>
                                <div className="overflow-hidden rounded-[2rem] ring-1 ring-stone/25 shadow-soft">
                                    <div className="relative aspect-[4/3] w-full">
                                        <Image
                                            src="/images/presentation-lieu.jpg"
                                            alt="Lieu de la Fête des Plantes"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Reveal>
            </FullWidthBand>
        </>
    );
}