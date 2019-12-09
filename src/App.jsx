import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout, Header, Nav } from './components'
import { Home } from './pages/home'
import { LongText } from './pages/long-text'

export function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <Nav />
        </Header>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/long-text"><LongText /></Route>
        </Switch>
      </Layout>
    </Router>
  )
}
