import {React, useEffect, useState} from 'react';

import './Key.css'
// import Global from '../Global.js'

const PianoKey = ({ note, key_color, 
    noteFromKey
}) => {
    const [pressedNote, setPressedNote] = useState("unpressed")
    console.log("Press Status: ", `${note} is ${pressedNote}`)
    const [color, setColor] = useState(key_color)
    console.log("Color Status: ", `${note} is ${color}`)

    const keyPress = () => {
        setPressedNote("pressed")
        setColor("blue")
        setTimeout(()=>{
            setPressedNote("unpressed")
            setColor(key_color)
        }, 100)
    }

    useEffect(()=>{
        if (pressedNote === "pressed") {
            noteFromKey(note)
        }
    })
    // useEffect(()=>{
    //     if (pressedNote === "pressed") {
    //         handleDataFromKey(note)
    //     } 
        // else {
        //     handleDataFromKey("")
        // }
    // },[])

    
    
    return (
        <div className={color} onClick={keyPress}>{note}</div>
    )
}

export default PianoKey