
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      bio: "Former growth lead at TikTok. Built personal brand to 500K+ followers across platforms.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Sarah Kim",
      role: "Co-Founder & Creative Director",
      bio: "Ex-Instagram content strategist. Created viral campaigns for Fortune 500 brands.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Growth",
      bio: "Former Y Combinator alum. Scaled 3 startups from 0 to $10M+ ARR using social media.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
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
    <section className="py-20 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
            Meet the Team
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            We're not just marketers—we're creators who've built our own audiences and understand what it takes to grow a brand authentically.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-4 font-body">{member.role}</p>
              <p className="text-gray-600 mb-6 leading-relaxed font-body">{member.bio}</p>
              
              <div className="flex justify-center space-x-4">
                <a
                  href={member.socials.linkedin}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.socials.twitter}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.socials.instagram}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">Join Our Growing Team</h3>
            <p className="text-gray-600 mb-6 font-body">We're always looking for talented creators and strategists who share our passion for authentic growth.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 font-body"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
