"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export default function TechBadge({
  icon,
  label,
  className = "",
}: TechBadgeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-2 shadow-xl backdrop-blur-xl ${className}`}
    >
      <span className="text-cyan-400">{icon}</span>

      <span className="text-sm font-medium text-white">
        {label}
      </span>
    </motion.div>
  );
}