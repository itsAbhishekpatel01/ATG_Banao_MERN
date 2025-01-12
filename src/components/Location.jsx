import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Location = () => {
  const [locationOpened, setLocationOpened] = React.useState('')
  return (
    <div className='flex flex-col gap-7 '>
      <div className='flex gap-2 items-center border-b border-neutral-300 pb-2 justify-between'
      onClick={()=>setLocationOpened(!locationOpened)}>
        <div className='flex gap-2 items-center'>
        <IoLocationOutline/>
        <input type="text" className='outline-none ' placeholder='Enter your location'/>
        </div>
        {
          locationOpened ? (<RxCross2 />):(<MdEdit />)
        }
      </div>
      <div className='flex gap-2 text-neutral-500'>
        <span><IoIosInformationCircleOutline className='text-lg'/></span>
        <p className='text-xs text-neutral-500'>Your location will help us serve better and extend a personalised experience.</p>
      </div>
    </div>
  )
}

export default Location