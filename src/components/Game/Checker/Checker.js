import React, { useEffect, useState } from 'react'

import Display from './Display/Display.js'
import Piano from './Piano/Piano.js'
import Testanswer from './Testanswer/Testanswer.js'

const Checker = () => {
    

    const handleDataFromPiano = (pressedkey) => {
        // setUserAnswer(pressedkey)
        // console.log(pressedkey)
        // if (pressedkey==="nothing") {
            // console.log("pressed key: ",userAnswer)
        // } else {
            // console.log("pressed key: ",userAnswer)
        // }
    }
    const handleDataFromGame = (answer) => {
        // console.log("Answer:" , answer)
        // setAnswer(answer)
    }

    return (
        <div>
            <Display />
            <Testanswer />
            <Piano />
            
        </div>
    )
}

export default Checker
