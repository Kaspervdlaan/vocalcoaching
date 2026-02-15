"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

interface HomeTestimonialCarouselProps {
  snippets: string[];
}

export default function HomeTestimonialCarousel({ snippets }: HomeTestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative px-12">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {snippets.map((snippet, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 flex justify-center px-4"
            >
              <div className="text-center max-w-md mx-auto">
                <p className="text-purple italic leading-relaxed mb-3">
                  &ldquo;{snippet}&rdquo;
                </p>
                <span
                  className="block w-16 h-0.5 bg-gold mx-auto"
                  aria-hidden
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple text-cream w-10 h-10 rounded-full shadow-lg hover:bg-blue transition-colors flex items-center justify-center z-10"
        aria-label="Vorige"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple text-cream w-10 h-10 rounded-full shadow-lg hover:bg-blue transition-colors flex items-center justify-center z-10"
        aria-label="Volgende"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
