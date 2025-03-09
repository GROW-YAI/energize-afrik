// Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaSun, FaBars, FaTimes, FaBatteryFull } from "react-icons/fa";
import { COMPANY_DATA } from "../../constants/placeholder";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sections = [
      { id: "about-product", name: "features" },
      { id: "about-innovator", name: "innovator" },
      { id: "contact", name: "contact" },
    ];

    const handleSectionScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.name);
            return;
          }
        }
      }

      if (scrollPosition < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleSectionScroll);
    handleSectionScroll();

    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, []);

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  const NavLink = ({ href, label, section }) => {
    const isActive = activeSection === section;

    return (
      <a
        href={href}
        className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
          isActive
            ? "text-amber-400 font-medium bg-white/10 backdrop-blur-md"
            : "text-white/90 hover:text-amber-400 hover:bg-white/5"
        }`}
        onClick={() => {
          if (isDrawerOpen) setIsDrawerOpen(false);
        }}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-amber-400 rounded-full"></span>
        )}
      </a>
    );
  };

  const MobileNavLink = ({ href, label, section }) => {
    const isActive = activeSection === section;

    return (
      <a
        href={href}
        className={`transition-all duration-300 px-4 py-3 rounded-lg ${
          isActive
            ? "bg-gray-800/40 text-amber-400 font-medium border-l-2 border-amber-400"
            : "text-white/90 hover:bg-gray-800/20 hover:text-amber-400"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      >
        {label}
      </a>
    );
  };

  return (
    <>
      {/* Floating Navbar with Glass Effect */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 mt-4 w-[94%] mx-auto rounded-full shadow-xl"
            : "py-2 "
        }`}
      >
        <div
          className={`${
            scrolled
              ? "bg-gray-900/70 backdrop-blur-xl border border-white/10"
              : "bg-transparent  rounded-none"
          } w-full h-full absolute inset-0 rounded-full transition-all duration-500`}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group">
              <img src="/favicon.ico" alt="logo" />
              <div>
                <span className="font-bold text-xl text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  EnergizAfriq
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-amber-400 transition-all duration-300"></div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <NavLink
                href="#about-product"
                label="Features"
                section="features"
              />
              <NavLink
                href="#about-innovator"
                label="The Innovator"
                section="innovator"
              />
              <NavLink href="#contact" label="Contact" section="contact" />
              <a
                href={COMPANY_DATA.storeFrontLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5 border border-white/10"
              >
                Shop
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="text-white hover:text-amber-400 focus:outline-none transition-colors p-2 rounded-full bg-white/10 backdrop-blur-md"
                aria-label="Open menu"
              >
                <FaBars size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-opacity duration-300 md:hidden ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      {/* Drawer with Glass Effect */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-72 bg-gray-900/90 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-500 ease-in-out md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-amber-500/5 blur-2xl float-slow"></div>
          <div className="absolute bottom-1/3 left-1/3 w-60 h-60 rounded-full bg-blue-500/5 blur-2xl float-medium"></div>
        </div>

        <div className="flex flex-col h-full relative z-10">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 text-white p-2 rounded-full shadow-lg">
                <FaSun size={18} />
              </div>
              <span className="font-bold text-xl text-white">EnergizAfriq</span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-white/80 hover:text-white focus:outline-none bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <div className="flex flex-col space-y-2">
              <MobileNavLink
                href="#about-product"
                label="Features"
                section="features"
              />
              <MobileNavLink
                href="#about-innovator"
                label="The Innovator"
                section="innovator"
              />
              <MobileNavLink
                href="#products"
                label="Products"
                section="products"
              />
              <MobileNavLink
                href="#contact"
                label="Contact"
                section="contact"
              />
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-white/10">
            <a
              href={COMPANY_DATA.storeFrontLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-lg transition-all duration-300 text-center block shadow-lg border border-white/10"
              onClick={() => setIsDrawerOpen(false)}
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Add the floating animation styles */}
      <style jsx>{`
        .float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        .float-medium {
          animation: float-medium 12s ease-in-out infinite;
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
      `}</style>
    </>
  );
};

export default Navbar;
