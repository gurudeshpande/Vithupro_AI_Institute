"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const testimonials = [
    {
      name: "Ishita P.",
      role: "ML Engineer",
      content:
        "LangGraph finally made orchestration click. Our capstone runs with tracing, evaluators, and budget caps.",
      rating: 5,
      avatar: "IP",
    },
    {
      name: "Vivek S.",
      role: "AI Engineer",
      content:
        "Loved the supervisor/worker pattern. The crew-based research agent impressed my team.",
      rating: 5,
      avatar: "VS",
    },
    {
      name: "Rhea T.",
      role: "SRE → Platform AI",
      content:
        "Monitoring + guardrails section was the highlight. Clear playbooks to ship safely.",
      rating: 5,
      avatar: "RT",
    },
    {
      name: "Arjun M.",
      role: "Data Scientist",
      content:
        "The hands-on projects transformed my theoretical knowledge into practical skills. Ready for production!",
      rating: 5,
      avatar: "AM",
    },
    {
      name: "Priya K.",
      role: "AI Researcher",
      content:
        "Exceptional curriculum design. Every module built upon the previous one seamlessly.",
      rating: 5,
      avatar: "PK",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Calculate max height for consistent container
  useEffect(() => {
    const calculateHeight = () => {
      if (typeof window !== "undefined") {
        // Set a fixed minimum height that works for all content
        const baseHeight = window.innerWidth < 640 ? 320 : 360;
        setContainerHeight(baseHeight);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Fixed animations with consistent positioning
  const testimonialVariants = {
    enter: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  const starVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <span className="text-sm font-medium text-white/80">
              Success Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Learners Say
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Real feedback from engineers who shipped agent systems.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Main Testimonial Card - Fixed Height Container */}
          <div
            className="relative bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-slate-700/50 flex items-center overflow-hidden"
            style={{
              height: containerHeight ? `${containerHeight}px` : "auto",
              minHeight: "320px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full absolute inset-0 flex items-center p-6 sm:p-8 md:p-12"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 w-full">
                  {/* Avatar and Info */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4 shadow-lg"
                    >
                      <span className="text-white font-bold text-lg sm:text-xl">
                        {testimonials[currentTestimonial].avatar}
                      </span>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg sm:text-xl font-bold text-white mb-1"
                    >
                      {testimonials[currentTestimonial].name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-slate-400 text-sm mb-3"
                    >
                      {testimonials[currentTestimonial].role}
                    </motion.p>

                    {/* Stars */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex justify-center lg:justify-start gap-1"
                    >
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <motion.div
                            key={i}
                            variants={starVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
                          </motion.div>
                        )
                      )}
                    </motion.div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400/20 absolute -top-2 -left-2 lg:-left-4" />
                      </motion.div>
                      <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed italic mb-6 px-2 sm:px-0"
                      >
                        "{testimonials[currentTestimonial].content}"
                      </motion.blockquote>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400/20 absolute -bottom-2 -right-2 lg:-right-4 transform rotate-180" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white/80 hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white/80 hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-blue-500 w-6 sm:w-8"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-slate-300 text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-xs sm:text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-400 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-slate-400 text-base sm:text-lg">
            Join hundreds of successful AI engineers who transformed their
            careers with us.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
