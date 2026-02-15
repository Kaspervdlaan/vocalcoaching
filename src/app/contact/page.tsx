import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proefles boeken - Contact",
  description: "Neem contact op met Anna voor zanglessen in Utrecht. Boek een proefles of stuur een bericht via het contactformulier.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-16 md:pt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl text-blue">
            Contact
          </h1>
        </div>
      </div>

      {/* Content + Form */}
      <AnimatedSection className="pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left: text */}
            <div className="flex-1 w-full lg:max-w-md">
              <h2 className="font-heading text-2xl md:text-3xl text-blue mb-6">
                Zullen we kennismaken?
              </h2>
              <p className="text-purple text-base leading-relaxed mb-4">
                Neem contact op via het formulier om direct een proefles in te
                plannen. Heb je vragen of wil je eerst meer informatie over de
                lessen? Stuur dan een mailtje naar onderstaand e-mailadres, en
                ik kom zo snel mogelijk bij je terug!
              </p>
              <p className="text-purple text-base leading-relaxed mb-6">
                Een proefles duurt, net als een reguliere les, 45 minuten.
                Tijdens een proefles vind ik het belangrijk om elkaar eerst
                even te leren kennen, zodat jij kan kijken of er een klik is
                voordat we aan de slag gaan.
              </p>
              <p className="text-blue font-bold text-base">
                <a
                  href="mailto:Anna.vocalcoaching@gmail.com"
                  className="hover:text-gold transition-colors underline"
                >
                  Anna.vocalcoaching@gmail.com
                </a>
              </p>
            </div>
            {/* Right: form */}
            <div className="flex-1 w-full min-w-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
