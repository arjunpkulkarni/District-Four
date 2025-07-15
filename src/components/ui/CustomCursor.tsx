import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    pointer: {
      height: 48,
      width: 48,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
    },
  };

  const dotVariants = {
    default: {
      height: 8,
      width: 8,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    pointer: {
      height: 6,
      width: 6,
      backgroundColor: 'rgba(255, 255, 255, 1)',
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          translateX: position.x - 16,
          translateY: position.y - 16,
        }}
        variants={cursorVariants}
        animate={isPointer ? 'pointer' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          translateX: position.x - 4,
          translateY: position.y - 4,
        }}
        variants={dotVariants}
        animate={isPointer ? 'pointer' : 'default'}
        transition={{ type: 'spring', stiffness: 800, damping: 40 }}
      />
    </>
  );
};

export default CustomCursor; 