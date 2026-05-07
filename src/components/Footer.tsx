import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-paper pt-32 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Main CTA */}
        <div className="border-b border-white/10 pb-24 mb-24">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12 leading-none">
            Let's shape <br/>
            <span className="text-industrial italic">the future.</span>
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="max-w-md text-white/60 text-lg">
              Ready to elevate your brand's physical presence? 
              Our studio is open for new partnerships.
            </p>
            <button className="group flex items-center gap-4 text-sm uppercase tracking-widest hover:text-industrial transition-colors">
              Start a Project
              <span className="bg-white text-charcoal p-4 rounded-full group-hover:bg-industrial group-hover:text-white transition-colors">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>

        {/* Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-industrial rounded-full" />
              <span className="font-serif font-bold text-xl tracking-tight">
                KB.
              </span>
            </div>
            <p className="text-white/40 max-w-xs">
              Kartongbolaget AB<br/>
              Industrivägen 12<br/>
              123 45 Stockholm, Sweden
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-industrial uppercase tracking-widest mb-6">Sitemap</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Expertise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Studio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-industrial uppercase tracking-widest mb-6">Social</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center text-xs text-white/20 uppercase tracking-widest">
          <p>© 2024 Kartongbolaget. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
