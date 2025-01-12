import React, { useState } from 'react'
import { FaUserPlus, FaCaretDown } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";

const SocialNavbar = () => {
    const [joined, setJoined] = useState(false)
    const [activeButton, setActiveButton] = useState(0);

const handleButtonClick = (index) => {
    setActiveButton(index); 
};
return (
    <div className='lg:flex justify-between w-3/4 mx-auto py-4 border-b-2 border-neutral-200 hidden'>
    <nav className="flex gap-3 text-neutral-500 items-center">
    {["All Posts (32)", "Article", "Event", "Education", "Job"].map((item, index) => (
        <button
        key={index}
        onClick={() => handleButtonClick(index)}
        className={`relative focus:outline-none hover:text-black ${
        activeButton === index ? "text-black underline-active" : ""
        }`}
        >
        {item}
        </button>
    ))}
    </nav>
        {/* Write post & Join group */}
        <div className='flex gap-3'>
            <button className='bg-neutral-200 flex-grow max-w-[150px] group px-3 py-1 flex gap-3 items-center rounded font-semibold'>Write a Post
            <FaCaretDown className='transition-all group-hover:rotate-180 duration-300'/>
                </button>
            { joined ? (
            <button onClick={() => setJoined(!joined)}
            className='bg-blue-600  px-5 py-1 flex items-center gap-1 rounded text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105'>
                <FaUserPlus className='text-2xl'/>
                Join Group
                </button>
            ):(
            <button onClick={() => setJoined(!joined)}
            className=' px-3 py-1 flex gap-1 items-center rounded border border-neutral-400 text-neutral-600  font-semibold transition duration-300 ease-in-out transform hover:scale-105'>
                <IoMdExit className='text-2xl'/>
                Leave Group
            </button>) }
        </div>
    </div>
)
}

export default SocialNavbar