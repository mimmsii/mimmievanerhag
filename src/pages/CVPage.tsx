import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CV from '../components/CV';

export default function CVPage() {
  return (
    <>
      <Navbar />

      <main className="pt-25 bg-sand">
        <h1 className="text-4xl font-light underline underline-offset-6 decoration-2 decoration-solid font-sans text-center pb-15">
          CV
        </h1>
        <CV />
      </main>

      <Footer />
    </>
  );
}