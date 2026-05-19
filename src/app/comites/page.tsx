import { FadeIn } from "@/components/ui/FadeIn";

export default function ComitesPage() {
  const tiers = [
    {
      title: "Division Lycée",
      subtitle: "Démocratisation et Détection d'Excellence",
      description: "L'arène formatrice. Réservée aux lycéens publics et privés, cette division se concentre sur l'apprentissage de la rhétorique classique, la maîtrise des protocoles de l'ONU et la construction d'alliances.",
      isElite: false
    },
    {
      title: "Division Supérieure",
      subtitle: "Haute Technicité Diplomatique",
      description: "Réservée aux étudiants des grandes écoles (Sciences Po, Assas, HEC). Les comités traitent de résolutions complexes nécessitant une connaissance académique profonde du droit international et de la macroéconomie.",
      isElite: false
    },
    {
      title: "Le Comité Mixte : Conseil de Sécurité",
      subtitle: "L'Élite Absolue — Crise en Temps Réel",
      description: "Le sommet de l'institution. Là où les meilleurs lycéens de France affrontent l'élite universitaire dans une crise géopolitique nocturne. Mécaniques de crise avancées, trahisons structurelles et arbitrage en direct.",
      isElite: true
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-16">
      <FadeIn>
        <div className="text-center space-y-4">
          <h1 className="font-serif text-5xl text-institutional-navy">Comités & Arènes</h1>
          <p className="text-sm uppercase tracking-widest font-semibold text-institutional-gold">L&apos;Architecture du Débat</p>
        </div>
      </FadeIn>

      <div className="space-y-8">
        {tiers.map((tier, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className={`p-8 border rounded-sm ${tier.isElite ? 'bg-institutional-navy text-white border-institutional-gold' : 'bg-white border-institutional-gold/20 text-institutional-slate'}`}>
              <h2 className={`font-serif text-3xl mb-2 ${tier.isElite ? 'text-institutional-gold' : 'text-institutional-navy'}`}>{tier.title}</h2>
              <h3 className={`text-xs uppercase tracking-widest font-bold mb-6 ${tier.isElite ? 'text-white/70' : 'text-institutional-slate/50'}`}>{tier.subtitle}</h3>
              <p className="font-sans leading-relaxed opacity-90">{tier.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
