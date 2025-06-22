import React, { useState, useEffect } from 'react';
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#clients' },
    { label: 'Process', href: '#workflow' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 mt-1">
        <div className={`flex items-center h-16 justify-between md:justify-center ${isScrolled ? 'md:justify-between' : ''}`}>
          <motion.div layout transition={{ type: "spring", stiffness: 300, damping: 30 }} className="flex items-center space-x-3">
            <img src="/images/icon.png" alt="Lume Logo" className="h-44 w-auto" />            
          </motion.div>

          <div className="hidden md:flex items-center">
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  className="flex items-center space-x-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.2 } }}
                  exit={{ opacity: 0 }}
                >
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.1 * index + 0.3 }}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group font-body"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                    </motion.a>
                  ))}
                  <motion.a
                    href="#contact"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.6 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-body"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
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
            className="md:hidden bg-white rounded-lg mt-2 p-4 shadow-lg border border-gray-100 overflow-hidden"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                variants={mobileMenuItemVariants}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors border-b border-gray-50 last:border-b-0 font-body"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              variants={mobileMenuItemVariants}
              className="block mt-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors font-body"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
