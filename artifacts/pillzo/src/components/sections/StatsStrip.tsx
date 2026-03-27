import { Card } from "@/components/ui/card";

interface StatsStripItem {
  value: string;
  label: string;
}

interface StatsStripProps {
  items: StatsStripItem[];
  title?: string;
  description?: string;
}

export function StatsStrip({ items, title, description }: StatsStripProps) {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="rounded-[2rem] border-border/60 bg-white p-6 md:p-8 shadow-sm">
          {(title || description) && (
            <div className="mb-8 max-w-2xl">
              {title ? (
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {title}
                </h2>
              ) : null}
              {description ? (
                <p className="mt-3 text-muted-foreground">{description}</p>
              ) : null}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-border/60 bg-muted/20 px-5 py-6"
              >
                <div className="text-3xl font-display font-bold text-foreground">
                  {item.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
