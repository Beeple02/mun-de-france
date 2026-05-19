import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-institutional-gold/20 bg-white/80 backdrop-blur sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
      <Link href="/" className="font-serif text-xl font-bold tracking-tight text-institutional-navy flex items-center space-x-2">
        <span>MUN DE FRANCE</span>
      </Link>
      <div className="flex space-x-8 text-sm uppercase tracking-wider font-semibold font-sans">
        <Link href="/organisation" className="text-institutional-slate hover:text-institutional-gold transition-colors">L&apos;Organisation</Link>
        <Link href="/comites" className="text-institutional-slate hover:text-institutional-gold transition-colors">Comités</Link>
        <Link href="/reseau" className="text-institutional-slate hover:text-institutional-gold transition-colors">Le Réseau</Link>
        <Link href="/rejoindre" className="text-institutional-slate hover:text-institutional-gold transition-colors">Nous Rejoindre</Link>
      </div>
    </nav>
  );
}
