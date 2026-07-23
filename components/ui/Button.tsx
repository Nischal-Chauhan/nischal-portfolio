import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href?: string;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

export default function Button({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-cyan-400",
    variant === "primary"
      ? "bg-cyan-400 text-black hover:bg-cyan-300 hover:-translate-y-0.5"
      : "border border-zinc-700 text-white hover:border-cyan-400 hover:bg-zinc-900",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}