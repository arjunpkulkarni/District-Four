
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, BarChart3, Bot, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      emoji: "🖥️",
      service: "Web Dev & Design",
      punchline: "Pixel-perfect sites that print money.",
      description: "Custom websites that convert visitors into customers with lightning speed and buttery-smooth UX.",
      features: ["Conversion-optimized design", "Mobile-first responsive", "SEO-ready architecture", "Analytics integration"],
      color: "#4E6EFF"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      emoji: "📈", 
      service: "Social Management",
      punchline: "3 Reels, 2 Stories, 1 viral moment—every week.",
      description: "Data-driven content strategy that turns your brand into the main character of your audience's feed.",
      features: ["Content calendar planning", "Community management", "Influencer partnerships", "Viral trend integration"],
      color: "#FF477E"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      emoji: "📊",
      service: "Analytics & Reporting", 
      punchline: "Monday morning email = your growth gospel.",
      description: "Weekly insights that reveal exactly what's working, what's not, and what to double down on next.",
      features: ["Performance dashboards", "ROI tracking", "Competitor analysis", "Growth recommendations"],
      color: "#00D9FF"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      emoji: "🤖",
      service: "AI Trend-Hunts",
      punchline: "Bots crawl 24/7 so you don't have to.",
      description: "Custom AI agents that monitor social platforms, identify emerging trends, and alert you before they explode.",
      features: ["Real-time trend detection", "Competitor monitoring", "Content opportunity alerts", "Automated research"],
      color: "#9B59B6"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          className="absolute inset-0 bg-gradient-to-br from-[#4E6EFF]/5 via-transparent to-[#FF477E]/5"
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4E6EFF] to-[#FF477E] text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Our Magic Toolkit
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-['Space_Grotesk']">
            Our <span className="bg-gradient-to-r from-[#FF477E] to-[#4E6EFF] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            We don't just do social media. We craft digital experiences that make your competitors wonder what they're missing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer relative"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden h-full">
                {/* Dynamic Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl"
                  style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}05)` }}
                />
                
                {/* Floating Icon */}
                <motion.div
                  animate={{ 
                    y: hoveredService === index ? [-5, 5, -5] : [0],
                    rotate: hoveredService === index ? [0, 5, -5, 0] : [0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-40 transition-all duration-300"
                >
                  {service.emoji}
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: `${service.color}15`, color: service.color }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-['Space_Grotesk'] group-hover:text-gray-700 transition-colors duration-300">
                    {service.service}
                  </h3>
                  
                  <p className="text-lg font-semibold mb-4 font-inter" style={{ color: service.color }}>
                    {service.punchline}
                  </p>
                  
                  <p className="text-gray-600 font-inter leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature List */}
                  <AnimatePresence>
                    {hoveredService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 mb-6"
                      >
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: service.color }}
                            />
                            {feature}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-2 font-semibold group-hover:gap-4 transition-all duration-300"
                    style={{ color: service.color }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="text-2xl">💰</span>
            <span className="text-lg font-semibold text-gray-700 font-inter">Transparent Pricing</span>
          </motion.div>
          
          <p className="text-lg text-gray-600 font-inter">
            Plans from <span className="font-bold text-[#4E6EFF] text-xl">$499/mo</span> · 
            <span className="text-[#FF477E] font-semibold"> month-to-month</span> · 
            <span className="text-green-600 font-semibold"> no handcuffs</span>
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-gradient-to-r from-[#4E6EFF] to-[#FF477E] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            See All Plans
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
