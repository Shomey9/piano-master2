import {React, useState, useEffect} from 'react'

import './Testanswer.css'

import Global from '../../../Global.js'

const Rnote = (
    // {handleDataFromGame}
    ) => {
    const [note, setNote] = useState(
        Global.notes[Math.floor(Math.random() * Global.notes.length)]
    )
    // console.log("Note: ", note)
    // const handleClick = () => {
    //     setNote(
    //         Global.notes[Math.floor(Math.random() * Global.notes.length)],
    //     )        
    // }
    
    //If Answer is Correect, change note after 1 second then make state empty.
    //If Answer incorrect, change keep note same then make state empty after 1 second. 
    // const checkCorrect = () => {
    //     console.log("userAnswer in Answer: ", userAnswer)
    // }
    // console.log("userAnswer in Answer: ", userAnswer)

    useEffect(()=>{
        // handleDataFromGame(note)
    },[])



    return (
        <div 
            // onClick={handleClick}
            >{note}</div>
    )
}

export default Rnote