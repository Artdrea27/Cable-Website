import { useState } from 'react';
import { COVERAGE } from '../constants';

export const Coverage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCities, setExpandedCities] = useState<string[]>([]);

  const toggleCity = (city: string) => {
    setExpandedCities(prev => 
      prev.includes(city) 
        ? prev.filter(c => c !== city) 
        : [...prev, city]
    );
  };

  const filteredCoverage = COVERAGE.map(area => ({
    ...area,
    barangays: area.barangays.filter(b => 
      b.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(area => area.barangays.length > 0);

  const activeExpanded = searchTerm.length > 0 
    ? filteredCoverage.map(c => c.city) 
    : expandedCities;

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-bold border border-emerald-100">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          FTTH Coverage Areas
        </div>
        <h2 className="text-3xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Coverage Map</h2>
        <p className="text-sm md:text-lg text-slate-500 max-w-2xl mx-auto px-4 font-medium">
          Find out if your area is ready for high-speed fiber connectivity.
        </p>
        
        <div className="max-w-md mx-auto mt-8 relative px-4 sm:px-0">
          <input 
            type="text" 
            placeholder="Search for your Barangay..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border border-gray-200 shadow-sm focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all pl-12 text-sm font-semibold text-slate-700"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-8 sm:left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-5">
        {filteredCoverage.map((area, idx) => {
          const isExpanded = activeExpanded.includes(area.city);
          const isSantiago = area.city.toLowerCase().includes('santiago');
          
          return (
            <div key={idx} className="rounded-[32px] overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <button 
                onClick={() => toggleCity(area.city)}
                className="w-full px-5 py-5 md:px-8 md:py-6 flex items-center justify-between text-left transition-colors"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Icon Container - Matching the screenshot logic */}
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[24px] flex items-center justify-center transition-colors shadow-sm border border-black/5 ${
                    isSantiago 
                      ? 'bg-emerald-100/80 text-emerald-600' 
                      : 'bg-amber-100/80 text-amber-600'
                  }`}>
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-2xl font-black text-slate-800 uppercase tracking-tight leading-none mb-1 md:mb-1.5">
                      {area.city}
                    </h3>
                    <p className="text-[12px] md:text-sm font-bold text-slate-400">
                      {area.barangays.length} Areas Covered
                    </p>
                  </div>
                </div>

                <div className={`transition-transform duration-300 p-2 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Barangay List */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100 border-t border-gray-50' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 bg-slate-50/30">
                  {area.barangays.map((barangay, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm group hover:border-emerald-200 transition-colors">
                      <div className={`w-2 h-2 rounded-full shrink-0 transition-colors ${isSantiago ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                      <span className="text-slate-600 font-bold text-[11px] md:text-sm">{barangay}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};