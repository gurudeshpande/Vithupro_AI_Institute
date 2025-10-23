"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Target,
  Users,
  TrendingUp,
  Zap,
  Briefcase,
  Rocket,
  Sparkles,
  Code,
  Globe,
  Shield,
  BookOpen,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

const Counter = ({
  value,
  duration = 1000,
}: {
  value: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const totalSteps = 60;
      const stepDuration = duration / totalSteps;
      const increment = Math.ceil(end / totalSteps);

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {value > 10 && "+"}
    </span>
  );
};

const AboutSection = () => {
  const router = useRouter();

  const pillars = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Democratizing AI education through industry-aligned curriculum and hands-on learning experiences that bridge the gap between theory and practice.",
    },
    {
      icon: Brain,
      title: "Expert Faculty",
      description:
        "Learn from industry practitioners and AI researchers with real-world experience in machine learning, deep learning, and production AI systems.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Join a thriving community of AI enthusiasts, researchers, and professionals collaborating on cutting-edge projects and research.",
    },
    {
      icon: TrendingUp,
      title: "Career Focused",
      description:
        "Comprehensive career support with industry partnerships, interview preparation, and direct recruitment opportunities with top tech companies.",
    },
  ];

  const stats = [
    { number: 500, label: "AI Engineers Trained" },
    { number: 98, label: "Placement Rate", isPercentage: true },
    { number: 200, label: "Projects Completed" },
    { number: 3, label: "Years of Excellence" },
  ];

  const technologies = [
    "PyTorch",
    "TensorFlow",
    "Hugging Face",
    "LangChain",
    "OpenAI",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "FastAPI",
    "MLflow",
    "Weaviate",
    "Pinecone",
    "LlamaIndex",
  ];

  const learningPath = [
    {
      phase: "Foundation",
      title: "Core AI Fundamentals",
      description:
        "Master the basics of machine learning, deep learning, and neural networks",
      duration: "4 weeks",
      projects: "2 Projects",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      phase: "Specialization",
      title: "Advanced AI Topics",
      description: "Dive into NLP, Computer Vision, and Reinforcement Learning",
      duration: "6 weeks",
      projects: "3 Projects",
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      phase: "Production",
      title: "Real-world Deployment",
      description: "Build and deploy scalable AI systems with MLOps practices",
      duration: "4 weeks",
      projects: "3 Projects",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
    },
    {
      phase: "Career",
      title: "Industry Readiness",
      description: "Portfolio development, interview prep, and job placement",
      duration: "2 weeks",
      projects: "2 Projects",
      icon: Briefcase,
      color: "from-green-500 to-teal-500",
    },
  ];

  const uniqueFeatures = [
    {
      icon: Zap,
      title: "Project-Based Curriculum",
      description: "10+ hands-on projects mirroring real industry scenarios",
      stats: "100% Practical",
    },
    {
      icon: Users,
      title: "1:1 Mentorship",
      description:
        "Personalized guidance from industry experts throughout your journey",
      stats: "24/7 Support",
    },
    {
      icon: Globe,
      title: "Global Certification",
      description:
        "Internationally recognized certifications with industry partners",
      stats: "Global Reach",
    },
    {
      icon: Shield,
      title: "Job Guarantee",
      description:
        "Get placed within 6 months or get 100% refund on course fees",
      stats: "98% Success",
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Brain className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">
              About Vithupro AI Institute
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leading the Future of{" "}
            <span className="text-blue-600">AI Education</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Vithupro Institue we equip the next generation of AI
            professionals with industry-relevant skills, practical experience,
            and the mindset to drive innovation in an AI-first world.
          </p>
        </motion.div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 sm:p-12 mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.isPercentage ? (
                    <>
                      <Counter value={stat.number} duration={800} />%
                    </>
                  ) : (
                    <Counter value={stat.number} duration={1000} />
                  )}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Path - Graph Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">
                Structured Learning Path
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Your AI Career Journey
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From beginner to AI professional in 16 weeks with our proven
              learning methodology
            </p>
          </div>

          <div className="relative">
            {/* Timeline Connector - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {learningPath.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Mobile Connection Dots */}
                  <div className="lg:hidden flex justify-center mb-4">
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${step.color}`}
                    ></div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group h-full">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                        {step.phase}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h4>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>📅 {step.duration}</span>
                      <span>🚀 {step.projects}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Unique Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Vithupro Institute?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the difference with our student-centric approach and
              industry-proven methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="text-blue-600 font-semibold text-sm">
                  {feature.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Standard Technologies
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Master the tools and frameworks used by leading AI teams worldwide
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-sm sm:text-base text-gray-800 font-medium">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of successful AI professionals who transformed their
              careers with our comprehensive programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-6 sm:px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm sm:text-base"
                onClick={() => router.push("/courses")}
              >
                Explore Programs
              </button>
              <button
                className="px-6 sm:px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 text-sm sm:text-base"
                onClick={() => router.push("/contact")}
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
