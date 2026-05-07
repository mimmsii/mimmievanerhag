import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 transition-all duration-300 flex justify-between items-center ${
          isScrolled ? 'bg-paper/80 backdrop-blur-md border-b border-charcoal/5' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-industrial rounded-full" />
          <span className="font-serif italic text-xl tracking-tight text-charcoal">
            Mimmie Vänerhag
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {['Projekt', 'CV', 'Studio'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] font-medium text-charcoal hover:text-industrial transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-charcoal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button className="rounded-3xl bg-charcoal text-paper px-6 py-2 text-xs uppercase tracking-widest hover:bg-btnhoover transition-colors">
            Kontakt
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {['Projekt', 'CV', 'Studio', 'Kontakt'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-serif text-4xl text-charcoal hover:text-industrial transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
