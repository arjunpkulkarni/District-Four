import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../lib/animations';
import SectionHeader from './SectionHeader';
import { CheckCircle } from 'lucide-react';

interface Service {
  title: string;
  description: string;
}

const ServiceCard = ({ service, variants }: { service: Service; variants: any }) => (
  <motion.div
    variants={variants}
    className="bg-gray-900 rounded-xl p-2 md:p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300"
  >
    <h3 className="text-xs md:text-base font-bold text-white mb-1 md:mb-2">{service.title}</h3>
    <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed">{service.description}</p>
  </motion.div>
);

const ServicesSection = () => {
  const services: Service[] = [
    {
      title: 'Social Media Strategy',
      description: 'Comprehensive social media strategy tailored to your brand and audience.',
    },
    {
      title: 'Content Creation',
      description: 'High-quality content that stops the scroll and drives engagement.',
    },
    {
      title: 'Web Design & Development',
      description: 'We create beautiful websites that convert visitors into customers.',
    },
    {
      title: 'Community Management',
      description: 'Building and nurturing an active and loyal online community around your brand.',
    },
    {
      title: 'AI-Driven Outreach',
      description: 'Leverage our AI to engage your highest-converting leads.',
    },
    {
      title: 'Analytics & Growth',
      description: 'Data-driven insights to continuously optimize your social presence.',
    },
  ];

  const socialImpactStats = [
    'Businesses with a strong social media presence see a 20–30% increase in revenue on average compared to those without (Statista, Hootsuite).',
    'Over 70% of small businesses using social media report increased traffic and leads, translating into sales growth (Sprout Social).',
  ];

  return (
    <section className="py-8 bg-black h-full flex items-center" id="services">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <SectionHeader
          badge={null}
          size="small"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} variants={itemVariants} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-16 hidden md:block"
        >
          <motion.div variants={itemVariants} className="bg-transparent rounded-xl p-6">
            <h3 className="text-xl font-bold text-center text-white mb-6">The Undeniable Impact of Social Media</h3>
            <ul className="space-y-4 max-w-3xl mx-auto">
              {socialImpactStats.map((stat, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-xs leading-relaxed">{stat}</p>
                </motion.li>
              ))}
            </ul>
            <motion.p
              variants={itemVariants}
              className="text-center text-gray-400 mt-6 max-w-3xl mx-auto font-semibold text-xs"
            >
              Key Takeaway: An active, strategic social media presence outperforms competitors by 20–30% in revenue and sales.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
