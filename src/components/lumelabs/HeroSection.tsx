
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [particles, setParticles] = useState<{id: number, x: number, y: number}[]>([]);

  const handleCTAClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    }));
    setParticles(prev => [...prev, ...newParticles]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 1000);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
          {/* Animated NYC/UIUC Transition */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#4E6EFF] to-[#FF477E] opacity-20"
            animate={{
              background: [
                'linear-gradient(45deg, #4E6EFF, #FF477E)',
                'linear-gradient(135deg, #FF477E, #4E6EFF)',
                'linear-gradient(45deg, #4E6EFF, #FF477E)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 font-['Space_Grotesk']"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Turn <span className="text-[#4E6EFF]">Scrollers</span> into{' '}
            <span className="text-[#FF477E]">Loyal Customers</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-12 font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            AI-powered social, built by students who live on IG, TikTok & Threads
          </motion.p>

          {/* Email CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4E6EFF] w-full sm:w-80"
            />
            <motion.button
              onClick={handleCTAClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF477E] hover:bg-[#FF477E]/90 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-[#FF477E]/25 relative overflow-hidden"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#why-choose-us"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            See the magic <ArrowDown className="w-4 h-4 ml-1 animate-bounce" />
          </motion.a>
        </motion.div>
      </div>

      {/* Particle Burst */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed w-2 h-2 bg-[#FF477E] rounded-full pointer-events-none z-50"
          initial={{ 
            x: particle.x, 
            y: particle.y, 
            scale: 0,
            opacity: 1 
          }}
          animate={{ 
            x: particle.x + (Math.random() - 0.5) * 200,
            y: particle.y + (Math.random() - 0.5) * 200,
            scale: [0, 1, 0],
            opacity: [1, 1, 0]
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </section>
  );
};

export default HeroSection;
