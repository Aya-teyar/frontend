import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully');
      // Navigate to AfterSignup page after successful form submission
      navigate('/AfterSignup');
    } else {
      setErrors(validationErrors);
    }
  };

  const handleregisterClick = () => {
    navigate('/Register'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 bg-white">
      <div className="max-w-xl w-full p-8 shadow-lg rounded-lg">
        <p className="self-center text-2xl font-semibold">Log in to your design account</p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="text-lg font-medium">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-[#66666659] rounded-xl bg-transparent mt-1 p-1"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="flex flex-col">
            <div>
              <label className="text-lg font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-2 border-[#66666659] rounded-xl bg-transparent mt-1 p-1"
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <button className="underline self-end pl-4 ml-4 text-xs hover:text-[#559268]">
              Forgot your password?
            </button>
          </div>

          <div className="flex self-start">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-base font-medium ml-2">
              Remember me
            </label>
          </div>

          <div className="flex flex-col gap-y-4 mt-4">
            <button
              type="submit"
              className="text-lg p-1 active:scale-[.98] active:duration-75 transition-all ease-in-out font-semibold text-white bg-[#559268] rounded-xl"
            >
              Log in
            </button>
            <div className="flex items-center justify-center">
              <hr className="flex-grow border-t-2" />
              <span className="mx-4">OR</span>
              <hr className="flex-grow border-t-2" />
            </div>
            <button className="border-2 border-[#66666659] p-1 rounded-xl flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all ease-in-out">
              <img
                className="h-5 w-5 mr-2"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
              />
              Continue with Google
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mt-6">
            <hr className="border-t-2" />
            <div className="flex flex-col">
              <p className="font-medium self-center pb-1">Don't have an account?</p>
              <button
                className="ml-2 font-semibold border-2 border-[#66666659] p-1 rounded-xl flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all ease-in-out"
                onClick={handleregisterClick}
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
