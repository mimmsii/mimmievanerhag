/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductionJourney from './components/ProductionJourney';
import EditorialTrust from './components/EditorialTrust';
import ProductGallery from './components/ProductGallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-charcoal font-sans selection:bg-industrial selection:text-white">
      <Navbar />
      <Hero />
      <ProductGallery />
      <Footer />
    </div>
  );
}

