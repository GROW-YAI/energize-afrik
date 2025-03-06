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

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white relative">
      {/* Top subtle wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-yellow-400 to-green-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/favicon.ico" alt="logo" />
              <h2 className="text-2xl font-bold">{COMPANY_DATA.name}</h2>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              {COMPANY_DATA.shortAbout}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-yellow-400 pb-2 border-b border-green-600">
              Our Solutions
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <SunIcon className="h-4 w-4 text-yellow-400 transition-transform duration-300 group-hover:rotate-90" />
                <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">
                  Portable Solar Power Banks
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <LeafIcon className="h-4 w-4 text-yellow-400 transition-transform duration-300 group-hover:rotate-90" />
                <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">
                  Solar-Powered Irrigation Systems
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <SunIcon className="h-4 w-4 text-yellow-400 transition-transform duration-300 group-hover:rotate-90" />
                <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">
                  Home Solar Solutions
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <LeafIcon className="h-4 w-4 text-yellow-400 transition-transform duration-300 group-hover:rotate-90" />
                <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">
                  Agricultural Energy Systems
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-yellow-400 pb-2 border-b border-green-600">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Bodomase, Sekyere Kumawu,
                  <br />
                  Ashanti Region, Ghana
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">{COMPANY_DATA.phones[0]}</span>
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">{COMPANY_DATA.emails[0]}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex justify-center align-middle border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 {COMPANY_DATA.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
