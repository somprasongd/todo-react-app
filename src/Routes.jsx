import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Todo from './features/todo';
import Dashboard from './features/dashboard';
import About from './features/about';
import NotFound from './components/NotFound';
import App from './App';

const Routes = () => (
  <App>
    <Switch>
      <Route path="/todos" component={Todo} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/about" component={About} />
      <Redirect from="/" exact to="/todos" />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default Routes;
