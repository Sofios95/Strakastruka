import { useEffect } from 'react';

const UntappdMenu = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://embed-menu-preloader.untappdapi.com/embed-menu-preloader.min.js";
    script.async = true;

    script.onload = () => {
      if ((window as any).PreloadEmbedMenu) {
        (window as any).PreloadEmbedMenu("menu-container", 50058, 175792);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      const container = document.getElementById('menu-container');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <section id="beers" className="bg-white py-24 px-6 scroll-mt-20 overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
            <p className="font-rubber text-[12vw] md:text-[6.5vw] text-black uppercase  tracking-tighter leading-none">
              ON TAP
            </p>
            <p className="font-rubber text-[7vw] md:text-[3.5vw] text-black/30 uppercase tracking-tighter leading-none">
              & BOTTLES/CANS
            </p>
          </div>
          
          <div className="flex items-center gap-3 mt-4">
             <span className="w-8 h-[1px] bg-[#f15a24]"></span>
             <p className="text-zinc-600 font-anton tracking-[0.3em] uppercase text-[30px]">
               Freshly updated from Untappd
             </p>
          </div>
        </div>

        {/* SPECIAL: TOP MARQUEE (ORDER AT THE BAR) */}
        <div className="mb-8 border-y-2 border-black py-3 overflow-hidden group cursor-default">
          <div className="flex whitespace-nowrap animate-marquee group-hover:pause">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="font-inter font-black text-2xl md:text-3xl uppercase tracking-tighter mx-4 text-black">
                ORDER AT THE BAR <span className="text-[#f15a24]">●</span>
              </span>
            ))}
          </div>
        </div>

        {/* Widget Container */}
        <div className="relative w-full overflow-hidden"> 
          <div 
            id="menu-container" 
            className="min-h-[1000px] w-full -mt-[150px] md:-mt-[180px]" 
          >
            {/* Loading State */}
            <div className="flex flex-col items-center justify-center pt-60 opacity-20">
                <div className="w-10 h-10 border-2 border-black/10 border-t-black rounded-full animate-spin"></div>
                <p className="text-black font-anton text-[10px] tracking-widest uppercase mt-4">
                  Loading Taps...
                </p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        /* Marquee Animation */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }
        .group-hover\\:pause:hover {
          animation-play-state: paused;
        }

        /* Untappd UI Overrides - Industrial & Clean */
        #menu-container .ut-menu-header,
        #menu-container .ut-menu-venue-info,
        #menu-container .ut-menu-updated,
        .ut-menu-header,
        .ut-menu-venue-info {
          display: none !important;
        }

        /* Γραμματοσειρά Inter - ΟΧΙ Italic */
        #menu-container * {
          font-family: 'Inter', sans-serif !important;
          text-transform: uppercase !important;
          font-style: normal !important;
        }

        /* Beer Names */
        #menu-container .ut-item-name {
          font-weight: 900 !important;
          font-size: 1.6rem !important;
          letter-spacing: -0.04em !important;
          color: #000 !important;
          line-height: 1.1 !important;
          margin-bottom: 4px !important;
        }

        @media (min-width: 768px) {
          #menu-container .ut-item-name {
            font-size: 2.8rem !important;
          }
        }

        /* Styles & ABV */
        #menu-container .ut-item-style {
          font-weight: 800 !important;
          color: #f15a24 !important;
          font-size: 1rem !important;
        }

        #menu-container .ut-brewery-name {
          font-weight: 800 !important;
          color: #888 !important;
        }

        /* Description - Κανονικό case για να διαβάζεται */
        #menu-container .ut-item-description {
          text-transform: none !important;
          font-weight: 500 !important;
          font-size: 0.95rem !important;
          line-height: 1.5 !important;
          color: #444 !important;
          margin-top: 10px !important;
          max-width: 800px !important;
        }

        /* Διαχωριστικό */
        #menu-container .ut-menu-item {
          border-bottom: 1px solid rgba(0,0,0,0.1) !important;
          padding: 3rem 0 !important;
        }

        #menu-container .ut-item-number,
        #menu-container .ut-more-info {
          display: none !important;
        }

        #menu-container {
          background-color: transparent !important;
        }

        /* Ratings */
        #menu-container .ut-rating {
          filter: grayscale(1) !important;
          margin-top: 12px !important;
        }
      `}</style>
    </section>
  );
};

export default UntappdMenu;