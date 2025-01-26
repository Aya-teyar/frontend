import React from 'react';
import { TiStarOutline } from "react-icons/ti";
import { LuGraduationCap } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa6";
import { PiVideoFill } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
export default function SecOne() {
    const address = " Bejaia, Algeria"; 
    const mapLink = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
  return (
    <div className='    bg-[#FFF9F5]'>
        <div className='    flex flex-col lg:flex-row     items-center justify-between mx-12  '>
         <div className='  order-2 lg:order-1 self-start lg:self-center   ' >
            <p className='text-lg font-bold mt-0  '>Teacher Portfolio</p>
            <p className=' text-xl sm:text-2xl lg:text-3xl font-bold mt-4'>Mohamed Amine - Math Teacher -</p>
            <p className='text-base  font-medium mt-6'>Product Management Masterclass, you will learn with Sarah Johnson - Head <br/>of Product Customer Platform Gojek Indonesia.</p>
            <div className=' flex flex-col md:flex-row   gap-4 md:gap-6 mt-5'>
                <div className='flex  items-center  gap-1'>
                    <TiStarOutline className=' text-yellow-500' />
                    <p >4.5</p>
                </div>
                <div  className='flex items-center gap-1  '>
                    <MdOutlineLocationOn  className=' text-red-500 '/>
                    <a href={mapLink} target="_blank" rel="noopener noreferrer">{address}</a> 
                </div>
                <div className='flex items-center gap-1'>
                <LuGraduationCap className=' text-green-700 ' />
                <p>32 class</p>
                </div>
            </div>
            <div className=' mt-4 flex  items-start md:items-center gap-4 md:gap-14 mb-5 flex-col md:flex-row '>
                    <div className='flex items-center gap-1'>
                    <div className='border-2 bg-[#81B692]  px-1 py-1 rounded-lg text-white'><FaUserGraduate  /></div> 
                    <p>784 students</p>
                    </div>
                    <div className=' flex items-center gap-1 '>
                    <div className='border-2 bg-[#81B692]  px-1 py-1 rounded-lg text-white'><PiVideoFill /></div>
                    <p>30 courses </p>
                    </div>
            </div>
            </div>
            <div className='bg-[#FFFBE6] mt-5 mb-5 rounded-xl  order-1 lg:order-2  pr-0  self-start lg:self-center  '>
                <div className=' mt-4 mb-4   my-auto'>
                <img src="./src/assets/pic4.jpg" alt="" className=' rounded-xl w-36 sm:w-72 h-auto mr-3 ml-3  object-top flex  flex-shrink-0 overflow-hidden  mx-auto  md:w-[250px] md:h-[230px]     ' />
                <p className='   font-semibold text-lg  text-[#559268]   mr-3 ml-3  '>Mohamed Amine</p>
                <p className='    text-sm font-normal mr-3 ml-3     '>Algebra & Geometry <br className='block sm:hidden' />made<br className='hidden sm:block'/> simple.</p>
                </div>
            </div>
       </div>
    </div>
  );
}
