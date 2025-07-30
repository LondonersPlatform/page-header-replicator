import { FC } from "react";
import { Mail, Phone, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import imglogo from "@/assets/Karibu.png"
import paypal from "@/assets/pay.svg"
import Stripe from "@/assets/stripe.svg"
import Skrill from "@/assets/s.svg"

import Mastercard from "@/assets/c.svg"
const Footer: FC = () => {
  return (
    <footer className="bg-[#FFF6F2] m-8 rounded ">
      <div className="container mx-auto px-4">
        {/* Top Row */}

<div className=" py-6 flex justify-between w-full">
    <p className=" font-medium">
              Speak to our expert at{" "}
              <span className="text-orange-500 font-semibold">
                1-800-453-6744
              </span>
            </p>
             {/* Follow Us */}
        <div className="flex justify-end gap-4 text-gray-700">
          <span className="font-medium">Follow Us</span>
          <Facebook className="w-5 h-5 text-[#F3842D] cursor-pointer" />
          <Instagram className="w-5 h-5 text-[#F3842D] cursor-pointer" />
          <Youtube className="w-5 h-5  text-[#F3842D] cursor-pointer" />
          <Twitter className="w-5 h-5 text-[#F3842D] cursor-pointer" />
        </div>
</div>

        <div className="flex border-t-1 py-2 flex-col lg:flex-row justify-between items-start gap-8">
          {/* Contact Section */}
          <div className="max-w-xs">
        

            <div className="mb-4">
              <img
                src={imglogo}
                alt="Karibu Logo"
                className="h-12 w-auto"
              />
            </div>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@karibu.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +1 800 123 4567
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Mon–Sat, 9AM–6PM
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">About Karibu</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Our Story</li>
                <li>Our Team</li>
                <li>Sustainability</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Refund Policy</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Helpful Links</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Destinations</li>
                <li>Tours</li>
                <li>Blog</li>
                <li>FAQs</li>
                <li>Partner with Us</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm w-full">
   
            <h4 className="font-semibold mb-3">Newsletter</h4>
            <div className="flex gap-2 mb-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
              />
              <Button className="bg-orange-400 hover:bg-orange-500">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-xs">
              Your email is safe with us.{" "}
              <span className="underline cursor-pointer">privacy policy</span>
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex py-6 flex-col lg:flex-row justify-between items-center mt-10 border-t border-gray-200 pt-6">
          <p className="text-gray-600 text-sm">
            © Copyright Karibu 2024
          </p>

          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            {/* Payment Icons */}
            <img src={paypal} alt="PayPal" className="h-6" />
            <img src={Stripe} alt="Stripe" className="h-6" />
            <img src={Mastercard} alt="Mastercard" className="h-6" />
            <img src={Skrill} alt="Skrill" className="h-6" />
          </div>
        </div>

    
      </div>
    </footer>
  );
};

export default Footer;
