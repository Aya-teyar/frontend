import React, { useState } from "react";
import TeacherCard from "./Teachercard.jsx";
import "tailwindcss/tailwind.css";
import arrow from "../../assets/Arrow.png";

const TeacherList = () => {
  const teachers = [
    {
      name: "Jane Doe",
      expertise: "Expert in Mathematics and Physics",
      duration: "23hr 30min",
      courses: 34,
      sales: 250,
    },
    {
      name: "John Smith",
      expertise: "Expert in Biology and Chemistry",
      duration: "20hr 15min",
      courses: 28,
      sales: 200,
    },
    {
      name: "Emily Johnson",
      expertise: "Expert in Computer Science",
      duration: "25hr 45min",
      courses: 40,
      sales: 300,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < teachers.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="p-14 bg-white text-black">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="my-4 text-3xl font-bold mb-2">
          Meet Our <span className="text-customGreen">Top Teachers</span>
        </h2>
        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative overflow-hidden">
        
        <div className="flex items-end justify-end">
          <button className="  text-customOrange flex justify-center items-center active:scale-[.98] active:duration-75 transition-all ease-in-out  ">
            <span>See All</span>
            <img src={arrow} alt="arrow" className="h-4 w-4" />
          </button>
        </div>

        
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto"
            >
              <TeacherCard
                name={teacher.name}
                expertise={teacher.expertise}
                duration={teacher.duration}
                courses={teacher.courses}
                sales={teacher.sales}
              />
            </div>
          ))}
        </div>

        {/* Carousel Navigation (arrows on the sides) */}
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200"
        >
          <img src={arrow} alt="Previous" className="transform rotate-180 w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === teachers.length - 1}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200"
        >
          <img src={arrow} alt="Next" className="w-4 h-4" />
        </button>
      </div>

      
    </div>
  );
};

export default TeacherList;
