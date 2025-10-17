"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  Award,
  IndianRupee,
  CheckCircle,
  BookOpen,
  Brain,
  Rocket,
  Cpu,
  Zap,
  Star,
  Clock,
  UserCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const ProgramsSection = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const programs = [
    {
      title: "Python Generative AI & Agentic AI",
      badge: "Flagship",
      description:
        "End-to-end applied learning from Python programming to advanced Generative AI, LLMs, and production-grade Agentic AI deployment.",
      duration: "3 Months",
      fee: "₹40,000",
      audience: "Students, Professionals, Researchers",
      certificates: [
        "Certified Applied Agentic AI Engineer",
        "AI Engineer",
        "AI/ML Engineer",
      ],
      features: [
        "Live Project Mentorship",
        "Industry Certifications",
        "1:1 Career Guidance",
        "Portfolio Building",
      ],
      gradient: "from-purple-600 via-blue-600 to-indigo-600",
      accent: "purple",
      featured: true,
      rating: "4.9",
      students: "250+",
      phases: [
        {
          title: "Phase 1: Python Foundations (Zero to Pro)",
          modules: [
            "Module 1: Introduction to Programming with Python",
            "Module 2: Python Data Types, Functions and Control Structures",
            "Module 3: Object-Oriented Programming and Modular Design",
            "Module 4: Working with Files, JSON and CSV",
            "Module 5: Python for APIs, Webhooks and Data Exchange",
            "Module 6: Async Programming and Concurrency in Python",
            "Module 7: Building and Testing APIs with FastAPI and Flask",
            "Module 8: Working with Databases",
            "Module 9: Logging, Debugging and Exception Handling",
            "Module 10: Packaging, Virtual Environments and Docker Basics",
            "Module 11: Git, GitHub and Project Workflow for AI Development",
            "Module 12: REST API and Async Data Service",
          ],
        },
        {
          title:
            "Phase 2: NLP and Generative AI (Foundation to Applied Systems)",
          modules: [
            "Module 13: Introduction to Natural Language Processing",
            "Module 14: Text Preprocessing, Cleaning and Tokenization",
            "Module 15: Word Embeddings and Semantic Understanding",
            "Module 16: Vector Databases and Search Systems",
            "Module 17: Transformer Architecture and LLM Fundamentals",
            "Module 18: Attention Mechanism and Decoder Models",
            "Module 19: Fine-Tuning and Adaptation (LoRA, PEFT, SFT)",
            "Module 20: Quantization and Optimization Techniques",
            "Module 21: Prompt Engineering and Structured Prompt Design",
            "Module 22: Retrieval-Augmented Generation (RAG) Architecture",
            "Module 23: Cloud SDKs and AI Service Integration",
            "Module 24: Generative AI for Text, Code and Image Applications",
            "Module 25: Evaluation, Metrics and Hallucination Testing",
            "Module 26: Build Your Own Document Q&A RAG Chatbot",
          ],
        },
        {
          title: "Phase 3: Agentic AI Systems",
          modules: [
            "Module 27: Introduction to AI Agents and Autonomy Concepts",
            "Module 28: Coding Fundamentals for Agent Systems",
            "Module 29: LangChain Fundamentals — Chains, Tools and Memory",
            "Module 30: Building AI Agents from Scratch",
            "Module 31: LangGraph and Workflow-Oriented Agent Design",
            "Module 32: CrewAI for Multi-Agent Team Collaboration",
            "Module 33: AutoGen for Cooperative Agents",
            "Module 34: Building AI Agents for Real-World Use Cases",
            "Module 35: Agentic RAG Systems with LangGraph and AutoGen",
            "Module 36: Domain-Specific Agents",
            "Module 37: Offline and Edge Agent Deployment",
            "Module 38: Advanced Multi-Agent Architectures",
            "Module 39: Responsible, Safe and Governed Agent Design",
            "Module 40: Project — Multi-Agent AI Workflow System",
          ],
        },
        {
          title: "Phase 4: MLOps and LLMOps (Deployment to Production)",
          modules: [
            "Module 41: MLOps Fundamentals and Version Control",
            "Module 42: MLflow for Experiment Tracking and Model Registry",
            "Module 43: CI/CD for AI Projects",
            "Module 44: Containerization and Orchestration (Docker, Kubernetes)",
            "Module 45: LLMOps — Serving, Monitoring and Scaling Models",
            "Module 46: Offline LLM Hosting and Quantized Deployments (vLLM)",
            "Module 47: Monitoring and Observability",
            "Module 48: Security and Compliance for AI Systems",
            "Module 49: Responsible AI and Ethical Governance",
            "Module 50: AI Cost Optimization and Resource Planning",
            "Module 51: Deploy Enterprise-Grade Agentic AI Platform",
            "Module 52: System Design and AI Product Architecture",
            "Module 53: AI Governance and Audit System",
          ],
        },
      ],
    },
    {
      title: "Advanced ML & Deep Learning",
      badge: "Professional",
      description:
        "Master machine learning and deep learning concepts with hands-on projects in computer vision, NLP, and predictive analytics.",
      duration: "4 Months",
      fee: "₹35,000",
      audience: "Developers, Data Scientists, Engineers",
      certificates: [
        "Certified ML Engineer",
        "Deep Learning Specialist",
        "AI Developer",
      ],
      features: [
        "Real-world Projects",
        "Research Opportunities",
        "Job Placement Support",
        "Lifetime Access",
      ],
      gradient: "from-emerald-600 via-teal-600 to-green-600",
      accent: "emerald",
      featured: false,
      rating: "4.8",
      students: "180+",
      phases: [
        {
          title: "Phase 1: Machine Learning Fundamentals",
          modules: [
            "Module 1: Introduction to Machine Learning",
            "Module 2: Supervised Learning Algorithms",
            "Module 3: Unsupervised Learning and Clustering",
            "Module 4: Model Evaluation and Validation",
            "Module 5: Feature Engineering and Selection",
          ],
        },
        {
          title: "Phase 2: Deep Learning Core Concepts",
          modules: [
            "Module 6: Neural Networks Fundamentals",
            "Module 7: Convolutional Neural Networks",
            "Module 8: Recurrent Neural Networks",
            "Module 9: Transformers and Attention Mechanisms",
            "Module 10: Advanced Architectures",
          ],
        },
        {
          title: "Phase 3: Advanced Applications",
          modules: [
            "Module 11: Computer Vision Applications",
            "Module 12: Natural Language Processing",
            "Module 13: Time Series Analysis",
            "Module 14: Reinforcement Learning",
            "Module 15: Generative Models",
          ],
        },
        {
          title: "Phase 4: Production Deployment",
          modules: [
            "Module 16: MLOps Pipeline",
            "Module 17: Model Serving and Monitoring",
            "Module 18: Cloud Deployment",
            "Module 19: Performance Optimization",
            "Module 20: Capstone Project",
          ],
        },
      ],
    },
  ];

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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const accordionVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const accentColors = {
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-100",
      dark: "bg-purple-500",
      text: "text-purple-700",
      border: "border-purple-200",
      gradient: "from-purple-500 to-blue-500",
    },
    emerald: {
      light: "bg-emerald-50",
      medium: "bg-emerald-100",
      dark: "bg-emerald-500",
      text: "text-emerald-700",
      border: "border-emerald-200",
      gradient: "from-emerald-500 to-teal-500",
    },
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-white to-blue-100/30">
      <div className="max-w-7xl mx-auto">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">
              Our Programs
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Transform Your Career with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI Excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Mentor-led, project-driven, and outcome-focused. Graduate with a
            verified portfolio and job-ready skills.
          </motion.p>
        </motion.div>

        {/* Program Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {programs.map((program, programIndex) => {
            const accent =
              accentColors[program.accent as keyof typeof accentColors];

            return (
              <motion.div
                key={program.title}
                // variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/60 overflow-hidden">
                  {/* Header Gradient Bar */}
                  <div
                    className={`h-2 bg-gradient-to-r ${program.gradient}`}
                  ></div>

                  {/* Card Content */}
                  <div className="p-8">
                    {/* Badge and Rating */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-3">
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          className={`inline-flex items-center px-4 py-2 rounded-2xl ${accent.light} ${accent.text} border ${accent.border} text-sm font-semibold backdrop-blur-sm`}
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          {program.badge}
                        </motion.span>

                        {/* Rating */}
                        <div className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                          <span className="text-sm font-semibold text-slate-700">
                            {program.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 border border-slate-200/50">
                        <div
                          className={`w-10 h-10 rounded-lg ${accent.light} flex items-center justify-center`}
                        >
                          <Clock className={`w-5 h-5 ${accent.text}`} />
                        </div>
                        <div>
                          <div className="text-sm text-slate-500">Duration</div>
                          <div className="font-semibold text-slate-900">
                            {program.duration}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 border border-slate-200/50">
                        <div
                          className={`w-10 h-10 rounded-lg ${accent.light} flex items-center justify-center`}
                        >
                          <UserCheck className={`w-5 h-5 ${accent.text}`} />
                        </div>
                        <div>
                          <div className="text-sm text-slate-500">Students</div>
                          <div className="font-semibold text-slate-900">
                            {program.students}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program Details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between py-3 border-b border-slate-200/60">
                        <div className="flex items-center text-slate-600">
                          <IndianRupee className="w-5 h-5 text-emerald-600 mr-3" />
                          <span className="font-medium">Program Fee</span>
                        </div>
                        <span className="text-lg font-bold text-slate-900">
                          {program.fee}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-slate-200/60">
                        <div className="flex items-center text-slate-600">
                          <Users className="w-5 h-5 text-blue-600 mr-3" />
                          <span className="font-medium">Suitable For</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-900 text-right">
                          {program.audience}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${accent.dark}`}
                            ></div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Curriculum Accordion */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">
                        Curriculum Overview
                      </h4>
                      <div className="space-y-3">
                        {program.phases.map((phase, phaseIndex) => (
                          <div
                            key={phase.title}
                            className="border border-slate-200 rounded-xl overflow-hidden"
                          >
                            <button
                              onClick={() =>
                                toggleAccordion(programIndex * 10 + phaseIndex)
                              }
                              className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors duration-200"
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-8 h-8 rounded-lg ${accent.light} flex items-center justify-center`}
                                >
                                  <BookOpen
                                    className={`w-4 h-4 ${accent.text}`}
                                  />
                                </div>
                                <span className="font-semibold text-slate-800 text-sm">
                                  {phase.title}
                                </span>
                              </div>
                              <motion.div
                                animate={{
                                  rotate:
                                    openAccordion ===
                                    programIndex * 10 + phaseIndex
                                      ? 180
                                      : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-4 h-4 text-slate-500" />
                              </motion.div>
                            </button>

                            <AnimatePresence>
                              {openAccordion ===
                                programIndex * 10 + phaseIndex && (
                                <motion.div
                                  //   variants={accordionVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="hidden"
                                  className="border-t border-slate-200"
                                >
                                  <div className="p-4 bg-slate-50/50">
                                    <div className="space-y-2 max-h-60 overflow-y-auto">
                                      {phase.modules.map(
                                        (module, moduleIndex) => (
                                          <div
                                            key={module}
                                            className="flex items-start gap-3 py-2 px-3 rounded-lg bg-white border border-slate-200/60"
                                          >
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-slate-700 leading-relaxed">
                                              {module}
                                            </span>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certificates */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                        Earn Certificates
                      </h4>
                      <div className="space-y-2">
                        {program.certificates.map((certificate, idx) => (
                          <motion.div
                            key={certificate}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-center gap-3 text-slate-700"
                          >
                            <Award className={`w-4 h-4 ${accent.text}`} />
                            <span className="text-sm">{certificate}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-gradient-to-r ${program.gradient} hover:shadow-xl text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 group/btn`}
                    >
                      <span>Enroll Now</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Rocket className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Corner Accent */}
                  <div
                    className={`absolute top-4 right-4 w-20 h-20 ${accent.light} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Floating Elements */}
                <div
                  className={`absolute -top-2 -right-2 w-24 h-24 ${accent.medium} rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                ></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <span>
              More programs coming soon in Data Science, MLOps, and Advanced AI
              Research
            </span>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
