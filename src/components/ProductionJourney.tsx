import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ProductionJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="py-32 bg-paper overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 md:w-1/2">
          <span className="text-industrial uppercase tracking-widest text-xs font-bold block mb-4">
            01 — The Process
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight">
            From raw pulp to <br/>
            <span className="italic text-industrial">precision product.</span>
          </h2>
        </div>

        {/* Broken Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          
          {/* Image 1 - Large Main */}
          <motion.div style={{ y: y1 }} className="col-span-1 md:col-span-6 md:col-start-2 relative z-10">
            <div className="aspect-[4/5] overflow-hidden bg-charcoal/5">
              <img 
                src="https://picsum.photos/seed/factory1/800/1000?grayscale" 
                alt="Industrial Machinery" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl max-w-xs hidden md:block">
              <p className="font-mono text-xs text-industrial mb-2">SPEC: HEIDELBERG XL 106</p>
              <p className="text-charcoal text-sm">Offset printing with 6 colors + double coating capabilities for maximum depth.</p>
            </div>
          </motion.div>

          {/* Image 2 - Overlapping Offset */}
          <motion.div style={{ y: y2 }} className="col-span-1 md:col-span-4 md:col-start-8 mt-12 md:mt-32 relative z-20">
             <div className="aspect-square overflow-hidden bg-charcoal/5">
              <img 
                src="https://picsum.photos/seed/texture_paper/600/600?grayscale" 
                alt="Fiber Texture" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 flex justify-between items-end border-b border-charcoal/20 pb-2">
              <span className="font-mono text-xs text-industrial">MATERIALITY</span>
              <span className="font-serif text-xl italic">Recycled Fiber</span>
            </div>
          </motion.div>

          {/* Technical Data Points - Floating */}
          <motion.div style={{ y: y3 }} className="col-span-1 md:col-span-3 md:col-start-1 mt-12 md:-mt-24 z-30">
             <div className="bg-charcoal text-paper p-8">
               <h4 className="font-serif text-2xl mb-6 italic">Metrics</h4>
               <ul className="space-y-4 font-mono text-xs tracking-wide">
                 <li className="flex justify-between border-b border-white/10 pb-2">
                   <span>TOLERANCE</span>
                   <span>±0.1mm</span>
                 </li>
                 <li className="flex justify-between border-b border-white/10 pb-2">
                   <span>GSM RANGE</span>
                   <span>80-800</span>
                 </li>
                 <li className="flex justify-between border-b border-white/10 pb-2">
                   <span>OUTPUT</span>
                   <span>18k/hr</span>
                 </li>
               </ul>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
