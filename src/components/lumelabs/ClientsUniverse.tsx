
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Eye, Zap, Star } from 'lucide-react';

const ClientsUniverse = () => {
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const clients = [
    {
      id: 1,
      name: "FitCheck",
      tagline: "NYC's first centralized fashion social platform.",
      category: "fashion",
      logo: "FC",
      color: "#FF477E",
      gradient: "from-[#FF477E] to-[#FF6B9D]",
      details: {
        followers: "127K",
        engagement: "+18%",
        metric: "Checkout Rate",
        description: "Transformed from fashion blog to social commerce powerhouse",
        achievements: ["2.3M monthly impressions", "450% follower growth", "85% higher conversion rates"],
        platforms: ["Instagram", "TikTok", "Pinterest"]
      }
    },
    {
      id: 2,
      name: "Workwear",
      tagline: "Professional style hub, Westchester NY.",
      category: "fashion", 
      logo: "WW",
      color: "#4E6EFF",
      gradient: "from-[#4E6EFF] to-[#7B68EE]",
      details: {
        followers: "89K",
        engagement: "+24%",
        metric: "UGC Engagement",
        description: "B2B fashion brand that became a lifestyle movement",
        achievements: ["3.8M video views", "1200+ UGC posts", "92% brand recall"],
        platforms: ["LinkedIn", "Instagram", "YouTube"]
      }
    },
    {
      id: 3,
      name: "Gloss Authority",
      tagline: "On-demand auto detailing.",
      category: "auto",
      logo: "GA", 
      color: "#FF6B35",
      gradient: "from-[#FF6B35] to-[#FF8E53]",
      details: {
        followers: "45K",
        engagement: "2.4×",
        metric: "Appointment Bookings",
        description: "Local car service that went viral with before/after content",
        achievements: ["67% more bookings", "4.9 star rating", "Featured in AutoWeek"],
        platforms: ["TikTok", "Instagram", "Facebook"]
      }
    },
    {
      id: 4,
      name: "GD Agency",
      tagline: "Local digital marketing shop.",
      category: "b2b",
      logo: "GD",
      color: "#00D9FF",
      gradient: "from-[#00D9FF] to-[#33E0FF]",
      details: {
        followers: "12K",
        engagement: "4.3×",
        metric: "ROAS",
        description: "Marketing agency that practices what they preach",
        achievements: ["$2.3M client revenue", "430% ROAS improvement", "25 new enterprise clients"],
        platforms: ["LinkedIn", "Twitter", "Medium"]
      }
    },
    {
      id: 5,
      name: "Hanger",
      tagline: "AI-driven fashion marketplace + stylist.",
      category: "fashion",
      logo: "H",
      color: "#9B59B6",
      gradient: "from-[#9B59B6] to-[#B968C7]",
      details: {
        followers: "203K",
        engagement: "9s",
        metric: "Avg. Dwell Time",
        description: "AI fashion startup that humanized technology through social",
        achievements: ["$1.2M funding raised", "Featured in Vogue", "50K+ app downloads"],
        platforms: ["Instagram", "TikTok", "Snapchat"]
      }
    },
    {
      id: 6,
      name: "Culin",
      tagline: "Precision-nutrition healthcare startup.",
      category: "health",
      logo: "C",
      color: "#2ECC71",
      gradient: "from-[#2ECC71] to-[#58D68D]",
      details: {
        followers: "78K",
        engagement: "72ms",
        metric: "API Latency",
        description: "Health-tech startup that made nutrition science accessible",
        achievements: ["1M+ content views", "Partnership with Mayo Clinic", "4.8 app store rating"],
        platforms: ["Instagram", "YouTube", "Twitter"]
      }
    }
  ];

  const filteredClients = filter === 'all' ? clients : clients.filter(client => client.category === filter);

  const categories = [
    { id: 'all', label: 'All', icon: <Star className="w-4 h-4" /> },
    { id: 'fashion', label: 'Fashion', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'b2b', label: 'B2B', icon: <Users className="w-4 h-4" /> },
    { id: 'auto', label: 'Auto', icon: <Zap className="w-4 h-4" /> },
    { id: 'health', label: 'Health', icon: <Eye className="w-4 h-4" /> }
  ];

  return (
    <section id="clients" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20" />
        <motion.div
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 80%, rgba(78, 110, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(255, 71, 126, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(78, 110, 255, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🚀
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Clients <span className="bg-gradient-to-r from-[#FF477E] to-[#4E6EFF] bg-clip-text text-transparent">Universe</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-inter mb-8">
            From fashion startups to Fortune 500s, we've turned brands into household names
          </p>
          
          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id 
                    ? 'bg-gradient-to-r from-[#4E6EFF] to-[#FF477E] text-white shadow-lg' 
                    : 'bg-white/10 text-white/70 hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {category.icon}
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Floating Logos */}
        <div 
          ref={containerRef}
          className="relative h-[500px] mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20"
        >
          {filteredClients.map((client, index) => {
            const angle = (index / filteredClients.length) * 2 * Math.PI;
            const radius = 150;
            const centerX = 50;
            const centerY = 50;
            const x = centerX + (radius * Math.cos(angle)) / 5;
            const y = centerY + (radius * Math.sin(angle)) / 5;

            return (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.2, 
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  x: [0, Math.sin(Date.now() * 0.001 + index) * 20],
                  y: [0, Math.cos(Date.now() * 0.001 + index) * 20],
                }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                viewport={{ once: true }}
                className="absolute cursor-pointer group"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setSelectedClient(selectedClient === client.id ? null : client.id)}
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${client.gradient} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />
                  
                  <div 
                    className={`relative w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl bg-gradient-to-r ${client.gradient} ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300`}
                  >
                    {client.logo}
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-3"
                >
                  <p className="text-white text-sm font-semibold font-['Space_Grotesk']">{client.name}</p>
                  <p className="text-white/60 text-xs font-inter">{client.category}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Client Details Panel */}
        <AnimatePresence>
          {selectedClient && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-md"
              onClick={() => setSelectedClient(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-white rounded-3xl p-8 max-w-4xl w-full relative overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const client = clients.find(c => c.id === selectedClient);
                  if (!client) return null;
                  
                  return (
                    <>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center gap-6">
                          <div 
                            className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl bg-gradient-to-r ${client.gradient} shadow-lg`}
                          >
                            {client.logo}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 font-['Space_Grotesk'] mb-2">
                              {client.name}
                            </h3>
                            <p className="text-gray-600 font-inter text-lg mb-2">{client.tagline}</p>
                            <p className="text-gray-500 font-inter">{client.details.description}</p>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => setSelectedClient(null)}
                          className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                        >
                          ×
                        </button>
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                          <div className={`text-3xl font-bold font-['Space_Grotesk'] mb-2`} style={{ color: client.color }}>
                            {client.details.followers}
                          </div>
                          <div className="text-sm text-gray-600 font-inter">Followers</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                          <div className={`text-3xl font-bold font-['Space_Grotesk'] mb-2`} style={{ color: client.color }}>
                            {client.details.engagement}
                          </div>
                          <div className="text-sm text-gray-600 font-inter">Growth</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl col-span-2 md:col-span-1">
                          <div className="text-sm text-gray-600 font-inter mb-1">{client.details.metric}</div>
                          <div className="text-2xl font-bold text-gray-900 font-['Space_Grotesk']">Optimized</div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 font-['Space_Grotesk'] mb-4">Key Achievements</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {client.details.achievements.map((achievement, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                              className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100"
                            >
                              <div 
                                className="w-3 h-3 rounded-full flex-shrink-0"
                                style={{ backgroundColor: client.color }}
                              />
                              <span className="text-gray-700 font-inter text-sm">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Platforms */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 font-['Space_Grotesk'] mb-4">Active Platforms</h4>
                        <div className="flex gap-3">
                          {client.details.platforms.map((platform, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.5 }}
                              className="px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-300"
                              style={{ 
                                borderColor: client.color,
                                color: client.color,
                                backgroundColor: `${client.color}10`
                              }}
                            >
                              {platform}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Instagram Stats Placeholder */}
                      <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center bg-gradient-to-br from-gray-50/50 to-white/50">
                        <div className="text-4xl mb-4">📊</div>
                        <p className="text-gray-500 font-inter text-lg mb-2">
                          <strong>Instagram Analytics Dashboard</strong>
                        </p>
                        <p className="text-gray-400 font-inter">
                          Real-time engagement rates, reach metrics, story completion rates, and performance insights
                        </p>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Creator Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-8 font-['Space_Grotesk']">
            Creator <span className="bg-gradient-to-r from-[#FF477E] to-[#4E6EFF] bg-clip-text text-transparent">Partners</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-dashed border-white/30 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">👥</div>
              <p className="text-white font-inter text-lg mb-2">
                <strong>Creator Network Stats</strong>
              </p>
              <p className="text-white/70 font-inter">
                Partner creator profiles, collaboration metrics, campaign performance data
              </p>
            </div>
            
            <div className="border-2 border-dashed border-white/30 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">🎬</div>
              <p className="text-white font-inter text-lg mb-2">
                <strong>Content Performance Hub</strong>
              </p>
              <p className="text-white/70 font-inter">
                UGC analytics, viral content tracking, influencer ROI measurements
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsUniverse;
