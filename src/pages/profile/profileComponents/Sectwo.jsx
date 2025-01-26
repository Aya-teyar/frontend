import React, { useState } from 'react';
import Overview from './Overview';
import Groups from './Groups';
import Reviews from './Reviews';
import { RiGroupLine } from "react-icons/ri";
import { VscCodeReview } from "react-icons/vsc";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Sectwo() {
  const [activeContent, setActiveContent] = useState('Overview');

  const handleClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-16 ml-8'>
        <button 
          onClick={() => handleClick('Overview')} 
          className={`flex gap-2 items-center pb-2 ${activeContent === 'Overview' ? 'border-b-2 border-green-500' : ''}`}
        >
          <AiOutlineInfoCircle />
          <p className='text-lg font-medium'>Overview</p>
        </button> 
        <button 
          onClick={() => handleClick('Groups')} 
          className={`flex gap-2 items-center pb-2 ${activeContent === 'Groups' ? 'border-b-2 border-green-500' : ''}`}
        >
          <RiGroupLine />
          <p className='text-lg font-medium'>Groups</p>
        </button> 
        <button 
          onClick={() => handleClick('Reviews')} 
          className={`flex gap-2 items-center pb-2 ${activeContent === 'Reviews' ? 'border-b-2 border-green-500' : ''}`}
        >
          <VscCodeReview />
          <p className='text-lg font-medium'>Reviews</p>
        </button> 
      </div>
      <div className='mt-10 ml-8'>
        {activeContent === 'Overview' && <Overview />}
        {activeContent === 'Groups' && <Groups />} 
        {activeContent === 'Reviews' && <Reviews />} 
      </div>
    </div>
  );
}
