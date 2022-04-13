import React, { useEffect, useState } from 'react'

import Game from './Game/Game.js'
import Piano from './Piano/Piano.js'

const Checker = () => {
    // const [display, setDisplay] = useState("")
    const [userAnswer, setUserAnswer] = useState("")
    const [answer, setAnswer] = useState("")
    
    
    // let Answer = "Right or Wrong?"
    // const handleClick = () => {
    //     if (userAnswer === Answer) {
    //         Answer = "Correct"
    //     } else {
    //         Answer = "False"
    //     }
    // }

    const handleDataFromGame = (answer) => {
        console.log("Answer:" , answer)
        setAnswer(answer)
    }
    const handleDataFromPiano = (useranswer) => {
        console.log("User Answer: ", useranswer)
        setUserAnswer(userAnswer)
    }

    const check = () => {
        // console.log("hello")
        if (userAnswer === "unpressed") {
            console.log("hello")
            // setDisplay("Empty")
        } 
        // else if (userAnswer.includes(answer)===true) {
        //     setDisplay("correct")
        // } else {
        //     setDisplay("incorrect")
        // }   
    }

    if (userAnswer==="C") {
        console.log("hello")
    }

    useEffect(()=>{
        check()
    },[])

    

    // if (userAnswer === answer) {
        // setDisplay("correct")
    // }

    return (
        <div>
            <Game 
                // sendDisplayDown={""}
                sendAnswerUp={handleDataFromGame} 
            />
            <Piano
                // onClick={check} 
                sendUserAnswerUp={handleDataFromPiano} 
            />
        </div>
    )
}

export default Checker