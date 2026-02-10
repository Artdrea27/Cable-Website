import { CHANNELS } from '../constants';

export const IPTV = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-6">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-[#0F172A] tracking-tight">48+ Premium Channels</h2>
        <p className="text-sm md:text-[17px] text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium px-4">
          Enjoy crystal-clear HD streaming with our comprehensive IPTV package.
          Available with our Elite and Ultra fiber plans. 
        </p>
      </div>

      {/* Channels Grid Box */}
      <div className="bg-white border border-gray-100 p-4 sm:p-8 md:p-16 rounded-[24px] md:rounded-[48px] shadow-sm">
        {/* Adjusted Grid: Specifically 3 columns on mobile and tablet (sm/md), scaling to 4 and 6 on desktop */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
          {CHANNELS.map((channel, idx) => (
            <div 
              key={idx} 
              className="group relative h-20 sm:h-32 md:h-40 rounded-[12px] md:rounded-[24px] overflow-hidden bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl cursor-pointer"
            >
              {/* Background Channel Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={channel.image} 
                  alt={channel.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
              </div>

              {/* Channel Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-1.5 sm:p-4 z-10">
                <p className="text-white font-black text-[7px] sm:text-[10px] md:text-[11px] uppercase tracking-widest text-center">
                  {channel.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button at Bottom */}
        <div className="mt-8 md:mt-16 flex justify-center">
          <button className="w-full sm:w-auto bg-[#EBFDF5] text-[#059669] px-6 py-4 rounded-full font-extrabold flex items-center justify-center gap-2 border border-[#D1FAE5] active:scale-95 transition-all text-[11px] md:text-base shadow-sm">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            And many more channels available!
          </button>
        </div>
      </div>
    </div>
  );
};