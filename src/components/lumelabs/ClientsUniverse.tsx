
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClientsUniverse = () => {
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const clients = [
    {
      id: 1,
      name: "FitCheck",
      tagline: "NYC's first centralized fashion social platform.",
      category: "fashion",
      logo: "FC",
      color: "#FF477E",
      details: {
        followers: "127K",
        engagement: "+18%",
        metric: "Checkout Rate"
      }
    },
    {
      id: 2,
      name: "Workwear",
      tagline: "Professional style hub, Westchester NY.",
      category: "fashion", 
      logo: "WW",
      color: "#4E6EFF",
      details: {
        followers: "89K",
        engagement: "+24%",
        metric: "UGC Engagement"
      }
    },
    {
      id: 3,
      name: "Gloss Authority",
      tagline: "On-demand auto detailing.",
      category: "auto",
      logo: "GA", 
      color: "#FF6B35",
      details: {
        followers: "45K",
        engagement: "2.4×",
        metric: "Appointment Bookings"
      }
    },
    {
      id: 4,
      name: "GD Agency",
      tagline: "Local digital marketing shop.",
      category: "b2b",
      logo: "GD",
      color: "#00D9FF",
      details: {
        followers: "12K",
        engagement: "4.3×",
        metric: "ROAS"
      }
    },
    {
      id: 5,
      name: "Hanger",
      tagline: "AI-driven fashion marketplace + stylist.",
      category: "fashion",
      logo: "H",
      color: "#9B59B6",
      details: {
        followers: "203K",
        engagement: "9s",
        metric: "Avg. Dwell Time"
      }
    },
    {
      id: 6,
      name: "Culin",
      tagline: "Precision-nutrition healthcare startup.",
      category: "health",
      logo: "C",
      color: "#2ECC71",
      details: {
        followers: "78K",
        engagement: "72ms",
        metric: "API Latency"
      }
    }
  ];

  const filteredClients = filter === 'all' ? clients : clients.filter(client => client.category === filter);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Clients Universe <span className="text-4xl">🚀</span>
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            {['all', 'fashion', 'b2b', 'auto', 'health'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? 'bg-[#4E6EFF] text-white' 
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Floating Logos */}
        <div className="relative h-96 mb-16">
          {filteredClients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute cursor-pointer"
              style={{
                left: `${20 + (index % 3) * 30}%`,
                top: `${20 + Math.floor(index / 3) * 40}%`,
              }}
              onClick={() => setSelectedClient(selectedClient === client.id ? null : client.id)}
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300"
                style={{ backgroundColor: client.color }}
              >
                {client.logo}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-2"
              >
                <p className="text-white text-sm font-medium">{client.name}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Client Details Panel */}
        <AnimatePresence>
          {selectedClient && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedClient(null)}
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-2xl w-full relative z-10"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const client = clients.find(c => c.id === selectedClient);
                  if (!client) return null;
                  
                  return (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                          style={{ backgroundColor: client.color }}
                        >
                          {client.logo}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 font-['Space_Grotesk']">
                            {client.name}
                          </h3>
                          <p className="text-gray-600 font-inter">{client.tagline}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                          <div className="text-2xl font-bold text-[#4E6EFF] font-['Space_Grotesk']">
                            {client.details.followers}
                          </div>
                          <div className="text-sm text-gray-600">Followers</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                          <div className="text-2xl font-bold text-[#FF477E] font-['Space_Grotesk']">
                            {client.details.engagement}
                          </div>
                          <div className="text-sm text-gray-600">Growth</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                          <div className="text-sm text-gray-600 mb-1">{client.details.metric}</div>
                          <div className="text-xl font-bold text-gray-900">Optimized</div>
                        </div>
                      </div>
                      
                      {/* Space for custom stats */}
                      <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                        <p className="text-gray-500 font-inter">
                          🔄 <strong>Space for Instagram Stats</strong><br />
                          Engagement rates, reach metrics, story completion rates
                        </p>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Creator Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8 font-['Space_Grotesk']">
            Creator <span className="text-[#FF477E]">Partners</span>
          </h3>
          <div className="border-2 border-dashed border-white/30 rounded-xl p-12">
            <p className="text-white/70 text-lg font-inter">
              ✨ <strong>Space for Creator Stats</strong><br />
              Partner creator profiles, collaboration metrics, and performance data
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsUniverse;
