"use client";
import { useState } from "react";

export default function RejoindrePage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", institution: "", roleApplied: "Trésorier Général", motivation: "" });
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Échec de la soumission");

      setStatus({ type: "success", message: "Votre candidature a été transmise au Bureau du Président-Fondateur avec succès." });
      setFormData({ fullName: "", email: "", institution: "", roleApplied: "Trésorier Général", motivation: "" });
    } catch {
      setStatus({ type: "error", message: "Une erreur réseau est survenue. Veuillez réessayer ultérieurement." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-4xl text-institutional-navy">Candidatures Officielles</h2>
        <p className="text-xs uppercase tracking-widest text-institutional-gold font-bold">Rejoindre la Structure d&apos;Élite</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 border border-institutional-gold/20 rounded shadow-sm space-y-6 font-sans">
        {status.type !== "idle" && (
          <div className={`p-4 text-sm rounded ${status.type === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
            {status.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-institutional-slate mb-2">Nom Complet</label>
            <input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full border border-institutional-gold/30 p-3 rounded bg-institutional-cream/30 focus:outline-none focus:border-institutional-navy transition-colors text-sm" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-institutional-slate mb-2">Adresse Email</label>
            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-institutional-gold/30 p-3 rounded bg-institutional-cream/30 focus:outline-none focus:border-institutional-navy transition-colors text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-institutional-slate mb-2">Établissement Actuel</label>
            <input type="text" required placeholder="Ex: Lycée Louis-le-Grand, Sciences Po" value={formData.institution} onChange={(e) => setFormData({ ...formData, institution: e.target.value })} className="w-full border border-institutional-gold/30 p-3 rounded bg-institutional-cream/30 focus:outline-none focus:border-institutional-navy transition-colors text-sm" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-institutional-slate mb-2">Position Invoquée</label>
            <select value={formData.roleApplied} onChange={(e) => setFormData({ ...formData, roleApplied: e.target.value })} className="w-full border border-institutional-gold/30 p-3 rounded bg-white focus:outline-none focus:border-institutional-navy transition-colors text-sm">
              <option>Trésorier Général</option>
              <option>Secrétaire Exécutif</option>
              <option>Haut Commissaire Académique</option>
              <option>Grand Chancelier aux Partenariats</option>
              <option>Directeur Logistique</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-institutional-slate mb-2">Note d&apos;Intention &amp; Motivation Diplomatique</label>
          <textarea required rows={6} value={formData.motivation} onChange={(e) => setFormData({ ...formData, motivation: e.target.value })} className="w-full border border-institutional-gold/30 p-3 rounded bg-institutional-cream/30 focus:outline-none focus:border-institutional-navy transition-colors text-sm font-sans resize-none" placeholder="Exprimez votre vision stratégique pour la filière..." />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-institutional-navy text-white uppercase tracking-widest font-semibold p-4 text-sm rounded hover:bg-institutional-navy/90 transition-colors disabled:opacity-50">
          {loading ? "Transmission Cryptographique..." : "Soumettre la Note au Conseil"}
        </button>
      </form>
    </div>
  );
}
