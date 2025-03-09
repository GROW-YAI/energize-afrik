import React, { useState } from "react";
import { COMPANY_DATA } from "../../../constants/placeholder";
import { motion } from "framer-motion";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiArrowRightLine,
  RiCheckLine,
  RiSendPlaneLine,
  RiSunLine,
  RiLightbulbFlashLine,
  RiPlugLine,
} from "react-icons/ri";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section
      className="py-24 relative overflow-hidden bg-gray-950"
      id="contact"
    >
      {/* <FloatingAnimations /> */}

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
          </div>
        </motion.div>

        {/* Solar-power theme floating stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="backdrop-blur-md bg-gray-900/40 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">
                Solar Expertise
              </h3>
              <p className="text-white/70">
                Consult with our team of engineers specialized in rural solar
                solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="backdrop-blur-md bg-gray-900/40 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">
                Customized Solutions
              </h3>
              <p className="text-white/70">
                Tailored energy plans designed specifically for your community's
                needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="backdrop-blur-md bg-gray-900/40 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">
                Ongoing Support
              </h3>
              <p className="text-white/70">
                Continuous technical assistance and maintenance for all
                installations.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-5 gap-8 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Contact form with solar-inspired design */}
          <div className="md:col-span-3 backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/60 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500"></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="p-8 md:p-10 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                {/* <span className="inline-block w-8 h-8 bg-amber-500 rounded-full mr-3"></span> */}
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent placeholder-white/30 text-white"
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
                      className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent placeholder-white/30 text-white"
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
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent placeholder-white/30 text-white"
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
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent placeholder-white/30 text-white resize-none"
                    placeholder="Tell us about your project or inquiry"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-amber-500/20 disabled:opacity-70 disabled:hover:from-amber-500 disabled:hover:to-amber-600 min-w-[160px]"
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
          <div className="md:col-span-2 relative">
            {/* Contact info card */}
            <motion.div
              className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/60 rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-8 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"></div>
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  {/* <span className="inline-block w-8 h-8 bg-blue-500 rounded-full mr-3"></span> */}
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/30 border border-white/10 mr-4 flex-shrink-0">
                      <RiMapPinLine className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">
                        {COMPANY_DATA.addresses[0].name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/30 border border-white/10 mr-4 flex-shrink-0">
                      <RiPhoneLine className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">
                        {COMPANY_DATA.phones[0]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/30 border border-white/10 mr-4 flex-shrink-0">
                      <RiMailLine className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">
                        {COMPANY_DATA.emails[0]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-white/90 font-medium mb-3">
                    Business Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
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
              className="h-[300px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
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
