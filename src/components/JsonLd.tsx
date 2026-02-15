const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vocalcoachingutrecht.nl";

export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Anna Vocal Coaching",
    description:
      "Holistische zangcoaching in Utrecht. Zanglessen op maat voor elk niveau. Ontdek de kracht van je stem met Anna.",
    url: siteUrl,
    email: "anna@vocalcoachingutrecht.nl",
    areaServed: {
      "@type": "City",
      name: "Utrecht",
      "@id": "https://www.wikidata.org/wiki/Q803",
    },
    sameAs: [
      "https://www.instagram.com/st.annaday/",
      "https://open.spotify.com/artist/3KeL7JqPfxjWFSWi5xXgjk",
    ],
    priceRange: "€€",
    image: `${siteUrl}/assets/Logo_Tekst.png`,
    owner: {
      "@type": "Person",
      name: "Anna Day",
      url: `${siteUrl}/over-anna`,
    },
    serviceType: ["Zangles", "Vocal coaching", "Zangcoaching"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday"],
        opens: "18:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "13:00",
        closes: "17:00",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Anna Vocal Coaching",
    url: siteUrl,
    description: "Zangles en vocal coaching in Utrecht",
    inLanguage: "nl-NL",
    publisher: {
      "@id": `${siteUrl}/#business`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website),
        }}
      />
    </>
  );
}
