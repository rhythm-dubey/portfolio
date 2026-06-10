import { footer } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-base px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-base">
        <div className="font-code-md text-code-md text-on-surface">
          {footer.brand} —{" "}
          <span className="text-on-surface-variant opacity-70">
            {footer.tagline}
          </span>
        </div>
        <div className="text-on-surface-variant font-label-sm text-label-sm">
          {footer.copyright}
        </div>
        <div className="flex items-center gap-6">
          {footer.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span className="font-label-sm text-label-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
