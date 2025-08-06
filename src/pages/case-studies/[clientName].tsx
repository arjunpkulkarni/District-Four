import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects, caseStudies } from '@/components/lumelabs/ClientsUniverse';
import Navbar from '@/components/lumelabs/Navbar';
import { ArrowLeft } from 'lucide-react';

const CaseStudyPage = () => {
  const { clientName } = useParams<{ clientName: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.title.toLowerCase() === (clientName || '').toLowerCase());
  const caseStudy = caseStudies.find(cs => cs.clientName.toLowerCase() === (clientName || '').toLowerCase());



  if (!project || !caseStudy) {
    return (
      <div className="bg-black text-white min-h-screen">
              <Navbar activeSection={''} />
        <div className="container mx-auto px-4 py-16 text-center pt-24">
          <h1 className="text-4xl font-bold">Case Study Not Found</h1>
          <p className="mt-4 text-lg text-gray-300">
            Sorry, we could not find a case study for the specified client.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ArrowLeft className="mr-2 -ml-1 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
            <Navbar activeSection={''} />
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          
          <div className="relative mb-16 text-center">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </button>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Driving B2B Lead Generation with Content Marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
            <div className="md:col-span-1">
              <h2 className="text-lg font-semibold mb-4 text-white">Provided Services</h2>
              <ul className="space-y-2 text-gray-300">
                <li>Conversion-Rate Optimization</li>
                <li>UX/UI Design</li>
                <li>Content Marketing</li>
                <li>Search Engine Optimization</li>
                <li>Social Advertising</li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h2 className="text-3xl font-bold mb-4 text-white">The Challenge</h2>
              <p className="text-lg text-gray-300 mb-8">
                {project.description}
              </p>
              
              <h2 className="text-3xl font-bold mb-4 text-white">The Approach</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
                <li>Streamlined user experience across 1,200+ pages</li>
                <li>Implemented a content strategy for 3 different languages</li>
                <li>Improved search capabilities and efficiency with Elasticsearch</li>
                <li>Integrated 10 different client-login portals</li>
                <li>Built site-wide compliance with GDPR and ADA standards</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
            <div>
              <p className="text-5xl font-bold text-blue-400">10.6K</p>
              <p className="text-lg text-gray-300">Organic Keywords Ranked</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-400">+287%</p>
              <p className="text-lg text-gray-300">Website Traffic</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-400">2.3X</p>
              <p className="text-lg text-gray-300">Increase in B2B Leads</p>
            </div>
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Content Strategy</h2>
              <p className="text-lg text-gray-300">
                {caseStudy.summary}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">UI/UX Design</h2>
              <p className="text-lg text-gray-300">
                Keeping {project.title}’s new branding guidelines at the forefront, we initiated a complete overhaul of the UI/UX design. We aimed to echo their standing as a global leader with a design that was as sophisticated as it was user-friendly. A responsive design was employed to ensure seamless navigation everywhere, enhancing user experience and accessibility no matter what device was used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
