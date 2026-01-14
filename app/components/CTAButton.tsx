import Link from "next/link";

interface CTAButtonProps {
  videoEnded?: boolean;
}

export default function CTAButton({ videoEnded = false }: CTAButtonProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 transition-all duration-500 ease-out ${
        videoEnded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
      }`}
    >
      {/* Text Button */}
      <Link
        href="/contact"
        className="relative bg-white text-[#2a306d] px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:bg-gray-100 transition-colors"
      >
        <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
        <span className="relative">Start Your Project</span>
      </Link>

      {/* Separate Arrow Button */}
      <Link
        href="/contact"
        className="bg-[#e68b5d] p-3 rounded-full shadow-lg hover:bg-[#d47a4c] transition-colors"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </Link>
    </div>
  );
}
