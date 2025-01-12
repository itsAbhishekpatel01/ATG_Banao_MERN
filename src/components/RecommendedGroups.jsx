import React from 'react'
import { PiThumbsUpDuotone } from "react-icons/pi";


const Profile = ({logo, name}) => {
  const [followed, setFollowed] = React.useState(false)
  return (
    <div className='flex justify-between items-center gap-5 rounded-lg'>
      <div className='flex gap-4 items-center'>
        <img src={logo} alt="logo" className='h-10 w-10 rounded-full' />
        <p>{name}</p>
      </div>
      {
        followed ? 
        <button 
          onClick={() => setFollowed(false)} 
          className='text-white bg-black rounded-full px-2 py-1 transition duration-300 ease-in-out transform hover:scale-105'
        >
          Followed
        </button> 
        : 
        <button 
          onClick={() => setFollowed(true)} 
          className='text-blue-500 px-3 bg-neutral-100 rounded-full transition duration-300 ease-in-out transform hover:scale-105'
        >
          Follow
        </button>
      }
    </div>
  )
}


const RecommendedGroups = () => {
  return (
    <div className='text-neutral-800 flex flex-col gap-5'>
      <h2 className='flex items-center gap-1 tracking-wide'> <span><PiThumbsUpDuotone className='text-xl'/></span> RECOMMENDED GROUPS</h2>
      <Profile logo={'leisure.png'} name={'Leisure'}/>
      <Profile logo={'activism.png'} name={'Activism'}/>
      <Profile logo={'mba.png'} name={'MBA'}/>
      <Profile logo={'philosophy.png'} name={'Philosophy'}/>
      <div className='flex justify-end mt-10'><p className='text-blue-500 cursor-pointer'>See More...</p></div>
    </div>
  )
}

export default RecommendedGroups