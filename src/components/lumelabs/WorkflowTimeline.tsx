
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Users, Target, Rocket, BarChart3 } from 'lucide-react';

const WorkflowTimeline = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We audit your current presence, analyze your audience, and develop a custom strategy.",
      icon: Target,
      duration: "Week 1",
      deliverables: ["Brand audit", "Audience analysis", "Content strategy", "Growth roadmap"]
    },
    {
      step: "02", 
      title: "Content Creation",
      description: "Our team creates scroll-stopping content that aligns with your brand and resonates with your audience.",
      icon: Users,
      duration: "Week 2-3",
      deliverables: ["30-day content calendar", "Photo/video assets", "Copy & captions", "Brand guidelines"]
    },
    {
      step: "03",
      title: "Launch & Optimization",
      description: "We launch your campaigns and continuously optimize based on performance data.",
      icon: Rocket,
      duration: "Week 4+",
      deliverables: ["Campaign launch", "Daily posting", "Community management", "A/B testing"]
    },
    {
      step: "04",
      title: "Scale & Report",
      description: "Track results, scale what works, and provide detailed reports on growth and ROI.",
      icon: BarChart3,
      duration: "Ongoing",
      deliverables: ["Weekly reports", "Performance insights", "Strategy refinement", "Growth scaling"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any }
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="workflow">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
            Our Proven Process
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            From strategy to execution, we follow a data-driven process that delivers consistent results for every client.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="relative"
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                {/* Step Number & Icon */}
                <div className="md:col-span-2 flex flex-col items-center md:items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-300 font-display">{step.step}</div>
                </div>

                {/* Content */}
                <div className="md:col-span-7 bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 font-display">{step.title}</h3>
                    <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-medium font-body">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg font-body">{step.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {step.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm font-body">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-3 flex justify-center">
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex items-center">
                      <ArrowRight className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-8">
                  <div className="w-px h-12 bg-gray-200"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 font-body">Let's discuss your goals and create a custom strategy for your brand.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 font-body"
            >
              Schedule Free Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowTimeline;
