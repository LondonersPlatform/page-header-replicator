import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import karibuLogo from "@/assets/karibu-logo.png";

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
    <header className="bg-background border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img 
              src={karibuLogo} 
              alt="Karibu Logo" 
              className="h-10 w-10 lg:h-12 lg:w-12"
            />
            <div className="flex flex-col">
              <h1 className="text-xl lg:text-2xl font-bold text-primary">
                KARIBU
              </h1>
              <p className="text-xs lg:text-sm text-muted-foreground leading-tight">
                Unveiling the Wonders of Africa
              </p>
            </div>
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm lg:text-base transition-colors hover:text-primary ${
                  item.active
                    ? "text-primary font-medium"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
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
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                Sign Up
              </Button>
              <Button size="sm" className="bg-orange text-orange-foreground hover:bg-orange/90">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;