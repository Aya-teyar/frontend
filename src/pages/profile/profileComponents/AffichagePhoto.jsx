import React from 'react';
import ProfilePicturesList from './ProfilePicturesList';

const AffichagePhoto = () => {
  const profilePictures = [   
    { imgSrc: './src/assets/frame.png', altText: 'Profile 1' },
    { imgSrc: './src/assets/frame2.jpg', altText: 'Profile 2' },
    { imgSrc: './src/assets/frame3.jpeg', altText: 'Profile 3' },
    { imgSrc: './src/assets/OIP.jpeg', altText: 'Profile 4' },
  ];

  return (
    <div className="">
      <ProfilePicturesList pictures={profilePictures} />
    </div>
  );
};

export default AffichagePhoto;
