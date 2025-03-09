import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import Innovator from "../../../assets/images/innovator.jpg";
import InnovationTimeline from "./InnovationTimeline"; // Import the timeline component
import YouTubePlayer from "react-youtube"; // Ensure you have this dependency installed

// Enhanced AboutInnovator Component
const AboutInnovator = () => {
  const sectionRef = useRef(null);
  const [forceVisible, setForceVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [timelineModalOpen, setTimelineModalOpen] = useState(false);
  const [activeTimelineModal, setActiveTimelineModal] = useState(null);
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

  // Timeline modal content
  const timelineModalContent = {
    2022: {
      title: "Community Impact Details",
      content:
        "In 2022, our solar power solutions reached over 50 households across rural Ghana. These systems provided reliable electricity for essential appliances including lights, mobile phones, small refrigerators, and televisions. The impact was particularly significant for children who could now study after dark and for small businesses that could extend their operating hours. We focused on the Ashanti and Eastern regions, working closely with village leaders to identify households with the greatest need.",
      image: "/api/placeholder/600/400",
      stats: [
        { label: "Households Reached", value: "50+" },
        { label: "Villages Served", value: "7" },
        { label: "CO₂ Reduction", value: "1,500kg" },
      ],
    },
    2023: {
      title: "Expansion Vision Details",
      content:
        "Building on our initial success, 2023 marked the beginning of our more ambitious plans. We developed prototypes for larger solar stations capable of powering heavy equipment and even charging electric vehicles. The prototype testing phase began in three selected villages, with promising initial results. We also secured our first round of seed funding from a Ghana-based renewable energy investment group, allowing us to expand our team and improve our manufacturing capabilities.",
      image: "/api/placeholder/600/400",
      stats: [
        { label: "Prototype Stations", value: "3" },
        { label: "Investment Secured", value: "₵120,000" },
        { label: "New Team Members", value: "5" },
      ],
    },
    2024: {
      title: "Educational Outreach Details",
      content:
        "Recognizing the importance of local expertise, in 2024 we launched comprehensive training programs for community technicians. These programs equipped locals with the skills needed to install, maintain, and repair solar systems, creating sustainable employment while ensuring our solutions could be supported long-term. The first cohort included 25 technicians from 12 different communities, with a special focus on including women in the renewable energy workforce.",
      image: "/api/placeholder/600/400",
      stats: [
        { label: "Technicians Trained", value: "25" },
        { label: "Women in Program", value: "40%" },
        { label: "Communities Covered", value: "12" },
      ],
    },
    2025: {
      title: "Regional Scaling Details",
      content:
        "Our 2025 plans include expanding operations to neighboring regions and countries, starting with Togo and Côte d'Ivoire. We're also working on establishing formal partnerships with the Ghanaian Ministry of Energy and international development agencies to scale our impact. Our new solar technology will feature improved energy storage solutions and remote monitoring capabilities, allowing us to provide better support and gather valuable data on usage patterns.",
      image: "/api/placeholder/600/400",
      stats: [
        { label: "Target New Regions", value: "3" },
        { label: "International Expansion", value: "2 countries" },
        { label: "New Technology Features", value: "4" },
      ],
    },
  };

  const openModal = (type) => {
    setActiveModal(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openVideoModal = () => {
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
  };

  const openTimelineModal = (year) => {
    setActiveTimelineModal(year);
    setTimelineModalOpen(true);
  };

  const closeTimelineModal = () => {
    setTimelineModalOpen(false);
  };

  // Determine whether content should be visible
  const shouldShow = isInView || forceVisible;

  // Video options for YouTube player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div
      id="about-innovator"
      className="relative bg-gray-950 text-white overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl float-medium"></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-emerald-500/5 blur-3xl float-fast"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMnYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 py-24"
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        {/* Featured Quote - Moved to top and styled prominently */}
        <motion.div
          className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/60 border border-white/10 rounded-3xl p-12 overflow-hidden mb-24 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl float-slow"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl float-medium"></div>
          </div>

          <div className="absolute right-12 top-12">
            <svg
              className="w-24 h-24 text-amber-600/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-8 leading-relaxed italic">
              "Solar energy isn't just about technology—it's about empowering
              rural communities to overcome barriers to development and create
              their own sustainable future."
            </h2>
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500 mr-4">
                <img
                  src={Innovator}
                  alt="Prince - Solar Innovator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold">Prince</p>
                <p className="text-white/60 text-sm">
                  Founder & Solar Engineer
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Innovator Profile */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, x: -40 }}
            animate={shouldShow ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-transparent z-10"></div>
              <img
                src={Innovator}
                alt="Prince - Solar Innovator"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-20"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-30">
                <span className="bg-amber-500/90 text-gray-900 px-4 py-1.5 text-sm font-medium rounded-full inline-block mb-3">
                  Founder & Solar Engineer
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">Prince</h3>
                <p className="text-white/80">
                  Renewable Energy Entrepreneur | Bodomase, Ashanti Region
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={shouldShow ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="backdrop-blur-lg bg-gray-900/40 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-6">
                Pioneering Rural Energy Solutions
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                From Bodomase in the Sekyere Kumawu district, Prince is
                transforming how rural communities access energy. His
                innovations address critical challenges in both agricultural
                productivity and everyday electricity needs.
              </p>
              <p className="text-amber-400/90 mb-8 leading-relaxed text-lg italic border-l-2 border-amber-500 pl-4">
                "I believe that clean energy should be accessible to everyone,
                no matter how remote their location. Our portable solar
                solutions bridge the gap for communities left behind by
                traditional infrastructure."
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => openModal("vision")}
                  className="bg-black/30 backdrop-blur-sm text-white border border-white/10 rounded-full px-5 py-2.5 transition-all duration-300 hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Vision
                </motion.button>

                <motion.button
                  onClick={() => openModal("technology")}
                  className="bg-black/30 backdrop-blur-sm text-white border border-white/10 rounded-full px-5 py-2.5 transition-all duration-300 hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Technology
                </motion.button>

                <motion.button
                  onClick={() => openModal("impact")}
                  className="bg-black/30 backdrop-blur-sm text-white border border-white/10 rounded-full px-5 py-2.5 transition-all duration-300 hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Impact
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pass our openTimelineModal function to the InnovationTimeline component */}
        <InnovationTimeline
          shouldShow={shouldShow}
          onOpenModal={openTimelineModal}
        />

        {/* Values and Philosophy */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="backdrop-blur-lg bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-gray-800/60 border border-amber-700/20 p-8 rounded-2xl shadow-xl overflow-hidden relative"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="w-14 h-14 rounded-xl bg-amber-900/30 border border-amber-600/30 flex items-center justify-center mb-6 relative z-10">
              <svg
                className="w-8 h-8 text-amber-400"
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
            <h4 className="text-xl font-bold text-white mb-3 relative z-10">
              Sustainability
            </h4>
            <p className="text-white/70 relative z-10">
              Providing clean energy solutions that reduce reliance on fossil
              fuels and promote sustainable rural development.
            </p>
          </motion.div>

          <motion.div
            className="backdrop-blur-lg bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-gray-800/60 border border-blue-700/20 p-8 rounded-2xl shadow-xl overflow-hidden relative"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="w-14 h-14 rounded-xl bg-blue-900/30 border border-blue-600/30 flex items-center justify-center mb-6 relative z-10">
              <svg
                className="w-8 h-8 text-blue-400"
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
            <h4 className="text-xl font-bold text-white mb-3 relative z-10">
              Accessibility
            </h4>
            <p className="text-white/70 relative z-10">
              Creating solutions that bring modern energy services to remote
              communities previously left behind by traditional infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="backdrop-blur-lg bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-gray-800/60 border border-emerald-700/20 p-8 rounded-2xl shadow-xl overflow-hidden relative"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="w-14 h-14 rounded-xl bg-emerald-900/30 border border-emerald-600/30 flex items-center justify-center mb-6 relative z-10">
              <svg
                className="w-8 h-8 text-emerald-400"
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
            <h4 className="text-xl font-bold text-white mb-3 relative z-10">
              Agriculture Focus
            </h4>
            <p className="text-white/70 relative z-10">
              Developing technology that specifically addresses the irrigation
              and energy needs of smallholder farmers in rural Ghana.
            </p>
          </motion.div>
        </motion.div>

        {/* Connect with Innovator / Partner With Us */}
        <motion.div
          className="text-center backdrop-blur-xl bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-gray-800/60 border border-white/10 p-10 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Partner With Us
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Join Prince on his journey to bring reliable solar energy and
            agricultural solutions to rural Ghana.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#"
              className="w-12 h-12 backdrop-blur-md bg-black/30 rounded-full flex items-center justify-center text-white/70 border border-white/10 hover:text-amber-400 hover:border-amber-400/30 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </motion.a>

            <motion.a
              href="#"
              className="w-12 h-12 backdrop-blur-md bg-black/30 rounded-full flex items-center justify-center text-white/70 border border-white/10 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </motion.a>

            <motion.button
              onClick={openVideoModal}
              className="w-12 h-12 backdrop-blur-md bg-black/30 rounded-full flex items-center justify-center text-white/70 border border-white/10 hover:text-red-400 hover:border-red-400/30 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </motion.button>

            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium px-6 py-3 rounded-full shadow-lg border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Partner
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Vision/Technology/Impact Modals */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl max-w-md w-full mx-4 overflow-hidden border border-white/10 shadow-2xl"
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
              <div className="p-6 backdrop-blur-md bg-gray-900/90">
                <p className="text-white/80 leading-relaxed">
                  {activeModal && modalContent[activeModal].content}
                </p>
                <div className="mt-6 flex justify-end">
                  <motion.button
                    onClick={closeModal}
                    className="px-4 py-2 backdrop-blur-sm bg-black/30 hover:bg-white/10 text-white rounded-lg font-medium transition-colors border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline Detail Modal */}
      <AnimatePresence>
        {timelineModalOpen && activeTimelineModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeTimelineModal}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl max-w-3xl w-full mx-4 overflow-hidden border border-white/10 shadow-2xl"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">
                  {timelineModalContent[activeTimelineModal].title}
                </h3>
                <span className="bg-white/20 text-white px-3 py-1 text-sm font-bold rounded-full">
                  {activeTimelineModal}
                </span>
              </div>

              <div className="p-8 backdrop-blur-md bg-gray-900/90">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <p className="text-white/80 leading-relaxed mb-8">
                      {timelineModalContent[activeTimelineModal].content}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {timelineModalContent[activeTimelineModal].stats.map(
                        (stat, index) => (
                          <div
                            key={index}
                            className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                          >
                            <div className="text-amber-400 font-bold text-xl">
                              {stat.value}
                            </div>
                            <div className="text-white/60 text-sm">
                              {stat.label}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={timelineModalContent[activeTimelineModal].image}
                      alt={timelineModalContent[activeTimelineModal].title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <motion.button
                    onClick={closeTimelineModal}
                    className="px-6 py-2.5 backdrop-blur-sm bg-black/30 hover:bg-white/10 text-white rounded-lg font-medium transition-colors border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl max-w-4xl w-full mx-4 overflow-hidden border border-white/10 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  EnergizAfriq: Powering Rural Ghana
                </h3>
                <motion.button
                  onClick={closeVideoModal}
                  className="text-white/80 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              <div className="p-6 backdrop-blur-md bg-gray-900/90">
                <div className="aspect-video bg-black/50 overflow-hidden rounded-xl">
                  <YouTubePlayer
                    videoId="dQw4w9WgXcQ" // Replace with your actual YouTube video ID
                    opts={opts}
                    className="w-full"
                  />
                </div>

                <div className="mt-6 text-white/70">
                  <h4 className="text-white font-medium mb-2">
                    About This Video
                  </h4>
                  <p>
                    Watch Prince explain how EnergizAfriq's solar power
                    solutions are transforming rural communities across Ghana,
                    enabling access to reliable electricity and improving
                    agricultural productivity.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutInnovator;
