import {React, useState} from 'react';

import './Key.css'
// import Global from '../Global.js'

const Key = ({note}) => {
    const [pressedNote, setPressedNote] = useState("")
    let color
    if (note.length > 1) {
        // console.log(`${note}: `, "black")
        color = "black"
    } else {
        // console.log(`${note}: `, "white")
        color = "white"
    }
    const handleClick = () => {
        // console.log("Pressed Key: ", note)
        setPressedNote(note)
    }

    return (
        <div className={color} onClick={handleClick}>{note}</div>
    )
}

export default Key