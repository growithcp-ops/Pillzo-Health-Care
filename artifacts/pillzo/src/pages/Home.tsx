import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Founders } from "@/components/sections/Founders";
import { Contact } from "@/components/sections/Contact";
import { FloatingElements } from "@/components/FloatingElements";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background relative selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main className="flex-1 w-full">
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Pricing />
        <Testimonials />
        <Founders />
        <Contact />
      </main>

      <Footer />
      
      <FloatingElements />
    </div>
  );
}
