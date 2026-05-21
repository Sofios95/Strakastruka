import { useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"; // 1. ΕΙΣΑΓΩΓΗ ΤΟΥ HOOK

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { executeRecaptcha } = useGoogleReCaptcha(); // 2. ΑΡΧΙΚΟΠΟΙΗΣΗ

  // 3. ΕΚΤΕΛΕΣΗ RECAPTCHA ΣΤΟ BACKGROUND ΓΙΑ ΠΡΟΣΤΑΣΙΑ ΤΗΣ ΣΕΛΙΔΑΣ
  useEffect(() => {
    const handleProtection = async () => {
      if (!executeRecaptcha) return;
      try {
        // Παράγει το token επαλήθευσης για τη συγκεκριμένη σελίδα/action
        await executeRecaptcha("footer_load");
      } catch (error) {
        console.error("reCAPTCHA error:", error);
      }
    };

    handleProtection();
  }, [executeRecaptcha]);

  return (
    <footer
      id="contact"
      className="bg-black pt-12 pb-24 px-6 relative z-10 border-t border-[#f15a24]"
    >
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
                href="https://maps.app.goo.gl/ZM15rfVk2FMozoJ5A"
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
                className="font-inter text-zinc-400 text-[20px] md:text-[22px] hover:text-[#f15a24] transition-colors uppercase font-bold"
              >
                ΤΗΛ : 2110085366
              </a>
              {/* Το mail link που προστατεύεται */}
              <a
                href="mailto:info@strakastruka.gr"
                className="font-inter text-zinc-400 text-[16px] md:text-[18px] hover:text-[#f15a24] transition-colors uppercase font-bold break-all"
              >
                info@strakastruka.gr
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
              {/* Μικραίνουμε το μέγεθος μόνο στην Κυριακή για mobile (text-[16px] ή text-[17px]) και κλειδώνουμε να μην σπάει ποτέ με whitespace-nowrap */}
              <p className="text-[18px] sm:text-[22px] md:text-[22px] whitespace-nowrap">
                ΚΥΡΙΑΚΗ: 16:00 - 01:00
              </p>
              <p className="text-zinc-700">ΔΕΥΤΕΡΑ: ΚΛΕΙΣΤΑ</p>
            </div>
          </div>

          {/* FOLLOW */}
          <div className="flex flex-col gap-6">
            <p className="font-brand text-white text-3xl md:text-4xl border-b-2 border-[#f15a24] pb-2 antialiased">
              follow
            </p>
            <div className="flex flex-col gap-3 font-inter">
              <a
                href="https://www.instagram.com/strakastruka.music.joint/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 text-[20px] md:text-[30px] hover:text-[#f15a24] transition-all hover:translate-x-1 uppercase font-black tracking-tighter"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.facebook.com/strakastruka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 text-[20px] md:text-[30px] hover:text-[#f15a24] transition-all hover:translate-x-1 uppercase font-black tracking-tighter"
              >
                FACEBOOK
              </a>
              <a
                href="https://untappd.com/v/strakastruka/9574712"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 text-[20px] md:text-[30px] hover:text-[#f15a24] transition-all hover:translate-x-1 uppercase font-black tracking-tighter"
              >
                UNTAPPD
              </a>
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

          {/* 4. LEGAL NOTICE (Απαραίτητο αν κρύψεις το badge της Google με CSS) */}
          <p className="text-[10px] text-zinc-800 font-inter uppercase mt-2 tracking-wider text-center sm:text-right">
            Protected by reCAPTCHA. Google{" "}
            <a href="https://policies.google.com/privacy" className="underline">
              Privacy
            </a>{" "}
            &{" "}
            <a href="https://policies.google.com/terms" className="underline">
              Terms
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
