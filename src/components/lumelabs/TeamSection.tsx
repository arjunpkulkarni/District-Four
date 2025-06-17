
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & Creative Director",
      bio: "UIUC CS grad who turned late-night coding into viral campaigns.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Maya Rodriguez",
      role: "Growth & Analytics Lead",
      bio: "Ex-TikTok intern who cracked the algorithm for local brands.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b898?w=300&h=300&fit=crop&crop=face",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Jordan Kim",
      role: "Content & Strategy",
      bio: "NYU film student who makes product demos feel like Netflix originals.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Sam Taylor",
      role: "Dev & Automation",
      bio: "Full-stack wizard who automates everything except creativity.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#4E6EFF] rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [null, -20, 20],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-['Space_Grotesk']">
            Meet the <span className="text-[#4E6EFF]">Dream Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Gen-Z natives who grew up with social media and now turn that fluency into business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4E6EFF]/0 to-[#FF477E]/0 group-hover:from-[#4E6EFF]/5 group-hover:to-[#FF477E]/5 transition-all duration-500 rounded-3xl" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-[#4E6EFF]/30 transition-all duration-300"
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Space_Grotesk'] group-hover:text-[#4E6EFF] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#FF477E] font-semibold mb-3 font-inter">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-inter">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-3">
                    {[
                      { icon: Linkedin, href: member.socials.linkedin },
                      { icon: Twitter, href: member.socials.twitter },
                      { icon: Instagram, href: member.socials.instagram }
                    ].map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        href={social.href}
                        whileHover={{ scale: 1.2, y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="w-8 h-8 bg-gray-100 hover:bg-[#4E6EFF] rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
                      >
                        <social.icon size={16} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "127", label: "Coffees/Week" },
              { number: "4.2M", label: "Content Views" },
              { number: "23", label: "Viral Moments" },
              { number: "99.2%", label: "Client Retention" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index + 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#4E6EFF] font-['Space_Grotesk']">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
