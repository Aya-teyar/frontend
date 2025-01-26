import React, { useState } from 'react';
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';
import { BiLike, BiDislike } from 'react-icons/bi';

const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className='flex items-start'>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} onClick={() => onRatingChange(value)}>
          {value <= rating ? (
            <TiStarFullOutline className='text-yellow-500' />
          ) : (
            <TiStarOutline className='text-yellow-500' />
          )}
        </span>
      ))}
    </div>
  );
};

const ReviewCard = ({ photo, name, time, note }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-1'>
          <img
            src={photo}
            alt=''
            className='w-9 h-9 flex-shrink-0 rounded-full border-2 border-white flex overflow-hidden'
          />
          <p className='font-medium'>{name}.</p>
        </div>
        <p className='text-xs text-gray-600 whitespace-nowrap overflow-hidden'>
          {time}
        </p>
      </div>
      <div className='mt-2 text-gray-700'>{note}</div>
      <div className='flex items-start justify-between mt-2'>
        <StarRating rating={rating} onRatingChange={handleRatingChange} />
        <div className='flex gap-0 mb-9'>
          <BiLike />
          <BiDislike />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

/*mport React from 'react'
import { TiStarOutline } from "react-icons/ti";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const ReviewCard = ({ photo , name , time , note  }) => (
    <div>
        <div className=' flex items-center gap-3 '>
        <div className=' flex items-center gap-1 '>
        <img src={photo} alt='' className="w-9 h-9  flex-shrink-0 rounded-full border-2 border-white   flex overflow-hidden" />
        <p className=' font-medium'>{name}.</p>
        </div>
        <p className=' text-xs text-gray-600 whitespace-nowrap overflow-hidden  '>{time}</p>
        </div>
        <div className=' mt-2 text-gray-700 '>{note}</div>
        
        <div className=' flex items-start justify-between mt-2 ' >
            <div className=' flex items-start mb-9 '>
            <TiStarOutline className=' text-yellow-500' />
            <TiStarOutline className=' text-yellow-500' />
            <TiStarOutline className=' text-yellow-500' />
            <TiStarOutline className=' text-yellow-500' />
            <TiStarOutline className=' text-yellow-500' />
            </div>
            <div className=' flex gap-0 mb-9 '>
            <BiLike />
            <BiDislike />
            </div>

        </div>
    </div>
    export default ReviewCard
  ) */
    