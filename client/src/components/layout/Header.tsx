import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container">
        <div className="flex items-center justify-between h-8 border-b border-gray-800">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@devillixart.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <span className="font-bold text-2xl text-primary tracking-tight">
                Devillixart
              </span>
            </a>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-sm font-medium transition-colors",
                        location === item.href
                          ? "text-primary bg-gray-900"
                          : "text-gray-400 hover:text-primary"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800 md:hidden">
              <nav className="container py-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>
                        <a
                          className={cn(
                            "block px-4 py-2 text-sm rounded-md transition-colors",
                            location === item.href
                              ? "text-primary bg-gray-900"
                              : "text-gray-400 hover:text-primary hover:bg-gray-900/50"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}