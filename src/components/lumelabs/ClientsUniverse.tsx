import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  ArrowRight,
} from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "FitCheck",
    imageSrc: "/images/fitcheck.png",
    altText: "FitCheck Application Screenshot",
    description: "NYC's first centralized fashion social platform connecting style enthusiasts.",
    category: "Fashion Tech",
    siteUrl: "https://www.fitcheck.live",
    metrics: "1K+ Users | Increased Engagement",
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
    metrics: "2K+ Revenue | Increased Sales",
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
    metrics: "150% Leads",
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
    metrics: "$10K+ Revenue",
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
    metrics: "1K+ Users | Boosted Awareness",
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
    metrics: "10K+ Users",
    location: "New York, NY",
  },
  {
    id: 7,
    title: "Peonia",
    imageSrc: "/images/peonia.png",
    altText: "Peonia Logo",
    description: "Planning to revamp socials and website.",
    category: "Food & Beverage",
    siteUrl: "#",
    metrics: "New Client",
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
    metrics: "10K+ Followers",
    location: "New York, NY",
  },
  {
    id: 9,
    title: "Piccola Cucina",
    imageSrc: "/images/picolla.jpg",
    altText: "Piccola Cucina Restaurant",
    description: "Authentic Sicilian restaurant in the heart of NYC.",
    category: "Food & Beverage",
    siteUrl: "https://www.piccolacucinagroup.com/en/booking-on-line",
    metrics: "40K+ Followers",
    location: "New York, NY",
  },
];

export const caseStudies = [
  {
    clientName: 'FitCheck',
    quote: 'Shattered expectations. User base grew 300% in one quarter.',
    summary: 'Targeted campaign with user content & influencers drove massive growth in NYC fashion tech.',
    imageSrc: '/images/fitcheck.png',
    result: '300% User Growth',
    subtitle: "Building NYC's #1 Fashion Social Platform from the Ground Up",
    services: ['App Development', 'UX/UI Design', 'Brand Strategy', 'Social Media Marketing'],
    approach: [
      'Developed a cross-platform mobile app for iOS and Android.',
      'Designed an intuitive interface for discovering and sharing styles.',
      'Launched a viral marketing campaign with NYC fashion influencers.',
      'Built a community feature to foster user engagement and organic growth.'
    ],
    stats: [
      { value: '300%', label: 'User Growth in Q1' },
      { value: '1K+', label: 'Daily Active Users' },
      { value: 'Top 5', label: 'Trending Fashion App in NYC' },
    ]
  },
  {
    clientName: 'Gloss Authority',
    quote: 'Phenomenal ROI. Our packed schedule and higher revenue are direct results.',
    summary: 'Hyper-local SEO and content made them the top mobile detailer, boosting leads 150% and doubling ROI.',
    imageSrc: '/images/glossauthority.png',
    result: '2x ROI in 6 Months',
    subtitle: "Driving 150% More Leads for a Premium Automotive Service",
    services: ["Web Design", "Local SEO", "Content Marketing", "Lead Generation"],
    approach: [
      "Launched a high-performance website showcasing their premium services.",
      "Executed a hyper-local SEO strategy to dominate local search results.",
      "Created viral before/after content for social media.",
      "Implemented a streamlined booking system to convert leads."
    ],
    stats: [
      { value: "150%", label: "Increase in Leads" },
      { value: "2x", label: "Return on Investment" },
      { value: "#1", label: "Mobile Detailer in Westchester" }
    ]
  },
  {
    clientName: 'Workwear',
    quote: 'The new platform streamlined our B2B sales, making professional styling accessible and profitable.',
    summary: 'Developed a B2B platform for workplace fashion, resulting in a significant revenue boost and increased sales.',
    imageSrc: '/images/workwear.png',
    result: '$2K+ Revenue Boost',
    subtitle: "Transforming B2B Fashion with a Professional Style Hub",
    services: ["Web Development", "B2B E-commerce", "UX/UI Design", "Inventory Management"],
    approach: [
      "Created a bespoke B2B portal for corporate clients.",
      "Integrated a seamless online ordering and inventory system.",
      "Designed a professional and intuitive UI for corporate buyers.",
      "Provided tools for stylists to create and share lookbooks."
    ],
    stats: [
      { value: "$2K+", label: "Monthly Revenue" },
      { value: "40%", label: "Increase in B2B Sales" },
      { value: "2x", label: "Faster Order Processing" }
    ]
  },
  {
    clientName: 'GD Agency',
    quote: 'They delivered on their promise. Our revenue speaks for their expertise in digital marketing.',
    summary: 'A comprehensive digital marketing strategy led to over $10K in new revenue, proving their result-driven approach.',
    imageSrc: '/images/gdagency.jpeg',
    result: '$10K+ Revenue',
    subtitle: "Practicing What They Preach: A $10K Revenue Case Study",
    services: ["Digital Strategy", "PPC Campaigns", "Content Creation", "Analytics and Reporting"],
    approach: [
      "Developed a full-funnel digital marketing strategy.",
      "Launched targeted PPC campaigns on Google and social media.",
      "Produced high-converting landing pages and ad copy.",
      "Provided transparent reporting to track key performance metrics."
    ],
    stats: [
      { value: "$10K+", label: "Revenue Generated" },
      { value: "30%", label: "Reduction in Cost-Per-Lead" },
      { value: "5x", label: "ROI on Ad Spend" }
    ]
  },
  {
    clientName: 'Hanger',
    quote: 'The AI marketplace is a game-changer. We\'ve seen incredible user adoption and brand awareness.',
    summary: 'Launched an AI-powered fashion marketplace, successfully attracting over 1,000 users and significantly boosting brand awareness.',
    imageSrc: '/images/hanger.png',
    result: '1K+ New Users',
    subtitle: "Launching an AI-Powered Fashion Marketplace to 1K+ Users",
    services: ["AI Development", "Web Platform", "UX/UI Design", "Brand Awareness"],
    approach: [
      "Built a custom AI engine for personalized fashion recommendations.",
      "Developed a scalable and performant marketplace platform.",
      "Designed a human-centric interface to make AI feel accessible.",
      "Executed a launch strategy to boost awareness and drive initial user adoption."
    ],
    stats: [
      { value: "1K+", label: "Users in First Month" },
      { value: "25%", label: "Week-over-Week Growth" },
      { value: "Featured", label: "in Tech Fashion Press" }
    ]
  },
  {
    clientName: 'Culin',
    quote: 'Making nutrition science accessible was our dream. They made it a reality for over 10,000 users.',
    summary: 'Created a health-tech app that simplifies nutrition science, growing its user base to over 10,000 people.',
    imageSrc: '/images/culin.png',
    result: '10K+ User Base',
    subtitle: "Making Nutrition Science Accessible to Over 10,000 Users",
    services: ["Health-Tech App", "UX/UI Design", "Content Strategy", "API Integration"],
    approach: [
      "Developed a user-friendly mobile app to simplify complex nutrition data.",
      "Designed an engaging and educational user experience.",
      "Created a content library of science-backed articles and recipes.",
      "Integrated with health APIs to provide personalized insights."
    ],
    stats: [
      { value: "10K+", label: "Active Users" },
      { value: "4.8/5", label: "App Store Rating" },
      { value: "75%", label: "User Retention after 3 months" }
    ]
  },
  {
    clientName: 'Capio Tattoo',
    quote: 'Our online presence now matches the artistry of our tattoos, attracting clients and followers alike.',
    summary: 'Elevated their digital brand, growing their Instagram following to over 10,000 and attracting a wider client base.',
    imageSrc: '/images/capioTattoo.png',
    result: '10K+ Instagram Followers',
    subtitle: "Growing a World-Renowned Tattoo Studio’s Digital Presence",
    services: ["Branding", "Social Media Management", "Content Creation", "Community Engagement"],
    approach: [
      "Redefined the studio's brand identity to reflect their artistic excellence.",
      "Managed their Instagram presence, growing it to over 10k followers.",
      "Produced high-quality photo and video content of their work.",
      "Fostered a community of tattoo enthusiasts around the brand."
    ],
    stats: [
      { value: "10K+", label: "Instagram Followers" },
      { value: "50%", label: "Increase in Booking Inquiries" },
      { value: "2x", label: "Higher Engagement Rate" }
    ]
  },
  {
    clientName: 'Peonia',
    quote: 'We\'re just getting started, but their vision for our brand is already inspiring.',
    summary: 'Planning a simple revamp of their socials and website.',
    imageSrc: '/images/peonia.png',
    result: 'Launching Soon',
    subtitle: "Crafting a Digital Brand for Authentic Italian Pasta",
    services: ["Branding", "E-commerce Website", "Content Strategy", "Social Media Launch"],
    approach: [
      "Developing a brand identity that captures the essence of traditional Italian pasta.",
      "Building a beautiful e-commerce website to sell their products online.",
      "Creating a content strategy around recipes, stories, and Italian culture.",
      "Launching their social media channels to build a community of food lovers."
    ],
    stats: [
      { value: "Q4", label: "Launch Target" },
      { value: "10+", label: "Posts to Launch" },
      { value: "Brand", label: "Identity Finalized" }
    ]
  },
  {
    clientName: 'Piccola Cucina',
    quote: 'Authentic Sicilian flavours and products come to life in the restaurants managed by Philip Guardione.',
    summary: 'A super simple and elegant website and social media presence for a top-notch restaurant.',
    imageSrc: '/images/picolla.jpg',
    result: '40K+ Followers',
    subtitle: "A taste of Sicily in the heart of New York",
    services: ["Branding", "Web Design", "Social Media Management"],
    approach: [
      "Crafting a unique brand identity.",
      "Developing a stunning, modern website.",
      "Managing and growing their social media presence.",
      "Showcasing their authentic Sicilian cuisine through beautiful visuals."
    ],
    stats: [
      { value: "40K+", label: "Instagram Followers" },
      { value: "100+", label: "Daily Bookings" },
      { value: "Top 10", label: "Italian Restaurant in NYC" }
    ]
  },
];


const ProjectCard = ({ project, gridClass }: { project: typeof projects[0], gridClass: string }) => {
  const isFeatured = project.id === 2;

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl ${gridClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link to={`/case-studies/${project.title.toLowerCase()}`} className="absolute inset-0 z-20">
        <span className="sr-only">View case study for {project.title}</span>
      </Link>

      <motion.img
        src={project.imageSrc}
        alt={project.altText}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      
      <div className={`absolute inset-0 ${isFeatured ? 'bg-purple-900/60' : 'bg-black/50 group-hover:bg-black/60'}`} />

      {isFeatured ? (
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
            {project.title} Fuels Revenue with Incredible Lead Increase
          </h3>
          <p className="mb-6 text-purple-200">{project.metrics}</p>
          <div
            className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-purple-900 transition-colors hover:bg-gray-200"
          >
            Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex h-full flex-col justify-end p-4 md:p-6 text-white">
          <h3 className="text-lg font-bold md:text-xl">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.category}</p>
        </div>
      )}
        <a
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 z-30 p-2 rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
        >
            <ExternalLink className="w-4 h-4" />
            <span className="sr-only">Visit site</span>
        </a>
    </motion.div>
  );
};


const ClientsUniverse = () => {
  const getGridClass = (index: number) => {
    const largeScreenPattern = index % 8;
    if (largeScreenPattern === 0) return 'lg:col-span-2 lg:row-span-2';
    if (largeScreenPattern === 1) return 'lg:col-span-2';
    if (largeScreenPattern === 5) return 'lg:col-span-2';
    return '';
  };

  return (
    <section
      id="clients"
      className="bg-black py-16 md:py-20 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 mt-6">
            Our <span className="text-gray-400">Clients</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[350px] gap-4 md:gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} gridClass={getGridClass(idx)} />
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Impact <span className="text-gray-400">Stories</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:gap-8">
            {caseStudies.map((study, idx) => (
              <Link to={`/case-studies/${study.clientName.toLowerCase()}`} key={idx} className="h-full group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50 flex flex-col h-full transition-all duration-300 group-hover:border-gray-600/80 group-hover:bg-gray-900/80"
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsUniverse;
