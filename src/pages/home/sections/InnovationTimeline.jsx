import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import TimelineImage2022 from "../../../assets/images/innovator.jpg"; // You'll need to add these images
import TimelineImage2023 from "../../../assets/images/innovator.jpg";
import TimelineImage2024 from "../../../assets/images/innovator.jpg";
import TimelineImage2025 from "../../../assets/images/innovator.jpg";

// Updated timeline data with images for 2022-2025
const milestones = [
  {
    year: "2022",
    title: "Community Impact",
    description:
      "Helped 50+ households access reliable electricity for essential appliances, transforming daily life in rural communities.",
    image: TimelineImage2022,
    color: "amber",
  },
  {
    year: "2023",
    title: "Expansion Vision",
    description:
      "Developed plans for larger solar stations to power cars and heavy equipment, with prototype testing in selected villages.",
    image: TimelineImage2023,
    color: "amber",
  },
  {
    year: "2024",
    title: "Educational Outreach",
    description:
      "Launched training programs for local technicians to maintain and repair solar systems, creating sustainable job opportunities.",
    image: TimelineImage2024,
    color: "amber",
  },
  {
    year: "2025",
    title: "Regional Scaling",
    description:
      "Expanding to neighboring regions with improved solar technology and establishing partnerships with government agencies.",
    image: TimelineImage2025,
    color: "amber",
  },
];

const InnovationTimeline = ({ shouldShow }) => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="mb-24 relative" ref={timelineRef}>
      <motion.h3
        className="text-3xl font-bold text-center text-gray-900 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3 }}
      >
        The Innovation Journey
      </motion.h3>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Animated timeline progress line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-amber-400 rounded-full"
            style={{ height: lineProgress + "%" }}
          />
        </div>

        <div className="space-y-32">
          {milestones.map((milestone, index) => {
            const milestoneRef = useRef(null);
            const isInView = useInView(milestoneRef, {
              once: false,
              amount: 0.3,
            });

            return (
              <motion.div
                key={index}
                ref={milestoneRef}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Year marker - positioned to the side of content rather than on the timeline */}
                <motion.div
                  className={`absolute z-10 ${
                    index % 2 === 0
                      ? "md:left-[calc(50%-5rem)]"
                      : "md:right-[calc(50%-5rem)]"
                  } top-0 md:top-8`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <div className="bg-amber-500 text-white px-3 py-1.5 rounded-md font-bold shadow-md">
                    {milestone.year}
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-amber-400 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                />

                {/* Image */}
                <motion.div
                  className="w-full md:w-5/12 overflow-hidden rounded-lg shadow-md"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={
                    isInView
                      ? { x: 0, opacity: 1 }
                      : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }
                  }
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <motion.div
                    className="relative pt-[66%] overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={milestone.image}
                      alt={`${milestone.year} - ${milestone.title}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="w-full md:w-5/12 flex items-center"
                  initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                  animate={
                    isInView
                      ? { x: 0, opacity: 1 }
                      : { x: index % 2 === 0 ? 50 : -50, opacity: 0 }
                  }
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-400 w-full"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                    <div
                      className={`mt-5 flex ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      <motion.button
                        className="px-4 py-2 text-sm bg-amber-100 text-amber-700 rounded-md font-medium flex items-center gap-2"
                        whileHover={{
                          scale: 1.03,
                          backgroundColor: "rgba(251,191,36,0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Learn more</span>
                        <svg
                          className="w-4 h-4"
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
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InnovationTimeline;
