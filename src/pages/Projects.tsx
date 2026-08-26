import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyProjects from '../components/MyProjects';

export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="mt-20 bg-paper">

        <MyProjects />
      </main>

      <Footer />
    </>
  );
}