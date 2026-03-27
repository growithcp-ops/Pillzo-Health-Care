import {
  BadgeAlert,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MessageCircleMore,
  PackageCheck,
  Pill,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Contact } from "@/components/sections/Contact";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { FaqSection } from "@/components/sections/FaqSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createWhatsAppUrl } from "@/lib/contact";

const pharmacyOffers = [
  {
    title: "Prescription Support",
    description: "Share your prescription details and our team will gently guide you through the ordering flow.",
  },
  {
    title: "Refill Coordination",
    description: "Come back for repeat orders without having to explain everything from the beginning.",
  },
  {
    title: "Daily Health Essentials",
    description: "Request common healthcare and wellness products through the same easy support channel.",
  },
];

const orderSteps = [
  {
    icon: MessageCircleMore,
    title: "Send Us a Message",
    description: "Message us on WhatsApp with the medicine or product you need.",
  },
  {
    icon: ShieldCheck,
    title: "Get Friendly Guidance",
    description: "We help you confirm what you need and walk you through the order process.",
  },
  {
    icon: PackageCheck,
    title: "Place Your Order",
    description: "Complete your pharmaceutical product request with a simple, assisted flow.",
  },
];

const pharmacyCategories = [
  {
    icon: Pill,
    title: "Prescription Medicines",
    description: "A cleaner ordering path for prescribed medicines and repeat requirements.",
  },
  {
    icon: HeartHandshake,
    title: "Wellness Essentials",
    description: "Support for everyday healthcare products patients often need alongside treatment.",
  },
  {
    icon: Clock3,
    title: "Refill Requests",
    description: "A faster route for returning customers who need continuity without friction.",
  },
  {
    icon: Shield,
    title: "Guided Assistance",
    description: "Support-first communication for patients who want help instead of guesswork.",
  },
];

const pharmacyReasons = [
  "The ordering path feels more personal and less transactional.",
  "Patients can ask questions before moving forward with a request.",
  "The service is positioned to work well after a doctor consultation too.",
  "WhatsApp support reduces drop-off for people who prefer direct communication.",
];

const pharmacyStats = [
  { value: "Easy", label: "Ordering flow designed to be easier to start" },
  { value: "Direct", label: "WhatsApp-first communication for less friction" },
  { value: "Clear", label: "Guided support for medicine and product requests" },
  { value: "Flexible", label: "Useful for first-time orders and repeat requests" },
];

const pharmacyFaqs = [
  {
    question: "Can I use this pharmacy page for repeat medicine orders?",
    answer:
      "Yes. The page content and support flow are designed to help with both first-time medicine requests and refill-style follow-up ordering.",
  },
  {
    question: "What if I need a doctor before placing the order?",
    answer:
      "That path is already built in. Users can move to the appointments page and book a doctor consultation before returning to pharmacy support.",
  },
  {
    question: "Is this only for prescription medicines?",
    answer:
      "No. The service positioning also supports daily health essentials and healthcare product requests, not just prescribed medication.",
  },
  {
    question: "Why use WhatsApp as the main order CTA?",
    answer:
      "It lowers friction for people who want a fast, familiar communication channel and it helps the service feel more guided and human.",
  },
];

export default function Pharmacy() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-3 py-1.5 text-sm font-medium text-foreground/80 shadow-sm">
                <Pill className="h-4 w-4 text-primary" />
                Friendly Pharmacy Support
              </div>
              <h1 className="mt-6 text-5xl md:text-6xl font-display font-bold leading-[1.05] text-foreground">
                Ordering your medicines should feel easy
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Pillzo makes medicine ordering feel simpler and more reassuring, with WhatsApp support, clear communication, and a team that’s happy to help.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-xl h-14 px-8 text-lg shadow-lg shadow-primary/20">
                  <a
                    href={createWhatsAppUrl("Hi, I want to order pharmaceutical products from Pillzo.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message Us to Order
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl h-14 px-8 text-lg bg-white">
                  <a
                    href={createWhatsAppUrl("Hi, I need to talk to a doctor before ordering medicines from Pillzo.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Need to Talk to a Doctor First?
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-primary" />
                  Warm, guided order support
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-secondary" />
                  Easy WhatsApp conversation
                </div>
              </div>
            </div>

            <Card className="rounded-[2rem] border-border/60 bg-white p-8 shadow-xl shadow-primary/10">
              <h2 className="text-2xl font-display font-bold text-foreground">
                How we can help you here
              </h2>
              <div className="mt-6 space-y-4">
                {pharmacyOffers.map((offer) => (
                  <div key={offer.title} className="rounded-2xl border border-border/60 bg-muted/20 p-5">
                    <h3 className="text-lg font-semibold text-foreground">{offer.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {offer.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <StatsStrip
        items={pharmacyStats}
        title="Why the pharmacy experience feels more complete"
        description="This page is designed around what people really want when ordering medicines: clarity, support, and a smoother experience."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              How ordering with Pillzo works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The goal is simple: fewer confusing steps, kinder communication, and support all the way through.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {orderSteps.map((step) => {
              const Icon = step.icon;

              return (
                <Card key={step.title} className="rounded-[2rem] border-border/60 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-display font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                More than just a checkout page
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                We’ve shaped this page around the real things people need help with, from prescriptions and repeat requests to everyday health essentials.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {pharmacyCategories.map((category) => {
                  const Icon = category.icon;

                  return (
                    <Card key={category.title} className="rounded-[1.75rem] border-border/60 bg-white p-6 shadow-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-xl font-display font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {category.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            <Card className="rounded-[2rem] border-border/60 bg-foreground p-8 md:p-10 text-white shadow-xl shadow-primary/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white/90">
                <BadgeAlert className="h-4 w-4" />
                Why Patients Like This Flow
              </div>
              <h3 className="mt-6 text-3xl font-display font-bold">
                More support, less stress
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                We want this experience to feel reassuring from the first click. It should feel like a helpful conversation, not like you’ve been left to figure everything out alone.
              </p>

              <div className="mt-8 space-y-4">
                {pharmacyReasons.map((reason) => (
                  <div key={reason} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <div className="flex items-start gap-3 text-sm leading-relaxed text-white/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{reason}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-[2rem] border-border/60 bg-foreground text-white p-10 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-display font-bold">
                  Want to speak with a doctor first?
                </h2>
                <p className="mt-3 text-white/70">
                  If that feels more comfortable, we can help you connect with a doctor before you place your medicine order.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary" className="rounded-xl">
                <a
                  href={createWhatsAppUrl("Hi, I want to book a doctor appointment with Pillzo.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Stethoscope className="h-5 w-5" />
                  Chat About an Appointment
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <FaqSection
        title="Questions People Often Ask"
        description="A few friendly answers for anyone who wants a little more confidence before reaching out."
        items={pharmacyFaqs}
      />

      <Contact />
    </SiteLayout>
  );
}
