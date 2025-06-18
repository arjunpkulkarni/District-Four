
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactFooter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any }
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 font-display">
              Ready to Scale Your Brand?
            </h2>
            <p className="text-gray-600 mb-8 text-lg font-body">
              Let's discuss how we can transform your social media presence and drive real business results.
            </p>
            
            <form className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="your@business.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-body"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your goals..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-6 py-4 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-body"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 font-body"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Branding */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <div className="flex items-center">
                <img src="/images/icon.png" alt="Lume" className="h-32 w-auto" style={{ marginLeft: '-30px' }} />
              </div>
              <p className="text-gray-600 text-lg mb-8 font-body">
                Social media experts helping brands turn followers into customers with data-driven strategies and authentic content.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-body">arjunpkulkarni@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-body">+1 (914) 719-2129</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-body">NYC & Chicago</span>
              </div>
            </div>

            

            
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm font-body">© 2024 Lume. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors font-body">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors font-body">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors font-body">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactFooter;
