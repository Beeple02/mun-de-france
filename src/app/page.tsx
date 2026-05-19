import { prisma } from "@/lib/prisma";
import Countdown from "@/components/ui/Countdown";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import SimulationPreview from "@/components/ui/SimulationPreview";
import { FadeIn } from "@/components/ui/FadeIn";

export const revalidate = 0;

export default async function HomePage() {
  const activePartners = await prisma.partnerSchool.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" }
  });

  return (
    <div className="space-y-24 py-16 max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <FadeIn>
        <section className="text-center max-w-4xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-widest text-institutional-gold font-bold block">Institution Nationale</span>
          <h1 className="text-5xl md:text-7xl text-institutional-navy font-bold leading-[1.1]">
            L&apos;Élite Lycéenne et Universitaire Unie par la Diplomatie
          </h1>
          <p className="text-lg md:text-xl text-institutional-slate/90 leading-relaxed font-sans max-w-2xl mx-auto">
            Une arène rhétorique et stratégique bilatérale conçue pour réécrire les règles de l&apos;ordre mondial. Fondée par des lycéens pour les futurs grands serviteurs de l&apos;État.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Countdown />
      </FadeIn>

      {/* Doctrine & Manifeste */}
      <FadeIn>
        <section className="bg-institutional-navy text-institutional-cream p-12 md:p-20 rounded-sm text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-institutional-gold"></div>
          <blockquote className="font-serif text-2xl md:text-4xl italic leading-relaxed max-w-4xl mx-auto relative z-10">
            &ldquo;La diplomatie n&apos;est pas un exercice de style, c&apos;est l&apos;art de redéfinir le possible. Le MUN de France a été fondé sur une conviction stricte : l&apos;excellence n&apos;a pas d&apos;âge, elle n&apos;a que des arènes.&rdquo;
          </blockquote>
          <p className="mt-8 text-xs uppercase tracking-widest font-bold text-institutional-gold">La Doctrine Fondatrice</p>
        </section>
      </FadeIn>

      {/* Haut Patronages */}
      <FadeIn>
        <section className="text-center space-y-6">
          <h3 className="font-serif text-3xl text-institutional-navy">Appuis Institutionnels & Haut Patronages</h3>
          <p className="text-sm uppercase tracking-widest font-semibold text-institutional-slate/50">En cours d&apos;accréditation ministérielle</p>
          <InfiniteMarquee partners={activePartners} />
        </section>
      </FadeIn>

      <FadeIn>
        <SimulationPreview />
      </FadeIn>
    </div>
  );
}
