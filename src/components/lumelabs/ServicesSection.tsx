
import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: "🖥️",
      service: "Web Dev & Design",
      punchline: "Pixel-perfect sites that print money."
    },
    {
      icon: "📈", 
      service: "Social Management",
      punchline: "3 Reels, 2 Stories, 1 viral moment—every week."
    },
    {
      icon: "📊",
      service: "Analytics & Reporting", 
      punchline: "Monday morning email = your growth gospel."
    },
    {
      icon: "🤖",
      service: "AI Trend-Hunts",
      punchline: "Bots crawl 24/7 so you don't have to."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-['Space_Grotesk']">
            Our <span className="text-[#FF477E]">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-[#4E6EFF] transition-all duration-300 group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-['Space_Grotesk']">
                {service.service}
              </h3>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                {service.punchline}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 font-inter">
            Plans from <span className="font-semibold text-[#4E6EFF]">$499/mo</span> · month-to-month · no handcuffs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
