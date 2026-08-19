import { motion } from 'motion/react';
import { ArrowUpRight, Code2, Layers, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  description: string;
  builtWith: string[];
  highlights: string[];
  mainImage: string;
  secondaryImage?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    id: '01',
    tag: 'E-handel & Frontend',
    tagColor: 'border-[#f19737] text-[#f19737] bg-[#f19737]/10',
    title: 'Nordic Essence',
    subtitle: 'Minimalistisk e-handelsplattform för hållbar inredning',
    description:
      'Utvecklad från grunden med fokus på optimerad prestanda, sömlösa mikrointeraktioner och tillgänglighet enligt WCAG 2.1.',
    builtWith: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'Custom checkout-flöde med live-validering',
      'Lighthouse Score: 98/100 på alla sidor',
      'Optimerad bildladdning med blur-up placeholders'
    ],
    mainImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '02',
    tag: 'Webbapp & Dashboard',
    tagColor: 'border-[#fea0da] text-[#fea0da] bg-[#fea0da]/10',
    title: 'Studio Pulse',
    subtitle: 'Resurshantering och tidsplanering för kreativa byråer',
    description:
      'En interaktiv SaaS-dashboard med dynamiska datavyer, drag-and-drop-kalendrar och realtidsuppdateringar via API.',
    builtWith: ['React', 'Next.js', 'Tailwind CSS', 'Lucide Icons'],
    highlights: [
      'Drag-and-drop schemaläggning',
      'Dark & light mode med CSS-variabler',
      'Modulär arkitektur byggd med Atomic Design'
    ],
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    liveUrl: 'https://example.com'
  },
  {
    id: '03',
    tag: 'Varumärke & Webbdesign',
    tagColor: 'border-[#215fc3] text-[#215fc3] bg-[#215fc3]/10',
    title: 'Kafferosteriet Skåne',
    subtitle: 'Interaktiv digital identitet och prenumerationsportal',
    description:
      'Ett konceptuellt webbprojekt med scroll-baserade animationer och en anpassad produktkonfigurator för månatliga kaffeleveranser.',
    builtWith: ['HTML5', 'Tailwind CSS', 'JavaScript', 'GSAP'],
    highlights: [
      'Scroll-drivna parallax-sektioner',
      'Skräddarsydd quiz för val av kaffeböna',
      'Snabb laddtid med sub-second page transitions'
    ],
    mainImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '04',
    tag: 'Fullstack & Auth',
    tagColor: 'border-[#1FA863] text-[#1FA863] bg-[#1FA863]/10',
    title: 'Aura Journal',
    subtitle: 'Minimalistisk dagboks- och reflektionsapp',
    description:
      'En säker plats för daglig reflektion med full end-to-end kryptering och anpassningsbara humörgrafer över tid.',
    builtWith: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    highlights: [
      'Autentisering via JWT och session cookies',
      'Datavisualisering med SVG-kurvor',
      'Full offline-support via Service Worker'
    ],
    mainImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&auto=format&fit=crop&q=80',
    githubUrl: 'https://github.com'
  },
  {
    id: '05',
    tag: 'Komponentbibliotek',
    tagColor: 'border-[#808bc2] text-[#808bc2] bg-[#808bc2]/10',
    title: 'Canvas UI Kit',
    subtitle: 'Ett tillgängligt och tema-anpassat designsystem',
    description:
      'Ett öppet komponentbibliotek med fokus på rena API:er, tangentbordsnavigering och enkel konfiguration via design tokens.',
    builtWith: ['TypeScript', 'React', 'Storybook', 'Tailwind CSS'],
    highlights: [
      'Över 30 fullt tillgängliga komponenter',
      'Testat med Jest & React Testing Library',
      'Automatiserad dokumentation i Storybook'
    ],
    mainImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '06',
    tag: 'Event & Interaktion',
    tagColor: 'border-[#f19737] text-[#f19737] bg-[#f19737]/10',
    title: 'Lumina Fest',
    subtitle: 'Mobilanpassad festivalguide med interaktiv tidslinje',
    description:
      'En interaktiv schema-app som låter besökare bygga sitt eget festivalprogram och lyssna på artist-previews direkt i webbläsaren.',
    builtWith: ['React', 'Framer Motion', 'Web Audio API', 'Tailwind CSS'],
    highlights: [
      'Filtrering i realtid utan sidomladdningar',
      'Ljudspelare med Web Audio API',
      'Responsiv layout för mobil och surfplatta'
    ],
    mainImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80',
    liveUrl: 'https://example.com'
  }
];

export default function MyProjects() {
  return (
    <section className="w-full bg-paper py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 space-y-24 md:space-y-36">
        {projectsData.map((project, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Bildsektion */}
              <div
                className={`lg:col-span-7 relative group ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative overflow-hidden shadow-xl border border-charcoal/10 bg-paper aspect-4/3 md:aspect-16/10">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Sekundärbild */}
                {project.secondaryImage && (
                  <div className="hidden sm:block absolute -bottom-4 right-0 sm:-bottom-6 sm:right-2 w-32 md:w-44 aspect-square overflow-hidden shadow-2xl border-1 border-paper z-10 bg-paper">
                    <img
                      src={project.secondaryImage}
                      alt=""
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              {/* Text & Detaljer */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Kategori-tagg & Siffra */}
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`text-xs uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-xs font-medium ${project.tagColor}`}
                  >
                    {project.tag}
                  </span>
                  <span className="text-sm font-light text-charcoal/40 font-mono">
                    /{project.id}
                  </span>
                </div>

                {/* Rubriker */}
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight text-charcoal">
                    {project.title}
                  </h2>
                  <p className="text-base text-charcoal/80 italic font-light">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm md:text-base font-light text-charcoal/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-charcoal/10">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal/50 font-medium">
                    <Sparkles size={13} />
                    Highlights & Lärdomar
                  </div>
                  <ul className="space-y-1.5 text-xs md:text-sm font-light text-charcoal/80">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-charcoal/40 select-none">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Teknikstack */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal/50 font-medium mb-3">
                    <Layers size={13} />
                    Teknikstack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.builtWith.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-md bg-paper border border-charcoal/10 text-charcoal/80 font-mono shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action-knappar */}
                <div className="flex items-center gap-4 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-paper text-xs uppercase tracking-widest font-medium hover:bg-btnhoover transition-colors duration-300 shadow-sm"
                    >
                      Visa Live
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-charcoal/30 text-charcoal text-xs uppercase tracking-widest font-medium hover:bg-charcoal hover:text-paper transition-all duration-300 bg-paper"
                    >
                      <Code2 size={15} />
                      Källkod
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}