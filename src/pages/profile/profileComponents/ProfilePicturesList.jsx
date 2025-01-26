import React from 'react';

const ProfilePicture = ({ imgSrc, altText, className }) => (
  <div className={`relative inline-block ${className}`}>
    <img src={imgSrc} alt={altText} className="w-7 h-7  flex-shrink-0 rounded-full border-2 border-white   flex overflow-hidden" />
  </div>
);

const ProfilePicturesList = ({ pictures }) => (
  <div className="flex ">
    {pictures.map((picture, index) => (
      <ProfilePicture 
        key={index} 
        imgSrc={picture.imgSrc} 
        altText={picture.altText} 
        className={index !== 0 ? '-ml-3' : ''}
      />
    ))}
  </div>
);

export default ProfilePicturesList;
