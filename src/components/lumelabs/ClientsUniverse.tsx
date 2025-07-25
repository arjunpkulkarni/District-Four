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
  UtensilsCrossed,
  Quote,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
      metrics: "1K+ | Increased Engagement",
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
      metrics: "2K+ | Increased Sales",
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
      metrics: "1K+ | Boosted Awareness",
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
      title: "Peonia Pasta",
      imageSrc: "/images/peonia.png",
      altText: "Peonia Pasta Logo",
      description: "Authentic Italian pasta bringing traditional recipes to modern kitchens.",
      category: "Food & Beverage",
      siteUrl: "#",
      metrics: "New | Client",
      location: "New York, NY",
    },
    {
      id: 8,
      title: "Capio Tattoo",
      imageSrc: "/images/capioTattoo.png",
      altText: "Capio Tattoo Studio",
      description: "Custom tattoo designs from world-renowned artists in a state-of-the-art studio.",
      category: "Creative Arts",
      siteUrl: "https://www.instagram.com/capiotattoostudio/",
      metrics: "10K+ | Followers",
      location: "New York, NY",
    },
  ];

  const caseStudies = [
    {
      clientName: 'FitCheck',
      quote: 'Shattered expectations. User base grew 300% in one quarter.',
      summary: 'Targeted campaign with user content & influencers drove massive growth in NYC fashion tech.',
      imageSrc: '/images/fitcheck.png',
      result: '300% User Growth',
    },
    {
      clientName: 'Gloss Authority',
      quote: 'Phenomenal ROI. Our packed schedule and higher revenue are direct results.',
      summary: 'Hyper-local SEO and content made them the top mobile detailer, boosting leads 150% and doubling ROI.',
      imageSrc: '/images/glossauthority.png',
      result: '2x ROI in 6 Months',
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
      case 'Food & Beverage':
        return <UtensilsCrossed className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="clients"
      className="bg-black min-h-screen py-16 md:py-20 flex flex-col items-center justify-center text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our <span className="text-gray-400">Clients</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Transforming brands across industries with strategic digital marketing.
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, idx) => (
              <CarouselItem key={`${project.id}-${idx}`} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="h-full">
                  <motion.div
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg md:rounded-xl overflow-hidden transition-shadow duration-300 border border-gray-200 h-full flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-24 sm:h-32 overflow-hidden">
                      <motion.img
                        src={project.imageSrc}
                        alt={project.altText}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-black/10" />
                      <div
                        className="absolute top-2 left-2 flex items-center gap-1.5 px-1.5 py-0.5 md:px-2 md:py-1 rounded-md text-[10px] sm:text-xs font-medium bg-white/80 text-black"
                      >
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </div>
                      <motion.a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 p-1.5 sm:p-2 rounded-full bg-white/80 hover:bg-white shadow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          scale: hoveredProject === project.id ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                      </motion.a>
                    </div>

                    {/* Content */}
                    <div className="p-2 sm:p-3 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                          {project.title}
                        </h3>
                        <span className="text-[10px] sm:text-xs font-medium text-gray-500 flex-shrink-0">{project.location}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-600 mb-2 sm:mb-3 h-10 sm:h-12 flex-grow">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="bg-gray-100 rounded-md p-1.5 sm:p-2 text-center mt-auto">
                        <p className="text-xs sm:text-sm font-semibold text-gray-900">{project.metrics.split(' | ')[0]}</p>
                        <p className="text-[10px] sm:text-xs text-gray-500">{project.metrics.split(' | ')[1]}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-white hover:bg-gray-200 text-black" />
          <CarouselNext className="hidden sm:flex bg-white hover:bg-gray-200 text-black" />
        </Carousel>

        {/* Case Studies Section */}
        <div className="mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Impact <span className="text-gray-400">Stories</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
              See how we've driven real results for our clients.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50 flex flex-col"
              >
                <div className="flex-grow">
                  <Quote className="w-5 h-5 text-gray-500 mb-3" />
                  <p className="text-sm font-medium text-white italic mb-3">"{study.quote}"</p>
                  <p className="text-gray-300 text-xs mb-4">{study.summary}</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-700">
                  <div className="flex items-center">
                    <img
                      src={study.imageSrc}
                      alt={`${study.clientName} logo`}
                      className="w-5 h-5 rounded-full mr-2 object-cover"
                    />
                    <span className="font-semibold text-white text-xs">{study.clientName}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-green-400">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsUniverse;
