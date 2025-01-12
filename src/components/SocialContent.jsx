import React from 'react'
import RecommendedGroups from './RecommendedGroups'
import Article from '../utilities/Article'
import Education from '../utilities/Education'
import Meetup from '../utilities/Meetup'
import Job from '../utilities/Job'
import Location from './Location'

const SocialContent = () => {
return (
    <div className='lg:w-3/4 w-full relative lg:flex-row  mx-auto flex justify-between gap-20'>
        {/* Posts */}
        <div className='flex flex-col pt-2 gap-3 w-full mx-auto'>
            <Article/>
            <Education/>
            <Meetup/>
            <Job/>
        </div>
        {/* Location & Recommended Groups */}
        <div className='hidden lg:flex flex-col mt-10 gap-10'>
            <Location/>
            <RecommendedGroups/>
        </div>
        
    </div>
)
}

export default SocialContent