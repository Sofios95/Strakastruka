import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/img_bar.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center px-4 group overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10 bg-noise"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105 grayscale brightness-[0.25]"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start text-left">
        <h1 className="font-industrial text-[14vw] md:text-[8vw] leading-[0.8] uppercase italic tracking-tighter mix-blend-difference flex flex-col items-start">
          <span className="opacity-90">STRAKA</span>
          <span className="text-outline-white group-hover:text-white transition-all duration-500 group-hover:animate-glitch">STRÜKA</span>
          <span className="flex flex-col opacity-30 text-[10vw] md:text-[6vw]">
            <span>MUSIC</span>
            <span>JOINT</span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col items-start gap-4">
          <div className="h-[3px] w-20 bg-white opacity-60"></div>
          <h2 className="text-zinc-400 text-[10px] md:text-sm tracking-[0.6em] uppercase font-black">
            Exarcheia • Athens • Craft Beer & Raw Sounds
          </h2>
          
          {/* Link για τη σελίδα του Menu */}
          <Link 
            to="/menu" 
            className="mt-4 px-10 py-4 border-2 border-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-500 transform hover:translate-x-2 inline-block"
          >
            Explore the menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;