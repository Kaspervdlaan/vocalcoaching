"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { scrollToTop } from "@/utils/scrollToTop";

interface CTAButtonProps {
  onClick?: () => void;
  variant?: "default" | "header";
}

export default function CTAButton({ onClick, variant = "default" }: CTAButtonProps) {
  const pathname = usePathname();
  const hoverClass = variant === "header" ? "hover:bg-red" : "hover:bg-purple";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/contact") {
      event.preventDefault();
      scrollToTop();
    }

    onClick?.();
  };

  return (
    <Link href="/contact" onClick={handleClick}>
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
