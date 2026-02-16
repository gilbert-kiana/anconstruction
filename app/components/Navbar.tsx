"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Mission", href: "/mission" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12 md:py-8">
      {/* Logo */}
      <Link href="/" className="flex items-baseline gap-1.5">
        <span className="text-[#F97316] font-black text-xl tracking-tight">
          NAK MUAY
        </span>
        <span className="text-white font-semibold text-xl tracking-tight">
          FOUNDATION
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive
                  ? "text-white"
                  : "text-white/60 hover:text-[#F97316]"
              }`}
            >
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              )}
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* CTA Button */}
      <Link
        href="/donate"
        className="bg-[#F97316] text-[#0a0a0a] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#ea6c0e] transition-colors"
      >
        DONATE NOW
      </Link>
    </nav>
  );
}
