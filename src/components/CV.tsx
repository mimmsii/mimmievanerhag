import { motion } from "motion/react";
import AboutImage from "../assets/MimmieVanerhagAbout.png";
import { ArrowUpRight } from "lucide-react";
import { MapPin } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Venus } from "lucide-react";
import { Mail } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section className="bg-paper pt-24 md:pt-28 lg:pt-36 pb-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Left column */}
          <motion.div
            className="md:col-span-4 md:justify-self-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
          >
            <div className="w-full md:w-[74%] mx-auto md:ml-auto md:mr-0">

              <img
                src={AboutImage}
                alt="Mimmie Vänerhag"
                className="w-full rounded-xs aspect-[4/5] object-cover mt-8"
              />

              {/* Kontaktuppgifter */}
              <div className="mt-6 md:mt-10">
                <p className='font-medium md:font-bold text-xl pb-4 font-serif tracking-[0.01em]'>Mimmie Vänerhag</p>
                <div className="space-y-2 font-normal text-charcoal/90">

                  <p className="flex items-center gap-2"><Venus size={16}/>33 år</p>

                  <p className="flex items-center gap-2"><MapPin size={16}/>Höganäs, Skåne</p>

                  <p className="flex items-center gap-2"><Smartphone size={14}/>+46 708 68 81 46</p>

                  <p className="flex items-center gap-2"><Mail size={14}/>mimmie.vanerhag@gmail.com</p>

                  <a
                    href="https://www.linkedin.com/in/mimmie-vanerhag/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
                  >
                    <ArrowUpRight size={15} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="md:col-span-8 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="font-serif tracking-[0.01em] text-2xl md:text-4xl text-charcoal leading-tight mb-10 max-w-3xl">
              Frontendutvecklare med fokus på design, funkion och affärsförståelse.
            </h2>

            <div className="max-w-3xl h-px bg-industrial mb-10" />

            <div className="max-w-3xl space-y-6 text-charcoal/80 text-lg leading-relaxed">
              <p>
                Jag är en engagerad och nyfiken person som efter 
                flera år som egenföretagare tog klivet mot att utbilda mig till frontendutvecklare.
                Som utvecklare uppskattar jag särskilt kombinationen av problemlösning, kreativitet och struktur.
                För mig är varje detalj avgörande för att helheten i en digital produkt ska bli genomtänkt, stabil och hållbar.
              </p>

              <p>
                Att ständigt utvecklas och lära mig nytt är en stor drivkraft för mig. 
                Genom att använda AI som ett stöd i utvecklingsprocessen skapar jag mer effektiva arbetsflöden,
                 och frigör tid och fokus för att växa i min roll och höja nivån på det jag levererar.
              </p>
            </div>

            <div className="pt-16 space-y-16">
              {/* Utbildning */}
              <div>
                <h3 className="font-serif tracking-[0.01em] text-2xl md:text-3xl text-charcoal mb-8">
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
                <h3 className="font-serif tracking-[0.01em] text-2xl md:text-3xl text-charcoal mb-8">
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
                <h3 className="font-serif tracking-[0.01em] text-2xl md:text-3xl text-charcoal mb-8">
                  Bakgrund
                </h3>

                <div className="space-y-10">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1">
                      <h4 className="font-medium text-charcoal">
                        LIA · Thorn Creative Agency
                      </h4>
                      <span className="text-charcoal/50 text-sm md:pl-1">
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
                      <span className="text-charcoal/50 text-sm md:pl-1">
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
                      <span className="text-charcoal/50 text-sm md:pl-1">
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
                      <span className="text-charcoal/50 text-sm md:pl-1">
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
              className="mt-18 border-l-2 border-industrial pl-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
            >
              <p className="font-merriweather tracking-[0.01em] italic font-normal text-lg md:text-xl text-charcoal">
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
