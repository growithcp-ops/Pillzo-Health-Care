import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function Founders() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Built by people who care
          </h2>
          <p className="text-xl font-medium text-primary italic">
            "We built Pillzo because we believe no one should ever feel alone in a medical crisis."
          </p>
        </div>

        <div className="grid grid-cols-1 max-w-2xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-none shadow-none bg-transparent group">
              <div className="aspect-square rounded-3xl overflow-hidden mb-6 bg-muted relative">
                {/* Fallback pattern while loading */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px]"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}images/ceo.jpeg`}
                  alt="Sandeep Ray"
                  className="w-full h-full object-cover object-top relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold font-display text-foreground mb-1">Sandeep Ray</h3>
              <p className="text-primary font-medium mb-3">Founder</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Driven by a personal experience with a broken healthcare system, Sandeep is passionate about making immediate, quality healthcare accessible and stress-free for everyone.
              </p>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
