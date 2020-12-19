import React, { useState } from 'react'

export default props => {
    const [array, setArray] = useState([])
    const amount = props.amount || 6

    function genereteNumber(array) {
        const min = 1
        const max = 100
        const number = parseInt(Math.random() * (max - min)) + min
        return array.includes(number) ? genereteNumber(array) : number
    }

    function createArray() {
        const otherArray = []
        for (let i = 0; i < amount; i++) {
            otherArray.push(genereteNumber(otherArray))
        }
        otherArray.sort((a,b) => a-b)
        setArray(otherArray)
    }

    return (
        <div>
            <h2>Mega Sena</h2>
            {array.join(" ")}
            <div style={{ marginTop: 15 }} onClick={createArray}><button title="Gerar">Gerar</button></div>
        </div>
    )
}