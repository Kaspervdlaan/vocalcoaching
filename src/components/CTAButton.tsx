"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTAButtonProps {
  onClick?: () => void;
  variant?: "default" | "header";
}

export default function CTAButton({ onClick, variant = "default" }: CTAButtonProps) {
  const hoverClass = variant === "header" ? "hover:bg-red" : "hover:bg-purple";
  return (
    <Link href="/contact" onClick={onClick}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`bg-gold text-cream font-heading text-lg px-5 py-2 rounded-lg shadow-md ${hoverClass} transition-colors cursor-pointer`}
      >
        Boek een les
      </motion.button>
    </Link>
  );
}
