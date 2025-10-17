"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Users,
  Clock,
  Database,
  Target,
  Brain,
  Sparkles,
  Zap,
  Shield,
  Rocket,
} from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const stats = [
    { icon: Users, number: "500+", label: "AI Engineers" },
    { icon: Clock, number: "3 Years", label: "Excellence" },
    { icon: Database, number: "200+", label: "AI Projects" },
    { icon: Target, number: "98%", label: "Success Rate" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background SVG Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating AI Circuit Pattern */}
        <motion.svg
          className="absolute top-10 left-10 w-24 h-24 text-blue-200/40"
          viewBox="0 0 100 100"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <path
            d="M20,20 L80,20 L80,80 L20,80 Z M30,30 L70,30 L70,70 L30,70 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
        </motion.svg>

        {/* Neural Network Nodes */}
        <motion.svg
          className="absolute top-1/4 right-20 w-32 h-32 text-purple-200/30"
          viewBox="0 0 100 100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[20, 50, 80].map((cx, i) =>
            [20, 50, 80].map((cy, j) => (
              <g key={`${i}-${j}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill="currentColor"
                  className="animate-pulse"
                  style={{ animationDelay: `${(i + j) * 0.2}s` }}
                />
                {i < 2 && (
                  <line
                    x1={cx}
                    y1={cy}
                    x2={cx + 30}
                    y2={cy}
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                )}
                {j < 2 && (
                  <line
                    x1={cx}
                    y1={cy}
                    x2={cx}
                    y2={cy + 30}
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                )}
              </g>
            ))
          )}
        </motion.svg>

        {/* Binary Code Rain */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1 }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-20px",
              }}
              animate={{
                y: ["0vh", "100vh"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute bottom-20 left-20 w-16 h-16 text-cyan-200/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,10 L90,50 L50,90 L10,50 Z M50,30 L70,50 L50,70 L30,50 Z" />
          </svg>
        </motion.div>

        {/* Data Flow Lines */}
        <motion.svg
          className="absolute bottom-32 right-32 w-40 h-40 text-blue-300/20"
          viewBox="0 0 100 100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.path
            d="M10,50 Q50,10 90,50 Q50,90 10,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -20],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>

      {/* 80% Width Container */}
      <div className="max-w-[80%] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white group">
              <Image
                src="/heroimg.jpg"
                alt="AI Institute - Future of Education"
                width={600}
                height={500}
                className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* AI Innovation Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-3 py-2 shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center space-x-2">
                  <Brain className="w-3 h-3" />
                  <span className="text-xs font-semibold">
                    AI Innovation Lab
                  </span>
                </div>
              </motion.div>

              {/* Excellence Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-gray-800 rounded-lg px-3 py-2 shadow-lg border border-gray-200"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Sparkles className="w-3 h-3 text-yellow-500" />
                    <div className="text-sm font-bold">Top Rated</div>
                  </div>
                  <div className="text-xs text-gray-600">AI Institute</div>
                </div>
              </motion.div>

              {/* Interactive Tech Elements */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-16 h-16 text-white/80" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M30,50 L45,35 L65,55 L70,50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Floating Background Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -z-10 top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl"
            ></motion.div>

            {/* Decorative Corner Elements */}
            <motion.svg
              className="absolute -top-2 -left-2 w-8 h-8 text-blue-400"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
            >
              <path
                d="M0,0 L100,0 L100,100"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
              />
            </motion.svg>
            <motion.svg
              className="absolute -bottom-2 -right-2 w-8 h-8 text-purple-400"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
            >
              <path
                d="M100,100 L0,100 L0,0"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
              />
            </motion.svg>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Institute Identity Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-lg text-sm font-medium border border-gray-200 shadow-sm"
            >
              <motion.div
                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              ></motion.div>
              <span>Premier AI Education Institute</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              Where Future{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                AI Leaders
              </span>{" "}
              Are Born
            </motion.h1>

            {/* Sub Heading and Description - Tight spacing */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Transforming ambitious learners into industry-ready AI
                professionals through cutting-edge curriculum and real-world
                projects.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Join India's leading AI Institute with comprehensive programs in
                Generative AI, Machine Learning, Data Science, and MLOps. Learn
                from industry experts and build your career in the most exciting
                field of technology.
              </p>
            </motion.div>

            {/* Stats - Compact */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 py-2"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-center p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <stat.icon className="w-5 h-5 text-blue-600 mx-auto mb-1 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Compact */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden"
              >
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <Brain className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Explore Programs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white/80 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-lg font-semibold text-base border border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:border-blue-300 hover:text-blue-600"
              >
                <Play className="w-4 h-4" />
                <span>Virtual Tour</span>
              </motion.button>
            </motion.div>

            {/* Program Highlights - Compact */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 pt-2"
            >
              {[
                "Industry Certifications",
                "1:1 Mentorship",
                "Live Projects",
                "Placement Assistance",
                "Flexible Batches",
                "Expert Faculty",
              ].map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-gray-200 text-xs text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300"
                >
                  <motion.div
                    className="w-1 h-1 bg-blue-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  ></motion.div>
                  <span className="font-medium">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 text-sm flex flex-col items-center"
        >
          <span className="text-xs">Discover More</span>
          <svg className="w-3 h-3 mt-1 text-gray-400" viewBox="0 0 100 100">
            <path
              d="M50,20 L80,60 L50,80 L20,60 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
