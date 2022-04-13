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
    // }
    


    useEffect(()=>{
        sendAnswerUp(note)
    },[note, sendAnswerUp])



    return (
        <div 
            // onClick={handleClick}
            >{note}</div>
    )
}

export default Rnote