import React from 'react'
import First from './components/basics/First'
//import WithParam from './components/basics/WithParam'
import WithChildren from './components/basics/WithChildren'
import Card from './components/layout/Card'
import Repetition from './components/basics/Repetition'
import './App.css'
import Condicional from './components/basics/Condicional'
import Dad from './components/communication/direct/Dad'
import Super from './components/communication/indirect/Super'
import Input from './components/form/Input'
import Counter from './components/counter/Counter'
import Mega from './components/mega/Mega'


export default () => (
    <div className="App">
       <Card titulo="Exercício MEGA" color = "purple">
           <Mega amount = {10}/>
        </Card>
        <Card titulo="Exercício 10" color = "#293E6A">
           <Counter pass = {3.75} initValue = {5012.2346}/>
        </Card>
        <Card titulo="Comunicação indireta" color = "#9C0F5F">
           <Input/>
        </Card>
         <Card titulo="Comunicação indireta" color = "#000">
            <Super/>
        </Card>
        <Card titulo="Comunicação direta" color = "#4288b5">
            <Dad/>
        </Card>
        <Card titulo="Componente com filhos" color = "orange">
            <Condicional number = {3}/>
        </Card>
        <Card titulo="Componente com filhos" color = "#DA4624">
            <Repetition />
        </Card>
        <Card titulo="Componente com filhos" color = "#FF85CB">
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
        <Card titulo='Primeiro Componente' color = "#53BBF4 ">
            <First />
        </Card>
        <Card titulo='Exercício X' color = "#8C6954">
            Conteudo
        </Card>

    </div>
)