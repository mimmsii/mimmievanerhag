import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyProjects from '../components/MyProjects';

export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="pt-21 bg-gradient-to-l from-industrial/50 to-sandlight">

        <MyProjects />
      </main>

      <Footer />
    </>
  );
}