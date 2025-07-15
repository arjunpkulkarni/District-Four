import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/lumelabs/Navbar';
import HeroSection from '@/components/lumelabs/HeroSection';
import WhyChooseUs from '@/components/lumelabs/WhyChooseUs';
import ServicesSection from '@/components/lumelabs/ServicesSection';
import Packages from '@/components/lumelabs/Packages';
import ClientsUniverse from '@/components/lumelabs/ClientsUniverse';
import TeamSection from '@/components/lumelabs/TeamSection';
import CreatorNetwork from '@/components/lumelabs/CreatorNetwork';
import WorkflowTimeline from '@/components/lumelabs/WorkflowTimeline';
import ContactFooter from '@/components/lumelabs/ContactPage';
import Testimonials from '@/components/Testimonials';

const LumeLabs = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const targetSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...konamiSequence, e.code].slice(-10);
      setKonamiSequence(newSequence);
      
      if (newSequence.join(',') === targetSequence.join(',')) {
        setDarkMode(!darkMode);
        setKonamiSequence([]);
        
        // Show success message
        const message = document.createElement('div');
        message.textContent = '🎉 Dark mode activated!';
        message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#4E6EFF] to-[#FF477E] text-white px-6 py-3 rounded-full font-semibold z-50 animate-bounce';
        document.body.appendChild(message);
        setTimeout(() => document.body.removeChild(message), 3000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiSequence, darkMode]);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onNavClick={handleNavClick} />;
      case 'services':
        return <ServicesSection />;
      case 'clients':
        return <ClientsUniverse />;
      case 'workflow':
        return <WorkflowTimeline />;
      case 'team':
        return <TeamSection />;
      case 'pricing':
        return <Packages />;
      case 'contact':
        return <ContactFooter />;
      default:
        return <HeroSection onNavClick={handleNavClick} />;
    }
  };

  return (
    <div className={`${darkMode ? 'dark bg-gray-900' : 'bg-white'} transition-all duration-1000 overflow-hidden h-screen w-screen flex flex-col`}>
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />          
      <main className="flex-grow h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              backgroundColor: i % 2 === 0 ? '#4E6EFF' : '#FF477E',
            }}
            initial={{ 
              x: Math.random() * (window.innerWidth || 1920), 
              y: Math.random() * (window.innerHeight || 1080),
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{ 
              y: [null, -30, 30],
              x: [null, Math.sin(i) * 20, -Math.sin(i) * 20],
              opacity: [null, 0.8, 0.1, 0.6]
            }}
            transition={{ 
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LumeLabs;
