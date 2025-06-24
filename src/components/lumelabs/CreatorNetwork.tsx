import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, TrendingUp, Camera, Instagram } from 'lucide-react';

const CreatorNetwork = () => {
  const creators = [
    {
      id: 1,
      name: "Cristian Lager",
      specialty: "Fitness & Lifestyle",
      instagramHandle: "https://www.instagram.com/cristianlager",
      tiktokHandle: "https://www.tiktok.com/@cristian.lager",
      instagramFollowers: "54K",
      tiktokFollowers: "93K",
      image: "/images/cristian1.png",
      rating: 4.9,
      projects: 23,
      verified: true,
      statsImages: [
        "/images/stats/parker3.PNG",
        "/images/stats/cristian4.PNG",
        "/images/stats/cristian7.PNG",
        "/images/stats/cristian8.PNG",        
      ]
    },
    {
      id: 2,
      name: "Noah Chung",
      specialty: "Comedy & Lifestyle",
      instagramHandle: "https://www.instagram.com/noahxchu",
      tiktokHandle: "https://www.tiktok.com/@noahxchung",
      instagramFollowers: "7K",
      tiktokFollowers: "102K",
      image: "/images/noah.png",
      rating: 4.8,
      projects: 15,
      verified: true,
      statsImages: []
    },
  ];

  const networkStats = useMemo(() => {
    const parseFollowerCount = (countStr?: string) => {
      if (!countStr) return 0;
      const lower = countStr.toLowerCase();
      const num = parseFloat(lower);
      if (isNaN(num)) return 0;

      if (lower.endsWith('k')) return num * 1000;
      if (lower.endsWith('m')) return num * 1000000;
      return num;
    };

    const totalReach = creators.reduce((sum, creator) => 
      sum + parseFollowerCount(creator.instagramFollowers) + parseFollowerCount(creator.tiktokFollowers), 
    0);

    const formatReach = (num: number) => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${Math.round(num / 1000)}K`;
      return num.toString();
    };

    return [
      { icon: Users, value: creators.length.toString(), label: "Active Creators" },
      { icon: Camera, value: formatReach(totalReach), label: "Total Reach" },
      { icon: TrendingUp, value: "95%", label: "Success Rate" },
      { icon: Star, value: "4.8", label: "Avg Rating" }
    ];
  }, [creators]);

  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Creator Network</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partnering with top-tier content creators to amplify your brand's message across all platforms
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {networkStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200"
            >
              {/* Card Header */}
              <div className="relative bg-blue-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-lg">
                        <img
                          src={creator.image}
                          alt={creator.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {creator.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        {creator.name}
                      </h3>
                      <p className="text-blue-100 font-medium">
                        {creator.specialty}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-300 fill-current" />
                      <span className="font-bold">{creator.rating}</span>
                    </div>
                    <div className="text-blue-100 text-sm">
                      {creator.projects} projects
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Social Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-2xl">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-bold text-2xl text-gray-900 mb-1">
                      {creator.instagramFollowers}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">Instagram</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white border border-gray-200 rounded-2xl">
                    <div className="w-10 h-10 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TikTokIcon />
                    </div>
                    <div className="font-bold text-2xl text-gray-900 mb-1">
                      {creator.tiktokFollowers}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">TikTok</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    onClick={() => window.open(creator.instagramHandle, '_blank')}
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gray-800 hover:bg-black text-white py-3 px-5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    onClick={() => window.open(creator.tiktokHandle, '_blank')}
                  >
                    <TikTokIcon />
                    TikTok
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorNetwork;