"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  BookOpen,
  MessageSquare,
  CheckCircle,
  Users,
  Briefcase,
  Target,
} from "lucide-react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "Python Generative AI and Agentic AI",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const programs = [
    "Python Generative AI and Agentic AI",
    "Advanced ML & Deep Learning",
    "Data Science Fundamentals",
    "MLOps Engineering",
    "AI Research & Development",
  ];

  const features = [
    {
      icon: Users,
      title: "Mentor-led cohorts",
      description: "Personalized guidance from industry experts",
    },
    {
      icon: Briefcase,
      title: "Live projects and portfolio",
      description: "Build real-world AI applications",
    },
    {
      icon: Target,
      title: "Interview preparation",
      description: "Get ready for top AI roles",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Header */}
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm mb-6"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-slate-700">
                  Apply Now
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Start your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  application
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Fill the form and our team will get in touch within 24 hours.
                Seats are limited in each cohort to preserve mentor attention.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex flex-col lg:flex-row items-center lg:items-start gap-4 p-4 rounded-2xl bg-white/50 border border-slate-200/50 hover:border-blue-200/50 transition-all duration-300 text-center lg:text-left"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="bg-blue-50/50 rounded-2xl p-6 border border-blue-200/50 text-center lg:text-left"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 lg:mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    What happens next?
                  </h4>
                  <ul className="text-slate-600 space-y-1 text-sm">
                    <li>
                      • We&apos;ll review your application within 24 hours
                    </li>
                    <li>• Schedule a personalized counseling session</li>
                    <li>• Discuss your career goals and program fit</li>
                    <li>• Secure your seat in the upcoming cohort</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden"
          >
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <h2 className="text-2xl font-bold text-white text-center">
                Application Form
              </h2>
              <p className="text-blue-100 text-center text-sm mt-2">
                Complete your details to begin the journey
              </p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Full Name */}
              <div>
                <label className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <User className="w-4 h-4 text-blue-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none text-center lg:text-left"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <Mail className="w-4 h-4 text-blue-600" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none text-center lg:text-left"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <Phone className="w-4 h-4 text-blue-600" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="8962623662"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none text-center lg:text-left"
                  required
                />
              </div>

              {/* Program Selection */}
              <div>
                <label className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  Program
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none appearance-none bg-white text-center lg:text-left"
                >
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none resize-none text-center lg:text-left"
                />
              </div>

              {/* Divider */}
              <div className="border-t border-slate-200 my-6"></div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Application
              </motion.button>

              {/* Privacy Note */}
              <p className="text-center text-slate-500 text-sm mt-4">
                By submitting, you agree to be contacted by the Vithupro team.
              </p>
            </form>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-200 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
