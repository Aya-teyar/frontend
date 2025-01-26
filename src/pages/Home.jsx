// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/Herosection/Herosection';
import About from '../components/About/About';
import TeacherList from '../components/teacher/TeacherList';
import Feedback from '../components/feedbacks/Feedback';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <TeacherList />
      <Feedback />
    </div>
  );
};

export default Home;