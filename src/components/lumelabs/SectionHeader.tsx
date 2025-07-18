import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

interface SectionHeaderProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  subtitle: string;
}

const SectionHeader = ({ badge, title, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
      className="text-center mb-8 md:mb-16"
    >
      <motion.div variants={itemVariants}>
        {badge}
      </motion.div>
      <motion.h2 variants={itemVariants} className="text-xl md:text-5xl font-bold text-white mt-10 md:mt-0 mb-4 md:mb-6">
        {title}
      </motion.h2>
      <motion.p variants={itemVariants} className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeader; 