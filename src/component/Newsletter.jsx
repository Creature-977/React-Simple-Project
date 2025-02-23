import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 bg-black px-4'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
            <div className='lg:cols-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optmize your flow?</h1>
                <p>Sign up to your newsletter and stay up to date.</p>
            </div>
            <div className="my-4">
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md ' type="text" placeholder='Enter Email' name="" id="" />
                    <button className='
                    bg-[#00df9a] 
                    text-black w-[200px] 
                    rounded-md font-medium my-6 mx-auto 
                    md:mx-0 py-3 
                    hover:shadow-green-600 
                    duration-300 
                    hover:shadow-[0px_0px_13px_rgba(0,0,255,0.8)]'>Notify Me</button>
                </div>
            <p>We care about the protection of your data. Read out <span className='text-[#00df9a]'>Privacy Policy.</span></p>
            </div>

        </div>
    </div>
  )
}

export default Newsletter
