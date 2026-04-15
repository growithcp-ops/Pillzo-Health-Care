import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CarePrograms } from "@/components/sections/CarePrograms";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Clients } from "@/components/sections/Clients";
import { Founders } from "@/components/sections/Founders";
import { FaqSection } from "@/components/sections/FaqSection";
import { Contact } from "@/components/sections/Contact";

const homeFaqs = [
  {
    question: "Can I use Pillzo for both doctor appointments and medicine ordering?",
    answer:
      "Yes. Pillzo is designed to support both service paths, so patients can book a doctor appointment, request pharmaceutical products, or move between the two when needed.",
  },
  {
    question: "Is Pillzo only for urgent situations?",
    answer:
      "No. The site is designed for urgent questions, follow-up needs, repeat medicine support, and general healthcare coordination where people want a smoother process.",
  },
  {
    question: "Do I need to know exactly what service I need before I start?",
    answer:
      "Not necessarily. The content and contact flow are built to help patients figure out whether they need a doctor consultation, medicine support, or both.",
  },
  {
    question: "Can families use the same service flow?",
    answer:
      "Yes. The site positioning and service structure support people managing healthcare needs for themselves as well as for family members.",
  },
];

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ServicesOverview />
      <CarePrograms />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Clients />
      <Founders />
      <FaqSection
        title="Questions Patients Usually Ask First"
        description="A few quick answers that help visitors understand how the services fit together."
        items={homeFaqs}
      />
      <Contact />
    </SiteLayout>
  );
}

