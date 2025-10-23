"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const router = useRouter();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="border border-slate-200 rounded-lg p-2 bg-white order-2 lg:order-1"
          >
            <div className="bg-slate-100 rounded-md aspect-[4/5] relative overflow-hidden">
              <Image
                fill
                src="/AI.jpg"
                alt="About Us"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 text-center lg:text-left order-1 lg:order-2"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
                Building AI Talent for Tomorrow&apos;s Challenges
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-slate-700"
            >
              <p className="text-lg leading-relaxed border-l-0 lg:border-l-4 border-slate-300 pl-0 lg:pl-4">
                We transform aspiring professionals into capable AI
                practitioners through focused, practical education that bridges
                the gap between theory and real-world application.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-slate-700 text-base sm:text-lg"
            >
              <p>
                In a field that&apos;s constantly evolving, we stay ahead by
                continuously updating our curriculum and teaching methods. Our
                students don&apos;t just learn concepts—they apply them to solve
                actual problems.
              </p>

              <p>
                Our commitment is to your success. We provide the tools,
                knowledge, and support system needed to thrive in AI careers,
                from foundational programming to advanced machine learning
                systems.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            >
              <button
                className="bg-slate-900 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors w-full sm:w-auto"
                onClick={() => router.push("/courses")}
              >
                View Courses
              </button>
              <button
                className="border border-slate-300 text-slate-700 px-6 sm:px-8 py-3 rounded-lg font-medium hover:border-slate-400 transition-colors w-full sm:w-auto"
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
