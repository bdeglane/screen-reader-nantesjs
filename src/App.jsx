import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout, Header, Nav } from './components'
import { Home } from './pages/home'
import { LongText } from './pages/long-text'
import { Table } from './pages/table'
import { JsApp } from './pages/js-app'
import { Form } from './pages/form'

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
          <Route path="/tableau"><Table /></Route>
          <Route path="/form"><Form /></Route>
          <Route path="/js-app"><JsApp /></Route>
        </Switch>
      </Layout>
    </Router>
  )
}
