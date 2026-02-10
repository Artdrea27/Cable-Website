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
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] md:text-sm font-black shadow-sm border border-emerald-200 uppercase tracking-widest">
          Subscription Plans
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">Unlimited Possibilities</h2>
        <p className="text-sm md:text-xl text-slate-500 max-w-2xl mx-auto font-medium px-4">
          Choose a plan that fits your digital lifestyle. No contracts, no data caps, just pure speed.
        </p>
        
        {/* Filter Toggle */}
        <div className="flex justify-center mt-6 md:mt-12 overflow-x-auto no-scrollbar px-4">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl md:rounded-2xl border border-slate-200/50 shadow-inner">
            {[
              { id: 'all', label: 'All' },
              { id: 'internet', label: 'Internet' },
              { id: 'iptv', label: 'Bundles' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`whitespace-nowrap px-4 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-[12px] md:text-[15px] font-black transition-all ${
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

      {/* Plans Container - Horizontal Scroll on Mobile/Tablet */}
      <div className="relative">
        <div className="flex lg:grid lg:grid-cols-3 gap-4 md:gap-10 overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory px-4 sm:px-0 -mx-4 sm:mx-0 pb-12">
          {filteredPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 snap-center bg-white rounded-[24px] md:rounded-[48px] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col relative group ${plan.id === 'plan-250' ? 'ring-2 md:ring-4 ring-emerald-500/20 lg:-translate-y-4' : ''}`}
            >
              
              {plan.id === 'plan-250' && (
                <div className="absolute top-4 right-[-45px] md:top-6 md:right-[-40px] bg-emerald-600 text-white px-10 py-1 rotate-45 text-[8px] font-black uppercase tracking-widest z-10">
                  Popular
                </div>
              )}

              <div className={`p-6 md:p-10 ${!plan.isInternetOnly ? 'bg-emerald-50/40' : 'bg-white'}`}>
                <div className="mb-4 md:mb-10">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 md:px-5 md:py-2.5 rounded-lg border shadow-sm text-[10px] md:text-[13px] font-black uppercase tracking-widest ${
                    plan.isInternetOnly ? 'bg-white border-slate-200 text-slate-400' : 'bg-white border-emerald-200 text-emerald-600'
                  }`}>
                    {plan.isInternetOnly ? 'Fiber Internet' : 'Fiber + IPTV Bundle'}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-[54px] font-black text-slate-900 mb-1 tracking-tighter leading-none group-hover:text-emerald-600 transition-colors">
                  {plan.speed.split(' ')[2]} <span className="text-lg md:text-2xl font-black text-slate-300">Mbps</span>
                </h3>
                <p className="text-slate-400 font-bold mb-4 md:mb-8 uppercase tracking-widest text-[9px] md:text-[12px]">{plan.name}</p>

                <div className="flex items-baseline gap-1">
                  <span className="text-xs md:text-lg font-black text-slate-400">₱</span>
                  <span className="text-3xl md:text-[52px] font-black text-slate-900 tracking-tighter leading-none">{plan.price}</span>
                  <span className="text-slate-400 text-xs md:text-lg font-bold">/mo</span>
                </div>
              </div>

              <div className="p-6 md:p-10 pt-4 flex-grow space-y-3 md:space-y-6">
                <div className="h-px bg-slate-100 mb-4"></div>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-1 rounded-md mt-0.5 shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-slate-600 font-bold text-[11px] md:text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-10 pt-0">
                <button 
                  onClick={() => onSubscribe(plan.id)}
                  className={`w-full py-4 rounded-xl md:rounded-2xl font-black text-sm md:text-lg transition-all shadow-md active:scale-95 ${
                  plan.id === 'plan-250' ? 'bg-emerald-600 text-white shadow-emerald-100' : 'bg-slate-900 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Swipe Hint for Mobile */}
        <div className="lg:hidden flex items-center justify-center gap-2 mt-[-20px] pb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Swipe to see more</span>
        </div>
      </div>
    </div>
  );
};