import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  ArrowRight,
  CalendarCheck2,
  HeartPulse,
  MessageCircleMore,
  Pill,
  Stethoscope,
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
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[520px] h-[520px] bg-primary/5 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[420px] h-[420px] bg-secondary/10 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/50 shadow-sm mb-6">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-foreground/80">Friendly help for doctor bookings and medicine orders</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6">
              Healthcare support that feels
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">simple, warm, and easy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Pillzo helps you feel looked after from the very first message. Order pharmaceutical products on WhatsApp, book an appointment with a doctor, and get support that feels calm, clear, and human.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-xl h-14 px-8 text-lg font-medium shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all group"
              >
                <a
                  href={createWhatsAppUrl("Hi, I want to order pharmaceutical products from Pillzo.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat to Order
                  <MessageCircleMore className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl h-14 px-8 text-lg font-medium border-border/80 bg-white hover:bg-white transition-all"
              >
                <a
                  href={createWhatsAppUrl("Hi, I want to book a doctor appointment with Pillzo.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat to Book
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 mt-8">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-border/60 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Pill className="w-5 h-5 text-primary" />
                <span className="font-medium">Medicine help on WhatsApp</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-secondary" />
                <span className="font-medium">Doctor booking made easy</span>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative lg:ml-auto w-full max-w-lg mx-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-xl shadow-primary/10 border border-white/50 p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl z-10 mix-blend-overlay"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/hero-illustration.png`}
                alt="Calming abstract healthcare illustration" 
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 bg-white px-4 py-3 rounded-2xl shadow-lg border border-border/50 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Friendly Start</p>
                  <p className="text-sm font-bold text-foreground">Get help in just a few minutes</p>
                </div>
              </div>

              <div className="absolute -right-3 bottom-1/4 bg-white px-4 py-3 rounded-2xl shadow-lg border border-border/50 flex items-center gap-3 z-20">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-white flex items-center justify-center overflow-hidden">
                      <span className="text-[10px] font-bold text-muted-foreground">Dr.</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Real support from our team</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
