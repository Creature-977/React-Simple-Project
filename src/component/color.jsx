import React, { useState } from 'react'

const color = () => {

    const [color, setColor] = useState("#000000");



    function handleColorChange(e){
        setColor(e.target.value);
    }


  return (
    <>
    <div className='color-picker-container'>
        <h1> Color Picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>Color Code {color}</p>
        </div>
        <label>Select a color:</label>
        <input type="color"  onChange={handleColorChange} />
    </div>

   
    </>
  )
}

export default color