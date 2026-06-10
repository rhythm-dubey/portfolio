import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { projects, type CompactProject, type FeaturedProject } from "@/lib/portfolio";

function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <div className="md:col-span-8 group relative overflow-hidden glass rounded-2xl h-[400px]">
      <div className="absolute inset-0">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
          sizes="(min-width: 768px) 66vw, 100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent md:w-2/3" />
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12 md:w-1/2">
        <span className="font-label-sm text-label-sm text-primary uppercase mb-3">
          {project.category}
        </span>
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">
          {project.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
          {project.description}
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            className="p-2 glass rounded-lg hover:text-primary transition-colors"
            aria-label="Open project"
          >
            <MaterialIcon name="launch" />
          </button>
          <button
            type="button"
            className="p-2 glass rounded-lg hover:text-primary transition-colors"
            aria-label="View source code"
          >
            <MaterialIcon name="code" />
          </button>
        </div>
      </div>
    </div>
  );
}

function MigrationProjectCard({ project }: { project: CompactProject }) {
  return (
    <div className="md:col-span-4 glass rounded-2xl p-8 flex flex-col group kinetic-glow transition-all">
      <div className="mb-auto">
        <MaterialIcon
          name={project.icon}
          className="text-secondary text-4xl mb-6"
        />
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-4">
          {project.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {project.description}
        </p>
      </div>
      <div className="mt-8 pt-6 border-t border-outline-variant/30">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.highlights?.map((highlight) => (
            <span
              key={highlight}
              className="font-code-md text-[10px] uppercase text-secondary"
            >
              {highlight}
            </span>
          ))}
        </div>
        {project.caseStudyHref && (
          <a
            href={project.caseStudyHref}
            className="text-primary font-label-sm text-label-sm flex items-center gap-2 group-hover:gap-4 transition-all"
          >
            VIEW CASE STUDY{" "}
            <MaterialIcon name="arrow_forward" className="text-[16px]" />
          </a>
        )}
      </div>
    </div>
  );
}

function StandardProjectCard({ project }: { project: CompactProject }) {
  return (
    <div className="md:col-span-6 glass rounded-2xl p-8 flex flex-col group kinetic-glow transition-all relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8">
        <MaterialIcon
          name={project.icon}
          className="text-outline-variant text-8xl opacity-10"
        />
      </div>
      <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-4">
        {project.title}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-6">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 glass rounded-full font-label-sm text-label-sm text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [featured, migration, ...standardProjects] = projects;

  return (
    <section id="projects" className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="mb-16">
          <h2 className="font-headline-xl text-headline-xl text-on-background mb-4">
            Featured Shipments
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Deep dives into architecture, migration, and full-stack
            implementation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {featured.type === "featured" && (
            <FeaturedProjectCard project={featured} />
          )}
          {migration.type === "compact" && (
            <MigrationProjectCard project={migration} />
          )}
          {standardProjects.map((project) =>
            project.type === "compact" ? (
              <StandardProjectCard key={project.title} project={project} />
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}
