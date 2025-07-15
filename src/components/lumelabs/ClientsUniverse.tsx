import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Heart,
  Paintbrush,
} from 'lucide-react';

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
      metrics: "1K+ | Down",
      location: "New York, NY",
    },
    {
      id: 2,
      title: "Workwear",
      imageSrc: "/images/workwear.png",
      altText: "Workwear Application Screenshot", 
      description: "Professional style hub transforming workplace fashion in Westchester, NY.",
      category: "B2B Fashion",
      siteUrl: "https://workwearweb.com/",
      metrics: "2K+ | Sales",
      location: "New York, NY",
    },
    {
      id: 3,
      title: "Gloss Authority",
      imageSrc: "/images/glossauthority.png",
      altText: "Gloss Authority Application Screenshot",
      description: "Premium mobile car detailing service with viral before/after content.",
      category: "Automotive",
      siteUrl: "https://glossauthority.com/",
      metrics: "150% | Leads",
      location: "New York, NY",
    },
    {
      id: 4,
      title: "GD Agency",
      imageSrc: "/images/gdagency.jpeg",
      altText: "GD Agency Application Screenshot",
      description: "Digital marketing agency practicing what they preach with proven results.",
      category: "Marketing",
      siteUrl: "https://www.giadagency.com/",
      metrics: "$10K+ | Revenue",
      location: "New York, NY",
    },
    {
      id: 5,
      title: "Hanger",
      imageSrc: "/images/hanger.png",
      altText: "Hanger Application Screenshot",
      description: "AI-powered fashion marketplace making technology feel human and accessible.",
      category: "AI Fashion",
      siteUrl: "https://www.hanger.live/",
      metrics: "1K+ | Down",
      location: "New York, NY",
    },
    {
      id: 6,
      title: "Culin",
      imageSrc: "/images/culin.png",
      altText: "Culin Application Screenshot",
      description: "Health-tech startup making nutrition science accessible to everyone.",
      category: "HealthTech",
      siteUrl: "https://www.culin.net/",
      metrics: "10K+ | Users",
      location: "New York, NY",
    },
    {
      id: 7,
      title: "Nice Tattoo",
      imageSrc: "/images/nicetattoo.png",
      altText: "Nice Tattoo studio",
      description: "A premier tattoo studio known for its exceptional artists and sterile, welcoming environment.",
      category: "Creative Arts",
      siteUrl: "https://www.instagram.com/nicetattooparlor/",
      metrics: "34K+ | Followers",
      location: "New York, NY",
    },
    {
      id: 8,
      title: "Capio Tattoo",
      imageSrc: "/images/capioTattoo.png",
      altText: "Capio Tattoo Studio",
      description: "Custom tattoo designs from world-renowned artists in a state-of-the-art studio.",
      category: "Creative Arts",
      siteUrl: "https://www.instagram.com/capiotattoo/",
      metrics: "10K+ | Followers",
      location: "New York, NY",
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
      case 'Creative Arts':
        return <Paintbrush className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="clients"
      className="bg-black h-screen flex flex-col items-center justify-center text-white"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            Our <span className="text-gray-400">Clients</span>
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Transforming brands across industries with strategic digital marketing.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden transition-shadow duration-300 border border-gray-200"
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <motion.img
                  src={project.imageSrc}
                  alt={project.altText}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/10" />
                <div
                  className="absolute top-2 left-2 flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium bg-white/80 text-black"
                >
                  {getCategoryIcon(project.category)}
                  <span>{project.category}</span>
                </div>
                <motion.a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    scale: hoveredProject === project.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="w-4 h-4 text-black" />
                </motion.a>
              </div>

              {/* Content */}
              <div className="p-3">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-base font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-500">{project.location}</span>
                </div>
                <p className="text-xs text-gray-600 mb-3 h-10">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="bg-gray-100 rounded-md p-2 text-center">
                  <p className="text-sm font-semibold text-gray-900">{project.metrics.split(' | ')[0]}</p>
                  <p className="text-xs text-gray-500">{project.metrics.split(' | ')[1]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsUniverse;
