import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, TrendingUp, Camera, Instagram } from 'lucide-react';


const CreatorNetwork = () => {
  const creators = [
    {
      id: 1,
      name: "Cristian Lager",
      specialty: "Just For Fun",
      handle: "https://www.instagram.com/cristianlager",
      followers: "54K",
      image: "/images/cristian1.png",
      rating: 4.9,
      projects: 23
    },
    {
      id: 2,
      name: "Parker Mitchell",
      specialty: "Fitness & Lifestyle",
      handle: "https://www.instagram.com/parkermitchl",
      image: "/images/parker1.png",
      followers: "2K",
    }
  ];

  const networkStats = [
    { icon: Users, value: "2", label: "Active Creators" },
    { icon: Camera, value: "20M", label: "Total Reach" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Star, value: "4.8", label: "Avg Rating" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#4E6EFF]">Creator Network</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Partnering with top-tier content creators across industries to amplify your brand's message
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {networkStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#4E6EFF] to-[#FF477E] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-inter text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-[#4E6EFF]/20 transition-all duration-300">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#4E6EFF] to-[#FF477E] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {creator.followers}
                </div>
              </div>

              {/* Creator Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {creator.name}
                </h3>
                <p className="text-[#4E6EFF] font-medium mb-4">
                  {creator.specialty}
                </p>

                

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4E6EFF] to-[#FF477E] text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg"
                  onClick={() => window.open(creator.handle, '_blank')}
                >
                  <Instagram className="w-4 h-4" />
                  <span>View Instagram</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default CreatorNetwork;