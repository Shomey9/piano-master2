import React, { useState } from 'react'

import './Gbutton.css'

const Gbutton = () => {
    const [play, setPlay] = useState(true)
   

    const handleClick = () => {
        setPlay(!play)
    }

   
   

    return (
        (play === true ?
            <button onClick={handleClick}>PLAY</button>
            :
            <div>
            </div>
             
        )    
    )
}

export default Gbutton
