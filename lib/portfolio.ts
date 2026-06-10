export interface NavLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
  color: "primary" | "secondary";
}

export interface SkillCategory {
  icon: string;
  title: string;
  variant: "primary" | "secondary";
  tags: string[];
}

export interface FeaturedProject {
  type: "featured";
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface CompactProject {
  type: "compact";
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  highlights?: string[];
  caseStudyHref?: string;
}

export type Project = FeaturedProject | CompactProject;

export interface ExperienceEntry {
  period: string;
  title: string;
  company: string;
  description: string;
  isCurrent?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const resume = {
  href: "/RhythmDubey-Resume.pdf",
  downloadName: "Rhythm-Dubey-Resume.pdf",
};

export const hero = {
  location: "Jodhpur, India — Available for Remote",
  name: "Rhythm Dubey",
  title: "Backend Engineer —",
  titleHighlight: "Scalable SaaS & CRM Systems",
  bio: "Architecting high-performance backends and seamless full-stack experiences. Specialized in legacy modernization and high-availability PHP/Laravel ecosystems.",
  ctaLabel: "Initiate Collaboration",
  ctaHref: "#contact",
  statusLabel: "Active for new opportunities",
  focusLabel: "// current_focus",
  focusText: "SaaS Architecture & Legacy Refactoring",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDDwl8idr9Zc_b3sVEbZUmDiVxuq1XgIZX6o3Dus2joeqd6uWHkKdxtovN4GgRaoZdGLFOxNkqaZEuPC3DuabuPqjEgkd4SittQtV_o-wMOkyCvPToJhWfg6mnnP5KjA4Hf3NEQynC60WIEzB5ENZk57PrXCQfLTgJBMH6XLzJG0_jDMOQB_GgwLY3WKRlXhvoUNzyGCQlTS0wZ6tsLR1GXjkaXiRrxFJ9wvRDndn2XPVwwScW9nI3NK5X6Ajk6iED28TOqOzxvVlo",
  imageAlt:
    "A cinematic close-up of a high-end mechanical keyboard illuminated by cyan and emerald neon light strips in a dark, tech-focused environment.",
};

export const metrics: Metric[] = [
  { value: "40%", label: "Perf Improvement", color: "primary" },
  { value: "10k+", label: "Active Users", color: "secondary" },
  { value: "50+", label: "Modules Developed", color: "primary" },
  { value: "3.9+", label: "Years Experience", color: "secondary" },
];

export interface PhilosophyParagraph {
  text: string;
  highlight?: string;
  highlightClass?: string;
  suffix?: string;
}

export interface Philosophy {
  eyebrow: string;
  title: string;
  paragraphs: PhilosophyParagraph[];
}
export const philosophy: Philosophy = {
  eyebrow: "The Philosophy",
  title: "Engineering for Longevity",
  paragraphs: [
    {
      text: "Specializing in ",
      highlight: "Laravel & PHP ecosystems",
      suffix:
        ", I bridge the gap between complex business requirements and high-performance technical implementation.",
    },
    {
      text: "My expertise lies in building ",
      highlight: "Enterprise SaaS solutions",
      highlightClass: "text-secondary",
      suffix:
        ", modernizing monolithic legacy systems, and integrating mission-critical services like Stripe and AWS.",
    },
    {
      text: 'I focus on "The Kinetic Syntax"—code that is not just functional, but efficient, readable, and ready for massive scale.',
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    icon: "terminal",
    title: "Backend Core",
    variant: "primary",
    tags: ["Laravel", "PHP", "Node.js"],
  },
  {
    icon: "layers",
    title: "Frontend Stack",
    variant: "secondary",
    tags: ["Vue.js", "React", "Tailwind CSS"],
  },
  {
    icon: "database",
    title: "Persistence",
    variant: "primary",
    tags: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    icon: "account_tree",
    title: "Architecture",
    variant: "secondary",
    tags: ["REST APIs", "SaaS CRM", "Stripe/AWS"],
  },
];

export const projects: Project[] = [
  {
    type: "featured",
    category: "SaaS CRM Platform",
    title: "Property Management System",
    description:
      "Large-scale Laravel-based property management platform featuring multi-role architecture, custom Stripe payout workflows, RBAC, and scalable backend systems for high-volume financial operations.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnbCIwsLuwY1dh5c2O7qOBO4xoFHMldLli_LAAWh4xmWOkuWmOR7QmHd2rkd3P1fM1cdxmwMbrxqQrt3tWeKRRf7x0fDIA8hKj5uznGyb8dzBX2AXN3X45eWbqJBI1XnEggsnlX0a4zsCg_vEIaGk0nB3EaFAvl7QppbUrKWrsQwNMRBItgZuGPWs80FMgU11_PHgsHxpS0eoc7aDFm_qxbnBupb1IqfjdyfEo0iO7WoA-vjIroVlyDrf_uyihMx7xdMaFbH5vsAI",
    imageAlt:
      "Property management SaaS dashboard with analytics, financial operations, tenant management, and administrative controls.",
  },
  {
    type: "compact",
    icon: "database_upload",
    title: "Property Management CRM Migration",
    description:
      "Migrated a legacy PHP application to Laravel and Filament, improving maintainability across 50+ modules while implementing RBAC and queue-based processing for 10k+ daily background jobs.",
    highlights: ["Laravel Migration", "RBAC System"],
  },
  {
    type: "compact",
    icon: "restaurant",
    title: "Catering Order Management System",
    description:
      "Built a Laravel-based catering management platform supporting order lifecycle management, business workflows, pricing logic, and secure payment processing.",
    tags: ["Laravel", "Payments", "Order Management"],
  },
  {
    type: "compact",
    icon: "weekend",
    title: "Furniture Catalogue Platform",
    description:
      "Modern furniture catalogue application built with Next.js and Firebase, featuring secure authentication, Firestore integration, and optimized user experience.",
    tags: ["Next.js", "Firebase", "Firestore"],
  },
];

export const education: Education = {
  degree: "BCA — 84%",
  institution: "Lachoo Memorial College, Jodhpur",
};

export const experienceEntries: ExperienceEntry[] = [
  {
    period: "Apr 2024 – Present",
    title: "Developer",
    company: "Web Techno Softwares",
    description:
      "Leading backend development of a large-scale Property Management SaaS platform. Improved system performance by 40%, implemented advanced Stripe payment infrastructure, and designed scalable RBAC and queue-processing systems supporting 10k+ daily operations.",
    isCurrent: true,
  },
  {
    period: "Nov 2023 – Feb 2024",
    title: "Web Developer",
    company: "Fistreet Systems",
    description:
      "Built core backend features for a Catering Order Management System, including order lifecycle management, secure payment processing, and administrative workflows.",
  },
  {
    period: "Nov 2022 – Oct 2023",
    title: "Web Developer",
    company: "Webitute",
    description:
      "Developed e-commerce and quotation management solutions with payment gateway integration, automated workflows, and data import/export capabilities.",
  },
  {
    period: "Jun 2022 – Oct 2022",
    title: "Junior Web Developer",
    company: "Web Techno Softwares",
    description:
      "Supported CRM product development using Laravel and CodeIgniter while delivering bug fixes, enhancements, and internal tooling improvements.",
  },
];

export const footer = {
  brand: "Rhythm.dev",
  tagline: "Backend Architect",
  copyright: "© 2024 Rhythm Dubey. Built with precision.",
  socialLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Source Code", href: "#" },
  ] satisfies SocialLink[],
};

export const contact = {
  title: "Get in Touch",
  subtitle:
    "Ready to scale your next system? Let's discuss your project requirements.",
  fields: {
    name: { label: "Name", placeholder: "John Doe" },
    email: { label: "Email", placeholder: "john@example.com" },
    message: {
      label: "Message",
      placeholder: "Briefly describe your project or architectural needs...",
    },
  },
  submitLabel: "Transmit Message",
};
