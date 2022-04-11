import {React, useState, useEffect} from 'react'

import './Rnote.css'

import Global from '../Global.js'

const Rnote = () => {
    const [note, setNote] = useState(
        Global.notes[Math.floor(Math.random() * Global.notes.length)]
    )
    const handleClick = () => {
        setNote(
            Global.notes[Math.floor(Math.random() * Global.notes.length)],
            // console.log(note)
        )
        
    }
    useEffect(()=>{
        console.log("Current Random Note: ", note)
    })
    return(
        <div onClick={handleClick}>{note}</div>
    )
}

export default Rnote