import {React, useEffect, useState} from 'react';

import './Key.css'
// import Global from '../Global.js'

const Piano_Key = ({ note }) => {
    const [pressedNote, setPressedNote] = useState("nothing")
    const [color, setColor] = useState(null)
    const keyPress = () => {

        setPressedNote(note)
        console.log("pressedNote: ", note)

        setTimeout(()=>{setPressedNote("nothing")}, 1)
    }
    const key_color = () => {
        if (note.length > 1) {
            setColor("black")
        } else {
            setColor("white")
        }
    }
    
    useEffect(()=>{
        key_color()
    },[])

    // useEffect(()=>{
    //     sendUserAnswerUp(pressedNote)
        
    // },[pressedNote
    //     , sendUserAnswerUp
    // ])

    return (
        <div className={color} onClick={keyPress}>{note}</div>
    )
}

export default Piano_Key