import React, { useState } from "react";

const FeedbackForm = () => {
  const [rating, setRating] = useState(3);

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 p-6 max-w-5xl mx-auto ">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h3 className="text-gray-500 text-sm uppercase">— Submit Your Feedback</h3>
        <h1 className="text-3xl font-bold mt-2 mb-4">
          Fill the form to submit your feedback
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                id="name"
                placeholder="John Carter"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-500 focus:border-green-500"
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">👤</span>
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus: focus:border-green-500"
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">✉️</span>
            </div>
          </div>

          {/* Rating Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Your service rating
            </label>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? "text-yellow-300" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Field */}
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
              Additional feedback
            </label>
            <textarea
              id="feedback"
              placeholder="If you have any additional feedback, please type it in here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>

          {/* Privacy Policy */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="privacy"
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
              I have read and accept the Privacy Policy.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-40 bg-customGreen text-white py-2 font-medium hover:bg-gray-400 rounded-2xl border shadow-sm hover:shadow-md  duration-200  active:scale-[.98] active:duration-75 transition-all  ease-in-out"
          >
            Submit feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
