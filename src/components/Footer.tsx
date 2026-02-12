  export const Footer = () => {
    return (
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white p-2 rounded-2xl shadow-lg">
                  <div className="w-full h-full border-1  rounded-full flex items-center justify-center">
                      <img src="/assets/Logo.png"
                      />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black tracking-tight">Citi CableWorld</h3>
                  <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest">Connect to the Future</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm text-lg leading-relaxed font-medium">
                A premier provider of high-speed Fiber Optic and IPTV services, empowering homes and businesses in Santiago City and beyond.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61578612285033" className="w-12 h-12 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" /></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h4 className="text-white font-black uppercase text-xs tracking-widest mb-10">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#plans" className="text-slate-400 hover:text-emerald-400 font-bold transition-colors">Fiber Plans</a></li>
                <li><a href="#coverage" className="text-slate-400 hover:text-emerald-400 font-bold transition-colors">Coverage</a></li>
                <li><a href="#iptv" className="text-slate-400 hover:text-emerald-400 font-bold transition-colors">Channel Guide</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-emerald-400 font-bold transition-colors">Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-emerald-400 font-bold transition-colors">Pay Bill</a></li>
              </ul>
            </div>

            {/* Contact Details Directory */}
            <div className="md:col-span-5">
              <h4 className="text-white font-black uppercase text-xs tracking-widest mb-10">Branch Directory</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-emerald-400 font-black text-sm uppercase">Santiago City (Main Branch)</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    G/F JC Bldg. Carreon St., Centro East, Santiago City
                  </p>
                  <p className="text-white font-bold text-sm">(078) 305-0018</p>
                  <p className="text-white font-bold text-sm">0917-510-2899</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-emerald-400 font-black text-sm uppercase">Cordon Branch</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    National Highway, Osmena, Cordon, Isabela
                  </p>
                  <p className="text-white font-bold text-sm">0917-704-2968</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-emerald-400 font-black text-sm uppercase">Talavera Branch</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    #212 Quezon Street, Maestrang Kikay Dist., Talavera, Nueva Ecija, 3114
                  </p>
                  <p className="text-white font-bold text-sm">(044) 411-0012</p>
                  <p className="text-white font-bold text-sm">0917-888-1234</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-emerald-400 font-black text-sm uppercase">Guimba Branch</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    MQ58+3RF, Guimba, Nueva Ecija
                  </p>
                  <p className="text-white font-bold text-sm">(044) 958 2486</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-emerald-400 font-black text-sm uppercase">Saguday Branch</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Purok 2 Sadiri Street, Magsaysay, Saguday, Quirino
                  </p>
                  <p className="text-white font-bold text-sm">0977-803-2727</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-emerald-400 font-black text-sm uppercase">Cabarroguis Branch</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Purok 6 Zamora, Cabarroguis, Quirino
                  </p>
                  <p className="text-white font-bold text-sm">0917 504 2277</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-emerald-400 font-black text-sm uppercase">Sto. Domingo Branch</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    #212 Quezon Street, Maestrang Kikay Dist., Talavera, Nueva Ecija, 3114
                  </p>
                  <p className="text-white font-bold text-sm">(044) 411-0012</p>
                  <p className="text-white font-bold text-sm">0917-888-1234</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-500 text-sm font-bold">© 2026 Citi CableWorld (TTI). All rights reserved.</p>
            <div className="flex gap-10">
              <a href="#" className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Privacy</a>
              <a href="#" className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Terms</a>
              <a href="#" className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };