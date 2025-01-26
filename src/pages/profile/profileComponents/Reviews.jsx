import React from 'react'
import ReviewCard from './ReviewCard'
export default function Reviews() {
  const elements = [
    { photo :'./src/assets/frame2.jpg', name:'Celia Sami', note :'straight to the point and great teacher' , time:'a week ago '},
    { photo :'./src/assets/frame2.jpg', name:'Celia Sami', note :'straight to the point and great teacher' , time:'a week ago '},
    { photo :'./src/assets/frame2.jpg', name:'Celia Sami', note :'straight to the point and great teacher' , time:'a week ago '},
    { photo :'./src/assets/frame2.jpg', name:'Celia Sami', note :'straight to the point and great teacher' , time:'a week ago '},
    { photo :'./src/assets/frame2.jpg', name:'Celia Sami', note :'straight to the point and great teacher' , time:'a week ago '},
    { photo :'./src/assets/frame2.jpg', name:'Celia Sami', note :'straight to the point and great teacher' , time:'a week ago '},
  ]
  return (
    <div className="    ">
    {elements.map((element, index) => (
       <ReviewCard 
       key={index} 
       photo={element.photo} 
       name={element.name} 
       note={element.note} 
       time={element.time} 
       
      /> ))} 
   </div>
  )
}
