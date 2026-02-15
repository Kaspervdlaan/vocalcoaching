"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

interface TestimonialCarouselProps {
  showAll?: boolean;
}

export default function TestimonialCarousel({ showAll = false }: TestimonialCarouselProps) {
  const items = showAll ? testimonials : testimonials;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" }
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.map((testimonial, index) => (
            <div key={index} className="embla__slide px-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream p-6 md:p-8 rounded-lg shadow-md h-full flex flex-col justify-between border border-purple/10"
              >
                <p className="italic text-purple/90 mb-4 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="font-bold text-blue">- {testimonial.author}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-purple text-cream w-10 h-10 rounded-full shadow-lg hover:bg-blue transition-colors flex items-center justify-center"
        aria-label="Vorige"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-purple text-cream w-10 h-10 rounded-full shadow-lg hover:bg-blue transition-colors flex items-center justify-center"
        aria-label="Volgende"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
