"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section
      className="bg-red flex items-center relative overflow-hidden pb-20 md:pb-24 [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)]"
    >
      <div className="max-w-5xl mx-auto px-0 md:px-8 w-full py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-4">
          {/* Text - full width on mobile with inner padding */}
          <div className="flex-2 text-left max-w-xl w-full px-6 md:px-0 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              className="w-[85%] md:w-[75%] mb-8 md:mt-8"
            >
              <h1
                className="font-heading text-3xl md:text-4xl lg:text-4xl text-cream mb-4 leading-tight"
              >
                Vocal Coaching Utrecht
              </h1>
              <div className="text-left md:text-right w-full">
                <p className="font-heading text-lg md:text-xl text-cream italic">
                  ontdek de kracht van je stem
                </p>
                <span className="block mt-2 w-full h-0.5 bg-gold" aria-hidden />
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-cream/95 text-sm md:text-base mb-4 max-w-lg mx-auto md:mx-0 md:max-w-none md:whitespace-nowrap leading-relaxed font-bold"
            >
              Zingen is meer dan geluid maken. Zingen is jezelf leren kennen,
              voelen.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="text-cream/95 text-sm md:text-base mb-4 max-w-lg mx-auto md:mx-0 md:max-w-none md:whitespace-nowrap leading-relaxed font-bold"
            >
              Het is groeien, als vocalist én als persoon.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-cream/95 text-sm md:text-base mb-8 max-w-lg mx-auto md:mx-0 md:max-w-none md:whitespace-nowrap leading-relaxed font-bold"
            >
              Of je al jaren zingt of net begint, ik begeleid je heel graag bij
              elke stap!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex justify-center md:justify-start"
            >
              <CTAButton />
            </motion.div>
          </div>

          {/* Image - B&W portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-1 flex justify-center px-6 md:px-0"
          >
            <div className="w-52 h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/assets/anna-bw.png"
                alt="Anna - Vocal Coach"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
