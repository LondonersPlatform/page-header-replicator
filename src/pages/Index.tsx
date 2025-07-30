import Activites from "@/components/Activites";
import Destinations from "@/components/Destinations";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Holidays from "@/components/Holidays";
import InspirationsSection from "@/components/InspirationsSection";
import ToursSection from "@/components/TourSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
     
      <HeroSection />
       <Destinations/>
       <Feature/>
       <Holidays/>
       <ToursSection/>
       <Activites/>
       
      <InspirationsSection />
      <Footer/>
    </div>
  );
};

export default Index;
