import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiArrowRightLine,
} from "react-icons/ri";

const MinimalistContact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
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
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Cool background with gradient and mesh */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-amber-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMnYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-70"></div>

        {/* Blurred circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-300 mix-blend-multiply opacity-20 blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-300 mix-blend-multiply opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-purple-300 mix-blend-multiply opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="backdrop-blur-lg bg-white/40 rounded-2xl overflow-hidden shadow-lg border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Minimal contact form */}
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-light text-gray-800 mb-10">
                Contact Us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/70 border-0 rounded-lg focus:ring-1 focus:ring-amber-400 placeholder-gray-400 text-gray-700 font-light"
                    placeholder="Name"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/70 border-0 rounded-lg focus:ring-1 focus:ring-amber-400 placeholder-gray-400 text-gray-700 font-light"
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-white/70 border-0 rounded-lg focus:ring-1 focus:ring-amber-400 placeholder-gray-400 text-gray-700 font-light resize-none"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group flex items-center text-sm font-light text-white bg-amber-600 hover:bg-amber-500 py-3 px-5 rounded-lg transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    ) : submitSuccess ? (
                      "Message Sent"
                    ) : (
                      <>
                        Send Message
                        <RiArrowRightLine className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Map and minimal contact info */}
            <div className="relative">
              <div className="h-full w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63391.95321852482!2d-0.9852811743164016!3d6.719332899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb6c3b0a17ecb7%3A0x7db4ca5d8ed585fa!2sBodomase!5e0!3m2!1sen!2sgh!4v1709414889371!5m2!1sen!2sgh"
                  className="w-full h-full min-h-[300px] md:min-h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Bodomase, Ghana"
                ></iframe>
              </div>

              {/* Contact info overlay - glassy effect */}
              <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/40 p-6 border-t border-white/30">
                <div className="flex flex-col space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <RiMapPinLine className="text-amber-600 mr-3" />
                    <span className="text-sm font-light">
                      Bodomase, Ashanti Region, Ghana
                    </span>
                  </div>

                  <div className="flex items-center">
                    <RiPhoneLine className="text-amber-600 mr-3" />
                    <span className="text-sm font-light">+233 20 123 4567</span>
                  </div>

                  <div className="flex items-center">
                    <RiMailLine className="text-amber-600 mr-3" />
                    <span className="text-sm font-light">
                      contact@solarpowerbank.com.gh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MinimalistContact;
