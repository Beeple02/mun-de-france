export default function SimulationPreview() {
  return (
    <section className="bg-institutional-dark text-white p-12 rounded-lg my-16 border border-institutional-gold/40 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-3 bg-institutional-gold text-institutional-dark text-xs font-bold tracking-widest uppercase rounded-bl">
        BETA // LIVE FEED
      </div>
      <h3 className="font-serif text-3xl text-institutional-gold mb-4">Conseil de Sécurité : Opération Cri de Crise</h3>
      <p className="text-sm opacity-80 max-w-2xl font-sans mb-8">
        Aperçu de l&apos;infrastructure de crise en temps réel. Le Comité Mixte fusionne la rhétorique classique des lycées d&apos;élite avec la réactivité géopolitique des grandes écoles.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
        <div className="border border-white/10 bg-black/40 p-4 rounded">
          <span className="text-institutional-gold block font-semibold mb-2">[ TRANSMISSION RADAR ]</span>
          <p className="opacity-70">09:44:12 GMT - Flux diplomatique entrant : Ministère des Affaires Étrangères de la Fédération.</p>
        </div>
        <div className="border border-white/10 bg-black/40 p-4 rounded">
          <span className="text-red-400 block font-semibold mb-2">[ ÉTAT DE COMPROMISSION ]</span>
          <p className="opacity-70">Blocage multilatéral en cours sur l&apos;article 7. Les délégations de l&apos;ENS et d&apos;Henri-IV entrent en négociation d&apos;urgence.</p>
        </div>
        <div className="border border-white/10 bg-black/40 p-4 rounded">
          <span className="text-emerald-400 block font-semibold mb-2">[ ARBITRAGE DU MARTEAU ]</span>
          <p className="opacity-70">Secrétaire Général-Fondateur : Vote de résolution engagé. Clôture de séance imminente.</p>
        </div>
      </div>
    </section>
  );
}
