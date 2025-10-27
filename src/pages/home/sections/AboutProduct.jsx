import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  RiShieldLine,
  RiSunLine,
  RiDeviceLine,
  RiGlobalLine,
} from "react-icons/ri";



import Img1 from "../../../assets/images/showcase1.webp";

import Img3 from "../../../assets/images/showcase2.webp";
import { COMPANY_DATA } from "../../../constants/placeholder";

const AboutProduct = () => {
  const containerRef = useRef(null);
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);

  // Updated features data with Ghana-specific context
  const features = [
    {
      title: "Weather-Resistant Design",
      description:
        "Engineered for Ghana's climate, ensuring year-round reliability.",
      // icon: <RiShieldLine className="w-8 h-8" />,
      image: Img1,
      specs: [
        { label: "Waterproof Rating", value: "IPX6" },
        { label: "Operating Temperature", value: "-10°C to 60°C" },
        { label: "Material", value: "Refined and polished plywood" },
      ],
    },
    {
      title: "Advanced Solar Technology",
      description:
        "Optimized solar cells ensure reliable power for off-grid rural communities.",
      // icon: <RiSunLine className="w-8 h-8" />,
      image: Img3,
      specs: [
        { label: "Solar Panel", value: "330W" },
        { label: "Conversion Rate", value: "24.3%" },
        { label: "Charging Time", value: "4-5 hrs (full sun)" },
      ],
    },
    {
      title: "Ultra Portable",
      description:
        "Lightweight and portable, providing power for farmers' tools and irrigation.",
      // icon: <RiDeviceLine className="w-8 h-8" />,
      image: Img3,
      specs: [
        { label: "Weight", value: "18kg" },
        { label: "Dimensions", value: "30 × 28 × 17 mm" },
        { label: "Capacity", value: "166,000 mAh" },
      ],
    },
  ];

  // For the hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScrollProgress, [0, 0.5], [1, 0.95]);

  // Create separate refs and scroll progress for each feature
  const featureSectionRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);

  const { scrollYProgress: featureScrollProgress } = useScroll({
    target: featureSectionRef,
    offset: ["start end", "end start"],
  });

  // Transform values for each feature's animations
  const feature1Scale = useTransform(
    featureScrollProgress,
    [0, 0.3, 0.6],
    [0.8, 1.05, 0.9]
  );
  const feature1Opacity = useTransform(
    featureScrollProgress,
    [0, 0.3, 0.6],
    [0.5, 1, 0.2]
  );
  const feature1ZIndex = useTransform(
    featureScrollProgress,
    [0, 0.3, 0.6],
    [1, 3, 1]
  );

  const feature2Scale = useTransform(
    featureScrollProgress,
    [0.2, 0.5, 0.8],
    [0.8, 1.05, 0.9]
  );
  const feature2Opacity = useTransform(
    featureScrollProgress,
    [0.2, 0.5, 1],
    [0.5, 1, 1]
  );
  const feature2ZIndex = useTransform(
    featureScrollProgress,
    [0.2, 0.5, 0.8],
    [1, 3, 1]
  );

  const feature3Scale = useTransform(
    featureScrollProgress,
    [0.4, 0.7, 1],
    [0.8, 1.05, 0.9]
  );
  const feature3Opacity = useTransform(
    featureScrollProgress,
    [0.4, 0.7, 1],
    [0.5, 1, 1]
  );
  const feature3ZIndex = useTransform(
    featureScrollProgress,
    [0.4, 0.7, 1],
    [1, 3, 1]
  );

  return (
    <div className="bg-gray-950" ref={containerRef}>
      {/* Hero Section */}

      {/* Details Section */}
      <section ref={detailsRef} className="bg-gray-950 pt-20 pb-24 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMnYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        </div>

        <div className="w-full md:w-4/5 mx-auto  relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-amber-50 mb-16 text-center">
              <span className="bg-clip-text text-amber-400">
                Innovation for rural communities
              </span>
            </h2>

            {/* Zoom Effect Feature Scroll Section */}
            <div
              ref={featureSectionRef}
              className="relative min-h-[150vh] mb-24"
            >
              {/* Feature 1 - Weather-Resistant Design */}
              <motion.div
                ref={feature1Ref}
                className="sticky top-16 h-[80vh] flex items-center justify-center mb-8"
                style={{
                  scale: feature2Scale,
                  opacity: feature2Opacity,
                  zIndex: feature2ZIndex,
                }}
              >
                <div className="w-full max-w-4xl mx-auto bg-gray-900 rounded-3xl overflow-hidden border border-amber-800/30 shadow-xl">
                  <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-12">
                      <h3 className="text-3xl font-bold text-amber-50 mb-4">
                        {features[0].title}
                      </h3>
                      <p className="text-lg text-amber-100/90 mb-8">
                        {features[0].description}
                      </p>

                      {/* Specs for Feature 1 */}
                      <div className="space-y-3">
                        <h4 className="text-sm uppercase tracking-wider text-amber-400/80 mb-2">
                          Technical Specifications
                        </h4>
                        {features[0].specs.map((spec, index) => (
                          <div
                            key={index}
                            className="flex justify-between border-b border-amber-900/30 pb-2"
                          >
                            <span className="text-amber-200/90">
                              {spec.label}
                            </span>
                            <span className="text-amber-50 font-medium">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-full relative">
                      <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10"></div>
                        <img
                          src={features[0].image}
                          alt={features[0].title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2 - Advanced Solar Technology */}
              <motion.div
                ref={feature2Ref}
                className="sticky top-16 h-[80vh] flex items-center justify-center mb-8"
                style={{
                  scale: feature2Scale,
                  opacity: feature2Opacity,
                  zIndex: feature2ZIndex,
                }}
              >
                <div className="w-full max-w-4xl mx-auto bg-gray-900 rounded-3xl overflow-hidden border border-blue-800/30 shadow-xl">
                  <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-12">
                      <h3 className="text-3xl font-bold text-blue-50 mb-4">
                        {features[1].title}
                      </h3>
                      <p className="text-lg text-blue-100/90 mb-8">
                        {features[1].description}
                      </p>

                      {/* Specs for Feature 2 */}
                      <div className="space-y-3">
                        <h4 className="text-sm uppercase tracking-wider text-blue-400/80 mb-2">
                          Technical Specifications
                        </h4>
                        {features[1].specs.map((spec, index) => (
                          <div
                            key={index}
                            className="flex justify-between border-b border-blue-900/30 pb-2"
                          >
                            <span className="text-blue-200/90">
                              {spec.label}
                            </span>
                            <span className="text-blue-50 font-medium">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-full">
                      <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10"></div>
                        <img
                          src={features[1].image}
                          alt={features[1].title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 3 - Ultra Portable */}
              <motion.div
                ref={feature3Ref}
                className="sticky top-16 h-[80vh] flex items-center justify-center mb-8"
                style={{
                  scale: feature3Scale,
                  opacity: feature3Opacity,
                  zIndex: feature3ZIndex,
                }}
              >
                <div className="w-full max-w-4xl mx-auto bg-gray-900 rounded-3xl overflow-hidden border border-emerald-800/30 shadow-xl">
                  <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-12">
                      <h3 className="text-3xl font-bold text-emerald-50 mb-4">
                        {features[2].title}
                      </h3>
                      <p className="text-lg text-emerald-100/90 mb-8">
                        {features[2].description}
                      </p>

                      {/* Specs for Feature 3 */}
                      <div className="space-y-3">
                        <h4 className="text-sm uppercase tracking-wider text-emerald-400/80 mb-2">
                          Technical Specifications
                        </h4>
                        {features[2].specs.map((spec, index) => (
                          <div
                            key={index}
                            className="flex justify-between border-b border-emerald-900/30 pb-2"
                          >
                            <span className="text-emerald-200/90">
                              {spec.label}
                            </span>
                            <span className="text-emerald-50 font-medium">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-full">
                      <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10"></div>
                        <img
                          src={features[2].image}
                          alt={features[2].title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 3D Rotation Effect with Glass Morphism */}
            {/* <motion.div
              className="mb-24 relative h-80 flex items-center justify-center backdrop-blur-lg bg-gray-900/70 border border-gray-800/50 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,171,0,0.1)_0%,_rgba(0,0,0,0)_70%)]"></div>
              <motion.div
                className="w-48 h-48 relative"
                animate={{ rotateY: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <img
                  src="/api/placeholder/320/320"
                  alt="Solar Power Bank 3D View"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-500/20 mix-blend-overlay rounded-full"></div>
              </motion.div>
            </motion.div> */}

            {/* Environmental Impact - Interactive Counter */}
            <motion.div
              className="mb-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="backdrop-blur-sm bg-gray-900/60 border border-amber-700/20 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-amber-50 mb-4">
                  Impact on Ghana's Future
                </h3>
                <p className="text-amber-100/80 max-w-xl mx-auto mb-8">
                  Each Solar Power Bank prevents up to 30kg of CO₂ emissions
                  annually while providing reliable electricity to communities
                  off the national grid.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="text-center">
                    <motion.div
                      className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gray-800 border border-amber-700/20 mb-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <RiGlobalLine className="w-8 h-8 text-amber-400" />
                    </motion.div>
                    <h4 className="text-lg font-medium text-amber-50 mb-1">
                      30kg CO₂
                    </h4>
                    <p className="text-sm text-amber-400/70">
                      Emissions reduced yearly
                    </p>
                  </div>

                  <div className="text-center">
                    <motion.div
                      className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gray-800 border border-amber-700/20 mb-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <svg
                        className="w-8 h-8 text-amber-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                      </svg>
                    </motion.div>
                    <h4 className="text-lg font-medium text-amber-50 mb-1">
                      8+ hours
                    </h4>
                    <p className="text-sm text-amber-400/70">
                      Device charging per day
                    </p>
                  </div>

                  <div className="text-center">
                    <motion.div
                      className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gray-800 border border-amber-700/20 mb-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <svg
                        className="w-8 h-8 text-amber-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </motion.div>
                    <h4 className="text-lg font-medium text-amber-50 mb-1">
                      10+ villages
                    </h4>
                    <p className="text-sm text-amber-400/70">
                      Across rural Ghana
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="space-x-4">
                <motion.a
                  href="#contact"
                  className="shiny-cta inline-block  text-white font-medium px-8 py-4 rounded-full shadow-lg shadow-blue-900/30 hover:bg-blue-500 transition-all mr-4"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Become a Partner</span>
                </motion.a>

                <motion.a
                  href={COMPANY_DATA.storeFrontLink}
                  target="_blank"
                  className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-medium px-8 py-4 rounded-full shadow-lg shadow-amber-900/30 hover:from-amber-400 hover:to-amber-500 transition-all"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Order Now — from ₵2,500
                </motion.a>
              </motion.div>

              <p className="mt-4 text-sm text-amber-400/80">
                Discounts available for community programs and bulk orders
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProduct;
