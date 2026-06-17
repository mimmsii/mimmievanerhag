import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

import swedsafeImg from '../assets/swedsafeHero2.png';
import kullensImg from '../assets/KullensbryggeriHero.png';
import returnitImg from '../assets/returnitHero.png';
import florafrojdImg from '../assets/florafrojdheroimg.png';

const featuredProjects = [
  {
    id: 1,
    title: 'SwedSafe',
    img: swedsafeImg,
  },
  {
    id: 2,
    title: 'Kullens Bryggeri',
    img: kullensImg,
  },
  {
    id: 3,
    title: 'Returnit',
    img: returnitImg,
  },
  {
    id: 4,
    title: 'Flora & Fröjd',
    img: florafrojdImg,
  },
];

export default function ProductGallery() {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-industrial uppercase tracking-widest text-xs font-bold block mb-4">
            — Portfolio
          </span>

          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            Utvalda projekt
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Bild */}
              <div className="aspect-[20/10] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-103 group-hover:grayscale-0"
                />
              </div>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Innehåll */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <div className="flex items-end gap-4">
                  <h3 className="font-serif text-white text-2xl md:text-3xl">
                    {project.title}
                  </h3>

                  <div className="flex h-5 w-5 mb-1 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition group-hover:bg-paper group-hover:text-charcoal">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="/projekt"
            className="text-xs uppercase tracking-[0.2em] font-medium text-charcoal hover:text-industrial transition-colors relative group"
          >
            Se alla projekt

            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-charcoal transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </section>
  );
}