import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import HeroImage from '../assets/MimmieVanerhagHero6.webp';

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full items-center overflow-hidden bg-paper"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-paper/10 via-transparent to-paper/60" />

          {/* Extra ljust lager – endast på mobil */}
          <div className="absolute inset-0 z-10 bg-paper/60 md:bg-transparent" />

        <motion.img
          src={HeroImage}
          alt="Mimmie Vänerhag"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="h-full w-full object-cover object-[70%_center] opacity-80 md:object-center"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto grid grid-cols-12 gap-4 px-6 md:px-12 lg:px-20 translate-y-6 md:translate-y-0">
        <div className="col-span-12 md:col-span-10 md:start-2">

          <div className="overflow-hidden mb-2">
            <motion.span
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
              className="block pt-4 pl-2 text-xs font-medium uppercase tracking-[0.3em] text-charcoal"
            >
              Frontendutvecklare
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-serif text-4xl pt-4 pb-4 leading-[0.9] text-charcoal md:text-6xl lg:text-7xl"
            >
              Mimmie Vänerhag
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 max-w-xl border-l-2 border-industrial pl-6"
            >
              <p className="font-merriweather tracking-[0.01em] italic text-lg md:text-xl font-normal text-charcoal leading-relaxed">
                "Jag drivs av att bygga digitala lösningar där design, teknik
                och affärsnytta möts."
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-4 pl-6 pt-8"
            >
              <Link
                to="/cv"
                className="rounded-3xl cursor-pointer bg-paper/10 border border-charcoal text-charcoal px-6 py-2 text-xs font-medium uppercase tracking-widest hover:bg-charcoal hover:text-paper transition-colors duration-300"
              >
                Om mig
              </Link>

              <Link
                to="/projekt"
                className="rounded-3xl cursor-pointer bg-paper/10 border border-charcoal text-charcoal px-6 py-2 text-xs font-medium uppercase tracking-widest hover:bg-charcoal hover:text-paper transition-colors duration-300"
              >
                Projekt
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}