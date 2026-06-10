import { navLinks, resume } from "@/lib/portfolio";

export function SiteHeader() {
  return (
    <header className="bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 sticky top-0 z-50 w-full">
      <nav
        className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-16"
        aria-label="Main navigation"
      >
        <div className="font-code-md text-code-md font-bold text-primary tracking-tighter">
          Rhythm.dev
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={resume.href}
          download={resume.downloadName}
          className="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-label-sm text-label-sm px-6 py-2.5 rounded-full transition-all active:scale-95"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}