import {React, useEffect, useState} from 'react'

import './Gbutton.css'
import Rnote from './Rnote/Rnote.js'

const Gbutton = ({sendAnswerUp}) => {
    const [play, setPlay] = useState(true)
   

    const handleClick = () => {
        setPlay(!play)
    }

   
   

    return (
        (play === true ?
            <button onClick={handleClick}>PLAY</button>
            :
            <div>
                <Rnote 
                    sendAnswerUp={sendAnswerUp}
                />
            </div>
             
        )    
    )
}

// const Gbutton = () => {
//     const [play, setPlay] = useState(true)
//     const [quit, setQuit] = useState(false)
//     const handleClick = () => {
//         setPlay(!play)
//         setQuit(!quit)
//     }

//     return(
//         (play === true ?
//             <button onClick={handleClick}> PLAY</button>
//             :
//             <button onClick={handleClick}>QUIT</button>    
//         )    
//     )
// }

export default Gbutton