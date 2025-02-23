import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const[nav, setNav] = useState(true)
  const handleNav=()=>{
    setNav(!nav)
  }
const scroll = "<< Designed By Creature >>"

  return (
    <>
    <div className='font-bold mb-0 text-2xl text-gray-600'>
      <marquee behavior="scroll" direction="">{scroll}</marquee>
    </div>
    <div className=" flex justify-between items-center h-16 max-w-[12] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-emerald-300 cursor-pointer'>Home</li>
        <li className='p-4 hover:text-emerald-300 cursor-pointer'>Company</li>
        <li className='p-4 hover:text-emerald-300 cursor-pointer'>Resources</li>
        <li className='p-4 hover:text-emerald-300 cursor-pointer'>About</li>
        <li className='p-4 hover:text-emerald-300 cursor-pointer'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineMenu size={20}/>: <AiOutlineClose size={20}/>}
      </div>
      <div className={ nav ?  'fixed left-[-100%]': 'fixed left-0 top-0 w-[60%] bg-[#000300] border-r-gray-900 ease-in-out duration-700'}>
        <h1 className='w-full text-3xl m-4 font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 '>Contact</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar

