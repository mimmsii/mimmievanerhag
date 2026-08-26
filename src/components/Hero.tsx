import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import HeroImage from '../assets/MimmieVanerhagHero4.png';

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
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-paper/25 via-transparent to-paper/60" />

        <motion.img
          src={HeroImage}
          alt="Mimmie Vänerhag"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full w-full object-cover opacity-80"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto grid grid-cols-12 gap-4 px-6 md:px-12">
        <div className="col-span-12 md:col-span-10 md:start-2">

          <div className="overflow-hidden mb-2">
            <motion.span
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="block pt-4 pl-2 text-xs font-medium uppercase tracking-[0.3em] text-charcoal"
            >
              Frontendutvecklare
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl pt-4 pb-4 leading-[0.9] text-charcoal md:text-6xl lg:text-7xl"
            >
              Mimmie Vänerhag
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md pl-2 pt-8 pb-4 font-sans text-xl font-medium leading-[1.8] text-charcoal italic"
            >
              – Jag drivs av att bygga digitala lösningar där design, teknik
              och affärsnytta möts.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}