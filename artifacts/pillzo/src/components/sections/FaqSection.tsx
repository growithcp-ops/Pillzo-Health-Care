import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  description: string;
  items: FaqItem[];
}

export function FaqSection({ title, description, items }: FaqSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>

        <Card className="mt-12 rounded-[2rem] border-border/60 p-6 md:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="border-border/60"
              >
                <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
}
