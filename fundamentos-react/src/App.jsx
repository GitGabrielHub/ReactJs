import React from 'react'
import First from './components/basics/First'
//import WithParam from './components/basics/WithParam'
import WithChildren from './components/basics/WithChildren'
import Card from './components/layout/Card'
import Repetition from './components/basics/Repetition'
import './App.css'
import Condicional from './components/basics/Condicional'


export default _ => (
    <div className="App">
        <Card titulo="Componente com filhos">
            <Condicional number = {3}/>
        </Card>
        <Card titulo="Componente com filhos">
            <Repetition />
        </Card>
        <Card titulo="Componente com filhos">
            <WithChildren>
                <ul>
                    <li>Ana</li>
                    <li>Maria</li>
                    <li>Gabriel</li>
                    <li>Airla</li>
                    <li>Guilherme</li>
                </ul>
            </WithChildren>
        </Card>
        <Card titulo='Primeiro Componente'>
            <First />
        </Card>
        <Card titulo='Exercício X'>
            Conteudo
    </Card>

    </div>
)