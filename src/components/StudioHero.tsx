import Studioimg from '../assets/monitor.jpg';

export default function StudioHero() {
  return (
    <section className="min-h-screen bg-paper pt-24 md:pt-28 lg:pt-36 pb-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Vänster kolumn */}
          <div className="text-left">

            <span className="text-industrial uppercase tracking-[0.2em] text-xs font-bold">
              — Studio
            </span>

            <h1 className="mt-6 font-serif leading-[0.9] text-charcoal">
              <span className="block text-6xl md:text-7xl">
                Vänerhag Studio
              </span>

              <span className="mt-2 block pt-4 text-3xl italic tracking-[0.01em] md:text-4xl">
                kommer snart
              </span>
            </h1>

            {/* Introduktion */}
            <div className="mt-10 max-w-xl space-y-6 text-lg leading-relaxed text-charcoal/80">

              <p>
                Här kommer du snart kunna läsa mer om hur jag arbetar med webbutveckling och frilansuppdrag.
              </p>

              <p>
                
              </p>

            </div>

          </div>


          {/* Höger kolumn */}
          <div className="flex items-center justify-center">

            <div className="relative flex h-96 w-96 items-center justify-center md:h-[32rem] md:w-[32rem]">

              {/* Snurrande text */}
              <div className="absolute inset-0 animate-[spin_28s_linear_infinite] text-industrial">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full overflow-visible"
                >
                  <defs>
                    <path
                      id="studio-circle"
                      d="M 50,50 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                    />
                  </defs>

                  <text
                    fontSize="4.5"
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
      </div>
    </section>
  );
}