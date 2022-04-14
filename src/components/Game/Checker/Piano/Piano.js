import React from 'react'

import Global from '../../../Global.js'
import Piano_Key from './Key/Key.js'
import './Piano.css'


const Piano = () => {
    const pianotorender = []
    const fullpiano = new Array(Global.octaves).fill(pianotorender)
    for (let i = 0; i < Global.piano_keys.length; i++) {
        pianotorender.push(
            <Piano_Key 
                note={Global.piano_keys[i]} 
                key={i} 
            />
        )
    }

    return (
        <div>{fullpiano}</div>
    )
}

export default Piano;