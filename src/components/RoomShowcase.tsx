import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const RoomShowcase = () => {
  const rooms = [
    {
      title: "The Hearth Suites",
      desc: "Central fireplace, aged leather, and valley views.",
      image: "/images/room-interior-01.png",
      span: "md:col-span-2",
    },
    {
      title: "Alpine Lofts",
      desc: "Split-level seclusion for the creative spirit.",
      image: "/images/room-interior-02.png",
      span: "md:col-span-1",
    },
    {
      title: "Cedar Cabins",
      desc: "Detached private dwellings amongst the pines.",
      image: "/images/room-interior-03.png",
      span: "md:col-span-1",
    },
    {
      title: "The Owner’s Lodge",
      desc: "Unrivaled space. The pinnacle of Wildwood.",
      image: "/images/room-interior-04.png",
      span: "md:col-span-2",
    },
  ];

  return (
    <section className="py-24 bg-obsidian text-cream px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-sienna uppercase tracking-widest text-xs font-bold mb-4 block">The Quarters</span>
            <h2 className="text-4xl md:text-5xl font-display leading-tight">
              Sleep Amongst <br/> the Elements
            </h2>
          </div>
          <Button variant="link" className="text-cream hover:text-sienna mt-6 md:mt-0 p-0 h-auto group">
            View All Rooms <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {rooms.map((room, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-sm h-[400px] md:h-[500px] ${room.span}`}
            >
              <img 
                src={room.image} 
                alt={room.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-display mb-2">{room.title}</h3>
                <p className="text-cream/70 text-sm max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {room.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;
