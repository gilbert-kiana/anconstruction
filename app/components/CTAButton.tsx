"use client";

import Link from "next/link";

interface CTAButtonProps {
  visible?: boolean;
}

export default function CTAButton({ visible = false }: CTAButtonProps) {
  return (
    <div
      className={`flex items-center gap-3 opacity-0 ${visible ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
    >
      {/* Primary - Donate Now */}
      <Link
        href="/donate"
        className="bg-[#F97316] text-[#0a0a0a] px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-[#ea6c0e] transition-colors flex items-center gap-2"
      >
        Donate Now
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>

      {/* Secondary - Join Our Mission */}
      <Link
        href="/mission"
        className="bg-white/5 border border-[#F97316]/30 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-[#F97316]/10 hover:border-[#F97316]/50 transition-colors flex items-center gap-2"
      >
        Join Our Mission
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}
