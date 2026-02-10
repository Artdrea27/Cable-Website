import { useState, useEffect } from 'react';
import { PLANS } from '../constants';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
}

export const SubscriptionModal = ({ isOpen, onClose, initialPlanId }: SubscriptionModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    plan: '',
    message: ''
  });

  useEffect(() => {
    if (initialPlanId) {
      setFormData(prev => ({ ...prev, plan: initialPlanId }));
    }
  }, [initialPlanId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPlan = PLANS.find(p => p.id === formData.plan);
    const planText = selectedPlan ? `${selectedPlan.name} (${selectedPlan.speed})` : 'Not specified';
    
    const subject = encodeURIComponent(`New Fiber Subscription: ${formData.name}`);
    const body = encodeURIComponent(
      `SUBSCRIPTION DETAILS\n` +
      `--------------------\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Installation Address: ${formData.address}\n` +
      `Selected Plan: ${planText}\n\n` +
      `Customer Notes:\n${formData.message}\n\n` +
      `Sent via Citi CableWorld Subscription Portal`
    );
    
    window.location.href = `mailto:support@citicableworld.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-[28px] md:rounded-[40px] shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-[#055b41] p-5 sm:p-8 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex items-center gap-3 sm:gap-4 mb-1 sm:mb-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
               <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
            </div>
            <h2 className="text-lg sm:text-2xl font-black tracking-tight">Fast-Track Subscription</h2>
          </div>
          <p className="text-[12px] sm:text-[15px] text-emerald-100/80 font-medium">Fill out your details to start your connection.</p>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-8 md:p-10 max-h-[75vh] overflow-y-auto custom-scrollbar">
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5">
                <label className="text-[12px] sm:text-[14px] font-bold text-slate-700 ml-1">Full Name <span className="text-red-500">*</span></label>
                <input 
                  required
                  type="text"
                  className="w-full px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium text-slate-700 text-sm sm:text-base" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] sm:text-[14px] font-bold text-slate-700 ml-1">Email <span className="text-red-500">*</span></label>
                <input 
                  required
                  type="email"
                  className="w-full px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium text-slate-700 text-sm sm:text-base" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5">
                <label className="text-[12px] sm:text-[14px] font-bold text-slate-700 ml-1">Mobile Number <span className="text-red-500">*</span></label>
                <input 
                  required
                  type="tel"
                  className="w-full px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium text-slate-700 text-sm sm:text-base" 
                  placeholder="0912-345-6789" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] sm:text-[14px] font-bold text-slate-700 ml-1">Desired Plan <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select 
                    required
                    className="w-full appearance-none px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium text-slate-700 text-sm sm:text-base"
                    value={formData.plan}
                    onChange={e => setFormData({...formData, plan: e.target.value})}
                  >
                    <option value="">Select a plan</option>
                    {PLANS.map(p => <option key={p.id} value={p.id}>{p.name} - {p.speed}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] sm:text-[14px] font-bold text-slate-700 ml-1">Installation Address <span className="text-red-500">*</span></label>
              <input 
                required
                type="text"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium text-slate-700 text-sm sm:text-base" 
                placeholder="Street, Barangay, City/Town" 
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] sm:text-[14px] font-bold text-slate-700 ml-1">Additional Message (Optional)</label>
              <textarea 
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all h-20 sm:h-28 font-medium text-slate-700 resize-none text-sm sm:text-base" 
                placeholder="Any instructions..." 
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="w-full py-3.5 sm:py-5 bg-[#059669] text-white font-black text-base sm:text-xl rounded-2xl hover:bg-[#047857] transition-all shadow-xl shadow-emerald-100 active:scale-[0.98]"
              >
                Complete Subscription
              </button>
              <p className="text-center text-[10px] sm:text-[12px] text-slate-400 font-bold uppercase tracking-widest mt-3">
                You'll be redirected to your email client.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};