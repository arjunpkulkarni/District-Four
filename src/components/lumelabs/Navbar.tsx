import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const mobileMenuContainerVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const mobileMenuItemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 500, damping: 30 },
  },
  closed: { opacity: 0, x: -20 },
};

const Navbar = ({ onNavClick, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'clients' },
    { label: 'Process', id: 'workflow' },
    { label: 'Team', id: 'team' },
  ];

  const handleNavClick = (id) => {
    onNavClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-20 justify-between">
          <motion.div layout transition={{ type: "spring", stiffness: 300, damping: 30 }} className="flex items-center space-x-3">
            <img src="/images/icon.png" alt="Lume Logo" className="h-24 w-auto" />            
          </motion.div>

          <div className="hidden md:flex items-center">
            <motion.div
              className="flex items-center space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.1 * index + 0.3 }}
                  className={`font-medium transition-colors duration-200 relative group font-body ${
                    activeSection === item.id ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${activeSection === item.id ? 'w-full' : ''}`} />
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick('contact')}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.6 }}
                className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-body"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuContainerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-black/80 backdrop-blur-lg rounded-lg mt-2 p-4 shadow-lg border border-gray-100/10 overflow-hidden"
          >
            {[...navItems, { label: 'Contact', id: 'contact' }].map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                variants={mobileMenuItemVariants}
                className={`w-full text-left block py-3 font-medium transition-colors border-b border-gray-50/10 last:border-b-0 font-body ${
                  activeSection === item.id ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
                onClick={() => handleNavClick('contact')}
                variants={mobileMenuItemVariants}
                className="block mt-3 w-full bg-white text-gray-900 px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-200 transition-colors font-body"
              >
                Get Started
              </motion.button>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
