import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../ui/CustomCursor';

const HeroSection: React.FC<{ onNavClick: (sectionId: string) => void }> = ({ onNavClick }) => {
  return (
    <>
      <style>{`
        .animated-border-button {
          position: relative;
          overflow: hidden;
        }

        .animated-border-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, white);
          animation: animate-top 2s linear infinite;
        }

        @keyframes animate-top {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .animated-border-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(270deg, transparent, white);
          animation: animate-bottom 2s linear infinite;
        }

        @keyframes animate-bottom {
          0% {
            right: -100%;
          }
          100% {
            right: 100%;
          }
        }
      `}</style>
      <section 
        className="relative h-full w-full text-gray-300 flex flex-col items-center justify-center overflow-hidden cursor-none bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <CustomCursor />
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">       
          

          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We build brands for the digital age.
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            From viral content and stunning websites, <br />
            we have the tools to make your brand impossible to ignore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button 
              onClick={() => onNavClick('contact')}
              className="bg-transparent text-white font-bold py-4 px-8 rounded-full border border-white transition-all duration-300 text-lg animated-border-button hover:bg-white hover:text-black hover:scale-105 transform"
            >
              Get Started
            </button>
          </motion.div>
          
        </div>
      </section>
    </>
  );
};

export default HeroSection;
