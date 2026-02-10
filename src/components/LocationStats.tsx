import React from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const LocationStats = () => {
  return (
    <section className="bg-black text-cream/60 py-20 border-t border-white/5 mb-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <img src="/images/brand-logo.png" alt="Wildwood Hearth" className="h-8 w-auto opacity-70" />
          <p className="text-sm leading-relaxed">
            A luxury boutique hotel in the heart of the Rockies.
            Refined solitude for the modern traveler.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-white font-display text-lg">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-sienna" />
              <span>412 Alpine Ridge, Aspen, CO 81611</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-sienna" />
              <span>+1 (970) 555-0199</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-sienna" />
              <span>stay@wildwoodhearth.com</span>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-white font-display text-lg">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-sienna transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-sienna transition-colors">Rooms & Suites</a></li>
            <li><a href="#" className="hover:text-sienna transition-colors">Dining</a></li>
            <li><a href="#" className="hover:text-sienna transition-colors">Press</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h4 className="text-white font-display text-lg">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sienna transition-colors text-white">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sienna transition-colors text-white">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sienna transition-colors text-white">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-xs text-center md:text-left flex flex-col md:flex-row justify-between">
        <span>© 2024 Wildwood Hearth. All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0 justify-center md:justify-end">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </section>
  );
};

export default LocationStats;
