"use client";

import { useMemo, useState } from "react";
import { Mail, Send } from "lucide-react";

export default function ContactForm({
    toEmail,
    subjectPrefix = "Fête des Plantes",
}: {
    toEmail: string;
    subjectPrefix?: string;
}) {
    const [name, setName] = useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [message, setMessage] = useState("");
    const [topic, setTopic] = useState<"visiteur" | "exposant" | "autre">("visiteur");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isFormValid =
        name.trim().length > 0 &&
        fromEmail.trim().length > 0 &&
        message.trim().length > 0;

    const mailtoHref = useMemo(() => {
        const subject = `${subjectPrefix} — Contact (${topic})`;
        const body = [
            `Nom : ${name || "-"}`,
            `Email : ${fromEmail || "-"}`,
            `Sujet : ${topic}`,
            "",
            message || "",
        ].join("\n");

        return `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    }, [toEmail, subjectPrefix, name, fromEmail, message, topic]);

    const disabled = !message.trim();

    return (
        <div className="rounded-3xl bg-paper2 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-10">
            <div className="flex items-start justify-between gap-6">
                <div>
                    <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                        Nous contacter
                    </h2>
                    <div className="mt-2 h-[2px] w-24 rounded-full bg-terracotta" />
                    <p className="mt-3 max-w-prose text-forest2">
                        Laissez-nous un message : votre application mail s’ouvrira avec le texte déjà rempli.
                    </p>
                </div>

                <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-2xl bg-sand ring-1 ring-stone/30">
                    <Mail className="h-6 w-6 text-forest" />
                </div>
            </div>

            <form
                className="mt-8 grid gap-4 md:grid-cols-2"
                onSubmit={async (e) => {
                    e.preventDefault();

                    if (!isFormValid) {
                        setError("Merci de remplir tous les champs obligatoires.");
                        return;
                    }

                    setLoading(true);
                    setSuccess(false);
                    setError(null);

                    try {
                        const res = await fetch("/api/contact", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                name,
                                email: fromEmail,
                                topic,
                                message,
                            }),
                        });

                        const data = await res.json().catch(() => ({}));

                        if (!res.ok) {
                            setError(data?.error ?? "Une erreur est survenue.");
                            return;
                        }

                        setSuccess(true);
                        setMessage("");
                        // option: setName(""); setFromEmail("");
                    } catch {
                        setError("Impossible d’envoyer le message.");
                    } finally {
                        setLoading(false);
                    }
                }}
            >
                <div>
                    <label className="text-sm font-semibold text-forest2">Nom *</label>
                    <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom"
                        className="mt-2 w-full rounded-2xl border border-stone/30 bg-paper px-4 py-3 text-sm text-forest outline-none placeholder:text-forest2/60 focus:ring-2 focus:ring-leaf/40"
                    />
                </div>

                <div>
                    <label className="text-sm font-semibold text-forest2">Email *</label>
                    <input
                        required
                        value={fromEmail}
                        onChange={(e) => setFromEmail(e.target.value)}
                        placeholder="vous@email.com"
                        type="email"
                        className="mt-2 w-full rounded-2xl border border-stone/30 bg-paper px-4 py-3 text-sm text-forest outline-none placeholder:text-forest2/60 focus:ring-2 focus:ring-leaf/40"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-forest2">Sujet</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {[
                            { key: "visiteur", label: "Visiteur" },
                            { key: "exposant", label: "Exposant" },
                            { key: "autre", label: "Autre" },
                        ].map((t) => {
                            const active = topic === (t.key as any);
                            return (
                                <button
                                    key={t.key}
                                    type="button"
                                    onClick={() => setTopic(t.key as any)}
                                    className={[
                                        "cursor-pointer rounded-full px-4 py-2 text-sm font-semibold ring-1 transition",
                                        active
                                            ? "bg-terracotta text-paper ring-paper/30"
                                            : "bg-paper/60 text-forest2 ring-stone/25 hover:bg-paper/80",
                                    ].join(" ")}
                                >
                                    {t.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-forest2">Message *</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Votre message…"
                        rows={6}
                        className="mt-2 w-full resize-none rounded-2xl border border-stone/30 bg-paper px-4 py-3 text-sm text-forest outline-none placeholder:text-forest2/60 focus:ring-2 focus:ring-leaf/40"
                    />
                    <p className="mt-2 text-xs text-olive">
                        * Champ requis. (Envoi via votre application mail pour l’instant.)
                    </p>
                </div>

                <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                    <button
                        type="submit"
                        disabled={loading || !isFormValid}
                        className={[
                            "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold shadow-soft transition",
                            loading || !isFormValid
                                ? "bg-stone/30 text-forest2 cursor-not-allowed"
                                : "bg-forest text-paper hover:bg-forest2 cursor-pointer",
                        ].join(" ")}
                    >
                        {loading ? "Envoi..." : "Envoyer"}
                        <Send className="h-4 w-4" />
                    </button>

                    {success && (
                        <span className="text-sm font-semibold text-forest2">
                            Message envoyé ✅
                        </span>
                    )}
                    {error && (
                        <span className="text-sm font-semibold text-terracotta2">
                            {error}
                        </span>
                    )}
                </div>
            </form>
        </div >
    );
}