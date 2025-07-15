import React from 'react';
import { motion } from 'framer-motion';
import { Search, Play, TrendingUp, FileText, Zap } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';
import SectionHeader from './SectionHeader';

const WorkflowTimeline = () => {
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
    <section className="min-h-screen flex items-center py-20 bg-black text-white" id="workflow">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge={
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 text-gray-300 font-medium text-sm mb-6">
              <Zap className="w-4 h-4 mr-2" />
              How It Works
            </div>
          }
          title="Our Streamlined Process"
          subtitle="We follow a proven, four-step process to ensure your digital marketing is effective and hassle-free."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center">
                  <step.icon className="w-9 h-9 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>        
      </div>
    </section>
  );
};

export default WorkflowTimeline;
