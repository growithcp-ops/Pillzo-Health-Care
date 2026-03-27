import { useState, useEffect } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { createWhatsAppUrl } from "@/lib/contact";

export function FloatingElements() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        // Show sticky CTA after scrolling past hero (approx 600px)
        setShowSticky((current) => {
          const next = window.scrollY > 600;
          return current === next ? current : next;
        });
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Book CTA (Bottom Center) */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full shadow-xl shadow-primary/30 px-8 py-6 text-lg font-semibold border-2 border-white/20"
            >
              <a
                href={createWhatsAppUrl("Hi, I want to book a doctor appointment with Pillzo.")}
                target="_blank"
                rel="noreferrer"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Book Appointment
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button (Bottom Right) */}
      <motion.a
        href={createWhatsAppUrl("Hi, I need help with a medicine order or doctor appointment.")}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </motion.a>
    </>
  );
}
