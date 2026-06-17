import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-charcoal text-paper pt-32 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Main CTA */}
        <div className="border-b border-white/10 pb-24 mb-10">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl mb-12 leading-none">
            Vill ni veta mer?
            <br />
            <span className="text-paper/70 italic lg:text-6xl">
              Kontakta mig gärna!
            </span>
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-12">

            {/* Kontaktuppgifter */}
            <div className="space-y-4">
              <a
                href="mailto:mimmie.vanerhag@gmail.com"
                className="block text-paper text-lg hover:text-white/70 transition-colors"
              >
                mimmie.vanerhag@gmail.com
              </a>

              <a
                href="tel:0708688146"
                className="block text-paper text-lg hover:text-white/70 transition-colors"
              >
                0708 68 81 46
              </a>

              <a
                href="www.linkedin.com/in/mimmie-vänerhag-7b6a53274"
                target="_blank"
                rel="noreferrer"
                className="block text-paper font-sans text-lg hover:text-white/70 transition-colors"
              >
                LinkedIn
              </a>
            </div>

            {/* CTA */}
            <a
              href="/cv"
              className="group relative inline-flex items-center gap-4 text-sm uppercase tracking-widest cursor-pointer"
            >
              <span className="relative">
                Läs mer om mig

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-paper transition-all duration-300 group-hover:w-full" />
              </span>

              <span className="bg-industrial text-paper p-2 rounded-full group-hover:bg-white group-hover:text-charcoal transition-colors">
                <ArrowRight size={16} />
              </span>
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}
