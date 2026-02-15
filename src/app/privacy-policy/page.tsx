import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Privacyverklaring van Anna Vocal Coaching. Hoe wij omgaan met je persoonsgegevens.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-16 md:pt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl text-blue">
            Privacyverklaring
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="pt-8 md:pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 prose-custom">
          <p className="text-purple text-base mb-6">
            Anna Vocal Coaching is verantwoordelijk voor de verwerking van
            persoonsgegevens zoals weergegeven in deze privacyverklaring.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            Contactgegevens
          </h2>
          <p className="text-purple text-base mb-6">
            <a
              href="https://vocalcoachingutrecht.nl"
              className="text-blue hover:text-gold underline"
            >
              https://vocalcoachingutrecht.nl
            </a>
            <br />
            <a
              href="mailto:Anna.vocalcoaching@gmail.com"
              className="text-blue hover:text-gold underline"
            >
              Anna.vocalcoaching@gmail.com
            </a>
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            Persoonsgegevens die wij verwerken
          </h2>
          <p className="text-purple text-base mb-3">
            Anna Vocal Coaching verwerkt je persoonsgegevens doordat je
            gebruik maakt van onze diensten en/of omdat je deze gegevens zelf
            aan ons verstrekt.
          </p>
          <p className="text-purple text-base mb-3">
            Hieronder vind je een overzicht van de persoonsgegevens die wij
            verwerken:
          </p>
          <ul className="list-disc list-inside text-purple text-base mb-6 space-y-1">
            <li>Voor- en achternaam</li>
            <li>Adresgegevens</li>
            <li>Telefoonnummer</li>
            <li>E-mailadres</li>
          </ul>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            Doel en grondslag
          </h2>
          <p className="text-purple text-base mb-3">
            Anna Vocal Coaching verwerkt jouw persoonsgegevens voor de
            volgende doelen:
          </p>
          <ul className="list-disc list-inside text-purple text-base mb-6 space-y-1">
            <li>Het afhandelen van jouw betaling</li>
            <li>
              Je te kunnen bellen of e-mailen indien dit nodig is om onze
              dienstverlening uit te kunnen voeren
            </li>
            <li>Het aanmaken van een leerlingenbestand</li>
            <li>
              Wettelijke verplichtingen, zoals gegevens die nodig zijn voor
              de belastingaangifte
            </li>
          </ul>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            Geautomatiseerde besluitvorming
          </h2>
          <p className="text-purple text-base mb-6">
            Anna Vocal Coaching neemt geen besluiten op basis van
            geautomatiseerde verwerkingen over zaken die (aanzienlijke)
            gevolgen kunnen hebben voor personen.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            Bewaartermijn persoonsgegevens
          </h2>
          <p className="text-purple text-base mb-6">
            Anna Vocal Coaching bewaart je persoonsgegevens niet langer dan
            strikt nodig is om de doelen te realiseren waarvoor je gegevens
            worden verzameld.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            Delen van persoonsgegevens met derden
          </h2>
          <p className="text-purple text-base mb-6">
            Anna Vocal Coaching verkoopt jouw gegevens niet aan derden en
            deelt jouw persoonsgegevens alleen met derden als dit
            noodzakelijk is voor het uitvoeren van de overeenkomst en om te
            voldoen aan een eventuele wettelijke verplichting.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            Cookies en vergelijkbare technieken
          </h2>
          <p className="text-purple text-base mb-6">
            Anna Vocal Coaching gebruikt alleen technische en functionele
            cookies. En analytische cookies die geen inbreuk maken op je
            privacy. Een cookie is een klein tekstbestand dat bij het eerste
            bezoek aan deze website wordt opgeslagen op jouw computer, tablet
            of smartphone. De cookies die wij gebruiken zijn noodzakelijk
            voor de technische werking van de website en jouw gebruiksgemak.
            Ze zorgen ervoor dat de website naar behoren werkt en onthouden
            bijvoorbeeld jouw voorkeursinstellingen. Ook kunnen wij hiermee
            onze website optimaliseren. Je kunt je afmelden voor cookies door
            je internetbrowser zo in te stellen dat deze geen cookies meer
            opslaat. Daarnaast kun je ook alle informatie die eerder is
            opgeslagen via de instellingen van je browser verwijderen.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            Gegevens inzien, aanpassen of verwijderen
          </h2>
          <p className="text-purple text-base mb-3">
            Je hebt het recht om je persoonsgegevens in te zien, te
            corrigeren of te verwijderen. Dit kun je zelf doen via de
            persoonlijke instellingen van jouw account. Daarnaast heb je het
            recht om je eventuele toestemming voor de gegevensverwerking in
            te trekken of bezwaar te maken tegen de verwerking van jouw
            persoonsgegevens door ons bedrijf en heb je het recht op
            gegevensoverdraagbaarheid.
          </p>
          <p className="text-purple text-base mb-3">
            Wil je gebruik maken van je recht op bezwaar en/of recht op
            gegevensoverdraagbaarheid of heb je andere vragen/opmerkingen
            over de gegevensverwerking, stuur dan een gespecificeerd verzoek
            naar{" "}
            <a
              href="mailto:anna.vocalcoaching@gmail.com"
              className="text-blue hover:text-gold underline"
            >
              anna.vocalcoaching@gmail.com
            </a>
            .
          </p>
          <p className="text-purple text-base mb-3">
            Om er zeker van te zijn dat het verzoek tot inzage door jou is
            gedaan, vragen wij jou een kopie van je identiteitsbewijs bij het
            verzoek mee te sturen. Maak in deze kopie je pasfoto, MRZ
            (machine readable zone, de strook met nummers onderaan het
            paspoort), paspoortnummer en Burgerservicenummer (BSN) zwart. Dit
            ter bescherming van je privacy. Anna Vocal Coaching zal zo snel
            mogelijk, maar in ieder geval binnen vier weken, op jouw verzoek
            reageren.
          </p>
          <p className="text-purple text-base mb-6">
            Anna Vocal Coaching wil je er tevens op wijzen dat je de
            mogelijkheid hebt om een klacht in te dienen bij de nationale
            toezichthouder, de Autoriteit Persoonsgegevens. Dat kan via{" "}
            <a
              href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-gold underline"
            >
              deze link
            </a>
            .
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            Beveiliging persoonsgegevens
          </h2>
          <p className="text-purple text-base mb-6">
            Anna Vocal Coaching neemt de bescherming van jouw gegevens
            serieus en neemt passende maatregelen om misbruik, verlies,
            onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde
            wijziging tegen te gaan. Als jij het idee hebt dat jouw gegevens
            toch niet goed beveiligd zijn of er aanwijzingen zijn van
            misbruik, neem dan contact op via{" "}
            <a
              href="mailto:anna.vocalcoaching@gmail.com"
              className="text-blue hover:text-gold underline"
            >
              anna.vocalcoaching@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
