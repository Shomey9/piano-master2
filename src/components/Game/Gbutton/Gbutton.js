import {React, useState} from 'react'

import './Gbutton.css'
import Rnote from './Rnote/Rnote.js'
import Checker from './Checker/Checker.js'

const Gbutton = () => {
    const [play, setPlay] = useState(true)
    const handleClick = () => {
        setPlay(!play)
    }
    // const dataFromRnote= (rnoteData) => {
    //     // dataToGame(rnoteData)
    //     console.log("Data Rnote to Gbutton: ", rnoteData)
    // }

    return (
        (play === true ?
            <button onClick={handleClick}> PLAY</button>
            :
            <div>
                <Checker />
                <Rnote 
                    // rnoteData={dataFromRnote} 
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