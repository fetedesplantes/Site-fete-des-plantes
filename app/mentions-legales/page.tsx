import Section from "@/components/Section";

export const metadata = {
    title: "Mentions légales | Fête des Plantes",
    description:
        "Mentions légales du site de la Fête des Plantes de Barbirey-sur-Ouche.",
};

export default function MentionsLegalesPage() {
    return (
        <>
            <Section className="pt-10 md:pt-16">
                <div className="rounded-3xl bg-paper/70 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-10">
                    <h1 className="font-serif text-4xl font-semibold text-forest md:text-5xl">
                        Mentions légales
                    </h1>
                    <div className="mt-2 h-[2px] w-24 rounded-full bg-terracotta/80" />
                    <p className="mt-4 max-w-2xl text-forest2">
                        Informations légales relatives au site de la Fête des Plantes de
                        Barbirey-sur-Ouche.
                    </p>
                </div>
            </Section>

            <Section className="pt-0">
                <div className="space-y-6">
                    <div className="rounded-3xl bg-paper/70 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-8">
                        <h2 className="font-serif text-2xl font-semibold text-forest">
                            Éditeur du site
                        </h2>
                        <div className="mt-4 space-y-2 text-forest2">
                            <p>
                                <span className="font-semibold text-forest">Nom / structure :</span>{" "}
                                Mairie de Barbirey-sur-Ouche
                            </p>
                            <p>
                                <span className="font-semibold text-forest">Adresse :</span>{" "}
                                Barbirey-sur-Ouche, 21410
                            </p>
                            <p>
                                <span className="font-semibold text-forest">Email :</span>{" "}
                                fetedesplantesbarbirey@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-paper/70 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-8">
                        <h2 className="font-serif text-2xl font-semibold text-forest">
                            Responsable de la publication
                        </h2>
                        <p className="mt-4 text-forest2">
                            Le responsable de la publication est : Alixe TAVANT.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-paper/70 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-8">
                        <h2 className="font-serif text-2xl font-semibold text-forest">
                            Hébergement
                        </h2>
                        <div className="mt-4 space-y-2 text-forest2">
                            <p>
                                <span className="font-semibold text-forest">Hébergeur :</span>{" "}
                                Vercel Inc.
                            </p>
                            <p>
                                <span className="font-semibold text-forest">Adresse :</span>{" "}
                                340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                            </p>
                            <p>
                                <span className="font-semibold text-forest">Site web :</span>{" "}
                                vercel.com
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-paper/70 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-8">
                        <h2 className="font-serif text-2xl font-semibold text-forest">
                            Conception et réalisation
                        </h2>
                        <p className="mt-4 text-forest2">
                            Site conçu et réalisé par Maxime TAVANT, pour
                            le compte de la mairie de Barbirey Sur Ouche.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-paper/70 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-8">
                        <h2 className="font-serif text-2xl font-semibold text-forest">
                            Propriété intellectuelle
                        </h2>
                        <p className="mt-4 text-forest2 leading-relaxed">
                            L’ensemble des contenus présents sur ce site, notamment les textes,
                            images, photographies, logo, éléments graphiques et structure, est
                            protégé par le droit de la propriété intellectuelle. Sauf mention
                            contraire, toute reproduction, représentation, adaptation ou
                            utilisation, totale ou partielle, sans autorisation préalable
                            écrite, est interdite.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-paper/70 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-8">
                        <h2 className="font-serif text-2xl font-semibold text-forest">
                            Données personnelles
                        </h2>
                        <p className="mt-4 text-forest2 leading-relaxed">
                            Les données éventuellement collectées via le formulaire de contact
                            sont utilisées uniquement pour répondre aux demandes envoyées via
                            le site. Elles ne sont pas cédées à des tiers à des fins
                            commerciales.
                        </p>
                        <p className="mt-3 text-forest2 leading-relaxed">
                            Conformément à la réglementation applicable, vous pouvez demander
                            l’accès, la rectification ou la suppression de vos données en
                            écrivant à : fetedesplantebarbirey@gmail.com.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-paper/70 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-8">
                        <h2 className="font-serif text-2xl font-semibold text-forest">
                            Cookies
                        </h2>
                        <p className="mt-4 text-forest2 leading-relaxed">
                            Le site peut utiliser des cookies ou traceurs strictement
                            nécessaires à son fonctionnement. Si des cookies de mesure
                            d’audience ou d’autres traceurs non essentiels sont utilisés, ils
                            sont soumis à l’information de l’utilisateur et, lorsque la loi
                            l’exige, à son consentement préalable.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-paper/70 p-6 ring-1 ring-stone/30 shadow-soft backdrop-blur md:p-8">
                        <h2 className="font-serif text-2xl font-semibold text-forest">
                            Contact
                        </h2>
                        <p className="mt-4 text-forest2">
                            Pour toute question concernant le site ou son contenu, vous pouvez
                            écrire à : fetedesplantesbarbirey@gmail.com.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}