import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    as: "link";
    href: string;
  };

type ButtonAsA = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsA;

// Hardcoded hex untuk memastikan warna benar di semua browser
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0D5C3A] text-white hover:bg-[#1A4329] focus-visible:ring-[#0D5C3A]",
  secondary:
    "border-2 border-[#0D5C3A] text-[#0D5C3A] hover:bg-[#0D5C3A] hover:text-white focus-visible:ring-[#0D5C3A]",
  ghost: "text-[#0D5C3A] hover:bg-[#E8F5EE] focus-visible:ring-[#0D5C3A]",
  accent:
    "bg-[#D4AF37] text-[#1A4329] hover:bg-[#C59B27] focus-visible:ring-[#D4AF37] font-semibold",
  white:
    "bg-white text-[#0D5C3A] hover:bg-gray-50 focus-visible:ring-white border border-gray-200",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-9",
  md: "px-6 py-2.5 text-base min-h-11",
  lg: "px-8 py-3 text-lg min-h-[52px]",
};

function getClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold",
    "transition-colors duration-150 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = getClasses(variant, size, className);

  if (props.as === "link") {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  if (props.as === "a") {
    return (
      <a {...(props as ButtonAsA)} className={classes}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
