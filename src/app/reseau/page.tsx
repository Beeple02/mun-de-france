export default function ReseauPage() {
  const targetedHubs = [
    { name: "Lycée Louis-le-Grand", region: "Paris — Île-de-France", role: "Élite de la Couronne" },
    { name: "Lycée Henri-IV", region: "Paris — Île-de-France", role: "Élite de la Couronne" },
    { name: "Sciences Po Paris", region: "SPNU — Hub Universitaire", role: "Haut Commissariat Académique" },
    { name: "Lycée Sainte-Marie Lyon", region: "Lyon — Sud-Est", role: "Ancrage Régional Majeur" },
    { name: "Université Paris-Panthéon-Assas", region: "Assas MUN", role: "Conseil de Procédure Juridique" }
  ];

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center space-y-3">
        <h2 className="font-serif text-4xl text-institutional-navy">Le Réseau Académique</h2>
        <p className="text-sm text-institutional-gold uppercase tracking-wider font-semibold">Les Pôles de Souveraineté Territoriale</p>
      </div>
      <div className="bg-white border border-institutional-gold/20 rounded shadow-sm divide-y divide-institutional-gold/10">
        {targetedHubs.map((hub) => (
          <div key={hub.name} className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div>
              <h3 className="font-serif text-xl text-institutional-slate font-bold">{hub.name}</h3>
              <p className="text-xs text-black/50 font-sans mt-0.5">{hub.region}</p>
            </div>
            <span className="inline-block bg-institutional-navy text-institutional-gold text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full self-start sm:self-auto">
              {hub.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
