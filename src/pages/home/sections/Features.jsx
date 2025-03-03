import React from "react";
import { motion } from "framer-motion";
import { FaBatteryFull, FaBolt, FaMobileAlt, FaSun } from "react-icons/fa";
import { COMPANY_DATA } from "../../../constants/placeholder";

const features = [
  {
    title: "High Capacity",
    description: "10,000+ mAh for multiple device charges",
    icon: <FaBatteryFull />,
    delay: 0,
  },
  {
    title: "Fast Charging",
    description: "Quick-charge technology for rapid power",
    icon: <FaBolt />,
    delay: 0.2,
  },
  {
    title: "Multi-Device",
    description: "Charge phones, tablets, ... simultaneously",
    icon: <FaMobileAlt />,
    delay: 0.4,
  },
];

const Features = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: feature.delay,
                ease: "easeOut",
              }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-amber-100 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-amber-100 text-amber-700 p-4 rounded-2xl inline-flex mb-6"
                >
                  <span className="text-2xl">{feature.icon}</span>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional feature callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-amber-500 to-amber-400 rounded-3xl p-8 text-white shadow-lg max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/5 flex justify-center mb-6 md:mb-0">
              <FaSun className="text-6xl text-amber-100" />
            </div>
            <div className="md:w-4/5 md:pl-8">
              <h3 className="text-2xl font-bold mb-2">Solar Powered Freedom</h3>
              <p className="mb-4">
                Our power banks harness the sun's energy with high-efficiency
                solar panels, providing reliable charging even in remote
                locations without access to electricity.
              </p>
              <motion.a
                href={COMPANY_DATA.storeFrontLink}
                target="_blank"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-white font-medium border-b border-amber-200 hover:border-white pb-1"
              >
                Explore Solar Power Banks
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
