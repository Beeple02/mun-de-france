import { prisma } from "@/lib/prisma";
import Countdown from "@/components/ui/Countdown";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import SimulationPreview from "@/components/ui/SimulationPreview";

export const revalidate = 0;

export default async function HomePage() {
  const activePartners = await prisma.partnerSchool.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" }
  });

  return (
    <div className="space-y-16 py-8">
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-widest text-institutional-gold font-bold block">Institution Nationale</span>
        <h1 className="text-5xl md:text-6xl text-institutional-navy font-bold leading-tight">
          L&apos;Élite Lycéenne et Universitaire Unie par la Diplomatie
        </h1>
        <p className="text-lg text-institutional-slate/90 leading-relaxed font-sans max-w-2xl mx-auto pt-4">
          Une arène rhétorique et stratégique bilatérale conçue pour réécrire les règles de l&apos;ordre mondial. Fondée par des lycéens pour les futurs grands serviteurs de l&apos;État.
        </p>
      </section>

      <Countdown />

      <InfiniteMarquee partners={activePartners} />

      <SimulationPreview />
    </div>
  );
}
