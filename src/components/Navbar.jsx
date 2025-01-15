import React from 'react'
import { Link } from 'react-router'

function Navbar() {

  return (

    <div className='shadow bg-white mt-5 px-5 '>

      <div 
      className='container mx-auto items-center justify-between flex gap-4 md:gap-10 py-5  font-bold text-blue-950'
      >

        <div className='flex gap-4 md:gap-8 text-[12px] sm:text-lg md:text-2xl'>
    
          <Link to="/" className='hover:text-blue-700 duration-200 hover:underline'>Mening lug`atlarim</Link>
          <Link to="/test" className='hover:text-blue-700 hover:underline duration-300'>Test</Link>
        </div>  
    
        <div className='flex gap-7 text-[12px] sm:text-lg md:text-2xl'>
    
          <Link to="/words" className='hover:text-blue-700 duration-200 hover:underline'>Barcha lug`atlar</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar