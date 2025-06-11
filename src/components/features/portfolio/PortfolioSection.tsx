"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

/**
 * Portfolio section component showcasing featured projects with filtering
 */
const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Enterprise', 'AI/ML', 'Mobile', 'Web Apps'];

  const projects = [
    {
      id: 1,
      title: 'Financial Analytics Platform',
      description: 'AI-powered financial analytics and reporting system for enterprise clients with real-time data processing and predictive insights.',
      category: 'Enterprise',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Data Management System',
      description: 'Comprehensive healthcare data management solution with HIPAA compliance, patient portal, and analytics dashboard.',
      category: 'Enterprise',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Azure', 'TypeScript'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'AI Customer Service Bot',
      description: 'Intelligent chatbot system with natural language processing for automated customer support and query resolution.',
      category: 'AI/ML',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'OpenAI', 'Flask', 'Docker', 'Redis'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Mobile Banking Application',
      description: 'Secure mobile banking app with biometric authentication, real-time transactions, and comprehensive financial management.',
      category: 'Mobile',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 5,
      title: 'E-Learning Platform',
      description: 'Comprehensive online learning management system with interactive courses, progress tracking, and certification.',
      category: 'Web Apps',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Express', 'MySQL', 'WebRTC', 'AWS S3'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain management solution with inventory tracking, vendor management, and analytics.',
      category: 'Enterprise',
      image: '/api/placeholder/600/400',
      technologies: ['Angular', 'Java', 'Spring Boot', 'Oracle', 'Kubernetes'],
      link: '#',
      github: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Featured <span className="text-primary-600">Projects</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that demonstrate our expertise in delivering innovative solutions across various industries.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white border border-secondary-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                <div className="absolute inset-0 bg-primary-600/10 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary-600/20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-secondary-500 text-sm py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      View Live
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-secondary-600 hover:text-secondary-700 font-medium text-sm transition-colors duration-200"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate on your next innovative solution. We&apos;re here to turn your vision into reality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection; 