interface HeroProps {
  onSubscribe: () => void;
}

export const Hero = ({ onSubscribe }: HeroProps) => {
  return (
    <div className="relative bg-white overflow-hidden pt-6 pb-12 md:pt-20 md:pb-36">
      {/* Background Subtle Gradient - Adjusted for mobile */}
      <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full bg-gradient-to-br from-[#f0f9f6] to-white lg:-skew-x-12 transform origin-top-right -z-10 rounded-bl-[40px] md:rounded-bl-[200px]"></div>
      
      {/* Decorative Orbs - Scaled down for mobile */}
      <div className="absolute top-1/4 right-4 w-20 h-20 md:w-64 md:h-64 bg-emerald-200/20 blur-[40px] md:blur-[100px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-4 w-16 h-16 md:w-48 md:h-48 bg-blue-100/30 blur-[30px] md:blur-[80px] rounded-full -z-10 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-6 md:space-y-10 animate-fade-in-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 md:py-2.5 rounded-2xl bg-[#e6f6f0] text-[#059669] text-xs md:text-sm font-black border border-[#d1fae5] shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              Fast. Reliable. Local.
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px] leading-[1.1] font-black tracking-tighter text-slate-900">
              Your <br className="hidden sm:block" />
              Connection <br className="hidden sm:block" />
              <span className="text-emerald-600">Starts Here</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-2xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold">
              Affordable fiber internet and IPTV plans for every home. Experience lightning-fast speeds with unlimited data and zero data caps.
            </p>

            {/* Feature Badges - Hidden on very small screens to save space */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 pt-2">
              <div className="flex items-center gap-2 px-3 py-2 md:px-6 md:py-3.5 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-800 text-[11px] md:text-[15px] font-black group transition-colors hover:border-emerald-200">
                <div className="bg-emerald-50 p-1 rounded-lg text-emerald-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Up to 300 Mbps
              </div>
              <div className="flex items-center gap-2 px-3 py-2 md:px-6 md:py-3.5 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-800 text-[11px] md:text-[15px] font-black group transition-colors hover:border-emerald-200">
                <div className="bg-emerald-50 p-1 rounded-lg text-emerald-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553 2.276A1 1 0 0120 13.17V17a2 2 0 01-2 2h-2M9 5a2 2 0 114 0 2 2 0 01-4 0zM4 11h.01M4 15h.01M4 19h.01" />
                  </svg>
                </div>
                70+ IPTV Channels
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 px-4 sm:px-0">
              <button 
                onClick={onSubscribe}
                className="w-full sm:w-auto bg-emerald-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-[20px] text-lg md:text-xl font-black hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 active:scale-[0.98]"
              >
                Subscribe Now
              </button>
              <a href="#contact" className="w-full sm:w-auto bg-white border-2 border-emerald-600 text-emerald-600 px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-[20px] text-lg md:text-xl font-black hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                Customer Support
              </a>
            </div>
          </div>

          {/* Right Column: Logo Card - Scaled for mobile */}
          <div className="relative flex items-center justify-center animate-float mt-10 lg:mt-0">
            <div className="absolute -inset-10 bg-emerald-100/40 blur-[60px] md:blur-[120px] -z-10 rounded-full"></div>
            <div className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[540px] bg-white rounded-[40px] md:rounded-[80px] p-6 md:p-12 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-white/50 relative overflow-hidden flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-white to-slate-50 rounded-[30px] md:rounded-[60px]">
                <img 
                  src="assets/Logo.png" 
                  alt="Citi CableWorld" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/white/059669?text=Citi+CableWorld';
                  }}
                />
              </div>
            </div>
            {/* Speed Badge - Repositioned for mobile */}
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-left-6 bg-slate-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl md:rounded-3xl shadow-2xl border border-white/10 scale-90 md:scale-100">
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-emerald-400">Top Speed</p>
              <p className="text-xl md:text-3xl font-black">500 Mbps</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

          