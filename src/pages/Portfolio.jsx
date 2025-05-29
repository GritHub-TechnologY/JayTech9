import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "AgriTrack",
      category: "AgriTech",
      desc: "A simple mobile app that helps farmers monitor crop cycles, access weather forecasts, and keep records.",
      tags: ["Mobile App", "Agriculture"],
      image: "/placeholder-agritrack.jpg" // Replace with actual image path
    },
    {
      title: "Business CRM Tool",
      category: "Business",
      desc: "A custom customer relationship management tool for small businesses in West Africa.",
      tags: ["Web App", "CRM"],
      image: "/placeholder-crm.jpg"
    },
    {
      title: "Smart Irrigation Dashboard",
      category: "AgriTech",
      desc: "A solar-powered dashboard that lets farmers remotely monitor water usage and soil moisture levels.",
      tags: ["IoT", "Dashboard"],
      image: "/placeholder-irrigation.jpg"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-teal text-white py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Our Portfolio</h1>
          <p className="text-xl max-w-3xl">
            See how we've helped businesses and farmers with technology
          </p>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16 px-6 container mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'AgriTech', 'Business'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full ${activeFilter === filter ? 'bg-green text-white' : 'bg-gray-light hover:bg-gray-200'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gray-300">
                {/* Replace with actual image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="bg-teal text-white text-xs px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-light text-gray-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}