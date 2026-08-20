import { motion } from 'motion/react';
import { ArrowUpRight, Code2, Layers, Sparkles } from 'lucide-react';
import swedsafeMain from '../assets/swedsafe-monitor-new.webp';
import swedsafeSecondary from '../assets/swedsafe-tablet.png';
import returnitMain from '../assets/returnit-laptop.webp';
import returnitSecondary from '../assets/returnit-mobile.jpg';
import kullensbryggeriMain from '../assets/kullensbryggeri-laptop.jpg';
import kullensbryggeriSecondary from '../assets/kullensbryggeri-mobile.jpg';
import florafrojdMain from '../assets/florafrojd-monitor.jpg';
import florafrojdSecondary from '../assets/florafrojd-mobile.jpg';
import optimarkMain from '../assets/optimark-monitor.jpg';
import swedlogMain from '../assets/swedlog-desktop.webp';
import swedlogSecondary from '../assets/swedlog-cookiebanner.png';

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
    tag: 'Frontend & Backend',
    tagColor: 'text-[#637863]',
    title: 'SwedSafe',
    subtitle: 'Webbplats åt global aktör',
    description:
      'Utvecklad från grunden med fokus på användarvänlighet och skalbarhet. Stor vikt lades vid dynamiska lösningar, scroll-baserade animationer och responsivitet.',
    builtWith: ['WordPress Divi', 'CSS', 'JavaScript', 'GSAP'],
    highlights: [
      'Utvecklad ur kundens perspektiv',
      'GSAP-animationer',
      'Pixelperfekt efter mockup'
    ],
    mainImage: swedsafeMain,
    secondaryImage: swedsafeSecondary,
    liveUrl: 'https://swedsafe.se'
  },
  {
    id: '02',
    tag: 'E-handel',
    tagColor: 'text-[#db0060]',
    title: 'Returnit',
    subtitle: 'Webbshop för ny produkt',
    description:
      'En ny webbshop med fokus på produkten och dess syfte. Utvecklingen riktades särskilt på flöde och användarvänlighet för kunderna. ',
    builtWith: ['WordPress Divi', 'WooCommerce', 'CSS', 'JavaScript'],
    highlights: [
      'Vyer baserade på inloggad eller utloggad användare',
      'Skräddarsydd CSS',
      'Hantering av flöden för kund och företag'
    ],
    mainImage: returnitMain,
    secondaryImage: returnitSecondary,
    liveUrl: 'https://returnit.nu'
  },
  {
    id: '03',
    tag: 'Frontend & Webbdesign',
    tagColor: 'text-[#CC830F]',
    title: 'Kullens Bryggeri',
    subtitle: 'Webbplats åt lokalt ölbryggeri',
    description:
      'En ny webbplats med fokus på att framhäva företagets hantverksmässiga identitet. Extra vikt lades på användarvänlighet, anpassad CSS & JavaScript med subtila animationer.',
    builtWith: ['WordPress Divi', 'CSS', 'JavaScript'],
    highlights: [
      'Responsivitet mellan olika skärmar',
      'Skräddarsydd meny med animationer',
      'Enkel för kund att underhålla'
    ],
    mainImage: kullensbryggeriMain,
    secondaryImage: kullensbryggeriSecondary,
  },
  {
    id: '04',
    tag: 'Webbdesign, Frontend & Backend',
    tagColor: 'text-[#b02121]',
    title: 'Flora & Fröjd',
    subtitle: 'En fiktiv webbshop med produkter lagrade i databas',
    description:
      'Mitt första större React-projekt där målet var att skapa en fiktiv webbshop som lagrade sina produkter i en databas.',
    builtWith: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Express', 'REST API', 'SQLite'],
    highlights: [
      'Sökfunktion av produkter',
      'Förståelse för struktur i en databas',
      'SQL-kommandon för att hantera stor mängd produktdata'
    ],
    mainImage: florafrojdMain,
    secondaryImage: florafrojdSecondary,
    githubUrl: 'https://github.com/mimmsii/florafrojd'
  },
  {
    id: '05',
    tag: 'Cookiebanner',
    tagColor: 'text-[#295c00]',
    title: 'Swedlog',
    subtitle: 'En cookiebanner byggd åt företaget Swedlog',
    description:
      'En webbplats som saknade cookiebanner behövde en manuellt byggd lösning. Fokus låg på att testa att cookies laddades korrekt beroende på användarens val.',
    builtWith: ['WebFlow', 'CSS', 'JavaScript'],
    highlights: [
      'Webbläsarens inspektera-verktyg',
      'Testning',
    ],
    mainImage: swedlogMain,
    secondaryImage: swedlogSecondary,
    liveUrl: 'https://swedlog.se',
  },
  {
    id: '06',
    tag: 'Tailwind CSS',
    tagColor: 'text-[#BF690D]',
    title: 'Optimark',
    subtitle: 'En webbsida byggd med fokus att träna på Tailwind CSS',
    description:
      'För att bättre lära mig Tailwind CSS byggdes en företagshemsida där fokus var att lära mig mer kring design och animationer.',
    builtWith: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    highlights: [
      'Tailwinds designsystem',
      'Scroll-animationer',
    ],
    mainImage: optimarkMain,
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
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Sekundärbild */}
                {project.secondaryImage && (
                  <div className="hidden sm:block absolute -bottom-4 right-0 sm:-bottom-8 sm:right-4 w-32 md:w-64 aspect-square overflow-hidden shadow-2xl border-1 border-paper z-10 bg-paper">
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
                className={`lg:col-span-5 space-y-5 ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Kategori-tagg & Siffra */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs uppercase tracking-widest backdrop-blur-xs font-medium -mb-1 ${project.tagColor}`}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Rubriker */}
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-charcoal">
                    {project.title}
                  </h2>
                  <p className="text-base pt-2 text-charcoal/80 italic">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm md:text-base font-light text-charcoal/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-charcoal/10">
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