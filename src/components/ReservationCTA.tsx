import React from "react";
import { Button } from "@/components/ui/button";

const ReservationCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/reservation-hero.png" 
          alt="Cozy cabin interior at night" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-display text-cream mb-8">
          The Mountains Are Calling
        </h2>
        <p className="text-lg text-cream/70 max-w-2xl mx-auto mb-12 font-light">
          Seasonal availability is limited. Secure your sanctuary for the upcoming winter season.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-sienna hover:bg-sienna/90 text-white px-10 py-8 text-sm uppercase tracking-widest rounded-sm">
            Book Your Stay
          </Button>
          <Button variant="outline" className="border-cream/20 text-cream hover:bg-white/5 hover:text-white px-10 py-8 text-sm uppercase tracking-widest rounded-sm">
            Contact Concierge
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
