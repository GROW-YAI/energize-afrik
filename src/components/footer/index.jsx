import React from "react";
import {
  SunIcon,
  LeafIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "lucide-react";
import { COMPANY_DATA } from "../../constants/placeholder";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white relative">
      {/* Top subtle wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-yellow-400 to-green-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="xs:col-span-2 lg:col-span-2 xl:col-span-1 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/favicon.ico" 
                alt="logo" 
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <h2 className="text-xl sm:text-2xl font-bold">{COMPANY_DATA.name}</h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg xs:max-w-none">
              {COMPANY_DATA.shortAbout}
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://web.facebook.com/people/Energize-Afrik/61573199951147/"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 p-1"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.instagram.com/energizeafrik?igsh=MW10MGhldWV0NTNh"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 p-1"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="http://www.tiktok.com/@energize.afrik"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 p-1"
                aria-label="Twitter"
              >
                <FaTiktok className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
           
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 pb-2 border-b border-green-600">
              Our Solutions
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3 group">
                <SunIcon className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base group-hover:text-yellow-400 transition-colors duration-300">
                  Portable Solar Power Banks
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <LeafIcon className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base group-hover:text-yellow-400 transition-colors duration-300">
                  Solar-Powered Irrigation
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <SunIcon className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base group-hover:text-yellow-400 transition-colors duration-300">
                  Home Solar Solutions
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <LeafIcon className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base group-hover:text-yellow-400 transition-colors duration-300">
                  Agricultural Energy Systems
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 pb-2 border-b border-green-600">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">
                  Bodomase, Sekyere Kumawu,
                  <br />
                  Ashanti Region, Ghana
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">{COMPANY_DATA.phones[0]}</span>
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-all">{COMPANY_DATA.emails[0]}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © 2025{" "}
              <a href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                {COMPANY_DATA.name}
              </a>
              . All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs sm:text-sm text-gray-400">
              <a href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;