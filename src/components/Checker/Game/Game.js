import React from 'react'

// import Global from '../Global.js'
import Gbutton from './Gbutton/Gbutton'
import './Game.css'

const Game = ({sendAnswerUp}) => {

    return (
        <Gbutton sendAnswerUp={sendAnswerUp} />  
    )
}

export default Game