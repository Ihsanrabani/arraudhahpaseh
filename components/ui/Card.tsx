import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  className,
  children,
  hover = false,
  padding = "md",
}: CardProps) {
  const paddingMap = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-border shadow-sm",
        hover &&
          "transition-shadow duration-200 hover:shadow-md cursor-pointer",
        paddingMap[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
