"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/partners", {
      method: "OPTIONS",
      headers: { "Authorization": password }
    });

    if (response.ok) {
      document.cookie = `admin_token=${password}; path=/; max-age=86400; SameSite=Strict`;
      router.push("/admin/dashboard");
    } else {
      setError("Clef d'accès invalide. Tentative enregistrée.");
    }
  };

  return (
    <div className="max-w-md mx-auto py-24 space-y-6 font-sans">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl text-institutional-navy">Portail Souverain</h2>
        <p className="text-xs uppercase tracking-widest text-institutional-gold font-bold">Authentification Recommandée</p>
      </div>
      <form onSubmit={handleLogin} className="bg-white p-6 border border-institutional-gold/30 rounded shadow-sm space-y-4">
        {error && <p className="text-xs text-red-600 border border-red-200 bg-red-50 p-3 rounded">{error}</p>}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-institutional-slate mb-2">Mot de Passe Souverain</label>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-institutional-gold/30 p-3 rounded focus:outline-none focus:border-institutional-navy text-sm font-mono tracking-widest" />
        </div>
        <button type="submit" className="w-full bg-institutional-navy text-white text-xs uppercase tracking-widest font-semibold p-3 rounded hover:bg-institutional-navy/90 transition-colors">
          Déverrouiller la Console
        </button>
      </form>
    </div>
  );
}
