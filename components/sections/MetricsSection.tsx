import { metrics } from "@/lib/portfolio";

export function MetricsSection() {
  return (
    <section className="py-16 bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center md:text-left">
              <p
                className={`font-headline-lg text-headline-lg ${
                  metric.color === "primary" ? "text-primary" : "text-secondary"
                }`}
              >
                {metric.value}
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
