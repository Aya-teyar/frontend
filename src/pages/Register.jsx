import React from 'react';
import { useNavigate } from 'react-router-dom';

import StudentSignup from '../assets/studentsignup.png';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-2xl p-8">
        <h1 className="text-3xl font-semibold text-center mb-12">
          Register in <span className="text-customGreen">DZ</span>-Teacher as
        </h1>

        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Student Card */}
          <button
            className="group p-8 bg-white rounded-2xl border shadow-sm hover:shadow-md  duration-200  active:scale-[.98] active:duration-75 transition-all  ease-in-out"
            onClick={() => navigate('/studentsignup')}
          >
            <img
              src={StudentSignup}
              alt="Student illustration"
              className="w-64 h-64 mx-auto mb-4 object-contain"
            />
            <p className="text-xl text-center font-medium">Student</p>
          </button>

          {/* Teacher Card */}
          <button
            className="group p-8 bg-white border rounded-2xl shadow-sm hover:shadow-md  duration-200  active:scale-[.98] active:duration-75 transition-all  ease-in-out"
            onClick={() => navigate('/TeacherSignup')}
          >
            <img
              src={TeacherSignup}
              alt="Teacher illustration"
              className="w-64 h-64 mx-auto mb-4 object-contain"
            />
            <p className="text-xl text-center font-medium">Teacher</p>
          </button>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-500">or</p>
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-customGreen text-white py-4 px-6 rounded-xl hover:bg-gray-400  duration-200 font-medium  active:scale-[.98] active:duration-75 transition-all  ease-in-out"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
