import {React, useEffect, useState} from 'react';

import './Key.css'
// import Global from '../Global.js'

const Key = ({ note, sendUserAnswerUp }) => {
    const [pressedNote, setPressedNote] = useState("unpressed")
    // const [color, setColor] = useState(null)
    let color
    const keyPress = () => {
        // console.log("Pressed Key: ", note)
        setPressedNote(note)
        setTimeout(()=>{setPressedNote("unpressed")}, 1)
    }
    if (note.length > 1) {
        // console.log(`${note}: `, "black")
        // setColor("black")
        color = "black"
    } else {
        // console.log(`${note}: `, "white")
        // setColor("white")
        color = "white"
    }
 
    useEffect(()=>{
        sendUserAnswerUp(pressedNote)
    },[pressedNote, sendUserAnswerUp])

    return (
        <div className={color} onClick={keyPress}>{note}</div>
    )
}

export default Key