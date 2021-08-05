import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Container from './components/container'
import Users from './components/users'
import Header from './components/header/'
import AddUser from './components/addUser'
import Groups from './components/groups'
import AddGroup from './components/addGroup'

import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

function App() {
  return (
  <Router>
    <Container>
      <Route history={history} path="/" component={Header} />
      <div style={{padding: '0 20px'}}>
        <Switch>
          <Redirect exact from='/' to='/users' />
          <Route exact path="/users" component={Users} />
          <Route exact path="/user/add" component={AddUser} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/group/add" component={AddGroup} />
        </Switch>
      </div>
    </Container>
  </Router>
  );
}

export default App;
