import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CV from '../components/CV';

export default function CVPage() {
  return (
    <>
      <Navbar />

      <main className="pt-30 bg-charcoal/22">
        <h1 className="text-5xl font-serif text-center pb-20">
          CV
        </h1>
        <CV />
      </main>

      <Footer />
    </>
  );
}