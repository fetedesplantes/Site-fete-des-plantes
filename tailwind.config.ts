import type { Config } from "tailwindcss";

export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: "#EBE1D2",
                forest: "#466A54",   // plus lumineux
                forest2: "#6F8F7B",  // hover / secondaire
                leaf: "#7FB594",      // encore plus “pop” (underline/accents)
                sage: "#76856A",
                terracotta: "#D88F65",
                terracotta2: "#A36D52",
                sand: "#D6CAB3",
                stone: "#A7A792",
                olive: "#938E72",
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.25rem",
            },
            boxShadow: {
                soft: "0 10px 25px rgba(0,0,0,0.08)",
            },
        },
    },
    plugins: [],
} satisfies Config;