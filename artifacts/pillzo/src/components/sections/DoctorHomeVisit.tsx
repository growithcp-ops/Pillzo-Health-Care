import React from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Thermometer, 
  Activity, 
  Wind, 
  HeartPulse, 
  Droplets, 
  Stethoscope, 
  AlertTriangle,
  ClipboardCheck,
  Zap,
  PhoneCall,
  Ambulance
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { createWhatsAppUrl } from "@/lib/contact";

const services = [
  {
    icon: Thermometer,
    title: "High Fever Management",
    description: "Professional cooling and IV/IM medication for rapid temperature control."
  },
  {
    icon: Zap,
    title: "Acute Pain Relief",
    description: "Rapid relief for severe back pain, stomach cramps, or migraine attacks."
  },
  {
    icon: Wind,
    title: "Nebulization Support",
    description: "Immediate assistance for asthma attacks or acute breathing difficulties."
  },
  {
    icon: Activity,
    title: "On-the-spot ECG",
    description: "Rapid heart assessment for chest discomfort or palpitations at home."
  },
  {
    icon: Droplets,
    title: "IV Fluid Drips",
    description: "Treatment for severe dehydration caused by food poisoning or heatstroke."
  },
  {
    icon: Stethoscope,
    title: "Emergency Care",
    description: "Wound dressing, catheter replacement, and feeding tube emergency care."
  }
];

export function DoctorHomeVisit() {
  return (
    <section id="doctor-at-home" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 shadow-sm mb-6">
              <Home className="w-4 h-4 text-secondary" />
              <span className="text-sm font-bold text-secondary uppercase tracking-widest">Doctor Home Visit</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-8">
              Expert care that comes to <span className="text-secondary">your doorstep.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When someone at home is unwell, the last thing you want is the stress of rushing to a clinic. Pillzo brings a qualified doctor straight to your doorstep — fast, professional, and reassuring. 
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Whether it's a sudden fever at midnight or a chronic patient needing urgent attention, our doctors are equipped to handle it right where you are, with no waiting rooms and no panic.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <p className="text-sm font-medium text-foreground/80 font-bold tracking-tight">Rapid Stabilization & Aid</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <p className="text-sm font-medium text-foreground/80 font-bold tracking-tight">Hospital Referral Support</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <p className="text-sm font-medium text-foreground/80 font-bold tracking-tight">Emergency Diagnosis</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <p className="text-sm font-medium text-foreground/80 font-bold tracking-tight">Geriatric & Bedridden Care</p>
              </div>
            </div>

            <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-xl shadow-secondary/20 transition-all">
              <a href={createWhatsAppUrl("Hi, I need to book a Doctor Home Visit with Pillzo immediately.")} target="_blank" rel="noreferrer">
                Book a Home Visit <PhoneCall className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-3xl border border-secondary/10 bg-secondary/5 hover:bg-white hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-foreground">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-[2.5rem] bg-orange-50 border border-orange-200 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 border-4 border-orange-100 shadow-sm">
            <Ambulance className="w-8 h-8 text-orange-600" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h5 className="text-lg font-bold text-orange-950 mb-1 flex items-center justify-center md:justify-start gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" /> Emergency Note
            </h5>
            <p className="text-orange-900/80 text-sm leading-relaxed font-bold tracking-tight">
              In case of life-threatening emergencies like unconsciousness, major accidents, or severe chest pain, please call an ambulance or visit the nearest ER immediately.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
