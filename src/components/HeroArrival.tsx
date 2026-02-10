import React from "react";
import { ArrowDown } from "lucide-react";

const HeroArrival = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-mountain-view.png"
          alt="Cinematic view of the Rocky Mountains at golden hour"
          className="h-full w-full object-cover"
        />
        {/* Scrim/Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 animate-fade-in">
        <span className="text-sm md:text-base text-cream/80 uppercase tracking-[0.3em] mb-6 animate-slide-up [animation-delay:200ms]">
          Welcome to the Wild
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display text-cream mb-8 leading-tight animate-slide-up [animation-delay:400ms]">
          Wildwood <br className="md:hidden" /> Hearth
        </h1>
        <p className="max-w-lg text-lg md:text-xl text-cream/90 font-light leading-relaxed mb-12 animate-slide-up [animation-delay:600ms]">
          A sanctuary of wool, cedar, and silence. <br/>
          Where the Rockies meet refined solitude.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow text-cream/60">
        <span className="text-[10px] uppercase tracking-widest">Discover</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
};

export default HeroArrival;
