import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 md:px-12 py-6 bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-4">
        {/* Επιστροφή στην αρχική */}
        <Link to="/" className="transition-transform duration-300 hover:scale-110">
          <img 
            src="/strakastuka-logo.jpg" 
            alt="strakastrüka" 
            className="h-10 md:h-14 w-auto grayscale invert brightness-200" 
          />
        </Link>
      </div>

      <div className="flex items-center gap-8">
        {/* Link για τη νέα σελίδα Menu */}
        <Link 
          to="/menu" 
          className="font-industrial text-white text-xs md:text-sm tracking-[0.3em] uppercase hover:text-zinc-400 transition-colors"
        >
          Menu
        </Link>
        
        {/* Link για το Contact στο Footer της αρχικής */}
        <Link 
          to="/#contact" 
          className="hidden md:block font-industrial text-white text-xs md:text-sm tracking-[0.3em] uppercase hover:text-zinc-400 transition-colors"
        >
          Contact
        </Link>

        <div className="h-8 w-[1px] bg-white/20 mx-2 hidden md:block"></div>
        <p className="font-industrial text-[10px] text-zinc-500 tracking-[0.4em] uppercase hidden lg:block">
          Exarcheia District
        </p>
      </div>
    </nav>
  );
};

export default Navbar;