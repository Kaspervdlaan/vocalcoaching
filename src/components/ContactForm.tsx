"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_8zps4d6",
        "template_nsn37od",
        {
          to_email: "anna@vocalcoachingutrecht.nl",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "6oUPnX2YLtL2RIBF6"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-red p-6 md:p-8 rounded-lg shadow-xl max-w-xl mx-auto w-full"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-cream text-sm">
            Naam:
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="px-4 py-3 rounded-lg bg-cream text-purple border-2 border-cream focus:border-blue focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-cream text-sm">
            Email:
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="px-4 py-3 rounded-lg bg-cream text-purple border-2 border-cream focus:border-blue focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-cream text-sm">
            Bericht:
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="px-4 py-3 rounded-lg bg-cream text-purple border-2 border-cream focus:border-blue focus:outline-none transition-colors resize-y"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gold text-cream font-heading text-lg py-3 rounded-lg shadow-md hover:bg-purple transition-colors cursor-pointer disabled:opacity-60"
        >
          {status === "sending" ? "Versturen..." : "Verstuur Bericht"}
        </motion.button>

        {status === "success" && (
          <p className="text-cream text-center text-sm">
            Bericht succesvol verzonden!
          </p>
        )}
        {status === "error" && (
          <p className="text-gold text-center text-sm">
            Er ging iets mis. Probeer het later opnieuw.
          </p>
        )}
      </div>
    </form>
  );
}
