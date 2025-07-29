import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCoupleDoc from "@/assets/hero-couple-dock.jpg";
import heroBungalows from "@/assets/hero-bungalows.jpg";
import heroMountainSafari from "@/assets/hero-mountain-safari.jpg";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              It's A Big World Out There,{" "}
              <span className="text-primary">Go Explore!</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
              Making your travel dreams real with top flight deals tailored
              to your budget and preferences.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-orange hover:bg-orange/90 text-orange-foreground rounded-full px-8 py-6 text-base sm:text-lg font-medium group"
          >
            get personalized offer
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right Image Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left - Couple on dock */}
            <div className="aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden">
              <img
                src={heroCoupleDoc}
                alt="Couple walking to overwater bungalows"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right - Mountain safari landscape */}
            <div className="aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden row-span-2">
              <img
                src={heroMountainSafari}
                alt="Mountain safari landscape"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left - Overwater bungalows */}
            <div className="aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden">
              <img
                src={heroBungalows}
                alt="Luxury overwater bungalows"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl lg:rounded-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;