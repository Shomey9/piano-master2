import React from 'react'

import './Game.css'
import Display from './Display/Display'
import Gbutton from './Gbutton/Gbutton'


const Game = ({sendAnswerUp,sendDisplayDown}) => {

    return (
        <div>
            {/* <Display sendDisplayDown={sendDisplayDown} /> */}
            <Gbutton sendAnswerUp={sendAnswerUp} />  
        </div>
    )
}

export default Game