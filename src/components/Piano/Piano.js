import React from 'react'

import Global from '../Global.js'
import Key from '../Key/Key.js'

const Piano = () => {

    const keys = []
    const fullpiano = new Array(Global.octaves).fill(keys)
    for (let i = 0; i < Global.notes.length; i++) {
        keys.push(
            <Key note={Global.notes[i]} key={i} />
        )
    }

    return(
        <div>{fullpiano}</div>
    )
}

export default Piano;