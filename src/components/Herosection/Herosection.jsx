import React from "react";
import hero from "../../assets/hero.png";
import star from "../../assets/Star 2.png";
import stars from "../../assets/image 2.png";
import x from "../../assets/x.png";
import bg from "../../assets/HeroBG.png";
import vector from "../../assets/Vector.png";

const HeroSection = () => {
  return (
    <section className="bg-white h-auto lg:h-screen mb-28 flex items-center justify-center relative overflow-hidden mx-auto px-4 py-28">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 lg:mr-8 px-6 sm:px-0">
          <p className="text-gray-700 font-gilroy mb-4 text-lg sm:text-xl md:text-2xl">
            Learn With ______
          </p>
          <h1 className="text-4xl font-gilroy font-bold sm:text-5xl lg:text-6xl leading-tight text-black">
            <span className="text-customGreen">Find</span> Your Perfect Learn Teacher In{" "}
            <span className="text-customGreen">DZ -Teacher</span>
            <img src={vector} className="inline" alt="Vector" />
          </h1>
          <p className="text-gray-500 font-gilroy mt-6 font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            He preference connection astonished on of ye. Partiality on or continuing in particular
            principles as. Do believing oh disposing to supported allowance we.
          </p>

          {/* Search Bar */}
          <div className="mt-8 p-1 h-12 w-full md:w-80 lg:w-96 flex items-center rounded border border-customGreen bg-white shadow-customGreen mx-auto lg:mx-0">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 p-2 rounded text-black focus:outline-none"
            />
            
            <button className="bg-black text-white h-10 w-24 md:w-32 rounded hover:opacity-90 drop-shadow-md">
              Get Learn Today
            </button>
          </div>

          {/* Ratings */}
          <div className="mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="text-customGreen sm:flex sm:flex-col sm:space-x-6">
              {/* Rating Stars */}
              <div className="flex sm:space-x-1">
                <span>
                  <img src={star} className="w-4 h-4 sm:w-6 sm:h-6" alt="star" />
                </span>
                <span className="text-black font-gilroy font-semibold ml-2 text-sm sm:text-base">TrusTeach</span>
              </div>
              <span className="sm:inline">
                <img src={stars} className="ml-0 w-14 h-6 sm:w-20 sm:h-8" alt="stars" />
              </span>
            </div>
            <div className="flex -space-x-2">
              {/* Replace with avatars */}
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <span className="w-8 h-8 bg-customGreen text-white flex items-center justify-center text-sm font-bold rounded-full">
                +1k
              </span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full lg:w-1/2 lg:h-full flex items-end justify-end">
          <img
            src={bg}
            className="absolute inset-0  w-[1000px] h-full object-cover"
            alt="Background"
          />
          <div className="relative max-w-full mx-0 my-0 p-4 sm:p-6 lg:p-8">
            <img
              src={hero}
              alt="Teacher"
              className="relative object-cover h-80 sm:h-96 lg:h-[540px] transform lg:-translate-x-72 lg:translate-y-8 "
            />
            <div className="absolute top-10 right-4 sm:top-20 sm:right-20 bounce-horizontal-animation">
              <img
                src={x}
                alt="X"
                className="w-16 h-16 sm:w-24 sm:h-24"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;