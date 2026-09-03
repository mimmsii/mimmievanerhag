import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { label: 'CV', path: '/cv' },
    { label: 'Projekt', path: '/projekt' },
    { label: 'Studio', path: '/studio' },
  ];

  const handleContactClick = () => {
    document.getElementById('kontakt')?.scrollIntoView({
      behavior: 'smooth',
    });

    setIsMenuOpen(false);
  };

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
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 transition-all duration-300 flex justify-between items-center ${
          isScrolled
            ? 'bg-paper/80 backdrop-blur-md border-b border-charcoal/5'
            : 'bg-transparent'
        }`}
      >
        {/* Logo / Home Link */}
        <Link
          to="/"
          className={`font-damion font-thin italic text-2xl tracking-tight transition-colors duration-300 ${
            isHomePage && !isScrolled
              ? 'text-paper/80 md:text-charcoal'
              : 'text-charcoal'
          }`}
        >
          Mimmie Vänerhag
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors relative group ${
                isScrolled || !isHomePage
                  ? 'text-charcoal hover:text-industrial'
                  : 'text-white hover:text-white'
              }`}
            >
              {item.label}

              <span
                className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  isScrolled || !isHomePage ? 'bg-charcoal' : 'bg-white'
                }`}
              />
            </Link>
          ))}

          <button
            onClick={handleContactClick}
            className="rounded-3xl cursor-pointer bg-paper/50 border border-charcoal text-charcoal px-6 py-2 text-xs font-medium uppercase tracking-widest hover:bg-charcoal hover:text-paper transition-colors duration-300"
          >
            Kontakt
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            isHomePage && !isScrolled ? 'text-paper/80' : 'text-charcoal'
          }`}
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
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="font-serif text-3xl tracking-[0.01em] text-charcoal hover:text-industrial transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={handleContactClick}
            className="font-serif text-3xl tracking-[0.01em] text-charcoal hover:text-industrial transition-colors"
          >
            Kontakt
          </button>
        </motion.div>
      )}
    </>
  );
}
