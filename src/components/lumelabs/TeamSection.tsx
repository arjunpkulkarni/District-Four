import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Globe, Instagram, CheckCircle } from 'lucide-react';
import TiktokIcon from '../icons/Tiktok.svg?react';

const TeamSection = () => {
  const team = [
    {
      name: "Arjun Kulkarni",
      role: "Engineering",
      bio: [
        "Top 3 U.S. engineering program",
        "2x founder backed by Intel & UC Health",
        "Scaled businesses for 20+ clients"
      ],
      image: "/images/arjun.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/arjun-kulkarni-610922297/",
        instagram: "https://www.instagram.com/arjunnkulkarni",
        website: "https://arjunkulkarni.co"
      }
    },
    {
      name: "Cristian Lager",
      role: "Sales & Marketing",
      bio: [
        "Signed by Ford Models - Top 15 Models in USA",
        "Netflix Actor for #1 Ranked Show in 2024",
        "Social Media Strategist for over 2.3M+ followers"
      ],
      image: "/images/cristian.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/cristian-lager-334b13259/",
        instagram: "https://www.instagram.com/cristianlager",
        tiktok: "https://www.tiktok.com/@cristian.lager?lang=en"
      }
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
    <section className="py-20 bg-black min-h-screen flex items-center" id="team">
      <div className="w-full mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Meet the Team
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto font-body">
            We're not just marketers—we're creators who've built our own audiences and understand what it takes to grow a brand & business authentically.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-gray-200 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">{member.name}</h3>
              <p className="text-gray-500 font-semibold mb-4 font-body">{member.role}</p>
              <ul className="text-gray-600 mb-6 space-y-2 text-left text-sm font-body">
                {member.bio.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-gray-400 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-center space-x-4">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.socials.website && (
                  <a
                    href={member.socials.website}
                    className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {member.socials.tiktok && (
                  <a
                    href={member.socials.tiktok}
                    className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <TiktokIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default TeamSection;
