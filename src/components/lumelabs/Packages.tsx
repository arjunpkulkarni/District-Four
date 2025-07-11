import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const Packages = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const plansRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentSectionRef = sectionRef.current;
        const currentPlansRef = plansRef.current;

        if (currentSectionRef) observer.observe(currentSectionRef);
        if (currentPlansRef) observer.observe(currentPlansRef);

        return () => {
            if (currentSectionRef) observer.unobserve(currentSectionRef);
            if (currentPlansRef) observer.unobserve(currentPlansRef);
        };
    }, []);

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
                    name: 'Starter',
                    price: '$499/month',
                    description: 'Perfect for brands ready to gain some basic traction.',
                    features: [
                        'Website + audits (bug fixes & updates)',
                        '4 high-quality videos/month',
                        '4 social posts',
                        'Management for 2 social platforms',
                        'Monthly strategy calls',
                        'Up to 8 hours of monthly web support',
                    ],
                    isPopular: false,
                },
                {
                    name: 'Growth',
                    price: '$799/month',
                    description: 'For brands looking to dominate online with content, SEO, and strategy.',
                    features: [
                        'Website build or redesign with hosting & maintenance',
                        '8 high-quality videos/month',
                        '8 high-quality social posts per month',
                        'Google Reviews management',
                        'Original blog posts to drive traffic',
                        'Bi-weekly performance reviews',
                    ],
                },
                {
                    name: 'Premium',
                    price: '$999/month',
                    description: 'For scaling brands that want it all—growth, content, SEO, and strategy.',
                    features: [
                        'Website + audits (bug fixes & updates)',
                        'Most advanced SEO that drives clicks, traffic and sales',
                        'Full social management: Facebook, Instagram, TikTok, Twitter, LinkedIn, etc.',
                        'Weekly strategy + insights sessions – we become your content team',
                        '12 UGC videos/month – including influencer-style content',
                        '12 posts/month for a consistent, pro-level presence',
                        'Google Reviews management',
                        'Blog posts and writing',
                        'Up to 12 hrs/month of web support + landing page or new page build',
                        'Monthly collabs with area influencers',
                    ],
                    isPopular: true,
                },
            ],
        },
    ];

    const TierCard = ({ tier }: { tier: any }) => (
        <div
            className={`relative bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 h-full ${tier.isPopular
                    ? 'border-2 border-cyan-400 shadow-cyan-400/50 shadow-2xl'
                    : 'border border-gray-200 hover:shadow-xl hover:border-cyan-400/30'
                } hover:-translate-y-1`}
        >
            {tier.isPopular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-cyan-400 text-gray-900 font-medium px-4 py-1 rounded-full text-sm z-10">
                    Most Popular
                </div>
            )}
            <div className="text-lg font-extrabold text-gray-900 mb-2">{tier.name}</div>
            <div className="text-gray-500 mb-4 text-sm">{tier.description}</div>

            <div className="flex items-end mb-4">
                <div className="text-4xl font-bold text-gray-900">{tier.price.split('/')[0]}</div>
                <div className="text-gray-500 ml-1 mb-1">/month</div>
            </div>

            <ul className="space-y-2">
                {tier.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{highlightNumbers(feature)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

    const socialSection = packageSections[0];
    const webSection = packageSections[1];
    const allInOneSection = packageSections[2];

    return (
        <section className="relative py-16 bg-gray-50" id="packages">
            <div className="container-section">
                <div
                    ref={sectionRef}
                    className="max-w-2xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-700"
                >
                    <h2 className="heading-lg text-gray-900 mb-4 text-5xl font-bold">
                        Choose your <span className="gradient-text">Plan</span>
                    </h2>
                    <p className="text-gray-700 text-xl mb-12 max-w-xl mx-auto">
                        Choose the package that aligns with your brand's goals.
                    </p>
                </div>

                <div
                    ref={plansRef}
                    className="opacity-0 translate-y-8 transition-all duration-700 delay-300"
                >
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-8 max-w-7xl mx-auto">
                        {/* Titles */}
                        <div>
                            <h3 className="text-4xl font-bold text-gray-800 mb-3">{socialSection.name}</h3>
                            <p className="text-lg text-gray-600">{socialSection.description}</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-gray-800 mb-3">{webSection.name}</h3>
                            <p className="text-lg text-gray-600">{webSection.description}</p>
                        </div>

                        {/* Paired Tiers */}
                        {socialSection.tiers.map((socialTier, index) => (
                            <React.Fragment key={index}>
                                <TierCard tier={socialTier} />
                                <TierCard tier={webSection.tiers[index]} />
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="py-16">
                        <div className="border-t border-gray-200 max-w-7xl mx-auto"></div>
                    </div>

                    <div key={allInOneSection.name}>
                        <div className="max-w-7xl mx-auto">
                            <div className="text-left mb-8">
                                <h3 className="text-4xl font-bold text-gray-800 mb-3">{allInOneSection.name}</h3>
                                <p className="text-lg text-gray-600">{allInOneSection.description}</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {allInOneSection.tiers.map((tier) => (
                                    <TierCard key={tier.name} tier={tier} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Packages;
