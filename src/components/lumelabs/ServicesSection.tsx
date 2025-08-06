import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../lib/animations';
import SectionHeader from './SectionHeader';
import { TrendingUp } from 'lucide-react';

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

interface ImpactStat {
  value: string;
  label: string;
  description: string;
  source: string;
}

const ImpactStatCard = ({ stat, variants }: { stat: ImpactStat; variants: any }) => (
  <motion.div
    variants={variants}
    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center transform hover:scale-105 transition-transform duration-300 flex flex-col items-center"
  >
    <p className="text-4xl font-bold text-blue-500 mb-1">{stat.value}</p>
    <h4 className="text-base font-semibold text-white mb-1">{stat.label}</h4>
    <p className="text-xs text-gray-400 mb-2 flex-grow">{stat.description}</p>
    <p className="text-[10px] text-gray-500 italic">Source: {stat.source}</p>
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

  const socialImpactStats: ImpactStat[] = [
    {
      value: '20-30%',
      label: 'Revenue Increase',
      description: 'for businesses with a strong social media presence vs. those without.',
      source: 'Statista, Hootsuite'
    },
    {
      value: '70%+',
      label: 'Increased Traffic & Leads',
      description: 'reported by small businesses using social media for growth.',
      source: 'Sprout Social'
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-black min-h-screen" id="services">
      <div className="max-w-7xl mx-auto px-6 w-full mt-10">
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
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 hidden md:block"
        >
          <div className="bg-transparent rounded-xl p-6">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center text-white mb-6">The Undeniable Impact of Social Media</motion.h3>
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {socialImpactStats.map((stat, index) => (
                <ImpactStatCard key={index} stat={stat} variants={itemVariants} />
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 bg-gray-900 border border-gray-800 rounded-xl p-4 max-w-5xl mx-auto flex items-center shadow-lg"
            >
              <TrendingUp className="w-10 h-10 text-blue-500 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white text-base">Key Takeaway</h4>
                <p className="text-gray-300 text-sm">
                  An active, strategic social media presence outperforms competitors by <strong>20–30%</strong> in revenue and sales.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
