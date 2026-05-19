import { FadeIn } from "@/components/ui/FadeIn";

const executives = [
  { name: "Luc Paum", role: "Président-Fondateur", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
  { name: "Nom à définir", role: "Secrétaire Général-Fondateur", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
];

const secretariat = [
  { name: "En cours de recrutement", role: "Trésorier Général", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
  { name: "En cours de recrutement", role: "Haut Commissaire", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
];

export default function OrganisationPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 space-y-24">
      <FadeIn>
        <div className="text-center space-y-4">
          <h1 className="font-serif text-5xl text-institutional-navy">L&apos;Architecture Souveraine</h1>
          <p className="text-sm uppercase tracking-widest font-semibold text-institutional-gold">Le Bureau Légal & Le Haut Commissariat</p>
        </div>
      </FadeIn>

      <section className="space-y-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-institutional-navy text-center border-b border-institutional-gold/20 pb-4 max-w-2xl mx-auto">La Couronne</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {executives.map((exec, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="group relative w-full h-[500px] overflow-hidden bg-institutional-slate rounded-sm">
                <img src={exec.image} alt={exec.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-institutional-navy via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-serif text-3xl text-white mb-1">{exec.name}</h3>
                  <p className="text-xs uppercase tracking-widest font-bold text-institutional-gold">{exec.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <FadeIn>
          <h2 className="font-serif text-3xl text-institutional-navy text-center border-b border-institutional-gold/20 pb-4 max-w-2xl mx-auto">L&apos;Exécution & L&apos;Académique</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {secretariat.map((member, i) => (
             <FadeIn key={i} delay={i * 0.1}>
               <div className="group relative w-full h-[350px] overflow-hidden bg-institutional-cream/50 border border-institutional-gold/20 rounded-sm">
                  <div className="w-full h-full bg-institutional-slate/5 flex items-center justify-center group-hover:bg-institutional-slate/10 transition-colors">
                     <span className="font-serif text-institutional-navy/30 text-5xl">?</span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 w-full bg-white border-t border-institutional-gold/20">
                    <h3 className="font-serif text-lg text-institutional-navy truncate">{member.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-institutional-gold truncate">{member.role}</p>
                  </div>
               </div>
             </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
