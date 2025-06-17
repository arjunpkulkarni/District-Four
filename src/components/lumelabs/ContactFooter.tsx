
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, Instagram, Twitter, Linkedin, MapPin } from 'lucide-react';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    instagram: ''
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#FF477E] rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: -10,
                opacity: 1
              }}
              animate={{ 
                y: window.innerHeight + 10,
                x: Math.random() * window.innerWidth,
                opacity: 0,
                rotate: 360
              }}
              transition={{ 
                duration: 3,
                delay: Math.random() * 0.5
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-['Space_Grotesk']">
              Let's grow your foot traffic by{' '}
              <span className="text-[#4E6EFF]">double digits</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#FF477E]" />
                <span className="text-lg font-inter">(555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-[#FF477E]" />
                <span className="text-lg font-inter">NYC ↔ Champaign</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Calendar className="w-6 h-6 text-[#FF477E]" />
                <a href="#" className="text-lg font-inter hover:text-[#4E6EFF] transition-colors">
                  Book a Strategy Call
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4E6EFF] transition-all"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Business Name"
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4E6EFF] transition-all"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4E6EFF] transition-all"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Instagram Handle"
                  value={formData.instagram}
                  onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4E6EFF] transition-all"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FF477E] hover:bg-[#FF477E]/90 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#FF477E]/25"
              >
                Let's Grow Together 🚀
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 font-inter text-sm mb-4 md:mb-0">
            © 2025 LumeLabs · Marketing & Research · NYC ↔ Champaign
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-white/70 hover:text-[#4E6EFF] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-[#4E6EFF] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-[#4E6EFF] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
