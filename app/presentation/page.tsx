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

// Petite carte = dégradé terracotta
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
                "rounded-3xl p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur",
                "transition hover:-translate-y-0.5",
                className,
            ].join(" ")}
            style={{
                background:
                    "linear-gradient(135deg, rgba(235,225,210,0.72), rgba(235,225,210,0.72))",
            }}
        >
            {children}
        </div>
    );
}

// Grande carte de section = fond solide (pas de dégradé)
function SectionCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={[
                "rounded-3xl bg-paper2 ring-1 ring-stone/30 shadow-soft backdrop-blur",
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
                        La Fête des Plantes
                    </h1>

                    <p className="mt-4 text-lg leading-relaxed text-forest2">
                        Un rendez-vous convivial au cœur du village pour découvrir des plantes,
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
            <Section>
                <Reveal>
                    <SectionCard className="p-6 md:p-10">
                        <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                            L’esprit de la fête
                        </h2>
                        <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />

                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-forest2">
                            {content.philosophie}
                        </p>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            <Reveal delay={120}>
                                <PillarCard
                                    icon={<Leaf className="h-6 w-6" />}
                                    title="Local & passionné"
                                    desc="Une sélection d’exposants engagés, des échanges, des conseils."
                                />
                            </Reveal>

                            <Reveal delay={200}>
                                <PillarCard
                                    icon={<HeartHandshake className="h-6 w-6" />}
                                    title="Convivial & familial"
                                    desc="Un événement à taille humaine : on flâne, on discute, on partage."
                                />
                            </Reveal>

                            <Reveal delay={280}>
                                <PillarCard
                                    icon={<Sprout className="h-6 w-6" />}
                                    title="Respect du vivant"
                                    desc="Une approche orientée jardin durable et bon sens."
                                />
                            </Reveal>
                        </div>
                    </SectionCard>
                </Reveal>
            </Section>

            {/* HISTOIRE */}
            <Section>
                <Reveal>
                    <div className="text-center">
                        <Reveal delay={0}>
                            <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                                L’histoire de la fête
                            </h2>
                        </Reveal>

                        <Reveal delay={80}>
                            <div className="mx-auto mt-2 h-[2px] w-24 rounded-full bg-terracotta/80" />
                        </Reveal>

                        <Reveal delay={140}>
                            <p className="mx-auto mt-4 max-w-2xl text-forest2 leading-relaxed">
                                Comment elle s’est créée, et comment elle a grandi au fil des éditions.
                            </p>
                        </Reveal>
                    </div>
                </Reveal>

                <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-7">
                        <Reveal delay={180}>
                            <SectionCard className="p-6 md:p-10">
                                <p className="text-forest2 leading-relaxed">{content.histoire}</p>

                                <div className="mt-6 rounded-2xl bg-paper p-5 ring-1 ring-stone/25">
                                    <div className="flex items-start gap-3">
                                        <Users className="mt-0.5 h-5 w-5 text-terracotta" />
                                        <p className="text-sm text-forest2">
                                            Aujourd’hui, la fête rassemble des visiteurs de toute la région autour d’une
                                            sélection d’exposants et d’une ambiance simple et chaleureuse.
                                        </p>
                                    </div>
                                </div>
                            </SectionCard>
                        </Reveal>
                    </div>

                    <div className="md:col-span-5">
                        <Reveal delay={260}>
                            <div className="overflow-hidden rounded-3xl bg-paper/70 ring-1 ring-stone/30 shadow-soft">
                                <div className="relative aspect-[4/5] w-full">
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
            </Section>

            {/* CE QUE VOUS TROUVEREZ */}
            <Section>
                <SectionCard className="p-6 md:p-10">
                    <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
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
                </SectionCard>
            </Section>

            {/* JOURNÉE TYPE */}
            <Section>
                <div className="grid gap-8 md:grid-cols-12 md:items-start">
                    {/* colonne gauche */}
                    <div className="md:col-span-5">
                        <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                            Une journée type
                        </h2>
                        <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
                        <p className="mt-4 text-forest2 leading-relaxed">
                            Pour se projeter facilement et profiter au maximum.
                        </p>
                    </div>

                    {/* colonne droite */}
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
            </Section>

            {/* INFOS ESSENTIELLES */}
            <Section>
                <Reveal>
                    <SectionCard className="p-6 md:p-10">
                        <div className="text-center">
                            <Reveal delay={0}>
                                <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                                    Infos essentielles
                                </h2>
                            </Reveal>

                            <Reveal delay={80}>
                                <div className="mx-auto mt-2 h-[2px] w-24 rounded-full bg-terracotta/80" />
                            </Reveal>

                            <Reveal delay={140}>
                                <p className="mx-auto mt-4 max-w-2xl text-forest2 leading-relaxed">
                                    À retenir pour venir sereinement.
                                </p>
                            </Reveal>
                        </div>

                        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-center">
                            {/* LEFT */}
                            <div className="md:col-span-7">
                                <Reveal delay={180}>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <SmallCard>
                                            <div className="flex items-start gap-3">
                                                <MapPin className="mt-1 h-5 w-5 text-terracotta" />
                                                <div>
                                                    <p className="text-sm font-semibold text-forest2">Lieu</p>
                                                    <p className="mt-1 font-serif text-xl font-semibold text-forest">
                                                        {site.location}
                                                    </p>
                                                    <p className="mt-1 text-sm text-forest2">{site.venue}</p>
                                                </div>
                                            </div>
                                        </SmallCard>

                                        <SmallCard>
                                            <div className="flex items-start gap-3">
                                                <CalendarDays className="mt-1 h-5 w-5 text-terracotta" />
                                                <div>
                                                    <p className="text-sm font-semibold text-forest2">Date</p>
                                                    <p className="mt-1 font-serif text-xl font-semibold text-forest">
                                                        {site.dateLong}
                                                    </p>
                                                </div>
                                            </div>
                                        </SmallCard>

                                        <SmallCard>
                                            <div className="flex items-start gap-3">
                                                <Clock3 className="mt-1 h-5 w-5 text-terracotta" />
                                                <div>
                                                    <p className="text-sm font-semibold text-forest2">Horaires</p>
                                                    <p className="mt-1 font-serif text-xl font-semibold text-forest">
                                                        {site.hours}
                                                    </p>
                                                </div>
                                            </div>
                                        </SmallCard>

                                        <SmallCard>
                                            <div className="flex items-start gap-3">
                                                <TicketCheck className="mt-1 h-5 w-5 text-terracotta" />
                                                <div>
                                                    <p className="text-sm font-semibold text-forest2">Entrée</p>
                                                    <p className="mt-1 font-serif text-xl font-semibold text-forest">
                                                        {site.freeEntry}
                                                    </p>
                                                </div>
                                            </div>
                                        </SmallCard>
                                    </div>
                                </Reveal>

                                <Reveal delay={260}>
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
                                            className="inline-flex items-center gap-2 rounded-2xl bg-sand px-5 py-3 text-sm font-semibold text-forest ring-1 ring-stone/25 transition hover:bg-paper"
                                        >
                                            Itinéraire
                                            <ArrowRight className="h-4 w-4 text-terracotta2" />
                                        </a>
                                    </div>
                                </Reveal>
                            </div>

                            {/* RIGHT */}
                            <div className="md:col-span-5 w-full h-full">
                                <Reveal delay={220}>
                                    <div className="overflow-hidden rounded-3xl bg-paper/70 ring-1 ring-stone/30 shadow-soft">
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
                    </SectionCard>
                </Reveal>
            </Section>
        </>
    );
}