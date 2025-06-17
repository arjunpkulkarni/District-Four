
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ArrowDown, Star, Users, TrendingUp, Award, Instagram, ChevronRight } from 'lucide-react';

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

  const stats = [
    { number: '500K+', label: 'Total Followers Generated', icon: Users },
    { number: '15M+', label: 'Content Impressions', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Brands Transformed', icon: Award }
  ];

  const clients = [
    { name: 'FitCheck', logo: '🔥' },
    { name: 'Workwear', logo: '👔' },
    { name: 'Gloss Authority', logo: '🚗' },
    { name: 'Hanger', logo: '👗' },
    { name: 'Culin', logo: '🏥' },
    { name: 'GD Agency', logo: '📈' }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
          {/* Animated gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#4E6EFF] to-[#FF477E] opacity-20"
            animate={{
              background: [
                'linear-gradient(45deg, #4E6EFF, #FF477E)',
                'linear-gradient(135deg, #FF477E, #4E6EFF)',
                'linear-gradient(225deg, #4E6EFF, #FF477E)',
                'linear-gradient(315deg, #FF477E, #4E6EFF)',
                'linear-gradient(45deg, #4E6EFF, #FF477E)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          {/* Floating elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Main Content */}
            <div className="text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 mb-6"
              >
                <Instagram className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Based in NYC & Chicago</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Turn <span className="text-[#4E6EFF]">Scrollers</span> into{' '}
                <span className="text-[#FF477E]">Customers</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 mb-8 font-inter leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                We're Gen Z creators who live on social media. We know what works because we've grown our own brands from 0 to 100K+ followers.
              </motion.p>

              {/* Enhanced CTA Section */}
              <motion.div 
                className="flex flex-col sm:flex-row items-start gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <input
                    type="email"
                    placeholder="your@business.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4E6EFF] focus:border-transparent"
                  />
                  <motion.button
                    onClick={handleCTAClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#4E6EFF] to-[#FF477E] hover:from-[#3D5BFF] hover:to-[#E6386D] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-[#FF477E]/25 relative overflow-hidden whitespace-nowrap"
                  >
                    Get Free Strategy Call
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="flex flex-wrap items-center gap-6 text-white/70 text-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4E6EFF] to-[#FF477E] border-2 border-white"></div>
                    ))}
                  </div>
                  <span>50+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span>5.0 Rating</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <stat.icon className="w-6 h-6 text-[#4E6EFF]" />
                      <span className="text-2xl font-bold text-white">{stat.number}</span>
                    </div>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Client Showcase */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-white font-semibold mb-4">Brands We've Grown</h3>
                <div className="grid grid-cols-3 gap-3">
                  {clients.map((client, index) => (
                    <motion.div
                      key={client.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                      className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    >
                      <div className="text-2xl mb-1">{client.logo}</div>
                      <div className="text-white/70 text-xs">{client.name}</div>
                    </motion.div>
                  ))}
                </div>
                <motion.a
                  href="#clients"
                  className="inline-flex items-center text-[#4E6EFF] hover:text-[#3D5BFF] text-sm font-medium mt-4 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View All Projects <ChevronRight className="w-4 h-4 ml-1" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#services"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 inline-flex flex-col items-center text-white/80 hover:text-white transition-colors text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <span className="mb-2">Discover Our Services</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.a>
        </div>
      </div>

      {/* Particle Burst Effect */}
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
