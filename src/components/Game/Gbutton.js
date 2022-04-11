import {React, useState} from 'react'

// import Global from '../Global.js'
import './Gbutton.css'
import Rnote from './Rnote.js'

const Gbutton = () => {
    const [play, setPlay] = useState(true)
    // const [quit, setQuit] = useState(false)
    const handleClick = () => {
        setPlay(!play)
        // setQuit(!quit)
    }

    return(
        (play === true ?
            <button onClick={handleClick}> PLAY</button>
            :
            <Rnote /> 
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