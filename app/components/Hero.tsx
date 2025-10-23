"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
const HeroSection = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides = [
    {
      id: 1,
      type: "video",
      title: "Where Future AI Leaders Are Born",
      highlighted: "AI Leaders",
      description:
        "Transforming ambitious learners into industry-ready AI professionals through cutting-edge curriculum and real-world projects.",
      buttonText: "Explore Programs",
      media: "/video.mp4", // Replace with your video path
      poster: "/video.jpg", // Optional: poster image for video
    },
    {
      id: 2,
      type: "image",
      title: "Master the Future of Technology",
      highlighted: "Technology",
      description:
        "Immerse yourself in world-class AI education with hands-on projects and industry mentorship.",
      buttonText: "Start Learning",
      media: "/slide2.png",
    },
    {
      id: 3,
      type: "image",
      title: "Build Your AI Career Journey",
      highlighted: "AI Career",
      description:
        "From beginner to expert - our comprehensive programs guide you every step of the way.",
      buttonText: "View Courses",
      media: "/slide3.jpg",
    },
  ];

  // Auto slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle video play/pause based on current slide
  useEffect(() => {
    if (slides[currentSlide].type === "video" && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [currentSlide, slides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="min-h-screen py-4 sm:py-8 px-3 sm:px-6 lg:px-8 overflow-hidden">
      {/* Slider Container */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative overflow-hidden rounded-xl sm:rounded-2xl">
        <AnimatePresence mode="wait" initial={false}>
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  {/* Media Container */}
                  <div className="absolute inset-0">
                    {slide.type === "video" ? (
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={slide.poster}
                        className="w-full h-full object-cover"
                      >
                        <source src={slide.media} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={slide.media}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    )}

                    {/* Dark Overlay - Only for image slides */}
                    {slide.type === "image" && (
                      <div className="absolute inset-0 bg-black/40"></div>
                    )}

                    {/* Semi-transparent overlay for video to ensure text readability */}
                    {slide.type === "video" && (
                      <div className="absolute inset-0 bg-black/20"></div>
                    )}
                  </div>

                  {/* Content - Only show for image slides, hide for first video slide */}
                  {slide.type === "image" && (
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-white space-y-4 sm:space-y-6 max-w-2xl w-full text-center"
                      >
                        <motion.h1
                          variants={itemVariants}
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                          {slide.title.split(slide.highlighted)[0]}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            {slide.highlighted}
                          </span>
                          {slide.title.split(slide.highlighted)[1]}
                        </motion.h1>

                        <motion.div
                          variants={itemVariants}
                          className="space-y-3 sm:space-y-4"
                        >
                          <p className="text-base sm:text-xl md:text-2xl text-gray-200 leading-relaxed px-2">
                            {slide.description}
                          </p>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                            onClick={() => {
                              router.push("/courses");
                            }}
                          >
                            {slide.buttonText}
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Navigation Arrows - Always visible */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-1 sm:p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-1 sm:p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1 sm:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-600 scale-125"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Optional: Add mute/unmute button for video slide */}
        {slides[currentSlide].type === "video" && (
          <button
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.muted = !videoRef.current.muted;
              }
            }}
            className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Toggle mute"
          >
            <span className="text-gray-700 text-sm font-medium">
              {videoRef.current?.muted ? "🔇" : "🔊"}
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
