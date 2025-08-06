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
    <section className="py-16 md:py-20 bg-black flex items-center min-h-screen" id="team">
      <div className="w-full mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-display">
            Meet the Team
          </motion.h2>
          <motion.p variants={itemVariants} className="hidden sm:block text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-body">
            We're not just marketers—we're creators who've built our own audiences and understand what it takes to grow a brand & business authentically.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-md md:max-w-4xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="rounded-2xl p-4 md:p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 text-center group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden ring-4 ring-gray-800 group-hover:ring-gray-700 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 font-display">{member.name}</h3>
              <p className="text-sm md:text-base text-gray-400 font-semibold mb-3 md:mb-4 font-body">{member.role}</p>
              <ul className="text-gray-300 mb-4 md:mb-6 space-y-2 text-left text-xs md:text-sm font-body">
                {member.bio.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-500 mr-2 md:mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-center space-x-3 md:space-x-4">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="w-9 h-9 md:w-10 md:h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                )}
                {member.socials.website && (
                  <a
                    href={member.socials.website}
                    className="w-9 h-9 md:w-10 md:h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Globe className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    className="w-9 h-9 md:w-10 md:h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                )}
                {member.socials.tiktok && (
                  <a
                    href={member.socials.tiktok}
                    className="w-9 h-9 md:w-10 md:h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <TiktokIcon className="w-4 h-4 md:w-5 md:h-5" />
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
