"use client";

interface HeroCardsProps {
  visible?: boolean;
}

const stats = [
  {
    position: "left-top",
    icon: (
      <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Countries",
    value: "5+",
  },
  {
    position: "left-bottom",
    icon: (
      <svg className="w-5 h-5 text-[#F97316]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 4V2h10v2h3v4a4 4 0 01-3.8 3.99A5 5 0 0113 15.92V18h3v2h-2v2h-4v-2H8v-2h3v-2.08A5 5 0 017.8 13.99 4 4 0 014 10V6h3zm0 2H6v4a2 2 0 002 2h.29A5.03 5.03 0 017 10V6zm10 0v4a5.03 5.03 0 01-1.29 2H16a2 2 0 002-2V6h-1zm-5 0a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    ),
    label: "Athletes",
    value: "50+",
  },
  {
    position: "right-top",
    icon: (
      <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    label: "Gyms Built",
    value: "10+",
  },
  {
    position: "right-bottom",
    icon: (
      <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    label: "Gear Donated",
    value: "1000+",
  },
];

export default function HeroCards({ visible = false }: HeroCardsProps) {
  return (
    <>
      {/* Left cards */}
      <div className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 hidden md:flex">
        {stats
          .filter((s) => s.position.startsWith("left"))
          .map((stat, i) => (
            <div
              key={stat.label}
              className={`
                flex items-center gap-3 bg-white/5 backdrop-blur-md border border-[#F97316]/20
                rounded-xl px-4 py-3 min-w-[160px] shadow-[0_0_20px_rgba(249,115,22,0.08)]
                transition-all duration-300 hover:scale-105 hover:border-[#F97316]/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]
                pointer-events-auto cursor-default
                opacity-0 ${visible ? "animate-fade-in-left" : ""}
              `}
              style={{ animationDelay: `${0.3 + i * 0.15}s`, animationFillMode: "forwards" }}
            >
              <div className="bg-[#F97316]/15 p-2 rounded-lg">{stat.icon}</div>
              <div>
                <p className="text-[#F97316] font-bold text-lg leading-tight">{stat.value}</p>
                <p className="text-white/70 text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Right cards */}
      <div className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 hidden md:flex">
        {stats
          .filter((s) => s.position.startsWith("right"))
          .map((stat, i) => (
            <div
              key={stat.label}
              className={`
                flex items-center gap-3 bg-white/5 backdrop-blur-md border border-[#F97316]/20
                rounded-xl px-4 py-3 min-w-[160px] shadow-[0_0_20px_rgba(249,115,22,0.08)]
                transition-all duration-300 hover:scale-105 hover:border-[#F97316]/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]
                pointer-events-auto cursor-default
                opacity-0 ${visible ? "animate-fade-in-right" : ""}
              `}
              style={{ animationDelay: `${0.5 + i * 0.15}s`, animationFillMode: "forwards" }}
            >
              <div className="bg-[#F97316]/15 p-2 rounded-lg">{stat.icon}</div>
              <div>
                <p className="text-[#F97316] font-bold text-lg leading-tight">{stat.value}</p>
                <p className="text-white/70 text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Mobile cards - horizontal scroll at bottom */}
      <div className="flex md:hidden gap-3 overflow-x-auto px-4 pb-2 z-20">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`
              flex items-center gap-2 bg-white/5 backdrop-blur-md border border-[#F97316]/20
              rounded-xl px-3 py-2 shrink-0 shadow-[0_0_20px_rgba(249,115,22,0.08)]
              opacity-0 ${visible ? "animate-fade-in-up" : ""}
            `}
            style={{ animationDelay: `${0.4 + i * 0.1}s`, animationFillMode: "forwards" }}
          >
            <div className="bg-[#F97316]/15 p-1.5 rounded-lg">{stat.icon}</div>
            <div>
              <p className="text-[#F97316] font-bold text-sm leading-tight">{stat.value}</p>
              <p className="text-white/70 text-[10px] uppercase tracking-wider">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
