import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
  light = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", center && "text-center", className)}>
      {label && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-widest mb-2",
            light ? "text-accent" : "text-primary",
          )}
        >
          {label}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "font-heading font-bold",
          light ? "text-white" : "text-text",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-1 w-16 rounded-full bg-accent",
          center ? "mx-auto" : "",
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed max-w-2xl",
            center && "mx-auto",
            light ? "text-white/80" : "text-text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
