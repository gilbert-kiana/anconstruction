"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroCards from "./components/HeroCards";
import CTAButton from "./components/CTAButton";

export default function Home() {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
    setVideoEnded(true);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        src="/final.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
      />


      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="absolute top-10 right-10 bottom-10 left-16 md:top-12 md:right-12 md:bottom-12 md:left-20 z-10 flex flex-col justify-end px-4 py-4">
        {/* Bottom Section - CTA, Tagline, and Cards */}
        <div className="relative flex items-end justify-between">
          {/* CTA Button - Left */}
          <CTAButton videoEnded={videoEnded} />

          {/* Tagline - Center */}
          <p
            className={`absolute left-1/2 -translate-x-1/2 bottom-0 text-white text-center max-w-xl text-base md:text-lg leading-relaxed font-medium transition-all duration-500 ease-out ${
              videoEnded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: videoEnded ? "200ms" : "0ms" }}
          >
            With over 25 years of experience, we transform houses into
            homes.
          </p>

          {/* Cards - Right */}
          <HeroCards videoEnded={videoEnded} />
        </div>
      </main>

      {/* Dark overlay outside the border */}
      <div
        className="absolute top-8 right-8 bottom-8 left-14 md:top-10 md:right-10 md:bottom-10 md:left-18 rounded-2xl pointer-events-none"
        style={{ boxShadow: '0 0 0 100vmax rgba(0,0,0,0.25)' }}
      />

      {/* White border frame inside */}
      <div className="absolute top-8 right-8 bottom-8 left-14 md:top-10 md:right-10 md:bottom-10 md:left-18 border-4 border-white rounded-2xl pointer-events-none" />
    </div>
  );
}
