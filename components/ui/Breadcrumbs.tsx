import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
  className?: string;
}

/**
 * Breadcrumb navigation that uses next/link for internal routing.
 * Renders on a dark hero background by default (light variant for white text).
 */
export default function Breadcrumbs({
  items,
  light = true,
  className,
}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("mb-4", className)}>
      <ol
        className={cn(
          "flex items-center gap-2 text-sm flex-wrap",
          light ? "text-white/60" : "text-text-muted",
        )}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span
                  className={cn(
                    "font-medium",
                    light ? "text-white" : "text-text",
                  )}
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className={cn(
                      "transition-colors",
                      light
                        ? "hover:text-white"
                        : "hover:text-primary",
                    )}
                  >
                    {item.name}
                  </Link>
                  <span aria-hidden="true">›</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
