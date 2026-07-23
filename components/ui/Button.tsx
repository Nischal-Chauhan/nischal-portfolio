import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-cyan-400",
        variant === "primary"
          ? "bg-cyan-400 text-black hover:bg-cyan-300 hover:-translate-y-0.5"
          : "border border-zinc-700 text-white hover:border-cyan-400 hover:bg-zinc-900",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}