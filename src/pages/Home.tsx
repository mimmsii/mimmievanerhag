import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutStart from '../components/AboutStart';
import ProductGallery from '../components/ProductGallery';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-charcoal font-sans selection:bg-industrial selection:text-white">
      <Navbar />
      <Hero />
      <AboutStart />
      <ProductGallery />
      <Footer />
    </div>
  );
}