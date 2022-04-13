import React, { useEffect, useState } from 'react'

import Display from '../Game/Display/Display.js'
import Key from '../Game/Piano/Key/Key.js'
import Testanswer from '../Game/Testanswer/Testanswer.js'

const Checker = () => {
    // const [display, setDisplay] = useState("")
    // const [userAnswer, setUserAnswer] = useState("noanswer")
    const [answer, setAnswer] = useState("unselected")
    const [pressed, setPressed] = useState("")

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
        setAnswer(answer)
    }

    useEffect(()=>{
        // console.log(userAnswer)
        // console.log(answer)
        // console.log(pressed)
    },[
        // userAnswer
    ])
    useEffect(()=>{

    })
    

    // const check = () => {
    //     console.log("hello")
        // if (userAnswer === "unpressed") {
        //     console.log("hello")
        //     // setDisplay("Empty")
        // } 
        // else if (userAnswer.includes(answer)===true) {
        //     setDisplay("correct")
        // } else {
        //     setDisplay("incorrect")
        // }   
    // }

    // if (userAnswer==="C") {
    //     console.log("hello")
    // }

    // useEffect(()=>{
    //     check()
    // },[userAnswer])

    

    // if (userAnswer === answer) {
        // setDisplay("correct")
    // }

    return (
        <div>
            <Game 
                // sendDisplayDown={""}
                // userAnswer={userAnswer}
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