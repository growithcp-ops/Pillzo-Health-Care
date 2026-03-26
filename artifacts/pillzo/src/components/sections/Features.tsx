import { motion } from "framer-motion";
import { ShieldAlert, Zap, UserCheck, HeartHandshake } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      icon: ShieldAlert,
      title: "No More Panic",
      desc: "Get an instant roadmap to care. Knowing what to do next is half the cure."
    },
    {
      icon: Zap,
      title: "No More Waiting",
      desc: "Connect to doctors immediately. Your health shouldn't be put on hold."
    },
    {
      icon: UserCheck,
      title: "Your Health Partner",
      desc: "We aren't just a booking site; we follow up to ensure you're recovering."
    },
    {
      icon: HeartHandshake,
      title: "Calm Access",
      desc: "Designed to be simple. Easy to use UI for peace of mind when you need it most."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Why Pillzo is Different
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Traditional healthcare platforms optimize for the clinic. We optimize for the patient. Everything is designed to reduce stress.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="p-6 h-full border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 rounded-3xl bg-white group">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 text-foreground/70 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground mb-2">{feat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
