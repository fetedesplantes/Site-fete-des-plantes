export type ExposantCategory =
    | "pepiniere"
    | "plantes"
    | "artisanat"
    | "librairie"
    | "restauration"
    | "alimentation"
    | "association"
    | "autre";

export type Exposant = {
    id: string;
    name: string;
    category: ExposantCategory;
    description?: string;
    location?: string;
    image?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
};

export const exposants: Exposant[] = [
    {
        id: "au-panier-fleuri",
        name: "Au panier fleuri",
        category: "plantes",
        description: "",
        location: "",
        image: "",
        website: "https://www.lepanierfleuri.fr/",
        instagram: "",
        facebook: ""
    },
    {
        id: "pollen-blanc",
        name: "Pollen Blanc",
        category: "alimentation",
        description: "Apicultrice, productrice de miel et de pain d'épice.",
        location: "",
        image: "/images/exposants/pollen-blanc.png",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "apifleurs",
        name: "Apifleurs",
        category: "plantes",
        description: "Producteur de plantes vivaces mélliferes",
        location: "",
        image: "/images/exposants/apifleurs.png",
        website: "https://www.apifleurs.fr/",
        instagram: "",
        facebook: ""
    },
    {
        id: "arbo-et-sens",
        name: "Arbo & Sens",
        category: "pepiniere",
        description: "Pépiniériste (arbres fruitiers, arbustes ornementaux et vivaces comestibles ou d'ornement",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "aubry",
        name: "Aubry",
        category: "plantes",
        description: "",
        location: "",
        image: "/images/exposants/aubry.png",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "adele-mouquet",
        name: "Adèle Mouquet",
        category: "artisanat",
        description: "",
        location: "",
        image: "/images/exposants/Adele_mouquet.webp",
        website: "https://adelemouquetceramiques.com/",
        instagram: "",
        facebook: ""
    },
    {
        id: "atelier-petales-sauvages",
        name: "Atelier Pétales Sauvages",
        category: "plantes",
        description: "Maître artisant fleuriste",
        location: "",
        image: "/images/exposants/atelier_petale.png",
        website: "https://atelier-petales-sauvages.fr/",
        instagram: "https://www.instagram.com/atelierpetalessauvages/",
        facebook: "https://www.facebook.com/p/Atelier-P%C3%A9tales-Sauvages-100090348289426/"
    },
    {
        id: "atelier-du-prieure",
        name: "Atelier du Prieuré",
        category: "artisanat",
        description: "",
        location: "",
        image: "",
        website: "https://atelier-du-prieure.fr/",
        instagram: "",
        facebook: ""
    },
    {
        id: "atelier-nidavellir",
        name: "Atelier Nidavellir",
        category: "artisanat",
        description: "",
        location: "",
        image: "/images/exposants/nidavellir.jpg",
        website: "",
        instagram: "https://www.instagram.com/ateliernidavellir/?hl=fr",
        facebook: "https://www.facebook.com/p/Atelier-Nidavellir-100063633873723/"
    },
    {
        id: "au-fil-des-cueillettes",
        name: "Au fil des cueillettes",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "au-chene-bleu",
        name: "Au chêne bleu",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "baum-plantes",
        name: "Baum Plantes",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "bertrand-choublier",
        name: "Bertrand Choublier",
        category: "plantes",
        description: "Plantes vivaces et annuelles",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "brasserie-la-kanopee",
        name: "Brasserie La Kanopee",
        category: "artisanat",
        description: "Brasseur de bière",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "caladium-family",
        name: "Caladium Family",
        category: "plantes",
        description: "Vente de plantes d'intérieur",
        location: "",
        image: "",
        website: "https://caladium.shop/",
        instagram: "",
        facebook: ""
    },
    {
        id: "creadom",
        name: "Créadom",
        category: "artisanat",
        description: "Créatrice de bijoux",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: "https://www.facebook.com/p/Cr%C3%A9aDom-100076650002550/"
    },
    {
        id: "co-and-co",
        name: "Co & Co",
        category: "artisanat",
        description: "Couturière",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "beautiful-garden",
        name: "Beautiful Garden",
        category: "artisanat",
        description: "Outils de jardin",
        location: "",
        image: "",
        website: "https://www.beautifulgarden.fr/",
        instagram: "",
        facebook: ""
    },
    {
        id: "persephone",
        name: "Persephone",
        category: "plantes",
        description: "Producteur de plantes d'interieur",
        location: "",
        image: "",
        website: "https://www.xn--persphone-e4a.fr/",
        instagram: "",
        facebook: ""
    },
    {
        id: "trapi-trapan",
        name: "Trapi Trapan",
        category: "plantes",
        description: "Production de plantes médicinales et aromatiques",
        location: "",
        image: "",
        website: "https://www.parcs-naturels-regionaux.fr/es/node/28270",
        instagram: "",
        facebook: ""
    },
    {
        id: "mosaik-dreams",
        name: "Mosaik Dreams",
        category: "artisanat",
        description: "Création mosaïques décoratives",
        location: "",
        image: "",
        website: "",
        instagram: "https://www.instagram.com/mosaikdreams/",
        facebook: ""
    },
    {
        id: "lylyflane",
        name: "Lylyflane",
        category: "artisanat",
        description: "Création d'objets de décoration et de pièces utilitaires de table en grès.",
        location: "",
        image: "",
        website: "",
        instagram: "https://www.instagram.com/lylyflane/",
        facebook: "https://www.facebook.com/p/Lylyflane-100090672157694/"
    },
    {
        id: "terre-mutine",
        name: "Terre Mutine",
        category: "artisanat",
        description: "Bijoux poétiques et uniques en céramique",
        location: "",
        image: "",
        website: "https://terremutine.com/",
        instagram: "https://www.instagram.com/terremutine/",
        facebook: "https://www.facebook.com/TerreMutine/?locale=fr_FR"
    },
    {
        id: "vergers-amelanche",
        name: "Les Vergers de l’Amélanche",
        category: "pepiniere",
        description: "Pépinière et arboriculture",
        location: "",
        image: "",
        website: "https://www.lesvergersdelamelanche.fr/",
        instagram: "",
        facebook: ""
    },
    {
        id: "jardin-en-herbier",
        name: "Le Jardin en Herbier",
        category: "pepiniere",
        description: "Pépinière paysanne d'aromatiques, médicinales, ornementales et petits fruits rouges en agriculture biologique",
        location: "",
        image: "",
        website: "https://lejardinenherbier.sitew.fr/",
        instagram: "",
        facebook: "https://www.facebook.com/p/Le-jardin-en-herbier-100057501337354/"
    },
    {
        id: "eclisse-brindille",
        name: "Éclisse & Brindille",
        category: "artisanat",
        description: "Vannerie sauvage",
        location: "",
        image: "",
        website: "https://eclisseetbrindille.fr/",
        instagram: "",
        facebook: ""
    },
    {
        id: "pepiniere-niwaki",
        name: "Pépinière Niwaki",
        category: "pepiniere",
        description: "Pépiniériste, producteur spécialisé dans la taille des arbres à la japonaise",
        location: "",
        image: "",
        website: "http://www.xn--ppinires-niwaki-ymbm.fr/",
        instagram: "",
        facebook: ""
    },
    {
        id: "gaec-bokin-cor",
        name: "GAEC du Bokin Cor",
        category: "alimentation",
        description: "Ferme paysanne, fromages et herbes aromatiques",
        location: "5 chemin du lavoir, Crepey, 21360 Aubaine",
        image: "",
        website: "https://bokincor.fr/",
        instagram: "",
        facebook: ""
    },
    {
        id: "julie-cambrousse",
        name: "Julie Cambrousse",
        category: "artisanat",
        description: "Etiquettes de jardin",
        location: "",
        image: "",
        website: "https://www.etiquettesdejardin.com/",
        instagram: "",
        facebook: ""
    },
    {
        id: "jardin-boheme",
        name: "Le Jardin de Bohème",
        category: "pepiniere",
        description: "Pépinière naturelle et comestible",
        location: "",
        image: "",
        website: "https://jardindeboheme.fr/",
        instagram: "",
        facebook: ""
    },
    {
        id: "jardin-mezayon",
        name: "Le Jardin du Mézayon",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "jardin-mellifere",
        name: "Le Jardin Mellifère",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "oizeaux-passage",
        name: "Les Oizeaux de Passage",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "herbes-marguerite",
        name: "Les Herbes de Marguerite",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    /*
    {
      id: "fruitiers-cozanne",
      name: "Les Fruitiers de la Cozanne",
      category: "autre",
      description: "",
      location: "",
      image: "",
      website: "",
      instagram: "",
      facebook: ""
    },
    */
    {
        id: "serres-repe",
        name: "Les Serres de la Rèpe",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "librairie-fleur",
        name: "Librairie La Fleur qui Pousse",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "pepiniere-plombieres",
        name: "Les Pépinières de Plombières",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "dimanche-campagne",
        name: "Un dimanche à la campagne",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "paula-coste",
        name: "Paula Coste",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "pepiniere-hortulus",
        name: "Pépinière Hortulus",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "pepiniere-mi-ombre",
        name: "Pépinière Mi-ombre",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "pot-tika",
        name: "Pot Tika",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "radicelles-cotyledons",
        name: "Radicelles & Cotylédons",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "plume-dauree",
        name: "Plume Daurée",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "graine-potager",
        name: "La Graine et le Potager",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "sentier-geais",
        name: "Le Sentier des Geais",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "pepiniere-pepin",
        name: "Pépinière Le Pépin",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "savonnerie-beaux-jours",
        name: "Savonnerie Les Beaux Jours",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "solange-viana",
        name: "Solange Viana",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "pousses-ouche",
        name: "Les Pousses de l’Ouche",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "naturalaine",
        name: "Naturalaine",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "jlb-creation",
        name: "JLB Création",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "pralines-eric",
        name: "Les Pralines d’Éric",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "entrelacs-bosquets",
        name: "Entrelacs des Bosquets",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "ferme-valliere",
        name: "La Ferme en Vallière",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "legba",
        name: "Legba – Jardin ethnobotanique",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    },
    {
        id: "le-champs-des-sourires",
        name: "Le champs des sourires",
        category: "autre",
        description: "",
        location: "",
        image: "",
        website: "",
        instagram: "",
        facebook: ""
    }
];