import React from 'react'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-black">
            <img className='w-[500px] mx-auto my-4' src="./public/images/pc.jpg" alt="/" />
            <div className=' flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Manage Data Analytics Centrally</h1>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti, explicabo ipsum officiis est deleniti placeat ut! Saepe impedit cupiditate, nostrum ex quisquam quibusdam?</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 cursor-pointer duration-450 hover:text-black hover:bg-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics