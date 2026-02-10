import { useState } from 'react';
import { format } from "date-fns";
import { Calendar, Check, ChevronDown, ChevronUp, CloudSnow, Star, Thermometer, Wind } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";

const SignatureQuickBook = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  // Mock "Vibe" Data
  const vibeData = {
    temp: "24°F",
    condition: "Light Snow",
    mood: "Fireplace Ready",
    icon: CloudSnow,
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-0 flex justify-center pointer-events-none">
      <div 
        className={cn(
          "w-full max-w-5xl bg-obsidian/95 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-500 ease-out pointer-events-auto",
          isOpen ? "rounded-t-xl" : "rounded-full"
        )}
      >
        {/* Collapsed State Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between p-2 pl-6 pr-2 gap-4">
          
          {/* Vibe Indicator */}
          <div className="flex items-center gap-4 text-cream/80 hidden md:flex">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
              <vibeData.icon className="w-4 h-4 text-sienna" />
              <span className="text-sm font-medium tracking-wide">{vibeData.mood}</span>
            </div>
            <span className="text-xs uppercase tracking-widest opacity-60 flex items-center gap-1">
              <Thermometer className="w-3 h-3" /> Aspen, CO
            </span>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
            <div className="md:hidden flex items-center gap-2 text-cream/80">
               <vibeData.icon className="w-4 h-4 text-sienna" />
               <span className="text-sm">{vibeData.mood}</span>
            </div>

            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[140px] justify-start text-left font-normal bg-transparent border-white/10 text-cream hover:bg-white/5 hover:text-cream hidden sm:flex",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? format(date, "MMM dd") : <span>Arrival</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-obsidian border-white/10" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="bg-obsidian text-cream"
                  />
                </PopoverContent>
              </Popover>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button 
                    size="lg" 
                    className="rounded-full bg-sienna hover:bg-sienna/90 text-white font-serif tracking-wide px-8 transition-all hover:scale-105"
                  >
                    Check Availability
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[85vh] bg-obsidian border-t-white/10 text-cream p-0">
                  <div className="max-w-7xl mx-auto h-full flex flex-col">
                    <SheetHeader className="px-8 py-8 border-b border-white/10">
                      <SheetTitle className="text-4xl font-display text-cream">Select Your Sanctuary</SheetTitle>
                      <SheetDescription className="text-cream/60 text-lg">
                        Current Vibe: {vibeData.mood} &bull; {vibeData.temp} &bull; {vibeData.condition}
                      </SheetDescription>
                    </SheetHeader>
                    
                    <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                       {/* Mock Availability Content */}
                       {[1, 2, 3].map((i) => (
                         <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-black/40 border border-white/10 hover:border-sienna/50 transition-colors">
                            <img 
                              src={`/images/room-interior-0${i}.png`} 
                              alt="Room view" 
                              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h3 className="text-2xl font-display mb-2">The Alpine Suite {i}</h3>
                              <p className="text-sm text-cream/70 mb-4 line-clamp-2">Wood-burning stove, panoramic valley views, and heated slate floors.</p>
                              <div className="flex justify-between items-center">
                                <span className="text-lg font-medium">$850<span className="text-sm text-cream/50">/night</span></span>
                                <Button size="sm" variant="outline" className="border-cream/20 text-cream hover:bg-sienna hover:border-sienna">Select</Button>
                              </div>
                            </div>
                         </div>
                       ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureQuickBook;
