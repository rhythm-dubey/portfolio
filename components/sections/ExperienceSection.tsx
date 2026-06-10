import { education, experienceEntries } from "@/lib/portfolio";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-4">
          <h2 className="font-headline-xl text-headline-xl text-on-background mb-4">
            Career Path
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
            Tracking the evolution from junior roles to architecting
            enterprise-grade systems.
          </p>
          <div className="glass p-8 rounded-xl border-l-4 border-secondary">
            <h4 className="font-label-sm text-label-sm text-secondary uppercase mb-4 tracking-widest">
              Education
            </h4>
            <p className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">
              {education.degree}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {education.institution}
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="space-y-12">
            {experienceEntries.map((entry) => (
              <div
                key={`${entry.period}-${entry.title}`}
                className="relative pl-12 border-l-2 border-outline-variant/30 pb-4"
              >
                <div
                  className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-surface ${
                    entry.isCurrent
                      ? "bg-primary shadow-[0_0_10px_#4edea3]"
                      : "bg-outline-variant"
                  }`}
                />
                <span
                  className={`font-code-md text-code-md mb-2 block ${
                    entry.isCurrent ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {entry.period}
                </span>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                  {entry.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-4">
                  {entry.company}
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {entry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
