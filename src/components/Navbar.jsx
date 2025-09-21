import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeDropdown from "./ThemeDropdown";


const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

  return (
    <nav className="sticky top-0 z-20 w-full border-secondary/20 bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/*Logo*/}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gimhani Hansika
            </Link>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm md:text-lg font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                        ? "text-[#E3F7A8] bg-primary/10"
                        : "text-foreground hover:bg-secondary/10"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          
            {/* Theme toggle dropdown */}
            <ThemeDropdown />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeDropdown/>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:bg-secondary/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>      
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-secondary/10 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
