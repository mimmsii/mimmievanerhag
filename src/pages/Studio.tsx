import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StudioHero from '../components/StudioHero';

export default function Studio() {
  return (
    <>
        <Navbar />

        <main className="pt-40 text-center">
            <StudioHero />
        </main>

        <Footer />
    </>

  );
}