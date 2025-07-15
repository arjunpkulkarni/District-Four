
import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';
import SectionHeader from './SectionHeader';

interface Service {
  title: string;
  description: string;
}

const ServiceCard = ({ service, variants }: { service: Service, variants: any }) => (
  <motion.div
    variants={variants}
    className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
  >
    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
    <p className="text-gray-400 leading-relaxed">{service.description}</p>
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
      title: "Paid Advertising",
      description: "Targeted ad campaigns that deliver measurable results and maximize your ROI.",
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
    <section className="py-20 bg-black h-full flex items-center" id="services">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <SectionHeader
          badge={
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 text-gray-300 font-medium text-sm mb-6">
              <Megaphone className="w-4 h-4 mr-2" />
              Our Services
            </div>
          }
          title={
            <>
              Everything you need to <span className="text-gray-400">dominate</span> the digital space
            </>
          }
          subtitle="From strategy to execution, we handle every aspect of your digital presence so you can focus on what you do best."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
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
