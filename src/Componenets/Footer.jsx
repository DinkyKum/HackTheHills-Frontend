import React from "react";
import { Twitter, Youtube, Facebook, Truck, Phone, Mail, MapPin, Heart } from "lucide-react";

const FooterSec = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">ACME Industries</h3>
            <p className="text-gray-400 leading-relaxed">
              Pioneering innovation since 1990. We're committed to delivering excellence in every service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="inline-flex items-center hover:text-blue-400 transition-colors duration-200">
                  <Heart className="w-4 h-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-flex items-center hover:text-blue-400 transition-colors duration-200">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </li>
              <li>
                <a href="/Truck" className="inline-flex items-center hover:text-blue-400 transition-colors duration-200">
                  <Truck className="w-4 h-4 mr-2" />
                  Schedule Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-blue-400" />
                <span className="text-gray-400">123 Innovation Drive, Tech Valley, CA 94043</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <a href="mailto:contact@acme.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  contact@acme.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ACME Industries Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSec;