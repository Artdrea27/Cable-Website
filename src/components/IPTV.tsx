import { CHANNELS } from '../constants';

export const IPTV = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16 space-y-6">
        <h2 className="text-5xl md:text-7xl font-extrabold text-[#0F172A] tracking-tight">48+ Premium Channels</h2>
        <p className="text-[17px] text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium">
          Enjoy crystal-clear HD streaming with our comprehensive IPTV package. 
          Available with our Elite and Ultra fiber plans.
        </p>
      </div>

      {/* Channels Grid Box */}
      <div className="bg-white border border-gray-100 p-8 md:p-16 rounded-[48px] shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {CHANNELS.map((channel, idx) => (
            <div 
              key={idx} 
              className="group relative h-40 rounded-[24px] overflow-hidden bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-500/30 cursor-pointer"
            >
              {/* Background Channel Image (Visible by default) */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={channel.image} 
                  alt={channel.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />
                {/* Subtle gradient overlay for the text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* Channel Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 z-10 transition-transform duration-500 transform group-hover:translate-y-[-4px]">
                <p className="text-white font-black text-[11px] uppercase tracking-widest drop-shadow-lg text-center">
                  {channel.name}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/20 rounded-[24px] pointer-events-none transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Button at Bottom */}
        <div className="mt-16 flex justify-center">
          <button className="bg-[#EBFDF5] text-[#059669] px-12 py-5 rounded-full font-extrabold flex items-center gap-3 border border-[#D1FAE5] hover:bg-[#D1FAE5] transition-all shadow-sm active:scale-95 group">
            <div className="bg-white p-1 rounded-md text-[#059669] shadow-sm group-hover:rotate-12 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            And many more channels available!
          </button>
        </div>
      </div>
    </div>
  );
};