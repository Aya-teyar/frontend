import React, { useState } from 'react';
import { Eye, EyeOff, Upload } from 'lucide-react';

const TeacherSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    profileName: '',
    email: '',
    password: '',
    diploma: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData({
        ...formData,
        diploma: e.target.files[0]
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 bg-white">
      <div className="max-w-xl w-full p-8  shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Create an account
        </h1>
        
        <div className="text-center mb-8 text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-customGreen underline hover:underline">
            Log in
          </a>
        </div>

        <form className="space-y-6">
          {/* Profile Name Input */}
          <div>
            <input
              type="text"
              name="profileName"
              placeholder="Enter your profile name"
              className="w-full border-2 border-[#66666659] rounded-xl bg-transparent mt-1 p-1 focus:ring-2 focus:ring-customGreen focus:border-transparent"
              onChange={handleInputChange}
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full border-2 border-[#66666659] rounded-xl bg-transparent mt-1 p-1 focus:ring-2 focus:ring-customGreen focus:border-transparent"
              onChange={handleInputChange}
            />
          </div>

          {/* Password Input */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                className="w-full border-2 border-[#66666659] rounded-xl bg-transparent mt-1 p-1 focus:ring-2 focus:ring-customGreen focus:border-transparent"
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>

          {/* Diploma Upload */}
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Upload className="text-gray-400" size={20} />
                <div>
                  <p className="font-medium">Upload your diploma</p>
                  <p className="text-sm text-gray-500">
                    JPG, PNG or PDF, file size no more than 10MB
                  </p>
                </div>
              </div>
              <label className="cursor-pointer text-customGreen text-sm hover:underline">
                SELECT FILE
                <input
                  type="file"
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="text-sm text-gray-600">
            By creating an account, you agree to the{' '}
            <a href="#" className="text-customGreen hover:text-black underline">Terms of use</a>
            {' '}and{' '}
            <a href="#" className="text-customGreen hover:text-black underline">Privacy Policy</a>.
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-customGreen text-white py-3 rounded-lg hover:bg-gray-400  duration-200  active:scale-[.98] active:duration-75 transition-all  ease-in-out"
          >
            Create an account
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR Continue with</span>
            </div>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-200 rounded-full hover:bg-gray-50 duration-200  active:scale-[.98] active:duration-75 transition-all  ease-in-out"
          >
            <img
                className="h-5 w-5 mr-2"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
              />
            <span>Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherSignup;
