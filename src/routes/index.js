import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../containers/authentication/login';
import Signup from '../containers/authentication/signup';
import Dashboard from '../containers/dashboard/dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
)

export default Routes;
