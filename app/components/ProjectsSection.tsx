"use client";

import { motion } from "framer-motion";
import {
  Code,
  Brain,
  Sparkles,
  Bot,
  Cpu,
  Shield,
  Database,
  Network,
  Zap,
  ArrowRight,
  CheckCircle,
  Layers,
} from "lucide-react";

const ProjectsSection = () => {
  const projectCategories = [
    {
      icon: Code,
      title: "Python & APIs",
      description:
        "Build Python apps, async APIs, database backends, and RESTful services using FastAPI, Flask, and more.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      projects: 12,
      tools: ["FastAPI", "Flask", "PostgreSQL", "Docker"],
    },
    {
      icon: Database,
      title: "NLP & Embeddings",
      description:
        "Hands-on with tokenization, embeddings, transformer pipelines, and vector databases.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      projects: 8,
      tools: ["FAISS", "Qdrant", "Pinecone", "Hugging Face"],
    },
    {
      icon: Sparkles,
      title: "Generative AI",
      description:
        "Train, fine-tune, and deploy LLMs; use prompt engineering, RAG, LoRA/PEFT, and build generators.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      projects: 15,
      tools: ["OpenAI", "Llama 3", "RAG", "LoRA/PEFT"],
    },
    {
      icon: Bot,
      title: "Agentic AI Systems",
      description:
        "LangChain, LangGraph, CrewAI, AutoGen, multi-agent workflow builders, and real-world deployment.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      projects: 10,
      tools: ["LangChain", "LangGraph", "CrewAI", "AutoGen"],
    },
    {
      icon: Cpu,
      title: "MLOps & LLMOps",
      description:
        "Containerization (Docker, K8s), CI/CD, MLflow, LLM serving, monitoring and scaling.",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      projects: 9,
      tools: ["Docker", "Kubernetes", "MLflow", "vLLM"],
    },
    {
      icon: Shield,
      title: "Responsible AI",
      description:
        "Bias/fairness audits, hallucination checks, AI policy projects, secure and compliant deployment.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      projects: 6,
      tools: ["Fairness", "Security", "Compliance", "Governance"],
    },
  ];

  const stats = [
    { number: "50+", label: "Hands-on Projects" },
    { number: "100%", label: "Portfolio Ready" },
    { number: "Real", label: "World Impact" },
    { number: "Industry", label: "Grade Tools" },
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
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-200 via-white to-blue-100">
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
              Project Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI Portfolio
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            50+ hands-on projects — every module includes portfolio-ready,
            real-world builds using the latest AI, LLM, RAG, agent, and MLOps
            tools. Graduate with a proven track record.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                // variants={itemVariants}
                className="text-center p-4"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Project Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {projectCategories.map((category) => (
            <motion.div
              key={category.title}
              // variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200/60 overflow-hidden h-full">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Icon and Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200"
                    >
                      <Zap className="w-3 h-3 text-amber-500" />
                      <span className="text-sm font-semibold text-slate-700">
                        {category.projects} projects
                      </span>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-grow">
                    {category.description}
                  </p>

                  {/* Tools */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, idx) => (
                        <motion.span
                          key={tool}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx }}
                          className="inline-flex items-center px-2 py-1 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 text-xs font-medium text-slate-700"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* View Projects CTA */}
                  {/* <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full mt-auto bg-gradient-to-r ${category.gradient} hover:shadow-lg text-white py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                  >
                    <span>Explore Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button> */}
                </div>

                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Floating Element */}
              <div
                className={`absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500 -z-10`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Layers className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ...and dozens more projects
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              From API gateways to document QA chatbots, each project is
              designed for real-world impact and portfolio value.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                "Real-time Chat Apps",
                "Document Processors",
                "AI Agents",
                "ML Pipelines",
                "Cloud Deployments",
                "Monitoring Systems",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
            >
              <span>View Complete Project Gallery</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
