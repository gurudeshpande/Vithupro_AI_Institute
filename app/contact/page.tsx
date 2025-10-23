"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Loader2,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Mobile Header */}
      {/* <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:hidden bg-white border-b border-slate-200 sticky top-0 z-50"
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              width={40}
              height={40}
              src={"/logo.jpg"}
              alt="LogoImage"
              className="rounded-lg"
            />
            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Vithupro Institute
              </h1>
              <p className="text-xs text-slate-600">Learn, Build, Sing</p>
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.header> */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Content */}
          <div className="bg-slate-50 py-8 lg:py-20 px-6 lg:px-12 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg mx-auto lg:mx-0 w-full"
            >
              {/* Institute Name - Hidden on mobile, shown in header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 hidden lg:flex items-center gap-4"
              >
                <Image
                  width={50}
                  height={50}
                  src={"/logo.jpg"}
                  alt="LogoImage"
                  className="rounded-lg"
                />
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">
                    Vithupro Institute
                  </h1>
                  <p className="text-slate-600 text-lg">Learn, Build, Sing</p>
                </div>
              </motion.div>

              {/* Get in Touch Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8 lg:mb-12"
              >
                <div className="border-b border-slate-300 pb-6 mb-6 lg:mb-8">
                  <h2 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-3 lg:mb-4">
                    Get in Touch
                  </h2>
                  <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight mb-3 lg:mb-4">
                    Let&apos;s Start
                    <br />a conversation
                  </h3>
                  <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
                    Have questions about our AI programs? We&apos;re here to
                    help and guide you on your learning journey.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-6 lg:space-y-8">
                  <div className="grid grid-cols-1 gap-6 lg:gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white p-4 rounded-lg shadow-sm border border-slate-200"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div className="bg-blue-50 p-2 rounded-lg">
                          <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-base lg:text-lg">
                            Visit Us
                          </h4>
                          <p className="text-slate-600 text-sm lg:text-base mt-1">
                            123 AI Street, Tech City, TC 10001
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-white p-4 rounded-lg shadow-sm border border-slate-200"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div className="bg-green-50 p-2 rounded-lg">
                          <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-base lg:text-lg">
                            Call Us
                          </h4>
                          <p className="text-slate-600 text-sm lg:text-base mt-1">
                            +1 (555) 123-4567
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-white p-4 rounded-lg shadow-sm border border-slate-200"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div className="bg-purple-50 p-2 rounded-lg">
                          <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-base lg:text-lg">
                            Email Us
                          </h4>
                          <p className="text-slate-600 text-sm lg:text-base mt-1">
                            hello@vithupro.com
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="bg-white p-4 rounded-lg shadow-sm border border-slate-200"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div className="bg-orange-50 p-2 rounded-lg">
                          <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-base lg:text-lg">
                            Office Hours
                          </h4>
                          <p className="text-slate-600 text-sm lg:text-base mt-1">
                            Mon - Fri: 9AM - 6PM
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Form with Image Background */}
          <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-screen">
            {/* Background Image with overlay */}
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: "url('/AI.jpg')",
                opacity: 0.3,
              }}
            />

            {/* Form Container */}
            <div className="relative z-10 h-full flex items-center justify-center p-4 lg:p-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl border border-slate-200 p-6 lg:p-8 w-full max-w-md mx-auto -mt-8 lg:mt-0"
                style={{
                  marginTop: "-2rem", // Pulls form up on mobile
                }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-6 lg:py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-14 h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle className="w-7 h-7 lg:w-8 lg:h-8 text-green-600" />
                      </motion.div>
                      <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-slate-600 mb-6 text-sm lg:text-base">
                        Thank you for reaching out. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium text-sm lg:text-base"
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4 lg:space-y-6"
                    >
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl lg:text-2xl font-bold text-slate-900 text-center mb-2"
                      >
                        Send us a Message
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-600 text-center text-xs lg:text-sm mb-4 lg:mb-6"
                      >
                        Fill out the form below and we&apos;ll get back to you
                        soon.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-sm lg:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your full name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.65 }}
                      >
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-sm lg:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your email"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm lg:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your phone number"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.75 }}
                      >
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 text-sm lg:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Tell us about your inquiry..."
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="pt-2"
                      >
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                          className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center gap-2 text-sm lg:text-base"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </motion.button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
