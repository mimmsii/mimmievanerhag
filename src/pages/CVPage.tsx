import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CV from '../components/CV';

export default function CVPage() {
  return (
    <>
      <Navbar />

      <main>
        <CV />
      </main>

      <Footer />
    </>
  );
}