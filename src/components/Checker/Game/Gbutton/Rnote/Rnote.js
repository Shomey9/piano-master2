import {React, useState, useEffect} from 'react'

import './Rnote.css'

import Global from '../../../../Global.js'

const Rnote = ({sendAnswerUp}) => {
    const [note, setNote] = useState(
        Global.notes[Math.floor(Math.random() * Global.notes.length)]
    )
    // const handleClick = () => {
    //     setNote(
    //         Global.notes[Math.floor(Math.random() * Global.notes.length)],
    //     )     
    //     sendAnswerUp(note)
    //     // rnoteData(note)      
    // }
    // sendAnswerUp(note)
    // console.log(note)


    useEffect(()=>{
    //     // console.log("Current Random Note: ", note)
        setNote(
            Global.notes[Math.floor(Math.random() * Global.notes.length)],
        )   
        sendAnswerUp(note)
    },[note])



    return (
        <div 
        // onClick={handleClick}
        >{note}</div>
    )
}

export default Rnote