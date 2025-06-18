
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Video, MessageCircle, BarChart3, Camera, Megaphone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Instagram,
      title: "Social Media Strategy",
      description: "Comprehensive social media strategy tailored to your brand and audience.",
      features: ["Platform optimization", "Content calendar", "Audience analysis", "Competitor research"]
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "High-quality content that stops the scroll and drives engagement.",
      features: ["Video production", "Photography", "Graphic design", "Copywriting"]
    },
    {
      icon: MessageCircle,
      title: "Community Management",
      description: "Build and nurture a loyal community around your brand.",
      features: ["Daily engagement", "Customer service", "Influencer outreach", "Crisis management"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Growth",
      description: "Data-driven insights to continuously optimize your social presence.",
      features: ["Performance tracking", "A/B testing", "Growth hacking", "ROI reporting"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-medium text-sm mb-6">
            <Megaphone className="w-4 h-4 mr-2" />
            Our Services
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to <span className="text-purple-600">dominate</span> social media
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we handle every aspect of your social media presence so you can focus on what you do best.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to transform your social media?</h3>
            <p className="text-blue-100 mb-6">Let's create a strategy that turns your followers into customers.</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Start Your Project
              <Camera className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
