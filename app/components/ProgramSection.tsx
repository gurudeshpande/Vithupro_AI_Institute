"use client";

import { motion } from "framer-motion";
import {
  IndianRupee,
  Clock,
  UserCheck,
  ArrowRight,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const ProgramsSection = () => {
  const router = useRouter();
  const programs = [
    {
      title: "Python Generative AI & Agentic AI",
      description:
        "End-to-end applied learning from Python programming to advanced Generative AI, LLMs, and production-grade Agentic AI deployment.",
      points: [
        "Python Foundations (Zero to Pro)",
        "NLP and Generative AI (Foundation to Applied Systems)",
        "Agentic AI Systems",
        "MLOps and LLMOps (Development to Production)",
      ],
      duration: "3 Months",
      fee: "₹40,000",
      audience: "Science & Engineering Students",
      gradient: "from-blue-600 to-purple-600",
      accent: "blue",
      link: "/programs/bsc-ai",
    },
  ];

  const upcomingProgram = {
    title: "Embeded AI",
    description:
      "Cutting-edge research program in AI and Machine Learning for graduates",
    points: [
      "Advanced Machine Learning",
      "Deep Learning Research",
      "AI Ethics & Governance",
      "Research Methodology",
    ],
    startDate: "January 2026",
    status: "Coming Soon",
    duration: "4 Months",
    fee: "₹45,000/year",
    gradient: "from-orange-500 to-red-500",
    accent: "orange",
  };

  const accentColors = {
    blue: {
      light: "bg-blue-50",
      medium: "bg-blue-100",
      dark: "bg-blue-500",
      text: "text-blue-700",
      border: "border-blue-200",
    },
    emerald: {
      light: "bg-emerald-50",
      medium: "bg-emerald-100",
      dark: "bg-emerald-500",
      text: "text-emerald-700",
      border: "border-emerald-200",
    },
    orange: {
      light: "bg-orange-50",
      medium: "bg-orange-100",
      dark: "bg-orange-500",
      text: "text-orange-700",
      border: "border-orange-200",
    },
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
            Course
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Vithupro Instituite, we believe AI belongs to everyone.
            That&apos;s why our courses are open to students from any stream.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Vertical Program Cards */}
          <div className="lg:col-span-2 space-y-6">
            {programs.map((program, programIndex) => {
              const accent =
                accentColors[program.accent as keyof typeof accentColors];

              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: programIndex * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200/60 overflow-hidden">
                    {/* Header Gradient Bar */}
                    <div
                      className={`h-1 bg-gradient-to-r ${program.gradient}`}
                    ></div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex flex-col h-full">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                          {program.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                          {program.description}
                        </p>

                        {/* Points */}
                        <div className="space-y-2 mb-4 flex-1">
                          {program.points.slice(0, 4).map((point) => (
                            <div
                              key={point}
                              className="flex items-center gap-3 text-slate-700 text-sm"
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full ${accent.dark}`}
                              ></div>
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>

                        {/* Footer with Info and Button */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                          {/* Quick Info */}
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{program.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <IndianRupee className="w-3 h-3" />
                              <span>{program.fee}</span>
                            </div>
                          </div>

                          {/* View More Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`bg-gradient-to-r ${program.gradient} hover:shadow-lg text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2`}
                            onClick={() => {
                              router.push("/courses");
                            }}
                          >
                            <span>View More</span>
                            <ArrowRight className="w-3 h-3" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div
                      className={`absolute top-3 right-3 w-12 h-12 ${accent.light} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Title, Description, and Upcoming Program Card */}
          <div className="space-y-6">
            {/* Title and Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Shape Your Future with AI
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Join our innovative programs designed to equip you with
                cutting-edge AI skills and prepare you for the future of work
                across various industries.
              </p>

              {/* Explore All Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full lg:w-auto border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore All Programmes</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Upcoming Program Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200/60 overflow-hidden">
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 border border-orange-200">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-orange-700">
                      {upcomingProgram.status}
                    </span>
                  </div>
                </div>

                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${upcomingProgram.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Header Gradient Bar */}
                <div
                  className={`h-1 bg-gradient-to-r ${upcomingProgram.gradient}`}
                ></div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex flex-col h-full">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                      {upcomingProgram.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                      {upcomingProgram.description}
                    </p>

                    {/* Points */}
                    <div className="space-y-2 mb-4 flex-1">
                      {upcomingProgram.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 text-slate-700 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer with Info and Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      {/* Quick Info */}
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{upcomingProgram.startDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{upcomingProgram.duration}</span>
                        </div>
                      </div>

                      {/* Notify Me Button */}
                      {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2"
                      >
                        <span>Notify Me</span>
                        <Bell className="w-3 h-3" />
                      </motion.button> */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Bell icon component
const Bell = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-5 5v-5zM10.24 8.56a5.97 5.97 0 01-4.66-6.24M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default ProgramsSection;
