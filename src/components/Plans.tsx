import { useState } from 'react';
import { PLANS } from '../constants';

interface PlansProps {
  onSubscribe: (planId: string) => void;
}

export const Plans = ({ onSubscribe }: PlansProps) => {
  const [filter, setFilter] = useState<'all' | 'internet' | 'iptv'>('all');

  const filteredPlans = PLANS.filter(plan => {
    if (filter === 'all') return true;
    if (filter === 'internet') return plan.isInternetOnly;
    if (filter === 'iptv') return !plan.isInternetOnly;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#D1FAE5] text-[#059669] text-sm font-extrabold shadow-sm border border-[#A7F3D0]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 117.778 0M12 20h.01m-7.08-7.071a10 10 0 1114.142 0" /></svg>
          Choose Your Plan
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold text-[#0F172A] tracking-tight">Affordable Internet Plans</h2>
        
        {/* Filter Toggle */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200">
            {[
              { id: 'all', label: 'All Plans' },
              { id: 'internet', label: 'Internet Only' },
              { id: 'iptv', label: 'IPTV Bundles' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === btn.id 
                    ? 'bg-white text-emerald-600 shadow-md' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 min-h-[500px]">
        {filteredPlans.map((plan) => (
          <div key={plan.id} className={`bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col relative group ${plan.id === 'plan-250' ? 'ring-2 ring-[#059669] -translate-y-2' : ''}`}>
            
            {plan.id === 'plan-250' && (
              <div className="absolute top-0 right-0 bg-[#059669] text-white px-6 py-2 rounded-bl-[20px] text-[12px] font-black uppercase tracking-widest z-10 shadow-sm">
                Best Value
              </div>
            )}

            <div className={`p-10 ${!plan.isInternetOnly ? 'bg-emerald-50/50' : 'bg-white'}`}>
              <div className="mb-8">
                <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border shadow-sm text-[13px] font-bold ${
                  plan.isInternetOnly ? 'bg-white border-gray-100 text-slate-600' : 'bg-white border-[#D1FAE5] text-[#059669]'
                }`}>
                  {plan.isInternetOnly ? 'Fiber Internet' : 'Fiber + IPTV Bundle'}
                </span>
              </div>
              
              <h3 className="text-[40px] font-extrabold text-[#1E293B] mb-2 tracking-tight leading-tight group-hover:text-emerald-600 transition-colors">
                {plan.speed.split(' ')[2]} <span className="text-xl align-top">Mbps</span>
              </h3>
              <p className="text-slate-500 font-bold mb-6 italic">{plan.name}</p>

              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-slate-400">PHP</span>
                <span className="text-[44px] font-black text-slate-900 tracking-tighter">{plan.price}</span>
                <span className="text-slate-400 text-lg font-bold">/mo</span>
              </div>
            </div>

            <div className="p-10 pt-4 flex-grow space-y-5">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent mb-8"></div>
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-1 rounded-lg mt-0.5 shrink-0 group-hover:bg-emerald-500 transition-colors">
                    <svg className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-600 font-semibold text-[15px]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="p-10 pt-0">
              <button 
                onClick={() => onSubscribe(plan.id)}
                className={`w-full py-5 rounded-[24px] font-black text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center ${
                plan.id === 'plan-250' ? 'bg-[#059669] text-white hover:bg-[#047857]' : 'bg-[#1E293B] text-white hover:bg-black'
              }`}>
                Subscribe Now
              </button>
              <p className="text-center mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">No hidden installation fees*</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};