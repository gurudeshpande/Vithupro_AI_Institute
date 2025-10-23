"use client";

import { motion } from "framer-motion";
import {
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
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-blue-500/5 rounded-full blur-2xl md:blur-3xl"
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
          className="absolute bottom-1/4 right-1/3 w-24 h-24 md:w-32 md:h-32 bg-purple-500/5 rounded-full blur-2xl md:blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-8 md:mb-12"
          >
            {/* Logo and Description - Full width on mobile */}
            <motion.div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-1">
                    <Image
                      src="/logo.jpg"
                      alt="Vithupro Institute Logo"
                      width={48}
                      height={48}
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-white">
                    Vithupro Institute
                  </span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                Transforming ambitious learners into industry-ready AI
                professionals through cutting-edge curriculum and real-world
                projects.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">aiinstitute@vithupro.in</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">+91 8962623662</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-4 md:mb-6">
                Quick Links
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-4 md:mb-6">
                Resources
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 text-purple-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support & Newsletter */}
            <motion.div className="text-center md:text-left md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 md:mb-6">
                Support
              </h3>
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 text-green-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <h4 className="text-white font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
                  <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  Stay Updated
                </h4>
                <p className="text-slate-300 text-sm mb-3 text-center md:text-left">
                  Get the latest AI insights and course updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap"
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
            className="border-t border-slate-700/50 pt-6 md:pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
              {/* Copyright and Design Credit */}
              <div className="flex flex-col items-center md:flex-row gap-2 text-center md:text-left order-2 md:order-1">
                <div className="text-slate-400 text-sm">
                  © {currentYear} Vithupro Institute. All rights reserved.
                </div>
                <div className="hidden md:block text-slate-500">•</div>
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

              {/* Social Links */}
              <div className="flex items-center gap-4 order-1 md:order-2 mb-4 md:mb-0">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 md:w-10 md:h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg md:rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Design Credit - Only shows on mobile */}
            <div className="md:hidden text-center mt-4 pt-4 border-t border-slate-700/30">
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
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
