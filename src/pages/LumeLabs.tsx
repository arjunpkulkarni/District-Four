
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Zap, Eye, Heart, Share2, Users, Calendar, Phone, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';
import HeroSection from '@/components/lumelabs/HeroSection';
import WhyChooseUs from '@/components/lumelabs/WhyChooseUs';
import ServicesSection from '@/components/lumelabs/ServicesSection';
import ClientsUniverse from '@/components/lumelabs/ClientsUniverse';
import WorkflowTimeline from '@/components/lumelabs/WorkflowTimeline';
import ContactFooter from '@/components/lumelabs/ContactFooter';
import StickyNav from '@/components/lumelabs/StickyNav';

const LumeLabs = () => {
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
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiSequence, darkMode]);

  return (
    <div className={`${darkMode ? 'dark bg-gray-900' : 'bg-white'} transition-all duration-1000`}>
      <StickyNav />
      
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <ClientsUniverse />
      <WorkflowTimeline />
      <ContactFooter />
      
      {/* Particle Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#4E6EFF] rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [null, -20, 20],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LumeLabs;
