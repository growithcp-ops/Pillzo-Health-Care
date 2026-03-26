import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Testimonials() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "10k+", label: "Patients Helped" },
    { value: "200+", label: "Expert Doctors" },
    { value: "24/7", label: "Always Available" },
  ];

  const reviews = [
    {
      text: "I had a medical scare at midnight. Within 10 minutes I was speaking to a doctor. Pillzo saved me hours of panic.",
      author: "Sarah M.",
      initials: "SM"
    },
    {
      text: "No more 3-week wait times. I booked an appointment and was seen the same day. Life-changing experience.",
      author: "James K.",
      initials: "JK"
    },
    {
      text: "As a parent, having instant access to pediatric advice is priceless. Pillzo is now part of our family routine.",
      author: "Priya L.",
      initials: "PL"
    }
  ];

  return (
    <section id="trust" className="py-24 bg-primary/5 border-y border-primary/10 relative overflow-hidden">
      
      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-border/50">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Trusted by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="p-8 h-full bg-white border-border/40 shadow-sm rounded-3xl relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-8 italic relative z-10">"{review.text}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <Avatar className="h-10 w-10 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{review.initials}</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-foreground">{review.author}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
