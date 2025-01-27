import React from "react";
import { useNavigate } from "react-router-dom";
import teacher from "../../assets/teacher.png";
import clock from "../../assets/clock.png";
import download from "../../assets/Download.png";
import video from "../../assets/video.png";
import E1 from "../../assets/E1.png";
import E2 from "../../assets/E2.png";
import E3 from "../../assets/E3.png";
import E4 from "../../assets/E4.png";
import rating from "../../assets/ratingstar.png";
import see from "../../assets/see.png";

const TeacherCard = ({ id, name, expertise, duration, courses, sales }) => {
  const navigate = useNavigate();
  const studentImages = [E1, E2, E3, E4];

  const handleSeeProfile = () => {
    navigate(`/Portfolio`);
  };

  return (
    <div className="bg-white border-[2px] border-black rounded-lg overflow-hidden shadow-lg max-w-md sm:max-w-lg lg:max-w-sm">
      {/* Top Section */}
      <div className="relative mx-6">
        <img
          src={teacher}
          alt={name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover my-2 rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 ">
        <h3 className="text-black font-gilroy text-sm md:text-lg font-semibold">
          {name}
        </h3>
        <div className="flex justify-between mt-6">
          <p className="inline text-gray-700 text-sm md:text-base mt-2">
            {expertise}
          </p>
          <div className="flex items-center">
            <span className="text-black font-medium text-sm md:text-lg">
              4.5
            </span>
            <img src={rating} alt="Rating" className="ml-2 w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-wrap items-center text-gray-500 text-sm mt-8 gap-x-2 gap-y-1">
          <div className="flex items-center">
            <img src={clock} alt="Clock" className="w-4 h-4 mr-2" />
            <span>{duration}</span>
          </div>
          <span>|</span>
          <div className="flex items-center">
            <img src={video} alt="Video" className="w-4 h-4 mr-2" />
            <span>{courses} Courses</span>
          </div>
          <span>|</span>
          <div className="flex items-center">
            <img src={download} alt="Download" className="w-4 h-4 mr-2" />
            <span>{sales} Sales</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 flex justify-between items-center">
        {/* Student Images and Count */}
        <div className="flex items-center space-x-3">
          <div className="flex -space-x-3 items-center">
            {studentImages.slice(0, 5).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Student ${index + 1}`}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
            ))}
            {studentImages.length > 5 && (
              <span className="text-gray-400 text-sm">
                +{studentImages.length - 5}
              </span>
            )}
          </div>
          <span className="text-gray-800 text-sm sm:text-base">
            +3500 students
          </span>
        </div>

        {/* Profile Button */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleSeeProfile}
        >
          <img
            src={see}
            alt="See All"
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-transparent border-[0px] duration-300 hover:shadow-lg hover:shadow-gray-600 active:scale-[.98] active:duration-75 transition-all ease-in-out "
          />
          <p className="text-gray-800 text-sm sm:text-base hover:underline hover:text-customGreen">
            See Profile
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
