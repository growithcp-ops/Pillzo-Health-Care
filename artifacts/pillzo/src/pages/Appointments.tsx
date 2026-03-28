import {
  CalendarCheck2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  FileText,
  HeartPulse,
  MessageCircleMore,
  Pill,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
  Video,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Contact } from "@/components/sections/Contact";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { FaqSection } from "@/components/sections/FaqSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createWhatsAppUrl } from "@/lib/contact";

const appointmentTypes = [
  "General doctor consultations",
  "Follow-up appointments",
  "Prescription review guidance",
  "Next-step planning for ongoing health concerns",
];

const bookingSteps = [
  {
    icon: MessageCircleMore,
    title: "Tell Us What’s Going On",
    description: "Share your symptoms or concerns so we can help you toward the right appointment path.",
  },
  {
    icon: CalendarCheck2,
    title: "Choose the Best Next Step",
    description: "We help you move toward the right doctor consultation without the usual back-and-forth.",
  },
  {
    icon: Video,
    title: "Speak With a Doctor",
    description: "Get clarity on treatment, prescriptions, or follow-up care in a more supportive way.",
  },
];

const specialties = [
  {
    icon: Stethoscope,
    title: "General Consultations",
    description: "A better first step for symptoms, health questions, and medical uncertainty.",
  },
  {
    icon: HeartPulse,
    title: "Follow-Up Care",
    description: "Useful when patients need the next consultation after tests, treatment, or ongoing concerns.",
  },
  {
    icon: FileText,
    title: "Prescription Review",
    description: "Support for understanding treatment direction before moving to pharmacy ordering.",
  },
  {
    icon: UserRoundCheck,
    title: "Care Planning",
    description: "Help deciding what to do next when people need clarity more than complexity.",
  },
];

const preparationChecklist = [
  "Share symptoms, concerns, or context in simple language.",
  "Mention whether this is a first visit or a follow-up need.",
  "Bring recent prescriptions or treatment details when relevant.",
  "Use the pharmacy page afterward if medicines are part of the next step.",
];

const appointmentStats = [
  { value: "Simple", label: "Booking flow designed to reduce confusion" },
  { value: "Guided", label: "Support for choosing the right next step" },
  { value: "Flexible", label: "Useful for general consults and follow-ups" },
  { value: "Connected", label: "Moves naturally into pharmacy support when needed" },
];

const appointmentFaqs = [
  {
    question: "Is this page only for first-time consultations?",
    answer:
      "No. The appointment flow also supports follow-up care, prescription review guidance, and patients who need help deciding what to do next.",
  },
  {
    question: "Can I order medicines after a doctor consultation?",
    answer:
      "Yes. The site is now structured so visitors can move from appointment booking into pharmacy support when medicines are part of the next step.",
  },
  {
    question: "What if I am not sure whether I need a doctor or pharmacy support first?",
    answer:
      "That is exactly why the site now has fuller content on both pages. Visitors can understand both service paths and start with whichever one fits their situation best.",
  },
  {
    question: "Why does the appointment page need more content?",
    answer:
      "A fuller page helps visitors trust the service, understand what kinds of consultations are supported, and feel more confident before submitting a request.",
  },
];

export default function Appointments() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] -translate-x-1/4 -translate-y-1/4 rounded-full bg-secondary/10 blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-3 py-1.5 text-sm font-medium text-foreground/80 shadow-sm">
                <Stethoscope className="h-4 w-4 text-secondary" />
                Friendly Doctor Booking
              </div>
              <h1 className="mt-6 text-5xl md:text-6xl font-display font-bold leading-[1.05] text-foreground">
                Talking to a doctor should feel easier
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Pillzo helps you go from worry to a clear next step. Book an appointment with a doctor, get kind support, and feel more confident about what to do next.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-xl h-14 px-8 text-lg shadow-lg shadow-primary/20">
                  <a
                    href={createWhatsAppUrl("Hi, I want to book a doctor appointment with Pillzo.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat to Book Doctor Appointment
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl h-14 px-8 text-lg bg-white">
                  <a
                    href={createWhatsAppUrl("Hi, I need help with pharmaceutical products from Pillzo.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat to Order Medicines
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Warm, guided support
                </div>
                <div className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-secondary" />
                  Easy booking flow
                </div>
              </div>
            </div>

            <Card className="rounded-[2rem] border-border/60 bg-white p-8 shadow-xl shadow-primary/10">
              <h2 className="text-2xl font-display font-bold text-foreground">
                We can help with
              </h2>
              <ul className="mt-6 space-y-4">
                {appointmentTypes.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/20 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-sm leading-relaxed text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <StatsStrip
        items={appointmentStats}
        title="Appointment booking with more context and more confidence"
        description="This page is here to make appointments feel more approachable, more understandable, and easier to start."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              How booking works with Pillzo
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We keep everything simple so you can focus on getting answers, not dealing with a complicated process.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {bookingSteps.map((step) => {
              const Icon = step.icon;

              return (
                <Card key={step.title} className="rounded-[2rem] border-border/60 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary-foreground">
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
                The kinds of support this page is built for
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                We want it to be easy for people to recognize their situation here and feel comfortable reaching out.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {specialties.map((specialty) => {
                  const Icon = specialty.icon;

                  return (
                    <Card key={specialty.title} className="rounded-[1.75rem] border-border/60 bg-white p-6 shadow-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-xl font-display font-bold text-foreground">
                        {specialty.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {specialty.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            <Card className="rounded-[2rem] border-border/60 bg-white p-8 md:p-10 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-sm font-medium text-foreground/80">
                <ClipboardCheck className="h-4 w-4 text-primary" />
                Before You Book
              </div>
              <h3 className="mt-6 text-3xl font-display font-bold text-foreground">
                A few helpful things to have ready
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A little preparation can make the conversation smoother and help us guide you faster.
              </p>

              <div className="mt-8 space-y-4">
                {preparationChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/20 px-4 py-4">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground/85">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-foreground px-5 py-5 text-white">
                <div className="flex items-start gap-3">
                  <Pill className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-semibold">After the consultation</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      If the doctor recommends medication, we can also help you move smoothly into medicine ordering afterward.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-[2rem] border-border/60 bg-white p-10 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Need medicines after your appointment?
                </h2>
                <p className="mt-3 text-muted-foreground">
                  We can help with that too, so moving from a doctor consultation to medicine support feels simple and connected.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-xl">
                <a
                  href={createWhatsAppUrl("Hi, I want to order pharmaceutical products from Pillzo.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat to Order Medicines
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <FaqSection
        title="Questions People Usually Have"
        description="A few extra answers to make the appointment process feel even more comfortable."
        items={appointmentFaqs}
      />

      <Contact />
    </SiteLayout>
  );
}
