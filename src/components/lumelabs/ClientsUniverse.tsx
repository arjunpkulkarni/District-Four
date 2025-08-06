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
    quote: 'District Four shattered our expectations. Their strategy delivered a 300% user growth in just one quarter, establishing us as a key player in the NYC fashion scene.',
    summary: 'FitCheck, an innovative fashion tech startup, aimed to become the #1 social platform for style enthusiasts in NYC. We developed a targeted campaign combining user-generated content with influential local creators, resulting in a 300% surge in their user base and solidifying their market presence.',
    imageSrc: '/images/fitcheck.png',
    result: '300% User Growth',
    subtitle: "Building NYC's #1 Fashion Social Platform from the Ground Up",
    services: ['App Development', 'UX/UI Design', 'Brand Strategy', 'Social Media Marketing'],
    approach: [
      'Engineered a scalable cross-platform mobile app to serve a rapidly growing user base.',
      'Designed a sleek, intuitive interface that made discovering and sharing new styles effortless.',
      'Launched a viral marketing campaign featuring prominent NYC fashion influencers to generate buzz.',
      'Cultivated an engaged community through interactive features and user-generated content.'
    ],
    stats: [
      { value: '300%', label: 'User Growth in Q1' },
      { value: '1K+', label: 'Daily Active Users' },
      { value: 'Top 5', label: 'Trending Fashion App in NYC' },
    ]
  },
  {
    clientName: 'Gloss Authority',
    quote: 'The results were phenomenal. Our schedule is now packed, and our revenue has soared. Lume delivered on their promise of ROI.',
    summary: 'Gloss Authority, a premium mobile detailing service, needed to cut through the noise in a crowded market. We implemented a hyper-local SEO strategy and created viral before-and-after content that boosted their leads by 150% and doubled their ROI in just six months.',
    imageSrc: '/images/glossauthority.png',
    result: '2x ROI in 6 Months',
    subtitle: "Driving 150% More Leads for a Premium Automotive Service",
    services: ["Web Design", "Local SEO", "Content Marketing", "Lead Generation"],
    approach: [
      "Launched a high-performance website designed to convert visitors into customers.",
      "Executed a hyper-local SEO strategy that secured top rankings in their service area.",
      "Produced viral before-and-after videos that captivated their target audience.",
      "Implemented a streamlined booking system that simplified the customer journey."
    ],
    stats: [
      { value: "150%", label: "Increase in Leads" },
      { value: "2x", label: "Return on Investment" },
      { value: "#1", label: "Mobile Detailer in Westchester" }
    ]
  },
  {
    clientName: 'Workwear',
    quote: 'District Four\'s B2B platform has been a revelation. It streamlined our sales process and made professional styling more accessible and profitable than ever.',
    summary: 'Workwear aimed to revolutionize the B2B fashion space with a centralized platform for professional styling. We developed a bespoke solution that boosted their revenue by over $2,000 a month and made them the go-to resource for corporate fashion.',
    imageSrc: '/images/workwear.png',
    result: '$2K+ Revenue Boost',
    subtitle: "Transforming B2B Fashion with a Professional Style Hub",
    services: ["Web Development", "B2B E-commerce", "UX/UI Design", "Inventory Management"],
    approach: [
      "Built a custom B2B portal that catered to the unique needs of corporate clients.",
      "Integrated a seamless e-commerce system for easy ordering and inventory management.",
      "Designed a professional, intuitive UI that simplified the buying process for corporate stylists.",
      "Developed tools for stylists to create and share curated lookbooks with their clients."
    ],
    stats: [
      { value: "$2K+", label: "Monthly Revenue" },
      { value: "40%", label: "Increase in B2B Sales" },
      { value: "2x", label: "Faster Order Processing" }
    ]
  },
  {
    clientName: 'GD Agency',
    quote: 'District Four delivered on their promise. Our $10K+ revenue increase is a testament to their expertise in digital marketing.',
    summary: 'GD Agency, a digital marketing firm, entrusted us with a challenge: prove our mettle. We developed a comprehensive strategy that generated over $10,000 in new revenue, showcasing our ability to deliver tangible, data-driven results.',
    imageSrc: '/images/gdagency.jpeg',
    result: '$10K+ Revenue',
    subtitle: "Practicing What They Preach: A $10K Revenue Case Study",
    services: ["Digital Strategy", "PPC Campaigns", "Content Creation", "Analytics and Reporting"],
    approach: [
      "Developed a full-funnel digital strategy that covered every stage of the customer journey.",
      "Launched targeted PPC campaigns on Google and social media to drive high-quality traffic.",
      "Crafted high-converting landing pages and ad copy that resonated with their audience.",
      "Provided transparent, data-driven reporting to track key performance metrics and ROI."
    ],
    stats: [
      { value: "$10K+", label: "Revenue Generated" },
      { value: "30%", label: "Reduction in Cost-Per-Lead" },
      { value: "5x", label: "ROI on Ad Spend" }
    ]
  },
  {
    clientName: 'Hanger',
    quote: 'District Four\'s AI marketplace is a game-changer. The incredible user adoption and brand awareness they generated have put us on the map.',
    summary: 'Hanger sought to disrupt the fashion industry with an AI-powered marketplace. We brought their vision to life, attracting over 1,000 users in the first month and creating a platform that made cutting-edge technology feel both human and accessible.',
    imageSrc: '/images/hanger.png',
    result: '1K+ New Users',
    subtitle: "Launching an AI-Powered Fashion Marketplace to 1K+ Users",
    services: ["AI Development", "Web Platform", "UX/UI Design", "Brand Awareness"],
    approach: [
      "Built a custom AI engine that delivered personalized fashion recommendations with uncanny accuracy.",
      "Developed a scalable, high-performance marketplace platform capable of handling rapid growth.",
      "Designed a human-centric UI that demystified AI and made it feel intuitive and accessible.",
      "Executed a multi-channel launch strategy that drove massive user adoption and brand awareness."
    ],
    stats: [
      { value: "1K+", label: "Users in First Month" },
      { value: "25%", label: "Week-over-Week Growth" },
      { value: "Featured", label: "in Tech Fashion Press" }
    ]
  },
  {
    clientName: 'Culin',
    quote: 'District Four made our dream a reality. Their expertise in health-tech helped us make nutrition science accessible to over 10,000 users.',
    summary: 'Culin, a visionary health-tech startup, dreamed of simplifying nutrition science for everyone. We developed a user-friendly app that translated complex data into actionable insights, growing their user base to over 10,000 and empowering people to take control of their health.',
    imageSrc: '/images/culin.png',
    result: '10K+ User Base',
    subtitle: "Making Nutrition Science Accessible to Over 10,000 Users",
    services: ["Health-Tech App", "UX/UI Design", "Content Strategy", "API Integration"],
    approach: [
      "Developed an intuitive mobile app that made complex nutrition data easy to understand.",
      "Designed an engaging, educational user experience that promoted long-term retention.",
      "Built a rich content library of science-backed articles, recipes, and health tips.",
      "Integrated with leading health APIs to provide users with personalized, data-driven insights."
    ],
    stats: [
      { value: "10K+", label: "Active Users" },
      { value: "4.8/5", label: "App Store Rating" },
      { value: "75%", label: "User Retention after 3 months" }
    ]
  },
  {
    clientName: 'Capio Tattoo',
    quote: 'District Four elevated our online presence to match the artistry of our tattoos. We\'re now attracting the clients and followers we\'ve always dreamed of.',
    summary: 'Capio Tattoo, a world-renowned studio, needed a digital brand that reflected their artistic excellence. We redefined their online identity, growing their Instagram following to over 10,000 and creating a platform that attracted a wider, more engaged client base.',
    imageSrc: '/images/capioTattoo.png',
    result: '10K+ Instagram Followers',
    subtitle: "Growing a World-Renowned Tattoo Studio’s Digital Presence",
    services: ["Branding", "Social Media Management", "Content Creation", "Community Engagement"],
    approach: [
      "Redefined their brand identity to capture the soul of their artistic vision.",
      "Grew their Instagram presence to over 10,000 followers through strategic content and engagement.",
      "Produced stunning photo and video content that showcased the quality of their work.",
      "Fostered a vibrant community of tattoo enthusiasts who have become brand evangelists."
    ],
    stats: [
      { value: "10K+", label: "Instagram Followers" },
      { value: "50%", label: "Increase in Booking Inquiries" },
      { value: "2x", label: "Higher Engagement Rate" }
    ]
  },
  {
    clientName: 'Peonia',
    quote: 'We\'re just getting started, but Lume\'s vision for our brand is already inspiring. We can\'t wait to see what we build together.',
    summary: 'Peonia, an artisanal pasta brand, is poised for a digital transformation. We\'re currently crafting a brand identity and e-commerce presence that will capture the essence of their traditional Italian heritage and bring it to a modern audience.',
    imageSrc: '/images/peonia.png',
    result: 'Launching Soon',
    subtitle: "Crafting a Digital Brand for Authentic Italian Pasta",
    services: ["Branding", "E-commerce Website", "Content Strategy", "Social Media Launch"],
    approach: [
      "Developing a brand identity that marries traditional Italian charm with modern elegance.",
      "Building a beautiful, user-friendly e-commerce website to drive online sales.",
      "Creating a content strategy that tells the story of their brand through recipes and cultural narratives.",
      "Launching their social media channels to cultivate a community of passionate food lovers."
    ],
    stats: [
      { value: "Q4", label: "Launch Target" },
      { value: "10+", label: "Posts to Launch" },
      { value: "Brand", label: "Identity Finalized" }
    ]
  },
  {
    clientName: 'Piccola Cucina',
    quote: 'They transformed our online presence. The growth in followers and bookings has been exponential.',
    summary: "In the hyper-competitive Brooklyn restaurant scene, we carved out a unique digital identity for Piccola Cucina. By creating three viral videos in the first three weeks, we ignited their social media presence, leading to a 15% increase in sales within five weeks.",
    imageSrc: '/images/picolla.jpg',
    result: '15% Sales Increase',
    subtitle: "A taste of Sicily in the heart of New York",
    services: ["Viral Marketing", "Social Media Management", "Content Creation", "Brand Storytelling"],
    approach: [
      "Developed a targeted social media strategy to stand out in a competitive market.",
      "Produced and promoted three viral videos showcasing the restaurant's authentic charm.",
      "Managed a full-scale content calendar to maintain audience engagement.",
      "Translated online buzz into real-world results with a measurable impact on sales."
    ],
    stats: [
      { value: "3", label: "Viral Videos in 3 Weeks" },
      { value: "15%", label: "Increase in Sales" },
      { value: "40K+", label: "Followers and Counting" }
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
