import React from 'react'
import single from '../../public/images/single.png'
import double from '../../public/images/double.png'
import triple from '../../public/images/triple.png'

const Cards = () => {

    const product_data = [
        {
            id: 1,
            img: single,
            user: "Single User",
            price: "$149",
            rom: "500GB Storage",
            granted: "1 Granted User",
            transfer: "Send up to 2GB",
            button: "Start Trail"
        },
        
        {
            id: 2,
            img: double,
            user: "Double User",
            price: "$200",
            rom: "1TB Storage",
            granted: "1 Granted User",
            transfer: "Send up to 2GB",
            button: "Start Trail"
        },

        {
            id: 3,
            img: triple,
            user: "Triple User",
            price: "$300",
            rom: "3TB Storage",
            granted: "1 Granted User",
            transfer: "Send up to 2GB",
            button: "Start Trail"
        },
    ]

    return (
        <>
            <div className='w-full py-[10rem] px-4 bg-white text-black'>
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
                    {product_data.map((data) => (
                        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105  hover:inset-shadow-green-900 duration-300 hover:shadow-[0px_0px_13px_rgba(0,0,255,0.8)] ">
                            <img className='w-20 mx-auto mt-[-2.5rem] bg-white' src={data.img} alt="" />
                            <h2 className='text-2xl font-bold text-center py-8'>{data.user}</h2>
                            <p className='text-center text-4xl font-bold'>{data.price}</p>
                            <div className='text-center font-em'>
                                <p className='py-2 border-b mx-8 mt-8'>{data.rom}</p>
                                <p className='py-2 border-b mx-8 '>{data.granted}</p>
                                <p className='py-2 border-b mx-8 '>{data.transfer}</p>
                                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 cursor-pointer duration-450 
                                hover:text-[#00df9a] 
                                hover:bg-gray-800'>{data.button}</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Cards