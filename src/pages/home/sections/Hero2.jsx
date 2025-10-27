import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { COMPANY_DATA } from "../../../constants/placeholder";
import HeroImage1 from "../../../assets/images/hero1.webp";
import HeroImage2 from "../../../assets/images/hero2.avif";
import HeroImage3 from "../../../assets/images/hero3.avif";

const Hero = () => {
  // Carousel state
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselItems = [
    {
      title: "Rural Power",
      image: HeroImage1,
    },
    {
      title: "Farm Solution",
      image: HeroImage2,
    },
    {
      title: "Ghana's Sun",
      image: HeroImage3,
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
    <div className="py-12 font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-8 flex flex-col items-center">
        {/* Hero Title */}
        <div className="w-full text-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-8">
                {carouselItems[activeSlide].title}
                <br />
                <span className="text-amber-600">Solar Power Bank</span>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Carousel with 3D inserted effect */}
        <div className="w-full max-w-3xl mx-auto mb-12 relative">
          <div
            className="relative rounded-3xl overflow-hidden border-8 border-white shadow-xl mx-auto"
            style={{
              transform: "perspective(1000px) rotateX(2deg)",
              transformOrigin: "center bottom",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.06), inset 0 0 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateX(0deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateX(2deg)";
            }}
          >
            {/* Carousel */}
            <div className="relative aspect-[3/2]">
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
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeSlide === index ? "bg-amber-600 w-8" : "bg-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows - More visible */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-amber-50 text-amber-600 p-3 rounded-full transition-all shadow-md"
                style={{ fontSize: "1.25rem" }}
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-amber-50 text-amber-600 p-3 rounded-full transition-all shadow-md"
                style={{ fontSize: "1.25rem" }}
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Shadow effect underneath image */}
          <div
            className="absolute -bottom-4 left-0 right-0 mx-auto rounded-full bg-black/10 blur-md h-4"
            style={{
              width: "80%",
              zIndex: "-1",
            }}
          ></div>
        </div>

        {/* Action Buttons and Stats - Centered */}
        <div className="w-full max-w-2xl mx-auto">
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            <a
              href={COMPANY_DATA.storeFrontLink}
              target="_blank"
              className="bg-amber-600 text-white font-medium px-8 py-3 rounded-full transition hover:bg-amber-700 shadow-md"
            >
              Order Now
            </a>
            <a
              href="#contact"
              className="bg-white border border-gray-200 text-gray-700 font-medium px-8 py-3 rounded-full transition hover:bg-gray-50 shadow-md"
            >
              Partner With Us
            </a>
          </div>

          {/* Simplified Stats */}
          <div className="flex justify-center gap-16">
            <div className="text-center">
              <h3 className="font-bold text-2xl text-amber-600">10,000+</h3>
              <p className="text-gray-500 text-sm">mAh</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-2xl text-amber-600">8+</h3>
              <p className="text-gray-500 text-sm">Hours</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-2xl text-amber-600">50+</h3>
              <p className="text-gray-500 text-sm">Villages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
