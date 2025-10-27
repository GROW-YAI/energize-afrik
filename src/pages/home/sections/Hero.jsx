import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSun,
  FaBatteryFull,
  FaBolt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { COMPANY_DATA } from "../../../constants/placeholder";
import HeroImage1 from "../../../assets/images/hero3.webp";
import HeroImage2 from "../../../assets/images/hero2.webp";
import HeroImage3 from "../../../assets/images/hero1.webp";

// Styles
const styles = {
  textShadow: {
    textShadow: "0px 3px 8px rgba(0,0,0,0.7)",
  },
};

// Animation keyframes
const FloatingAnimations = () => (
  <style jsx global>{`
    .float-slow {
      animation: float-slow 15s ease-in-out infinite;
    }

    .float-medium {
      animation: float-medium 12s ease-in-out infinite;
    }

    .float-fast {
      animation: float-fast 10s ease-in-out infinite;
    }

    @keyframes float-slow {
      0%,
      100% {
        transform: translateY(0) translateX(0);
      }
      50% {
        transform: translateY(-10px) translateX(15px);
      }
    }

    @keyframes float-medium {
      0%,
      100% {
        transform: translateY(0) translateX(0);
      }
      50% {
        transform: translateY(15px) translateX(-10px);
      }
    }

    @keyframes float-fast {
      0%,
      100% {
        transform: translateY(0) translateX(0);
      }
      33% {
        transform: translateY(-8px) translateX(8px);
      }
      66% {
        transform: translateY(8px) translateX(-8px);
      }
    }

    .grid-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c0-9.94-8.06-18-18-18H4v4h14C26.07 4 36 13.93 36 24V36h4V18z' fill='white' fill-opacity='0.03'/%3E%3C/g%3E%3C/svg%3E");
    }
  `}</style>
);

// Background Elements
const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl float-slow"></div>
    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl float-medium"></div>
    <div className="absolute top-2/3 left-1/2 w-56 h-56 rounded-full bg-purple-500/10 blur-3xl float-fast"></div>
    <div className="absolute inset-0 grid-pattern opacity-5"></div>
  </div>
);

// Main Hero Component
const Hero = () => {
  // Carousel state
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselItems = [
    {
      title: "Rural Power",
      description: "Reliable energy for remote villages",
      image: HeroImage1,
      icon: <FaBatteryFull />,
    },
    {
      title: "Farm Solution",
      description: "Solar-powered irrigation systems",
      image: HeroImage2,
      icon: <FaBolt />,
    },
    {
      title: "Ghana's Sun",
      description: "Harnessing abundant natural energy",
      image: HeroImage3,
      icon: <FaSun />,
    },
  ];

  // Auto-advance carousel with proper cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  // Carousel navigation
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <>
      {/* <FloatingAnimations /> */}

      {/* Hero Section */}
      <div className="h-screen font-sans relative overflow-hidden bg-gray-900 flex items-center justify-center">
        {/* <BackgroundElements /> */}

        {/* Content Container */}
        <div className="container mx-auto px-6 flex flex-col items-center justify-between h-full pt-20 pb-10 relative z-10">
          <div className="flex flex-col items-center justify-center w-full h-full space-y-8">
            {/* Image Carousel */}
            <div className="w-full max-w-5xl relative flex-grow">
              <div className="relative rounded-3xl overflow-hidden bg-gray-800/30 backdrop-blur-md border border-white/10 shadow-2xl h-full min-h-96">
                {/* Fixed: Rendered each slide individually */}
                {carouselItems.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === activeSlide
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                    style={{
                      pointerEvents: index === activeSlide ? "auto" : "none",
                    }}
                  >
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-xs z-10"></div>

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-20"></div>

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                      <div className="text-center px-8 py-10 rounded-3xl backdrop-blur-sm bg-black/20 border border-white/10 max-w-3xl mx-auto">
                        {item.icon && (
                          <span className="inline-block text-4xl mb-4 text-amber-400">
                            {item.icon}
                          </span>
                        )}

                        <h1
                          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4"
                          style={styles.textShadow}
                        >
                          {item.title}
                        </h1>
                        <p
                          className="text-xl text-white/90 max-w-2xl mx-auto"
                          style={styles.textShadow}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-40">
                  {carouselItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        activeSlide === index
                          ? "bg-amber-400 w-12"
                          : "bg-white/30 hover:bg-white/50 w-3"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 backdrop-blur-md bg-black/30 hover:bg-amber-600 text-white border border-white/10 p-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-amber-500/20 z-40"
                aria-label="Previous slide"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 backdrop-blur-md bg-black/30 hover:bg-amber-600 text-white border border-white/10 p-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-amber-500/20 z-40"
                aria-label="Next slide"
              >
                <FaChevronRight size={20} />
              </button>
            </div>

            {/* Buttons */}
            <div className="w-full flex justify-center gap-6">
              <a
                href={COMPANY_DATA.storeFrontLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium px-10 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/20 border border-white/10"
              >
                Order Now
              </a>
              <a
                href="#contact"
                className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-10 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 font-sans relative overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900"></div>

        <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl p-8 grid grid-cols-3 gap-10 shadow-2xl border border-white/10 max-w-4xl mx-auto">
          {/* Battery Capacity */}
          <div className="text-center p-4">
            <span className="inline-block text-amber-400 text-4xl mb-4">
              <FaBatteryFull />
            </span>
            <h3 className="font-bold text-3xl text-amber-400 mb-2">160,000+</h3>
            <p className="text-white/70 mt-1">mAh Capacity</p>
          </div>

          {/* Runtime */}
          <div className="text-center p-4">
            <span className="inline-block text-amber-400 text-4xl mb-4">
              <FaBolt />
            </span>
            <h3 className="font-bold text-3xl text-amber-400 mb-2">8+</h3>
            <p className="text-white/70 mt-1">Hours Runtime</p>
          </div>

          {/* Villages */}
          <div className="text-center p-4">
            <span className="inline-block text-amber-400 text-4xl mb-4">
              <FaSun />
            </span>
            <h3 className="font-bold text-3xl text-amber-400 mb-2">50+</h3>
            <p className="text-white/70 mt-1">Villages Powered</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
