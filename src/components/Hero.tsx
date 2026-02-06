interface HeroProps {
  onSubscribe: () => void;
}

export const Hero = ({ onSubscribe }: HeroProps) => {
  return (
    <div className="relative bg-white overflow-hidden pt-8 pb-20 md:pt-16 md:pb-32">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[#f0f9f6] -skew-x-6 transform origin-top-right -z-10 rounded-bl-[160px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-5 py-2 rounded-xl bg-[#e6f6f0] text-[#059669] text-sm font-bold border border-[#d1fae5]">
              Fast. Reliable. Local.
            </div>

            <h1 className="text-[64px] md:text-[88px] font-extrabold leading-[1] tracking-tight text-[#1e293b]">
              Your <br />
              Connection <br />
              <span className="text-[#059669]">Starts Here</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 max-w-xl leading-relaxed font-medium">
              Affordable fiber internet and IPTV plans for every home. Experience lightning-fast speeds with unlimited data and zero data caps.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-100 shadow-sm text-slate-800 text-[15px] font-bold">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 117.778 0M12 20h.01m-7.08-7.071a10 10 0 1114.142 0" />
                </svg>
                Up to 300 Mbps
              </div>
              <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-100 shadow-sm text-slate-800 text-[15px] font-bold">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                48+ IPTV Channels
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onSubscribe}
                className="bg-[#059669] text-white px-10 py-4 rounded-[12px] text-lg font-black hover:bg-[#047857] transition-all shadow-xl shadow-emerald-100 active:scale-[0.98] text-center"
              >
                Subscribe Now
              </button>
              <a href="#contact" className="bg-white border-2 border-[#059669] text-[#059669] px-10 py-4 rounded-[12px] text-lg font-bold hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Support
              </a>
            </div>
          </div>

          {/* Right Column: Logo Card */}
          <div className="relative hidden lg:flex items-center justify-center animate-float">
            <div className="absolute -inset-10 bg-emerald-100/30 blur-[100px] -z-10 rounded-full"></div>
            <div className="w-full max-w-[500px] bg-white rounded-[60px] p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white relative overflow-hidden flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square flex items-center justify-center">
                <img 
                  src="/assets/Logo.png" 
                  alt="Citi CableWorld Inc Logo" 
                  className="w-[90%] h-auto object-contain drop-shadow-2xl"
                  onError={(e) => {
                    // Fallback to a placeholder if the specific URL above isn't accessible
                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/white/059669?text=Citi+CableWorld';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};