import React from 'react';

import './Key.css'
// import Global from '../Global.js'

const Key = ({note}) => {
    let color
    if (note.length > 1) {
        console.log(`${note}: `, "black")
        color = "black"
    } else {
        console.log(`${note}: `, "white")
        color = "white"
    }
    return(
        <div className={color}>{note}</div>
    )
}

export default Key