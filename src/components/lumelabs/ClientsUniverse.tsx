import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Heart,
  CheckCircle2,
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
    <section
      id="clients"
      className="py-24 bg-[#0D0D0D] min-h-screen"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Our <span className="text-[var(--accent)]">Clients</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Transforming brands across industries with strategic digital marketing.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={project.imageSrc}
                  alt={project.altText}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div
                  className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: project.color + 'CC', color: '#fff' }}
                >
                  {getCategoryIcon(project.category)}
                  <span>{project.category}</span>
                </div>
                <motion.a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    scale: hoveredProject === project.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="w-5 h-5 text-gray-800 dark:text-white" />
                </motion.a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex justify-between items-center bg-gray-800 rounded-lg p-4 mb-6">
                  {project.metrics.map((m, i) => {
                    const [value, label] = m.split(' | ');
                    return (
                      <div key={i} className="text-center">
                        <p className="text-xl font-semibold text-white">{value}</p>
                        <p className="text-xs text-white">{label}</p>
                      </div>
                    );
                  })}
                </div>

                {/* What We Did */}
                <div>
                  <h4 className="text-white font-semibold mb-3">What we did:</h4>
                  <ul className="space-y-3">
                    {project.whatWeDid.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mt-1 text-[var(--accent)] flex-shrink-0" />
                        <div className="ml-3">
                          <p className="text-white">{item.title}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Project */}
                <motion.a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center mt-6 text-white hover:text-[var(--accent)] font-semibold transition-colors"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
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
