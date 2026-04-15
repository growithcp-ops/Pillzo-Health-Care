import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const clients = [
  { name: "Applo", logo: "/applo-removebg-preview.png" },
  { name: "Bakhu", logo: "/bakhu-removebg-preview.png" },
  { name: "HDFC", logo: "/hdfc-removebg-preview.png" },
  { name: "Jindal", logo: "/jindal-removebg-preview.png" },
  { name: "Mayfair", logo: "/mayfair-removebg-preview.png" },
  { name: "Odisha", logo: "/odisha-removebg-preview.png" },
  { name: "Rouk", logo: "/rouk-removebg-preview.png" },
  { name: "SAIL", logo: "/sail-removebg-preview.png" },
  { name: "Toyota", logo: "/toyata-removebg-preview.png" },
];


export function Clients() {
  return (
    <section className="py-24 bg-muted/20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Trusted by the Best
          </h2>
          <div className="h-1.5 w-20 bg-primary/30 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Join the network of industry leaders who rely on Pillzo for modern healthcare logistics and management.
          </p>
        </motion.div>

        <div className="relative mt-12">
          {/* Faded edges for seamless marquee */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-muted/20 via-muted/10 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-muted/20 via-muted/10 to-transparent pointer-events-none" />
          
          <div className="flex gap-16 items-center animate-marquee whitespace-nowrap py-8">
            {/* Double the array for seamless infinite scroll */}
            {[...clients, ...clients].map((client, idx) => {
              const isHDFC = client.name === "HDFC";
              return (
                <motion.div
                  key={`${client.name}-${idx}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={cn(
                    "flex items-center justify-center transition-all duration-500 px-8 py-6 rounded-[2.5rem] border shadow-[0_8px_30px_rgb(0,0,0,0.04)] min-w-[320px] backdrop-blur-md",
                    isHDFC 
                      ? "bg-blue-600 border-blue-500 shadow-blue-500/20" 
                      : "bg-white/80 border-white shadow-black/5"
                  )}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-32 w-auto object-contain max-w-[260px]"
                  />
                </motion.div>

              );
            })}
          </div>


        </div>
      </div>


      {/* Decorative background elements */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[40%] h-[60%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[40%] h-[60%] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}

