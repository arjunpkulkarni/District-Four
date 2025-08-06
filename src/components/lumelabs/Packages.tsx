import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Packages = () => {
    const highlightNumbers = (text: string) => {
        return text.split(/(\d+)/).map((part, index) =>
            /\d/.test(part) ? (
                <span key={index} className="font-bold text-cyan-500">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    const packageSections = [
        {
            name: 'Social Media',
            description: "Build your audience and keep them engaged with content they'll love.",
            tiers: [
                {
                    name: 'Social Kickstart',
                    price: '$399/month',
                    description: 'Kickstart your social media presence with consistent, high-quality content.',
                    features: [
                        '4 high-quality videos/month',
                        '4 social posts tailored for Instagram or TikTok',
                        'Social platform management (Instagram or TikTok)',
                        'Weekly community engagement (story posts, DMs, etc.)',
                        'Monthly social media performance reports',
                    ],
                },
                {
                    name: 'Social Growth',
                    price: '$599/month',
                    description: 'Amplify your social presence and turn followers into customers.',
                    features: [
                        '8 high-quality videos/month',
                        '8 social posts for Instagram & TikTok',
                        'Management for 2 social platforms',
                        'Daily community engagement',
                        'Bi-weekly reports',
                    ],
                },
            ],
        },
        {
            name: 'Website',
            description: 'Get a professional, reliable website that works for you.',
            tiers: [
                {
                    name: 'Web Foundation',
                    price: '$299/month',
                    description: 'A professional website and the support to keep it running smoothly.',
                    features: [
                        'New website build or full redesign',
                        'Website hosting & maintenance (bug fixes & updates)',
                        'Basic SEO (Search Engine Optimization) setup',
                        'Up to 5 hours of monthly web support for content updates',
                        'Monthly website analytic reports',
                    ],
                },
                {
                    name: 'Web Growth',
                    price: '$499/month',
                    description: 'An enhanced web presence with SEO and content support to drive traffic.',
                    features: [
                        'Professional website with ongoing maintenance & hosting',
                        'Advanced SEO (Search Engine Optimization) setup',
                        'Professionally written blog posts each month',
                        'Google Reviews management',
                        'Up to 8 hours of monthly web support for content updates',
                        'Monthly in-depth website performance & SEO report',
                    ],
                },
            ],
        },
        {
            name: 'All-In-One',
            description: 'The complete package. We handle your website and social media for maximum impact.',
            tiers: [                
                {
                    name: 'Growth',
                    price: '$799/month',
                    description: 'For brands looking to dominate online with content, SEO, and strategy.',
                    features: [
                        'Website build or redesign with hosting & maintenance',
                        'Basic SEO (Search Engine Optimization) setup',
                        '7 high-quality videos/month',
                        '7 high-quality social posts per month',
                        'Management for 2 social platforms',
                        'Google Reviews management',
                        'Bi-weekly performance reviews',
                    ],
                },
                {
                    name: 'Premium',
                    price: '$999/month',
                    description: 'For scaling brands that want it all—growth, content, SEO, and strategy.',
                    features: [
                        'Website + audits (bug fixes & updates) + Most advanced SEO',
                        'Full social management: Facebook, Instagram, TikTok, Twitter, LinkedIn, etc.',
                        'Weekly strategy + insights sessions – we become your content team',
                        '12 UGC videos/month – including influencer-style content',
                        '12 posts/month for a consistent, pro-level presence',
                        'Google Reviews management + Blog posts and writing',
                        'Up to 12 hrs/month of web support + landing page or new page build',
                    ],
                    isPopular: true,
                },
            ],
        },
    ];

    const TierCard = ({ tier }: { tier: any }) => (
        <div
            className={`relative bg-gray-900 rounded-2xl p-2 sm:p-6 shadow-sm transition-all duration-300 h-full flex flex-col w-full ${tier.isPopular
                    ? 'border-2 border-cyan-400 shadow-cyan-400/50 shadow-2xl'
                    : 'border border-gray-700 hover:shadow-xl hover:border-cyan-400/30'
                } hover:-translate-y-1`}
        >
            {tier.isPopular && (
                <div className="absolute top-0 right-4 sm:right-8 transform -translate-y-1/2 bg-cyan-400 text-gray-900 font-medium px-2 py-0.5 sm:px-3 rounded-full text-[10px] sm:text-sm z-10">
                    Most Popular
                </div>
            )}
            <div className="flex-grow">
                <div className="text-[11px] sm:text-xl font-extrabold text-white mb-2">{tier.name}</div>
                <div className="text-gray-400 mb-4 text-[11px] sm:text-base h-auto sm:h-16">{tier.description}</div>

                <div className="flex items-end mb-4">
                    <div className="text-sm sm:text-4xl font-bold text-white">{tier.price.split('/')[0]}</div>
                    <div className="text-gray-400 ml-1 mb-1 text-[10px] sm:text-sm">/month</div>
                </div>

                <ul className="space-y-1">
                    {tier.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start">
                            <Check className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-[11px] sm:text-base">{highlightNumbers(feature)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    const [activeTab, setActiveTab] = useState(packageSections[0].name);
    
    return (
        <section className="relative bg-black flex items-center justify-center py-10 sm:py-16 min-h-screen" id="packages">
            <div className="w-full px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="heading-lg text-white mb-2 text-2xl sm:text-5xl font-bold">
                        Choose your <span className="gradient-text">Plan</span>
                    </h2>
                    <p className="text-gray-300 text-[11px] sm:text-lg max-w-xl mx-auto h-auto">
                        Choose the package that aligns with your brand's goals.
                    </p>
                </div>

                <div className="flex justify-center border-b border-gray-700 my-6 sm:my-8">
                    {packageSections.map((section) => (
                        <button
                            key={section.name}
                            onClick={() => setActiveTab(section.name)}
                            className={`px-2 py-1 sm:px-6 sm:py-3 text-[11px] sm:text-lg font-medium transition-colors duration-300 focus:outline-none ${
                                activeTab === section.name
                                    ? 'border-b-2 border-cyan-400 text-cyan-400'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {section.name}
                        </button>
                    ))}
                </div>
                
                <div className="relative min-h-[500px]">
                    {packageSections.map((section) => (
                        <div
                            key={section.name}
                            className={`transition-opacity duration-500 absolute w-full ${
                                activeTab === section.name ? 'opacity-100 animate-fade-in' : 'opacity-0 pointer-events-none'
                            }`}
                        >
                            <div className="w-full">
                                <div className="text-center mb-4 sm:mb-8 h-auto sm:h-12">
                                    <p className="text-[11px] sm:text-lg text-gray-300 px-4">{section.description}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6">
                                    {section.tiers.map((tier) => (
                                        <div key={tier.name} className="flex-1 flex">
                                            <TierCard tier={tier} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
