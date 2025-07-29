import { Separator } from "@/components/ui/separator";
import karibuLogo from "@/assets/karibu-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-8 lg:mb-0">
            <p className="text-sm text-muted-foreground mb-1">Speak to our expert at</p>
            <p className="text-orange-500 font-semibold">1-800-453-6744</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-2">Follow Us</p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">ig</span>
              </div>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">in</span>
              </div>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">yt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <img src={karibuLogo} alt="Karibu" className="h-12 mb-6" />
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>✉ hello@karibu.com</p>
              <p>📞 +1 800 123 4567</p>
              <p>🕒 Mon–Sat, 9AM–6PM</p>
            </div>
          </div>

          {/* About Karibu */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">About Karibu</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Our Story</a></li>
              <li><a href="#" className="hover:text-foreground">Our Team</a></li>
              <li><a href="#" className="hover:text-foreground">Sustainability</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground">Refund Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Cookie Preferences</a></li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Helpful Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Destinations</a></li>
              <li><a href="#" className="hover:text-foreground">Tours</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
              <li><a href="#" className="hover:text-foreground">FAQs</a></li>
              <li><a href="#" className="hover:text-foreground">Partner with Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <div className="flex gap-2 mb-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background"
              />
              <button className="px-4 py-2 bg-orange-500 text-white text-sm rounded-md hover:bg-orange-600">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              Your email is safe with us. <a href="#" className="text-orange-500 hover:underline">privacy policy</a>
            </p>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 lg:mb-0">
            © Copyright Karibu 2024
          </p>
          
          {/* Payment Methods */}
          <div className="flex items-center space-x-4">
            <div className="px-3 py-1 bg-white rounded shadow-sm">
              <span className="text-blue-600 font-bold text-sm">PayPal</span>
            </div>
            <div className="px-3 py-1 bg-white rounded shadow-sm">
              <span className="text-purple-600 font-bold text-sm">stripe</span>
            </div>
            <div className="px-3 py-1 bg-white rounded shadow-sm flex items-center space-x-1">
              <div className="w-4 h-3 bg-red-500 rounded-sm"></div>
              <div className="w-4 h-3 bg-yellow-400 rounded-sm"></div>
            </div>
            <div className="px-3 py-1 bg-white rounded shadow-sm">
              <span className="text-purple-600 font-bold text-sm">Skrill</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;