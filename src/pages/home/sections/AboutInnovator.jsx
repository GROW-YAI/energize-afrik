import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Innovator from "../../../assets/images/innovator.webp";

const AboutInnovator = () => {
  const sectionRef = useRef(null);
  const [forceVisible, setForceVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Use effect to force visibility after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.5, 1, 1, 0.5]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [60, 0, 0, -60]
  );

  // Timeline data
  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "First prototype of the solar power bank created in Bodomase.",
    },
    {
      year: "2021",
      title: "Solar Irrigation",
      description:
        "Developed solar-powered water pump for farmers in rural Ashanti Region.",
    },
    {
      year: "2022",
      title: "Community Impact",
      description:
        "Helped 50+ households access reliable electricity for essential appliances.",
    },
    {
      year: "2023",
      title: "Expansion Vision",
      description:
        "Started developing plans for larger solar stations to power cars and heavy equipment.",
    },
  ];

  // Modal content
  const modalContent = {
    vision: {
      title: "Our Vision",
      content:
        "Prince envisions a future where rural communities throughout Ghana have reliable access to clean energy. His ultimate goal is to build a comprehensive solar station capable of powering both homes and agricultural equipment, creating sustainable development in underserved areas.",
    },
    technology: {
      title: "Our Technology",
      content:
        "The portable solar power bank is designed specifically for rural applications, capable of powering essential home appliances like refrigerators, televisions, and laptops. The solar-powered irrigation system allows farmers to maintain crops during dry seasons without relying on expensive diesel pumps or unpredictable grid electricity.",
    },
    impact: {
      title: "Our Impact",
      content:
        "By addressing both household energy needs and agricultural challenges, Prince's innovations tackle two critical barriers to development in rural Ghana. His solutions promote sustainable farming practices, reduce reliance on fossil fuels, and improve quality of life through reliable electricity access.",
    },
  };

  const openModal = (type) => {
    setActiveModal(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Determine whether content should be visible
  const shouldShow = isInView || forceVisible;

  return (
    <div
      className=" relative bg-gradient-to-br from-amber-50 to-white overflow-hidden"
      ref={sectionRef}
    >
      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_#f59e0b_0%,_transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_#0ea5e9_0%,_transparent_70%)]"></div>
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNTllMGIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2MmgtMnYtMmgyem0wLTRoMnYyaC0ydi0yem0tNCAydjJoLTJ2LTJoMnptMiAwaDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 py-24"
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
          >
            Solar Innovation
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-500">
              Meet the Innovator
            </span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            Transforming rural energy access in Ghana, one innovation at a time
          </motion.p>
        </div>

        {/* Innovator Profile */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, x: -40 }}
            animate={shouldShow ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={Innovator}
                alt="Prince - Solar Innovator"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <span className="bg-amber-400/90 text-gray-900 px-3 py-1 text-sm font-medium rounded-full inline-block mb-2">
                  Founder & Solar Engineer
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">Prince</h3>
                <p className="text-white/80 text-sm">
                  Renewable Energy Entrepreneur | Bodomase, Ashanti Region
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-full h-full bg-amber-400/30 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-400/20 rounded-2xl -z-20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={shouldShow ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Pioneering Rural Energy Solutions
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              From Bodomase in the Sekyere Kumawu district, Prince is
              transforming how rural communities access energy. His innovations
              address critical challenges in both agricultural productivity and
              everyday electricity needs.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              "I believe that clean energy should be accessible to everyone, no
              matter how remote their location. Our portable solar solutions
              bridge the gap for communities left behind by traditional
              infrastructure."
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => openModal("vision")}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-full pl-2 pr-5 py-2 shadow-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(251,191,36,0.1)",
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Vision</span>
              </motion.button>

              <motion.button
                onClick={() => openModal("technology")}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-full pl-2 pr-5 py-2 shadow-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(14,165,233,0.1)",
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-sky-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Technology</span>
              </motion.button>

              <motion.button
                onClick={() => openModal("impact")}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-full pl-2 pr-5 py-2 shadow-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(5,150,105,0.1)",
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Impact</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Innovation Timeline */}
        <div className="mb-24">
          <motion.h3
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            The Innovation Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-400 to-blue-400"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "justify-start md:justify-end"
                      : "justify-end md:justify-start"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                      whileHover={{
                        y: -5,
                        boxShadow:
                          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <div className="flex items-center mb-3">
                        <span
                          className={`text-sm font-semibold px-3 py-1 rounded-full ${
                            index % 4 === 0
                              ? "bg-amber-100 text-amber-800"
                              : index % 4 === 1
                              ? "bg-blue-100 text-blue-800"
                              : index % 4 === 2
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-amber-400 z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values and Philosophy */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg overflow-hidden relative border border-amber-100"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -right-8 -top-8 w-16 h-16 bg-amber-400/20 rounded-full"></div>
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Sustainability
            </h4>
            <p className="text-gray-600">
              Providing clean energy solutions that reduce reliance on fossil
              fuels and promote sustainable rural development.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-white to-sky-50 p-8 rounded-2xl shadow-lg overflow-hidden relative border border-sky-100"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -right-8 -top-8 w-16 h-16 bg-sky-400/20 rounded-full"></div>
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-sky-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Accessibility
            </h4>
            <p className="text-gray-600">
              Creating solutions that bring modern energy services to remote
              communities previously left behind by traditional infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-lg overflow-hidden relative border border-emerald-100"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -right-8 -top-8 w-16 h-16 bg-emerald-400/20 rounded-full"></div>
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Agriculture Focus
            </h4>
            <p className="text-gray-600">
              Developing technology that specifically addresses the irrigation
              and energy needs of smallholder farmers in rural Ghana.
            </p>
          </motion.div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          className="relative bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 overflow-hidden mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute -right-24 -bottom-24 w-64 h-64 text-amber-300 opacity-20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-medium text-white mb-8 italic">
              "Solar energy isn't just about technology—it's about empowering
              rural communities to overcome barriers to development and create
              their own sustainable future."
            </p>
            <div className="flex items-center justify-center">
              <span className="w-12 h-1 bg-white rounded-full mr-3"></span>
              <p className="text-white font-semibold">Prince</p>
              <span className="w-12 h-1 bg-white rounded-full ml-3"></span>
            </div>
          </div>
        </motion.div>

        {/* Connect with Innovator */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Partner With Us
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join Prince on his journey to bring reliable solar energy and
            agricultural solutions to rural Ghana.
          </p>

          <div className="flex items-center justify-center gap-4">
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </motion.a>

            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </motion.a>

            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </motion.a>

            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-medium px-6 py-3 rounded-full shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Partner
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {modalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">
                {activeModal && modalContent[activeModal].title}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                {activeModal && modalContent[activeModal].content}
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AboutInnovator;
