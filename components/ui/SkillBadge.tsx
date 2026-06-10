interface SkillBadgeProps {
  label: string;
  variant?: "primary" | "secondary";
}

export function SkillBadge({ label, variant = "primary" }: SkillBadgeProps) {
  const styles =
    variant === "primary"
      ? "bg-primary/10 text-primary border-primary/20"
      : "bg-secondary/10 text-secondary border-secondary/20";

  return (
    <span
      className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm border ${styles}`}
    >
      {label}
    </span>
  );
}
