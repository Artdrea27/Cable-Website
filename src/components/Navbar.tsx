import { useState } from 'react';

interface NavbarProps {
  onSubscribe: () => void;
}

export const Navbar = ({ onSubscribe }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Coverage', id: 'coverage' },
    { label: 'Plans', id: 'plans' },
    { label: 'IPTV', id: 'iptv' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 flex items-center justify-center ">
              <div className="w-full h-full border  rounded-full flex items-center justify-center bg-emerald-600">
                <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="assets/logo.jpeg" 
                    alt="Citi CableWorld" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/059669/ffffff?text=CC';
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-[#055b41] leading-tight tracking-tight">Citi CableWorld</h1>
              <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">FTTH • IPTV</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-[15px] font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={onSubscribe}
              className="bg-[#059669] text-white px-7 py-2.5 rounded-[12px] text-[15px] font-bold hover:bg-emerald-700 transition-all shadow-md active:scale-95"
            >
              Subscribe Now
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 p-2 hover:bg-slate-50 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="block text-lg font-bold text-slate-700 hover:text-emerald-600 px-4 py-2 rounded-xl hover:bg-emerald-50 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-50">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onSubscribe();
                }}
                className="w-full bg-[#059669] text-white py-4 rounded-[16px] text-lg font-black shadow-lg shadow-emerald-100"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};