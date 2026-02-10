import React from "react";
import { Compass, Camera, Coffee, Mountain } from "lucide-react";

const LocalExperiences = () => {
  const experiences = [
    {
      icon: Compass,
      title: "Guided Backcountry",
      desc: "Private trekking with expert alpinists."
    },
    {
      icon: Coffee,
      title: "Après Culture",
      desc: "Curated tour of Aspen's best fireside lounges."
    },
    {
      icon: Camera,
      title: "Alpine Photography",
      desc: "Capture the golden hour with resident artists."
    },
    {
      icon: Mountain,
      title: "Summit Yoga",
      desc: "Sunrise practice at 11,000 feet."
    }
  ];

  return (
    <section className="py-32 bg-obsidian relative overflow-hidden">
       {/* Background texture/pattern could go here */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

       <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
             <span className="text-sienna uppercase tracking-widest text-xs font-bold mb-4 block">Local Curation</span>
             <h2 className="text-4xl md:text-5xl font-display text-cream mb-6">Beyond the Lodge</h2>
             <p className="text-cream/70 font-light">
               We don't just offer a bed. We offer a key to the hidden side of the mountain.
               Exclusive access to experiences reserved for the locals.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {experiences.map((exp, idx) => (
                <div key={idx} className="group p-8 border border-white/5 hover:border-sienna/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 rounded-sm flex flex-col items-center text-center">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-sienna mb-6 group-hover:scale-110 transition-transform">
                      <exp.icon className="w-5 h-5" />
                   </div>
                   <h3 className="text-xl font-display text-cream mb-3">{exp.title}</h3>
                   <p className="text-sm text-cream/60 leading-relaxed">{exp.desc}</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default LocalExperiences;
