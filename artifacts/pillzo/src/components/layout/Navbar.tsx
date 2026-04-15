import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createWhatsAppUrl } from "@/lib/contact";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        setIsScrolled((current) => {
          const next = window.scrollY > 20;
          return current === next ? current : next;
        });
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [location] = useLocation();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Corporate", href: "/#corporate" },
    { name: "Doctor at Home", href: "/#doctor-at-home" },
    { name: "Pharmacy", href: "/pharmacy" },
    { name: "Appointments", href: "/appointments" },
  ];



  const isActiveLink = (href: string) => location === href;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    
    // Check if it's an anchor link on the current page
    if (href.startsWith("/#") && (location === "/")) {
      e.preventDefault();
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL hash without jumping
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-primary/10 p-2 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <HeartPulse className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-foreground tracking-tight">Pillzo</span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-primary leading-none">Health & Simplified</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isActiveLink(link.href)
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex rounded-full px-6 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all">
              <a
                href={createWhatsAppUrl("Hi, I want to book a doctor appointment with Pillzo.")}
                target="_blank"
                rel="noreferrer"
              >
                Book Appointment
              </a>
            </Button>
            
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 origin-top overflow-hidden ${
        mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0"
      }`}>
        <div className="flex flex-col p-4 space-y-4 border-t border-border/50">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block text-left px-4 py-3 rounded-xl font-medium transition-colors cursor-pointer ${
                  isActiveLink(link.href)
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-foreground"
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button asChild className="w-full rounded-xl py-6 text-base">
            <a
              href={createWhatsAppUrl("Hi, I want to book a doctor appointment with Pillzo.")}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </Button>
        </div>
      </div>
    </header>

  );
}
