import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import p1 from "../../assets/person1.png";
import v from "../../assets/Virgule.png";

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const Feedback = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate(); // Initialize the navigate function

  const feedbacks = [
    {
      id: 1,
      name: 'Jenny Wilson',
      role: 'Student',
      feedback: [
        'Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.',
        'Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.',
      ],
    },
    {
      id: 2,
      name: 'Guy Hawkins',
      role: 'Student',
      feedback: [
        'Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.',
        'Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.',
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(feedbacks.length / 2));
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + Math.ceil(feedbacks.length / 2)) % Math.ceil(feedbacks.length / 2));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-28">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 relative inline-block">
          Student <span className="text-teal-500">Feedback</span>
          <div className="absolute bottom-0 left-0 right-0 h-2">
            <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-orange-300 rounded-full"></div>
          </div>
        </h2>
        <p className="text-gray-500 mt-6">
          Various versions have evolved over the years, sometimes by accident,
        </p>
      </div>

      <div className="relative">
        <div className="flex justify-between items-center gap-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeftIcon />
          </button>

          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {feedbacks.map((feedback) => (
                <div key={feedback.id} className="w-1/2 flex-shrink-0 bg-white rounded-xl shadow-lg p-8 relative">
                  <img
                    src={v}
                    alt="Decoration"
                    className="absolute top-1 right-2 w-8 h-8 opacity-80"
                  />
                  <div className="flex items-center gap-4 mb-6 ">
                    <img src={p1} alt={feedback.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="font-bold text-lg">{feedback.name}</h3>
                      <p className="text-gray-500">{feedback.role}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {feedback.feedback.map((text, idx) => (
                      <p key={idx} className="text-gray-600 leading-relaxed">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRightIcon />
          </button>
        </div>

        <div className="absolute right-0 -bottom-12">
          {/* Updated the button to navigate to the feedback form */}
          <button
            onClick={() => navigate('/FeedbackForm')}
            className="text-gray-600 hover:underline"
          >
            Add a Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
