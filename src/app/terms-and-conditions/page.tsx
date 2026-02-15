import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene voorwaarden voor zanglessen bij Anna Vocal Coaching in Utrecht.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-16 md:pt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl text-blue">
            Algemene Voorwaarden
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="pt-8 md:pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            1. Algemeen
          </h2>
          <p className="text-purple text-base mb-6">
            Deze voorwaarden zijn van toepassing op alle zanglessen die
            worden gegeven door Anna Vocal Coaching, hierna te noemen
            &ldquo;de docent,&rdquo; aan particulieren, hierna te noemen
            &ldquo;de leerling&rdquo;. Door een les af te nemen, gaat de
            leerling akkoord met deze voorwaarden.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            2. Annulering van Lessen door de Leerling
          </h2>
          <p className="text-purple text-base mb-6">
            De leerling kan een les tot 24 uur voor aanvang van de les
            kosteloos annuleren. Bij annulering binnen 24 uur voor aanvang
            wordt de les afgestreept van de strippenkaart of in rekening
            gebracht als losse les.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            3. Verzetten van Lessen door de Leerling
          </h2>
          <p className="text-purple text-base mb-6">
            Het verzetten van een les kan kosteloos worden gedaan, mits dit
            minimaal 24 uur voor aanvang van de geplande les wordt
            doorgegeven. Bij verzetten binnen de 24 uur wordt de les
            beschouwd als geannuleerd en afgestreept van de strippenkaart of
            in rekening gebracht als losse les, tenzij de docent akkoord gaat
            met een ander moment binnen de werktijden van de docent. Indien
            de docent akkoord gaat met verzetten binnen 24 uur, dient de
            nieuwe les plaats te vinden binnen een termijn van één week na de
            oorspronkelijke lesdatum. Wanneer de les niet op een ander
            moment binnen deze termijn kan plaatsvinden, wordt de les
            beschouwd als geannuleerd en afgestreept van de strippenkaart of
            in rekening gebracht als losse les.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            4. Annulering of Verzetten van Lessen door de Docent
          </h2>
          <p className="text-purple text-base mb-6">
            De docent behoudt zich het recht voor om een les op elk gewenst
            moment te annuleren of te verzetten, bijvoorbeeld vanwege ziekte
            of onvoorziene omstandigheden. In dat geval wordt de leerling
            hier zo spoedig mogelijk van op de hoogte gesteld, en worden er
            geen kosten in rekening gebracht.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            5. Geldigheid van Strippenkaarten
          </h2>
          <p className="text-purple text-base mb-6">
            Strippenkaarten zijn geldig voor een periode van één jaar vanaf
            de aankoopdatum. Ongebruikte lessen op de strippenkaart vervallen
            na deze periode en kunnen niet worden terugbetaald.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            6. Betaling
          </h2>
          <p className="text-purple text-base mb-6">
            Betaling van losse lessen dient na afloop van de les te worden
            voldaan, tenzij anders overeengekomen. Betaling van
            strippenkaarten dient volledig te worden voldaan voor aanvang van
            de eerste les op de kaart. Alle bedragen dienen te worden voldaan
            via bankoverschrijving of een andere overeengekomen
            betaalmethode.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            7. Aansprakelijkheid
          </h2>
          <p className="text-purple text-base mb-6">
            De docent is niet aansprakelijk voor enige schade, letsel, of
            verlies ontstaan tijdens of als gevolg van de zanglessen.
            Leerlingen nemen deel aan de lessen op eigen risico.
          </p>

          <h2 className="font-heading text-2xl text-blue mt-8 mb-3">
            8. Wijziging van Voorwaarden
          </h2>
          <p className="text-purple text-base mb-6">
            De docent behoudt zich het recht voor om deze voorwaarden te
            wijzigen. In het geval van wijzigingen worden leerlingen hiervan
            tijdig op de hoogte gesteld.
          </p>
        </div>
      </section>
    </>
  );
}
