import React from 'react';
import { motion } from 'framer-motion';
import { Search, Play, TrendingUp, FileText } from 'lucide-react';
import { containerVariants, itemVariants } from '../../lib/animations';
import SectionHeader from './SectionHeader';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Discovery & Strategy",
      description: "We dive deep to understand your goals, audience, and brand to develop a tailored strategy that delivers."
    },
    {
      icon: Play,
      title: "2. Execution",
      description: "Our team brings the strategy to life, creating compelling content and launching targeted campaigns."
    },
    {
      icon: TrendingUp,
      title: "3. Optimization",
      description: "We continuously monitor performance, A/B test, and refine our approach to maximize your results."
    },
    {
      icon: FileText,
      title: "4. Reporting",
      description: "Receive clear, concise reports that track key metrics and demonstrate the tangible impact on your business."
    }
  ];

  return (
    <section className="py-12 bg-black h-full flex items-center" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <SectionHeader
          badge={null}
          title={
            <>
              Our process is simple, yet <span className="text-gray-400">effective</span>
            </>
          }
          subtitle="We follow a proven framework to ensure your success."
        />

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center relative"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center">
                    <step.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-sm md:text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs md:text-base text-gray-400 leading-relaxed">{step.description}</p>
                
              </motion.div>
            ))}
          </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 