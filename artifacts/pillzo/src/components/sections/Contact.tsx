import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PhoneCall, Mail, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { createWhatsAppUrl } from "@/lib/contact";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // UI-only submission behavior as requested
    console.log("Submitting:", values);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 4000);
  }

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Card className="overflow-hidden rounded-[2.5rem] border-border/50 shadow-xl bg-white">
          <div className="grid grid-cols-1 md:grid-cols-5 h-full">
            
            {/* Left Col - Graphic/Info */}
            <div className="md:col-span-2 bg-primary p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-4">We're here whenever you need us.</h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Reach out for help with medicines, doctor appointments, or simply figuring out the best next step.
                </p>
              </div>

              <div className="space-y-6 relative z-10">
                <a href={createWhatsAppUrl("Hi, I need help with a medicine order or doctor appointment.")} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white hover:text-white/80 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Want the fastest reply?</p>
                    <p className="font-semibold">Message us on WhatsApp</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Col - Form */}
            <div className="md:col-span-3 p-10 md:p-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                Tell us what you need help with
              </h2>
              <p className="text-muted-foreground mb-8">
                Leave your email and our team will get back to you with help for medicines, doctor appointments, or any question about getting started.
              </p>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary/20 border border-secondary/30 rounded-2xl p-8 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Thanks, we’ve got your request</h4>
                  <p className="text-muted-foreground">
                    One of our team members is reviewing your message and will email you shortly to help with your medicines or appointment needs.
                  </p>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                              <Input 
                                placeholder="Enter your email address" 
                                className="h-14 pl-12 rounded-xl bg-muted/30 border-border/50 focus-visible:ring-primary/30 text-base"
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="ml-1" />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-lg font-semibold shadow-md shadow-primary/20 hover:-translate-y-0.5 transition-all">
                      Send My Request
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      By submitting, you agree to our terms and conditions. Your data is secure and HIPAA compliant.
                    </p>
                  </form>
                </Form>
              )}

            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}
