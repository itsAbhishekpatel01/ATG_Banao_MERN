import React, { useState } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";

const Banner = () => {
    const [joined, setJoined] = useState(false)
return (
    <div className={`bg-cover bg-center bg-[url('banner.png')] h-60 md:h-96 lg:h-[30rem]`} >
        {/* Wrapper */}
        <div className=' flex flex-col justify-around h-full px-5 sm:px-16 lg:justify-end lg:pb-16'>
        {/* Array and Leave Group */}
        <div className='flex justify-between items-center mx-3 lg:hidden'>
        <IoArrowBackOutline className='text-white text-4xl cursor-pointer active:border transition-all duration-300 p-1 rounded'/>
        <button onClick={() => setJoined(!joined)} className=' text-white font-semibold px-3 py-2 rounded-md bg-transparent border hover:border-transparent hover:bg-slate-900 hover:bg-opacity-10  mt-2 ml-2'>
            {joined ? 'Leave Group' : 'Join Group'}
        </button>
        </div>
        {/* Text */}
        <div className='flex flex-col text-white justify-end   ml-4'>
            <h1 className='text-3xl md:text-4xl font-semibold text-nowrap'>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
        </div>
        </div>
    </div>
)
}

export default Banner