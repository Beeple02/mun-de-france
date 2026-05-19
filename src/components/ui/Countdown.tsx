"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-08-31T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="h-24 min-h-24" />;

  return (
    <div className="grid grid-cols-4 gap-6 max-w-xl mx-auto my-12 text-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="border border-institutional-gold/30 bg-white p-4 rounded shadow-sm">
          <div className="font-serif text-4xl font-bold text-institutional-navy">{String(value).padStart(2, "0")}</div>
          <div className="text-xs uppercase tracking-widest text-institutional-gold font-semibold mt-1">{label}</div>
        </div>
      ))}
    </div>
  );
}
