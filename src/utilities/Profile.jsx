import React from 'react'
import { IoShareSocialSharp } from 'react-icons/io5'
import { LuEye } from 'react-icons/lu'

const Profile = ({logo,name}) => {
  return (
    <div className='flex items-center justify-between gap-2 w-full'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt="" />
          <div className='flex flex-col lg:flex-row lg:items-center lg:gap-2'>
            <h1 className='font-semibold text-md'>{name}</h1>
            <LuEye className='hidden lg:block'/>
            <p>1.4k views</p>
          </div>
        </div>
          
        <span className='p-2 ml-5 bg-neutral-200 lg:text-2xl rounded-md flex items-center gap-1'><IoShareSocialSharp/>Share</span>
    </div>
  )
}

export default Profile