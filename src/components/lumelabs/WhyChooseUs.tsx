
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, Award, Zap, BarChart3 } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Proven Growth Strategy",
      description: "We've generated 65K+ followers for our clients using data-driven approaches.",
      metric: "300% avg growth"
    },
    {
      icon: Target,
      title: "Gen Z Native Understanding",
      description: "We don't just study the algorithms - we live on these platforms. We know what resonates with real audiences.",
      metric: "98% engagement rate"
    },
    {
      icon: Users,
      title: "End-to-End Management",
      description: "From content creation to community management, we handle everything so you can focus on your business.",
      metric: "10+ brands scaled"
    },
    {
      icon: Award,
      title: "ROI-Focused Approach",
      description: "Every post, story, and campaign is designed to drive measurable business results, not just vanity metrics.",
      metric: "2-3 months avg. ROI"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Why Choose Lume
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built by creators, for <span className="text-blue-600">businesses</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not another marketing agency. We're Gen Z entrepreneurs who've built our own successful brands and now help others do the same.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
              <div className="flex items-center text-blue-600 font-medium text-sm">
                <BarChart3 className="w-4 h-4 mr-1" />
                {feature.metric}
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
};

export default WhyChooseUs;
