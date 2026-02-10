import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Coverage } from './components/Coverage';
import { Plans } from './components/Plans';
import { IPTV } from './components/IPTV';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SubscriptionModal } from './components/SubscriptionModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');

  const handleOpenModal = (planId: string = '') => {
    setSelectedPlanId(planId);
    setIsModalOpen(true);
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50">
      <Navbar onSubscribe={() => handleOpenModal()} />
      
      <main className="flex-grow">
        <section id="home" className="animate-fade-in-up">
          <Hero onSubscribe={() => handleOpenModal()} />
        </section>

        {/* Using fluid vertical padding: py-12 on mobile, py-24 on desktop */}
        <section className="py-12 md:py-24 bg-white border-t border-gray-50">
          <Features />
        </section>

        <section id="coverage" className="py-12 md:py-24 bg-white">
          <Coverage />
        </section>

        <section id="plans" className="py-12 md:py-24 bg-gray-50">
          <Plans onSubscribe={(planId) => handleOpenModal(planId)} />
        </section>

        <section id="iptv" className="py-12 md:py-24 bg-white">
          <IPTV />
        </section>

        <section id="contact" className="py-12 md:py-24 bg-gray-50">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Global Subscription Modal */}
      <SubscriptionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialPlanId={selectedPlanId}
      />

      {/* Brand Badge - Responsive Visibility */}
      <div className="hidden sm:flex fixed bottom-4 right-4 z-50 bg-slate-900/90 backdrop-blur text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest items-center gap-2 shadow-2xl border border-white/10">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
        Citi CableWorld
      </div>
    </div>
  );
};

export default App;