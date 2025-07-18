import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../lib/animations';
import SectionHeader from './SectionHeader';

interface Service {
  title: string;
  description: string;
}

const ServiceCard = ({ service, variants }: { service: Service, variants: any }) => (
  <motion.div
    variants={variants}
    className="bg-gray-900 rounded-xl p-3 md:p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
  >
    <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">{service.title}</h3>
    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{service.description}</p>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
