import React from "react";
import logo from "../../assets/logo.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import phone from "../../assets/phone.png";
import map from "../../assets/map.png";
import google from "../../assets/googleplus.png";
import facebook from "../../assets/Facebook.png";
const Footer = () => {
  return (
    <footer className="bg-customGreen text-white pb-4 ">
      
      <div className="container   my-0 flex flex-col lg:flex-row justify-between items-center lg:items-center">
        {/* Left Section */}
        <div className="mb-8 ml-40 lg:mb-0 ">
          <div className="flex place-items-center  justify-start   text-2xl font-bold text-customGreen mt-[0.5px] mb-[0.1px] p-[1px] ">
            
              <img
              src={logo}
              alt="logo"
              className=" px-0 -mr-9 mt-9   h-28 w-28 rounded-full object-cover -translate-y-3 -translate-x-4  "
            />
            <span className="ml-0 text-white">
              DZ<span className="text-black">-Teacher</span>
            </span>
          </div>
          
          <p className="text-sm -mt-[20px] text-white leading-relaxed max-w-sm">
            Hello, we are DZ-Teacher, trying to make an effort to put the right people for you to
            get the best results. Just insight.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-sm mr-20 mt-24 text-gray-200">
          <div className="mb-4">
            <p> <img src={map} alt="location" className="inline mr-1 mb-4"/>ABC Company, 123 East, 17th Street, St. Louis 10001</p>
            <p><img src={phone} alt="call" className="inline mr-1 mb-4"/> (123) 456-7890</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Social Media</span>
            <a href="#" className="hover:text-gray-400">
              
              <i className="fab fa-facebook"><img src ={facebook} alt="facebook"/></i>
            </a>
            <a href="#" className="hover:text-gray-400">
            
              <i className="fab fa-twitter"><img src ={twitter} alt="twitter"/></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin"><img src ={linkedin} alt="linkedin"/></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"><img src ={instagram} alt="instagram"/></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-google-plus"><img src ={google} alt="google"/></i>
            </a>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="border-t border-gray-500 mt-8  pt-4 text-sm text-center lg:text-left ">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 lg:mb-0">
            <a href="#" className="hover:underline">
              ABOUT US
            </a>
            <a href="#" className="hover:underline">
              CONTACT US
            </a>
            <a href="#" className="hover:underline">
              HELP
            </a>
            <a href="#" className="hover:underline">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:underline">
              DISCLAIMER
            </a>
          </div>
          <p className="text-gray-300">Copyright © 2022 • ABC Company.</p>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
