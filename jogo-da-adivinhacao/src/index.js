import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Body from './components/main'

ReactDOM.render(
    (
        <Body>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Body>
    )
    ,
    document.getElementById('root')

)