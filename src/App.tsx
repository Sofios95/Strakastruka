import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import UntappdMenu from './components/UntappdMenu';
import Menu from './components/Menu';

// Helper component για να ξεκινάει η σελίδα από την κορυφή σε κάθε αλλαγή route
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- HOME PAGE LAYOUT ---
const Home = () => (
  <>
    <Hero />
    <Gallery />
  </>
);

// --- MENU PAGE LAYOUT ---
const MenuPage = () => (
  <div className="pt-16 md:pt-24 bg-black"> 
    {/* Το padding (pt) εξασφαλίζει ότι το περιεχόμενο δεν θα κρύβεται πίσω από τον Navbar */}
    <UntappdMenu />
    <section id="static-menu" className="bg-white text-black relative z-30">
      <Menu />
    </section>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black scroll-smooth overflow-x-hidden">
        
        {/* Ο Navbar και το Footer είναι έξω από τα Routes για να εμφανίζονται παντού */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;