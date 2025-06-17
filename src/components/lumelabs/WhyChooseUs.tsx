
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Eye } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligent Solutions",
      description: "Custom AI agents spot trends before they trend."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Brand Elevation", 
      description: "We weaponise storytelling to make you unforgettable."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Intuitive Design",
      description: "UX so smooth it feels like buttered glass."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-['Space_Grotesk']">
            Why Choose <span className="text-[#4E6EFF]">Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                rotateY: 5, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-[#4E6EFF] mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-inter">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
