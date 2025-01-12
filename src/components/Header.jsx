import React from 'react'
import { FaSearch } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <div className='hidden lg:flex justify-around items-center py-3 px-16 shadow-b shadow'>
        {/* Logo */}
        <div className='cursor-pointer'>
            <img src="logo.png" alt="logo" className='h-9'/>
        </div>
        {/* Search Bar */}
        <div className='flex items-center bg-neutral-100 rounded-full w-96 py-2 gap-4'>
            <FaSearch className='text-neutral-500 text-md ml-5'/>
            <input
            className=' bg-neutral-100 outline-none placeholder:text-neutral-600 w-5/6 px-2'
            placeholder='Search for your favorite groups in ATG'>
            </input>

        </div>
        {/* Create Account */}
        <div className='flex items-center gap-1 cursor-pointer'>
            <p>Create Account.</p>
            <p className='text-blue-700 font-semibold'>It's Free!</p>
        </div>
    </div>
  )
}

export default Header