import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Gimhani Hansika
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm md:text-lg font-medium transition-colors ${
                    location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-secondary/10"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
