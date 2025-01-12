import React from 'react'
import Profile from './Profile'
import { IoShareSocialSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { LuEye } from "react-icons/lu";

const Education = () => {
  return (
    <div className='flex flex-col gap-3 border rounded-md border-neutral-300 '>
      <img src="education.png" alt="article" />
      <div className='px-4 pb-4 flex flex-col gap-3'>
      <h2 className='text-xl font-semibold'>  🔬️ Education</h2>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold text-wrap'>Tax Benefits for Investment under National Pension Scheme launched by Government</h1>
        <BsThreeDots className='text-5xl text-neutral-700'/>
      </div>
      <p className='text-neutral-700'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
      {/* Profile, Eye, Views and Share */}
      <div className='flex justify-between items-center'>
      <Profile logo={'sarah.png'} name={"Sarah West"}/>      
        
      </div>

      </div>
    </div>
  )
}

export default Education