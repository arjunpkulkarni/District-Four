import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, TrendingUp, Users, Zap, Heart, CheckCircle2 } from 'lucide-react';

const ClientsUniverse = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "FitCheck",
      imageSrc: "/images/fitcheck.png",
      altText: "FitCheck Application Screenshot",
      description: "NYC's first centralized fashion social platform connecting style enthusiasts.",
      category: "Fashion Tech",
      siteUrl: "https://www.fitcheck.live",
      metrics: ["1K+ | Downloads", "450% | User Growth", "300% | Website Traffic"],
      whatWeDid: [
        { title: "Viral Campaign", description: "Developed a viral marketing campaign that reached millions of impressions across TikTok and Instagram." },
        { title: "Social Growth", description: "Dramatically grew their social media presence in a short period, achieving over 100K followers." },
        { title: "Community Building", description: "Fostered a large community of style enthusiasts in NYC through targeted outreach and events." }
      ],
      color: "#45c0ff"
    },
    {
      id: 2,
      title: "Workwear",
      imageSrc: "/images/workwear.png",
      altText: "Workwear Application Screenshot", 
      description: "Professional style hub transforming workplace fashion in Westchester, NY.",
      category: "B2B Fashion",
      siteUrl: "https://workwearweb.com/",
      metrics: ["2K+ | Sales", "200% | Website Traffic", "150% | Increase in Leads"],
      whatWeDid: [
        { title: "Video Content", description: "Produced engaging short-form video content that generated millions of views on LinkedIn and YouTube." },
        { title: "Brand Identity", description: "Built a strong brand identity that resulted in a 92% brand recall rate among the target audience." },
        { title: "Community Cultivation", description: "Cultivated a large professional online community on LinkedIn, fostering industry discussions." }
      ],
      color: "#45c0ff"
    },
    {
      id: 3,
      title: "Gloss Authority",
      imageSrc: "/images/glossauthority.png",
      altText: "Gloss Authority Application Screenshot",
      description: "Premium mobile car detailing service with viral before/after content.",
      category: "Automotive",
      siteUrl: "https://glossauthority.com/",
      metrics: ["150% | Increase in Leads", "67% | More Bookings", "200% | Local Traffic Boost"],
      whatWeDid: [
        { title: "Local SEO", description: "Established and optimized a Google Business Profile, boosting local search visibility and walk-in inquiries." },
        { title: "Digital Ad Campaign", description: "A targeted digital ad campaign increased web traffic by 150% and improved brand recognition in the local area." },
        { title: "Website Optimization", description: "Revamped the client's website for local SEO, leading to first-page rankings for key search terms." }
      ],
      color: "#45c0ff"
    },
    {
      id: 4,
      title: "GD Agency",
      imageSrc: "/images/gdagency.jpeg",
      altText: "GD Agency Application Screenshot",
      description: "Digital marketing agency practicing what they preach with proven results.",
      category: "Marketing",
      siteUrl: "https://www.giadagency.com/",
      metrics: ["300+ | Leads Generated", "$10K+ | Client Revenue", "270% | Average ROAS"],
      whatWeDid: [
        { title: "Lead Generation Funnel", description: "Implemented a high-converting lead generation funnel that directly contributed to $2.3M in new client revenue." },
        { title: "Performance Marketing", description: "Managed a multi-platform ad spend with a focus on data analysis to achieve an average 430% ROAS." },
        { title: "Content Marketing", description: "Showcased their expertise through case studies and articles, growing their own following by 12K." }
      ],
      color: "#45c0ff"
    },
    {
      id: 5,
      title: "Hanger",
      imageSrc: "/images/hanger.png",
      altText: "Hanger Application Screenshot",
      description: "AI-powered fashion marketplace making technology feel human and accessible.",
      category: "AI Fashion",
      siteUrl: "https://www.hanger.live/",
      metrics: ["1K+ | Downloads", "35% | Conversion Rate", "200% | User Engagement"],
      whatWeDid: [
        { title: "Content Strategy", description: "Developed a unique content strategy that demystified AI, making it relatable and attracting over 200K followers." },
        { title: "App Launch Support", description: "Our launch campaign drove over 50,000 app downloads in the first month." },
        { title: "Traction & Funding", description: "Created a compelling pitch deck and marketing materials that were instrumental in their successful funding round." }
      ],
      color: "#45c0ff"
    },
    {
      id: 6,
      title: "Culin",
      imageSrc: "/images/culin.png",
      altText: "Culin Application Screenshot",
      description: "Health-tech startup making nutrition science accessible to everyone.",
      category: "HealthTech",
      siteUrl: "https://www.culin.net/",
      metrics: ["10K+ | Active Users", "90% | User Growth", "4.8 | App Rating"],
      whatWeDid: [
        { title: "Strategic PR", description: "Crafted and executed a PR campaign that secured a high-profile partnership with the Mayo Clinic." },
        { title: "Community Trust", description: "Built a large, trusted online community by sharing scientifically-backed nutritional information." },
        { title: "App Store Optimization", description: "Managed app store listings and proactive review responses to maintain a 4.8-star rating." }
      ],
      color: "#45c0ff"
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
    <section id="clients" className="py-20 bg-gray-50 dark:bg-[var(--background)]">
      <div className="container mx-auto px-6 max-w-7xl font-display">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-[var(--foreground)] mb-4">
            Our <span className="text-[var(--accent)]">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-inter">
            Transforming brands across industries with strategic digital marketing.
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
              className="group bg-white dark:bg-[var(--card)] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <motion.img
                  src={project.imageSrc}
                  alt={project.altText}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                
                {/* Category Badge */}
                <div 
                  className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm font-medium backdrop-blur-sm"
                  style={{ backgroundColor: project.color + 'CC' }}
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
                  <ExternalLink className="w-5 h-5 text-gray-700 group-hover/btn:text-[var(--accent)] transition-colors duration-200" />
                </motion.a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-[var(--card-foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-inter mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="border-t border-b border-gray-200 dark:border-gray-700 my-6 py-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {project.metrics.map((metric, i) => {
                      const parts = metric.split(' | ');
                      return (
                        <div key={i}>
                          <p className="font-bold text-lg text-gray-800 dark:text-gray-200 font-inter">{parts[0]}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-inter">{parts[1]}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-6 font-inter">
                  <h4 className="font-bold text-gray-800 dark:text-gray-300 mb-3">What we did:</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {project.whatWeDid.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start relative cursor-pointer"
                        onMouseEnter={() => setHoveredInfo(`${project.id}-${i}`)}
                        onMouseLeave={() => setHoveredInfo(null)}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-[var(--accent)] flex-shrink-0" />
                        <span>{item.title}</span>
                        {/* <AnimatePresence>
                          {hoveredInfo === `${project.id}-${i}` && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-[250px] bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-md py-1.5 px-3 z-10 shadow-lg"
                              style={{ pointerEvents: 'none' }}
                            >
                              {item.description}
                            </motion.div>
                          )}
                        </AnimatePresence> */}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visit Site Link */}
                <motion.a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 mt-6 text-[var(--accent)] hover:text-[var(--accent)] font-semibold transition-colors duration-200"
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
