import { Check } from "lucide-react";
import tourMountainPagoda from "@/assets/img1.png";
import tourWomenCliffs from "@/assets/img2.png";
import tourFishingBeach from "@/assets/img3.png";
import tourCarCelebration from "@/assets/img4.png";
import correct from "@/assets/correct.svg";
import imglogo from "@/assets/Karibu.png"
import paypal from "@/assets/pay.svg"
import Stripe from "@/assets/stripe.svg"
import Skrill from "@/assets/s.svg"

import Mastercard from "@/assets/c.svg"
const ToursSection = () => {
  const features = [
    "Security Assurance",
    "Customer Support", 
    "Transparent Policies",
    "Reputable Affiliations"
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={tourMountainPagoda} 
                alt="Mountain pagoda landscape"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src={tourFishingBeach} 
                alt="Beach fishing scene"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src={tourWomenCliffs} 
                alt="Women on cliffs"
                className="w-full h-56 object-cover rounded-lg"
              />
              <img 
                src={tourCarCelebration} 
                alt="Car celebration"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Airplane Trail */}
            <div className="relative">
<div className=" flex w-auto">

                <div className="text-sm text-muted-foreground bg-[#F2F4F6] text-black font-semibold w-auto rounded-full p-3
                 ">Easy payment</div>
</div>
              <div className="absolute -top-2 right-0 opacity-20">
                <svg width="200" height="80" viewBox="0 0 200 80" fill="none">
                  <path d="M10 40C50 20, 100 60, 150 30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                  <path d="M145 25L155 30L150 35" fill="currentColor"/>
                  <path d="M75 55L85 60L80 65" fill="currentColor"/>
                  <path d="M25 35L35 40L30 45" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                We offer tours in a range of locations
              </h2>
              <p className="text-muted-foreground text-lg">
                Choose one style or create a package, fill your passports with adventures together.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6  rounded-full flex items-center justify-center">
                    <img src={correct}/>
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Payment Section */}
            <div>
              <p className="text-foreground font-semibold mb-4">Payment is secure and safe</p>
              <div className="flex items-center space-x-2">
  <img
    src={paypal}
    alt="PayPal"
    className="w-32  h-16 bg-white rounded-lg  p-2 object-contain"
  />
  <img

    src={Stripe}
    alt="Stripe"
    className="w-32  h-16 bg-white rounded-lg  p-2 object-contain"
  />
  <img
    src={Mastercard}
    alt="MasterCard and Visa"
    className="w-32  h-16 bg-white rounded-lg p-2 object-contain"
  />
  <img
    src={Skrill}
    alt="Skrill"
    className="w-32  h-16 bg-white rounded-lg  p-2 object-contain"
  />
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;