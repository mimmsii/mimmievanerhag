import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import swedsafeImg from '../assets/swedsafeHero2.png';
import kullensImg from '../assets/KullensbryggeriHero.png';
import returnitImg from '../assets/returnitHero.png';
import optimarkImg from '../assets/optimarkHero.png';

const projects = [
  { id: 1, title: 'SwedSafe', category: 'Cosmetics', size: 'col-span-1 md:col-span-2 row-span-2', img: swedsafeImg },
  { id: 2, title: 'Kullens Bryggeri', category: 'Electronics', size: 'col-span-1 md:col-span-1 row-span-1', img: kullensImg },
  { id: 3, title: 'Returnit', category: 'Beverage', size: 'col-span-1 md:col-span-1 row-span-1', img: returnitImg },
  { id: 4, title: 'Optimark', category: 'Fashion', size: 'col-span-1 md:col-span-1 row-span-2', img: optimarkImg },
  { id: 5, title: 'SundGrund', category: 'Fashion', size: 'col-span-1 md:col-span-1 row-span-2', img: 'https://picsum.photos/seed/box4/400/800' },
  { id: 6, title: 'Flora & Fröjd', category: 'Lighting', size: 'col-span-1 md:col-span-2 row-span-1', img: 'https://picsum.photos/seed/box5/800/400' },
];

export default function ProductGallery() {
  return (
    <section className="py-32 bg-paper">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-industrial uppercase tracking-widest text-xs font-bold block mb-4">
              — Utvalda projekt
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Utvalda projekt
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-industrial transition-colors">
            Se alla projekt <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 h-[120vh] md:h-[800px]">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`relative group overflow-hidden bg-charcoal/5 ${project.size}`}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
                <span className="text-industrial text-xs uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="text-white font-serif text-3xl mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {project.title}
                </h3>
                <button className="text-white border border-white/30 px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-charcoal transition-colors translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                  Se mer
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden flex justify-center">
           <button className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-industrial transition-colors">
            View All Projects <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
