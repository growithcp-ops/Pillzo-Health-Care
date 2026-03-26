import { useState, useEffect } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

export function FloatingElements() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero (approx 600px)
      setShowSticky(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Sticky Book CTA (Bottom Center) */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block"
          >
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="rounded-full shadow-xl shadow-primary/30 px-8 py-6 text-lg font-semibold border-2 border-white/20"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Book a Call Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button (Bottom Right) */}
      <motion.a
        href="https://wa.me/1234567890?text=Hi%2C%20I%20need%20medical%20help"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        {/* Simple pulse effect behind */}
        <div className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-ping opacity-75 duration-1000"></div>
      </motion.a>
    </>
  );
}
