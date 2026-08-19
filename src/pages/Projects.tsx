import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyProjects from '../components/MyProjects';

export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="pt-25 bg-sand">
        <h1 className="text-4xl font-light underline underline-offset-6 decoration-2 decoration-solid font-sans uppercase text-center pb-15">
          Projekt
        </h1>

        <MyProjects />
      </main>

      <Footer />
    </>
  );
}