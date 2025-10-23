"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 5 seconds total

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="fixed inset-0 z-[9999] bg-slate-900 flex items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6"
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Particles - Reduced count on mobile */}
            {[
              ...Array(
                typeof window !== "undefined" && window.innerWidth < 768
                  ? 8
                  : 15
              ),
            ].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `clamp(2px, ${Math.random() * 4 + 2}px, 6px)`,
                  height: `clamp(2px, ${Math.random() * 4 + 2}px, 6px)`,
                  background: `radial-gradient(circle, ${
                    Math.random() > 0.5 ? "#00f0ff" : "#8b5cf6"
                  }, transparent)`,
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.random() * 15 - 7.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Data Streams - Reduced count on mobile */}
            {[
              ...Array(
                typeof window !== "undefined" && window.innerWidth < 768 ? 4 : 8
              ),
            ].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-16 sm:h-20 bg-gradient-to-b from-cyan-400/30 to-transparent"
                style={{
                  left: Math.random() * 100 + "%",
                  top: "-10%",
                }}
                animate={{
                  y: ["0vh", "120vh"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Central Logo Container */}
          <div className="relative flex items-center justify-center">
            {/* Outer Glow - Responsive sizing */}
            <motion.div
              className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full bg-cyan-400/10 blur-lg sm:blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Energy Rings - Responsive sizing */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-cyan-400/30 rounded-full"
                style={{
                  width: `clamp(60px, ${80 + i * 40}px, 200px)`,
                  height: `clamp(60px, ${80 + i * 40}px, 200px)`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.5],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Logo Image - Responsive sizing */}
            <motion.div
              className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.1, 1],
                opacity: [0, 1, 0.9],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            >
              {/* Logo Background Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md" />

              {/* Logo Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-xl sm:shadow-2xl">
                <Image
                  src="/logo.jpg"
                  alt="Vithupro AI Institute Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>

              {/* Sparkle Effects around logo - Responsive positioning */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                  style={{
                    left: `${50 + 45 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                    top: `${50 + 45 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Text Animation - Fully responsive */}
          <motion.div
            className="absolute bottom-16 sm:bottom-20 md:bottom-24 text-center px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 1 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight leading-tight sm:leading-normal"
              animate={{
                textShadow: [
                  "0 0 15px rgba(34, 211, 238, 0.5)",
                  "0 0 25px rgba(34, 211, 238, 0.8)",
                  "0 0 15px rgba(34, 211, 238, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              VITHUPRO AI
              <br className="sm:hidden" /> INSTITUTE
            </motion.h1>
            <motion.p
              className="mt-2 sm:mt-3 md:mt-4 text-cyan-200/80 text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wider max-w-xs sm:max-w-none mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              The Future of Intelligence
            </motion.p>
          </motion.div>

          {/* Progress Bar - Responsive sizing */}
          <motion.div
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-40 sm:w-48 md:w-56 lg:w-64 h-1 bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, delay: 2, ease: "linear" }}
            />
          </motion.div>

          {/* Mobile-specific optimizations */}
          <div className="md:hidden">
            {/* Reduced animation intensity for mobile performance */}
            <style jsx>{`
              @media (max-width: 768px) {
                .mobile-optimize {
                  transform: translateZ(0);
                  backface-visibility: hidden;
                  perspective: 1000;
                }
              }
            `}</style>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
