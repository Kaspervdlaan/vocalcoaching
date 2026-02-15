import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarieven - Vocal Coaching Utrecht",
  description: "Bekijk de tarieven voor zanglessen bij Anna in Utrecht. Losse lessen en strippenkaarten beschikbaar.",
};

const pricingData = [
  {
    title: "Studio",
    subtitle: "Donderdag van 18:00 – 21:00 en zondag van 13:00 – 17:00",
    prices: [
      { label: "Losse les", price: "€ 57,50" },
      { label: "Strippenkaart 6 lessen", price: "€ 330,-" },
      { label: "Strippenkaart 10 lessen", price: "€ 550,-" },
    ],
  },
];

export default function TarievenPage() {
  return (
    <>
      {/* Page Header */}
      <div className="py-10 md:py-12 border-b border-purple/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl text-blue mb-2">
            Tarieven
          </h1>
        </div>
      </div>

      {/* Pricing Cards */}
      <AnimatedSection className="pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-lg mx-auto">
            {pricingData.map((card, index) => (
              <div
                key={index}
                className="bg-white/60 rounded-xl shadow-lg p-8 border border-purple/10 hover:shadow-xl transition-shadow"
              >
                <h2 className="font-heading text-2xl md:text-3xl text-blue mb-2">
                  {card.title}
                </h2>
                <p className="text-purple/70 text-sm mb-6">{card.subtitle}</p>

                <div className="flex flex-col gap-4">
                  {card.prices.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-purple/10 pb-3"
                    >
                      <span className="text-purple">{item.label}</span>
                      <span className="text-blue font-bold text-lg">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/contact">
              <button className="bg-gold text-cream font-heading text-lg px-8 py-3 rounded-lg shadow-md hover:bg-red transition-colors cursor-pointer">
                Boek een les
              </button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
