import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import SocialNavbar from './components/SocialNavbar'
import SocialContent from './components/SocialContent'

const App = () => {
  return (
    <div className='relative'>
      <Header/>
      <Banner/>
      <div className='w-full flex flex-col align-middle justify-center '>
        <SocialNavbar/>
        <SocialContent/>
    </div>
      {/* <div className='lg:hidden absolute bottom-2 rounded-full  right-5 '>
              <img src="pencil.png" alt=""  className='h-20'/>
      </div> */}
    </div>
  )
}

export default App