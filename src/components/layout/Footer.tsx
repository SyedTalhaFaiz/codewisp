"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Send, 
  Linkedin, 
  Twitter, 
  Github,
  Globe,
  ChevronRight
} from 'lucide-react';

/**
 * Footer component with company information, links, and newsletter signup
 */
const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate newsletter subscription
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        'AI Transformation',
        'Data & Analytics',
        'Digital Solutions', 
        'Cloud Services',
        'Mobile Applications',
        'Cybersecurity',
        'Database Solutions',
        'Consulting'
      ]
    },
    {
      title: 'Industries',
      links: [
        'Financial Services',
        'Healthcare',
        'E-commerce',
        'Manufacturing',
        'Education',
        'Government',
        'Logistics',
        'Technology'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'Case Studies',
        'News & Insights',
        'Contact Us',
        'Partnership',
        'Investor Relations'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Documentation',
        'API Reference',
        'Developer Tools',
        'Whitepapers',
        'Blog',
        'Webinars',
        'Support Center',
        'Community'
      ]
    }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-primary-400">Codewisp</span> Studio
              </h3>
              <p className="text-secondary-300 leading-relaxed mb-8">
                We are a leading technology company specializing in AI transformation, digital solutions, and enterprise software development. Partner with us to accelerate your digital transformation journey.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary-400" />
                  <span className="text-secondary-300">hello@codewisp.studio</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary-400" />
                  <span className="text-secondary-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary-400" />
                  <span className="text-secondary-300">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-primary-400" />
                  <span className="text-secondary-300">15+ Countries Served</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Github, href: '#', label: 'GitHub' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
                >
                  <h4 className="text-lg font-semibold mb-6 text-white">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center group"
                        >
                          <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-secondary-700 pt-12 mt-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
            <p className="text-secondary-300 mb-8">
              Subscribe to our newsletter for the latest insights on AI, digital transformation, and technology trends.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-md text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  Subscribe
                  <Send size={16} />
                </motion.button>
              </form>
            ) : (
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-green-400 font-medium"
              >
                ✓ Thank you for subscribing!
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-700 bg-secondary-950">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-secondary-400 text-sm text-center md:text-left">
              <p>
                © 2024 <span className="text-white font-medium">Codewisp Studio</span>. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                'Privacy Policy',
                'Terms of Service', 
                'Cookie Policy',
                'Security',
                'Accessibility'
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-secondary-400 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 