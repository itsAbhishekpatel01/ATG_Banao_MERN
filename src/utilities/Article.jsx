import React from 'react'
import Profile from './Profile'
import { IoShareSocialSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { LuEye } from "react-icons/lu";

const Article = () => {
  return (
    <div className='flex flex-col gap-3 border rounded-md border-neutral-300  '>
      <img src="article.png" alt="article" className='h-44'/>
      <div className='px-4 pb-4 flex flex-col gap-3'>
      <h2 className='text-xl font-semibold'>  ✍️ Article</h2>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold text-wrap'>What if famous brands had regular fonts? Meet RegulaBrands!</h1>
        <BsThreeDots className='text-4xl text-neutral-700'/>
      </div>
      <p className='text-neutral-700'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
      {/* Profile, Eye, Views and Share */}
      <div className='flex justify-between items-center'>
      <Profile logo={'sarthak.png'} name={"Sarthak Kamra"}/>      
      </div>

      </div>
    </div>
  )
}

export default Article