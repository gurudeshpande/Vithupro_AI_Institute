"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Github,
  Linkedin,
  ArrowRight,
  Calendar,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const resources = [
    { name: "Blog", href: "#blog" },
    { name: "Documentation", href: "#docs" },
    { name: "Community", href: "#community" },
    { name: "Careers", href: "#careers" },
  ];

  const support = [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

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
        ease: [0.25, 0.46, 0.45, 0.94], // Fixed: Using array instead of string
      },
    },
  };

  return (
    <footer className="relative bg-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12"
          >
            {/* Logo and Description */}
            <motion.div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-1 sm:p-2">
                  <Image
                    src="/logo.jpg"
                    alt="Elite Institute Logo"
                    width={48}
                    height={48}
                    className="h-8 w-8 sm:h-12 sm:w-12 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <span className="text-2xl font-bold text-white">
                  Vithupro Institute
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Transforming ambitious learners into industry-ready AI
                professionals through cutting-edge curriculum and real-world
                projects.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">aiinstitute@vithupro.in</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">+91 8962623662</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support & Newsletter */}
            <motion.div>
              <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
              <ul className="space-y-3 mb-6">
                {support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 text-green-400 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  Stay Updated
                </h4>
                <p className="text-slate-300 text-sm mb-3">
                  Get the latest AI insights and course updates.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-sm font-semibold transition-all duration-300"
                  >
                    Join
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-slate-700/50 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright and Design Credit */}
              <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                <div className="text-slate-400 text-sm">
                  © {currentYear} Vithupro Institute. All rights reserved.
                </div>
                <div className="hidden sm:block text-slate-500">•</div>
                <div className="text-slate-500 text-sm">
                  Design and develop by{" "}
                  <a
                    href="https://powerhousetechsolutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                  >
                    Powerhouse Tech Solutions
                  </a>
                </div>
              </div>

              {/* Mobile Design Credit */}
              <div className="sm:hidden text-slate-500 text-sm text-center">
                Design and develop by{" "}
                <a
                  href="https://powerhousetechsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                >
                  Powerhouse Tech Solutions
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
