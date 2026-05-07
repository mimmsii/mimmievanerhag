import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import HeroImage from '../assets/MimmieVanerhagHero4.png';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const textReveal = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-paper flex items-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-paper/20 via-transparent to-paper/80 z-10" />
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={HeroImage}
          alt="Mimmie Vänerhag"
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-10 md:start-2">
          <div className="overflow-hidden mb-2">
            <motion.span 
              custom={0}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="block pt-4 pl-2 text-paper uppercase tracking-[0.3em] text-xs md:text-xs font-medium"
            >
              Frontendutvecklare
            </motion.span>
          </div>

          
          <div className="overflow-hidden">
            <motion.h1 
              custom={2}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="font-serif text-4xl pt-4 pb-4 md:text-6xl lg:text-7xl leading-[0.9] text-charcoal"
            >
              Mimmie Vänerhag
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1 
              custom={3}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="font-serif text-xl font-medium pt-8 pb-4 pl-2 md:text-xl lg:text-xl leading-[1.8] text-charcoal max-w-md"
            >
              '' - Jag drivs av att bygga digitala produkter där design, teknik och verklig affärsnytta möts.''
            </motion.h1>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-charcoal/90 text-lg leading-relaxed max-w-md">
                
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
