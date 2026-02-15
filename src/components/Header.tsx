"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "./CTAButton";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/over-de-lessen", label: "OVER DE LESSEN" },
  { href: "/over-anna", label: "OVER ANNA" },
  { href: "/tarieven", label: "TARIEVEN" },
  { href: "/ervaringen", label: "ERVARINGEN" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purple">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 md:px-8 h-28">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full py-2">
          <Image
            src="/assets/logo-light.png"
            alt="Vocal Coaching Utrecht"
            width={80}
            height={80}
            className="h-14 w-auto object-contain md:h-20"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-body text-sm lg:text-base ${
                  isActive ? "text-gold" : "text-cream hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* <CTAButton variant="header" /> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-purple border-t border-cream/20 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`transition-colors font-body text-lg ${
                      isActive ? "text-gold" : "text-cream hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* <CTAButton variant="header" onClick={() => setMobileOpen(false)} /> */}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
