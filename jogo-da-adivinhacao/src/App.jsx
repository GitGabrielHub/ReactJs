import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GamePage from './pages/game'
import HomePage from './pages/home'
import EndPage from './pages/end'

const data = [
   { placing: 1, name: "Gabriel", time: "0m2s", attempts: 2, answer: 7 },
   { placing: 2, name: "Ga", time: "0m24s", attempts: 8, answer: 3 },
   { placing: 3, name: "Briel", time: "0m55s", attempts: 15, answer: 5 },
   { placing: 4, name: "Abriel", time: "1m0s", attempts: 19, answer: 2 },
   { placing: 5, name: "Airla", time: "1m10s", attempts: 22, answer: 131 },
   { placing: 6, name: "Airla", time: "1m10s", attempts: 22, answer: 131 },
   { placing: 7, name: "Airla", time: "1m10s", attempts: 22, answer: 131 },
   { placing: 8, name: "Airla", time: "1m10s", attempts: 22, answer: 131 },
   { placing: 9, name: "Airla", time: "1m10s", attempts: 22, answer: 131 },
   { placing: 10, name: "Airla", time: "1m10s", attempts: 22, answer: 131 },
   { placing: 11, name: "Last", time: "1m10s", attempts: 22, answer: 131 },
]

const App = () => (
   <Switch>
      <Route exact path = "/" component = {() => <HomePage data = {data}/>}/>
      <Route exact path = "/game/:playerName" component = {GamePage}/>
      <Route exact path = "/end" component = {EndPage}/>
   </Switch>
)

export default App

