import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Eye, EyeOff, Upload } from 'lucide-react';

const TeacherSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    profileName: '',
    email: '',
    password: '',
    diploma: null,
  });
  const navigate = useNavigate(); // Initialize the navigate function

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData({
        ...formData,
        diploma: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form validation or API call
    const { profileName, email, password } = formData;
    if (profileName && email && password) {
      console.log('Form submitted:', formData);

      // Navigate to the studentDashboard
      navigate('/TeacherSchedule');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 bg-white">
      <div className="max-w-xl w-full p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold text-center mb-4" onClick={handleSubmit}>Create an Account</h1>

        <div className="text-center mb-6 text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-customGreen underline hover:text-customGreenDark">
            Log in
          </a>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Profile Name Input */}
          <div>
            <input
              type="text"
              name="profileName"
              placeholder="Enter your profile name"
              className="w-full border-2 border-[#66666659] rounded-xl bg-transparent mt-1 p-2 focus:ring-2 focus:ring-customGreen focus:outline-none"
              onChange={handleInputChange}
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full border-2 border-[#66666659] rounded-xl bg-transparent mt-1 p-2 focus:ring-2 focus:ring-customGreen focus:outline-none"
              onChange={handleInputChange}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              className="w-full border-2 border-[#66666659] rounded-xl bg-transparent mt-1 p-2 focus:ring-2 focus:ring-customGreen focus:outline-none"
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Use 8 or more characters with a mix of letters, numbers, and symbols.
            </p>
          </div>

          {/* Terms Agreement */}
          <div className="text-sm text-gray-600">
            By creating an account, you agree to the{' '}
            <a href="#" className="text-customGreen hover:text-black underline">
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="#" className="text-customGreen hover:text-black underline">
              Privacy Policy
            </a>
            .
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-customGreen text-white py-3 rounded-lg hover:bg-customGreenDark transition duration-200 active:scale-95"
          >
            Create an Account
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-50 px-2 text-gray-500">OR Continue with</span>
            </div>
          </div>

          {/* Google Sign-In */}
          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200 active:scale-95"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              className="h-5 w-5 mr-2"
            />
            <span>Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherSignup;
