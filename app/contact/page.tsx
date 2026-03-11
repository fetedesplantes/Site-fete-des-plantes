import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { Mail, Facebook, Instagram } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Section className="pt-10 md:pt-16">
                <div className="rounded-3xl bg-paper2 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-10">
                    <h1 className="font-serif text-5xl font-semibold tracking-tight text-forest md:text-6xl">
                        Contact
                    </h1>
                    <div className="mt-2 h-[2px] w-24 rounded-full bg-leaf/70" />
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-forest2">
                        Une question ? Un message pour l’organisation ? Écrivez-nous 🙂
                    </p>
                </div>
            </Section>

            <Section className="pt-6 md:pt-8">
                <div className="grid gap-6 md:grid-cols-12 md:items-start">
                    {/* FORM */}
                    <div className="md:col-span-7">
                        <ContactForm toEmail={site.email} subjectPrefix={site.name} />
                    </div>

                    {/* INFOS */}
                    <div className="md:col-span-5">
                        <div className="rounded-3xl bg-paper2 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-6">
                            <h2 className="font-serif text-3xl font-semibold text-forest">
                                Infos contact
                            </h2>
                            <div className="mt-2 h-[2px] w-20 rounded-full bg-terracotta/80" />

                            <div className="mt-6 space-y-3">
                                {/* Email */}
                                <a
                                    href={`mailto:${site.email}`}
                                    className="group flex items-center justify-between rounded-2xl bg-paper/60 px-5 py-4 ring-1 ring-stone/25 transition hover:bg-paper/80"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sand ring-1 ring-stone/25">
                                            <Mail className="h-5 w-5 text-forest" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-forest2">Email</p>
                                            <p className="font-semibold text-forest break-all">
                                                {site.email}
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                {/* Facebook */}
                                {site.facebook ? (
                                    <a
                                        href={site.facebook}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex items-center justify-between rounded-2xl bg-paper/60 px-5 py-4 ring-1 ring-stone/25 transition hover:bg-paper/80"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sand ring-1 ring-stone/25">
                                                <Facebook className="h-5 w-5 text-forest" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-forest2">Facebook</p>
                                                <p className="font-semibold text-forest">Fête des plantes Barbirey -sur-Ouche 17 mai 2026</p>
                                            </div>
                                        </div>
                                    </a>
                                ) : null}

                                {/* Instagram */}
                                {site.instagram ? (
                                    <a
                                        href={site.instagram}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex items-center justify-between rounded-2xl bg-paper/60 px-5 py-4 ring-1 ring-stone/25 transition hover:bg-paper/80"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sand ring-1 ring-stone/25">
                                                <Instagram className="h-5 w-5 text-forest" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-forest2">Instagram</p>
                                                <p className="font-semibold text-forest">@fete_des_plantes_barbirey</p>
                                            </div>
                                        </div>
                                    </a>
                                ) : null}
                            </div>

                            <div className="mt-8 rounded-2xl bg-sand/55 p-5 ring-1 ring-stone/25">
                                <p className="text-sm text-forest2">
                                    <span className="font-semibold text-forest">Astuce :</span>{" "}
                                    pour une demande exposant, indiquez votre activité + votre ville (et site/Instagram si vous en avez).
                                </p>
                                <div className="mt-4">
                                    <Link
                                        href="/exposants"
                                        className="inline-flex items-center justify-center rounded-2xl bg-terracotta px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:bg-terracotta2"
                                    >
                                        Voir les exposants
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}