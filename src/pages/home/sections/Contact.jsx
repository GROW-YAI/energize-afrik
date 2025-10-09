import React, { useState } from "react";
import { COMPANY_DATA } from "../../../constants/placeholder";
import { motion } from "framer-motion";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiArrowRightLine,
  RiCheckLine,
} from "react-icons/ri";

import Swal from "sweetalert2";

// Floating animations component
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

    .pulse-subtle {
      animation: pulse-subtle 4s ease-in-out infinite;
    }

    @keyframes pulse-subtle {
      0%,
      100% {
        opacity: 0.8;
      }
      50% {
        opacity: 1;
      }
    }

    .rotate-slow {
      animation: rotate-slow 20s linear infinite;
    }

    @keyframes rotate-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /* Mobile-specific adjustments */
    @media (max-width: 640px) {
      .mobile-padding {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      
      .mobile-text-size {
        font-size: 1.75rem;
      }
      
      .mobile-card-padding {
        padding: 1.5rem;
      }
      
      .mobile-grid-gap {
        gap: 1rem;
      }
    }

    @media (max-width: 768px) {
      .tablet-padding {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
    }
  `}</style>
);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/myzegarl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully. We will get back to you soon.",
          confirmButtonColor: "#CD7F32",
        });

        // Reset form after successful submission
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
          subject: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send message. Please try again later.",
          confirmButtonColor: "#CD7F32",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "An error occurred. Please check your internet connection and try again.",
        confirmButtonColor: "#CD7F32",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-12 md:py-16 lg:py-24 relative overflow-hidden bg-gray-950"
      id="contact"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 mobile-text-size">
              Get In Touch
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Ready to power your community with sustainable solar energy? Contact us today.
            </p>
          </div>
        </motion.div>

        {/* Solar-power theme floating stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16 mobile-grid-gap">
          <motion.div
            className="backdrop-blur-md bg-gray-900/40 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-amber-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Solar Expertise
              </h3>
              <p className="text-white/70 text-sm sm:text-base">
                Consult with our team of engineers specialized in rural solar solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="backdrop-blur-md bg-gray-900/40 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Customized Solutions
              </h3>
              <p className="text-white/70 text-sm sm:text-base">
                Tailored energy plans designed specifically for your community's needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="backdrop-blur-md bg-gray-900/40 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Ongoing Support
              </h3>
              <p className="text-white/70 text-sm sm:text-base">
                Continuous technical assistance and maintenance for all installations.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col lg:grid lg:grid-cols-5 gap-6 md:gap-8 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Contact form with solar-inspired design */}
          <div className="lg:col-span-3 backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/60 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative order-2 lg:order-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500"></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-amber-500/5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-56 h-56 lg:w-80 lg:h-80 rounded-full bg-blue-500/5 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 lg:p-10 relative z-10 mobile-card-padding">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/20 border border-white/10 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent placeholder-white/30 text-white text-sm sm:text-base"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/20 border border-white/10 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent placeholder-white/30 text-white text-sm sm:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/20 border border-white/10 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent placeholder-white/30 text-white text-sm sm:text-base"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/20 border border-white/10 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent placeholder-white/30 text-white text-sm sm:text-base resize-none"
                    placeholder="Tell us about your project or inquiry"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group w-full sm:w-auto flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-amber-500/20 disabled:opacity-70 disabled:hover:from-amber-500 disabled:hover:to-amber-600 min-w-[160px] text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : submitSuccess ? (
                      <span className="flex items-center">
                        <RiCheckLine className="mr-2" /> Message Sent
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <RiArrowRightLine className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Map and contact info */}
          <div className="lg:col-span-2 relative order-1 lg:order-2">
            {/* Contact info card */}
            <motion.div
              className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/60 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-6 md:mb-8 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"></div>
              <div className="p-4 sm:p-6 md:p-8 relative mobile-card-padding">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  Contact Information
                </h3>

                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-black/30 border border-white/10 mr-3 sm:mr-4 flex-shrink-0">
                      <RiMapPinLine className="text-blue-400 text-sm sm:text-base" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs sm:text-sm">
                        {COMPANY_DATA.addresses[0].name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-black/30 border border-white/10 mr-3 sm:mr-4 flex-shrink-0">
                      <RiPhoneLine className="text-blue-400 text-sm sm:text-base" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs sm:text-sm">
                        {COMPANY_DATA.phones[0]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-black/30 border border-white/10 mr-3 sm:mr-4 flex-shrink-0">
                      <RiMailLine className="text-blue-400 text-sm sm:text-base" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs sm:text-sm">
                        {COMPANY_DATA.emails[0]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                  <h4 className="text-white/90 font-medium mb-3 text-sm sm:text-base">
                    Business Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-2 text-xs sm:text-sm">
                    <div className="text-white/60">Monday - Friday:</div>
                    <div className="text-white/90">8:00 AM - 5:00 PM</div>
                    <div className="text-white/60">Saturday:</div>
                    <div className="text-white/90">9:00 AM - 3:00 PM</div>
                    <div className="text-white/60">Sunday:</div>
                    <div className="text-white/90">Closed</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="h-[200px] sm:h-[250px] md:h-[300px] rounded-xl lg:rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5601.671218665893!2d-1.2582292003850373!3d6.893030718035626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbd9b6a5e5851b%3A0x8b08f1086992dea6!2sBodomase!5e0!3m2!1sen!2sgh!4v1741265233116!5m2!1sen!2sgh"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Bodomase, Ghana"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;