import { cn } from "@/lib/utils";

type BadgeColor = "emerald" | "amber" | "blue" | "rose" | "gray";

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
}

const colorMap: Record<BadgeColor, string> = {
  emerald: "bg-emerald-100 text-emerald-800",
  amber: "bg-amber-100 text-amber-800",
  blue: "bg-blue-100 text-blue-800",
  rose: "bg-rose-100 text-rose-800",
  gray: "bg-gray-100 text-gray-700",
};

export default function Badge({
  children,
  color = "emerald",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        colorMap[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
