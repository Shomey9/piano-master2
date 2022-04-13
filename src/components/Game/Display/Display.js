import React, { useEffect, useState } from 'react'

const Display = () => {
    const [display, setDisplay] = useState("Empty")
    // useEffect    (()=>{
    //     setDisplay(sendDisplayDown)
    // },[])
    
    return (
        <div>{display}</div>
    )
}

export default Display