import React from "react";
import { motion } from "framer-motion";
import { FaBatteryFull, FaBolt, FaMobileAlt, FaSun } from "react-icons/fa";
import { COMPANY_DATA } from "../../../constants/placeholder";

// Enhanced feature data with more content
const features = [
  {
    title: "High Capacity",
    description:
      "160,000+ mAh for multiple device charges, perfect for powering critical devices during extended outages",
    icon: <FaBatteryFull />,
    color: "amber",
    delay: 0,
  },
  {
    title: "Fast Charging",
    description:
      "Quick-charge technology delivers rapid power to your devices with optimized charging algorithms",
    icon: <FaBolt />,
    color: "blue",
    delay: 0.2,
  },
  {
    title: "Multi-Device",
    description:
      "Charge phones, tablets, and other small electronics simultaneously with multiple output ports",
    icon: <FaMobileAlt />,
    color: "purple",
    delay: 0.4,
  },
];

// Floating animations styles
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
  `}</style>
);

// Feature Card Component
const FeatureCard = ({ feature, index }) => {
  // Colors for each feature
  const colorMap = {
    amber: {
      glowLight: "bg-amber-500/20",
      glowDark: "bg-amber-600/10",
      icon: "text-amber-400",
      accent: "border-amber-500/30",
      hover: "group-hover:border-amber-400",
    },
    blue: {
      glowLight: "bg-blue-500/20",
      glowDark: "bg-blue-600/10",
      icon: "text-blue-400",
      accent: "border-blue-500/30",
      hover: "group-hover:border-blue-400",
    },
    purple: {
      glowLight: "bg-purple-500/20",
      glowDark: "bg-purple-600/10",
      icon: "text-purple-400",
      accent: "border-purple-500/30",
      hover: "group-hover:border-purple-400",
    },
  };

  const colors = colorMap[feature.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: feature.delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="relative backdrop-blur-xl bg-gray-900/50 border border-white/10 rounded-3xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] overflow-hidden">
        {/* Background glow elements */}
        <div
          className={`absolute bottom-0 left-0 w-40 h-40 rounded-full ${colors.glowDark} blur-3xl opacity-40 float-slow`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-20 h-20 rounded-full ${colors.glowLight} blur-2xl opacity-30 float-medium`}
        ></div>

        {/* Inner content container */}
        <div className={`relative z-10  pl-4 transition-colors duration-300`}>
          {/* Icon with floating animation */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={`${colors.icon} rounded-2xl inline-flex mb-6`}
          >
            <span className="text-5xl">{feature.icon}</span>
          </motion.div>

          {/* Content with hover effects */}
          <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-white/90 transition-colors">
            {feature.title}
          </h3>
          <p className="text-white/70 group-hover:text-white/80 transition-colors">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section
      id="about-product"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      <FloatingAnimations />

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-0"></div>
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl float-medium"></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl float-fast"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOEg0djRoMTRDMjYuMDcgNCAzNiAxMy45MyAzNiAyNFYzNmg0VjE4eiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful <span className="text-amber-400">Features</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Our solar power banks combine cutting-edge technology with practical
            design to deliver reliable energy wherever you need it.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Solar Feature Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-400/20 rounded-3xl backdrop-blur-xl border border-amber-500/20"></div>

          <div className="relative overflow-hidden backdrop-blur-xl bg-gray-900/30 rounded-3xl p-10 text-white shadow-2xl border border-white/10">
            {/* Background glow element */}
            <div className="absolute -bottom-10 right-10 w-60 h-60 rounded-full bg-amber-500/30 blur-3xl opacity-40"></div>

            <div className="flex flex-col md:flex-row items-center relative z-10">
              <div className="md:w-1/4 flex justify-center mb-8 md:mb-0">
                <div className="p-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/20">
                  <FaSun className="text-6xl text-white" />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="text-3xl font-bold mb-4">
                  Solar Powered Freedom
                </h3>
                <p className="mb-6 text-white/80 text-lg">
                  Our power banks harness the sun's energy with high-efficiency
                  solar panels, providing reliable charging even in remote
                  locations without access to electricity. Perfect for outdoor
                  adventures, emergency preparedness, or daily use in areas with
                  limited power infrastructure.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                    <div className="h-2 w-2 rounded-full bg-amber-400 mr-2"></div>
                    <span>Eco-friendly</span>
                  </div>
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                    <div className="h-2 w-2 rounded-full bg-amber-400 mr-2"></div>
                    <span>Sustainable energy</span>
                  </div>
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                    <div className="h-2 w-2 rounded-full bg-amber-400 mr-2"></div>
                    <span>Off-grid charging</span>
                  </div>
                </div>

                <motion.a
                  href={COMPANY_DATA.storeFrontLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-amber-500/30 border border-white/10"
                >
                  Explore Solar Power Banks
                  <svg
                    className="w-5 h-5 ml-2"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
