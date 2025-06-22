import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Users, TrendingUp, Award, Star } from 'lucide-react';

const HeroSection = () => {
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
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #4F46E5 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>
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
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium text-sm mb-8"
              >
                <div className="w-2 h-2 bg-[#45c0ff] rounded-full mr-3 animate-pulse" />
                Trusted by 10+ growing brands
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Boost your business with a {' '}
                <span className="bg-gradient-to-r from-[#45c0ff] to-[#6936F5] bg-clip-text text-transparent">
                  strong digital presence.
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 leading-relaxed font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                We help businesses dominate online by growing their audience, strengthening their brand, and turning social media and SEO-optimized websites into real, measurable revenue.
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
                      className="flex-1 px-6 py-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg shadow-blue-600/25 whitespace-nowrap"
                    >
                      Get Free Audit
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

                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span>4.9/5 average rating</span>
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
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Client Logos Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide">Featured Clients</h3>
                <div className="grid grid-cols-3 gap-x-4 gap-y-6">
                  {clients.map((client, index) => (
                    <motion.div
                      key={client.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.05, duration: 0.4 }}
                      className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-all duration-200 cursor-pointer flex flex-col items-center justify-start"
                    >
                      <img src={client.src} alt={`${client.name} logo`} className="w-12 h-12 rounded-full object-cover mb-3 shadow-md" />
                      <div className="text-gray-800 text-sm font-semibold mb-1">{client.name}</div>
                    </motion.div>
                  ))}
                </div>
                <motion.a
                  href="#portfolio"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-6 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  View all work <ChevronRight className="w-4 h-4 ml-1" />
                </motion.a>
              </motion.div>

              {/* Floating Elements for Visual Interest */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
