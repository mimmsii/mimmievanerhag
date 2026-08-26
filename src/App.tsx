import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import CVPage from './pages/CVPage';
import Studio from './pages/Studio';
import ScrollToHash from './components/ScrollToHash';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (

    <>
    <ScrollToHash />
    <ScrollToTop />
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/projekt" element={<Projects />} />
      <Route path="/studio" element={<Studio />} />
    </Routes>

    </>
  );
}
