import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WorkflowTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  const steps = [
    {
      emoji: "☕",
      title: "Coffee Chat",
      description: "Quick strategy session",
      gif: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop"
    },
    {
      emoji: "▶️", 
      title: "Kick-off Shoot",
      description: "Professional content creation day",
      gif: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop"
    },
    {
      emoji: "✍️",
      title: "Content Calendar", 
      description: "Strategic posting schedule & copy",
      gif: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      emoji: "📈",
      title: "Growth Sprints",
      description: "Data-driven optimization cycles",
      gif: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      emoji: "💌",
      title: "Monday Metrics",
      description: "Weekly performance deep-dive",
      gif: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      emoji: "🚀",
      title: "Scale & Ads",
      description: "Amplify what works, optimize ROI",
      gif: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 font-['Space_Grotesk']">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#4E6EFF]">Workflow</span>
          </h2>
          <p className="text-xl text-gray-600">Swipe through our proven process</p>
        </motion.div>

        <div 
          ref={containerRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80 snap-center"
            >
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-6xl mb-4 text-center">{step.emoji}</div>
                <div className="mb-4 rounded-2xl overflow-hidden">
                  <img 
                    src={step.gif} 
                    alt={step.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowTimeline;
