import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Container from './components/container'
import Users from './components/users'
function App() {
  return (
  <Router>
    <Container>
      <div style={{padding: '0 20px'}}>
        <Switch>
          <Redirect exact from='/' to='/users' />
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    </Container>
  </Router>
  );
}

export default App;
