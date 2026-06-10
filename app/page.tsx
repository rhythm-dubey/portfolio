import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="w-full">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal>
          <MetricsSection />
        </ScrollReveal>
        <ScrollReveal>
          <SkillsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ExperienceSection />
        </ScrollReveal>
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </>
  );
}
