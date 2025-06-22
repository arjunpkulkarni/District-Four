import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

        if (sectionRef.current) observer.observe(sectionRef.current);
        if (plansRef.current) observer.observe(plansRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            if (plansRef.current) observer.unobserve(plansRef.current);
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

    const tiers = [        
        {
            name: 'Social Kickstart',
            price: '$349/month',
            description: 'Kickstart your social media presence with consistent, high-quality content.',
            features: [
                '4 high-quality videos/month (filmed & edited by us)',
                '8 social posts tailored for Instagram or TikTok',
                'Social platform management (Instagram or TikTok)',
                'Basic community engagement',
                'Monthly social media performance reports',
            ],
            story: "Great content is your magnet for customers. We'll create it, and you'll see the buzz.",
            buttonText: 'Get Social',
            buttonVariant: 'outline',
        },
        {
            name: 'Web Foundation',
            price: '$399/month',
            description: 'A professional website and the support to keep it running smoothly.',
            features: [
                'New website build or full redesign',
                'Website hosting & maintenance (bug fixes & updates)',
                'Basic SEO (Search Engine Optimization) setup',
                'Up to 5 hours of monthly web support for content updates',
                'Monthly website analytic reports',
                'Google Reviews management integration',
            ],
            story: "Your website is your digital storefront. We'll build it and keep it pristine.",
            buttonText: 'Build My Site',
            buttonVariant: 'outline',
        },
        {
            name: 'Social Growth',
            price: '$599/month',
            description: 'Amplify your social presence and turn followers into customers.',
            features: [
                '8 high-quality videos/month (filmed & edited by us)',
                '16 social posts for Instagram & TikTok',
                'Management for 2 social platforms',
                'Proactive community management & engagement',
                'Bi-weekly insights & strategy calls',
                'Monthly growth and performance reports',
            ],
            story: "Go from just posting to building a real community around your brand.",
            buttonText: 'Amplify My Socials',
            buttonVariant: 'outline',
        },
        {
            name: 'Starter',
            price: '$499/month',
            description: 'Built for small businesses making their first real online push.',
            features: [
                'Website + audits (bug fixes & updates)',
                '4 high-quality videos/month (filmed & edited by us)',
                '4 social posts tailored for Instagram or TikTok',
                'Social Platform management (Instagram or TikTok)',
                'Monthly performance check-ins to guide your growth',
                'Monthly social media and website analytic reports',
            ],
            story: 'Your first step toward a brand people recognize. We handle the content, so you can handle the business.',
            buttonText: 'Start Growing',
            buttonVariant: 'outline',
        },
        {
            name: 'Growth',
            price: '$749/month',
            description: 'For brands getting traction and ready to grow faster.',
            features: [
                'Website + audits (bug fixes & updates)',
                '6 high-quality videos/month (filmed & edited by us)',
                '8 social posts tailored for Instagram & TikTok',
                'We manage 2 platforms so you stay consistent everywhere',
                'Bi-weekly insights & strategy calls (we review, plan, adapt)',
                'Up to 3 hours of monthly web support (updates, fixes)',
                'Google Reviews management',
                'Basic SEO (Search Engine Optimization) setup - this helps your website be found.',
            ],
            story: "You're building momentum. This package makes sure content never slows you down.",
            buttonText: 'Build Momentum',
            buttonVariant: 'default',
        },
        {
            name: 'Premium',
            price: '$999/month',
            description: 'The all-in-one growth engine for scaling brands.',
            features: [
                'Website + audits (bug fixes & updates)',
                "Use our AI Leads agent that generates leads 24/7, it will get you customers 24/7",
                'Most advanced SEO that drives clicks, traffic and sales',
                'Full social management: Facebook, Instagram, TikTok, Twitter, LinkedIn, etc.',
                'Weekly strategy + insights sessions – we become your content team',
                '12 UGC videos/month – including influencer-style content',
                '12 posts/month for a consistent, pro-level presence',
                'Google Reviews management',
                'Blog posts and writing',
                'Up to 12 hrs/month of web support + landing page or new page build',
            ],
            isPopular: true,
            story: 'You want scale, not stress. This is your outsourced content department – without the hiring costs.',
            buttonText: "Let's Scale",
            buttonVariant: 'outline',
        },
    ];


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
                    className="grid md:grid-cols-3 gap-6 opacity-0 translate-y-8 transition-all duration-700 delay-300 max-w-7xl mx-auto"
                >
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 flex flex-col ${tier.isPopular
                                    ? 'border-2 border-cyan-400 shadow-cyan-400/50 shadow-2xl'
                                    : 'border border-gray-200 hover:shadow-xl hover:border-cyan-400/30'
                                } hover:-translate-y-1`}
                        >
                            {tier.isPopular && (
                                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-cyan-400 text-gray-900 font-medium px-4 py-1 rounded-full text-sm z-10">
                                    Most Popular
                                </div>
                            )}
                            <div className="flex-grow flex flex-col">
                                <div className="flex-grow">
                                    <div className="text-lg font-extrabold text-gray-900 mb-2">{tier.name}</div>
                                    <div className="text-gray-500 mb-4 text-sm">{tier.description}</div>

                                    <div className="flex items-end mb-4">
                                        <div className="text-5xl font-bold text-gray-900">{tier.price.split('/')[0]}</div>
                                        <div className="text-gray-500 ml-1 mb-1">/month</div>
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 text-sm">{highlightNumbers(feature)}</span>
                                            </li>
                                        ))}
                                    </ul>
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
