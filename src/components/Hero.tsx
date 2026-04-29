import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/imgbckgrnd.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-start pt-48 md:pt-64 px-6 md:px-12 group overflow-hidden bg-black">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10 bg-noise"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105 grayscale brightness-[0.2]"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative z-20 w-full max-w-[1800px] mx-auto">
        <h1 className="uppercase italic flex flex-col items-start select-none">
          {/* STRAKASTRÜKA: Πιο μαζεμένο, θυμίζει το logo2 */}
          <div className="flex flex-col leading-[0.8] tracking-[-0.07em] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <span className="font-rubber text-[8vw] md:text-[6vw] text-white opacity-100">
              strakastrüka
            </span>
          </div>
          
          {/* Music Joint */}
          <span className="font-anton text-white opacity-40 text-[4vw] md:text-[1.5vw] mt-4 tracking-[0.5em]">
            MUSIC JOINT
          </span>
        </h1>

        <div className="mt-12 md:mt-16 flex flex-col items-start gap-8">
          <div className="h-[2px] w-16 bg-[#ffcc00] opacity-80"></div>
          
          <h2 className="font-anton text-zinc-400 text-[12px] md:text-[16px] tracking-[0.3em] uppercase max-w-sm leading-relaxed">
            Exarcheia • Athens <br /> Craft Beer & Raw Sounds
          </h2>
          
          <Link 
            to="/menu" 
            className="font-anton px-10 py-4 border-2 border-white/20 text-[12px] md:text-[14px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all duration-500"
          >
            Explore the menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;