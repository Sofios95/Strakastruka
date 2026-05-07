const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black pt-12 pb-24 px-6 relative z-10 border-t border-[#f15a24]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        
        {/* LOGO & TAGLINE */}
        <div className="flex flex-col gap-6">
          <img
            src="/strakastruka-logo.jpg"
            alt="logo"
            className="h-16 md:h-20 w-auto grayscale invert brightness-200 self-start opacity-90"
          />
          <p className="font-inter text-zinc-500 text-[20px] md:text-[24px] leading-tight max-w-xs opacity-80 uppercase font-bold tracking-tight">
            MUSIC JOINT & BEER BAR <br />
            EXARCHEIA. RAW SOUNDS. <br />
            BOOZE. CRAFT BEERS.
          </p>
        </div>

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 w-full md:w-auto">
          
          {/* LOCATION & CONTACT */}
          <div className="flex flex-col gap-6">
            <p className="font-brand text-white text-3xl md:text-4xl border-b-2 border-[#f15a24] pb-2 inline-block antialiased">
              find us
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ανδρέα+Μεταξά+19+Εξάρχεια"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-zinc-400 text-[20px] md:text-[22px] leading-snug hover:text-[#f15a24] transition-colors uppercase font-bold"
              >
                ΑΝΔΡΕΑ ΜΕΤΑΞΑ 19,
                <br />
                ΕΞΑΡΧΕΙΑ, ΑΘΗΝΑ
              </a>
              <a
                href="tel:+302110085366"
                className="font-inter text-zinc-400 text-[16px] md:text-[18px] hover:text-[#f15a24] transition-colors uppercase font-bold"
              >
                ΤΗΛ : 2110085366
              </a>
            </div>
          </div>

          {/* HOURS */}
          <div className="flex flex-col gap-6">
            <p className="font-brand text-white text-3xl md:text-4xl border-b-2 border-[#f15a24] pb-2 antialiased">
              hours
            </p>
            <div className="font-inter text-zinc-400 text-[20px] md:text-[22px] leading-relaxed space-y-2 uppercase font-bold">
              <p>ΤΡ - ΠΕ: 18:00 - 01:00</p>
              <p>ΠΑ - ΣΑ: 16:00 - 03:00</p>
              <p>ΚΥΡΙΑΚΗ: 16:00 - 01:00</p>
              <p className="text-zinc-700">ΔΕΥΤΕΡΑ: ΚΛΕΙΣΤΑ</p>
            </div>
          </div>

          {/* FOLLOW */}
          <div className="flex flex-col gap-6">
            <p className="font-brand text-white text-3xl md:text-4xl border-b-2 border-[#f15a24] pb-2 antialiased">
              follow
            </p>
            <div className="flex flex-col gap-3 font-inter">
              {['INSTAGRAM', 'FACEBOOK', 'UNTAPPD'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-zinc-400 text-[20px] md:text-[30px] hover:text-[#f15a24] transition-all hover:translate-x-1 uppercase font-black tracking-tighter"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT & DEV INFO */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5">
        <div className="flex items-center gap-4">
          <span className="text-zinc-800 font-brand text-[26px] md:text-[26px] antialiased">
            © {currentYear} strakastruka
          </span>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-1">
          <p className="font-inter text-[18px] md:text-[18px] text-zinc-700 font-black uppercase tracking-[0.3em]">
            BUILT FOR THE UNDERGROUND
          </p>

          <div className="flex items-center gap-2">
            <span className="text-zinc-600 font-inter text-[22px] uppercase font-bold">
              MADE BY{" "}
              <a
                href="https://github.com/Sofios95"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-zinc-400 transition-all duration-300 hover:text-[#f15a24]"
              >
                DEVSOF
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;