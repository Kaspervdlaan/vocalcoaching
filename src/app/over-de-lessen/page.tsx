import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over de Lessen - Vocal Coaching Utrecht",
  description: "Ontdek hoe zanglessen bij Anna werken. Les op maat, voor elk doel en elk niveau.",
};

export default function OverDeLessenPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-16 md:pt-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl text-blue mb-2">
            Over de lessen
          </h1>
        </div>
      </div>

      {/* Content */}
      <AnimatedSection className="pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col gap-6">
          <p className="text-purple text-base leading-relaxed">
            In mijn lessen leer je niet uit een boekje, of volgens een
            bepaald stramien. We gaan samen heel concreet kijken: wat wil je
            precies leren? Wat is daarvoor nodig? Zijn er fysieke en/of
            emotionele belemmeringen, en hoe lossen we die op? Vind je het
            leuk om veel over de theorie te leren, of wil je gewoon meteen
            aan de slag? En helpt het dan als ik iets voor doe, of moet ik
            even uittekenen hoe het precies werkt?
          </p>

          <p className="text-purple text-base leading-relaxed">
            Les op maat betekent dat we net zo lang zoeken tot we een manier
            hebben gevonden die bij jou aansluit, en waardoor jij meteen aan
            de slag kan met de materie.
          </p>

          {/* Testimonial quote */}
          <blockquote className="border-l-4 text-blue border-gold pl-6 py-2 my-4 w-[60ch] italic text-base">
            &ldquo;Een hele fijne docente met veel kennis, waarmee ze me veel
            heeft geleerd op zanggebied, maar ook op persoonlijke vlakken.&rdquo;
          </blockquote>

          <div className="flex justify-center">
            <Link href="/ervaringen">
              <button className="bg-blue text-cream font-heading text-lg px-6 py-3 rounded-lg shadow-md hover:bg-purple transition-colors cursor-pointer w-auto">
                Lees alle reviews
              </button>
            </Link>
          </div>

          <p className="text-purple text-base leading-relaxed mt-12">
            Misschien wil je zangles omdat het je droom is vocalist te
            worden. Of omdat je voor de klas staat en je stemgebruik wilt
            optimaliseren, of misschien voel je dat je emoties beter geuit
            kunnen worden. Voor elk doel is er een passende les op maat.
          </p>

          <p className="text-purple text-base leading-relaxed">
            Het mooiste moment van een les is voor mij altijd: wanneer een
            leerling al lang met iets worstelde, ergens niet uit kwam, iets
            niet haalde, en het met een kleine aanpassing opeens lukt.
          </p>

          <p className="text-purple text-base leading-relaxed">
            De verbazing die van het gezicht af te lezen is, &ldquo;wow,
            deed ik dat nou gewoon?&rdquo;, daar doe ik het voor! (En voor
            nog heel veel meer dingen natuurlijk, eigenlijk is elk moment
            waardevol).
          </p>

          <p className="text-purple text-base leading-relaxed">
            Klik op de button hieronder voor verdere praktische informatie
            zoals tarieven en locaties. Ik zie je heel graag voor een
            kennismakingsles!
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 flex-wrap">
            <Link href="/tarieven">
              <button className="bg-blue text-cream font-heading text-lg px-6 py-3 rounded-lg shadow-md hover:bg-purple transition-colors cursor-pointer w-full sm:w-auto">
                Tijden &amp; tarieven
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-red text-cream font-heading text-lg px-6 py-3 rounded-lg shadow-md hover:bg-gold transition-colors cursor-pointer w-full sm:w-auto">
                Of boek meteen een les!
              </button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
