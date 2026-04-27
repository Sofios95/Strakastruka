import React from 'react';

// Imports όλων των αρχείων από το src/assets
import imgBar from '../assets/img_bar.jpg';
import imgDj1 from '../assets/img_dj1.jpg';
import imgDj2 from '../assets/img_dj2.jpg';
import imgMerch from '../assets/img_merch.jpg';
import imgOut1 from '../assets/img_out1.jpg';
import imgOut2 from '../assets/img_out2.jpg';
import imgSign from '../assets/img_sign.jpg';
import imgTaps from '../assets/img_taps.jpg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';

const Gallery: React.FC = () => {
  // Οργάνωση όλου του υλικού σε ένα "χαοτικό" array
  const photos = [
    { src: imgBar, size: 'md:col-span-2 md:row-span-2', rotation: '-rotate-2' },
    { src: imgDj1, size: 'col-span-1', rotation: 'rotate-3' },
    { src: imgDj2, size: 'col-span-1', rotation: '-rotate-1' },
    { src: imgTaps, size: 'col-span-1', rotation: 'rotate-2' },
    { src: imgSign, size: 'col-span-1', rotation: '-rotate-3' },
    { src: imgOut1, size: 'md:col-span-2', rotation: 'rotate-1' },
    { src: imgOut2, size: 'col-span-1', rotation: '-rotate-2' },
    { src: imgMerch, size: 'col-span-1', rotation: 'rotate-3' },
    { src: img1, size: 'col-span-1', rotation: '-rotate-1' },
    { src: img2, size: 'col-span-1', rotation: 'rotate-2' },
    { src: img3, size: 'md:col-span-2', rotation: '-rotate-3' },
    { src: img4, size: 'col-span-1', rotation: 'rotate-1' },
    { src: img5, size: 'col-span-1', rotation: '-rotate-2' },
    { src: img6, size: 'col-span-1', rotation: 'rotate-3' },
    { src: img7, size: 'col-span-1', rotation: '-rotate-1' },
    { src: img8, size: 'col-span-1 md:col-span-2', rotation: 'rotate-2' },
    { src: img9, size: 'col-span-1', rotation: '-rotate-3' },
  ];

  return (
    <section id="gallery" className="bg-black py-24 px-4 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-industrial text-7xl md:text-9xl uppercase italic tracking-tighter text-white mb-16">
          APPROVED <br /> CHAOS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {photos.map((p, i) => (
            <div 
              key={i} 
              className={`
                relative group overflow-hidden bg-zinc-900 border border-white/10
                ${p.size} ${p.rotation} 
                transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-10 hover:border-white/50
              `}
            >
              <img 
                src={p.src} 
                alt={`strakastruka-vibe-${i}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl" 
              />
              
              {/* Overlay για το "vibe" */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-industrial text-2xl italic uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  RAW MOMENT
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer του Gallery */}
        <div className="mt-20 text-center">
          <p className="font-script text-zinc-500 text-4xl -rotate-2 opacity-50">
            strakastrüka nights...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;