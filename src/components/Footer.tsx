const Footer = () => {
  return (
    /* 
       ΔΙΟΡΘΩΣΗ: pt-0 για να κολλήσει στο προηγούμενο section (Gallery).
    */
    <footer id="contact" className="bg-black pt-0 pb-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        
        {/* LOGO & TAGLINE */}
        <div className="flex flex-col gap-8">
          <img 
            src="/strakastruka-logo.jpg" 
            alt="logo" 
            className="h-20 md:h-24 w-auto grayscale invert brightness-200 self-start opacity-90" 
          />
          <p className="font-anton text-zinc-500 text-[14px] md:text-[16px] tracking-[0.2em] uppercase leading-relaxed max-w-xs opacity-60">
            Music Joint & Beer Bar <br /> 
            Exarcheia. Raw sounds. <br /> 
            Clean drinks. Craft beers.
          </p>
        </div>
        
        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 w-full md:w-auto">
          
          {/* LOCATION */}
          <div className="flex flex-col gap-6">
            <h4 className="font-rubber text-white tracking-tighter uppercase text-4xl md:text-5xl italic">
              Find us
            </h4>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Ανδρέα+Μεταξά+19+Εξάρχεια" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-anton text-zinc-400 text-[15px] md:text-[18px] tracking-widest leading-loose hover:text-[#ffcc00] transition-colors uppercase"
            >
              Ανδρέα Μεταξά 19,<br />Εξάρχεια, Αθήνα
            </a>
          </div>

          {/* HOURS */}
          <div className="flex flex-col gap-6">
            <h4 className="font-rubber text-white tracking-tighter uppercase text-4xl md:text-5xl italic">
              Hours
            </h4>
            <div className="font-anton text-zinc-400 text-[14px] md:text-[16px] leading-relaxed uppercase tracking-[0.2em] space-y-3">
              <p>Τρ - Πε: 18:00 - 01:00</p>
              <p>Πα - Σα: 16:00 - 03:00</p>
              <p>Κυριακη: 16:00 - 01:00</p>
              <p className="text-zinc-700">Δευτερα: Κλειστα</p>
            </div>
          </div>

          {/* FOLLOW */}
          <div className="flex flex-col gap-6">
            <h4 className="font-rubber text-white tracking-tighter uppercase text-4xl md:text-5xl italic">
              Follow
            </h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.instagram.com/strakastruka.music.joint/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-anton text-zinc-400 text-[14px] md:text-[17px] tracking-[0.3em] uppercase hover:text-white transition-all hover:translate-x-2"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/strakastruka" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-anton text-zinc-400 text-[14px] md:text-[17px] tracking-[0.3em] uppercase hover:text-white transition-all hover:translate-x-2"
              >
                Facebook
              </a>
              <a 
                href="https://untappd.com/v/strakastrueka/9574712" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-anton text-zinc-400 text-[14px] md:text-[17px] tracking-[0.3em] uppercase hover:text-white transition-all hover:translate-x-2"
              >
                Untappd
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT & DEV INFO */}
      <div className="max-w-7xl mx-auto mt-12 pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5">
        <div className="flex items-center gap-4">
          <img 
            src="/strakastruka-logo2.png" 
            alt="logo" 
            className="h-12 md:h-16 w-auto grayscale invert brightness-200" 
          />
        </div>

        <div className="flex flex-col items-center sm:items-end gap-3">
          <p className="font-anton text-[10px] md:text-[20px] text-zinc-700 uppercase tracking-[0.6em]">
            Built for the underground
          </p>
          
          <div className="flex items-center gap-4">
  <span className="text-zinc-600 font-anton text-[16px] uppercase tracking-widest">
    Made by{' '}
    <a 
      href="https://github.com/Sofios95" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block text-zinc-800 transition-all duration-300 ease-in-out hover:text-orange-500 hover:scale-110 hover:-translate-y-1"
    >
      DevSof
    </a>
  </span>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;