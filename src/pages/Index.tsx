import { useEffect } from 'react';
import Navigation from "@/components/Navigation";
import HeroArrival from "@/components/HeroArrival";
import RoomShowcase from "@/components/RoomShowcase";
import DiningExperience from "@/components/DiningExperience";
import LocalExperiences from "@/components/LocalExperiences";
import GuestTestimonials from "@/components/GuestTestimonials";
import ReservationCTA from "@/components/ReservationCTA";
import LocationStats from "@/components/LocationStats";
import SignatureQuickBook from "@/components/SignatureQuickBook";

const Index = () => {
  useEffect(() => {
    // Force dark mode class on html element for good measure
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-cream font-sans selection:bg-sienna selection:text-white">
      <Navigation />
      <main>
        <HeroArrival />
        <RoomShowcase />
        <DiningExperience />
        <LocalExperiences />
        <GuestTestimonials />
        <ReservationCTA />
        <LocationStats />
      </main>
      <SignatureQuickBook />
    </div>
  );
};

export default Index;
