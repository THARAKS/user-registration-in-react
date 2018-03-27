import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import DashBoard from './DashBoard'
import RegisterUser from './RegisterUser';
import { Redirect } from 'react-router';
import NotFoundRoute from './NotFoundRoute'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/RegisterUser' component={RegisterUser} />
      <Route exact path='/DashBoard' component={DashBoard} />
      <Route path='*' to={Login} />
    </Switch>
  </main>
)

export default Main;