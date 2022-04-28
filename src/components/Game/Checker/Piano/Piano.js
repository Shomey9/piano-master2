import React, { useEffect } from 'react'

import Global from '../../../Global.js'
import PianoKey from './Key/Key.js'
import './Piano.css'


const Piano = (
    {noteFromPiano}
    ) => {
    const pianotorender = []
    const fullpiano = new Array(Global.octaves).fill(pianotorender)
    let noteInPiano = ""

    // const noteFromKey = (userAnswer) => {
    //     noteInPiano = userAnswer
    //     setTimeout(()=>{
    //         noteInPiano=""
    //     }, 3000)
    // }
    // console.log("Note from Key to Piano Component: ", noteInPiano)


    for (let i = 0; i < Global.piano_keys.length; i++) {
        let key_color
        if (Global.piano_keys[i].length > 1) {
            key_color = "black"
        } else {
            key_color = "white"
        }
        pianotorender.push(
            <PianoKey 
                note={Global.piano_keys[i]} 
                key_color={key_color}
                noteFromKey={noteFromPiano}
                key={i} 
            />
        )
    }

    // useEffect(()=>{
    //     console.log(noteInPiano)
    //     noteFromPiano(noteInPiano)
    // })

    return (
        <div>{fullpiano}</div>
    )
}

export default Piano;