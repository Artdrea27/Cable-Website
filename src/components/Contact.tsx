import { useState } from 'react';
import { PLANS } from '../constants';

const BRANCHES = [
   {
    id: 'main',
    name: 'Santiago Main',
    address: 'G/F JC Bldg. Carreon St., Centro East, Santiago City',
    tel: '(078) 305-0018',
    mobile: '0917-510-2899',
    mapUrl: "https://www.google.com/maps?q=New+City+Cable+Office+Santiago+City+Isabela&output=embed",
  },
  {
    id: 'talavera',
    name: 'Talavera Branch',
    address: '#212 Quezon Street, Maestrang Kikay Dist., Talavera, Nueva Ecija, 3114',
    tel: '(044) 411-0012',
    mobile: '0917-888-1234',
    mapUrl: "https://www.google.com/maps?q=212+Quezon+Street+Maestrang+Kikay+Talavera+Nueva+Ecija&output=embed",
  },
  {
    id: 'cordon',
    name: 'Cordon Branch',
    address: 'National Highway, Osmena, Cordon, Isabela',
    tel: '(078) 376-0744',
    mobile: '0917-704-2968',
    mapUrl: "https://www.google.com/maps?q=New+City+Cable+Office+Cordon+Branch+Isabela&output=embed",
  },
  {
    id: 'guimba',
    name: 'Guimba Branch',
    address:'MQ58+3RF, Guimba, Nueva Ecija' ,
    tel: '(044) 958 2486',
    mobile: '',
    mapUrl: "https://www.google.com/maps?q=Summit+Cable+Network+Cable+and+Fiber+Internet&output=embed",
  },
  {
    id: 'sto.domingo',
    name: 'Sto. Domingo Branch',
    address:'' ,
    tel: '',
    mobile: '',
    mapUrl: "",
  },
  {
    id: 'saguday',
    name: 'Saguday Branch',
    address:'Purok 2 Sadiri Street, Magsaysay, Saguday, Quirino' ,
    tel: '',
    mobile: '',
    mapUrl: "https://www.google.com/maps?q=16.539069,121.561211&output=embed",
  },
  {
    id: 'cabarroguis',
    name: 'Cabarroguis Branch',
    address:'Purok 6 Zamora, Cabarroguis, Quirino' ,
    tel: '',
    mobile: '0917 504 2727',
    mapUrl: "https://www.google.com/maps?q=New+City+Cable+System+Quirino+Philippines&output=embed",
  }
];

export const Contact = () => {
  const [activeBranch, setActiveBranch] = useState(BRANCHES[2]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    plan: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedPlan = PLANS.find(p => p.id === formData.plan);
    const planDetails = selectedPlan ? `${selectedPlan.name} (${selectedPlan.speed})` : 'No plan selected';
    
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} - Citi CableWorld`);
    const body = encodeURIComponent(
      `Customer Inquiry Details:\n` +
      `--------------------------\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Address/Barangay: ${formData.address}\n` +
      `Desired Plan: ${planDetails}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoUrl = `mailto:support@citicableworld.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 md:mb-10 tracking-tight">
          Our Branches
        </h2>
      {/* Branch Selector Tabs */}
      <div className="flex flex-col items-center gap-3">
          <div className="w-full flex justify-center">
            <div className="inline-flex flex-nowrap md:flex-wrap gap-2 p-1.5 bg-white border border-gray-100 rounded-2xl md:rounded-full shadow-sm max-w-full overflow-x-auto scrollbar-hide">
              {BRANCHES.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranch(branch)}
                  className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                    activeBranch === branch
                      ? 'bg-[#059669] text-white shadow-md' 
                      : 'text-slate-500 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {branch.name}
                </button>
              ))}
            </div>
          </div>
          <p className="md:hidden text-[10px] text-slate-400 font-bold uppercase tracking-widest animate-pulse">Swipe for more →</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-start mb-16">
        {/* Left Column: Contact Information */}
        <div className="space-y-8 bg-white p-8 md:p-10 rounded-[32px] border border-emerald-50 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#047857] mb-8">Contact Information</h2>
          
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="bg-emerald-50/50 p-6 rounded-2xl flex gap-5">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                <p className="text-slate-600 text-[15px]">Tel: {activeBranch.tel}</p>
                <p className="text-slate-600 text-[15px]">Mobile: {activeBranch.mobile}</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-amber-50/50 p-6 rounded-2xl flex gap-5">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-amber-500 shadow-sm shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                <p className="text-slate-600 text-[15px]">support@citicableworld.com</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-50 p-6 rounded-2xl flex gap-5 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-500 shadow-sm shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Office Location</h4>
                <p className="text-slate-600 text-[15px] leading-relaxed max-w-[280px]">
                  {activeBranch.address}
                </p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-emerald-50/50 p-6 rounded-2xl flex gap-5">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-500 shadow-sm shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                <p className="text-slate-600 text-[15px]">Monday - Saturday: 8:00 AM - 5:00 PM</p>
                <p className="text-slate-600 text-[15px]">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#047857] mb-8">Inquire Now</h2>
          
          <form className="space-y-6" onSubmit={handleSendMessage}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name" 
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com" 
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="0912 345 6789" 
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Address / Barangay <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Your address or barangay" 
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Desired Plan <span className="text-red-500">*</span></label>
              <select 
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m19%209-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_1.25rem_center] bg-no-repeat text-slate-700 font-medium"
              >
                <option value="">Select a plan</option>
                {PLANS.map(plan => (
                  <option key={plan.id} value={plan.id}>{plan.name} - {plan.speed}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                placeholder="Tell us more about your needs..." 
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400 resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-emerald-600 text-white font-black text-lg hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 rounded-[48px] overflow-hidden h-[400px] border-4 border-white shadow-2xl relative group bg-slate-100">
        <iframe 
          src={activeBranch.mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          title={`${activeBranch.name} Map`}
          className="transition-opacity duration-300"
        ></iframe>
        <div className="absolute top-6 left-6 pointer-events-none">
          <div className="bg-white/95 backdrop-blur px-6 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-fade-in-up pointer-events-auto">
             <div className="w-3 h-3 rounded-full animate-pulse bg-emerald-500"></div>
             <span className="text-sm font-black text-slate-900">{activeBranch.name} Location</span>
          </div>
        </div>
      </div>
    </div>
  );
};