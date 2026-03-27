import { type ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingElements } from "@/components/FloatingElements";

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const timer = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col w-full bg-background relative selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <FloatingElements />
    </div>
  );
}
