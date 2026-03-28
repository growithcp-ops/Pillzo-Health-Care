import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarCheck2, MessageCircleMore, Pill, Stethoscope } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/contact";

const services = [
  {
    icon: Stethoscope,
    title: "Doctor Appointments",
    description:
      "Book appointments with doctors for thoughtful guidance, consultation support, and follow-up planning.",
    points: ["General and follow-up consultations", "Easy booking support", "Help choosing the right next step"],
    href: createWhatsAppUrl("Hi, I want to book a doctor appointment with Pillzo."),
    cta: "Chat to Book Doctor Appointment",
  },
  {
    icon: Pill,
    title: "Pharmacy Ordering",
    description:
      "Order pharmaceutical products with caring WhatsApp support, refill help, and a simple step-by-step flow.",
    points: ["Tell us what medicine you need", "Get friendly help on WhatsApp", "Stay supported from request to confirmation"],
    href: createWhatsAppUrl("Hi, I want to order pharmaceutical products from Pillzo."),
    cta: "Chat to Order Medicines",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1.5 text-sm font-medium text-foreground/80">
            <CalendarCheck2 className="h-4 w-4 text-primary" />
            Core Services
          </div>
          <h2 className="mt-5 text-3xl md:text-4xl font-display font-bold text-foreground">
            Two simple ways we can help you today
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you need medicines or want to speak with a doctor, Pillzo gives you a clear and friendly starting point.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="rounded-[2rem] border-border/60 bg-background p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-display font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <MessageCircleMore className="mt-0.5 h-4 w-4 text-secondary shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-8 rounded-xl">
                  <a href={service.href} target="_blank" rel="noreferrer">
                    {service.cta}
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
