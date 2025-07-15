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
      { icon: Users, value: creators.length.toString(), label: "Creators" },
      { icon: Camera, value: formatReach(totalReach), label: "Total Reach" },
      { icon: TrendingUp, value: "95%", label: "Success Rate" },
      { icon: Star, value: "4.8", label: "Avg Rating" }
    ];
  }, [creators]);

  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto px-2 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Creator Network
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Partnering with top-tier content creators to amplify your brand's message.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {networkStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-center bg-gray-900/50 rounded-xl p-4 transition-colors duration-300 border border-gray-800 hover:bg-gray-800/50"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-2">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-xl overflow-hidden group border border-gray-800 flex flex-col"
            >
              {/* Card Header */}
              <div className="bg-gray-900 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-lg overflow-hidden ring-2 ring-gray-700">
                        <img
                          src={creator.image}
                          alt={creator.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {creator.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center ring-2 ring-gray-900">
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        {creator.name}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium">
                        {creator.specialty}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-gray-400 fill-current" />
                      <span className="font-bold text-sm">{creator.rating}</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {creator.projects} projects
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Social Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <a href={creator.instagramHandle} target="_blank" rel="noopener noreferrer" className="text-center p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center mx-auto mb-1.5">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-bold text-xl text-white">
                      {creator.instagramFollowers}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">Instagram</div>
                  </a>
                  
                  <a href={creator.tiktokHandle} target="_blank" rel="noopener noreferrer" className="text-center p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center mx-auto mb-1.5">
                      <TikTokIcon />
                    </div>
                    <div className="font-bold text-xl text-white">
                      {creator.tiktokFollowers}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">TikTok</div>
                  </a>
                </div>
                
                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-white hover:bg-gray-200 text-black py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-base"
                    onClick={() => window.open(creator.instagramHandle, '_blank')}
                  >
                    View Profile
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