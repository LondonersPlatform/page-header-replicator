import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import karibuLogo from "@/assets/Karibu.png";

const Header = () => {
  const navigationItems = [
    { label: "Home", href: "#", active: true },
    { label: "About", href: "#" },
    { label: "Activities", href: "#" },
    { label: "Destinations", href: "#" },
    { label: "Tours", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <header className="bg-background border-b border-border/40 sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img 
              src={karibuLogo} 
              alt="Karibu Logo" 
              className="  scale-75"
            />
       
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm xl:text-base transition-colors hover:text-[#F3842D] ${
                  item.active
                    ? "text-[#F3842D] font-medium"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Selector - Hidden on small screens */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 hidden sm:flex">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">EN</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Button variant="outline" size="sm" className="hidden rounded-full md:inline-flex">
                Sign Up
              </Button>
              <Button size="sm" className="text-orange-foreground bg-[#F3842D] p-5  rounded-full hover:bg-orange/90">
                Sign In
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`text-base transition-colors hover:text-[#F3842D] ${
                          item.active
                            ? "text-[#F3842D] font-medium"
                            : "text-foreground/80"
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  
                  {/* Mobile Language Selector */}
                  <div className="border-t pt-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            <span>English</span>
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuItem>English</DropdownMenuItem>
                        <DropdownMenuItem>Français</DropdownMenuItem>
                        <DropdownMenuItem>Español</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col space-y-3 pt-4">
                    <Button variant="outline">Sign Up</Button>
                    <Button className="bg-orange text-orange-foreground hover:bg-orange/90">
                      Sign In
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile Sign In Button */}
            <Button size="sm" className="sm:hidden bg-orange text-orange-foreground hover:bg-orange/90">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;