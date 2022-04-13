import React, { useEffect, useState } from 'react'

const Display = ({check,sendDisplayDown}) => {
    const [display, setDisplay] = useState("Empty")
    useEffect    (()=>{
        setDisplay(sendDisplayDown)
    },[])
    
    return (
        <div>{display}</div>
    )
}

export default Display