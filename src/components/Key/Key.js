import React from 'react';

import './Key.css'
// import Global from '../Global.js'

const Key = ({note}) => {
    let color
    if (note.length > 1) {
        // console.log(`${note}: `, "black")
        color = "black"
    } else {
        // console.log(`${note}: `, "white")
        color = "white"
    }
    const handleClick = () => {
        console.log("Pressed Key: ", note)
    }
    return(
        <div className={color} onClick={handleClick}>{note}</div>
    )
}

export default Key