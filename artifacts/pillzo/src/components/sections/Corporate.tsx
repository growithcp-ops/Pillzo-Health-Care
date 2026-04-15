import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Clock, 
  Truck, 
  Tag, 
  BellRing, 
  Heart, 
  Home, 
  Building2, 
  ShieldCheck, 
  LayoutDashboard,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { createWhatsAppUrl } from "@/lib/contact";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Medical Access",
    description: "Round-the-clock access to general practitioners and specialists via video or audio calls for your team."
  },
  {
    icon: Truck,
    title: "Priority Delivery",
    description: "Swift medicine delivery directly to your office or your employees' homes with prioritized dispatch."
  },
  {
    icon: Tag,
    title: "Employee Discounts",
    description: "Flat 15–25% discount on all prescription medicines for all enrolled employees."
  },
  {
    icon: BellRing,
    title: "Refill Reminders",
    description: "Automated reminders for employees on chronic medication to ensure they never miss a dose."
  },
  {
    icon: Heart,
    title: "Mental Wellness",
    description: "Access to certified counselors and psychologists for comprehensive mental health support."
  },
  {
    icon: ShieldCheck,
    title: "Full-Body Checkups",
    description: "Annual health check-ups with convenient home sample collection for the entire team."
  },
  {
    icon: Building2,
    title: "On-site Wellness",
    description: "BMI tracking, vaccinations, and health camps organized right at your office premises."
  },
  {
    icon: Users,
    title: "Family Coverage",
    description: "Flexible plans that allow employees to add up to 3–5 family members for complete peace of mind."
  },
  {
    icon: LayoutDashboard,
    title: "HR Dashboard",
    description: "Anonymized wellness reports and easy employee subscription management for your HR team."
  }
];

export function Corporate() {
  return (
    <section id="corporate" className="py-24 bg-foreground text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-0 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-0 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-display font-bold text-lg uppercase tracking-[0.2em] mb-4">Pillzo for Business</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
              Managing employee health <br />
              <span className="text-primary">shouldn't be complicated.</span>
            </h3>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              Pillzo's Corporate Wellness Program gives your team everything they need to stay healthy — from instant doctor access to medicine delivery — all under one platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-primary hover:bg-primary/90">
                <a href={createWhatsAppUrl("Hi, I want to request a Corporate Demo for my business.")} target="_blank" rel="noreferrer">
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-[3rem] p-10 border border-white/10"
          >
            <p className="text-2xl font-display font-medium leading-relaxed italic text-white/90">
              "Whether you're a startup or a large enterprise, Pillzo makes employee healthcare simple, affordable, and effective."
            </p>
            <div className="mt-10 pt-10 border-t border-white/10 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold font-display text-primary">24/7</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-2">Support</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-display text-secondary">25%</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-2">Savings</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-display text-white">Full</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-2">Tech Stack</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 hover:bg-white/10 transition-colors p-8 rounded-3xl border border-white/5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-white/60 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-[2.5rem]"
        >
          <div className="bg-foreground rounded-[2.4rem] px-10 py-12 text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to prioritize your team's health?</h3>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Healthier employees. Fewer sick days. Better productivity — with Pillzo for Business.
            </p>
            <Button asChild size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-white text-foreground hover:bg-white/90">
              <a href={createWhatsAppUrl("Hi, I want to talk about Pillzo for my corporate team.")} target="_blank" rel="noreferrer">
                Contact Corporate Sales
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
