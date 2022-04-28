import React, { useEffect, useState } from 'react'

import Display from './Display/Display.js'
import Piano from './Piano/Piano.js'
import Testanswer from './Testanswer/Testanswer.js'

const Checker = () => {
    // const [isItCorrect, setIsItCorrect] = useState("Pick an Answer")
    const [userNote, setUserNote] = useState("")
    console.log("User's Answer: ", userNote)
    // const [gameNote, setGameNote] = useState("")
    // let uAnswer=""
    // console.log(uAnswer)

    const noteFromPiano = (userAnswer) => {
        // console.log("Note from Piano component to Checker component: ", userAnswer)
        setUserNote(userAnswer)
        setTimeout(()=>{
            setUserNote("")
        }, 3000)
    }

    // const handleDataFromPiano = (pressedkey) => {
    //     console.log("User Answer: ", pressedkey)
    //     setUserNote(pressedkey)
    //     setTimeout(()=>{
    //         setUserNote("")
    //     }, 3000)
    // }
    // const handleDataFromGame = (answer) => {
        // console.log("Game Answer: ", answer)
        // setGameNote(answer)
    // }

    // useEffect(()=>{
    //     if (userNote === gameNote) {
    //         setIsItCorrect("Correct")
    //         setTimeout(()=>{
    //             setIsItCorrect("Pick an Answer")
    //         }, 3000)
    //     } else if (userNote === "") {
    //         setIsItCorrect("Pick an Answer")
    //     } else {
    //         setIsItCorrect("Incorrect")
    //         setTimeout(()=>{
    //             setIsItCorrect("Pick an Answer")
    //         }, 3000)
    //     }
    // }, [userNote, gameNote])

    return (
        <div>
            <Display 
                // isItCorrect={isItCorrect}
            />
            <Testanswer 
                // handleDataFromGame={handleDataFromGame}
            />
            <Piano 
                noteFromPiano={noteFromPiano}
            />
            
        </div>
    )
}

export default Checker
