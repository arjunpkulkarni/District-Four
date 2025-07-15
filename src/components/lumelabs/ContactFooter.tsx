
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, InstagramIcon } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';

const ContactFooter = () => {
  return (
    <footer className="bg-black border-t border-gray-800" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >
          {/* CTA */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6 text-white">
              Ready to Dominate?
            </h2>
            <p className="text-gray-300 mb-8 text-xl max-w-2xl">
              Let's build your brand's empire together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
                href="https://www.instagram.com/districtfourmedia/"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <InstagramIcon className="w-6 h-6" />
                Follow on Instagram
            </motion.a>
        </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">© 2025 District Four. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactFooter;
