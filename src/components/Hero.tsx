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
        <p className="select-none">
  {/* Μην βάζεις tracking-[-0.07em] εδώ, άστο να το πάρει από το CSS */}
  <span className="font-brand text-[9vw] md:text-[6vw] text-white leading-none block antialiased">
    strakastrüka
  </span>
</p>

        <div className="mt-12 md:mt-16 flex flex-col items-start gap-12">
          {/* Πορτοκαλί διαχωριστική γραμμή #f15a24 */}
          <div className="h-[4px] w-32 md:w-56 bg-[#f15a24]"></div>
          
          {/* Tagline: Inter Black (Μεγάλα γράμματα για desktop) */}
          <h2 className="font-inter font-black text-zinc-300 text-[28px] md:text-[80px] tracking-tighter uppercase max-w-5xl leading-[0.85]">
            Craft Beer & <br />
            Raw Sounds
          </h2>
          
          {/* Button: Πορτοκαλί #f15a24 */}
          <Link 
            to="/menu" 
            className="font-inter font-extrabold px-14 py-6 border-2 border-[#f15a24] text-[#f15a24] text-[18px] md:text-[24px] tracking-[0.2em] uppercase hover:bg-[#f15a24] hover:text-white transition-all duration-500"
          >
            Explore the menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;