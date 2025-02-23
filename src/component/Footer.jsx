import React from 'react'

const Footer = () => {
  return (
    <div className=' max-w-[1240px] py-16 mx-auto grid lg:grid-cols-3 gap-8 px-4'>
     
            <div className='  '>
                <h1 className='text-3xl w-full font-bold text-[#00df9a] cursor-pointer mb-4'>REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum natus magni ratione, aliquid dicta a unde eum sequi voluptatibus.</p>
            </div>

            <div className="lg:col-span-2 flex justify-between">
                <div>
                   <h1 className='font-bold text-2xl'>Solution</h1>
                   <p className='my-2'>Analytics</p>
                   <p className='my-2'>Marketing</p>
                   <p className='my-2'>Commerce</p>
                   <p className='my-2'>Insights</p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Support</h1>
                    <p className='my-2'>Pricing</p>
                   <p className='my-2'>Documentation</p>
                   <p className='my-2'>Guides</p>
                   <p className='my-2'>API Status</p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Company</h1>
                    <p className='my-2'>About</p>
                   <p className='my-2'>Blog</p>
                   <p className='my-2'>Jobs</p>
                   <p className='my-2'>Press</p>
                   <p className='my-2'>Partners</p>
                </div> 
                
                <div>
                    <h1 className='font-bold text-2xl'>Company</h1>
                    <p className='my-2'>About</p>
                   <p className='my-2'>Blog</p>
                   <p className='my-2'>Jobs</p>
                   <p className='my-2'>Press</p>
                   <p className='my-2'>Partners</p>
                </div>
            </div>
    </div>
  )
}

export default Footer