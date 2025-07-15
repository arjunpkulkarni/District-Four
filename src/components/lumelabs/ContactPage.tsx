
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, Instagram } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';

const ContactCard = ({ name, email, phone }: { name: string, email: string, phone: string }) => (
  <motion.div
    variants={itemVariants}
    className="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-md"
  >
    <h3 className="text-3xl font-bold text-white mb-4">{name}</h3>
    <div className="space-y-4">
      <a href={`mailto:${email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
        <Mail className="w-6 h-6 text-gray-400" />
        <span className="text-lg">{email}</span>
      </a>
      <a href={`tel:${phone}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
        <Phone className="w-6 h-6 text-gray-400" />
        <span className="text-lg">{phone}</span>
      </a>
    </div>
    <motion.a
        href={`mailto:${email}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg transition-all duration-300 mt-8"
    >
        <span>Contact {name.split(' ')[0]}</span>
        <ArrowRight className="w-5 h-5" />
    </motion.a>
  </motion.div>
);

const ContactPage = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-6xl font-bold mb-4 text-white">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl">
              We're here to help you build the future. Reach out to us.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 w-full max-w-4xl"
          >
            <ContactCard 
              name="Cristian Lager"
              email="cristianlager1@gmail.com"
              phone="+1 (630) 280-8841"
            />
            <ContactCard 
              name="Arjun Kulkarni"
              email="arjunpkulkarni@gmail.com"
              phone="+1 (914) 719-2129"
            />
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="https://www.instagram.com/districtfourmedia"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 mt-12 text-lg"
          >
            <Instagram className="w-7 h-7" />
            <span>Follow on Instagram</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
