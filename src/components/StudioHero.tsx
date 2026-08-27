import { Link } from 'react-router-dom';

import Studioimg from '../assets/monitor.jpg';

export default function StudioHero() {
  return (
    <section className="min-h-screen bg-paper pt-24 md:pt-28 lg:pt-36 pb-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-12 lg:px-20">

        {/* Vänster kolumn */}
        <div className="text-left">

          <span className="text-industrial uppercase tracking-[0.2em] text-xs font-medium">
            — Studio
          </span>

          <h1 className="mt-6 font-serif text-charcoal leading-[0.9]">
            <span className="block text-6xl md:text-7xl">
              Vänerhag Studio
            </span>
            <span className="mt-2 block text-4xl italic md:text-5xl pt-4">
              kommer snart
            </span>
          </h1>

          <p className="mt-10 max-w-md text-lg leading-relaxed text-charcoal/80">
            Här kommer du snart kunna läsa mer om hur jag arbetar med
            webbutveckling som frilansare – från idé till färdig digital
            upplevelse.
          </p>

          {/* CTA */}
          <div className="mt-16 max-w-lg bg-charcoal/97 border border-charcoal/20 rounded-3xl p-8 md:p-10">

            <span className="text-white text-xs uppercase tracking-[0.2em]">
              Har du något på gång?
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-paper md:text-4xl">
              Har du ett <span className="italic">projekt</span> eller en <span className="italic">idé?</span>
            </h2>

            <p className="mt-4 max-w-sm text-base leading-relaxed text-paper">
              Hör gärna av dig så tar vi det därifrån.
            </p>

            <div className="mt-7">
              <Link
                to="/kontakt"
                className="inline-block rounded-3xl border border-paper bg-charcoal/97 px-7 py-3 text-xs font-medium uppercase tracking-widest text-paper transition-colors duration-300 hover:bg-paper hover:text-charcoal"
              >
                Hör av dig
              </Link>
            </div>
          </div>

        </div>

        {/* Höger kolumn */}
        <div className="relative flex items-center justify-center">
          <div className="relative flex h-96 w-96 items-center justify-center md:h-[32rem] md:w-[32rem]">

            {/* Snurrande text */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] text-industrial">
              <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
                <defs>
                  <path
                    id="studio-circle"
                    d="M 50,50 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                  />
                </defs>

                <text
                  fontSize="5"
                  fontWeight="500"
                  letterSpacing="1.5"
                  fill="currentColor"
                >
                  <textPath href="#studio-circle">
                    IDÉ • STRATEGI • DESIGN • UTVECKLING • LANSERING • SEO • SUPPORT •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Bild */}
            <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-8 border-paper shadow-2xl md:h-96 md:w-96">
              <img
                src={Studioimg}
                alt="Studio"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}