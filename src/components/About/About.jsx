import React from 'react';
import student from '../../assets/student.png';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-16 lg:py-28 bg-white">
      {/* Left Section: Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img
          src={student}
          alt="Student studying"
          className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
        />
      </div>

      {/* Right Section: Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight max-w-2xl">
          Access to learning anytime and anywhere
        </h1>

        <div className="space-y-4 max-w-2xl">
          <p className="text-sm sm:text-base lg:text-lg text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500">
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Stats Grid with Lines */}
        <div className="relative w-full max-w-xl py-8">
          {/* Lines Container */}
          <div className="absolute inset-0">
            {/* Vertical Dashed Line */}
            <div className="absolute left-1/2 h-full border-l-2 border-dashed border-gray-300"></div>
            {/* Horizontal Dashed Line */}
            <div className="absolute top-1/2 w-full border-t-2 border-dashed border-gray-300"></div>
          </div>

          <div className="grid grid-cols-2 gap-8 relative z-10">
            {/* Stat Items */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-orange-500 mb-1">300+</h3>
              <p className="text-orange-500 text-sm lg:text-base">Experience Teacher</p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-1">70+</h3>
              <p className="text-gray-600 text-sm lg:text-base">Expert Learners</p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-1">100+</h3>
              <p className="text-gray-600 text-sm lg:text-base">Successful Students</p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-orange-500 mb-1">80+</h3>
              <p className="text-orange-500 text-sm lg:text-base">Happy Students</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-customGreen hover:bg-customGreen/90 text-white font-medium text-base sm:text-lg px-6 py-3 rounded-lg shadow-lg transition-all duration-200 active:scale-95">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;