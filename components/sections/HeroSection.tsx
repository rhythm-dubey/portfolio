import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { hero } from "@/lib/portfolio";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-[921px] flex items-center pt-24 pb-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center w-full">
        <div className="md:col-span-7 space-y-base">
          <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-4">
            <MaterialIcon name="location_on" className="text-primary text-[14px]" />
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              {hero.location}
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-background mb-4">
            {hero.name}
          </h1>
          <h2 className="font-headline-lg text-headline-lg text-secondary mb-6">
            {hero.title}{" "}
            <span className="text-on-surface">{hero.titleHighlight}</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">
            {hero.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={hero.ctaHref}
              className="bg-primary text-on-primary font-code-md text-code-md px-8 py-4 rounded-lg flex items-center gap-2 group transition-all hover:shadow-[0_0_20px_rgba(78,222,163,0.3)]"
            >
              {hero.ctaLabel}
              <MaterialIcon
                name="arrow_forward"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <div className="flex items-center gap-3 px-6 py-4 glass rounded-lg active-dot">
              <span className="font-code-md text-code-md text-on-surface">
                {hero.statusLabel}
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative hidden md:block">
          <div className="aspect-square glass rounded-2xl overflow-hidden relative group">
            <Image
              src={hero.imageUrl}
              alt={hero.imageAlt}
              fill
              className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              sizes="(min-width: 768px) 40vw, 0px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-xl border-l-4 border-primary">
              <p className="font-code-md text-code-md text-primary mb-2">
                {hero.focusLabel}
              </p>
              <p className="font-body-md text-body-md text-on-surface">
                {hero.focusText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
