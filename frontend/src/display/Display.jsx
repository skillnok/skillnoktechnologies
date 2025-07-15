import React from "react";
import bannerImg from "../assets/skillnok_desktop.png";
import logo from "../assets/skillnoktechnologieslogo.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Display = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen font-sans">
      {/* Left Side Image (hidden on mobile) */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={bannerImg}
          alt="Login Banner"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 bg-[#002B45] text-white flex flex-col justify-center items-center px-6 md:px-10 min-h-screen">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Skillnok Logo" className="w-24 mb-4 rounded-full" />
          <h1 className="text-2xl font-bold mb-2 text-center">WELCOME BACK</h1>
          <p className="text-sm text-center mb-6 px-2">
            To keep connected with us please login with your personal info
          </p>

          <button className="bg-[#5DA9A4] hover:bg-[#4d8e8a] text-white px-8 py-2 rounded-full font-semibold transition-all cursor-pointer">
            SIGN IN
          </button>

          <button className="bg-[#5DA9A4] hover:bg-[#4d8e8a] text-white px-8 py-2 rounded-full font-semibold mt-4 transition-all cursor-pointer">
            SIGN UP
          </button>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-xl">
            <a
              href="/"
              className="p-2 rounded-full bg-white text-[#E1306C] hover:scale-110 transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="p-2 rounded-full bg-white text-[#1877F2] hover:scale-110 transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href="/"
              className="p-2 rounded-full bg-white text-[#1DA1F2] hover:scale-110 transition-all"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
