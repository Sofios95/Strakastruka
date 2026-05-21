import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'; // Εισαγωγή του Provider

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import UntappdMenu from './components/UntappdMenu';
import Menu from './components/Menu';

// --- Smart Scroll Handler (TypeScript Version) ---
const ScrollHandler: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Χρησιμοποιούμε setTimeout για να βεβαιωθούμε ότι το component έχει γίνει mount
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        
        return () => clearTimeout(timer); // Cleanup του timer
      }
    }
  }, [pathname, hash]);

  return null;
};

// --- Home Page ---
const Home: React.FC = () => (
  <main>
    <Hero />
    <Gallery />
  </main>
);

// --- Menu Page ---
const MenuPage: React.FC = () => (
  <main className="pt-20 bg-white min-h-screen">
    <UntappdMenu />
    <Menu />
  </main>
);

function App() {
  return (
    // Τυλίγουμε όλη την εφαρμογή με τον Provider για να λειτουργεί το reCAPTCHA v3 παντού
    <GoogleReCaptchaProvider reCaptchaKey="6Ld7I_UsAAAAAKYAurK5JLNuNZomdjGif04Whav8">
      <Router>
        <ScrollHandler />
        
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </GoogleReCaptchaProvider>
  );
}

export default App;