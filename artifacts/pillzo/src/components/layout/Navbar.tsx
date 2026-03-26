import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const [location] = useLocation();
  const isOnBlog = location === "/blog";

  const navLinks = [
    { name: "About", id: "about" },
    { name: "How it Works", id: "how-it-works" },
    { name: "Pricing", id: "pricing" },
    { name: "Trust", id: "trust" },
  ];

  const handleNavLink = (id: string) => {
    if (isOnBlog) {
      window.location.href = `/#${id}`;
    } else {
      scrollToId(id);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
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
              <button
                key={link.name}
                onClick={() => handleNavLink(link.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Link href="/blog">
              <span className={`text-sm font-medium transition-colors cursor-pointer ${isOnBlog ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"}`}>
                Blog
              </span>
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button 
              className="hidden md:flex rounded-full px-6 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
              onClick={() => handleNavLink("contact")}
            >
              Book a Call
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
            <button
              key={link.name}
              onClick={() => { handleNavLink(link.id); setMobileMenuOpen(false); }}
              className="text-left px-4 py-3 rounded-xl hover:bg-muted text-foreground font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
            <span className="block text-left px-4 py-3 rounded-xl hover:bg-muted text-foreground font-medium transition-colors cursor-pointer">
              Blog
            </span>
          </Link>
          <Button 
            className="w-full rounded-xl py-6 text-base"
            onClick={() => { handleNavLink("contact"); setMobileMenuOpen(false); }}
          >
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
}
