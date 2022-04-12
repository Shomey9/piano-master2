import React, { useState } from 'react'

import Game from './Game/Game.js'
import Piano from './Piano/Piano.js'

const Checker = () => {
    const [userAnswer, setUserAnswer] = useState("")
    const [answer, setAnswer] = useState("")
    
    
    let Answer = "Right or Wrong?"
    // const handleClick = () => {
    //     if (userAnswer === Answer) {
    //         Answer = "Correct"
    //     } else {
    //         Answer = "False"
    //     }
    // }

    const handleDataFromGame = (answer) => {
        console.log(answer)
    }
    const handleDataFromPiano = (useranswer) => {
        console.log(useranswer)
    }
    if (userAnswer === )

    return (
        <div>
            <div>{Answer}</div>
            <Game 
                sendAnswerUp={handleDataFromGame} 
            />
            <Piano 
                sendUserAnswerUp={handleDataFromPiano} 
            />
        </div>
    )
}

export default Checker