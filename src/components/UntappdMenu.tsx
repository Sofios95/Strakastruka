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
    <section id="beers" className="bg-white py-24 px-6 border-b border-zinc-100 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="font-industrial text-7xl md:text-9xl text-black uppercase italic tracking-tighter leading-none">
            ON TAP
          </h2>
          <div className="flex items-center gap-3 mt-4">
             <span className="w-8 h-[2px] bg-[#ffcc00]"></span>
             <p className="text-zinc-500 font-black tracking-[0.3em] uppercase text-[10px]">
               Live from Untappd Business
             </p>
          </div>
        </div>

        <div id="menu-container" className="min-h-[400px] w-full">
           <p className="text-zinc-300 animate-pulse uppercase font-black text-sm tracking-widest text-center mt-20">
             Connecting to the taps...
           </p>
        </div>
      </div>
    </section>
  );
};

export default UntappdMenu;