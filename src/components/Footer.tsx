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
        
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="font-industrial text-white tracking-widest uppercase text-sm">Find us</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">Ανδρέα Μεταξά 19,<br />Εξάρχεια, Αθήνα</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-industrial text-white tracking-widest uppercase text-sm">Follow</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-zinc-400 text-xs hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-zinc-400 text-xs hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-zinc-400 text-xs hover:text-white transition-colors">Untappd</a>
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