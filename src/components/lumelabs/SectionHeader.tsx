import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

interface SectionHeaderProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  subtitle: string;
  size?: 'small' | 'large';
}

const SectionHeader = ({ badge, title, subtitle, size = 'large' }: SectionHeaderProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
      className={`text-center ${size === 'small' ? 'mb-6 md:mb-12' : 'mb-8 md:mb-16'}`}
    >
      <motion.div variants={itemVariants}>{badge}</motion.div>
      <motion.h2
        variants={itemVariants}
        className={`${size === 'small' ? 'text-lg md:text-3xl' : 'text-xl md:text-5xl'} font-bold text-white mt-6 md:mt-0 mb-4 md:mb-6`}
      >
        {title}
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className={`${size === 'small' ? 'text-sm md:text-lg' : 'text-base md:text-xl'} text-gray-300 max-w-3xl mx-auto`}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeader;
