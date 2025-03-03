import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSun,
  FaBatteryFull,
  FaBolt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { COMPANY_DATA } from "../../../constants/placeholder";
import HeroImage1 from "../../../assets/images/hero1.avif";
import HeroImage2 from "../../../assets/images/hero2.avif";
import HeroImage3 from "../../../assets/images/hero3.avif";

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

  // Auto-advance carousel
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
    <div className=" py-7 font-sans relative overflow-hidden bg-amber-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400 to-amber-300 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-t from-amber-500 to-amber-300 opacity-10"></div>

        {/* Animated Sun Rays */}
        <div className="absolute top-1/4 right-1/4">
          <div className="w-64 h-64 rounded-full bg-amber-400 opacity-5 animate-pulse"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-26 flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                {carouselItems[activeSlide].title}
                <br />
                <span className="text-amber-600">Solar Power Bank</span>
              </h1>

              <p className="text-gray-600 mb-8 max-w-md">
                {carouselItems[activeSlide].description}. Empowering rural
                Ghana.
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 mb-12">
            <a
              href={COMPANY_DATA.storeFrontLink}
              target="_blank"
              className="bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg hover:shadow-xl text-white font-medium px-8 py-3 rounded-full transition duration-300 transform hover:-translate-y-1"
            >
              Order Now
            </a>
            <a
              href="#contact"
              className="bg-white shadow-lg hover:shadow-xl text-amber-700 font-medium px-8 py-3 rounded-full transition duration-300 transform hover:-translate-y-1"
            >
              Partner With Us
            </a>
          </div>

          {/* Stats */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-6 grid grid-cols-3 gap-8 shadow-xl">
            <div className="text-center">
              <h3 className="font-bold text-3xl text-amber-600">10,000+</h3>
              <p className="text-gray-500 mt-1">mAh</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-3xl text-amber-600">8+</h3>
              <p className="text-gray-500 mt-1">Hours</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-3xl text-amber-600">50+</h3>
              <p className="text-gray-500 mt-1">Villages</p>
            </div>
          </div>
        </div>

        {/* Right Content - Image Carousel */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 aspect-[3/2] mx-auto ">
            {/* Carousel */}
            <div className="h-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={carouselItems[activeSlide].image}
                    alt={carouselItems[activeSlide].title}
                    className="w-full h-full object-fit"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                    <div className="absolute bottom-8 left-8 text-white">
                      <div className="p-3 rounded-full bg-amber-500 mb-4 inline-block">
                        {carouselItems[activeSlide].icon}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeSlide === index ? "bg-amber-500 w-8" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -z-10 top-1/4 -right-12 w-32 h-32 rounded-full bg-amber-100 opacity-80 animate-float"></div>
          <div className="absolute -z-10 -bottom-8 -left-8 w-24 h-24 rounded-full bg-amber-200 opacity-50 animate-float-delayed"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
