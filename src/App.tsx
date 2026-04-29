import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import UntappdMenu from './components/UntappdMenu';
import Menu from './components/Menu'; // <-- Εδώ εισάγουμε το αρχείο με τα Cocktails

// Helper για να ξεκινάει η σελίδα από πάνω
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Home Page (Hero + Gallery) ---
const Home = () => (
  <main>
    <Hero />
    <Gallery />
  </main>
);

// --- Menu Page (Beers + Cocktails) ---
const MenuPage = () => (
  <main className="pt-20 bg-white min-h-screen">
    {/* 1. Το Widget με τις Μπύρες */}
    <UntappdMenu />
    
    {/* 2. Ο κατάλογος με Cocktails/Spirits */}
    <Menu />
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
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