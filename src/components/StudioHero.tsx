export default function StudioHero() {
  return (
    <section className="min-h-screen bg-paper pt-32 pb-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-12 lg:px-20">

        {/* Vänster kolumn */}
        <div>
          <span className="text-industrial uppercase tracking-[0.2em] text-xs font-medium">
            — Studio
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[0.9] text-charcoal md:text-7xl">
            Studio,
            <br />
            <span className="italic">kommer snart.</span>
          </h1>

          <p className="mt-10 max-w-md text-lg leading-relaxed text-charcoal/80">
            Här kommer du snart kunna läsa mer om hur jag arbetar med
            webbdesign och webbutveckling som frilansare – från idé till
            färdig digital upplevelse.
          </p>
        </div>

        {/* Höger kolumn */}
        <div className="relative flex items-center justify-center">
          <div className="relative flex h-80 w-80 items-center justify-center md:h-[28rem] md:w-[28rem]">

            {/* Snurrande text */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] text-industrial">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <path
                    id="studio-circle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>

                <text
                  fontSize="6"
                  fontWeight="500"
                  letterSpacing="1.5"
                  fill="currentColor"
                >
                  <textPath href="#studio-circle">
                    IDÉ • STRATEGI • DESIGN • UTVECKLING • LANSERING •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Bild */}
            <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-8 border-paper shadow-2xl md:h-96 md:w-96">
              <img
                src="/din-bild.jpg"
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