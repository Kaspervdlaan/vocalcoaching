import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream text-purple py-10 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Mobile: stack left-aligned. Desktop: single row, bottom-aligned */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-16">
          {/* Left: nav + business details */}
          <div className="text-sm text-purple/80 space-y-6 text-left">
            <nav className="flex flex-wrap gap-x-6 gap-y-1 text-purple font-medium">
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
              <Link href="/over-de-lessen" className="hover:text-gold transition-colors">
                Over de lessen
              </Link>
              <Link href="/over-anna" className="hover:text-gold transition-colors">
                Over Anna
              </Link>
              <Link href="/tarieven" className="hover:text-gold transition-colors">
                Tarieven
              </Link>
              <Link href="/ervaringen" className="hover:text-gold transition-colors">
                Ervaringen
              </Link>
              <Link href="/contact" className="hover:text-gold transition-colors">
                Contact
              </Link>
            </nav>
            <p>Ingeschreven bij handelsregister onder naam: Anna Day</p>
            <p>KVK nummer: 95255419</p>
            <p>BTW-nummer: NL005141377B75</p>
          </div>

          {/* Center (desktop): social icons — in row on desktop, left on mobile */}
          <div className="flex gap-6 md:items-end text-left">
            <a
              href="https://www.instagram.com/st.annaday/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-gold transition-colors"
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
              className="text-purple hover:text-gold transition-colors"
              aria-label="Spotify"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.405.081-.81-.16-.89-.57-.08-.42.16-.81.57-.89 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
            <a
              href="mailto:anna@vocalcoachingutrecht.nl"
              className="text-purple hover:text-gold transition-colors"
              aria-label="Email"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>

          {/* Right: legal + copyright, stacked */}
          <div className="flex flex-col md:items-end text-sm space-y-6 text-left md:text-right">
            <Link href="/terms-and-conditions" className="text-purple hover:text-gold transition-colors">
              Algemene voorwaarden
            </Link>
            <Link href="/privacy-policy" className="text-purple hover:text-gold transition-colors">
              Privacybeleid
            </Link>
            <p className="text-purple/70">© Auteursrecht. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
