import React, { useState } from 'react'


const ChangeColoe = () => {

    const[colour, setColour] = useState("#000000")

    function handleColour(e){
        setColour(e.target.value)
    }

    console.log(colour)

  return (
    <div>
        <p style={{color:colour}} >"This is the colour and the colour code is : ${colour}"</p>
        <input type="color" onChange={handleColour}/>

        <h1 className='text-3xl'>This is the demo for H1</h1>
    </div>
  )
}

export default ChangeColoe