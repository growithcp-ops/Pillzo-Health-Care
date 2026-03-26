import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    {
      name: "Basic Plan",
      price: "29",
      desc: "For individuals needing occasional care",
      features: [
        "Occasional consultations (3/month)",
        "Basic specialist access",
        "Email support",
        "Digital prescriptions"
      ],
      isPopular: false
    },
    {
      name: "Family Plan",
      price: "79",
      desc: "Comprehensive care for your whole family",
      features: [
        "10 consultations/month",
        "Family coverage (up to 4)",
        "Priority booking access",
        "24/7 dedicated chat support",
        "Digital prescriptions & labs"
      ],
      isPopular: true
    },
    {
      name: "Premium Plan",
      price: "149",
      desc: "Unlimited access with white-glove service",
      features: [
        "Unlimited consultations",
        "All specialists included",
        "Same-day appointments guaranteed",
        "Dedicated health coordinator",
        "Follow-up care management"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Transparent, Stress-Free Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. No surprise bills. Just straightforward access to quality healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`h-full ${plan.isPopular ? 'md:-my-4 z-10' : ''}`}
            >
              <Card className={`relative h-full flex flex-col p-8 rounded-3xl transition-shadow duration-300 ${
                plan.isPopular 
                  ? 'border-primary/50 shadow-xl shadow-primary/10 bg-white ring-2 ring-primary/20' 
                  : 'border-border/60 shadow-md bg-white/50'
              }`}>
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold font-display text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 h-10">{plan.desc}</p>
                </div>
                
                <div className="mb-8 pb-8 border-b border-border/50">
                  <span className="text-4xl font-bold text-foreground font-display">${plan.price}</span>
                  <span className="text-muted-foreground font-medium">/month</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.isPopular ? 'bg-primary/20 text-primary' : 'bg-secondary/30 text-secondary-foreground'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-foreground/80">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  variant={plan.isPopular ? "default" : "outline"}
                  className={`w-full rounded-xl py-6 text-base font-semibold ${plan.isPopular ? 'shadow-md shadow-primary/25' : ''}`}
                >
                  Choose {plan.name.split(' ')[0]}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
