"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Lightbulb, Globe, Shield } from 'lucide-react';

/**
 * About section component showcasing company values and expertise
 */
const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering transformative solutions that drive real business outcomes and create lasting value for our clients.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-First',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex business challenges and stay ahead of the curve.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our success is measured by our clients\' success. We build long-term partnerships based on trust, transparency, and exceptional results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from code architecture to project delivery and client service.'
    }
  ];

  const expertise = [
    'Artificial Intelligence',
    'Machine Learning',
    'Cloud Computing',
    'Digital Transformation',
    'Data Analytics',
    'Enterprise Software',
    'Mobile Development',
    'Cybersecurity',
    'DevOps & Automation',
    'API Development',
    'Database Management',
    'UI/UX Design'
  ];

  const stats = [
    { icon: Users, number: '50+', label: 'Expert Team Members' },
    { icon: Globe, number: '15+', label: 'Countries Served' },
    { icon: Award, number: '100+', label: 'Successful Projects' },
    { icon: Shield, number: '99.9%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
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
            About <span className="text-primary-600">Codewisp Studio</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking technology company that specializes in transforming businesses through innovative digital solutions. 
            With years of experience and a passion for excellence, we help organizations navigate the digital landscape and achieve their strategic objectives.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-secondary-900"
          >
            Our Core Values
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                    <value.icon size={32} className="text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-secondary-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
              Our Expertise
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and industry best practices to deliver exceptional solutions across multiple domains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {expertise.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-100 transition-colors duration-200"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Our Impact
            </h3>
            <p className="text-lg text-secondary-600">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <stat.icon size={28} className="text-primary-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 