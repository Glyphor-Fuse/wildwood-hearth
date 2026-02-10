import React from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        {/* Left: Mobile Menu Trigger (hidden on desktop for simplicity, or functional) */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/stay" className="text-sm uppercase tracking-widest text-cream/80 hover:text-white transition-colors">Stay</Link>
          <Link to="/dining" className="text-sm uppercase tracking-widest text-cream/80 hover:text-white transition-colors">Dining</Link>
          <Link to="/experiences" className="text-sm uppercase tracking-widest text-cream/80 hover:text-white transition-colors">Experiences</Link>
        </div>

        <button className="md:hidden text-cream">
            <Menu className="w-6 h-6" />
        </button>

        {/* Center: Logo */}
        <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/images/brand-logo.png" 
            alt="Wildwood Hearth" 
            className="h-12 md:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <button className="text-cream/80 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/journal" className="hidden md:block text-sm uppercase tracking-widest text-cream/80 hover:text-white transition-colors">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
