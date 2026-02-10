import React from "react";
import { Button } from "@/components/ui/button";

const DiningExperience = () => {
  return (
    <section className="py-24 bg-[#1a1917] text-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1 space-y-8">
            <span className="text-sienna uppercase tracking-widest text-xs font-bold">Hearth & Table</span>
            <h2 className="text-4xl md:text-6xl font-display leading-tight">
              Flavors of the <br/> High Altitude
            </h2>
            <div className="space-y-6 text-lg font-light text-cream/80 leading-relaxed">
              <p>
                Our kitchen is guided by the seasons of the Rockies. We source wild game,
                foraged roots, and mountain herbs to create a menu that tastes like the landscape itself.
              </p>
              <p>
                Breakfast is slow and sun-drenched. Dinner is an event—fire-roasted, communal,
                and paired with a cellar of high-altitude wines.
              </p>
            </div>
            
            <div className="pt-4 grid grid-cols-2 gap-8 border-t border-white/10">
               <div>
                  <h4 className="font-display text-xl mb-2">Morning</h4>
                  <p className="text-sm text-cream/60">7:00 AM — 11:00 AM</p>
               </div>
               <div>
                  <h4 className="font-display text-xl mb-2">Evening</h4>
                  <p className="text-sm text-cream/60">5:30 PM — 10:00 PM</p>
               </div>
            </div>

            <Button className="bg-transparent border border-cream/20 hover:bg-cream hover:text-obsidian text-cream rounded-none px-8 py-6 uppercase tracking-widest text-xs transition-all mt-8">
              Explore the Menu
            </Button>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
             <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img 
                  src="/images/dining-hero.png" 
                  alt="Plating of wild game and herbs" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
             </div>
             {/* Decor element */}
             <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-pine/20 backdrop-blur-sm -z-10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningExperience;
