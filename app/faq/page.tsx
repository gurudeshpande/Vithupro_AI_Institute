"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown,
  BookOpen,
  Users,
  Briefcase,
  Target,
  Clock,
} from "lucide-react";
import { useRouter } from "next/navigation";

const FAQSection = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are sessions live or recorded?",
      answer:
        "Both. Live mentor sessions with recordings and resources available after class.",
      icon: BookOpen,
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Basic Python is recommended for GenAI/MLOps. The Python program covers fundamentals.",
      icon: Users,
    },
    {
      question: "Will I work on real projects?",
      answer:
        "Yes. Each program includes live industry projects with code, demos, and documentation.",
      icon: Briefcase,
    },
    {
      question: "Is there placement support?",
      answer:
        "We help with portfolios, mock interviews, and referrals where possible.",
      icon: Target,
    },
    {
      question: "What's the duration of each program?",
      answer:
        "Programs range from 3-4 months with flexible learning schedules and lifetime access to materials.",
      icon: Clock,
    },
    {
      question: "How are mentors selected?",
      answer:
        "All mentors are industry experts with 5+ years of experience in AI/ML roles at top tech companies.",
      icon: Users,
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
      {/* Image Background with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/faq-bg.jpg')", // Replace with your image path
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-900/95" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Additional Gradient Accents */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5" />

        {/* Floating circles - Adjusted opacity to work with image background */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-3/4 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <span className="text-sm font-medium text-white/80">
              Need Help?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              asked questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Straight answers to common questions.
          </motion.p>
        </motion.div>

        {/* FAQ Grid - 2 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/70 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 h-fit hover:bg-slate-800/80"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-700/30 transition-colors duration-200"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                    <faq.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-lg font-semibold text-white text-left">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-6 h-6 text-slate-400 ml-4"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="border-t border-slate-700/50"
                  >
                    <div className="p-6 bg-slate-800/40">
                      <p className="text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 max-w-2xl mx-auto hover:bg-slate-800/80 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-300 mb-6">
              Our team is here to help you make the right decision for your
              career.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => router.push("/contact")}
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
