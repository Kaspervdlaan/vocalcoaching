import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Anna - Vocal Coaching Utrecht",
  description: "Leer Anna kennen, zangcoach in Utrecht. Afgestudeerd aan de Nederlandse Popacademie en Vocal Center Academy.",
};

export default function OverAnnaPage() {
  return (
    <>
      {/* Page Header */}
      <div className="py-10 md:py-12 border-b border-purple/10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl text-blue">
            Over Anna
          </h1>
        </div>
      </div>

      {/* First Section: Intro + Photo (photo right) */}
      <AnimatedSection className="pt-8 md:pt-12 pb-10 md:pb-14">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1 flex flex-col gap-5 order-2 md:order-1">
              <p className="text-purple text-base leading-relaxed">
                Mijn naam is Anna, en sinds mijn prille jeugd gebruik ik
                muziek om mijn emoties en ideeën te verwerken. Zo ontdekte
                ik dat zingen ontzettend helend kan zijn, dat het helpt om
                dichterbij jezelf en je gevoel te komen. Ik wilde niets
                liever dan deze kennis delen, en besloot om – naast mijn
                werk als artiest – te starten als fulltime zangcoach.
              </p>
              <p className="text-purple text-base leading-relaxed">
                Na een aantal jaar lessen gegeven te hebben op intuïtie en
                in de praktijk opgedane kennis, besloot ik dat het tijd werd
                om me verder te ontwikkelen - zodat ik dit mooie vak
                full-time kon gaan uitvoeren. Bij de Vocal Center Academy
                volgde ik een opleiding tot zangcoach, om me verder te
                verdiepen in het vak. Hier verbreedde ik mijn kennis over
                anatomie en didactiek, en leerde ik gericht te coachen in
                allerlei verschillende zangtechnieken.
              </p>
            </div>

            {/* Photo - right */}
            <div className="w-full md:w-2/5 flex-shrink-0 order-1 md:order-2">
              <Image
                src="/assets/anna-bw.png"
                alt="Anna Day - Vocal Coach"
                width={500}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Second Section: Music career + Philosophy (photo left) */}
      <AnimatedSection className="pt-10 md:pt-14 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Second Photo - left */}
            <div className="w-full md:w-2/5 flex-shrink-0">
              <Image
                src="/assets/anna2.jpg"
                alt="Anna zingt op podium"
                width={500}
                height={600}
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col gap-5">
              <p className="text-purple text-base leading-relaxed">
                In 2022 studeerde ik af aan de Nederlandse Popacademie in
                Utrecht, waar ik veel ervaring opdeed als songwriter,
                artiest en zangeres. Zo stond ik met mijn band op onder
                andere Eurosonic Noorderslag, Bevrijdingsfestival Utrecht en
                in TivoliVredenburg. Als solo-artiest bracht ik onlangs mijn
                eerste EP uit, met een immersieve release-show in De
                Helling.
              </p>
              <p className="text-purple text-base leading-relaxed">
                Voor mij is zingen zo veel meer dan geluid maken. Het is
                jezelf uiten. Loslaten. Een weg naar zelfvertrouwen en
                expressie, waarin je jouw unieke stem vindt. Letterlijk én
                figuurlijk. Ik geloof dat, wanneer je je veilig en
                comfortabel voelt om nieuwe dingen te proberen, je veel meer
                kunt dan je denkt. En die ontdekkingsreis gun ik iedereen!
              </p>
            </div>
          </div>
          <div className="mt-14 text-center">
            <Link href="/contact">
              <button className="bg-blue text-cream font-heading text-lg px-8 py-3 rounded-lg shadow-md hover:bg-gold transition-colors cursor-pointer">
                Boek een les
              </button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
