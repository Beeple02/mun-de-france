"use client";

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

export default function InfiniteMarquee({ partners }: { partners: Partner[] }) {
  if (!partners || partners.length === 0) return null;

  // Duplicate list to achieve continuous loop seamlessly without visual cuts
  const doublePartners = [...partners, ...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden py-8 my-12 bg-white border-y border-institutional-gold/20 marquee-container">
      <div className="flex w-max space-x-16 animate-marquee align-middle">
        {doublePartners.map((partner, index) => (
          <div key={`${partner.id}-${index}`} className="flex items-center justify-center space-x-4 flex-shrink-0 px-4 h-16 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img src={partner.logoUrl} alt={partner.name} className="h-12 object-contain pointer-events-none" />
            <span className="font-serif text-lg tracking-wide font-medium text-institutional-slate">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
