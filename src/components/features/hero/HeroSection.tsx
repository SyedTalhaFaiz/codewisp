"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Award, Globe, HeadphonesIcon } from 'lucide-react';
import Image from 'next/image';

/**
 * Hero section component with animated elements and call-to-action
 */
const HeroSection: React.FC = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Years of Excellence' },
    { icon: Users, value: '500+', label: 'Projects Delivered' },
    { icon: Globe, value: '50+', label: 'Happy Clients' },
    { icon: HeadphonesIcon, value: '24/7', label: 'Support' },
  ];

  // Fixed positions for floating elements to prevent hydration issues
  const floatingElements = [
    { left: 10, top: 20 },
    { left: 85, top: 15 },
    { left: 75, top: 60 },
    { left: 20, top: 80 },
    { left: 95, top: 45 },
    { left: 15, top: 55 },
    { left: 60, top: 25 },
    { left: 30, top: 75 },
    { left: 80, top: 35 },
    { left: 5, top: 65 },
    { left: 70, top: 85 },
    { left: 45, top: 10 },
    { left: 25, top: 40 },
    { left: 90, top: 70 },
    { left: 35, top: 30 },
    { left: 65, top: 50 },
    { left: 50, top: 90 },
    { left: 40, top: 20 },
    { left: 55, top: 75 },
    { left: 12, top: 45 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Background Images with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Technology Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-indigo-900/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm mx-4"
          >
            <span className="text-blue-300 text-xs sm:text-sm font-medium whitespace-nowrap">
              🚀 Leading Digital Innovation
            </span>
          </motion.div>

          {/* Main Heading with Gradient Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              We reimagine
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:400%_400%]">
              tomorrow
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Empowering Digital Transformation Through Innovative Technology Solutions
            <br />
            <span className="text-blue-300">Built for the future, delivered today.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            {/* Shimmer Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:shadow-glow-lg"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient bg-[length:400%_400%]" />
              <span className="relative flex items-center gap-2 text-lg">
                Get Started Today
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>

            {/* Glass Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-lg hover:bg-white/20 transition-all duration-300 hover:shadow-glow"
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 