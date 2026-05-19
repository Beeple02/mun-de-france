"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Candidate {
  id: string;
  fullName: string;
  email: string;
  institution: string;
  roleApplied: string;
  motivation: string;
  createdAt: string;
}

interface School {
  id: string;
  name: string;
  logoUrl: string;
  isActive: boolean;
}

export default function DashboardPage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [schools, setSchools] = useState<School[]>([]);
  const [newSchool, setNewSchool] = useState({ name: "", logoUrl: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const resApps = await fetch("/api/applications");
      const resSchools = await fetch("/api/partners");
      if (resApps.status === 401 || resSchools.status === 401) {
        router.push("/admin");
        return;
      }
      setCandidates(await resApps.json());
      setSchools(await resSchools.json());
    };
    fetchDashboardData();
  }, [router]);

  const handleAddSchool = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = document.cookie.split("; ").find(row => row.startsWith("admin_token="))?.split("=")[1];
    const res = await fetch("/api/partners", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": token || "" },
      body: JSON.stringify(newSchool)
    });
    if (res.ok) {
      const created = await res.json();
      setSchools([...schools, created]);
      setNewSchool({ name: "", logoUrl: "" });
    }
  };

  return (
    <div className="space-y-12 font-sans text-sm">
      <div className="border-b border-institutional-gold/20 pb-4 flex justify-between items-center">
        <h2 className="font-serif text-3xl text-institutional-navy">Console de Haute Gouvernance</h2>
        <span className="text-xs uppercase tracking-widest font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">Session Sécurisée</span>
      </div>

      <div className="space-y-4">
        <h3 className="font-serif text-2xl text-institutional-slate">Gestion des Établissements Partenaires</h3>
        <form onSubmit={handleAddSchool} className="bg-white p-4 border border-institutional-gold/20 rounded grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold mb-1 uppercase text-institutional-slate">Nom de l&apos;École</label>
            <input type="text" required value={newSchool.name} onChange={(e) => setNewSchool({...newSchool, name: e.target.value})} className="w-full border p-2 rounded bg-institutional-cream/20 text-xs" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 uppercase text-institutional-slate">URL du Logo Image</label>
            <input type="text" required value={newSchool.logoUrl} onChange={(e) => setNewSchool({...newSchool, logoUrl: e.target.value})} className="w-full border p-2 rounded bg-institutional-cream/20 text-xs" />
          </div>
          <button type="submit" className="bg-institutional-gold text-white font-semibold text-xs uppercase tracking-wider p-2.5 rounded hover:bg-institutional-gold/90 transition-colors">
            Inscrire l&apos;Établissement
          </button>
        </form>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {schools.map(s => (
            <div key={s.id} className="bg-white p-4 border rounded text-center space-y-2">
              <img src={s.logoUrl} alt={s.name} className="h-8 mx-auto object-contain" />
              <p className="font-serif font-bold text-xs truncate">{s.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-serif text-2xl text-institutional-slate">Registre des Candidatures</h3>
        <div className="bg-white border rounded overflow-hidden shadow-sm">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="bg-institutional-navy text-white uppercase tracking-wider font-semibold">
                <th className="p-4">Candidat</th>
                <th className="p-4">Établissement</th>
                <th className="p-4">Rôle Visé</th>
                <th className="p-4">Note d&apos;Intention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {candidates.map(c => (
                <tr key={c.id} className="hover:bg-institutional-cream/10">
                  <td className="p-4 font-bold">{c.fullName}<br/><span className="text-gray-400 font-normal">{c.email}</span></td>
                  <td className="p-4 font-medium">{c.institution}</td>
                  <td className="p-4"><span className="bg-institutional-gold/10 text-institutional-navy px-2 py-0.5 rounded font-semibold">{c.roleApplied}</span></td>
                  <td className="p-4 max-w-xs truncate text-gray-600">{c.motivation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
