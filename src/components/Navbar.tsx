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
    ? 'bg-black/95 backdrop-blur-md py-2 shadow-2xl border-b border-white/5' 
    : 'bg-transparent py-4';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${navBg}`}>
      
      {/* Logo Section - Το επαναφέραμε! */}
      <Link to="/" className="group flex items-center">
        <img 
          src={logo} 
          alt="Strakastruka Logo" 
          className="h-16 md:h-24 w-auto grayscale invert hover:scale-105 transition-transform duration-300 object-contain" 
        />
      </Link>

      {/* Right Side: Info & Navigation */}
      <div className="flex gap-8 md:gap-12 items-center">
        
        

        {/* Links με Inter - Πορτοκαλί Hover */}
        <div className="flex gap-6 md:gap-10 items-center">
          <Link 
            to="/" 
            className="font-inter font-black text-[16px] md:text-[20px] uppercase text-white hover:text-[#f15a24] transition-colors antialiased"
          >
            Home
          </Link>

          <Link 
            to="/menu" 
            className="font-inter font-black text-[16px] md:text-[20px] uppercase text-white hover:text-[#f15a24] transition-colors antialiased"
          >
            Menu
          </Link>

          <a 
            href={isHomePage ? "#contact" : "/#contact"} 
            className="font-inter font-black text-[16px] md:text-[20px] uppercase text-white hover:text-[#f15a24] transition-colors antialiased"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;