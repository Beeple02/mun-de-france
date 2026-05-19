import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUN de France — Haute Institution Diplomatique",
  description: "Le sommet national d'excellence unifiant lycées d'élite et grandes écoles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-institutional-cream min-h-screen flex flex-col relative selection:bg-institutional-gold selection:text-white">
        <CustomCursor />
        {/* Archival Paper Texture Overlay */}
        <div className="fixed inset-0 z-50 bg-noise opacity-[0.4]" />
        
        <Navbar />
        <main className="flex-grow w-full relative z-10">
          {children}
        </main>
        <footer className="border-t border-institutional-gold/10 py-8 text-center text-xs tracking-widest uppercase font-semibold text-institutional-navy/60 bg-white relative z-10">
          © 2026 MUN de France — Direction du Président-Fondateur
        </footer>
      </body>
    </html>
  );
}
