"use client";

import { motion } from "framer-motion";
import { Brain, Award, Sparkles, Cpu } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
  const features = [
    {
      icon: Brain,
      title: "Our Mission",
      description:
        "To democratize AI education and empower the next generation of innovators with cutting-edge skills and practical knowledge.",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Cpu,
      title: "Our Values",
      description:
        "Excellence in innovation, ethical AI development, collaborative learning, and transformative student success.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Accreditation",
      description:
        "Recognized by leading tech giants and educational bodies for excellence in AI and machine learning education.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Sparkles,
      title: "Our Vision",
      description:
        "To create a world where AI literacy is accessible to all and our graduates lead technological revolutions.",
      gradient: "from-pink-500 to-purple-500",
    },
  ];

  const stats = [
    { number: 500, label: "AI Engineers Trained", suffix: "👨‍💻" },
    { number: 3, label: "Years of Excellence", suffix: "⭐" },
    { number: 200, label: "AI Projects", suffix: "🚀" },
    { number: 98, label: "Placement Rate", suffix: "🎯" },
  ];

  const tools = [
    "AWS",
    "Azure",
    "OpenAI",
    "Llama 3",
    "Mistral",
    "Mixtral",
    "Qwen",
    "Gemma",
    "Falcon",
    "Hugging Face Transformers",
    "Sentence-Transformers",
    "LangChain",
    "LlamaIndex",
    "LangGraph",
    "CrewAI",
    "AutoGen",
    "PEFT/LoRA",
    "FAISS",
    "Qdrant",
    "Weaviate",
    "Pinecone",
    "GGUF",
    "ONNX",
    "safetensors",
    "MLflow",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "OpenAI",
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* PNG Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/pngimg1.png')", // Replace with your PNG path
        }}
      ></div>

      {/* Optional: Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <Brain className="w-4 h-4 text-blue-300" />
            <span className="text-sm text-blue-300 font-medium">
              About Vithupro Institute
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Shaping the Future of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Education
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We&apos;re pioneering the next generation of AI education, bridging
            the gap between theoretical knowledge and real-world applications
            through hands-on projects and industry partnerships.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="flex items-start space-x-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.label === "Placement Rate" ? (
                      <>
                        <Counter value={stat.number} duration={800} />%
                      </>
                    ) : (
                      <Counter value={stat.number} duration={1000} />
                    )}
                  </div>
                  <div className="text-gray-300 text-lg font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.suffix}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools Marquee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 mt-10"
        >
          <div className="text-center mb-8 mt-5">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tools, models, and platforms you will work with
            </h3>
          </div>

          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

            {/* Marquee container */}
            <div className="flex space-x-8 py-4">
              {/* First marquee */}
              <motion.div
                className="flex space-x-8 flex-none"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {tools.map((tool, index) => (
                  <div
                    key={`${tool}-${index}`}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-white font-medium text-lg whitespace-nowrap">
                      {tool}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Second marquee for seamless loop */}
              <motion.div
                className="flex space-x-8 flex-none"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {tools.map((tool, index) => (
                  <div
                    key={`${tool}-${index}-duplicate`}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-white font-medium text-lg whitespace-nowrap">
                      {tool}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            Join the AI revolution. Start your journey with us today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
