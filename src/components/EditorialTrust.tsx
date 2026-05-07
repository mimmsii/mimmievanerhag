import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function EditorialTrust() {
  return (
    <section className="py-32 bg-paper border-t border-charcoal/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Header Column */}
          <div className="md:col-span-4">
            <span className="text-industrial uppercase tracking-widest text-xs font-bold block mb-6">
              02 — Our Ethos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-8">
              Built on trust, <br/>
              <span className="italic">sustained by nature.</span>
            </h2>
            <div className="w-12 h-[1px] bg-industrial mb-8" />
          </div>

          {/* Editorial Content Columns */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-charcoal/80 leading-relaxed text-lg">
            <div>
              <p className="mb-6">
                <span className="float-left text-7xl font-serif text-industrial leading-[0.8] mr-3 mt-[-6px]">S</span>
                ince 1984, Kartongbolaget has stood at the intersection of industrial capability and artisanal care. We don't just manufacture boxes; we engineer first impressions. In a world increasingly conscious of its footprint, we believe that luxury and sustainability are not opposing forces, but complementary necessities.
              </p>
              <p>
                Our facility in Stockholm runs on 100% renewable energy, and our sourcing protocols are among the strictest in the industry. We partner with forestry initiatives that ensure for every tree harvested, three are planted.
              </p>
            </div>
            
            <div className="flex flex-col justify-between">
              <p className="mb-8">
                Reliability in B2B partnerships is our cornerstone. We understand that packaging is a critical node in your supply chain. Our "Just-in-Time" logistics and inventory management systems provide the stability global brands require to scale without friction.
              </p>
              
              <blockquote className="relative p-6 bg-charcoal/5 border-l-2 border-industrial">
                <Quote className="absolute top-4 left-4 w-6 h-6 text-industrial/20 rotate-180" />
                <p className="font-serif text-xl italic text-charcoal relative z-10 pt-4">
                  "The packaging is the silent ambassador of the brand. We ensure it speaks eloquently."
                </p>
                <footer className="mt-4 font-mono text-xs uppercase tracking-widest text-industrial">
                  — Jonas Berg, Head of Design
                </footer>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
