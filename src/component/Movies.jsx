import React from 'react'

const Movies = () => {


  return (
    <div className='card-container flex flex-col justify-center bg-amber-800 '>
              <div className="card-img" >
                <img src="./public/images/deadpool.jpg" className='w-60' alt="" />
                </div>
              <div className="card-name">
                <h2>Encriao</h2>
              </div>
              <div className="rating-stars">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
              </div>
    </div>
  )
}

export default Movies