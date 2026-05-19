import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUN de France — Haute Institution Diplomatique",
  description: "Le sommet national d'excellence de modélisation des Nations Unies, unifiant lycées d'élite et grandes écoles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-institutional-cream min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-12">
          {children}
        </main>
        <footer className="border-t border-institutional-gold/10 py-6 text-center text-xs tracking-widest uppercase font-semibold text-institutional-navy/60 bg-white">
          © 2026 MUN de France — Direction du Président-Fondateur
        </footer>
      </body>
    </html>
  );
}
