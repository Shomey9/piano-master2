import React from 'react'

import './Game.css'

import Display from './Display/Display.js'
import Testanswer from './Testanswer/Testanswer.js'
import Piano from './Piano/Piano.js'


const Game = ({sendAnswerUp,sendDisplayDown, userAnswer}) => {

    return (
        <div>
            {/* <Display /> */}
            <Testanswer />
            <Piano />
        </div>
    )
}

export default Game