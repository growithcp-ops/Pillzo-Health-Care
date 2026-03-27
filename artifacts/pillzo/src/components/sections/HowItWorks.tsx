import { motion } from "framer-motion";
import { MessageSquareText, Search, ClipboardCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: MessageSquareText,
      title: "Tell Us What You Need",
      description: "Share your symptoms, prescription needs, or healthcare request in simple language.",
      color: "text-primary",
      bg: "bg-primary/10",
      delay: 0.1
    },
    {
      icon: Search,
      title: "We Guide You to the Right Service",
      description: "We help you move toward the right doctor appointment or pharmacy support path.",
      color: "text-secondary",
      bg: "bg-secondary/20",
      delay: 0.2
    },
    {
      icon: ClipboardCheck,
      title: "Move Forward With Confidence",
      description: "Book the consultation you need or complete your pharmaceutical product request with guided support.",
      color: "text-accent",
      bg: "bg-accent/10",
      delay: 0.3
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Care in 3 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            We removed all the friction so you can focus on getting better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connection Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border/50 border-t-2 border-dashed border-border/50 z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: step.delay }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className={`w-24 h-24 rounded-3xl ${step.bg} flex items-center justify-center mb-6 shadow-sm shadow-black/5 rotate-3 hover:rotate-0 transition-transform duration-300`}>
                  <Icon className={`w-10 h-10 ${step.color}`} strokeWidth={1.5} />
                </div>
                
                <div className="bg-foreground text-white w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm absolute top-[4.5rem] right-1/2 translate-x-12 shadow-lg ring-4 ring-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold font-display text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
