import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: `${site.name} — ${site.dateLong}`,
  description: `${site.edition} — ${site.location}. ${site.freeEntry}, ${site.hours}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <div className="relative min-h-screen bg-paper">
          {/* background motif */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.65] mix-blend-multiply"
            style={{
              backgroundImage: "url(/patterns/leaves.png)",
              backgroundRepeat: "repeat",
              backgroundSize: "900px 900px", // ajuste ici (700–1200)
              backgroundPosition: "center",
            }}
          />

          {/* voile pour lisibilité */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(235,225,210,0.92), rgba(235,225,210,0.82))",
            }}
          />

          {/* contenu */}
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}