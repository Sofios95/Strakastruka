import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img14 from '../assets/img14.jpg';
import img15 from '../assets/img15.jpg';
import img16 from '../assets/img16.jpg';
import img17 from '../assets/img17.jpg';
import imgBckgrnd from '../assets/imgbckgrnd.jpg';

const Gallery: React.FC = () => {
  const photos = [
    { src: imgBckgrnd, size: 'md:col-span-2 md:row-span-2', rotation: '-rotate-1' },
    { src: img1, size: 'col-span-1', rotation: 'rotate-2' },
    { src: img2, size: 'col-span-1', rotation: '-rotate-2' },
    { src: img3, size: 'md:col-span-2', rotation: 'rotate-1' },
    { src: img10, size: 'col-span-1', rotation: '-rotate-3' },
    { src: img4, size: 'col-span-1', rotation: 'rotate-2' },
    { src: img11, size: 'md:col-span-2', rotation: '-rotate-1' },
    { src: img5, size: 'col-span-1', rotation: 'rotate-3' },
    { src: img12, size: 'col-span-1', rotation: '-rotate-2' },
    { src: img6, size: 'col-span-1', rotation: 'rotate-1' },
    { src: img14, size: 'col-span-1', rotation: '-rotate-3' },
    { src: img7, size: 'md:col-span-2', rotation: 'rotate-2' },
    { src: img15, size: 'col-span-1', rotation: '-rotate-2' },
    { src: img8, size: 'md:col-span-2 md:row-span-2', rotation: 'rotate-1' },
    { src: img16, size: 'col-span-1', rotation: '-rotate-2' },
    { src: img9, size: 'col-span-1', rotation: 'rotate-3' },
    { src: img17, size: 'col-span-1', rotation: '-rotate-1' },
  ];

  return (
    <section id="gallery" className="bg-black py-24 px-6 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Title: Approved Chaos - Επαναφορά στο αρχικό στυλ με <p> */}
        <div className="mb-20">
          <div className="font-brand text-5xl md:text-8xl   tracking-tighter text-white leading-[0.8] antialiased select-none">
            <p>Approved</p>
            <p className="text-outline-white hover:text-white transition-all duration-500">CHAOS</p>
          </div>
          <div className="h-[2px] w-20 bg-[#f15a24] mt-6"></div>
        </div>

        {/* Chaos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[180px] md:auto-rows-[240px]">
          {photos.map((p, i) => (
            <div 
              key={i} 
              className={`relative group overflow-hidden bg-zinc-900 border border-white/5 ${p.size} ${p.rotation} transition-all duration-700 hover:rotate-0 hover:scale-[1.02] hover:z-10 hover:border-[#f15a24]/50 shadow-2xl`}
            >
              <img 
                src={p.src} 
                alt={`vibe-${i}`} 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-1000" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-inter font-black text-xl uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#f15a24]">raw</span> moment
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Nights */}
        <div className="mt-24 flex flex-col items-center">
          <div className="w-full h-[1px] bg-white/10 mb-12"></div>
          <p className="font-brand text-zinc-600 text-4xl md:text-7xl opacity-40 hover:opacity-100 hover:text-white transition-all duration-500 cursor-default antialiased uppercase">
            strakastrüka nights
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;