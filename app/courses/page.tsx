"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  IndianRupee,
  Clock,
  UserCheck,
  BookOpen,
  Award,
  Star,
  Zap,
  Check,
  X,
  AlertCircle,
  Calendar,
} from "lucide-react";

// Define proper TypeScript interfaces
interface Instructor {
  name: string;
  role: string;
  experience: string;
  specialization: string;
}

interface Phase {
  title: string;
  modules: string[];
}

interface BatchInfo {
  nextBatch: string;
  seats: string;
  schedule: string;
  mode: string;
}

interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  fee: string;
  audience: string;
  gradient: string;
  accent: string;
  status: string;
  link?: string;
  fullDescription?: string;
  phases?: Phase[];
  features?: string[];
  outcomes?: string[];
  eligibility?: string[];
  instructors?: Instructor[];
  batchInfo?: BatchInfo;
}

const ProgramsSection = () => {
  const programs: Program[] = [
    {
      id: "python-ai",
      title: "Python Generative AI & Agentic AI",
      description:
        "End-to-end applied learning from Python programming to advanced Generative AI, LLMs, and production-grade Agentic AI deployment.",
      duration: "3 Months",
      fee: "₹40,000",
      audience: "Science & Engineering Students",
      gradient: "from-blue-600 to-purple-600",
      accent: "blue",
      status: "available",
      link: "/programs/bsc-ai",
      fullDescription:
        "This comprehensive program takes you from absolute beginner to AI expert. Master Python programming, dive deep into Generative AI technologies, and learn to build sophisticated Agentic AI systems that can automate complex tasks and make intelligent decisions.",
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
      features: [
        "10+ Real-world Projects",
        "1:1 Mentorship Sessions",
        "Career Guidance & Placement Support",
        "Lifetime Access to Course Materials",
        "Industry Certifications",
        "GitHub Portfolio Development",
      ],
      outcomes: [
        "Build and deploy AI applications",
        "Create intelligent AI agents",
        "Master MLOps practices",
        "Develop production-ready AI systems",
        "Prepare for AI engineering roles",
      ],
      eligibility: [
        "Basic computer knowledge",
        "No prior programming experience required",
        "Science/Engineering background preferred",
        "Strong logical thinking ability",
      ],
      instructors: [
        {
          name: "Dr. Rajesh Kumar",
          role: "Lead AI Instructor",
          experience: "8+ years in AI Research",
          specialization: "Generative AI & NLP",
        },
        {
          name: "Priya Sharma",
          role: "Senior ML Engineer",
          experience: "6+ years Industry Experience",
          specialization: "MLOps & Cloud AI",
        },
      ],
      batchInfo: {
        nextBatch: "15 January 2024",
        seats: "Limited to 30 students",
        schedule: "Weekend & Weekday batches available",
        mode: "Online Live Classes",
      },
    },
    {
      id: "data-science",
      title: "Embedded AI & Data Science",
      description:
        "Comprehensive data science program covering statistics, ML algorithms, and real-world data analysis.",
      duration: "4 Months",
      fee: "₹35,000",
      audience: "All Streams",
      gradient: "from-green-600 to-teal-600",
      accent: "emerald",
      status: "coming-soon",
    },
  ];

  const [selectedProgram, setSelectedProgram] = useState<Program>(programs[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showComingSoonAlert, setShowComingSoonAlert] = useState(false);

  const accentColors = {
    blue: {
      light: "bg-blue-50",
      medium: "bg-blue-100",
      dark: "bg-blue-500",
      text: "text-blue-700",
      border: "border-blue-200",
      gradient: "from-blue-600 to-purple-600",
    },
    emerald: {
      light: "bg-emerald-50",
      medium: "bg-emerald-100",
      dark: "bg-emerald-500",
      text: "text-emerald-700",
      border: "border-emerald-200",
      gradient: "from-emerald-600 to-teal-600",
    },
    orange: {
      light: "bg-orange-50",
      medium: "bg-orange-100",
      dark: "bg-orange-500",
      text: "text-orange-700",
      border: "border-orange-200",
      gradient: "from-orange-500 to-red-500",
    },
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-100",
      dark: "bg-purple-500",
      text: "text-purple-700",
      border: "border-purple-200",
      gradient: "from-purple-600 to-pink-600",
    },
  };

  const openModal = (program: Program) => {
    if (program.status === "coming-soon") {
      setShowComingSoonAlert(true);
      setTimeout(() => setShowComingSoonAlert(false), 3000);
      return;
    }
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(programs[0]);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">
              Our AI-Powered Degree Programmes
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI-Powered
            </span>{" "}
            Courses
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Vithupro Institute, we believe AI belongs to everyone.
            That&apos;s why our courses are open to students from any stream.
          </p>
        </div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, programIndex) => {
            const accent =
              accentColors[program.accent as keyof typeof accentColors];
            const isComingSoon = program.status === "coming-soon";

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: programIndex * 0.1 }}
                whileHover={isComingSoon ? {} : { y: -5, scale: 1.02 }}
                className={`group ${
                  isComingSoon ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                onClick={() => openModal(program)}
              >
                <div
                  className={`relative bg-white rounded-xl shadow-lg transition-all duration-300 border overflow-hidden h-full ${
                    isComingSoon
                      ? "border-slate-300 opacity-60"
                      : "border-slate-200/60 hover:shadow-xl"
                  }`}
                >
                  {/* Header Gradient Bar */}
                  <div
                    className={`h-2 bg-gradient-to-r ${program.gradient} ${
                      isComingSoon ? "opacity-50" : ""
                    }`}
                  ></div>

                  {/* Coming Soon Badge */}
                  {isComingSoon && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="inline-flex items-center px-2 py-1 rounded-full bg-slate-100 border border-slate-300">
                        <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-1"></div>
                        <span className="text-xs font-medium text-slate-700">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex flex-col h-full">
                      {/* Title */}
                      <h3
                        className={`text-lg font-bold mb-3 leading-tight ${
                          isComingSoon ? "text-slate-500" : "text-slate-900"
                        }`}
                      >
                        {program.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`mb-4 leading-relaxed text-sm line-clamp-3 ${
                          isComingSoon ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {program.description}
                      </p>

                      {/* Quick Info */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200">
                        <div
                          className={`flex items-center gap-4 text-xs ${
                            isComingSoon ? "text-slate-400" : "text-slate-500"
                          }`}
                        >
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <IndianRupee className="w-3 h-3" />
                            <span>{program.fee}</span>
                          </div>
                        </div>
                        <div
                          className={`text-sm font-medium transition-transform duration-300 ${
                            isComingSoon
                              ? "text-slate-400"
                              : "text-blue-600 group-hover:translate-x-1"
                          }`}
                        >
                          {isComingSoon ? "Coming Soon" : "View Details →"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div
                    className={`absolute top-3 right-3 w-8 h-8 ${
                      accent.light
                    } rounded-full transition-opacity duration-500 ${
                      isComingSoon
                        ? "opacity-10"
                        : "opacity-20 group-hover:opacity-30"
                    }`}
                  ></div>

                  {/* Disabled Overlay */}
                  {isComingSoon && (
                    <div className="absolute inset-0 bg-white/50 rounded-xl" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Coming Soon Alert */}
      <AnimatePresence>
        {showComingSoonAlert && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-slate-800 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">
                This course is coming soon! Stay tuned for updates.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Course Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`relative bg-gradient-to-r ${selectedProgram.gradient} p-6 text-white`}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-bold pr-8">
                  {selectedProgram.title}
                </h2>
                <p className="text-white/90 mt-2">
                  {selectedProgram.description}
                </p>
              </div>

              {/* Modal Content */}
              <div className="max-h-[70vh] overflow-y-auto p-6">
                {/* Full Description */}
                {selectedProgram.fullDescription && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      About This Program
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedProgram.fullDescription}
                    </p>
                  </div>
                )}

                {/* Curriculum Phases */}
                {selectedProgram.phases &&
                  selectedProgram.phases.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        Complete Curriculum
                      </h4>
                      <div className="space-y-4">
                        {selectedProgram.phases.map((phase, phaseIndex) => (
                          <div
                            key={phaseIndex}
                            className="border border-slate-200 rounded-lg overflow-hidden"
                          >
                            <div className="bg-slate-50 p-4 border-b border-slate-200">
                              <h5 className="font-semibold text-slate-800">
                                {phase.title}
                              </h5>
                            </div>
                            <div className="p-4">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {phase.modules.map((module, moduleIndex) => (
                                  <li
                                    key={moduleIndex}
                                    className="flex items-start gap-2 text-sm text-slate-700"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                    <span>{module}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Features and Outcomes Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Features */}
                  {selectedProgram.features &&
                    selectedProgram.features.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-orange-500" />
                          Program Features
                        </h4>
                        <div className="space-y-2">
                          {selectedProgram.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"
                            >
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-slate-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Learning Outcomes */}
                  {selectedProgram.outcomes &&
                    selectedProgram.outcomes.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-purple-500" />
                          Learning Outcomes
                        </h4>
                        <div className="space-y-2">
                          {selectedProgram.outcomes.map((outcome, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                              <span className="text-sm text-slate-700">
                                {outcome}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                {/* Batch Information and Eligibility */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Batch Information */}
                  {selectedProgram.batchInfo && (
                    <div className="bg-slate-50 rounded-xl p-4">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-green-600" />
                        Batch Information
                      </h4>
                      <div className="space-y-2 text-sm text-slate-700">
                        <div className="flex justify-between">
                          <span>Next Batch:</span>
                          <span className="font-semibold">
                            {selectedProgram.batchInfo.nextBatch}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Seats Available:</span>
                          <span className="font-semibold text-blue-600">
                            {selectedProgram.batchInfo.seats}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Schedule:</span>
                          <span className="font-semibold">
                            {selectedProgram.batchInfo.schedule}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mode:</span>
                          <span className="font-semibold text-green-600">
                            {selectedProgram.batchInfo.mode}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Eligibility */}
                  {selectedProgram.eligibility &&
                    selectedProgram.eligibility.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <UserCheck className="w-5 h-5 text-blue-600" />
                          Eligibility
                        </h4>
                        <div className="space-y-2">
                          {selectedProgram.eligibility.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-slate-700">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 mt-6 pt-6 border-t border-slate-200">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 bg-gradient-to-r ${selectedProgram.gradient} text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    Enroll Now - {selectedProgram.fee}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProgramsSection;
