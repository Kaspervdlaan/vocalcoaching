import AnimatedSection from "@/components/AnimatedSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ervaringen - Vocal Coaching Utrecht",
  description: "Lees ervaringen van leerlingen over zanglessen bij Anna in Utrecht.",
};

export default function ErvaringenPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-20 md:pt-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl text-blue mb-2">
            Ervaringen
          </h1>
        </div>
      </div>

      {/* Testimonials */}
      <AnimatedSection className="pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <TestimonialCarousel showAll />

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-purple text-base mb-6">
              Wil jij ook aan de slag met je stem?
            </p>
            <Link href="/contact">
              <button className="bg-blue text-cream font-heading text-lg px-8 py-3 rounded-lg shadow-md hover:bg-red transition-colors cursor-pointer">
                Boek een les
              </button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
