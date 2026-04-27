const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="flex flex-col gap-6">
          <img src="/strakastuka-logo.jpg" alt="logo" className="h-20 w-auto grayscale invert brightness-200 self-start" />
          <p className="text-zinc-500 text-sm tracking-widest uppercase leading-loose max-w-sm">
            Music Joint & Beer Bar in the heart of Exarcheia. Raw sounds, clean drinks, craft beers.
          </p>
        </div>
        
        {/* Adjusted grid to handle larger text and layout on small screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 w-full md:w-auto">
          {/* LOCATION */}
          <div className="flex flex-col gap-4">
            <h4 className="font-industrial text-white tracking-widest uppercase text-base">Find us</h4>
            <a 
              href="https://maps.google.com/?q=Ανδρέα+Μεταξά+19+Εξάρχεια" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 text-sm leading-relaxed hover:text-white transition-colors"
            >
              Ανδρέα Μεταξά 19,<br />Εξάρχεια, Αθήνα
            </a>
          </div>

          {/* HOURS - Updated based on screenshot */}
          <div className="flex flex-col gap-4">
            <h4 className="font-industrial text-white tracking-widest uppercase text-base">Hours</h4>
            <div className="text-zinc-400 text-xs leading-relaxed uppercase tracking-wider space-y-1">
              <p>Τρ - Πε: 18:00 - 01:00</p>
              <p>Πα - Σα: 16:00 - 03:00</p>
              <p>Κυριακη: 16:00 - 01:00</p>
              <p className="text-zinc-600">Δευτερα: Κλειστα</p>
            </div>
          </div>

          {/* FOLLOW */}
          <div className="flex flex-col gap-4">
            <h4 className="font-industrial text-white tracking-widest uppercase text-base">Follow</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/strakastruka.music.joint/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:text-white transition-colors">Instagram</a>
              <a href="https://www.facebook.com/strakastruka" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:text-white transition-colors">Facebook</a>
              <a href="https://untappd.com/v/strakastruka/8197711" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:text-white transition-colors">Untappd</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-[0.4em] text-center sm:text-left">
        <p>© 2018 STRAKA STRÜKA</p>
        <p>Built for the underground</p>
      </div>
    </footer>
  );
};

export default Footer;