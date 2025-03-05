// Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaSun, FaBars, FaTimes } from "react-icons/fa";

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
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly before reaching section

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

      // If no section is active (e.g., at the top of the page)
      if (scrollPosition < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleSectionScroll);
    handleSectionScroll(); // Initial check

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
        className={`relative transition-colors ${
          isActive
            ? "text-amber-500 font-medium"
            : "text-gray-800 hover:text-amber-500"
        }`}
        onClick={() => {
          if (isDrawerOpen) setIsDrawerOpen(false);
        }}
      >
        {label}
        {isActive && (
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 rounded-full"></span>
        )}
      </a>
    );
  };

  const MobileNavLink = ({ href, label, section }) => {
    const isActive = activeSection === section;

    return (
      <a
        href={href}
        className={`transition-colors px-4 py-3 ${
          isActive
            ? "bg-amber-50 text-amber-500 font-medium border-l-4 border-amber-500"
            : "text-gray-800 hover:bg-amber-50 hover:text-amber-500"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      >
        {label}
      </a>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-4 backdrop-blur-lg bg-white/80 mt-2 w-[95%] mx-auto rounded-full shadow-2xl "
            : "py-4 backdrop-blur-3xl bg-amber-50"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img src="/favicon.ico" alt="logo" />
              <span className="font-bold text-xl text-gray-800">
                EnergizAfriq
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
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
                href="https://paystack.com"
                target="_blank"
                className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
              >
                Shop
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="text-gray-800 focus:outline-none"
                aria-label="Open menu"
              >
                <FaBars size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-64 backdrop-blur-lg bg-white/100 shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 b">
            <div className="flex items-center space-x-2">
              <div className="bg-amber-500 text-white p-2 rounded-full">
                <FaSun />
              </div>
              <span className="font-bold text-gray-800">SolarLife</span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="flex flex-col space-y-1">
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
          <div className="p-4 border-t">
            <a
              href="#contact"
              className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors text-center block"
              onClick={() => setIsDrawerOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
