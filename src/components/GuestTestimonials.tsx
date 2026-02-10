import React from "react";
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const GuestTestimonials = () => {
  const testimonials = [
    {
      quote: "It felt less like a hotel and more like the mountain home I always wished I had. The silence is profound.",
      author: "Elena R.",
      location: "New York City"
    },
    {
      quote: "Wildwood Hearth mastered the art of 'undone' luxury. Everything is high-end, but nothing feels fragile.",
      author: "Marcus T.",
      location: "London"
    },
    {
      quote: "Waking up to that view, with the smell of cedar and coffee... I've never felt more grounded.",
      author: "Sarah J.",
      location: "Austin"
    }
  ];

  return (
    <section className="py-32 bg-[#161514] text-cream">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <Star className="w-12 h-12 text-sienna/50" />
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx}>
                <div className="flex flex-col items-center text-center p-6">
                  <blockquote className="text-2xl md:text-4xl font-display leading-normal mb-10 text-cream/90">
                    "{t.quote}"
                  </blockquote>
                  <cite className="not-italic flex flex-col items-center">
                    <span className="font-bold text-sienna tracking-widest text-sm uppercase">{t.author}</span>
                    <span className="text-xs text-cream/40 mt-1">{t.location}</span>
                  </cite>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
             <CarouselPrevious className="border-white/10 bg-transparent text-cream hover:bg-white/10 hover:text-cream" />
             <CarouselNext className="border-white/10 bg-transparent text-cream hover:bg-white/10 hover:text-cream" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default GuestTestimonials;
