import React from 'react'
import Profile from './Profile'
import { IoShareSocialSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Meetup = () => {
  return (
    <div className='flex flex-col gap-3 border rounded-md border-neutral-300'>
      <img src="meetup.png" alt="article" />
      <div className='px-4 pb-4 flex flex-col gap-4'>
      <h2 className='text-xl font-semibold'>  🗓️ Meetup</h2>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold text-wrap'>Finance & Investment Elite Social Mixer @Lujiazui</h1>
        <BsThreeDots className='text-4xl text-neutral-700'/>
      </div>
      {/* Data, Time and Location */}
      <div className='flex gap-40 items-center text-neutral-700 font-semibold'>
        <span className='flex gap-2 items-center'>
          <MdDateRange />
          <p>Fri, 12 Oct, 2018</p>
        </span>
        <span className='flex gap-1 items-center'>
          <IoLocationOutline />
          <p>Ahmedabad, India</p>
        </span>
      </div>
      {/* Visit Website Button */}
      <button className='hover:bg-neutral-100 hover:text-orange-500 text-orange-600 font-semibold py-2 transition-all duration-300 active:border-orange-600 rounded-xl border'
      >Visit Website </button>
      {/* Profile, Eye, Views and Share */}
      <div className='flex justify-between items-center'>
      <Profile logo={'ronal.png'} name={"Ronal Jones"}/>      
  
      </div>
      </div>
    </div>
  )
}

export default Meetup