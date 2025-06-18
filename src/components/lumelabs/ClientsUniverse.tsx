import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, TrendingUp, Users, Zap, Heart } from 'lucide-react';

const ClientsUniverse = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "FitCheck",
      imageSrc: "/images/fitcheck.png",
      altText: "FitCheck Application Screenshot",
      description: "NYC's first centralized fashion social platform connecting style enthusiasts.",
      category: "Fashion Tech",
      siteUrl: "https://www.fitcheck.live",
      metrics: ["127K followers", "2.3M impressions", "450% growth"],
      color: "#FF477E"
    },
    {
      id: 2,
      title: "Workwear",
      imageSrc: "/images/workwear.png",
      altText: "Workwear Application Screenshot", 
      description: "Professional style hub transforming workplace fashion in Westchester, NY.",
      category: "B2B Fashion",
      siteUrl: "https://workwearweb.com/",
      metrics: ["89K followers", "3.8M video views", "92% brand recall"],
      color: "#4E6EFF"
    },
    {
      id: 3,
      title: "Gloss Authority",
      imageSrc: "/images/glossauthority.png",
      altText: "Gloss Authority Application Screenshot",
      description: "Premium mobile car detailing service with viral before/after content.",
      category: "Automotive",
      siteUrl: "https://glossauthority.com/",
      metrics: ["45K followers", "67% more bookings", "4.9★ rating"],
      color: "#FF6B35"
    },
    {
      id: 4,
      title: "GD Agency",
      imageSrc: "/images/gdagency.jpeg",
      altText: "GD Agency Application Screenshot",
      description: "Digital marketing agency practicing what they preach with proven results.",
      category: "Marketing",
      siteUrl: "https://www.giadagency.com/",
      metrics: ["12K followers", "$2.3M client revenue", "430% ROAS"],
      color: "#00D9FF"
    },
    {
      id: 5,
      title: "Hanger",
      imageSrc: "/images/hanger.png",
      altText: "Hanger Application Screenshot",
      description: "AI-powered fashion marketplace making technology feel human and accessible.",
      category: "AI Fashion",
      siteUrl: "https://www.hanger.live/",
      metrics: ["203K followers", "$1.2M funding", "50K+ downloads"],
      color: "#9B59B6"
    },
    {
      id: 6,
      title: "Culin",
      imageSrc: "/images/culin.png",
      altText: "Culin Application Screenshot",
      description: "Health-tech startup making nutrition science accessible to everyone.",
      category: "HealthTech",
      siteUrl: "https://www.culin.net/",
      metrics: ["78K followers", "Mayo Clinic partnership", "4.8★ app rating"],
      color: "#2ECC71"
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fashion Tech':
      case 'AI Fashion':
      case 'B2B Fashion':
        return <TrendingUp className="w-4 h-4" />;
      case 'Marketing':
        return <Users className="w-4 h-4" />;
      case 'Automotive':
        return <Zap className="w-4 h-4" />;
      case 'HealthTech':
        return <Heart className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl font-display">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#4E6EFF]">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Transforming brands across industries with strategic social media marketing and compelling digital experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.imageSrc}
                  alt={project.altText}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                
                {/* Category Badge */}
                <div 
                  className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm font-medium backdrop-blur-sm"
                  style={{ backgroundColor: `${project.color}CC` }}
                >
                  {getCategoryIcon(project.category)}
                  {project.category}
                </div>

                {/* Visit Site Button */}
                <motion.a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    scale: hoveredProject === project.id ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                >
                  <ExternalLink className="w-5 h-5 text-gray-700 group-hover/btn:text-[#4E6EFF] transition-colors duration-200" />
                </motion.a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4E6EFF] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-inter mb-6 leading-relaxed">
                  {project.description}
                </p>

                

                {/* Visit Site Link */}
                <motion.a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 mt-6 text-[#4E6EFF] hover:text-[#3D5BFF] font-semibold transition-colors duration-200"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ClientsUniverse;
