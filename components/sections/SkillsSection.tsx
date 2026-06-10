import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { philosophy, skillCategories } from "@/lib/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-section-gap">
        <div className="lg:col-span-5">
          <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-4">
            {philosophy.eyebrow}
          </h3>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">
            {philosophy.title}
          </h2>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            {philosophy.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph.highlight ? (
                  <>
                    {paragraph.text}
                    <span
                      className={
                        paragraph.highlightClass ??
                        "text-on-surface font-semibold"
                      }
                    >
                      {paragraph.highlight}
                    </span>
                    {paragraph.suffix}
                  </>
                ) : (
                  paragraph.text
                )}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="glass p-8 rounded-xl kinetic-glow transition-all"
              >
                <MaterialIcon
                  name={category.icon}
                  className={`mb-4 text-3xl ${
                    category.variant === "primary"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                />
                <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-6">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <SkillBadge
                      key={tag}
                      label={tag}
                      variant={category.variant}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
