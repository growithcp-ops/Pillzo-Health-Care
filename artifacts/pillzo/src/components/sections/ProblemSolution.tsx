import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ProblemSolution() {
  const problems = [
    "Calling multiple clinics blindly",
    "Waiting on hold to endless menus",
    "3-week wait times for a 10min slot",
    "Panic, confusion, and anxiety"
  ];

  const solutions = [
    "Instant connection to care",
    "No waiting rooms, digital or physical",
    "See a licensed doctor right now",
    "Calm, assured peace of mind"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Healthcare shouldn't make you feel worse.
          </h2>
          <p className="text-lg text-muted-foreground">
            We saw a broken system that created anxiety instead of treating it. So we built the alternative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* The Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 h-full bg-muted/30 border-muted relative overflow-hidden rounded-3xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-bl-full -z-10" />
              <h3 className="text-2xl font-display font-semibold text-foreground mb-8 pb-4 border-b border-border/50">
                The Old Way
              </h3>
              <ul className="space-y-6">
                {problems.map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* The Pillzo Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 h-full bg-primary/5 border-primary/10 shadow-lg shadow-primary/5 relative overflow-hidden rounded-3xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10" />
              <div className="absolute -bottom-4 -right-4 bg-white text-xs font-bold px-3 py-1 rounded-full text-primary shadow-sm">
                Our Promise
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-8 pb-4 border-b border-primary/10">
                The Pillzo Way
              </h3>
              <ul className="space-y-6">
                {solutions.map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <span className="text-lg font-medium text-foreground leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
