import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  ArrowRight,
  CalendarCheck2,
  HeartPulse,
  MessageCircleMore,
  Pill,
  Stethoscope,
  Building2,
  Home,
} from "lucide-react";

import { createWhatsAppUrl } from "@/lib/contact";

export function Hero() {
  const services = [
    {
      icon: Pill,
      title: "Pharmacy Ordering",
      description: "Order your medicines on WhatsApp with friendly guidance at every step.",
    },
    {
      icon: Stethoscope,
      title: "Doctor Consultations",
      description: "Book a doctor appointment and get caring support without the back-and-forth.",
    },
    {
      icon: CalendarCheck2,
      title: "Simple Booking",
      description: "Get to the right service quickly with a simple, easy-to-follow flow.",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-muted to-background">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/50 shadow-sm mb-6">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span className="text-sm font-bold text-foreground/70 tracking-tight">Friendly help for bookings & medicine orders</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6">
              Healthcare support that feels
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">simple, warm, and easy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Pillzo helps you feel looked after from the very first message. Order medicines on WhatsApp, book appointments, and get calm, clear, and human support.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <Button
                asChild
                size="lg"
                className="rounded-2xl h-14 md:h-16 px-6 text-base md:text-lg font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all group w-full"
              >
                <a
                  href={createWhatsAppUrl("Hi, I want to order pharmaceutical products from Pillzo.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircleMore className="mr-3 w-5 h-5 md:w-6 md:h-6" />
                  Order Medicines
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-2xl h-14 md:h-16 px-6 text-base md:text-lg font-bold bg-secondary text-secondary-foreground shadow-xl shadow-secondary/20 hover:-translate-y-1 transition-all group w-full"
              >
                <a
                  href={createWhatsAppUrl("Hi, I want to book a doctor appointment with Pillzo.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Stethoscope className="mr-3 w-5 h-5 md:w-6 md:h-6" />
                  Book Appointment
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl h-14 md:h-16 px-6 text-base md:text-lg font-bold border-2 border-border/80 bg-white hover:bg-muted transition-all group w-full"
              >
                <a
                  href={createWhatsAppUrl("Hi, I'm interested in Corporate Care services with Pillzo.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Building2 className="mr-3 w-5 h-5 md:w-6 md:h-6" />
                  Corporate Care
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl h-14 md:h-16 px-6 text-base md:text-lg font-bold border-2 border-border/80 bg-white hover:bg-muted transition-all group w-full"
              >
                <a
                  href={createWhatsAppUrl("Hi, I would like to request a Doctor at Home visit.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Home className="mr-3 w-5 h-5 md:w-6 md:h-6" />
                  Doctor at Home
                </a>
              </Button>
            </div>

            <div className="grid gap-4 grid-cols-3 mt-10 w-full">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="text-center group">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-border/60 text-primary shadow-sm group-hover:shadow-md transition-shadow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xs font-bold text-foreground">{service.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative w-full flex items-center justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[480px] rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-primary/10 border-[8px] border-white p-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10 mix-blend-overlay"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/hero-illustration.png`}
                alt="Calming abstract healthcare illustration" 
                loading="eager"
                className="w-full h-full object-cover"
              />
              
              {/* Floating badges */}
              <div className="absolute -left-4 top-[20%] bg-white px-4 py-3 rounded-2xl shadow-2xl border border-border/40 flex items-center gap-3 z-30 animate-bounce-subtle">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight">Friendly Start</p>
                  <p className="text-xs font-extrabold text-foreground leading-tight">Help in minutes</p>
                </div>
              </div>

              <div className="absolute -right-4 bottom-[25%] bg-white px-4 py-3 rounded-2xl shadow-2xl border border-border/40 flex items-center gap-3 z-30 animate-bounce-subtle-delayed">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-7 h-7 rounded-full bg-muted border-2 border-white flex items-center justify-center overflow-hidden">
                      <span className="text-[8px] font-extrabold text-muted-foreground">Dr.</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-extrabold text-foreground">Real Support</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
        .animate-bounce-subtle-delayed {
          animation: bounce-subtle 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}} />
    </section>
  );
}


