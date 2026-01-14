"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-10 left-16 right-10 z-50 flex items-center justify-between px-4 py-4 md:top-12 md:left-20 md:right-12">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="AN Contractors Logo"
          width={240}
          height={80}
          className="h-20 w-auto"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 text-base font-medium transition-colors ${
                isActive ? "text-white" : "text-white/80 hover:text-[#e68b5d]"
              }`}
            >
              {isActive && (
                <span className="w-2 h-2 rounded-full bg-[#e68b5d]" />
              )}
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* CTA Button */}
      <Link
        href="/contact"
        className="bg-white text-[#2a306d] px-8 py-3 rounded-full text-base font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Started
      </Link>
    </nav>
  );
}
