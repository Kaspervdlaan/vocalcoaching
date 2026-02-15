import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import HomeTestimonialCarousel from "@/components/HomeTestimonialCarousel";
import Link from "next/link";
import Image from "next/image";

const testimonialPreviews = [
  {
    snippet: "Fijne en positieve lessen, veel kennis. Ik kan haar aan iedereen aanbevelen!",
    author: "Elly",
  },
  {
    snippet: "Anna heeft me het zelfvertrouwen gegeven om mijn stem te gebruiken.",
    author: "Larissa",
  },
  {
    snippet: "Een hele fijne docente met veel kennis, op zanggebied én op persoonlijke vlakken.",
    author: "Wesley",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-cream">
      {/* Full-page background image at 20% opacity */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none z-0"
        style={{ backgroundImage: "url(/assets/bganna.png)" }}
        aria-hidden
      />
      <div className="relative z-10">
        {/* Hero */}
        <Hero />

        {/* Testimonials Preview - transparent */}
        <AnimatedSection className="py-20 md:py-28 mt-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <HomeTestimonialCarousel
            snippets={testimonialPreviews.map((item) => item.snippet)}
          />
          <div className="text-center mt-10">
            <Link href="/ervaringen">
              <button className="bg-blue text-cream font-heading text-lg px-6 py-3 rounded-lg shadow-md hover:bg-red transition-colors cursor-pointer">
                Bekijk alle ervaringen
              </button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

        {/* Waarom vocal coaching? - transparent */}
        <AnimatedSection className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-8 md:gap-8 items-center">
            {/* Left: logo */}
            <div className="flex justify-center flex-1 w-56 md:w-64 lg:w-72">
              <Image
                src="/assets/logo-notext.png"
                alt="Vocal Coaching Utrecht"
                width={350}
                height={350}
                className="h-auto"
              />
            </div>
            {/* Right: text + CTA */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-heading text-3xl md:text-4xl text-blue mb-8">
                Waarom vocal coaching?
              </h2>
              <p className="text-purple text-base leading-relaxed mb-4">
                Vocal coaching draait om meer dan alleen zingen.
              </p>
              <p className="text-purple text-base leading-relaxed mb-4">
                Het is jezelf op een speelse manier leren kennen, door met je
                lichaam, geest en natuurlijk je stem te werken.
              </p>
              <p className="text-purple text-base leading-relaxed mb-4">
                Met lessen op maat kijken we wat jij nodig hebt, waardoor we
                gericht en efficiënt kunnen werken.
              </p>
              <p className="text-purple text-base leading-relaxed mb-8">
                Zo makkelijk was die uithaal nog nooit!
              </p>
              <Link href="/over-de-lessen">
                <button className="bg-gold text-cream font-heading text-lg px-6 py-3 rounded-lg shadow-md hover:bg-red transition-colors cursor-pointer">
                  Lees meer over de lessen
                </button>
              </Link>
            </div>
          </div>
          </div>
        </AnimatedSection>

        {/* Contact */}
        <AnimatedSection className="pt-20 md:pt-28 py-16 md:py-24 pb-20 md:pb-28 bg-red overflow-hidden [clip-path:polygon(0_4%,100%_0,100%_96%,0_100%)] md:[clip-path:polygon(0_12%,100%_0,100%_88%,0_100%)]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left: text + email + socials. On mobile: content left, logo right */}
            <div className="flex-1 w-full lg:max-w-md">
            <div className="flex flex-row md:flex-col gap-6 md:gap-0 items-center md:items-start">
              {/* Contact text block */}
              <div className="flex-1 min-w-0">
                <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4 md:mb-10">
                  Contact
                </h2>
                <p className="text-cream text-base leading-relaxed mb-4">
                  Heb je een vraag, of wil je direct een proefles inplannen?
                </p>
                <p className="text-cream text-base leading-relaxed mb-6">
                  Mail naar{" "}
                  <a
                    href="mailto:anna@vocalcoachingutrecht.nl"
                    className="text-cream font-semibold hover:text-gold transition-colors underline"
                  >
                    anna@vocalcoachingutrecht.nl
                  </a>{" "}
                  of vul het contactformulier in!
                </p>
              </div>
            </div>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/st.annaday/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://open.spotify.com/artist/3KeL7JqPfxjWFSWi5xXgjk?si=6C3j4TXJRSGCw8b1P6p5eQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-gold transition-colors"
                  aria-label="Spotify"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.405.081-.81-.16-.89-.57-.08-.42.16-.81.57-.89 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
                <a
                  href="mailto:anna@vocalcoachingutrecht.nl"
                  className="text-cream hover:text-gold transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
              <div className="mt-8 hidden md:inline-block">
                <Image
                  src="/assets/logo-light.png"
                  alt="Vocal Coaching Utrecht"
                  width={220}
                  height={220}
                  className="h-30 w-auto object-contain"
                />
              </div>
            </div>
            {/* Right: form */}
            <div className="flex-1 w-full min-w-0">
              <ContactForm />
            </div>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
