import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InspirationsSection from "@/components/InspirationsSection";
import ToursSection from "@/components/ToursSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <InspirationsSection />
      <ToursSection />
      <Footer />
    </div>
  );
};

export default Index;
