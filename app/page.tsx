"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroCards from "./components/HeroCards";
import CTAButton from "./components/CTAButton";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Layer 0: Dark background */}

      {/* Layer 1: Orange radial glow */}
      <div className="absolute inset-0 z-0 orange-glow" />

      {/* Layer 2: Large headline text behind fighter */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none select-none">
        <div
          className={`text-center opacity-0 ${visible ? "animate-fade-in-scale" : ""}`}
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <h1
            className="font-black uppercase leading-[0.85] tracking-tighter text-transparent"
            style={{ fontSize: "clamp(60px, 14vw, 260px)", WebkitTextStroke: "2px rgba(255, 255, 255, 0.45)" }}
          >
            NAK MUAY
            <br />
            FOUNDATION
          </h1>
        </div>
      </div>

      {/* Subtitle text above fighter */}
      <div className="absolute inset-x-0 top-[12vh] md:top-[14vh] z-[3] flex justify-center pointer-events-none select-none">
        <p
          className={`text-white/50 text-sm md:text-base uppercase tracking-widest text-center opacity-0 ${visible ? "animate-fade-in-scale" : ""}`}
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          A nonprofit supporting Muay Thai athletes and communities worldwide
        </p>
      </div>

      {/* Layer 3: Fighter image */}
      <div className="absolute inset-0 z-[2] flex items-end justify-center pointer-events-none">
        <div
          className={`relative opacity-0 ${visible ? "animate-fade-in-up" : ""}`}
          style={{
            animationDelay: "0.2s",
            animationFillMode: "forwards",
            filter: "drop-shadow(0 0 1px #F97316) drop-shadow(0 0 1px #F97316) drop-shadow(0 0 1px #F97316) drop-shadow(0 0 2px #F97316)",
          }}
        >
          <Image
            src="/muay thai hero section.png"
            alt="Muay Thai Fighter"
            width={700}
            height={900}
            className="h-[70vh] md:h-[80vh] lg:h-[85vh] w-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Layer 4: Floating stat cards */}
      <HeroCards visible={visible} />

      {/* Bottom gradient overlay for CTA readability */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[5] pointer-events-none"
        style={{
          height: "35vh",
          background: "linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.9) 100%)",
        }}
      />

      {/* Layer 5: Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-8 pb-8 md:px-12 md:pb-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Social proof - left */}
          <div
            className={`opacity-0 ${visible ? "animate-fade-in-left" : ""}`}
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
              Founded 2020
            </p>
            <p className="text-white text-sm font-medium">
              Global Muay Thai Outreach
            </p>
            <p className="text-white/50 text-xs mt-1">
              5+ Countries &middot; 50+ Athletes Supported
            </p>
          </div>

          {/* CTAs - right */}
          <CTAButton visible={visible} />
        </div>
      </div>

      {/* Layer 6: Navbar */}
      <Navbar />
    </div>
  );
}
