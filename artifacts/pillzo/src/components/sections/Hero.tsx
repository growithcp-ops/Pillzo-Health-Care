import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Activity, Clock, HeartPulse } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-muted to-background">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/50 shadow-sm mb-6">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-foreground/80">15+ Years of Medical Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6">
              Your Door to Medical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Peace of Mind</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              When panic strikes, we connect you to care—instantly. 
              No waiting rooms, no automated menus. Just real doctors ready to help when you need them most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="rounded-xl h-14 px-8 text-lg font-medium shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all group"
              >
                Book a Call 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: "smooth"})}
                className="rounded-xl h-14 px-8 text-lg font-medium border-border/80 bg-white/50 backdrop-blur-sm hover:bg-white transition-all"
              >
                See How It Works
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">24/7 Access</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-secondary" />
                <span className="font-medium">Instant Connections</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-2xl shadow-primary/10 border border-white/50 p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl z-10 mix-blend-overlay"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/hero-illustration.png`}
                alt="Calming abstract healthcare illustration" 
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-1/4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-border/50 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Wait Time</p>
                  <p className="text-sm font-bold text-foreground">&lt; 5 Minutes</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-1/4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-border/50 flex items-center gap-3 z-20"
              >
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-white flex items-center justify-center overflow-hidden">
                      <span className="text-[10px] font-bold text-muted-foreground">Dr.</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">200+ Experts</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
