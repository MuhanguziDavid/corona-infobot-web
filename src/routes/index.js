import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../containers/authentication/login';
import Signup from '../containers/authentication/signup';
import Dashboard from '../containers/dashboard/dashboard';
import InputForm from '../containers/inputForms/inputForm';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/input" component={InputForm} />
  </Switch>
)

export default Routes;
