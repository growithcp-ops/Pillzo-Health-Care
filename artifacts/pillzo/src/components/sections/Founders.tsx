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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <Card className="overflow-hidden border-none shadow-none bg-transparent group w-full">
              <div className="aspect-square rounded-[3rem] overflow-hidden mb-8 bg-muted relative shadow-xl shadow-primary/5">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px]"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}images/ceo.jpeg`}
                  alt="Sandeep Ray"
                  className="w-full h-full object-cover object-center relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-3xl font-bold font-display text-foreground mb-2">Sandeep Ray</h3>
              <p className="text-primary font-semibold text-lg mb-4 uppercase tracking-wider">Founder</p>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Driven by a personal experience with a broken healthcare system, Sandeep is passionate about making immediate, quality healthcare accessible and stress-free for everyone.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <Card className="overflow-hidden border-none shadow-none bg-transparent group w-full">
              <div className="aspect-square rounded-[3rem] overflow-hidden mb-8 bg-muted relative shadow-xl shadow-primary/5">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px]"></div>
                <img 
                  src="/UPADHAYA.jpeg"
                  alt="Dr. Sachin Upadhaya"
                  className="w-full h-full object-cover object-center relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-3xl font-bold font-display text-foreground mb-2">Dr. Sachin Upadhaya</h3>
              <p className="text-primary font-semibold text-lg mb-4 uppercase tracking-wider">Co-Founder</p>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                With extensive medical expertise, Dr. Sachin ensures that Pillzo's healthcare services are built on a foundation of clinical excellence and compassionate patient care.
              </p>
            </Card>
          </motion.div>

        </div>


      </div>
    </section>
  );
}
