import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GamePage from './pages/game'
import HomePage from './pages/home'
import EndPage from './pages/end'

const App = () => (
   <Switch>
      <Route exact path = "/" component = {HomePage}/>
      <Route exact path = "/game/:playerName" component = {GamePage}/>
      <Route exact path = "/end" component = {EndPage}/>
   </Switch>
)

export default App

