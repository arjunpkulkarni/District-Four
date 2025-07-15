
import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Search, Play, TrendingUp, FileText, ChevronRight } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';
import SectionHeader from './SectionHeader';

interface Service {
  title: string;
  description: string;
}

const ServiceCard = ({ service, variants }: { service: Service, variants: any }) => (
  <motion.div
    variants={variants}
    className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
  >
    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
  </motion.div>
);

const ServicesSection = () => {
  const services: Service[] = [
    {
      title: "Social Media Strategy",
      description: "Comprehensive social media strategy tailored to your brand and audience.",
    },
    {
      title: "Content Creation",
      description: "High-quality content that stops the scroll and drives engagement.",
    },
    {
      title: "Web Design & Development",
      description: "We create beautiful, responsive websites that are easy to use and convert visitors into customers.",
    },
    {
      title: "Community Management",
      description: "Building and nurturing an active and loyal online community around your brand.",
    },
    {
      title: "AI-Driven Outreach",
      description: "Leverage our AI to identify, target, and engage your highest-converting leads—automatically.",
    },
    {
      title: "Analytics & Growth",
      description: "Data-driven insights to continuously optimize your social presence.",
    }
  ];

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
    <section className="py-12 bg-black h-full flex items-center" id="services">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <SectionHeader
          badge={null}
          title={
            <>
              Everything you need to <span className="text-gray-400">dominate</span> the digital space
            </>
          }
          subtitle="We handle all aspects of your digital presence so you can do what you do best."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} variants={itemVariants} />
          ))}
        </motion.div>

        <div className="mt-12">
          <SectionHeader
            badge={null}
            title={null}
            subtitle={null}
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
                  <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
