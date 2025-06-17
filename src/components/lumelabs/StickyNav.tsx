
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StickyNav = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'b2b', label: 'B2B' },
    { id: 'auto', label: 'Auto' },
    { id: 'health', label: 'Health' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-8 left-8 z-40"
    >
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-4">
        <p className="text-white text-xs font-medium mb-3 font-inter">Filter Clients</p>
        <div className="space-y-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-[#4E6EFF] text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StickyNav;
