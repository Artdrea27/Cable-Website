interface NavbarProps {
  onSubscribe: () => void;
}

export const Navbar = ({ onSubscribe }: NavbarProps) => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'Plans', href: '#plans' },
    { label: 'IPTV', href: '#iptv' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 cursor-pointer">
            <div className="w-11 h-11 flex items-center justify-center ">
              <div className=" rounded-full flex items-center justify-center ">
                <div className="w-full h-full  rounded-full flex items-center justify-center ">
                <img 
                  src="/assets/Logo.png" 
                  alt="Citi CableWorld Inc Logo" 
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
                key={link.href}
                href={link.href}
                className="text-[15px] font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={onSubscribe}
              className="bg-[#059669] text-white px-7 py-2.5 rounded-[10px] text-[15px] font-bold hover:bg-emerald-700 transition-all shadow-md active:scale-95"
            >
              Subscribe Now
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-slate-600 p-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};