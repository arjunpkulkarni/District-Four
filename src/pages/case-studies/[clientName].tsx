import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects, caseStudies } from '@/components/lumelabs/ClientsUniverse';
import Navbar from '@/components/lumelabs/Navbar';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const CaseStudyPage = () => {
  const { clientName } = useParams<{ clientName: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.title.toLowerCase() === (clientName || '').toLowerCase());
  const caseStudy = caseStudies.find(cs => cs.clientName.toLowerCase() === (clientName || '').toLowerCase());

  if (!project || !caseStudy) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Navbar activeSection={''} onNavClick={() => {}} />
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
      <Navbar activeSection={''} onNavClick={() => {}} />
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
              {caseStudy.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-1">
              <h2 className="text-lg font-semibold mb-4 text-white">Provided Services</h2>
              <ul className="space-y-2 text-gray-300">
                {caseStudy.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>

              <h2 className="text-lg font-semibold mb-4 mt-8 text-white">Links</h2>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Website
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <blockquote className="border-l-4 border-purple-500 pl-6 mb-12">
                <p className="text-2xl italic font-medium text-white">
                  "{caseStudy.quote}"
                </p>
                <footer className="mt-4 text-gray-400">- {caseStudy.clientName}</footer>
              </blockquote>

              <h2 className="text-3xl font-bold mb-4 text-white">The Challenge</h2>
              <p className="text-lg text-gray-300 mb-8">
                {project.description}
              </p>
              
              <h2 className="text-3xl font-bold mb-4 text-white">Our Approach</h2>
              <ul className="space-y-3 text-lg text-gray-300">
                {caseStudy.approach.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20 bg-gray-900/50 p-8 rounded-xl">
            {caseStudy.stats.map((stat, index) => (
              <div key={index}>
                <p className="text-5xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">The Full Story</h2>
              <p className="text-lg text-gray-300 whitespace-pre-line">
                {caseStudy.summary}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={project.imageSrc} alt={`${project.title} main`} className="rounded-lg shadow-lg" />
                {/* You can add more images to the project/case study data */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
