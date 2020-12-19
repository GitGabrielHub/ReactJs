import React from 'react'
import Child from '../direct/Child'

export default props => {
    return (
        <div>
           <button onClick = {()=> {
               props.onClick(Math.random())
           }}>Alterar</button>
        </div>
    )
}