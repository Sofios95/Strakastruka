import { useEffect } from 'react';

const UntappdMenu = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://embed-menu-preloader.untappdapi.com/embed-menu-preloader.min.js";
    script.async = true;

    script.onload = () => {
      if ((window as any).PreloadEmbedMenu) {
        // ID 175792 φέρνει όλο το διαθέσιμο μενού
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
    <section id="beers" className="bg-white py-24 px-6 scroll-mt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header - Πιο μαζεμένο για να μη σπρώχνει το μενού */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
            <h2 className="font-rubber text-[12vw] md:text-[6.5vw] text-black uppercase italic tracking-tighter leading-none">
              ON TAP
            </h2>
            <h2 className="font-rubber text-[7vw] md:text-[3.5vw] text-black/30 uppercase italic tracking-tighter leading-none">
              & BOTTLES
            </h2>
          </div>
          
          <div className="flex items-center gap-3 mt-4">
             <span className="w-8 h-[1px] bg-[#ffcc00]"></span>
             <p className="text-zinc-400 font-anton tracking-[0.3em] uppercase text-[9px]">
                Freshly updated from Untappd
             </p>
          </div>
        </div>

        {/* Widget Container */}
        <div className="relative w-full overflow-hidden"> 
          <div 
            id="menu-container" 
            className="min-h-[1000px] w-full -mt-[130px]" 
          >
             {/* Loading State */}
             <div className="flex flex-col items-center justify-center mt-32 opacity-20">
                <div className="w-10 h-10 border-2 border-black/10 border-t-black rounded-full animate-spin"></div>
                <p className="text-black font-anton text-[10px] tracking-widest uppercase mt-4">
                   Loading Taps...
                </p>
             </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/5 text-center">
           <p className="font-anton text-[9px] text-zinc-400 uppercase tracking-widest">
             Strakastruka Music Joint • Exarcheia
           </p>
        </div>
      </div>
    </section>
  );
};

export default UntappdMenu;