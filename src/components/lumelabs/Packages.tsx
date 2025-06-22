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

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (plansRef.current) observer.observe(plansRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (plansRef.current) observer.unobserve(plansRef.current);
    };
  }, []);

  const tiers = [
    {
      name: 'Starter',
      price: '$499/month',
      description: 'Perfect for small brands getting started online',
      features: [
        '3 UGC videos/month (filmed & edited)',
        '8 social media posts/month (Instagram + TikTok)',
        '1 platform management (IG or TikTok)',
        'Monthly performance report',
        'Website audit + 1 hour dev support (minor edits)',
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outline',
    },
    {
      name: 'Growth',
      price: '$699/month',
      description: 'For growing brands ready to scale content and traffic',
      features: [
        '6 UGC videos/month',
        '12 social posts/month (IG + TikTok + optional Pinterest or Twitter)',
        '2 platform management',
        'Bi-weekly reporting + strategy call',
        'Website maintenance (up to 3 hrs/month)',
        'Basic SEO setup',
      ],
      isPopular: true,
      buttonText: 'Choose Growth',
      buttonVariant: 'primary',
    },
    {
      name: 'Premium',
      price: '$999/month',
      description: 'For serious brands looking to dominate online',
      features: [
        '10 UGC videos/month (option for influencer-style UGC)',
        '20 social posts/month',
        'Full platform management (up to 3 platforms)',
        'Weekly reporting + strategy sessions',
        'Website support (up to 6 hrs/month)',
        'Landing page design OR new page build',
        'Advanced SEO optimization',
        'Paid ads setup (Meta/TikTok – ad spend not included)',
      ],
      buttonText: 'Contact Us',
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
          className="grid md:grid-cols-3 gap-6 opacity-0 translate-y-8 transition-all duration-700 delay-300 max-w-5xl mx-auto"
        >
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 flex flex-col ${
                tier.isPopular
                  ? 'border-2 border-cyan-400 shadow-cyan-400/20 shadow-lg'
                  : 'border border-gray-200 hover:shadow-xl hover:border-cyan-400/30'
              } hover:-translate-y-1`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-cyan-400 text-gray-900 font-medium px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <div className="flex-grow">
                <div className="text-lg font-bold text-gray-900 mb-2">{tier.name}</div>
                <div className="text-gray-500 mb-4 text-sm">{tier.description}</div>

                <div className="flex items-end mb-4">
                  <div className="text-3xl font-bold text-gray-900">{tier.price.split('/')[0]}</div>
                  <div className="text-gray-500 ml-1 mb-1">/month</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={
                  tier.buttonVariant === 'primary'
                    ? 'button-primary w-full mt-auto'
                    : 'button-outline w-full mt-auto'
                }
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
