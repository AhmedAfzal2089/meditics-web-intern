import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import {
  FaApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white pt-16 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Subscribe */}
        <div>
          {/* Replace with your local logo */}
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://meditics.temptics.com/assets/img/logo-white.svg"
              alt=""
            />
          </div>
          <p className="text-sm text-gray-300 mb-6">
            It is a long established fact that a reader will be distracted the
            readable content of a page when looking at layout.
          </p>

          {/* Email Subscribe */}
          <div className="flex bg-white rounded-full overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-2 text-sm text-gray-800 outline-none"
            />
            <button className="bg-blue-500 text-white px-4 text-sm font-semibold flex items-center gap-1">
              SUBSCRIBE
            </button>
          </div>

          {/* Socials */}
          <div className="flex gap-3 mt-6">
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600">
              <Facebook size={16} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600">
              <Twitter size={16} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600">
              <Youtube size={16} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold border-b border-blue-500 w-fit pb-1 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>General Health Check-Ups</li>
            <li>Stress & Lifestyle Counseling</li>
            <li>Vaccinations & Immunizations</li>
            <li>Referral to Specialists</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold border-b border-blue-500 w-fit pb-1 mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Pages</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold border-b border-blue-500 w-fit pb-1 mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>102/ B Street, New Elephant Road, Sandigo, USA</li>
            <li>
              <span className="font-semibold text-white">Email Us</span>
              <br />
              info@exmple.com
            </li>
            <li>
              <span className="font-semibold text-white">Call Now</span>
              <br />
              +208-6666-0112
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-600 pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
        {/* Left */}
        <div>
          © <span className="text-blue-400 font-semibold">Meditics</span> 2025.
          All Rights Reserved.
        </div>

        {/* Center - Payment Logos */}
        <div className="flex gap-3 items-center">
          <FaGooglePay size={32} />
          <FaApplePay size={32} />
          <FaCcPaypal size={32} />
          <FaCcVisa size={32} />
          <FaCcMastercard size={32} />
        </div>

        {/* Right */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            Terms of use
          </a>
          <a href="#" className="hover:text-white">
            Privacy Environmental Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
