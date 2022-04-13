import {React, useEffect, useState} from 'react';

import './Key.css'
// import Global from '../Global.js'

const Key = ({ note, sendUserAnswerUp }) => {
    const [pressedNote, setPressedNote] = useState("nothing")
    // const [color, setColor] = useState(null)
    let color
    const keyPress = () => {
        console.log(pressedNote)
        setPressedNote(note)
        setTimeout(()=>{setPressedNote("nothing")}, 1)
    }
    if (note.length > 1) {
        color = "black"
    } else {
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