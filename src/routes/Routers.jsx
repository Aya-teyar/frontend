import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../components/About/About';
import Home from '../pages/Home';
import TeacherSignup from '../pages/TeacherSignup';
import StudentSignup from '../pages/Studentsignup'; // Adjusted capitalization for consistency
import Login from '../pages/Login';
import Register from '../pages/Register';
import TeacherList from '../components/teacher/TeacherList';
import AfterLogin from '../pages/AfterLogin';
import FeedbackForm from '../pages/FeedbackForm';
import Portfolio from '../pages/profile/Portfolio.jsx';
import StudentSchedule from '../Dashboards/StudentDshoboard/StudentSchedule.jsx';
import TeacherSchedule from '../Dashboards/TeacherDashboard/TeacherSchedule.jsx';
import ContactUs from '../pages/ContactUs.jsx';
import Studentgroup from '../Dashboards/StudentDshoboard/Studentgroup.jsx'
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teacherslist" element={<TeacherList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/teachersignup" element={<TeacherSignup />} /> {/* Fixed path */}
      <Route path="/studentsignup" element={<StudentSignup />} /> {/* Fixed path */}
      <Route path="/register" element={<Register />} /> {/* Fixed path */}
      <Route path="/about" element={<About />} />
      <Route path="/afterLogin" element={<AfterLogin />} /> 
      <Route path="/StudentSchedule" element={< StudentSchedule/>} />
      <Route path="/Studentgroup" element={< Studentgroup/>} /> 
      <Route path="/TeacherSchedule" element={< TeacherSchedule/>} /> 
      <Route path="/Portfolio" element={<Portfolio />} /> 
    <Route path="/Feedbackform" element={<FeedbackForm />} /> 
    <Route path="/ContactUs" element={<ContactUs />} /> 
    </Routes>

  );
};

export default Routers;
