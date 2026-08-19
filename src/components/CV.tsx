import { motion } from "motion/react";
import AboutImage from "../assets/MimmieVanerhagAbout.png";

export default function AboutMeSection() {
  return (
    <section className="py-24 md:py-26 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          {/* Left column */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            <span className="text-industrial uppercase tracking-[0.2em] text-xs font-medium block mb-4">
              Om mig
            </span>

            <img
              src={AboutImage}
              alt="Mimmie Vänerhag"
              className="w-full aspect-[4/5] object-cover mt-8"
            />

            {/* Kontaktuppgifter */}
            <div className="mt-10">

              <div className="space-y-2 text-charcoal/80">
                <p className="font-medium text-charcoal">Mimmie Vänerhag</p>

                <p>1993-09-30</p>
                
                <p>Norra kustvägen 1013</p>

                <p>0708 68 81 46</p>

                <p>mimmie.vanerhag@gmail.com</p>

                <p>LinkedIn</p>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="md:col-span-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="font-serif text-4xl md:text-4xl text-charcoal leading-tight mb-10 max-w-3xl">
              Frontendutvecklare med fokus på design, funkion och affärsförståelse.
            </h2>

            <div className="max-w-3xl h-px bg-industrial mb-10" />

            <div className="max-w-3xl space-y-6 text-charcoal/80 text-lg leading-relaxed">
              <p>
                Jag är en driven person som efter flera år inom
                restaurangbranschen och entreprenörskap valde att utbilda mig
                till frontendutvecklare.
              </p>

              <p>
                Teknik har länge varit ett intresse, och jag motiveras av att
                förstå hur saker fungerar och kan förbättras. Som utvecklare
                kommer mina styrkor till sin rätt genom struktur, tydlighet och
                en känsla för design som fyller ett behov.
              </p>
            </div>

            <div className="pt-16 space-y-16">
              {/* Utbildning */}
              <div>
                <h3 className="font-serif text-3xl text-charcoal mb-8">
                  Utbildning
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="font-medium text-charcoal">
                      Frontendutvecklare
                    </p>
                    <p className="text-charcoal/60">
                      EC Utbildning Helsingborg · 2024–2026
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-charcoal">Entreprenörskap</p>
                    <p className="text-charcoal/60">
                      Lärlingsakademin Kristianstad · 2015–2016
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-charcoal">Samhällsekonomi</p>
                    <p className="text-charcoal/60">
                      Linnéskolan Hässleholm · 2009–2012
                    </p>
                  </div>
                </div>
              </div>

              {/* Kompetenser */}
              <div>
                <h3 className="font-serif text-3xl text-charcoal mb-8">
                  Kompetenser
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-medium text-charcoal mb-2">Frontend</h4>
                    <p className="text-charcoal/70">
                      HTML, CSS, JavaScript, TypeScript, React, Angular,
                      Tailwind CSS
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-charcoal mb-2">Backend</h4>
                    <p className="text-charcoal/70">
                      Node.js, Express, SQLite, C#, ASP.NET Core, Entity
                      Framework Core
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-charcoal mb-2">
                      Verktyg & metoder
                    </h4>
                    <p className="text-charcoal/70">
                      Git, Scrum, WordPress, Webflow, Figma, Balsamiq,
                      AI-verktyg
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-charcoal mb-2">
                      Tull och lagersystem
                    </h4>
                    <p className="text-charcoal/70">
                      KSD, SAP, Astro
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-charcoal mb-2">
                      Affärssystem
                    </h4>
                    <p className="text-charcoal/70">
                      Fortnox, Visma
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-charcoal mb-2">
                      Övrigt
                    </h4>
                    <p className="text-charcoal/70">
                      Microsoft 365
                    </p>
                  </div>

                </div>
              </div>

              {/* Bakgrund */}
              <div>
                <h3 className="font-serif text-3xl text-charcoal mb-8">
                  Bakgrund
                </h3>

                <div className="space-y-10">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1">
                      <h4 className="font-medium text-charcoal">
                        LIA · Thorn Creative Agency
                      </h4>
                      <span className="text-charcoal/50 text-sm pl-1">
                        2025–2026
                      </span>
                    </div>

                    <p className="mt-2 text-charcoal/70">
                      Utvecklade webbplatser i WordPress och Webflow med fokus
                      på skräddarsydda lösningar, dynamiskt innehåll och
                      kundanpassad funktionalitet. Fick erfarenhet av hela
                      processen från idé och design till färdig leverans.
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1">
                      <h4 className="font-medium text-charcoal">
                        Egenföretagare · Brygghallen
                      </h4>
                      <span className="text-charcoal/50 text-sm pl-1">
                        2022–2024
                      </span>
                    </div>

                    <p className="mt-2 text-charcoal/70">
                      Delaktig i uppstarten av restaurangverksamheten och
                      ansvarig för drift, ekonomi, planering och kundrelationer.
                      Erfarenheten har gett mig ett starkt affärsfokus och vana
                      att ta ansvar för hela processer.
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1">
                      <h4 className="font-medium text-charcoal">
                        Egenföretagare · C'est Bon Café & Blommor
                      </h4>
                      <span className="text-charcoal/50 text-sm pl-1">
                        2018–2020
                      </span>
                    </div>

                    <p className="mt-2 text-charcoal/70">
                      Startade och drev tillsammans med min syster ett café- och
                      butikskoncept. Arbetade med allt från etablering och
                      marknadsföring till daglig drift, ekonomi och
                      kundupplevelse.
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1">
                      <h4 className="font-medium text-charcoal">
                        Tulladministratör · Power International Logistics
                      </h4>
                      <span className="text-charcoal/50 text-sm pl-1">
                        2016–2018
                      </span>
                    </div>

                    <p className="mt-2 text-charcoal/70">
                      Arbetade med tullhantering, administration och kundkontakt
                      i flera affärssystem. Rollen krävde struktur, noggrannhet
                      och eget ansvar.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-charcoal">
                      Tidigare erfarenhet inom service och restaurang
                    </p>

                    <p className="mt-2 text-charcoal/70">
                      Har arbetat som kock, kallskänka, cafébiträde och barista.
                      Roller som utvecklat min samarbetsförmåga, stresstålighet,
                      känsla för kvalitet och förståelse för kundupplevelsen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote / Highlight */}
            <motion.div
              className="mt-16 border-l-2 border-industrial pl-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
            >
              <p className="font-serif italic text-2xl text-charcoal">
                "Som utvecklare uppskattar jag att kombinera produktförståelse,
                struktur och kreativitet för att skapa lösningar som människor
                faktiskt vill använda."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
