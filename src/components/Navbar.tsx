import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/strakastruka-logo.jpg'; 

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBg = !isHomePage || isScrolled 
    ? 'bg-black/95 backdrop-blur-sm py-2 shadow-2xl' 
    : 'bg-transparent py-4';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 flex justify-between items-center transition-all duration-500 ${navBg}`}>
      
      {/* Logo Section */}
      <Link to="/" className="group flex items-center">
        <img 
          src={logo} 
          alt="Strakastruka Logo" 
          className="h-16 md:h-24 w-auto grayscale invert hover:scale-105 transition-transform duration-300 object-contain" 
        />
      </Link>

      {/* Menu Links */}
      <div className="flex gap-6 md:gap-8 items-center">
        <Link 
          to="/" 
          className="font-anton text-[13px] md:text-[15px] tracking-[0.4em] uppercase text-white hover:text-[#ffcc00] transition-colors"
        >
          Home
        </Link>

        <Link 
          to="/menu" 
          className="font-anton text-[13px] md:text-[15px] tracking-[0.4em] uppercase text-white hover:text-[#ffcc00] transition-colors border border-white/20 px-3 py-1 rounded-sm"
        >
          Menu
        </Link>

        {/* Εδώ το href πρέπει να είναι #contact για να ταιριάζει με το ID του Footer */}
        <a 
          href={isHomePage ? "#contact" : "/#contact"} 
          className="font-anton text-[13px] md:text-[15px] tracking-[0.4em] uppercase text-white hover:text-[#ffcc00] transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;