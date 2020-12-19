import React, {useState} from 'react'
import Sub from './Sub'

export default props => {

    const [num, setNum] = useState(0)

    function onClick(generetedValue) {
        console.log("Action!!!")
        console.log(generetedValue)
        setNum(generetedValue)
    }

    return (
        <div>
            <h4>{num}</h4>
            <Sub surname="Joaquina" onClick = {onClick}>Maria </Sub>
        </div>
    )
}