"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Database, 
  Globe, 
  Cloud, 
  Smartphone, 
  Shield, 
  BarChart3, 
  Users 
} from 'lucide-react';
import Image from 'next/image';

/**
 * Services section component showcasing company capabilities
 */
const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Transformation',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2000&auto=format&fit=crop',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Transform raw data into actionable insights with our comprehensive data analytics and business intelligence solutions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
      features: ['Big Data Processing', 'Real-time Analytics', 'Data Visualization', 'Business Intelligence'],
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Globe,
      title: 'Digital Solutions',
      description: 'End-to-end digital transformation services that modernize your business processes and enhance customer experiences.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
      features: ['Web Development', 'Digital Strategy', 'UX/UI Design', 'E-commerce'],
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services to ensure your business operates efficiently and securely.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop',
      features: ['Cloud Migration', 'DevOps', 'Infrastructure Management', 'Serverless Solutions'],
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      gradient: 'from-orange-600 to-red-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Detection'],
      gradient: 'from-red-600 to-pink-600'
    },
    {
      icon: BarChart3,
      title: 'Database Solutions',
      description: 'Robust database design, optimization, and management services for high-performance data operations.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery'],
      gradient: 'from-teal-600 to-blue-600'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and achieve your business objectives.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Change Management'],
      gradient: 'from-violet-600 to-purple-600'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black,transparent)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-6">
            <span className="text-blue-700 text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Comprehensive Technology
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge technology services that drive growth, efficiency, and innovation 
            for businesses of all sizes across various industries.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              {/* Magic Card */}
              <div className="relative h-full bg-white rounded-2xl border border-gray-200/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80`} />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <motion.div
                        initial={{ x: -2 }}
                        animate={{ x: 2 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                      >
                        <svg className="w-4 h-4 text-white"  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 opacity-0 group-hover:opacity-100 group-hover:top-0 group-hover:left-0 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px]" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss how our comprehensive technology solutions can drive your business forward.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 