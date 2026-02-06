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

  // Auto-expand if searching
  const displayCoverage = filteredCoverage;
  const activeExpanded = searchTerm.length > 0 
    ? displayCoverage.map(c => c.city) 
    : expandedCities;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold border border-emerald-100">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          FTTH Coverage Areas
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900">We're In Your Area</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Check if fiber internet and IPTV services are available in your location.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mt-8 relative">
          <input 
            type="text" 
            placeholder="Search for your Barangay..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all pl-12"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 min-h-[300px]">
        {displayCoverage.length > 0 ? (
          displayCoverage.map((area, idx) => {
            const isExpanded = activeExpanded.includes(area.city);
            const isSantiago = area.city.toLowerCase().includes('santiago');
            
            return (
              <div 
                key={idx} 
                className={`rounded-3xl overflow-hidden border transition-all duration-300 animate-fade-in-up ${
                  isSantiago ? 'border-emerald-100 bg-white' : 'border-amber-100 bg-white'
                } shadow-sm hover:shadow-md`}
              >
                {/* Accordion Header */}
                <button 
                  onClick={() => toggleCity(area.city)}
                  className={`w-full px-8 py-6 flex items-center justify-between text-left transition-colors ${
                    isSantiago 
                      ? isExpanded ? 'bg-emerald-50' : 'bg-white hover:bg-emerald-50/30' 
                      : isExpanded ? 'bg-amber-50' : 'bg-white hover:bg-amber-50/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-xl ${isSantiago ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{area.city}</h3>
                      <p className="text-sm font-medium text-slate-500">{area.barangays.length} Areas Covered</p>
                    </div>
                  </div>
                  
                  <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content (Barangays List) */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    <div className="col-span-full h-px bg-slate-100 mb-4"></div>
                    {area.barangays.map((barangay, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-3 py-1 group">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          isSantiago ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                        }`}>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                          {barangay}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400 bg-gray-50 rounded-[48px] border-2 border-dashed border-gray-200">
            <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl font-bold">No areas found for "{searchTerm}"</p>
            <button onClick={() => setSearchTerm('')} className="mt-4 text-emerald-600 font-bold hover:underline">Clear search</button>
          </div>
        )}
      </div>
    </div>
  );
};