import {
  Baby,
  HeartPulse,
  Pill,
  ShieldPlus,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const carePrograms = [
  {
    icon: Pill,
    title: "Prescription & Refill Help",
    description:
      "Support for medicine ordering, repeat requests, and clearer handoff after a doctor consultation.",
  },
  {
    icon: Stethoscope,
    title: "Consultation Booking",
    description:
      "Book doctor appointments for general care, follow-ups, and care planning without the usual friction.",
  },
  {
    icon: Baby,
    title: "Family Health Needs",
    description:
      "Use the same platform to manage health requests for yourself, your parents, or your household.",
  },
  {
    icon: HeartPulse,
    title: "Ongoing Care Support",
    description:
      "Move from one-off questions to more consistent support when care needs continue over time.",
  },
];

const highlights = [
  "One platform for pharmacy requests and doctor appointments",
  "Simple language and guided support instead of complicated flows",
  "Built to reduce hesitation when patients need to act quickly",
];

export function CarePrograms() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-3 py-1.5 text-sm font-medium text-foreground/80 shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              Care Programs
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl font-display font-bold text-foreground">
              A fuller healthcare journey, not just a single transaction
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Pillzo is designed for the moments around care too: before the consultation, after the prescription, and when families need a more reliable way to move from question to action.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {carePrograms.map((program) => {
                const Icon = program.icon;

                return (
                  <Card key={program.title} className="rounded-[1.75rem] border-border/60 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-display font-bold text-foreground">
                      {program.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="rounded-[2rem] border-border/60 bg-foreground p-8 md:p-10 text-white shadow-xl shadow-primary/10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white/90">
              <ShieldPlus className="h-4 w-4" />
              Why It Feels Better
            </div>
            <h3 className="mt-6 text-3xl font-display font-bold">
              Designed for people who want clarity fast
            </h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Healthcare often feels fragmented. Pillzo brings medicine ordering and doctor booking closer together, so users can move through both with less stress.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-relaxed text-white/85"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
