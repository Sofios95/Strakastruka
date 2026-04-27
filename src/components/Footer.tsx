const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="flex flex-col gap-6">
          <img src="/strakastuka-logo.jpg" alt="logo" className="h-16 w-auto grayscale invert brightness-200 self-start" />
          <p className="text-zinc-500 text-xs tracking-widest uppercase leading-loose max-w-xs">
            Music Joint & Beer Bar in the heart of Exarcheia. Raw sounds, clean drinks, craft beers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-20">
          {/* LOCATION */}
          <div className="flex flex-col gap-4">
            <h4 className="font-industrial text-white tracking-widest uppercase text-sm">Find us</h4>
            <a 
              href="https://maps.app.goo.gl/8iNDNeNQceSspbVc8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 text-xs leading-relaxed hover:text-white transition-colors"
            >
              Ανδρέα Μεταξά 19,<br />Εξάρχεια, Αθήνα
            </a>
          </div>

          {/* HOURS */}
          <div className="flex flex-col gap-4">
            <h4 className="font-industrial text-white tracking-widest uppercase text-sm">Hours</h4>
            <div className="text-zinc-400 text-[10px] leading-relaxed uppercase tracking-wider">
              <p>Τρ - Πε: 18:00 - 02:00</p>
              <p>Πα - Σα: 18:00 - 04:00</p>
              <p>Κυριακη: 18:00 - 02:00</p>
              <p className="text-zinc-600">Δευτερα: Κλειστα</p>
            </div>
          </div>

          {/* FOLLOW */}
          <div className="flex flex-col gap-4">
            <h4 className="font-industrial text-white tracking-widest uppercase text-sm">Follow</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.instagram.com/strakastruka.music.joint/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-xs hover:text-white transition-colors">Instagram</a>
              <a href="https://www.facebook.com/strakastruka" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-xs hover:text-white transition-colors">Facebook</a>
              <a href="https://untappd.com/v/strakastruka/8197711" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-xs hover:text-white transition-colors">Untappd</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex justify-between items-center text-[9px] text-zinc-600 uppercase tracking-[0.4em]">
        <p>© 2018 STRAKA STRÜKA</p>
        <p>Built for the underground</p>
      </div>
    </footer>
  );
};

export default Footer;