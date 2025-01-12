import React from 'react'
import Profile from './Profile'
import { IoShareSocialSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { PiBagBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

const Job = () => {
  return (
    <div className='flex flex-col gap-3 border rounded-md border-neutral-300'>
      <div className='px-4 pb-4 flex flex-col gap-4'>
      <h2 className='text-xl font-semibold pt-2'>  💼️ Job</h2>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold text-wrap'>Software Developer</h1>
        <BsThreeDots className='text-4xl text-neutral-700'/>
      </div>
      {/* Company and Location */}
      <div className='flex gap-14 items-center text-neutral-700 font-semibold'>
        <span className='flex gap-2 items-center'>
          <PiBagBold className='text-xl'/>
          <p>Innovaccer Analytics Private Ltd.</p>
        </span>
        <span className='flex gap-1 items-center'>
          <IoLocationOutline />
          <p>Noida, India</p>
        </span>
      </div>
      {/* Visit Website Button */}
      <button className='hover:bg-neutral-100 hover:text-green-600 text-green-500 font-semibold py-2 transition-all duration-300 active:border-green-600 rounded-xl border'
      >Apply on Timesjobs </button>
      {/* Profile, Eye, Views and Share */}
      <div className='flex justify-between items-center'>
      <Profile logo={'joseph.png'} name={"Joseph Gray"}/>      
        
      </div>
      </div>
    </div>
  )
}

export default Job