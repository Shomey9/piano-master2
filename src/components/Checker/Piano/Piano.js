import React from 'react'

import Global from '../../Global.js'
import Key from './Key/Key.js'
import './Piano.css'

const Piano = ({sendUserAnswerUp}) => {

    const keys = []
    const fullpiano = new Array(Global.octaves).fill(keys)
    for (let i = 0; i < Global.keys.length; i++) {
        keys.push(
            <Key 
                note={Global.keys[i]} 
                sendUserAnswerUp={sendUserAnswerUp}
                key={i} 
            />
        )
    }

    return (
        <div>{fullpiano}</div>
    )
}

export default Piano;