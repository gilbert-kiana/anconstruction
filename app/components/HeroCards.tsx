import Link from "next/link";
import Image from "next/image";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

interface HeroCardsProps {
  videoEnded?: boolean;
}

export default function HeroCards({ videoEnded = false }: HeroCardsProps) {
  return (
    <div className="flex flex-col gap-4 w-[280px]">
      {/* Card 1 - Our Latest Projects */}
      <Link
        href="/projects"
        className={`relative overflow-hidden rounded-2xl bg-white shadow-lg group cursor-pointer border-4 border-white transition-all duration-500 ease-out ${
          videoEnded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
        style={{ transitionDelay: videoEnded ? "0ms" : "0ms" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative p-5 h-[257px] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="text-white font-bold text-xl leading-tight">
              Our Latest
              <br />
              Projects
            </h3>
            <span className="bg-[#e68b5d] p-2 rounded-lg group-hover:bg-[#d47a4c] transition-colors">
              <ArrowIcon className="text-white w-5 h-5" />
            </span>
          </div>
        </div>
      </Link>

      {/* Card 2 - Meet Our Experts */}
      <Link
        href="/about"
        className={`relative overflow-visible rounded-2xl bg-white shadow-lg group cursor-pointer transition-all duration-500 ease-out ${
          videoEnded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
        style={{ transitionDelay: videoEnded ? "200ms" : "0ms" }}
      >
        <div className="relative p-5 h-[210px] flex flex-col justify-between">
          <h3 className="text-[#2a306d] font-bold text-2xl leading-tight">
            Meet
            <br />
            Our Experts
          </h3>
          <span className="bg-[#e68b5d] p-2 rounded-lg group-hover:bg-[#d47a4c] transition-colors w-fit">
            <ArrowIcon className="text-white w-4 h-4" />
          </span>
        </div>
        {/* Professional image overlapping on top */}
        <Image
          src="/proffesional.png"
          alt="Our Expert"
          width={250}
          height={300}
          className="absolute right-0 bottom-0 h-[250px] w-auto object-contain"
        />
      </Link>

      {/* Card 3 - Feature Badge */}
      <div
        className={`bg-[#e68b5d] rounded-2xl p-6 flex items-center gap-4 shadow-lg transition-all duration-500 ease-out ${
          videoEnded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
        style={{ transitionDelay: videoEnded ? "400ms" : "0ms" }}
      >
        <div className="bg-white/20 p-3 rounded-lg">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <p className="text-white font-bold text-base">AN Contractors</p>
          <p className="text-white/90 text-sm">Free Quotes</p>
        </div>
      </div>
    </div>
  );
}
