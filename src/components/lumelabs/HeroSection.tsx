import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Users, TrendingUp, Award, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const stats = [
    { number: '150K+', label: 'Followers Generated', icon: Users },
    { number: '75M+', label: 'Content Impressions', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '10+', label: 'Brands Scaled', icon: Award }
  ];

  const clients = [
    { name: 'FitCheck', src: '/images/fitcheck.png', description: 'AI-powered fitness coaching.' },
    { name: 'Workwear', src: '/images/workwear.png', description: 'Sustainable corporate apparel.' },
    { name: 'Hanger', src: '/images/hanger.png', description: 'Digital wardrobe organization.' },
    { name: 'Culin', src: '/images/culin.png', description: 'Gourmet meal kit delivery.' },
    { name: 'Gloss Authority', src: '/images/glossauthority.png', description: 'Premium car detailing products.' },
    { name: 'GD Agency', src: '/images/gdagency.jpeg', description: 'Creative design and branding.' }
  ];

  const socialProof = [
    { metric: '$2.4M+', label: 'Revenue Generated' },
    { metric: '300%', label: 'Avg. Growth Rate' },
    { metric: '6 Months', label: 'Avg. Break-Even' }
  ];

  return (
    <section className="relative min-h-screen bg-[#0D0D0D] text-gray-300 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(100,100,255,0.07),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,_rgba(255,100,100,0.07),_transparent_40%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem'
        }} />
      </div>


      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium text-sm mb-8"
                style={{ fontFamily: 'Simpel, serif' }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 shadow-[0_0_10px_theme(colors.green.400)]" />
                Trusted by 10+ growing brands
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Simpel, serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Moving culture with {' '}
                <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                  Creative Media.
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-400 mb-8 leading-relaxed"
                style={{ fontFamily: 'Simpel, serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="text-2xl font-semibold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">We’re a Gen Z media agency.</span><br />
                We craft viral content and build digital strategies<br />
                to grow modern brands across every platform.
              </motion.p>


              {/* CTA Section */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <input
                    type="email"
                    placeholder="your@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-lg border border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all backdrop-blur-sm"
                    style={{ fontFamily: 'Simpel, serif' }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-white/10"
                    style={{ fontFamily: 'Simpel, serif' }}
                  >
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-wrap items-center gap-6 text-gray-500 text-sm"
              >

                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[
                      '/images/arjun.jpeg',
                      '/images/cristian.jpeg',
                      '/images/noah.png'
                    ].map(src => (
                      <img key={src} src={src} className="w-8 h-8 rounded-full border-2 border-gray-800 object-cover" />
                    ))}
                  </div>
                  <span className="text-gray-400" style={{ fontFamily: 'Simpel, serif' }}>Join 150K+ followers</span>
                </div>
              </motion.div>


            </div>

            {/* Right Column - Stats & Visual Elements */}
            <div className="relative">
              {/* Main Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Simpel, serif' }}>{stat.number}</div>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Simpel, serif' }}>{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Client Logos Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
              >
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: 'Simpel, serif' }}>Featured Clients</h3>
                <div className="grid grid-cols-3 gap-x-4 gap-y-6">
                  {clients.slice(0, 6).map((client, index) => (
                    <motion.div
                      key={client.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.05, duration: 0.4 }}
                      className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-200 cursor-pointer flex flex-col items-center justify-start"
                    >
                      <img src={client.src} alt={`${client.name} logo`} className="w-12 h-12 rounded-full object-cover mb-3 grayscale" />
                      <div className="text-gray-300 text-sm font-semibold mb-1" style={{ fontFamily: 'Simpel, serif' }}>{client.name}</div>
                    </motion.div>
                  ))}
                </div>
                <motion.a
                  href="#portfolio"
                  className="inline-flex items-center text-gray-300 hover:text-white text-sm font-medium mt-6 transition-colors group"
                  whileHover={{ x: 5 }}
                  style={{ fontFamily: 'Simpel, serif' }}
                >
                  View all work <ChevronRight className="w-4 h-4 ml-1" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
